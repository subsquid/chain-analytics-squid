import { Ctx } from '../processor'
import { Current } from '../model'
import { getChain } from '../chains'

const { api } = getChain()

export async function handleSlots(
  ctx: Ctx,
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