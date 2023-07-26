import {StoreWithCache} from '@belopash/squid-tools'
import {BackupCounter} from '../model'
import {ProcessorContext} from '../processor'
import {BalancesTransferEventData} from '../utils/types'

export async function handleTransfers(
  ctx: ProcessorContext<StoreWithCache>,
  transferEventsData: Map<string, BalancesTransferEventData> | undefined,
  backupCounter: BackupCounter
) {
  if (!transferEventsData) return
  for (const e of [...transferEventsData.values()]) {
    backupCounter.balancesTransfersVolume += e.volume
    backupCounter.balancesTransfersAmount += 1n
  }
  await ctx.store.upsert(backupCounter)
}
