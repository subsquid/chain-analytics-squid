import { Ctx } from '../processor'
import { BalancesTransferEventData } from '../utils/types'
import { BackupCounter } from '../model'

export async function handleTransfers(
  ctx: Ctx,
  transferEventsData: Map<string, BalancesTransferEventData> | undefined,
  backupCounter: BackupCounter
) {
  if (!transferEventsData) return
  for (const e of [...transferEventsData.values()]) {
    backupCounter.balancesTransfersVolume += e.volume
    backupCounter.balancesTransfersAmount += 1n
  }
  ctx.store.deferredUpsert(backupCounter)
}
