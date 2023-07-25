import { lookupArchive, KnownArchives } from '@subsquid/archive-registry'
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
  BatchProcessorCallItem,
  BatchProcessorEventItem
} from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/processor-tools'
import {
  Current,
  BackupCounter,
  DailyChart,
  HourlyChart,
  WeeklyChart,
  MonthlyChart,
  FourHourlyChart,
  ChainState
} from './model'

// TODO: rework imports
import { getParsedEventsData } from './mappers/common'
import { BatchBlock } from '@subsquid/substrate-processor/src/processor/batchProcessor'
import { handleStakeAmount } from './mappers/staking'
import { handleTransfers } from './mappers/transfers'
import { handleSlots } from './mappers/slots'

import {
  BlockEventName,
  BalancesTransferEventData,
  CallSignedExtrinsicData,
  InvolvedAccountsData,
  CHARTS
} from './utils/types'
import { handleExtrinsics } from './mappers/extrinsics'
import { getChain } from './chains'
import { handleNominationPools } from './mappers/nominationPools'
import {
  ChartsCache,
  fillStats,
  getOrCreateBackupCounter,
  getOrCreateCurrent,
  getTimePoints,
  updateChart
} from './utils/common'
import { processBalances } from './mappers/balances'

const chainConfig = getChain()

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive(chainConfig.config.chainName as KnownArchives, {
      release: 'FireSquid'
    }),
    chain: chainConfig.config.dataSource.chain
  })
  .setBlockRange(chainConfig.config.blockRange || { from: 0 })
  .includeAllBlocks()
  .addEvent('Balances.Endowed', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Transfer', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.BalanceSet', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Reserved', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Unreserved', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.ReserveRepatriated', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Deposit', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Withdraw', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Slashed', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addCall('*', {
    data: { call: { origin: true, parent: true } }
  } as const)
  .addCall('*', {
    data: {
      extrinsic: true
    }
  })

export type Item = BatchProcessorItem<typeof processor>
export type CallItem = BatchProcessorCallItem<typeof processor>
export type EventItem = BatchProcessorEventItem<typeof processor>
export type Ctx = BatchContext<Store, Item>
export type Block = BatchBlock<Item>

processor.run(new TypeormDatabase(), async (ctx) => {
  const parsedEvents = getParsedEventsData(ctx)
  ctx.store.deferredLoad(Current, '1')
  ctx.store.deferredLoad(BackupCounter, '1')
  await ctx.store.load()
  if (!ChartsCache.isInitialized) {
    await ChartsCache.init(ctx)
  }
  //TODO: remove loading from db after store.load()
  const backupCounter = await getOrCreateBackupCounter(ctx)
  const current = await getOrCreateCurrent(ctx)

  /**
   *  TODO: rework iterative values to per-block manner
   *  to get more precise values when desired timepoint
   *  in the middle of the batch
   *
   *  TODO: get rid of implicit changes of
   *  backupCounter and current in handle<...>() functions
   */
  await handleTransfers(
    ctx,
    parsedEvents.getBySection<BalancesTransferEventData>(
      BlockEventName.BALANCES_TRANSFER
    ),
    backupCounter
  )
  await handleExtrinsics(
    ctx,
    parsedEvents.getBySection<CallSignedExtrinsicData>(
      BlockEventName.SIGNED_EXTRINSIC
    ),
    backupCounter
  )
  ctx.store.deferredUpsert(backupCounter)

  for (let block of ctx.blocks) {

    const lastHourlyStats = ChartsCache.getLatest(HourlyChart)
    const curDate = new Date(block.header.timestamp)
    /**
     * Hourly chart is minimal atomicity chart.
     * If we don't need to udate it, we don't need
     * to update any
     */
    const hourlyTimes = getTimePoints(
      lastHourlyStats.timestamp,
      curDate,
      (i: Date) => {
        i.setUTCHours(i.getUTCHours() + 1)
        return i
      }
      )

    if (hourlyTimes.length > 0) {
      /**
       * We refer to the previous block to follow
       * getTimePoiints logic
       *
       * TODO: rework to define proper block here
       */
      current.lastUpdate = new Date(block.header.timestamp)
      current.chainFinalizedBlocks = BigInt(block.header.height) - 1n
      current.chainSignedExtrinsics = backupCounter.chainSignedExtrinsics
      current.balancesTransfersAmount = backupCounter.balancesTransfersAmount
      current.balancesTransfersVolume = backupCounter.balancesTransfersVolume
      const storageBlock = {
        hash: block.header.parentHash
      }
      await Promise.all([
        handleNominationPools(ctx, storageBlock, current),
        handleSlots(ctx, storageBlock, current),
        handleStakeAmount(ctx, storageBlock, current)
      ])
      ctx.store.deferredUpsert(current)

      updateChart(ctx, HourlyChart, current, (i: Date) => {
        i.setUTCHours(i.getUTCHours() + 1)
        return i
      })
      updateChart(ctx, FourHourlyChart, current, (i: Date) => {
        i.setUTCHours(i.getUTCHours() + 4)
        return i
      })
      updateChart(ctx, DailyChart, current, (i: Date) => {
        i.setUTCDate(i.getUTCDate() + 1)
        return i
      })
      updateChart(ctx, WeeklyChart, current, (i: Date) => {
        i.setUTCDate(i.getUTCDate() + 7)
        return i
      })
      updateChart(ctx, MonthlyChart, current, (i: Date) => {
        i.setUTCMonth(i.getUTCMonth() + 1)
        return i
      })
    }
  }
  processBalances(ctx)
  await ctx.store.flush()
  // await handleChainHolders(
  //   ctx,
  //   ctx.blocks[ctx.blocks.length - 1],
  //   parsedEvents.getBySection<InvolvedAccountsData>(
  //     BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC
  //   )
  // );
})
