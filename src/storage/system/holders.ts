import { UnknownVersionError } from '../../utils/errors';
import { encodeAccount, getStorageHash, sleepTo } from '../../utils/common';
import {
  SessionValidatorsStorage,
  SystemAccountStorage
} from '../../types/generated/storage';

import { Ctx, Block } from '../../processor';
import { Chain as ProcessorChain } from '@subsquid/substrate-processor/lib/chain';
import { ResilientRpcClient } from '@subsquid/rpc-client/lib/resilient';

type StorageData = Uint8Array[];

// async function getStorageData(
//   ctx: Ctx,
//   block: Block
// ): Promise<StorageData | undefined> {
//   const storage = new SystemAccountStorage(ctx, block.header);
//   if (!storage.isExists) return undefined;
// }

type HolderKeys = string[];

export async function getHoldersKeysCount(
  ctx: Ctx,
  block: Block,
  threadId: string
): Promise<number | undefined> {
  const storage = new SystemAccountStorage(ctx, block.header);
  if (!storage.isExists) return undefined;

  const keysList = await getHoldersKeys(ctx, block, threadId);

  return keysList ? keysList.length : undefined;
}

export async function countKeys(ctx: Ctx, block: Block) {
  const chain = ctx._chain as ProcessorChain;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const client = (chain as any).client as ResilientRpcClient;

  const req = getStorageHash('System', 'Account');

  const totalSize = (await client.call('state_getStorageSizeAt', [
    req,
    block.header.hash
  ])) as number;

  if (totalSize === 0 || !totalSize) return 0;

  const keys = (await client.call('state_getKeysPagedAt', [
    req,
    1,
    null,
    block.header.hash
  ])) as string[];

  const keySize = (await client.call('state_getStorageSizeAt', [
    keys[0],
    block.header.hash
  ])) as number;

  return totalSize / keySize;
}

export async function getHoldersKeys(
  ctx: Ctx,
  block: Block,
  threadId: string
): Promise<HolderKeys | undefined> {
  const storage = new SystemAccountStorage(ctx, block.header);
  if (!storage.isExists) return undefined;

  // console.log(`>>> ${threadId} :::  start  - ${new Date().toISOString()}`);
  let keyArray = await ctx._chain.client.call('state_getKeysPaged', [
    getStorageHash('System', 'Account'),
    1000,
    null,
    block.header.hash
  ]);

  if (keyArray === undefined || keyArray.length === 0) {
    const keys: string[] = await ctx._chain.client.call('state_getKeys', [
      getStorageHash('System', 'Account'),
      block.header.hash
    ]);

    // console.log(
    //   `>>> ${threadId} :::  finish  - ${new Date().toISOString()} - ${
    //     keys ? keys.length : 0
    //   }`
    // );

    if (!keys) return undefined;

    return [...keys];
  }

  let fetched = false;
  while (!fetched) {
    await sleepTo(500);
    let intermArray = await ctx._chain.client.call('state_getKeysPaged', [
      getStorageHash('System', 'Account'),
      1000,
      keyArray[keyArray.length - 1],
      block.header.hash
    ]);
    if (intermArray.length === 0) {
      fetched = true;
    } else {
      keyArray.push(...intermArray);
    }
  }

  // console.log(
  //   `>>> ${threadId} :::  finish  - ${new Date().toISOString()} - ${
  //     keyArray ? keyArray.length : 0
  //   }`
  // );

  return keyArray;
}
