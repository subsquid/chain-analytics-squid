import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext} from '@subsquid/substrate-processor'
import {getChain} from '../chains'
import {Account} from '../model'
import {Block, ProcessorContext} from '../processor'
import {decodeAccount, encodeAccount} from '../utils/common'
import {InvolvedAccountsData} from '../utils/types'

const {api, config} = getChain()

export async function handleBalances(
    ctx: ProcessorContext<StoreWithCache>,
    involvedAccountsData: Map<string, InvolvedAccountsData> | undefined
): Promise<void> {
    const accountIds = new Set<string>()

    if (!involvedAccountsData) return
    for (const e of [...involvedAccountsData?.values()]) {
        for (const a of e.accountsU8) {
            accountIds.add(encodeAccount(a, config.prefix))
        }
    }

    const block = ctx.blocks[ctx.blocks.length - 1]

    await saveAccounts(ctx, block.header, [...accountIds])
}

async function saveAccounts(ctx: ProcessorContext<StoreWithCache>, block: Block, accountIds: string[]) {
    const balances = await getBalances(ctx, block, accountIds)
    if (!balances) {
        ctx.log.warn('No balances')
        return
    }

    const accounts = new Map<string, Account>()

    for (let i = 0; i < accountIds.length; i++) {
        const id = accountIds[i]
        const balance = balances[i]

        const free = balance.free
        const reserved = balance.reserved
        const total = free + reserved
        accounts.set(
            id,
            new Account({
                id,
                free,
                reserved,
                total,
                updatedAtBlock: block.height,
            })
        )
    }

    await ctx.store.upsert([...accounts.values()])
}

interface Balance {
    free: bigint
    reserved: bigint
}

async function getBalances(
    ctx: DataHandlerContext<unknown, unknown>,
    block: Block,
    accountIds: string[]
): Promise<Balance[] | undefined> {
    const accountIdsU8 = [...accountIds].map((id) => decodeAccount(id, config.prefix))
    return (
        (await api.storage.getSystemAccountBalancesByKeys(ctx, block, accountIdsU8)) ||
        (await api.storage.getBalancesAccountBalancesByKeys(ctx, block, accountIdsU8)) ||
        (await api.storage.getSystemAccountBalancesOldByKeys(ctx, block, accountIdsU8))
    )
}
