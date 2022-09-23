import { Ctx, Block } from '../processor';
import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { HistoricalDataMeta, Holders } from '../model';
import { getOrHistoricalDataMeta } from './histiricalDataMeta';
import { TOTAL_HOLDERS_CHECK_STEP } from '../config';
import { getOrCreateTotals } from './totals';
import {
  BalancesAccountStorage,
  SystemAccountStorage
} from '../types/generated/storage';
import { getStorageHash } from '../utils/common';

export async function handleChainHolders(ctx: Ctx, block: Block) {
  const histDataMeta = getOrHistoricalDataMeta();
  const blockHeightBigInt = BigInt(block.header.height);

  if (
    blockHeightBigInt - (histDataMeta.holdersLatestBlockNumber || 0n) <
    BigInt(TOTAL_HOLDERS_CHECK_STEP)
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
    id: blockHeightBigInt.toString(),
    amount: totalHolders,
    timestamp: new Date(block.header.timestamp)
  });

  SquidCache.upsert(newHoldersStat);

  histDataMeta.holdersLatestBlockNumber = blockHeightBigInt;
  histDataMeta.holdersLatestTime = new Date(block.header.timestamp);

  SquidCache.upsert(histDataMeta);

  const totals = getOrCreateTotals();

  totals.holders = totalHolders;

  SquidCache.upsert(totals);
}
