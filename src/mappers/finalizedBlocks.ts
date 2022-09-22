import { Ctx, Block } from '../processor';
import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { getOrCreateTotals } from './totals';
import { SystemNumberStorage } from '../types/generated/storage';

export async function handleFinalizedBlock(ctx: Ctx, block: Block) {
  const storage = new SystemNumberStorage(ctx, block.header);
  if (!storage.isExists) return;

  const blockNumber = await storage.getAsV1020();

  const totals = getOrCreateTotals();

  totals.totalIssuance = BigInt(blockNumber);

  SquidCache.upsert(totals);
}
