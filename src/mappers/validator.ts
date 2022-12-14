import { Ctx, Block } from '../processor';
import { Validator } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';
import { getChain } from '../chains';
const { api: storageApi } = getChain();


export async function handleValidators(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.validators, histDataMeta, block)) return;

  const blockForStorage = {
    hash: block.header.hash
  };

  const idealCount =
    (await storageApi.storage.getIdealValidatorsCount(ctx, blockForStorage)) || 0;

  const currentCount = (await storageApi.storage.getValidators(ctx, blockForStorage)) || [];

  const newValidatorStat = new Validator({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    count: currentCount.length,
    blockHash: block.header.hash,
    idealCount
  });

  ctx.store.deferredUpsert(newValidatorStat);

  histDataMeta.validatorsLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.validatorsLatestTime = new Date(block.header.timestamp);

  ctx.store.deferredUpsert(histDataMeta);

  const totals = await getOrCreateTotals(ctx);
  totals.validatorsIdealCount = idealCount;
  totals.validatorsCount = currentCount.length;

  ctx.store.deferredUpsert(totals);
}
