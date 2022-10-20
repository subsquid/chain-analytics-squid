import { Ctx, Block } from '../processor';
import { Holders } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import storage from '../storage';
import { isCheckPoint } from '../utils/common';
import { CheckPointsKeys } from '../utils/types';

export async function handleChainHolders(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.holders, histDataMeta, block)) return;

  const keys = await storage.system.getHoldersKeys(ctx, block);

  if (keys) {
    const totalHolders = BigInt(keys.length);

    const newHoldersStat = new Holders({
      id: block.header.height.toString(),
      amount: totalHolders,
      timestamp: new Date(block.header.timestamp),
      blockHash: block.header.hash
    });

    ctx.store.deferredUpsert(newHoldersStat);

    const totals = await getOrCreateTotals(ctx);

    totals.holders = totalHolders;

    ctx.store.deferredUpsert(totals);
  }

  histDataMeta.holdersLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.holdersLatestTime = new Date(block.header.timestamp);
  ctx.store.deferredUpsert(histDataMeta);
}
