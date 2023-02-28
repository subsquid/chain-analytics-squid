import { lookupArchive, KnownArchives } from '@subsquid/archive-registry';
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
  BatchProcessorCallItem,
  BatchProcessorEventItem
} from '@subsquid/substrate-processor';
import { Store, TypeormDatabase } from '@subsquid/processor-tools';
import { Totals, HistoricalDataMeta, SubProcessorTask } from './model';

import { getParsedEventsData } from './mappers/common';
import { handleChainHolders } from './mappers/holders';
import { BatchBlock } from '@subsquid/substrate-processor/src/processor/batchProcessor';
import { handleTotalIssuance } from './mappers/issuance';
import { handleFinalizedBlock } from './mappers/finalizedBlocks';
import { handleValidatorsCollators } from './mappers/validatorsCollators';
import { handleStakeAmount } from './mappers/staking';
import { handleTransfers } from './mappers/transfers';
import {
  BlockEventName,
  BalancesTransferEventData,
  CallSignedExtrinsicData,
  InvolvedAccountsData
} from './utils/types';
import { handleExtrinsics } from './mappers/extrinsics';
import { getChain } from './chains';
import { TreadsPool } from './subProcessor';
import { handleNominationPools } from './mappers/nominationPools';

const chainConfig = getChain();

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive(chainConfig.config.chainName as KnownArchives, {
      release: 'FireSquid'
    }),
    chain: chainConfig.config.dataSource.chain
  })
  .setBlockRange(chainConfig.config.blockRange || { from: 0 })
  .includeAllBlocks()
  .addEvent('Balances.Endowed', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Transfer', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.BalanceSet', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Reserved', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Unreserved', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.ReserveRepatriated', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Deposit', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Withdraw', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addEvent('Balances.Slashed', {
    data: { event: { extrinsic: true, args: true } }
  } as const)
  .addCall('*', {
    data: { call: { origin: true, parent: true } }
  } as const)
  .addCall('*', {
    data: {
      extrinsic: true
    }
  });

export type Item = BatchProcessorItem<typeof processor>;
export type CallItem = BatchProcessorCallItem<typeof processor>;
export type EventItem = BatchProcessorEventItem<typeof processor>;
export type Ctx = BatchContext<Store, Item>;
export type Block = BatchBlock<Item>;

processor.run(new TypeormDatabase(), async (ctx) => {
  const tasksPool = TreadsPool.getInstance(ctx);
  const parsedEvents = getParsedEventsData(ctx);

  ctx.store.deferredLoad(Totals, '1');
  ctx.store.deferredLoad(HistoricalDataMeta, '1');
  ctx.store.deferredLoad(SubProcessorTask);
  await ctx.store.load();

  tasksPool.setResultsProcessingWindow(true);
  await tasksPool.ensureTasksQueue();

  for (let block of ctx.blocks) {
    await Promise.all([
      handleFinalizedBlock(ctx, block),
      handleValidatorsCollators(ctx, block),
      handleTotalIssuance(ctx, block),
      handleStakeAmount(ctx, block),
      handleNominationPools(ctx, block)
    ]);
  }
  await handleTransfers(
    ctx,
    parsedEvents.getBySection<BalancesTransferEventData>(
      BlockEventName.BALANCES_TRANSFER
    )
  );
  await handleExtrinsics(
    ctx,
    parsedEvents.getBySection<CallSignedExtrinsicData>(
      BlockEventName.SIGNED_EXTRINSIC
    )
  );
  // await handleChainHolders(
  //   ctx,
  //   ctx.blocks[ctx.blocks.length - 1],
  //   parsedEvents.getBySection<InvolvedAccountsData>(
  //     BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC
  //   )
  // );

  tasksPool.setResultsProcessingWindow(false);
});
