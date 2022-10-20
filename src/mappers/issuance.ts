import { Ctx, Block } from '../processor';
import { Issuance } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { BalancesTotalIssuanceStorage } from '../types/generated/storage';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';

export async function handleTotalIssuance(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.issuance, histDataMeta, block)) return;

  const storage = new BalancesTotalIssuanceStorage(ctx, block.header);
  if (storage.isExists) {
    const amount = await storage.getAsV1020();

    const newIssuanceStat = new Issuance({
      id: block.header.height.toString(),
      timestamp: new Date(block.header.timestamp),
      blockHash: block.header.hash,
      amount
    });

    ctx.store.deferredUpsert(newIssuanceStat);

    const totals = await getOrCreateTotals(ctx);

    totals.totalIssuance = amount;

    ctx.store.deferredUpsert(totals);
  }

  histDataMeta.issuanceLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.issuanceLatestTime = new Date(block.header.timestamp);
  ctx.store.deferredUpsert(histDataMeta);
}
