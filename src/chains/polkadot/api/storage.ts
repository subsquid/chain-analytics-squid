import { Block, Chain, ChainContext } from '../types/support';
import {
  BalancesTotalIssuanceStorage,
  SystemAccountStorage,
  StakingActiveEraStorage,
  StakingCurrentEraStorage,
  SessionValidatorsStorage,
  StakingErasStakersStorage,
  StakingValidatorCountStorage
} from '../types/storage';
import { UnknownVersionError } from '../../../utils/errors';
import { decodeAccount, encodeAccount } from '../../../utils/common';
import { getChain } from '../../index';
import {
  EraStaker,
  ErasStakersArgs,
  NominationPoolsData
} from '../../../utils/types';
import { getKeysCountAll } from '../../utils';
import { NominationPoolsBondedPoolsStorage } from '../../kusama/types/storage';

export async function getTotalIssuance(ctx: ChainContext, block: Block) {
  const storage = new BalancesTotalIssuanceStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV0) {
    return await storage.asV0.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}
export async function getActiveEra(ctx: ChainContext, block: Block) {
  const storage = new StakingActiveEraStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV0) {
    return await storage.asV0.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}
export async function getCurrentEra(ctx: ChainContext, block: Block) {
  const storage = new StakingCurrentEraStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV0) {
    return await storage.asV0.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getValidators(ctx: ChainContext, block: Block) {
  const storage = new SessionValidatorsStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV0) {
    return await storage.asV0.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getValidatorsCount(
  ctx: ChainContext,
  block: Block
) {
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

  if (storage.isV0) {
    return await storage.asV0.getMany(keyPairs);
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getIdealValidatorsCount(ctx: ChainContext, block: Block) {
  const storage = new StakingValidatorCountStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV0) {
    return await storage.asV0.get();
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

export async function getTotalHoldersCount(ctx: ChainContext, block: Block) {
  const storage = new SystemAccountStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV0) {
    return await getKeysCountAll(storage.asV0.getKeysPaged(1000));
  } else if (storage.isV25) {
    return await getKeysCountAll(storage.asV25.getKeysPaged(1000));
  } else if (storage.isV28) {
    return await getKeysCountAll(storage.asV28.getKeysPaged(1000));
  } else if (storage.isV30) {
    return await getKeysCountAll(storage.asV30.getKeysPaged(1000));
  } else {
    throw new UnknownVersionError(storage.constructor.name);
  }
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

  const data = await getErasStakersData(ctx, block, eraStakers);
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
