import { Ctx } from '../processor';
import {
  BalancesWithdrawEventData,
  CallSignedExtrinsicData
} from '../utils/types';
import { getOrCreateTotals } from './totals';
import { Extrinsic } from '../model';

export async function getOrCreateSignedExtrinsics(
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
  callsData: Set<CallSignedExtrinsicData> | undefined
) {
  if (!callsData) return;
  const totals = await getOrCreateTotals(ctx);

  for (const e of callsData) {
    const ex = await getOrCreateSignedExtrinsics(ctx, e);
    ex.totalCount += 1;
    ctx.store.deferredUpsert(ex);
  }

  totals.signedExtrinsics += BigInt(callsData.size);
  ctx.store.deferredUpsert(totals);
}
