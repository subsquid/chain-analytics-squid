import {StoreWithCache} from '@belopash/squid-tools'
import {decodeHex} from '@subsquid/substrate-processor'
import {getChain} from '../chains'
import {Block, EventItem, ProcessorContext} from '../processor'
import {ParsedEventsDataScope} from '../utils/common'
import {BlockEventName} from '../utils/types'
import assert from 'assert'

const api = getChain().api

function getEventMeta(event: EventItem, block: Block) {
    return {
        id: event.event.id,
        blockNumber: block.height,
        blockHash: block.hash,
        timestamp: new Date(block.timestamp),
    }
}

export function getParsedEventsData(ctx: ProcessorContext<StoreWithCache>): ParsedEventsDataScope {
    const parsedData = new ParsedEventsDataScope()

    for (let block of ctx.blocks) {
        for (let item of block.items) {
            switch (item.kind) {
                case 'event': {
                    switch (item.name) {
                        case 'Balances.Transfer':
                            parsedData.set(BlockEventName.BALANCES_TRANSFER, {
                                ...getEventMeta(item, block.header),
                                volume: api.events.getBalancesTransferValue(ctx, item.event),
                            })
                            parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                                id: item.event.id,
                                accountsU8: api.events.getBalancesTransferAccounts(ctx, item.event),
                            })
                            break
                        case 'Balances.Endowed':
                            parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                                id: item.event.id,
                                accountsU8: api.events.getBalancesEndowedAccounts(ctx, item.event),
                            })
                            break
                        case 'Balances.BalanceSet':
                            parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                                id: item.event.id,
                                accountsU8: api.events.getBalancesBalanceSetAccounts(ctx, item.event),
                            })
                            break
                        case 'Balances.Reserved':
                            parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                                id: item.event.id,
                                accountsU8: api.events.getBalancesReservedAccounts(ctx, item.event),
                            })
                            break
                        case 'Balances.Unreserved':
                            parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                                id: item.event.id,
                                accountsU8: api.events.getBalancesUnreservedAccounts(ctx, item.event),
                            })
                            break
                        case 'Balances.ReserveRepatriated':
                            parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                                id: item.event.id,
                                accountsU8: api.events.getBalancesReserveRepatriatedAccounts(ctx, item.event),
                            })
                            break
                        case 'Balances.Deposit':
                            parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                                id: item.event.id,
                                accountsU8: api.events.getBalancesDepositAccounts(ctx, item.event),
                            })
                            break
                        case 'Balances.Withdraw':
                            parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                                id: item.event.id,
                                accountsU8: api.events.getBalancesWithdrawAccounts(ctx, item.event),
                            })
                            break
                        case 'Balances.Slashed':
                            parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                                id: item.event.id,
                                accountsU8: api.events.getBalancesSlashedAccounts(ctx, item.event),
                            })
                            break
                    }
                    break
                }
                case 'call': {
                    const {extrinsic, call} = item
                    if (call.parent != null || extrinsic.signature == null) break

                    parsedData.set(BlockEventName.SIGNED_EXTRINSIC, {
                        id: extrinsic.id,
                        blockNumber: block.header.height,
                        blockHash: block.header.hash,
                        timestamp: new Date(block.header.timestamp),
                    })

                    const getSignerId = (address: any) => {
                        switch (typeof address) {
                            case 'string':
                                return decodeHex(address)
                            case 'object': 
                                assert(typeof address.value === 'string', `Unexpected address value: ${address.value}`)
                                return decodeHex(address.value)
                            default:
                                throw new Error(`Unexpected address: ${address}`)
                        }
                    }
                    const signerId = getSignerId(extrinsic.signature.address)
                    parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                        id: item.call.id,
                        accountsU8: [signerId],
                    })
                    break
                }
            }
        }
    }
    return parsedData
}
