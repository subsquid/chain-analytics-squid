import {
  ParsedEventsDataMap,
  BlockEventName,
  ParsedEventsData,
  CheckPointsKeys,
  TrackingMetrics,
  CHARTS,
  Chart,
} from './types'
import * as sto from '@subsquid/substrate-processor/lib/util/storage'

import * as ss58 from '@subsquid/ss58'
import { decodeHex, toHex } from '@subsquid/util-internal-hex'
import { getChain } from '../chains'
import { Block, Ctx } from '../processor'
import { EntityClass } from '@subsquid/typeorm-store'
import { SubstrateBlock, assertNotNull } from '@subsquid/substrate-processor'
import {
  BackupCounter,
  Current,
  DailyChart,
  FourHourlyChart,
  HourlyChart,
  MonthlyChart,
  WeeklyChart
} from '../model'

const chainConfig = getChain()

export function updateChart<T extends Chart>(
  ctx: Ctx,
  entityClass: EntityClass<T>,
  current: Current,
  intervalAccumultor: (i: Date) => Date
) {

  const lastChart = ChartsCache.getLatest(entityClass)
  const chartTimes = getTimePoints(
    lastChart.timestamp,
    current.lastUpdate,
    intervalAccumultor
  )
  if (chartTimes.length > 0) {
    ctx.log.info(`Updating ${entityClass.name} at ${chartTimes.map((date)=>date.toUTCString())}`)
    const newStats = fillStats(lastChart, current, chartTimes)
    // console.dir(current)
    // console.dir(newStats)
    ctx.store.deferredUpsert(newStats as any)
    ChartsCache.setLatest(entityClass, newStats[newStats.length - 1])

  }
}

export class ChartsCache {
  private static readonly cache: Map<EntityClass<Chart>, Chart> = new Map()

  private static _isInitialized: boolean = false
  public static get isInitialized(): boolean {
    return ChartsCache._isInitialized
  }

  static readonly setLatest = function <T extends Chart>(
    entityClass: EntityClass<T>,
    entity: T
  ): void {
    ChartsCache.cache.set(entityClass, entity)
  }

  static readonly getLatest = function <T extends Chart>(
    entityClass: EntityClass<T>
  ) {
    return assertNotNull(
      ChartsCache.cache.get(entityClass),
      'You have to initialize ChartCache before using'
    ) as T
  }

  static readonly init = async function (ctx: Ctx): Promise<void> {
    await Promise.all(
      CHARTS.map(async (Chart) => {
        const latestChartData = await ctx.store.find(Chart, {
          take: 1,
          order: { timestamp: 'DESC' }
        })
        if (latestChartData.length > 0) {
          ChartsCache.setLatest(Chart, latestChartData[0])
        } else {
          const chart = new Chart(CHART_INIT)
          const initDate = findClothestStartPoint(chart, ctx.blocks[0].header)
          chart.id = initDate.getTime().toString()
          chart.timestamp = initDate
          ChartsCache.setLatest(Chart, chart)
        }
      })
    )
    ChartsCache._isInitialized = true
  }
}

function findClothestStartPoint(chart: Chart, block: SubstrateBlock): Date {
  const blockDate = new Date(block.timestamp)
  blockDate.setUTCMinutes(0, 0, 0)
  if (chart instanceof HourlyChart) {
    return blockDate
  } else if (chart instanceof FourHourlyChart) {
    const curHour = blockDate.getUTCHours()
    const properHour = curHour - (curHour % 4)
    blockDate.setUTCHours(properHour)
    return blockDate
  } else if (chart instanceof DailyChart) {
    blockDate.setUTCHours(0)
    return blockDate
  } else if (chart instanceof WeeklyChart) {
    // 0 day is sunday, so we are have to move to 1
    const properDate = blockDate.getUTCDate() - (blockDate.getUTCDay() - 1)
    blockDate.setUTCDate(properDate)
    blockDate.setUTCHours(0)
    return blockDate
  } else if (chart instanceof MonthlyChart) {
    blockDate.setUTCDate(1)
    blockDate.setUTCHours(0)
    return blockDate
  } else {
    throw new Error(`Wrong chart type ${chart}`)
  }
}

export function getTimePoints(
  lastDate: Date,
  curDate: Date,
  intervalAccumultor: (i: Date) => Date
) {
  const timePoints: Date[] = []
  let i = new Date(lastDate)
  /**
   * We will request storage to the previous block
   * from the current one. This logic will cover all chain
   * stops and block delays when found new needed timepoints.
   *
   * i_next < curDate (not <=) because when we on
   * 0 sec. timestamp we didn't include it as desired value,
   * (as we are requesting previous block)
   */
  while (intervalAccumultor(new Date(i)) < curDate) {
    i = intervalAccumultor(new Date(i))
    timePoints.push(i)
  }
  return timePoints
}
export function fillStats<T extends Chart>(
  lastState: T,
  currentStats: Current,
  timePoints: Date[]
) {
  const newStates = timePoints.map((timePoint) => {
    const newState: T = Object.create(Object.getPrototypeOf(lastState))
    /** We firstly made all stats zeros because all stat changes
     * from the second and folowing timepoints will
     * be zero (more that 1 timepoints are possible if blockchain
     * had block delays or was disabled for some time)
     */
    Object.assign(newState, CHART_INIT)
    for (const stat in CURRENT_INIT) {
      // @ts-ignore
      newState[stat] = currentStats[stat]
    }
    newState.id = timePoint.getTime().toString()
    newState.timestamp = timePoint
    return newState
  })
  // Here we are finally changing stats changes for the first timepoint
  for (const stat in CURRENT_INIT) {
    //@ts-ignore
    const change = currentStats[stat] - lastState[stat]
    //@ts-ignore
    newStates[0][`${stat}Change`] = change
    //@ts-ignore
    newStates[0][`${stat}ChangeRatio`] = lastState[stat]
    //@ts-ignore
      ? (Number(change) / Number(lastState[stat])) * 100
      : 0
  }
  return newStates
}

export class ParsedEventsDataScope {
  private scope: ParsedEventsDataMap

  constructor() {
    this.scope = new Map<BlockEventName, Map<string, ParsedEventsData>>()
  }

  set(section: BlockEventName, value: ParsedEventsData) {
    this.scope.set(
      section,
      (this.scope.get(section) || new Map()).set(value.id, value)
    )
  }

  getBySection<T>(section: BlockEventName): Map<string, T> {
    return (this.scope.get(section) as Map<string, T>) || new Map<string, T>()
  }
}

export function getStorageHash(prefix: string, name: string) {
  return sto.getNameHash(prefix) + sto.getNameHash(name).slice(2)
}

export function encodeAccount(
  id: Uint8Array,
  prefix?: string | number | undefined
) {
  return prefix != null ? ss58.codec(prefix).encode(id) : toHex(id)
}

export function decodeAccount(
  id: string,
  prefix?: string | number | undefined
) {
  return prefix != null ? ss58.codec(prefix).decode(id) : decodeHex(id)
}

export function isMetricTrackable(metricKey: TrackingMetrics) {
  return chainConfig.config.trackingMetrics.has(metricKey)
}

export async function sleepTo(delay: number = 0) {
  await new Promise<void>((res) => setTimeout(() => res(), delay))
}

export function* splitIntoBatches<T>(
  list: T[],
  maxBatchSize: number
): Generator<T[]> {
  if (list.length <= maxBatchSize) {
    yield list
  } else {
    let offset = 0
    while (list.length - offset > maxBatchSize) {
      yield list.slice(offset, offset + maxBatchSize)
      offset += maxBatchSize
    }
    yield list.slice(offset)
  }
}

export function getOriginAccountId(origin: any) {
  if (
    origin &&
    origin.__kind === 'system' &&
    origin.value.__kind === 'Signed'
  ) {
    return origin.value.value
  } else {
    return undefined
  }
}
export async function getOrCreateBackupCounter(ctx: Ctx) {
  const counterCahced = await ctx.store.get(BackupCounter, '1', true)
  if (counterCahced) {
    return counterCahced
  } else {
    const counterNew = new BackupCounter({
      id: '1',
      balancesTransfersAmount: 0n,
      balancesTransfersVolume: 0n,
      chainSignedExtrinsics: 0n
    })
    ctx.store.deferredUpsert(counterNew)
    return counterNew
  }
}

export async function getOrCreateCurrent(ctx: Ctx) {
  const currentCached = await ctx.store.get(Current, '1', true)
  if (currentCached) {
    return currentCached
  } else {
    const currentNew = new Current({
      id: '1',
      ...CURRENT_INIT
    })
    const hourlyChart = ChartsCache.getLatest(HourlyChart)
    currentNew.lastUpdate = hourlyChart.timestamp
    ctx.store.deferredUpsert(currentNew)
    return currentNew
  }
}


const CURRENT_INIT: Required<Omit<Current, 'id' | 'lastUpdate'>> = {
  chainFinalizedBlocks: 0n,
  chainSignedExtrinsics: 0n,
  balancesTotalIssuance: 0n,
  balancesTransfersVolume: 0n,
  balancesTransfersAmount: 0n,
  parachainStakingCollatorsAmount: 0,
  parachainStakingCurrentRound: 0,
  parachainStakingTotalStakeCollators: 0n,
  parachainStakingTotalStakeDelegators: 0n,
  stakingValidatorsIdealAmount: 0,
  stakingActiveValidatorsAmount: 0,
  stakingValidatorsAmount: 0,
  stakingNominatorsActiveAmount: 0,
  stakingNominatorsInactiveAmount: 0,
  stakingCurrentEra: 0,
  stakingTotalStake: 0n,
  stakingTotalStakeValidators: 0n,
  stakingTotalStakeNominatorsActive: 0n,
  stakingTotalStakeNominatorsInactive: 0n,
  stakingTotalStakeValidatorsSingleAccount: 0n,
  stakingTotalStakeValidatorsMultiAccount: 0n,
  stakingMinActiveNominatorStake: 0n,
  stakingInflationRatio: 0,
  stakingRewardsRatio: 0,
  nominationPoolsMembersAmount: 0,
  nominationPoolsPoolsActiveAmount: 0,
  nominationPoolsPoolsInactiveAmount: 0,
  nominationPoolsPoolsActiveTotalStake: 0n,
  nominationPoolsPoolsInactiveTotalStake: 0n,
  slotsTokensLockedInParachains: 0n
}

const CHART_INIT: Required<Omit<HourlyChart, 'id' | 'timestamp'>> = {
  chainFinalizedBlocks: 0n,
  chainFinalizedBlocksChange: 0n,
  chainFinalizedBlocksChangeRatio: 0,
  chainSignedExtrinsics: 0n,
  chainSignedExtrinsicsChange: 0n,
  chainSignedExtrinsicsChangeRatio: 0,
  balancesTotalIssuance: 0n,
  balancesTotalIssuanceChange: 0n,
  balancesTotalIssuanceChangeRatio: 0,
  balancesTransfersVolume: 0n,
  balancesTransfersVolumeChange: 0n,
  balancesTransfersVolumeChangeRatio: 0,
  balancesTransfersAmount: 0n,
  balancesTransfersAmountChange: 0n,
  balancesTransfersAmountChangeRatio: 0,
  parachainStakingCollatorsAmount: 0,
  parachainStakingCollatorsAmountChange: 0,
  parachainStakingCollatorsAmountChangeRatio: 0,
  parachainStakingCurrentRound: 0,
  parachainStakingCurrentRoundChange: 0,
  parachainStakingCurrentRoundChangeRatio: 0,
  parachainStakingTotalStakeCollators: 0n,
  parachainStakingTotalStakeCollatorsChange: 0n,
  parachainStakingTotalStakeCollatorsChangeRatio: 0,
  parachainStakingTotalStakeDelegators: 0n,
  parachainStakingTotalStakeDelegatorsChange: 0n,
  parachainStakingTotalStakeDelegatorsChangeRatio: 0,
  stakingValidatorsIdealAmount: 0,
  stakingValidatorsIdealAmountChange: 0,
  stakingValidatorsIdealAmountChangeRatio: 0,
  stakingActiveValidatorsAmount: 0,
  stakingActiveValidatorsAmountChange: 0,
  stakingActiveValidatorsAmountChangeRatio: 0,
  stakingValidatorsAmount: 0,
  stakingValidatorsAmountChange: 0,
  stakingValidatorsAmountChangeRatio: 0,
  stakingNominatorsActiveAmount: 0,
  stakingNominatorsActiveAmountChange: 0,
  stakingNominatorsActiveAmountChangeRatio: 0,
  stakingNominatorsInactiveAmount: 0,
  stakingNominatorsInactiveAmountChange: 0,
  stakingNominatorsInactiveAmountChangeRatio: 0,
  stakingCurrentEra: 0,
  stakingCurrentEraChange: 0,
  stakingCurrentEraChangeRatio: 0,
  stakingTotalStake: 0n,
  stakingTotalStakeChange: 0n,
  stakingTotalStakeChangeRatio: 0,
  stakingTotalStakeValidators: 0n,
  stakingTotalStakeValidatorsChange: 0n,
  stakingTotalStakeValidatorsChangeRatio: 0,
  stakingTotalStakeNominatorsActive: 0n,
  stakingTotalStakeNominatorsActiveChange: 0n,
  stakingTotalStakeNominatorsActiveChangeRatio: 0,
  stakingTotalStakeNominatorsInactive: 0n,
  stakingTotalStakeNominatorsInactiveChange: 0n,
  stakingTotalStakeNominatorsInactiveChangeRatio: 0,
  stakingTotalStakeValidatorsSingleAccount: 0n,
  stakingTotalStakeValidatorsSingleAccountChange: 0n,
  stakingTotalStakeValidatorsSingleAccountChangeRatio: 0,
  stakingTotalStakeValidatorsMultiAccount: 0n,
  stakingTotalStakeValidatorsMultiAccountChange: 0n,
  stakingTotalStakeValidatorsMultiAccountChangeRatio: 0,
  stakingMinActiveNominatorStake: 0n,
  stakingMinActiveNominatorStakeChange: 0n,
  stakingMinActiveNominatorStakeChangeRatio: 0,
  stakingInflationRatio: 0,
  stakingInflationRatioChange: 0,
  stakingInflationRatioChangeRatio: 0,
  stakingRewardsRatio: 0,
  stakingRewardsRatioChange: 0,
  stakingRewardsRatioChangeRatio: 0,
  nominationPoolsMembersAmount: 0,
  nominationPoolsMembersAmountChange: 0,
  nominationPoolsMembersAmountChangeRatio: 0,
  nominationPoolsPoolsActiveAmount: 0,
  nominationPoolsPoolsActiveAmountChange: 0,
  nominationPoolsPoolsActiveAmountChangeRatio: 0,
  nominationPoolsPoolsInactiveAmount: 0,
  nominationPoolsPoolsInactiveAmountChange: 0,
  nominationPoolsPoolsInactiveAmountChangeRatio: 0,
  nominationPoolsPoolsActiveTotalStake: 0n,
  nominationPoolsPoolsActiveTotalStakeChange: 0n,
  nominationPoolsPoolsActiveTotalStakeChangeRatio: 0,
  nominationPoolsPoolsInactiveTotalStake: 0n,
  nominationPoolsPoolsInactiveTotalStakeChange: 0n,
  nominationPoolsPoolsInactiveTotalStakeChangeRatio: 0,
  slotsTokensLockedInParachains: 0n,
  slotsTokensLockedInParachainsChange: 0n,
  slotsTokensLockedInParachainsChangeRatio: 0
}

export function encodeId(id: Uint8Array, prefix: string | number | undefined) {
  return prefix != null ? ss58.codec(prefix).encode(id) : toHex(id)
}

export function decodeId(id: string, prefix: string | number | undefined) {
  return prefix != null ? ss58.codec(prefix).decode(id) : decodeHex(id)
}