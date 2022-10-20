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

  /**
   * Preferred to use ActiveEra because CurrentEra can return next planed era
   */
  const storageEraData = activeEraData || currentEraData;

  if (!storageEraData || storageEraData?.index == null) {
    return ctx.log.warn(`Unknown era`);
  }

  const validatorIds = await storage.session.getValidators(ctx, block);
  if (!validatorIds) {
    return ctx.log.warn(`Validators for era ${storageEraData} not found`);
  }

  const validatorsData = await storage.staking.getEraStakersData(
    ctx,
    block,
    validatorIds.map((id) => [id, storageEraData.index] as [string, number])
  );
  if (!validatorsData) {
    return ctx.log.warn(`Missing info for validators in era ${storageEraData}`);
  }

  let totalValidatorsStake = 0n;
  let totalNominatorsStake = 0n;
  for (const validatorData of validatorsData) {
    if (!validatorsData) continue;
    totalValidatorsStake += validatorData!.own;
    totalNominatorsStake += validatorData!.total - validatorData!.own;
  }

  // console.log('storageEraData - ', storageEraData);
  // console.log('totalValidatorsStake - ', totalValidatorsStake.toString());
  // console.log('totalNominatorsStake - ', totalNominatorsStake.toString());
  // console.log('SUM - ', totalValidatorsStake + totalNominatorsStake);

  // console.dir(validatorsData, { depth: null });

  // const erasTotalStakeStorage = new StakingErasTotalStakeStorage(
  //   ctx,
  //   block.header
  // );
  //
  // if (!erasTotalStakeStorage.isExists)
  //   return ctx.log.warn(`Missing info for era.`);
  //
  // const erasTotalStake = await erasTotalStakeStorage.getAsV1050(
  //   storageEraData.index
  // );
  //
  // console.log('erasTotalStake - ', erasTotalStake.toString());

  // const activeEraStorage = new StakingActiveEraStorage(ctx, block.header);
  // const erasTotalStakeStorage = new StakingErasTotalStakeStorage(
  //   ctx,
  //   block.header
  // );
  // // const erasStakersStorage = new StakingErasStakersStorage(ctx, block.header);
  // if (
  //   !activeEraStorage.isExists ||
  //   !erasTotalStakeStorage.isExists
  //   // !erasStakersStorage.isExists
  // )
  //   return;
  //
  // const activeEra = await activeEraStorage.getAsV1050();
  // if (!activeEra || !activeEra.index) return;
  //
  // const erasTotalStake = await erasTotalStakeStorage.getAsV1050(
  //   activeEra.index
  // );

  // const keys = await ctx._chain.client.call('state_getKeys', [
  //   getStorageHash('Staking', 'ErasStakers'),
  //   block.header.hash
  // ]);

  // const erasStakers = await ctx._chain.getStorage(
  //   block.header.hash,
  //   'Staking',
  //   'ErasStakers',
  //   activeEra,
  //   null
  // );
  // let req =
  //   getStorageHash('Staking', 'ErasStakers') + 'c0459bb3f1b3dade2a070000';
  //
  // const erasStakers = await ctx._chain.client.call('state_getStorageAt', [
  //   req,
  //   block.header.hash
  // ]);

  const newStakedValueStat = new StakedValue({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    blockHash: block.header.hash,
    totalStake: totalValidatorsStake + totalNominatorsStake,
    validatorStake: totalValidatorsStake,
    nominatorStake: totalNominatorsStake
  });

  ctx.store.deferredUpsert(newStakedValueStat);

  histDataMeta.stakingLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.stakingLatestTime = new Date(block.header.timestamp);

  ctx.store.deferredUpsert(histDataMeta);

  const totals = await getOrCreateTotals(ctx);

  totals.stakedValueTotal = newStakedValueStat.totalStake;
  totals.stakedValueValidator = newStakedValueStat.validatorStake;
  totals.stakedValueNominator = newStakedValueStat.nominatorStake;

  ctx.store.deferredUpsert(totals);
}
