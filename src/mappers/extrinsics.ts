import { BackupCounter } from '../model'
import { Ctx } from '../processor'
import { CallSignedExtrinsicData } from '../utils/types'

export async function handleExtrinsics(
  ctx: Ctx,
  extrinsicsData: Map<string, CallSignedExtrinsicData> | undefined,
  backupCounter: BackupCounter
) {
  if (!extrinsicsData) return
  for (const e of [...extrinsicsData.values()]) {
    backupCounter.chainSignedExtrinsics += 1n
  }
}
