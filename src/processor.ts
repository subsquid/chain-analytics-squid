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
  Validator,
  Transfers
} from './model';

import { getParsedEventsData } from './mappers/common';
import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { handleChainHolders } from './mappers/holders';
import { BatchBlock } from '@subsquid/substrate-processor/src/processor/batchProcessor';
import { handleTotalIssuance } from './mappers/issuance';
import { handleFinalizedBlock } from './mappers/finalizedBlocks';
import { handleValidators } from './mappers/validator';
import { handleStakeAmount } from './mappers/staking';
import { handleTransfers } from './mappers/transfers';
import { BlockEventName, BalancesTransferEventData } from './utils/types';
import { getOrCreateHistoricalDataMeta } from './mappers/histiricalDataMeta';

const processor = new SubstrateBatchProcessor()
  .setBatchSize(500)
  .setDataSource({
    archive: lookupArchive('kusama', { release: 'FireSquid' }),
    chain: 'wss://kusama-rpc.polkadot.io'
  })
  // .addEvent('Balances.Endowed', {
  //   data: { event: { args: true } }
  // } as const)
  .addEvent('Balances.Transfer', {
    data: { event: { args: true } }
  } as const)
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
  .includeAllBlocks();
// .addEvent('Balances.Transfer', {
//   data: {
//     event: {
//       args: true,
//       extrinsic: {
//         hash: true,
//         fee: true
//       }
//     }
//   }
// } as const);

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
    Transfers,
    Totals
  ]);
  const parsedEvents = getParsedEventsData(ctx);
  SquidCache.deferredLoad(Totals, '1');
  SquidCache.deferredLoad(HistoricalDataMeta, '1');
  await SquidCache.load();

  const histDataMeta = getOrCreateHistoricalDataMeta();
  SquidCache.deferredLoad(
    Transfers,
    histDataMeta.transferLatestBlockNumber.toString()
  );
  await SquidCache.load();

  for (let block of ctx.blocks) {
    await handleFinalizedBlock(ctx, block);
    await handleChainHolders(ctx, block);
    await handleTotalIssuance(ctx, block);
    await handleValidators(ctx, block);
    await handleStakeAmount(ctx, block);
    await handleTransfers(
      ctx,
      parsedEvents.get<BalancesTransferEventData>(
        BlockEventName.BALANCES_TRANSFER
      )
    );
  }

  await SquidCache.flush();
  SquidCache.purge();
});
