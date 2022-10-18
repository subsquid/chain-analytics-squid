import { Ctx, Block } from '../processor';
import { Issuance } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { TOTAL_ISSUANCE_CHECK_STEP } from '../config';
import { getOrCreateTotals } from './totals';
import { BalancesTotalIssuanceStorage } from '../types/generated/storage';

export async function handleTotalIssuance(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (
    block.header.timestamp -
      (histDataMeta.issuanceLatestTime
        ? histDataMeta.issuanceLatestTime.getTime()
        : 0) <
    TOTAL_ISSUANCE_CHECK_STEP
  ) {
    return;
  }

  const storage = new BalancesTotalIssuanceStorage(ctx, block.header);
  if (!storage.isExists) return;

  const amount = await storage.getAsV1020();

  const newIssuanceStat = new Issuance({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    blockHash: block.header.hash,
    amount
  });

  ctx.store.deferredUpsert(newIssuanceStat);

  histDataMeta.issuanceLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.issuanceLatestTime = new Date(block.header.timestamp);

  ctx.store.deferredUpsert(histDataMeta);

  const totals = await getOrCreateTotals(ctx);

  totals.totalIssuance = amount;

  ctx.store.deferredUpsert(totals);
}
