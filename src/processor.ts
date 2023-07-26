import {KnownArchives, lookupArchive} from '@subsquid/archive-registry'
import {
    BatchProcessorCallItem,
    BatchProcessorEventItem,
    BatchProcessorItem,
    DataHandlerContext,
    SubstrateBatchProcessor,
    SubstrateBlock,
} from '@subsquid/substrate-processor'
import {getChain} from './chains'
import {
    CallItem as CallItem_,
    EventItem as EventItem_,
} from '@subsquid/substrate-processor/lib/interfaces/data-selection'

const chainConfig = getChain()

export const processor = new SubstrateBatchProcessor<
    | EventItem_<
          string,
          {
              event: {extrinsic: true; args: true}
          }
      >
    | CallItem_<
          string,
          {
              call: {origin: true; parent: true}
              extrinsic: {hash: true; signature: true}
          }
      >
>()
    .setDataSource({
        archive: lookupArchive(chainConfig.config.chainName as KnownArchives, {
            release: 'FireSquid',
        }),
        chain: chainConfig.config.dataSource.chain,
    })
    .setBlockRange(chainConfig.config.blockRange || {from: 0})
    .includeAllBlocks()
    .addEvent('Balances.Endowed', {
        data: {event: {extrinsic: true, args: true}},
    } as const)
    .addEvent('Balances.Transfer', {
        data: {event: {extrinsic: true, args: true}},
    } as const)
    .addEvent('Balances.BalanceSet', {
        data: {event: {extrinsic: true, args: true}},
    } as const)
    .addEvent('Balances.Reserved', {
        data: {event: {extrinsic: true, args: true}},
    } as const)
    .addEvent('Balances.Unreserved', {
        data: {event: {extrinsic: true, args: true}},
    } as const)
    .addEvent('Balances.ReserveRepatriated', {
        data: {event: {extrinsic: true, args: true}},
    } as const)
    .addEvent('Balances.Deposit', {
        data: {event: {extrinsic: true, args: true}},
    } as const)
    .addEvent('Balances.Withdraw', {
        data: {event: {extrinsic: true, args: true}},
    } as const)
    .addEvent('Balances.Slashed', {
        data: {event: {extrinsic: true, args: true}},
    } as const)
    .addCall('*', {
        data: {
            call: {origin: true, parent: true},
            extrinsic: {hash: true, signature: true},
        },
    } as const)

type Simplify<T> = {[K in keyof T]: T[K]} & {}
type RemoveWildcard<T> = Exclude<T, {name: '*'}>
export type Item = BatchProcessorItem<typeof processor>
export type EventItem = RemoveWildcard<BatchProcessorEventItem<typeof processor>>
export type CallItem = RemoveWildcard<BatchProcessorCallItem<typeof processor>>
export type ProcessorContext<Store> = DataHandlerContext<Store, Item>

export type Call = Simplify<
    Omit<CallItem['call'], 'name'> & {
        name: string
    }
>
export type Extrinsic = Simplify<CallItem['extrinsic']>
export type Event = Simplify<
    Omit<EventItem['event'], 'name' | 'call' | 'extrinsic'> & {
        name: string
        call?: Call
        extrinsic?: Extrinsic
    }
>
export type Block = SubstrateBlock
