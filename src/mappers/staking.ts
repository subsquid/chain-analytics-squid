import { Ctx, Block } from '../processor';
import { StakedValue } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';
import { getChain } from '../chains';
const { api: storageApi } = getChain();

export async function handleStakeAmount(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.staking, histDataMeta, block)) return;

  const blockForStorage = {
    hash: block.header.hash
  };

  const activeEraData = await storageApi.storage.getActiveEra(
    ctx,
    blockForStorage
  );
  const currentEraData = await storageApi.storage.getCurrentEra(
    ctx,
    blockForStorage
  );
  const saveStakingCheckMarker = () => {
    histDataMeta.stakingLatestBlockNumber = BigInt(block.header.height);
    histDataMeta.stakingLatestTime = new Date(block.header.timestamp);

    ctx.store.deferredUpsert(histDataMeta);
  };

  /**
   * Preferred to use ActiveEra because CurrentEra can return next planed era
   */
  const storageEra = activeEraData?.index || currentEraData;

  if (storageEra == null || storageEra == undefined) {
    saveStakingCheckMarker();
    return ctx.log.warn(`Unknown era`);
  }

  const validatorIds = await storageApi.storage.getValidators(
    ctx,
    blockForStorage
  );
  if (!validatorIds) {
    saveStakingCheckMarker();
    return ctx.log.warn(`Validators for era ${storageEra} not found`);
  }

  const validatorsData = await storageApi.storage.getEraStakersData(
    ctx,
    blockForStorage,
    validatorIds.map((id) => [id, storageEra] as [Uint8Array, number])
  );
  if (!validatorsData) {
    saveStakingCheckMarker();
    return ctx.log.warn(`Missing info for validators in era ${storageEra}`);
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
