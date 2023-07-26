import { ProcessorContext } from '../processor'
import { Current } from '../model'
import { getChain } from '../chains'
import {StoreWithCache} from '@belopash/squid-tools'

const { api } = getChain()

export async function handleNominationPools(
  ctx: ProcessorContext<StoreWithCache>,
  block: { hash: string },
  current: Current
) {
  // TODO: Rewiork storage getter
  const nominationPoolsDetails = await api.storage.getNominationPoolsData(
    ctx,
    block
  )
  if (nominationPoolsDetails == undefined) return
  else {
    let totalPoolsCount = 0
    let totalPoolsStake = 0n
    let totalActivePoolsCount = 0
    let totalActivePoolsStake = 0n
    let totalPoolsMembers = 0

    for (const poolDetails of nominationPoolsDetails) {
      totalPoolsCount++
      totalPoolsMembers += poolDetails.memberCounter
      totalPoolsStake += poolDetails.points
      if (poolDetails.state.__kind === 'Open') {
        totalActivePoolsCount++
        totalActivePoolsStake += poolDetails.points
      }
    }

    current.nominationPoolsMembersAmount = totalPoolsMembers
    current.nominationPoolsPoolsActiveAmount = totalActivePoolsCount
    current.nominationPoolsPoolsInactiveAmount =
      totalPoolsCount - totalActivePoolsCount
    current.nominationPoolsPoolsActiveTotalStake = totalActivePoolsStake
    current.nominationPoolsPoolsInactiveTotalStake =
      totalPoolsStake - totalActivePoolsStake
  }
}
