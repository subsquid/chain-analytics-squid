import { lookupArchive } from '@subsquid/archive-registry';
import * as ss58 from '@subsquid/ss58';
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor
} from '@subsquid/substrate-processor';
import { Store, TypeormDatabase } from '@subsquid/typeorm-store';
import {
  Totals,
  Holders,
  HistoricalDataMeta,
  Issuance,
  Validator
} from './model';

import { getParsedEventsData } from './mappers/common';
import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { handleChainHolders } from './mappers/holders';
import { BatchBlock } from '@subsquid/substrate-processor/src/processor/batchProcessor';
import { handleTotalIssuance } from './mappers/issuance';
import { handleFinalizedBlock } from './mappers/finalizedBlocks';
import { handleValidators } from './mappers/validator';
import { handleStakeAmount } from './mappers/staking';

const processor = new SubstrateBatchProcessor()
  .setBatchSize(500)
  .setDataSource({
    archive: lookupArchive('kusama', { release: 'FireSquid' }),
    chain: 'wss://kusama-rpc.polkadot.io'
  })
  // .addEvent('Balances.Endowed', {
  //   data: { event: { args: true } }
  // } as const)
  // .addEvent('Balances.Transfer', {
  //   data: { event: { args: true } }
  // } as const)
  // .addEvent('Balances.BalanceSet', {
  //   data: { event: { args: true } }
  // } as const)
  // .addEvent('Balances.Reserved', {
  //   data: { event: { args: true } }
  // } as const)
  // .addEvent('Balances.Unreserved', {
  //   data: { event: { args: true } }
  // } as const)
  // .addEvent('Balances.ReserveRepatriated', {
  //   data: { event: { args: true } }
  // } as const)
  // .addEvent('Balances.Deposit', {
  //   data: { event: { args: true } }
  // } as const)
  // .addEvent('Balances.Withdraw', {
  //   data: { event: { args: true } }
  // } as const)
  // .addEvent('Balances.Slashed', {
  //   data: { event: { args: true } }
  // } as const)
  // .addCall('*', {
  //   data: { call: { origin: true } }
  // } as const)
  .setBlockRange({ from: 1400000 })
  .includeAllBlocks()
  .addEvent('Balances.Transfer', {
    data: {
      event: {
        args: true,
        extrinsic: {
          hash: true,
          fee: true
        }
      }
    }
  } as const);

export type Item = BatchProcessorItem<typeof processor>;
export type Ctx = BatchContext<Store, Item>;
export type Block = BatchBlock<Item>;

processor.run(new TypeormDatabase(), async (ctx) => {
  // let transfersData = getTransfers(ctx)
  SquidCache.init(ctx, [
    Holders,
    Issuance,
    Validator,
    HistoricalDataMeta,
    Totals
  ]);
  const parsedEvents = getParsedEventsData(ctx);
  SquidCache.deferredLoad(Totals, '1');
  SquidCache.deferredLoad(HistoricalDataMeta, '1');
  await SquidCache.load();

  for (let block of ctx.blocks) {
    await handleFinalizedBlock(ctx, block);
    await handleChainHolders(ctx, block);
    await handleTotalIssuance(ctx, block);
    await handleValidators(ctx, block);
    // await handleStakeAmount(ctx, block);
  }

  await SquidCache.flush();
  SquidCache.purge();

  // let accountIds = new Set<string>()
  // for (let t of transfersData) {
  //     accountIds.add(t.from)
  //     accountIds.add(t.to)
  // }
  //
  // let accounts = await ctx.store.findBy(Account, {id: In([...accountIds])}).then(accounts => {
  //     return new Map(accounts.map(a => [a.id, a]))
  // })
  //
  // let transfers: Transfer[] = []
  //
  // for (let t of transfersData) {
  //     let {id, blockNumber, timestamp, extrinsicHash, amount, fee} = t
  //
  //     let from = getAccount(accounts, t.from)
  //     let to = getAccount(accounts, t.to)
  //
  //     transfers.push(new Transfer({
  //         id,
  //         blockNumber,
  //         timestamp,
  //         extrinsicHash,
  //         from,
  //         to,
  //         amount,
  //         fee
  //     }))
  // }
  //
  // await ctx.store.save(Array.from(accounts.values()))
  // await ctx.store.insert(transfers)
});

//
// interface TransferEvent {
//     id: string
//     blockNumber: number
//     timestamp: Date
//     extrinsicHash?: string
//     from: string
//     to: string
//     amount: bigint
//     fee?: bigint
// }
//
//
// function getTransfers(ctx: Ctx): TransferEvent[] {
//     let transfers: TransferEvent[] = []
//     for (let block of ctx.blocks) {
//         for (let item of block.items) {
//             if (item.name == "Balances.Transfer") {
//                 let e = new BalancesTransferEvent(ctx, item.event)
//                 let rec: {from: Uint8Array, to: Uint8Array, amount: bigint}
//                 if (e.isV1020) {
//                     let [from, to, amount,] = e.asV1020
//                     rec = {from, to, amount}
//                 } else if (e.isV1050) {
//                     let [from, to, amount] = e.asV1050
//                     rec = {from, to, amount}
//                 } else {
//                     rec = e.asV9130
//                 }
//                 transfers.push({
//                     id: item.event.id,
//                     blockNumber: block.header.height,
//                     timestamp: new Date(block.header.timestamp),
//                     extrinsicHash: item.event.extrinsic?.hash,
//                     from: ss58.codec('kusama').encode(rec.from),
//                     to: ss58.codec('kusama').encode(rec.to),
//                     amount: rec.amount,
//                     fee: item.event.extrinsic?.fee || 0n
//                 })
//             }
//         }
//     }
//     return transfers
// }
//
//
// function getAccount(m: Map<string, Account>, id: string): Account {
//     let acc = m.get(id)
//     if (acc == null) {
//         acc = new Account()
//         acc.id = id
//         m.set(id, acc)
//     }
//     return acc
// }
