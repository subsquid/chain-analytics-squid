import { Ctx, Block } from '../processor';
import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { HistoricalDataMeta, Holders } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { TOTAL_HOLDERS_CHECK_STEP } from '../config';
import { getOrCreateTotals } from './totals';
import {
  BalancesAccountStorage,
  SystemAccountStorage
} from '../types/generated/storage';
import { getStorageHash } from '../utils/common';

export async function handleChainHolders(ctx: Ctx, block: Block) {
  const histDataMeta = getOrCreateHistoricalDataMeta();

  if (
    block.header.timestamp -
      (histDataMeta.holdersLatestTime
        ? histDataMeta.holdersLatestTime.getTime()
        : 0) <
    TOTAL_HOLDERS_CHECK_STEP
  ) {
    return;
  }
  let keys = null;

  const storageSys = new SystemAccountStorage(ctx, block.header);
  if (!storageSys.isExists) return;

  keys = await ctx._chain.client.call('state_getKeys', [
    getStorageHash('System', 'Account'),
    block.header.hash
  ]);

  if (!keys) return;

  const totalHolders = BigInt([...keys].length);

  const newHoldersStat = new Holders({
    id: block.header.height.toString(),
    amount: totalHolders,
    timestamp: new Date(block.header.timestamp),
    blockHash: block.header.hash
  });

  SquidCache.upsert(newHoldersStat);

  histDataMeta.holdersLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.holdersLatestTime = new Date(block.header.timestamp);

  SquidCache.upsert(histDataMeta);

  const totals = getOrCreateTotals();

  totals.holders = totalHolders;

  SquidCache.upsert(totals);
}
