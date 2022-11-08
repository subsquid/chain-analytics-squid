import { lookupArchive, KnownArchives } from '@subsquid/archive-registry';
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
  BatchProcessorCallItem
} from '@subsquid/substrate-processor';
import { Store, TypeormDatabase } from '@subsquid/processor-tools';
import { Totals, HistoricalDataMeta } from './model';

import { getParsedEventsData } from './mappers/common';
import { handleChainAccounts } from './mappers/holders';
import { BatchBlock } from '@subsquid/substrate-processor/src/processor/batchProcessor';
import { handleTotalIssuance } from './mappers/issuance';
import { handleFinalizedBlock } from './mappers/finalizedBlocks';
import { handleValidators } from './mappers/validator';
import { handleStakeAmount } from './mappers/staking';
import { handleTransfers } from './mappers/transfers';
import {
  BlockEventName,
  BalancesTransferEventData,
  BalancesWithdrawEventData,
  CallSignedExtrinsicData
} from './utils/types';
import { handleExtrinsics } from './mappers/extrinsics';
import { processorConfig } from './config';
import { ParsedEventsDataScope } from './utils/common';

const processor = new SubstrateBatchProcessor()
  // .setBatchSize(processorConfig.batchSize)
  .setDataSource({
    archive: lookupArchive(processorConfig.chainName as KnownArchives, {
      release: 'FireSquid'
    }),
    chain: processorConfig.dataSource.chain
  })
  .setBlockRange({ from: 1400000 })
  .addEvent('Balances.Endowed', {
    data: { event: { args: true } }
  } as const)
  .addEvent('Balances.Transfer', {
    data: { event: { args: true } }
  } as const)
  .addEvent('Balances.BalanceSet', {
    data: { event: { args: true } }
  } as const)
  .addEvent('Balances.Reserved', {
    data: { event: { args: true } }
  } as const)
  .addEvent('Balances.Unreserved', {
    data: { event: { args: true } }
  } as const)
  .addEvent('Balances.ReserveRepatriated', {
    data: { event: { args: true } }
  } as const)
  .addEvent('Balances.Deposit', {
    data: { event: { args: true } }
  } as const)
  .addEvent('Balances.Withdraw', {
    data: { event: { args: true } }
  } as const)
  .addEvent('Balances.Slashed', {
    data: { event: { args: true } }
  } as const)
  .addCall('*', {
    data: {
      call: { origin: true },
      extrinsic: {
        signature: true
      }
    }
  })
  .includeAllBlocks();

export type Item = BatchProcessorItem<typeof processor>;
export type CallItem = BatchProcessorCallItem<typeof processor>;
export type Ctx = BatchContext<Store, Item>;
export type Block = BatchBlock<Item>;

processor.run(new TypeormDatabase(), async (ctx) => {
  getParsedEventsData(ctx);
  ctx.store.deferredLoad(Totals, '1');
  ctx.store.deferredLoad(HistoricalDataMeta, '1');
  await ctx.store.load();

  for (let block of ctx.blocks) {
    await handleFinalizedBlock(ctx, block);
    await handleValidators(ctx, block);
    await handleChainAccounts(ctx, block);
    await handleTotalIssuance(ctx, block);
    await handleStakeAmount(ctx, block);
  }

  await handleTransfers(ctx);
  await handleExtrinsics(ctx);

  ParsedEventsDataScope.getInstance().purgeSection(
    BlockEventName.BALANCES_TRANSFER
  );
  ParsedEventsDataScope.getInstance().purgeSection(
    BlockEventName.SIGNED_EXTRINSIC
  );
});
