import { Block, Ctx } from '../processor';
import { BalancesTransferEventData } from '../utils/types';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { TOTAL_TRANSFERS_CHECK_STEP } from '../config';

export async function handleTransfers(
  ctx: Ctx,
  transferEventsData: Set<BalancesTransferEventData> | undefined
) {
  if (!transferEventsData) return;
  // const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);
  const totals = await getOrCreateTotals(ctx);

  totals.transfersCount = BigInt(transferEventsData.size);
  ctx.store.deferredUpsert(totals);
}
