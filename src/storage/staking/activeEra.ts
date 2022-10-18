import { UnknownVersionError } from '../../utils/errors'
import { StakingActiveEraStorage } from '../../types/generated/storage'
import { Ctx, Block } from '../../processor';
interface StorageData {
    index: number
    timestamp: bigint | undefined
}

async function getStorageData(ctx: Ctx, block: Block): Promise<StorageData | undefined> {
    const storage = new StakingActiveEraStorage(ctx, block.header)
    if (!storage.isExists) return undefined

    if (storage.isV1050) {
        const data = await storage.getAsV1050()
        if (!data) return undefined
        return {
            index: data.index,
            timestamp: data.start,
        }
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

const storageCache: {
    hash?: string
    value?: ActiveEra
} = {}

interface ActiveEra {
    index: number
    timestamp: number | undefined
}

export async function getActiveEra(ctx: Ctx, block: Block): Promise<ActiveEra | undefined> {
    if (storageCache.hash !== block.header.hash) {
        storageCache.hash = block.header.hash
        delete storageCache.value
    }

    if (!storageCache.value) {
        const data = await getStorageData(ctx, block)
        if (!data) return undefined

        storageCache.value = {
            index: data.index,
            timestamp: Number(data.timestamp),
        }
    }

    return storageCache.value
}
