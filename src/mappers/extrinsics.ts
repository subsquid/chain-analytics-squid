import { Ctx } from '../processor';
import {
  BalancesWithdrawEventData,
  BlockEventName,
  CallSignedExtrinsicData
} from '../utils/types';
import { getOrCreateTotals } from './totals';
import { Extrinsic } from '../model';
import { ParsedEventsDataScope } from '../utils/common';

export async function getOrCreateSignedExtrinsics(
  ctx: Ctx,
  blockData: { blockNumber: number; blockHash: string }
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
    timestamp: new Date(),
    totalCount: 0,
    calls: ''
  });

  return ex;
}

export async function handleExtrinsics(ctx: Ctx) {
  const callsData: Set<CallSignedExtrinsicData> | undefined =
    ParsedEventsDataScope.getInstance().get<CallSignedExtrinsicData>(
      BlockEventName.SIGNED_EXTRINSIC
    );
  if (!callsData) return;
  const totals = await getOrCreateTotals(ctx);

  for (const e of callsData) {
    const ex = await getOrCreateSignedExtrinsics(ctx, e);

    ex.timestamp = e.timestamp;
    ex.totalCount += 1;
    ex.calls =
      ex.calls!.length === 0 ? e.callName : `${ex.calls},${e.callName}`;

    ctx.store.deferredUpsert(ex);
  }

  totals.signedExtrinsics += BigInt(callsData.size);
  ctx.store.deferredUpsert(totals);
}
