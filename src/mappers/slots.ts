import { ProcessorContext } from '../processor'
import { Current } from '../model'
import { getChain } from '../chains'
import {StoreWithCache} from '@belopash/squid-tools'

const { api } = getChain()

export async function handleSlots(
  ctx: ProcessorContext<StoreWithCache>,
  block: { hash: string },
  current: Current
) {
  // TODO: Rewiork storage getter
  const nominationPoolsTotals = await api.storage.getLeasesTotalAmount(
    ctx,
    block
  )
  if (nominationPoolsTotals == undefined) return
  current.slotsTokensLockedInParachains = nominationPoolsTotals
}