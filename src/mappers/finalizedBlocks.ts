import { Ctx, Block } from '../processor';
import { getOrCreateTotals } from './totals';
import { SystemNumberStorage } from '../types/generated/storage';

export async function handleFinalizedBlock(ctx: Ctx, block: Block) {

  const totals = await getOrCreateTotals(ctx);

  totals.finalizedBlocks = BigInt(block.header.height);

  ctx.store.deferredUpsert(totals);
}
