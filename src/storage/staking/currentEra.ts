import { UnknownVersionError } from '../../utils/errors';
import { StakingCurrentEraStorage } from '../../types/generated/storage';
import { Ctx, Block } from '../../processor';

interface StorageData {
  index: number | undefined;
}

async function getStorageData(
  ctx: Ctx,
  block: Block
): Promise<StorageData | undefined> {
  const storage = new StakingCurrentEraStorage(ctx, block.header);
  if (!storage.isExists) return undefined;

  if (storage.isV1020) {
    return { index: await storage.getAsV1020() };
  } else if (storage.isV1050) {
    return { index: await storage.getAsV1050() };
  } else {
    throw new UnknownVersionError(storage.constructor.name);
  }
}

const storageCache: {
  hash?: string;
  value?: CurrentEra;
} = {};

interface CurrentEra {
  index: number | undefined;
}

export async function getCurrentEra(
  ctx: Ctx,
  block: Block
): Promise<CurrentEra | undefined> {
  if (storageCache.hash !== block.header.hash) {
    storageCache.hash = block.header.hash;
    delete storageCache.value;
  }

  if (!storageCache.value) {
    storageCache.value = await getStorageData(ctx, block);
  }

  return storageCache.value;
}
