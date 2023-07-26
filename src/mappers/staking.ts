import { ProcessorContext } from '../processor'
import { getChain } from '../chains'
import { assertNotNull, toHex } from '@subsquid/substrate-processor'
import { Current } from '../model'
import {StoreWithCache} from '@belopash/squid-tools'
const { config: chainConfig, api: apiDecorated } = getChain()

// TODO: Add total issuance here as well
// export async function handleStakeAmount(ctx: ProcessorContext, block: Block) {
//   const histDataMeta = await getOrCreateHistoricalDataMeta(ctx)

// switch (chainConfig.chainName) {
//   case 'kusama':
//   case 'polkadot':
//     await handleStakingPallet(ctx, block, saveStakingCheckMarker);
//     break;
//   case 'moonbeam':
//   case 'moonriver':
//     await handleParachainStakingPallet(ctx, block, saveStakingCheckMarker);
//     break;
//   default:
// }
// }

export async function handleStakeAmount(
  ctx: ProcessorContext<StoreWithCache>,
  block: { hash: string },
  current: Current
) {
  const {
    auctionAdjust,
    auctionMax,
    falloff,
    maxInflation,
    minInflation,
    stakeTarget
  } = assertNotNull(chainConfig.stakingParams)

  const [
    idealValidators,
    auctionNumber,
    totalIssuance,
    activeEraData,
    currentEraData,
    totalValidators,
    totalNominators
  ] = await Promise.all([
    apiDecorated.storage.getIdealValidatorsCount(ctx, block),
    apiDecorated.storage.getAuctionCounterNumber(ctx, block),
    apiDecorated.storage.getTotalIssuance(ctx, block),
    apiDecorated.storage.getActiveEra(ctx, block),
    apiDecorated.storage.getCurrentEra(ctx, block),
    apiDecorated.storage.getCounterForValidatorsNumber(ctx, block),
    apiDecorated.storage.getCounterForNominatorsNumber(ctx, block)
  ])
  /**
   * Preferred to use ActiveEra because CurrentEra can return next planed era
   */
  const eraData = activeEraData?.index ?? currentEraData
  if (eraData == null) {
    return ctx.log.warn(`Unknown era`)
  }

  const validatorsData = await apiDecorated.storage.getEraStakersData(
    ctx,
    block,
    eraData
  )
  if (!validatorsData) {
    return ctx.log.warn(`Missing info for validators in era ${currentEraData}`)
  }

  let totalValidatorsStake = 0n
  let totalNominatorsStake = 0n

  const nominatorsStake = new Map<string, bigint>()

  for (const validatorData of validatorsData) {
    if (!validatorsData) continue
    totalValidatorsStake += validatorData.own
    totalNominatorsStake += validatorData.total - validatorData.own
    for (const nominator of validatorData.others) {
      const pkey = toHex(nominator.who)
      nominatorsStake.set(
        pkey,
        (nominatorsStake.get(pkey) ?? 0n) + nominator.value
      )
    }
  }

  const validatorsSupers = await apiDecorated.storage.getIdentitySupers(
    ctx,
    block,
    validatorsData.map((data) => data.id)
  )
  let singleValidatorsStake = 0n
  let multiValidatorsStake = 0n
  if (validatorsSupers) {
    for (let i = 0; i < validatorsSupers.length; i++) {
      if (validatorsSupers[i]) multiValidatorsStake += validatorsData[i].total
      else singleValidatorsStake += validatorsData[i].total
    }
  }
  
  const totalStaked = totalValidatorsStake + totalNominatorsStake

  let inflation: number | null = null
  let stakedReturn: number | null = null

  if (totalIssuance && auctionNumber) {
    const stakedFraction = Number(totalStaked) / Number(totalIssuance)
    const idealStake =
      stakeTarget - Math.min(auctionMax, auctionNumber) * auctionAdjust
    const idealInterest = maxInflation / idealStake

    inflation =
      100 *
      (minInflation +
        (stakedFraction <= idealStake
          ? stakedFraction * (idealInterest - minInflation / idealStake)
          : (idealInterest * idealStake - minInflation) *
            2 ** ((idealStake - stakedFraction) / falloff)))

    stakedReturn = inflation / stakedFraction
  }

  current.balancesTotalIssuance = assertNotNull(totalIssuance)
 
  current.stakingValidatorsIdealAmount = idealValidators ?? 0
  current.stakingActiveValidatorsAmount = validatorsData.length
  current.stakingValidatorsAmount = totalValidators ?? 0
  current.stakingNominatorsActiveAmount = nominatorsStake.size
  current.stakingNominatorsInactiveAmount = totalNominators ? totalNominators - nominatorsStake.size : 0
  current.stakingCurrentEra = eraData
  current.stakingTotalStake = totalStaked
  current.stakingTotalStakeValidators = totalValidatorsStake
  current.stakingTotalStakeNominatorsActive = totalNominatorsStake
  current.stakingTotalStakeValidatorsSingleAccount = singleValidatorsStake
  current.stakingTotalStakeValidatorsMultiAccount = multiValidatorsStake
  current.stakingMinActiveNominatorStake = findMinimalStake([...nominatorsStake.values()])
  current.stakingInflationRatio = inflation ?? 0
  current.stakingRewardsRatio = stakedReturn ?? 0
}

function findMinimalStake(stakes: bigint[]) {
  let minStake = null
  for (const stake of stakes) {
    if (minStake == null || stake < minStake) minStake = stake
  }
  return minStake ?? 0n
}
// async function handleParachainStakingPallet(
//   ctx: ProcessorContext,
//   block: Block,
//   saveCheckMarker: () => void
// ) {
//   const block = {
//     hash: block.header.hash
//   };

//   const currentRound = await apiDecorated.storage.getRoundNumber(
//     ctx,
//     block
//   );

//   const collatorIds = await apiDecorated.storage.getSelectedCollators(
//     ctx,
//     block
//   );
//   if (!collatorIds) return;

//   const collatorsData = await apiDecorated.storage.getCollatorsDataShort(
//     ctx,
//     block,
//     collatorIds
//   );

//   if (!collatorsData) return;

//   const nominatorsAllData =
//     await apiDecorated.storage.getStakingDelegatorsAllDataShort(
//       ctx,
//       block
//     );

//   if (!nominatorsAllData) return;

//   const totalCollatorsStake = [...collatorsData.values()].reduce(
//     (total, collator) => total + (collator ? collator.bond : 0n),
//     0n
//   );

//   const totalNominatorsStake = nominatorsAllData.reduce(
//     (total, nominator) => total + nominator.totalStake,
//     0n
//   );

//   const totalStake = await apiDecorated.storage.getTotalStake(
//     ctx,
//     block
//   );

//   const newStakedValueStat = new StakedValue({
//     id: block.header.height.toString(),
//     timestamp: new Date(block.header.timestamp),
//     blockHash: block.header.hash,
//     totalStake: totalCollatorsStake + totalNominatorsStake,
//     totalStakeStorage: totalStake,
//     collatorStake: totalCollatorsStake,
//     nominatorStake: totalNominatorsStake,
//     currentRound: currentRound ?? null,
//     collatorsCount: collatorIds.length
//   });

//   ctx.store.upsert(newStakedValueStat);

//   saveCheckMarker();

//   const totals = await getOrCreateTotals(ctx);

//   totals.currentRound = newStakedValueStat.currentRound;
//   totals.stakedValueTotal = newStakedValueStat.totalStake;
//   totals.stakedValueCollator = newStakedValueStat.collatorStake;
//   totals.stakedValueNominator = newStakedValueStat.nominatorStake;

//   ctx.store.upsert(totals);
// }

/**
 * validators collators
 * 
  switch (chainConfig.chainName) {
    case 'kusama':
    case 'polkadot': {
      newValidatorStat.idealCount =
        (await apiDecorated.storage.getIdealValidatorsCount(
          ctx,
          blockForStorage
        )) || 0;

      newValidatorStat.count =
        (await apiDecorated.storage.getValidatorsCount(ctx, blockForStorage)) ||
        0;

      totals.validatorsIdealCount = newValidatorStat.idealCount;
      totals.validatorsCount = newValidatorStat.count;
      break;
    }
    case 'moonbeam':
    case 'moonriver': {
      newValidatorStat.count =
        (await apiDecorated.storage.getSelectedCollatorsCount(
          ctx,
          blockForStorage
        )) || 0;
      newValidatorStat.idealCount = newValidatorStat.count;

      totals.collatorsIdealCount = newValidatorStat.idealCount;
      totals.collatorsCount = newValidatorStat.count;
      break;
    }
    default:
  }
  ctx.store.upsert(totals);
  ctx.store.upsert(newValidatorStat);

  histDataMeta.validatorsLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.validatorsLatestTime = new Date(block.header.timestamp);

  ctx.store.upsert(histDataMeta);
}
 */
