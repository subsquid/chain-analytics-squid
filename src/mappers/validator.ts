import { Ctx, Block } from '../processor';
import { Validator } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';
import { getIdealValidatorsCount, getValidators } from '../storage/session';

export async function handleValidators(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.validators, histDataMeta, block)) return;

  const idealCount = (await getIdealValidatorsCount(ctx, block)) || 0;

  const currentCount = (await getValidators(ctx, block)) || [];

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
