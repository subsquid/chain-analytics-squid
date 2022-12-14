import { Ctx, Block } from '../processor';
import { Issuance } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';
import { getChain } from '../chains';

const { api } = getChain();

export async function handleTotalIssuance(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.issuance, histDataMeta, block)) return;

  const totalIssuance = await api.storage.getTotalIssuance(ctx, {
    hash: block.header.hash
  });
  if (totalIssuance !== undefined) {
    const newIssuanceStat = new Issuance({
      id: block.header.height.toString(),
      timestamp: new Date(block.header.timestamp),
      blockHash: block.header.hash,
      volume: totalIssuance ?? null
    });

    ctx.store.deferredUpsert(newIssuanceStat);

    const totals = await getOrCreateTotals(ctx);

    totals.totalIssuance = totalIssuance;

    ctx.store.deferredUpsert(totals);
  }

  histDataMeta.issuanceLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.issuanceLatestTime = new Date(block.header.timestamp);
  ctx.store.deferredUpsert(histDataMeta);
}
