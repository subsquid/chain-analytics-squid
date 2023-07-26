import { Block, Chain, ChainContext } from '../types/support'
import {
  BalancesTotalIssuanceStorage,
  SystemAccountStorage,
  StakingActiveEraStorage,
  StakingCurrentEraStorage,
  SessionValidatorsStorage,
  StakingErasStakersStorage,
  StakingStakersStorage,
  StakingValidatorCountStorage,
  BalancesAccountStorage,
  NominationPoolsBondedPoolsStorage,
  StakingCounterForValidatorsStorage,
  StakingCounterForNominatorsStorage,
  AuctionsAuctionCounterStorage,
  SlotsLeasesStorage,
  IdentitySuperOfStorage,
  BalancesFreeBalanceStorage,
  BalancesReservedBalanceStorage
} from '../types/storage'
import { FunctionNotExist, UnknownVersionError } from '../../../utils/errors'
import { decodeAccount, encodeAccount } from '../../../utils/common'
import { getChain } from '../../index'
import {
  EraStaker,
  ErasStakersArgs,
  NominationPoolsData,
  AccountBalancesPair,
  AccountBalanceShort
} from '../../../utils/types'
import { getKeysCountAll, handleHoldersTotals } from '../../utils'
import { StorageGetter } from '../../interfaces/chainApi'

export async function getLeasesTotalAmount(ctx: ChainContext, block: Block) {
  const storage = new SlotsLeasesStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV9010) {
    const slots = await storage.asV9010.getAll()
    let sum = 0n
    for (const slot of slots) {
      const amount = slot.at(0)?.at(1)
      if (amount) {
        sum += amount as bigint
      }
    }
    return sum
  }
  throw new UnknownVersionError(storage.constructor.name)
}

export async function getIdentitySupers(
  ctx: ChainContext,
  block: Block,
  keys: Uint8Array[]
) {
  const storage = new IdentitySuperOfStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV1052) {
    const supersData = await storage.asV1052.getMany(keys)
    return supersData.map((superData) => {
      if (superData === undefined) return superData
      else return superData[0]
    })
  }

  throw new UnknownVersionError(storage.constructor.name)
}

export async function getTotalIssuance(ctx: ChainContext, block: Block) {
  const storage = new BalancesTotalIssuanceStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV1020) {
    return await storage.asV1020.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}
export async function getActiveEra(ctx: ChainContext, block: Block) {
  const storage = new StakingActiveEraStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV1050) {
    return await storage.asV1050.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}
export async function getCurrentEra(ctx: ChainContext, block: Block) {
  const storage = new StakingCurrentEraStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV1020) {
    return await storage.asV1020.get()
  } else if (storage.isV1050) {
    return await storage.asV1050.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}

export async function getValidators(ctx: ChainContext, block: Block) {
  const storage = new SessionValidatorsStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV1020) {
    return await storage.asV1020.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}

export async function getValidatorsCount(ctx: ChainContext, block: Block) {
  const list = await getValidators(ctx, block)
  if (!list) return undefined
  return list.length
}
export async function getIdealValidatorsCount(ctx: ChainContext, block: Block) {
  const storage = new StakingValidatorCountStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV1020) {
    return await storage.asV1020.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}

export async function getNominationPoolsData(ctx: ChainContext, block: Block) {
  const storage = new NominationPoolsBondedPoolsStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV9220) {
    return await storage.asV9220.getAll()
  } else if (storage.isV9230) {
    return await storage.asV9230.getAll()
  } else if (storage.isV9420) {
    return await storage.asV9420.getAll()
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

export async function getCounterForValidatorsNumber(
  ctx: ChainContext,
  block: Block
) {
  const storage = new StakingCounterForValidatorsStorage(ctx, block)
  if (!storage.isExists) return undefined
  if (storage.isV9050) {
    return await storage.asV9050.get()
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

export async function getCounterForNominatorsNumber(
  ctx: ChainContext,
  block: Block
) {
  const storage = new StakingCounterForNominatorsStorage(ctx, block)
  if (!storage.isExists) return undefined
  if (storage.isV9050) {
    return await storage.asV9050.get()
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

export async function getAuctionCounterNumber(ctx: ChainContext, block: Block) {
  const storage = new AuctionsAuctionCounterStorage(ctx, block)
  if (!storage.isExists) return undefined
  if (storage.isV9010) {
    return await storage.asV9010.get()
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

//
// export async function getTotalHoldersCount(ctx: ChainContext, block: Block) {
//   const storage = new SystemAccountStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV1050) {
//     return undefined; // This call is not available in this spec version
//   } else if (storage.isV2025) {
//     return await getKeysCountAll(storage.asV2025.getKeysPaged(1000));
//   } else if (storage.isV2028) {
//     return await getKeysCountAll(storage.asV2028.getKeysPaged(1000));
//   } else if (storage.isV2030) {
//     return await getKeysCountAll(storage.asV2030.getKeysPaged(1000));
//   } else {
//     throw new UnknownVersionError(storage.constructor.name);
//   }
// }

export async function getHoldersTotals(ctx: ChainContext, block: Block) {
  const storageSysAccount = new SystemAccountStorage(ctx, block)

  if (!storageSysAccount.isExists) return undefined
  let index = 1

  const accountsList: AccountBalancesPair[] = []
  if (storageSysAccount.isV1050) {
    return undefined // This call is not available in this spec version
  } else if (storageSysAccount.isV2025) {
    for await (const keysPack of storageSysAccount.asV2025.getPairsPaged(
      1000
    )) {
      console.log(`GetPairs fetch #${index}`)
      index++
      keysPack.forEach((pair) =>
        accountsList.push([
          pair[0],
          {
            free: pair[1].data.free,
            reserved: pair[1].data.reserved,
            miscFrozen: pair[1].data.miscFrozen,
            feeFrozen: pair[1].data.feeFrozen
          }
        ])
      )
    }

    return handleHoldersTotals(accountsList)
  } else if (storageSysAccount.isV2028) {
    for await (const keysPack of storageSysAccount.asV2028.getPairsPaged(
      1000
    )) {
      console.log(`GetPairs fetch #${index}`)
      index++
      keysPack.forEach((pair) =>
        accountsList.push([
          pair[0],
          {
            free: pair[1].data.free,
            reserved: pair[1].data.reserved,
            miscFrozen: pair[1].data.miscFrozen,
            feeFrozen: pair[1].data.feeFrozen
          }
        ])
      )
    }

    return handleHoldersTotals(accountsList)
  } else if (storageSysAccount.isV2030) {
    for await (const keysPack of storageSysAccount.asV2030.getPairsPaged(
      1000
    )) {
      console.log(`GetPairs fetch #${index}`)
      index++
      keysPack.forEach((pair) =>
        accountsList.push([
          pair[0],
          {
            free: pair[1].data.free,
            reserved: pair[1].data.reserved,
            miscFrozen: pair[1].data.miscFrozen,
            feeFrozen: pair[1].data.feeFrozen
          }
        ])
      )
    }
    return handleHoldersTotals(accountsList)
  }
  throw new UnknownVersionError(storageSysAccount.constructor.name)
}

export async function getEraStakersData(
  ctx: ChainContext,
  block: Block,
  era: number
) {
  const storage = new StakingErasStakersStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV1050) {
    const pairs = await storage.asV1050.getPairs(era)
    const eraStakers: EraStaker[] = pairs.map((pair) => {
      const [[era, validator], stats] = pair
      const eraStaker: EraStaker = {
        id: validator,
        ...stats
      }
      return eraStaker
    })
    return eraStakers
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

export async function getSystemAccountBalancesByKeys(
  ctx: ChainContext,
  block: Block,
  keys: Uint8Array[]
): Promise<AccountBalanceShort[] | undefined> {
  const storageSysAccount = new SystemAccountStorage(ctx, block)

  if (!storageSysAccount.isExists) return undefined

  const data = await ctx._chain.queryStorage2(
    block.hash,
    'System',
    'Account',
    keys
  )

  return data.map((d) => ({ free: d.free, reserved: d.reserved }))
}
export async function getBalancesAccountBalancesByKeys(
  ctx: ChainContext,
  block: Block,
  keys: Uint8Array[]
): Promise<AccountBalanceShort[] | undefined> {
  const storageBalAccount = new BalancesAccountStorage(ctx, block)

  if (!storageBalAccount.isExists) return undefined

  const data = await ctx._chain.queryStorage2(
    block.hash,
    'Balances',
    'Account',
    keys
  )

  return data.map((d) => ({ free: d.free, reserved: d.reserved }))
}

export async function getSystemAccountBalancesOldByKeys(ctx: ChainContext, block: Block, keys: Uint8Array[]) {
  const storageFree = new BalancesFreeBalanceStorage(ctx, block)

  const dataFree = storageFree.isExists
      ? await storageFree.asV1020.getMany(keys)
      : new Array(keys.length).fill(0n)

  const storageReserved = new BalancesReservedBalanceStorage(ctx, block)

  const dataReserved = storageReserved.isExists
      ? await storageReserved.asV1020.getMany(keys)
      : new Array(keys.length).fill(0n)

  return dataFree.map((f, i) => ({free: f, reserved: dataReserved[i]}))
}

// NOT EXISTING STORAGE FUNCTIONS FROM OTHER CHAINS
// We need to define them everywhere with 'never' return value to match chainApi interface
export const getSelectedCollators: StorageGetter<[], Uint8Array[] | undefined> =
  async function (ctx: ChainContext, block: Block): Promise<never> {
    throw new FunctionNotExist()
  }

export async function getSelectedCollatorsCount(
  ctx: ChainContext,
  block: Block
): Promise<never> {
  throw new FunctionNotExist()
}

export async function getStakingDelegatorsAllDataShort(
  ctx: ChainContext,
  block: Block
): Promise<never> {
  throw new FunctionNotExist()
}

export async function getCollatorsDataShort(
  ctx: ChainContext,
  block: Block,
  keys: Uint8Array[]
): Promise<never> {
  throw new FunctionNotExist()
}

export async function getRoundNumber(
  ctx: ChainContext,
  block: Block
): Promise<never> {
  throw new FunctionNotExist()
}

export async function getTotalStake(
  ctx: ChainContext,
  block: Block
): Promise<never> {
  throw new FunctionNotExist()
}
