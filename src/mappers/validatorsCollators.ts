import { Ctx, Block } from '../processor';
import { ValidatorCollator } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';
import { getChain } from '../chains';
const { config: chainConfig, api: apiDecorated } = getChain();

export async function handleValidatorsCollators(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.validators, histDataMeta, block)) return;

  const blockForStorage = {
    hash: block.header.hash
  };

  let idealCount = 0;
  let currentCount = 0;

  const totals = await getOrCreateTotals(ctx);
  const newValidatorStat = new ValidatorCollator({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    count: currentCount,
    blockHash: block.header.hash,
    idealCount
  });

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
  ctx.store.deferredUpsert(totals);
  ctx.store.deferredUpsert(newValidatorStat);

  histDataMeta.validatorsLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.validatorsLatestTime = new Date(block.header.timestamp);

  ctx.store.deferredUpsert(histDataMeta);
}
