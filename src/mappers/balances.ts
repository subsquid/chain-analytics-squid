import { Ctx, CallItem, EventItem, Block } from '../processor';
import { getChain } from "../chains"
import { Account, ChainState } from "../model"
import { isOneDay, saveChainState } from '../chainState';
import { BatchContext, decodeHex, toHex } from '@subsquid/substrate-processor';
import { decodeId, encodeId, getOriginAccountId } from '../utils/common';
import { Store } from '@subsquid/processor-tools';

const {api, config} = getChain()
let lastStateTimestamp: number | undefined


async function getLastChainState(store: Store) {
    return await store.findOne(ChainState, {
        where: {},
        order: {
            timestamp: 'DESC',
        },
    })
}

export async function processBalances(ctx: Ctx): Promise<void> {
    const accountIds = new Set<string>()

    if (lastStateTimestamp == null) {
        lastStateTimestamp = (await getLastChainState(ctx.store))?.timestamp.getTime() || 0
    }

    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.kind === 'call') {
                const id = processBalancesCallItem(ctx, item)
                if (id) accountIds.add(id)
            } else if (item.kind === 'event') {
                processBalancesEventItem(ctx, item).forEach((id) => accountIds.add(id))
            }
        }

        if (!isOneDay(lastStateTimestamp || 0, block.header.timestamp)) {
            await saveAccounts(ctx, block, [...accountIds])
            await saveChainState(ctx, block.header)

            lastStateTimestamp = block.header.timestamp
            accountIds.clear()
        }
    }

    const block = ctx.blocks[ctx.blocks.length - 1]

    await saveAccounts(ctx, block, [...accountIds])
}

async function saveAccounts(ctx: Ctx, block: Block, accountIds: string[]) {
    const balances = await getBalances(ctx, block, accountIds)
    if (!balances) {
        ctx.log.warn('No balances')
        return
    }

    const accounts = new Map<string, Account>()
    const deletions = new Map<string, Account>()

    for (let i = 0; i < accountIds.length; i++) {
        const id = accountIds[i]
        const balance = balances[i]

        if (!balance) continue
        const total = balance.free + balance.reserved
        if (total > 0n) {
            accounts.set(
                id,
                new Account({
                    id,
                    free: balance.free,
                    reserved: balance.reserved,
                    total,
                    updatedAtBlock: block.header.height,
                })
            )
        } else {
            deletions.set(id, new Account({id}))
        }
    }

    ctx.store.deferredUpsert([...accounts.values()])
    ctx.log.child('accounts').info(`updated: ${accounts.size}`)
}

function processBalancesCallItem(ctx: Ctx, item: CallItem) {
    const accountId = getOriginAccountId(item.call.origin)
    if (accountId == null) return undefined
    return encodeId(ArrayBuffer.isView(accountId) &&
    accountId.constructor.name !== 'Uint8Array'
      ? (accountId as Uint8Array)
      : decodeHex(accountId), config.prefix)
}

function processBalancesEventItem(ctx: Ctx, item: EventItem) {
    const ids: Uint8Array[] = []
    switch (item.name) {
        case 'Balances.BalanceSet': {
            const accounts = api.events.getBalancesBalanceSetAccounts(ctx, item.event)
            ids.push(...accounts)
            break
        }
        case 'Balances.Endowed': {
            const accounts = api.events.getBalancesEndowedAccounts(ctx, item.event)
            ids.push(...accounts)
            break
        }
        case 'Balances.Deposit': {
            const accounts = api.events.getBalancesDepositAccounts(ctx, item.event)
            ids.push(...accounts)
            break
        }
        case 'Balances.Reserved': {
            const accounts = api.events.getBalancesReservedAccounts(ctx, item.event)
            ids.push(...accounts)
            break
        }
        case 'Balances.Unreserved': {
            const accounts = api.events.getBalancesUnreservedAccounts(ctx, item.event)
            ids.push(...accounts)
            break
        }
        case 'Balances.Withdraw': {
            const accounts = api.events.getBalancesWithdrawAccounts(ctx, item.event)
            ids.push(...accounts)
            break
        }
        case 'Balances.Slashed': {
            const accounts = api.events.getBalancesSlashedAccounts(ctx, item.event)
            ids.push(...accounts)
            break
        }
        case 'Balances.Transfer': {
            const accounts = api.events.getBalancesTransferAccounts(ctx, item.event)
            ids.push(...accounts)
            break
        }
        case 'Balances.ReserveRepatriated': {
            const accounts = api.events.getBalancesReserveRepatriatedAccounts(ctx, item.event)
            ids.push(...accounts)
            break
        }
    }
    return ids.map((id) => encodeId(id, config.prefix))
}

interface Balance {
    free: bigint
    reserved: bigint
}

async function getBalances(
    ctx: BatchContext<unknown, unknown>,
    block: Block,
    accountIds: string[]
): Promise<(Balance | undefined)[] | undefined> {
    const accountIdsU8 = [...accountIds].map((id) => decodeId(id, config.prefix))
    return (
        (await api.storage.getSystemAccountBalancesByKeys(ctx, block.header, accountIdsU8)) ||
        (await api.storage.getBalancesAccountBalancesByKeys(ctx, block.header, accountIdsU8))
    )
}