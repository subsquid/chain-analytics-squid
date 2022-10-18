import { Ctx, Block } from '../processor';
import { getOrCreateTotals } from './totals';
import { SystemNumberStorage } from '../types/generated/storage';

export async function handleFinalizedBlock(ctx: Ctx, block: Block) {
  // const storage = new SystemNumberStorage(ctx, block.header);
  // if (!storage.isExists) return;
  //
  // const blockNumber = await storage.getAsV1020();

  const totals = await getOrCreateTotals(ctx);

  totals.finalizedBlocks = BigInt(block.header.height);

  ctx.store.deferredUpsert(totals);
}
