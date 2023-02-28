import { Ctx, Block } from '../processor';
import { StakedValue } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';
import { getChain } from '../chains';
import { assertNotNull } from '@subsquid/substrate-processor';
import assert from 'assert';
const { config: chainConfig, api: apiDecorated } = getChain();

export async function handleStakeAmount(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.staking, histDataMeta, block)) return;

  const saveStakingCheckMarker = () => {
    histDataMeta.stakingLatestBlockNumber = BigInt(block.header.height);
    histDataMeta.stakingLatestTime = new Date(block.header.timestamp);

    ctx.store.deferredUpsert(histDataMeta);
  };

  switch (chainConfig.chainName) {
    case 'kusama':
    case 'polkadot':
      await handleStakingPallet(ctx, block, saveStakingCheckMarker);
      break;
    case 'moonbeam':
    case 'moonriver':
      await handleParachainStakingPallet(ctx, block, saveStakingCheckMarker);
      break;
    default:
  }
}

async function handleStakingPallet(
  ctx: Ctx,
  block: Block,
  saveCheckMarker: () => void
) {
  const blockForStorage = {
    hash: block.header.hash
  };

  const {
    auctionAdjust,
    auctionMax,
    falloff,
    maxInflation,
    minInflation,
    stakeTarget
  } = assertNotNull(chainConfig.stakingParams);

  const [
    auctionNumber,
    totalIssuance,
    activeEraData,
    currentEraData,
    validatorIds,
    totalValidators,
    totalNominators
  ] = await Promise.all([
    apiDecorated.storage.getAuctionCounterNumber(ctx, blockForStorage),
    apiDecorated.storage.getTotalIssuance(ctx, blockForStorage),
    apiDecorated.storage.getActiveEra(ctx, blockForStorage),
    apiDecorated.storage.getCurrentEra(ctx, blockForStorage),
    apiDecorated.storage.getValidators(ctx, blockForStorage),
    apiDecorated.storage.getCounterForValidatorsNumber(ctx, blockForStorage),
    apiDecorated.storage.getCounterForNominatorsNumber(ctx, blockForStorage)
  ]);

  /**
   * Preferred to use ActiveEra because CurrentEra can return next planed era
   */
  const storageEra = activeEraData?.index || currentEraData;

  if (storageEra == null) {
    saveCheckMarker();
    return ctx.log.warn(`Unknown era`);
  }

  if (!validatorIds) {
    saveCheckMarker();
    return ctx.log.warn(`Validators for era ${storageEra} not found`);
  }

  const validatorsData = await apiDecorated.storage.getEraStakersData(
    ctx,
    blockForStorage,
    validatorIds.map((id) => [id, storageEra] as [Uint8Array, number])
  );
  if (!validatorsData) {
    saveCheckMarker();
    return ctx.log.warn(`Missing info for validators in era ${storageEra}`);
  }

  let totalValidatorsStake = 0n;
  let totalNominatorsStake = 0n;
  for (const validatorData of validatorsData) {
    if (!validatorsData) continue;
    totalValidatorsStake += validatorData!.own;
    totalNominatorsStake += validatorData!.total - validatorData!.own;
  }

  const totalStaked = totalValidatorsStake + totalNominatorsStake;

  let inflation: number | null = null;
  let stakedReturn: number | null = null;
  ctx.log.info(`Block: ${block.header.height} - ${block.header.hash}\nIssuance: ${totalIssuance}\nAuctions: ${auctionNumber}\n`)
  if (totalIssuance && auctionNumber) {
    const stakedFraction = Number(totalStaked) / Number(totalIssuance);
    const idealStake =
      stakeTarget - Math.min(auctionMax, auctionNumber) * auctionAdjust;
    const idealInterest = maxInflation / idealStake;

    inflation =
      100 *
      (minInflation +
        (stakedFraction <= idealStake
          ? stakedFraction * (idealInterest - minInflation / idealStake)
          : (idealInterest * idealStake - minInflation) *
            2 ** ((idealStake - stakedFraction) / falloff)));

    stakedReturn = inflation / stakedFraction;
  }

  const newStakedValueStat = new StakedValue({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    blockHash: block.header.hash,
    totalStake: totalStaked,
    validatorStake: totalValidatorsStake,
    nominatorStake: totalNominatorsStake,
    currentEra: storageEra ?? null,
    activeValidators: validatorIds.length,
    totalValidators,
    totalNominators,
    inflationRatio: inflation,
    rewardsRatio: stakedReturn
  });

  ctx.store.deferredUpsert(newStakedValueStat);

  saveCheckMarker();

  const totals = await getOrCreateTotals(ctx);

  totals.currentEra = newStakedValueStat.currentEra;
  totals.stakedValueTotal = newStakedValueStat.totalStake;
  totals.stakedValueValidator = newStakedValueStat.validatorStake;
  totals.stakedValueNominator = newStakedValueStat.nominatorStake;

  ctx.store.deferredUpsert(totals);
}

async function handleParachainStakingPallet(
  ctx: Ctx,
  block: Block,
  saveCheckMarker: () => void
) {
  const blockForStorage = {
    hash: block.header.hash
  };

  const currentRound = await apiDecorated.storage.getRoundNumber(
    ctx,
    blockForStorage
  );

  const collatorIds = await apiDecorated.storage.getSelectedCollators(
    ctx,
    blockForStorage
  );
  if (!collatorIds) return;

  const collatorsData = await apiDecorated.storage.getCollatorsDataShort(
    ctx,
    blockForStorage,
    collatorIds
  );

  if (!collatorsData) return;

  const nominatorsAllData =
    await apiDecorated.storage.getStakingDelegatorsAllDataShort(
      ctx,
      blockForStorage
    );

  if (!nominatorsAllData) return;

  const totalCollatorsStake = [...collatorsData.values()].reduce(
    (total, collator) => total + (collator ? collator.bond : 0n),
    0n
  );

  const totalNominatorsStake = nominatorsAllData.reduce(
    (total, nominator) => total + nominator.totalStake,
    0n
  );

  const totalStake = await apiDecorated.storage.getTotalStake(
    ctx,
    blockForStorage
  );

  const newStakedValueStat = new StakedValue({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    blockHash: block.header.hash,
    totalStake: totalCollatorsStake + totalNominatorsStake,
    totalStakeStorage: totalStake,
    collatorStake: totalCollatorsStake,
    nominatorStake: totalNominatorsStake,
    currentRound: currentRound ?? null,
    collatorsCount: collatorIds.length
  });

  ctx.store.deferredUpsert(newStakedValueStat);

  saveCheckMarker();

  const totals = await getOrCreateTotals(ctx);

  totals.currentRound = newStakedValueStat.currentRound;
  totals.stakedValueTotal = newStakedValueStat.totalStake;
  totals.stakedValueCollator = newStakedValueStat.collatorStake;
  totals.stakedValueNominator = newStakedValueStat.nominatorStake;

  ctx.store.deferredUpsert(totals);
}
