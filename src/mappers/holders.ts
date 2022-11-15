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
  const treadsPoolInst = TreadsPool.getInstance();

  const tasksResults = treadsPoolInst.getResultsListByTaskName(
    SubProcessorTask.GET_HOLDERS_KEYS_COUNT
  );
  if (tasksResults && tasksResults.length > 0) {
    console.log('>>>> tasksResults - ');
    console.dir(tasksResults, { depth: null });

    treadsPoolInst.clearTaskResultsListByTaskName(
      SubProcessorTask.GET_HOLDERS_KEYS_COUNT
    );
    for (const resItem of tasksResults as SubProcessorTaskResult[]) {
      if (resItem.result !== undefined) {
        const newHoldersStat = new Holders({
          id: resItem.blockHeight.toString(),
          amount: resItem.result,
          timestamp: new Date(resItem.timestamp),
          blockHash: resItem.blockHash
        });

        ctx.store.deferredUpsert(newHoldersStat);

        const totals = await getOrCreateTotals(ctx);

        totals.holders = resItem.result;

        ctx.store.deferredUpsert(totals);
      }
    }
  }

  if (!isCheckPoint(CheckPointsKeys.holders, histDataMeta, block)) return;

  treadsPoolInst.setTask({
    taskId: `${block.header.height}_${SubProcessorTask.GET_HOLDERS_KEYS_COUNT}`,
    taskName: SubProcessorTask.GET_HOLDERS_KEYS_COUNT,
    blockHash: block.header.hash,
    blockHeight: block.header.height,
    timestamp: block.header.timestamp
  });

  // const keys = await storage.system.getHoldersKeysCount(ctx, block);
  //
  // if (keys !== undefined) {
  //   const totalHolders = BigInt(keys);
  //
  //   const newHoldersStat = new Holders({
  //     id: block.header.height.toString(),
  //     amount: totalHolders,
  //     timestamp: new Date(block.header.timestamp),
  //     blockHash: block.header.hash
  //   });
  //
  //   ctx.store.deferredUpsert(newHoldersStat);
  //
  //   const totals = await getOrCreateTotals(ctx);
  //
  //   totals.holders = totalHolders;
  //
  //   ctx.store.deferredUpsert(totals);
  // }

  histDataMeta.holdersLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.holdersLatestTime = new Date(block.header.timestamp);
  ctx.store.deferredUpsert(histDataMeta);
}
