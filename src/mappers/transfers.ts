import { Ctx } from '../processor';
import { BalancesTransferEventData, BlockEventName } from '../utils/types';
import { getOrCreateTotals } from './totals';
import { Transfer } from '../model';
import { ParsedEventsDataScope } from '../utils/common';

export async function getOrCreateTransfer(
  ctx: Ctx,
  blockData: { blockNumber: number; blockHash: string }
) {
  let tr = await ctx.store.get(
    Transfer,
    blockData.blockNumber.toString(),
    false
  );

  if (tr) return tr;

  tr = new Transfer({
    id: blockData.blockNumber.toString(),
    blockHash: blockData.blockHash,
    timestamp: new Date(),
    totalVolume: 0n,
    totalCount: 0
  });

  return tr;
}

export async function handleTransfers(ctx: Ctx) {
  const transferEventsData: Set<BalancesTransferEventData> | undefined =
    ParsedEventsDataScope.getInstance().get<BalancesTransferEventData>(
      BlockEventName.BALANCES_TRANSFER
    );

  if (!transferEventsData) return;
  const totals = await getOrCreateTotals(ctx);

  for (const e of transferEventsData) {
    const tr = await getOrCreateTransfer(ctx, e);

    tr.timestamp = e.timestamp;
    tr.totalVolume += e.volume;
    tr.totalCount += 1;

    ctx.store.deferredUpsert(tr);
  }

  totals.transfersCount += BigInt(transferEventsData.size);
  ctx.store.deferredUpsert(totals);
}
