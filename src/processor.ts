import { lookupArchive, KnownArchives } from '@subsquid/archive-registry';
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor
} from '@subsquid/substrate-processor';
import { Store, TypeormDatabase } from '@subsquid/processor-tools';
import { Totals, HistoricalDataMeta } from './model';

import { getParsedEventsData } from './mappers/common';
import { handleChainHolders } from './mappers/holders';
import { BatchBlock } from '@subsquid/substrate-processor/src/processor/batchProcessor';
import { handleTotalIssuance } from './mappers/issuance';
import { handleFinalizedBlock } from './mappers/finalizedBlocks';
import { handleValidators } from './mappers/validator';
import { handleStakeAmount } from './mappers/staking';
import { handleTransfers } from './mappers/transfers';
import {
  BlockEventName,
  BalancesTransferEventData,
  BalancesWithdrawEventData, CallSignedExtrinsicData
} from './utils/types';
import { handleExtrinsics } from './mappers/extrinsics';
import { processorConfig } from './config';

const processor = new SubstrateBatchProcessor()
  .setBatchSize(processorConfig.batchSize)
  .setDataSource({
    archive: lookupArchive(processorConfig.chainName as KnownArchives, {
      release: 'FireSquid'
    }),
    chain: processorConfig.dataSource.chain
  })
  // .setBlockRange({ from: 1400000 })
  .includeAllBlocks()
  .addEvent('Balances.Transfer', {
    data: { event: { args: true } }
  } as const)
  .addCall('*', {
    data: {
      extrinsic: {
        signature: true
      }
    }
  });

export type Item = BatchProcessorItem<typeof processor>;
export type Ctx = BatchContext<Store, Item>;
export type Block = BatchBlock<Item>;

processor.run(new TypeormDatabase(), async (ctx) => {
  const parsedEvents = getParsedEventsData(ctx);
  ctx.store.deferredLoad(Totals, '1');
  ctx.store.deferredLoad(HistoricalDataMeta, '1');
  await ctx.store.load();

  for (let block of ctx.blocks) {
    await handleFinalizedBlock(ctx, block);
    await handleChainHolders(ctx, block);
    await handleTotalIssuance(ctx, block);
    await handleValidators(ctx, block);
    await handleStakeAmount(ctx, block);
  }

  await handleTransfers(
    ctx,
    parsedEvents.get<BalancesTransferEventData>(
      BlockEventName.BALANCES_TRANSFER
    )
  );
  await handleExtrinsics(
    ctx,
    parsedEvents.get<CallSignedExtrinsicData>(
      BlockEventName.SIGNED_EXTRINSIC
    )
  );
});
