import { Ctx, Block } from '../processor';
import { Validator } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { TOTAL_ISSUANCE_CHECK_STEP } from '../config';
import { getOrCreateTotals } from './totals';
import {
  StakingValidatorCountStorage,
  SessionValidatorsStorage
} from '../types/generated/storage';

export async function handleValidators(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (
    block.header.timestamp -
      (histDataMeta.validatorLatestTime
        ? histDataMeta.validatorLatestTime.getTime()
        : 0) <
    TOTAL_ISSUANCE_CHECK_STEP
  ) {
    return;
  }

  const storageIdealCount = new StakingValidatorCountStorage(ctx, block.header);
  const storageCount = new SessionValidatorsStorage(ctx, block.header);
  if (!storageIdealCount.isExists || !storageCount.isExists) return;

  const idealCount = await storageIdealCount.getAsV1020();
  const currentCount = (await storageCount.getAsV1020()) ?? [];

  const newValidatorStat = new Validator({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    count: currentCount.length,
    blockHash: block.header.hash,
    idealCount
  });

  ctx.store.deferredUpsert(newValidatorStat);

  histDataMeta.validatorLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.validatorLatestTime = new Date(block.header.timestamp);

  ctx.store.deferredUpsert(histDataMeta);

  const totals = await getOrCreateTotals(ctx);
  totals.validatorsIdealCount = idealCount;
  totals.validatorsCount = currentCount.length;

  ctx.store.deferredUpsert(totals);
}
