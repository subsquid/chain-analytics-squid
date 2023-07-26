import {StoreWithCache} from '@belopash/squid-tools'
import { BackupCounter } from '../model'
import { ProcessorContext } from '../processor'
import { CallSignedExtrinsicData } from '../utils/types'

export async function handleExtrinsics(
  ctx: ProcessorContext<StoreWithCache>,
  extrinsicsData: Map<string, CallSignedExtrinsicData> | undefined,
  backupCounter: BackupCounter
) {
  if (!extrinsicsData) return
  for (const e of [...extrinsicsData.values()]) {
    backupCounter.chainSignedExtrinsics += 1n
  }
}
