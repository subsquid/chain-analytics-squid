import { UnknownVersionError } from '../../utils/errors'
import { encodeAccount, getStorageHash } from '../../utils/common';
import { SessionValidatorsStorage, SystemAccountStorage } from '../../types/generated/storage';

import { Ctx, Block } from '../../processor';

type StorageData = Uint8Array[]

async function getStorageData(ctx: Ctx, block: Block): Promise<StorageData | undefined> {
    const storage = new SystemAccountStorage(ctx, block.header)
    if (!storage.isExists) return undefined

}

const storageCache: {
    hash?: string
    value?: HolderKeys
} = {}

type HolderKeys = string[]

export async function getHoldersKeys(ctx: Ctx, block: Block): Promise<HolderKeys | undefined> {
    if (storageCache.hash !== block.header.hash) {
        storageCache.hash = block.header.hash
        delete storageCache.value
    }

    if (!storageCache.value) {
        const data = await getStorageData(ctx, block)
        if (!data) return undefined

        const keys: string[] = await ctx._chain.client.call('state_getKeys', [
            getStorageHash('System', 'Account'),
            block.header.hash
        ]);

        if (!keys) return undefined;

        storageCache.value = [...keys]
    }

    return storageCache.value
}
