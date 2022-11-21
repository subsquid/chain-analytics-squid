import { Ctx } from '../processor';
import {
  BalancesWithdrawEventData,
  CallSignedExtrinsicData
} from '../utils/types';
import { getOrCreateTotals } from './totals';
import { Extrinsic } from '../model';

export async function getOrCreateSignedExtrinsicsBlockTotals(
  ctx: Ctx,
  blockData: { blockNumber: number; blockHash: string; timestamp: Date }
) {
  let ex = await ctx.store.get(
    Extrinsic,
    blockData.blockNumber.toString(),
    false
  );

  if (ex) return ex;

  ex = new Extrinsic({
    id: blockData.blockNumber.toString(),
    blockHash: blockData.blockHash,
    timestamp: blockData.timestamp,
    totalCount: 0
  });

  return ex;
}

export async function handleExtrinsics(
  ctx: Ctx,
  extrinsicsData: Map<string, CallSignedExtrinsicData> | undefined
) {
  if (!extrinsicsData) return;
  const totals = await getOrCreateTotals(ctx);

  for (const e of [...extrinsicsData.values()]) {
    const exBlockTotals = await getOrCreateSignedExtrinsicsBlockTotals(ctx, e);
    exBlockTotals.totalCount += 1;
    ctx.store.deferredUpsert(exBlockTotals);
  }

  totals.signedExtrinsics += BigInt(extrinsicsData.size);
  ctx.store.deferredUpsert(totals);
}
