import { Ctx, Block } from '../processor';
import { StakedValue } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';
import { getChain } from '../chains';
const { config: chainConfig, getApiDecorated } = getChain();

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

  const apiDecorated = getApiDecorated('polkadot');

  const activeEraData = await apiDecorated.storage.getActiveEra(
    ctx,
    blockForStorage
  );
  const currentEraData = await apiDecorated.storage.getCurrentEra(
    ctx,
    blockForStorage
  );
  /**
   * Preferred to use ActiveEra because CurrentEra can return next planed era
   */
  const storageEra = activeEraData?.index || currentEraData;

  if (storageEra == null || storageEra == undefined) {
    saveCheckMarker();
    return ctx.log.warn(`Unknown era`);
  }

  const validatorIds = await apiDecorated.storage.getValidators(
    ctx,
    blockForStorage
  );
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

  const newStakedValueStat = new StakedValue({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    blockHash: block.header.hash,
    totalStake: totalValidatorsStake + totalNominatorsStake,
    validatorStake: totalValidatorsStake,
    nominatorStake: totalNominatorsStake,
    currentEra: storageEra ?? null,
    validatorsCount: validatorIds.length
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
  const apiDecorated = getApiDecorated('moonbeam');

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
