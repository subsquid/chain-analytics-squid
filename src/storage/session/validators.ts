import { UnknownVersionError } from '../../utils/errors'
import { encodeAccount } from '../../utils/common'
import { SessionValidatorsStorage, StakingValidatorCountStorage } from '../../types/generated/storage';
import { BlockContext as StorageContext } from '../../types/generated/support'
import { Ctx, Block } from '../../processor';

type StorageData = Uint8Array[]

async function getStorageDataValidatorsIdealCount(ctx: Ctx, block: Block): Promise<number | undefined> {
    const storage = new StakingValidatorCountStorage(ctx, block.header)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        return await storage.getAsV1020()
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getStorageDataValidators(ctx: Ctx, block: Block): Promise<StorageData | undefined> {
    const storage = new SessionValidatorsStorage(ctx, block.header)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        return await storage.getAsV1020()
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

const storageCache: {
    hash?: string
    value?: Validators
} = {}

type Validators = string[]

export async function getValidators(ctx: Ctx, block: Block): Promise<Validators | undefined> {
    if (storageCache.hash !== block.header.hash) {
        storageCache.hash = block.header.hash
        delete storageCache.value
    }

    if (!storageCache.value) {
        const data = await getStorageDataValidators(ctx, block)
        if (!data) return undefined

        storageCache.value = data.map((id) => encodeAccount(id))
    }

    return storageCache.value
}

export async function getIdealValidatorsCount(ctx: Ctx, block: Block): Promise<number | undefined> {

    const data = await getStorageDataValidatorsIdealCount(ctx, block)
    if (!data) return undefined

    return data

}
