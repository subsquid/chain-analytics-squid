import { UnknownVersionError } from '../../utils/errors';
import { decodeAccount, encodeAccount } from '../../utils/common';
import {
  StakingErasStakersStorage,
  StakingStakersStorage
} from '../../types/generated/storage';
import { Ctx, Block } from '../../processor';

interface StorageData {
  total: bigint;
  own: bigint;
  others: { who: Uint8Array; value: bigint }[];
}

async function getStakersData(
  ctx: Ctx,
  block: Block,
  keys: Uint8Array[]
): Promise<StorageData[] | undefined> {
  const storage = new StakingStakersStorage(ctx, block.header);
  if (!storage.isExists) return undefined;

  if (storage.isV1020) {
    return await storage.getManyAsV1020(keys);
  } else {
    throw new UnknownVersionError(storage.constructor.name);
  }
}

async function getErasStakersData(
  ctx: Ctx,
  block: Block,
  keys: [era: number, account: Uint8Array][]
): Promise<StorageData[] | undefined> {
  const storage = new StakingErasStakersStorage(ctx, block.header);
  if (!storage.isExists) return undefined;

  if (storage.isV1050) {
    return await storage.getManyAsV1050(keys);
  } else {
    throw new UnknownVersionError(storage.constructor.name);
  }
}

interface EraStaker {
  total: bigint;
  own: bigint;
  nominators: { id: string; vote: bigint }[];
}

type ErasStakersArgs = [account: string, era?: number];

async function queryStorageFunction(
  ctx: Ctx,
  block: Block,
  keys: ErasStakersArgs[]
): Promise<(EraStaker | undefined)[] | undefined> {
  if (keys.length === 0) return [];

  const eraStakers: [number, Uint8Array][] = keys.map((k) => [
    k[1] || 0,
    decodeAccount(k[0])// TODO add implementation
  ]);
  const stakers: Uint8Array[] = keys.map((k) => decodeAccount(k[0])); // TODO add implementation

  const data =
    (await getErasStakersData(ctx, block, eraStakers)) ||
    (await getStakersData(ctx, block, stakers));
  if (!data) return undefined;

  return data.map((v) => ({
    total: v.total,
    own: v.own,
    nominators: v.others.map((n) => ({
      id: encodeAccount(n.who), // TODO add implementation
      vote: n.value
    }))
  }));
}

export async function getEraStakersData(
  ctx: Ctx,
  block: Block,
  ...args: ErasStakersArgs
): Promise<EraStaker | undefined>;
export async function getEraStakersData(
  ctx: Ctx,
  block: Block,
  keys: ErasStakersArgs[]
): Promise<(EraStaker | undefined)[] | undefined>;
export async function getEraStakersData(
  ctx: Ctx,
  block: Block,
  keys: ErasStakersArgs[] | string,
  era?: number
) {
  if (typeof keys === 'string') {
    return (await queryStorageFunction(ctx, block, [[keys, era]]))?.[0];
  } else {
    return await queryStorageFunction(ctx, block, keys);
  }
}
