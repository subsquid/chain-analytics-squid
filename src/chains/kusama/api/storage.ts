import { Block, Chain, ChainContext } from '../types/support';
import {
  BalancesTotalIssuanceStorage,
  SystemAccountStorage,
  StakingActiveEraStorage,
  StakingCurrentEraStorage,
  SessionValidatorsStorage,
  StakingErasStakersStorage,
  StakingStakersStorage,
  StakingValidatorCountStorage,
  NominationPoolsBondedPoolsStorage
} from '../types/storage';
import { UnknownVersionError } from '../../../utils/errors';
import { decodeAccount, encodeAccount } from '../../../utils/common';
import { getChain } from '../../index';
import {
  EraStaker,
  ErasStakersArgs,
  NominationPoolsData,
  AccountBalancesPair
} from '../../../utils/types';
import { getKeysCountAll, handleHoldersTotals } from '../../utils';
import { excludeFromCirculatingAssetsAmountAddresses } from '../../moonriver/config';

export async function getTotalIssuance(ctx: ChainContext, block: Block) {
  const storage = new BalancesTotalIssuanceStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1020) {
    return await storage.asV1020.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}
export async function getActiveEra(ctx: ChainContext, block: Block) {
  const storage = new StakingActiveEraStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1050) {
    return await storage.asV1050.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}
export async function getCurrentEra(ctx: ChainContext, block: Block) {
  const storage = new StakingCurrentEraStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1020) {
    return await storage.asV1020.get();
  } else if (storage.isV1050) {
    return await storage.asV1050.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getValidators(ctx: ChainContext, block: Block) {
  const storage = new SessionValidatorsStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1020) {
    return await storage.asV1020.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}
export async function getValidatorsCount(ctx: ChainContext, block: Block) {
  const list = await getValidators(ctx, block);
  if (!list) return undefined;
  return list.length;
}

export async function getErasStakersData(
  ctx: ChainContext,
  block: Block,
  keyPairs: [number, Uint8Array][]
) {
  const storage = new StakingErasStakersStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1050) {
    return await storage.asV1050.getMany(keyPairs);
  }

  throw new UnknownVersionError(storage.constructor.name);
}
export async function getStakersData(
  ctx: ChainContext,
  block: Block,
  keyPairs: Uint8Array[]
) {
  const storage = new StakingStakersStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1020) {
    return await storage.asV1020.getMany(keyPairs);
  }

  throw new UnknownVersionError(storage.constructor.name);
}
export async function getIdealValidatorsCount(ctx: ChainContext, block: Block) {
  const storage = new StakingValidatorCountStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1020) {
    return await storage.asV1020.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getNominationPoolsData(ctx: ChainContext, block: Block) {
  const storage = new NominationPoolsBondedPoolsStorage(ctx, block);
  if (!storage.isExists) return undefined;

  const res: NominationPoolsData = {
    totalPoolsStake: 0n,
    totalPoolsMembers: 0,
    totalPoolsCount: 0
  };

  if (storage.isV9220) {
    for (const poolDetails of (await storage.asV9220.getAll()).filter(
      (p) => p.state.__kind === 'Open'
    )) {
      res.totalPoolsCount++;
      res.totalPoolsMembers += poolDetails.memberCounter;
      res.totalPoolsStake += poolDetails.points;
    }
  } else if (storage.isV9230) {
    for (const poolDetails of (await storage.asV9230.getAll()).filter(
      (p) => p.state.__kind === 'Open'
    )) {
      res.totalPoolsCount++;
      res.totalPoolsMembers += poolDetails.memberCounter;
      res.totalPoolsStake += poolDetails.points;
    }
  } else {
    throw new UnknownVersionError(storage.constructor.name);
  }
  return res;
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
  const storageSysAccount = new SystemAccountStorage(ctx, block);

  if (!storageSysAccount.isExists) return undefined;
  let index = 1;

  const accountsList: AccountBalancesPair[] = [];
  if (storageSysAccount.isV1050) {
    return undefined; // This call is not available in this spec version
  } else if (storageSysAccount.isV2025) {
    for await (const keysPack of storageSysAccount.asV2025.getPairsPaged(
      1000
    )) {
      console.log(`GetPairs fetch #${index}`);
      index++;
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
      );
    }

    return handleHoldersTotals(accountsList);
  } else if (storageSysAccount.isV2028) {
    for await (const keysPack of storageSysAccount.asV2028.getPairsPaged(
      1000
    )) {
      console.log(`GetPairs fetch #${index}`);
      index++;
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
      );
    }

    return handleHoldersTotals(accountsList);
  } else if (storageSysAccount.isV2030) {
    for await (const keysPack of storageSysAccount.asV2030.getPairsPaged(
      1000
    )) {
      console.log(`GetPairs fetch #${index}`);
      index++;
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
      );
    }
    return handleHoldersTotals(accountsList);
  }
  throw new UnknownVersionError(storageSysAccount.constructor.name);
}

export async function getEraStakersData(
  ctx: ChainContext,
  block: Block,
  keys: ErasStakersArgs[]
) {
  if (keys.length === 0) return [];
  const chain = getChain();
  const { config: chainConfig } = chain;

  const eraStakers: [number, Uint8Array][] = keys.map((k) => [k[1] || 0, k[0]]);
  const stakers: Uint8Array[] = keys.map((k) => k[0]);

  const data =
    (await getErasStakersData(ctx, block, eraStakers)) ||
    (await getStakersData(ctx, block, stakers));
  if (!data) return undefined;

  return data.map((v) => ({
    total: v.total,
    own: v.own,
    nominators: v.others.map((n) => ({
      id: encodeAccount(n.who, chainConfig.prefix),
      vote: n.value
    }))
  })) as EraStaker[];
}
