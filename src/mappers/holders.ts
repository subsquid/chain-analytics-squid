import { Ctx, Block } from '../processor';
import { Holders } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import storage from '../storage';
import { isCheckPoint } from '../utils/common';
import {
  CheckPointsKeys,
  SubProcessorTask,
  SubProcessorTaskResult
} from '../utils/types';
import { TreadsPool } from '../subProcessor';

export async function handleChainHolders(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);
  const treadsPoolInst = TreadsPool.getInstance(ctx);

  const tasksResults = treadsPoolInst.getResultsListByTaskName(
    SubProcessorTask.GET_HOLDERS_KEYS_COUNT
  );

  if (tasksResults && tasksResults.length > 0) {
    await treadsPoolInst.clearTaskResultsListByTaskName(
      SubProcessorTask.GET_HOLDERS_KEYS_COUNT
    );
    for (const resItem of tasksResults as SubProcessorTaskResult[]) {
      const newHoldersStat = new Holders({
        id: resItem.blockHeight.toString(),
        amount: resItem.result ?? 0,
        timestamp: new Date(Number.parseInt(resItem.timestamp)),
        blockHash: resItem.blockHash
      });

      ctx.store.deferredUpsert(newHoldersStat);

      const totals = await getOrCreateTotals(ctx);

      totals.holders = resItem.result ?? 0;

      ctx.store.deferredUpsert(totals);
    }
  }

  if (!isCheckPoint(CheckPointsKeys.holders, histDataMeta, block)) return;

  await treadsPoolInst.addTask({
    id: `${block.header.height}_${SubProcessorTask.GET_HOLDERS_KEYS_COUNT}`,
    taskName: SubProcessorTask.GET_HOLDERS_KEYS_COUNT,
    blockHash: block.header.hash,
    blockHeight: block.header.height,
    timestamp: block.header.timestamp.toString(),
    queueIndex: block.header.height,
    queueSubIndex: 0
  });

  histDataMeta.holdersLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.holdersLatestTime = new Date(block.header.timestamp);
  ctx.store.deferredUpsert(histDataMeta);
}
