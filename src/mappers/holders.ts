import { In } from 'typeorm';
import { Ctx, Block } from '../processor';
import { Account } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint } from '../utils/common';
import {
  BalancesTransferEventData,
  CheckPointsKeys,
  InvolvedAccountsData,
  SubProcessorTask,
  SubProcessorTaskResult
} from '../utils/types';
import { TreadsPool } from '../subProcessor';
import { getChain } from '../chains';
const { config: chainConfig, getApiDecorated } = getChain();
import { decodeHex, toHex } from '@subsquid/util-internal-hex';

// export async function handleChainHolders(ctx: Ctx, block: Block) {
export async function handleChainHolders(
  ctx: Ctx,
  block: Block,
  involvedAccountData: Map<string, InvolvedAccountsData> | undefined
) {
  // const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);
  // const treadsPoolInst = TreadsPool.getInstance(ctx);
  //
  // const tasksResults = treadsPoolInst.getResultsListByTaskName(
  //   SubProcessorTask.GET_HOLDERS_TOTALS
  // );
  //
  // if (tasksResults && tasksResults.length > 0) {
  //   await treadsPoolInst.clearTaskResultsListByTaskName(
  //     SubProcessorTask.GET_HOLDERS_TOTALS
  //   );
  //   for (const resItem of tasksResults as SubProcessorTaskResult<SubProcessorTask.GET_HOLDERS_TOTALS>[]) {
  //     if (!resItem || !resItem.result) continue;
  //     const { totalHoldersCount, totalFreeBalance } = resItem.result;
  //     const newHoldersStat = new Holders({
  //       id: resItem.blockHeight.toString(),
  //       amount: totalHoldersCount ?? 0,
  //       totalFreeBalance: totalFreeBalance ?? 0n,
  //       timestamp: new Date(Number.parseInt(resItem.timestamp)),
  //       blockHash: resItem.blockHash
  //     });
  //
  //     ctx.store.deferredUpsert(newHoldersStat);
  //
  //     const totals = await getOrCreateTotals(ctx);
  //
  //     if (totalHoldersCount !== null) totals.holders = totalHoldersCount;
  //     if (totalFreeBalance !== null)
  //       totals.circulatingAssetsTotal = totalFreeBalance;
  //
  //     ctx.store.deferredUpsert(totals);
  //   }
  // }
  //
  // if (!isCheckPoint(CheckPointsKeys.holders, histDataMeta, block)) return;
  //
  // await treadsPoolInst.addTask({
  //   id: `${block.header.height}_${SubProcessorTask.GET_HOLDERS_TOTALS}`,
  //   taskName: SubProcessorTask.GET_HOLDERS_TOTALS,
  //   blockHash: block.header.hash,
  //   blockHeight: block.header.height,
  //   timestamp: block.header.timestamp.toString(),
  //   queueIndex: block.header.height,
  //   queueSubIndex: 0
  // });
  //
  // histDataMeta.holdersLatestBlockNumber = BigInt(block.header.height);
  // histDataMeta.holdersLatestTime = new Date(block.header.timestamp);
  // ctx.store.deferredUpsert(histDataMeta);

  if (!involvedAccountData) return;
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);
  const api = getApiDecorated('polkadot');
  const blockForStorage = {
    hash: block.header.hash
  };
  const involvedAccountsU8 = [...involvedAccountData.values()]
    .map((dataItem) => dataItem.accountsU8)
    .flat();

  const balances =
    (await api.storage.getSystemAccountBalancesByKeys(
      ctx,
      blockForStorage,
      involvedAccountsU8
    )) ||
    (await api.storage.getBalancesAccountBalancesByKeys(
      ctx,
      blockForStorage,
      involvedAccountsU8
    ));

  if (!balances) return;

  for (let i = 0; i < involvedAccountsU8.length; i++) {
    const id = toHex(involvedAccountsU8[i]);
    const balance = balances[i];

    if (!balance) continue;
    const total = balance.free + balance.reserved;
    if (total > 0n) {
      ctx.store.deferredUpsert(
        new Account({
          id,
          free: balance.free,
          reserved: balance.reserved,
          total,
          updatedAtBlock: block.header.height
        })
      );
    } else {
      ctx.store.deferredRemove(new Account({ id }));
    }
  }

  if (!isCheckPoint(CheckPointsKeys.holders, histDataMeta, block)) return;
  const totals = await getOrCreateTotals(ctx);

  totals.holders = await ctx.store.count(Account);
  // TODO Add calculation of circulatingAssetsTotal somehow here or not
  // if (totalFreeBalance !== null)
  //   totals.circulatingAssetsTotal = totalFreeBalance;

  histDataMeta.holdersLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.holdersLatestTime = new Date(block.header.timestamp);
  ctx.store.deferredUpsert(histDataMeta);
  ctx.store.deferredUpsert(totals);
}
