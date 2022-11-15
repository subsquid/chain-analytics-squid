import { Ctx, Block } from '../processor';
import { Validator } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';
import storage from '../storage';

export async function handleValidators(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.validators, histDataMeta, block)) return;

  const idealCount =
    (await storage.session.getIdealValidatorsCount(ctx, block)) || 0;

  const currentCount = (await storage.session.getValidators(ctx, block)) || [];

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
