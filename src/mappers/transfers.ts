import { Block, Ctx } from '../processor';
import { BalancesTransferEventData } from '../utils/types';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { TOTAL_TRANSFERS_CHECK_STEP } from '../config';

export function handleTransfers(
  ctx: Ctx,
  transferEventsData: Set<BalancesTransferEventData> | undefined
) {
  if (!transferEventsData) return;
  const histDataMeta = getOrCreateHistoricalDataMeta();
  const totals = getOrCreateTotals();

  totals.transfersCount = BigInt(transferEventsData.size);
  SquidCache.upsert(totals);
  //
  // for (const transfer of transferEventsData.values()) {
  //   if (
  //     transfer.timestamp.getTime() -
  //       (histDataMeta.transferLatestTime
  //         ? histDataMeta.transferLatestTime.getTime()
  //         : 0) <
  //     TOTAL_TRANSFERS_CHECK_STEP
  //   ) {
  //     continue;
  //   }
  //
  //
  // }
}
