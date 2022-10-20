import { Codec as ScaleCodec } from '@subsquid/scale-codec';
import { Ctx, Block } from '../processor';
import { StakedValue } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import {
  BalancesTotalIssuanceStorage,
  StakingActiveEraStorage,
  StakingErasStakersStorage,
  StakingErasTotalStakeStorage,
  StakingNominatorsStorage
} from '../types/generated/storage';
import { getStorageHash, isCheckPoint } from '../utils/common';

import storage from '../storage';
import { CheckPointsKeys } from '../utils/types';

export async function handleStakeAmount(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.staking, histDataMeta, block)) return;

  const activeEraData = await storage.staking.getActiveEra(ctx, block);
  const currentEraData = await storage.staking.getCurrentEra(ctx, block);
  const saveStakingCheckMarker = () => {
    histDataMeta.stakingLatestBlockNumber = BigInt(block.header.height);
    histDataMeta.stakingLatestTime = new Date(block.header.timestamp);

    ctx.store.deferredUpsert(histDataMeta);
  };

  /**
   * Preferred to use ActiveEra because CurrentEra can return next planed era
   */
  const storageEraData = activeEraData || currentEraData;

  if (!storageEraData || storageEraData?.index == null) {
    saveStakingCheckMarker();
    return ctx.log.warn(`Unknown era`);
  }

  const validatorIds = await storage.session.getValidators(ctx, block);
  if (!validatorIds) {
    saveStakingCheckMarker();
    return ctx.log.warn(`Validators for era ${storageEraData} not found`);
  }

  const validatorsData = await storage.staking.getEraStakersData(
    ctx,
    block,
    validatorIds.map((id) => [id, storageEraData.index] as [string, number])
  );
  if (!validatorsData) {
    saveStakingCheckMarker();
    return ctx.log.warn(`Missing info for validators in era ${storageEraData}`);
  }

  let totalValidatorsStake = 0n;
  let totalNominatorsStake = 0n;
  for (const validatorData of validatorsData) {
    if (!validatorsData) continue;
    totalValidatorsStake += validatorData!.own;
    totalNominatorsStake += validatorData!.total - validatorData!.own;
  }

  const newStakedValueStat = new StakedValue({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    blockHash: block.header.hash,
    totalStake: totalValidatorsStake + totalNominatorsStake,
    validatorStake: totalValidatorsStake,
    nominatorStake: totalNominatorsStake
  });

  ctx.store.deferredUpsert(newStakedValueStat);

  saveStakingCheckMarker();

  const totals = await getOrCreateTotals(ctx);

  totals.stakedValueTotal = newStakedValueStat.totalStake;
  totals.stakedValueValidator = newStakedValueStat.validatorStake;
  totals.stakedValueNominator = newStakedValueStat.nominatorStake;

  ctx.store.deferredUpsert(totals);
}
