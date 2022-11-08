import { Ctx, Block } from '../processor';
import { Holders } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import storage from '../storage';
import {
  encodeAccount,
  isCheckPoint,
  ParsedEventsDataScope
} from '../utils/common';
import {
  BalancesAccountData,
  BlockEventName,
  CheckPointsKeys
} from '../utils/types';
import { Account } from '../model';

export async function handleChainAccounts(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (!isCheckPoint(CheckPointsKeys.holders, histDataMeta, block)) return;

  const accountsData: Set<BalancesAccountData> | undefined =
    ParsedEventsDataScope.getInstance().get<BalancesAccountData>(
      BlockEventName.BALANCES_ACCOUNT
    );

  if (accountsData !== undefined && accountsData.size !== 0) {
    // const effectedAccounts = new Map<string, Account>();
    const currentIntervalData = new Set<BalancesAccountData>();
    const effectedAccountsU8 = new Set<Uint8Array>();

    for (const accData of accountsData.values()) {
      if (accData.blockNumber > block.header.height) continue;
      currentIntervalData.add(accData);
      [...accData.idList.values()].forEach((idU8) =>
        effectedAccountsU8.add(idU8)
      );
    }

    const accountsBalances =
      (await storage.system.getSystemAccountBalances(ctx, block, [
        ...effectedAccountsU8.values()
      ])) ||
      (await storage.balances.getBalancesAccountBalances(ctx, block, [
        ...effectedAccountsU8.values()
      ])) ||
      (await storage.balances.getBalancesAccountBalancesOld(ctx, block, [
        ...effectedAccountsU8.values()
      ]));

    if (accountsBalances) {
      const effectedAccountsU8List = [...effectedAccountsU8.values()];
      const accForSave = new Map<string, Account>();
      const accForDelete = new Map<string, Account>();

      for (let i = 0; i < effectedAccountsU8List.length; i++) {
        const id = encodeAccount(effectedAccountsU8List[i]);
        const balance = accountsBalances[i];

        if (!balance) continue;
        const total = balance.free + balance.reserved;
        if (total > 0n) {
          accForSave.set(
            id,
            new Account({
              id,
              updatedAt: BigInt(block.header.height.toString())
            })
          );
        } else {
          accForDelete.set(id, new Account({ id }));
        }
      }

      if (accForSave.size > 0)
        ctx.store.deferredUpsert([...accForSave.values()]);
      if (accForDelete.size > 0)
        ctx.store.deferredRemove([...accForDelete.values()]);
    }

    ParsedEventsDataScope.getInstance().removeByEntityOrList(
      BlockEventName.BALANCES_ACCOUNT,
      [...currentIntervalData.values()]
    );

    // await ctx.store.flush();
  }

  const totalHolders = await ctx.store.count(Account);

  const newHoldersStat = new Holders({
    id: block.header.height.toString(),
    amount: totalHolders,
    timestamp: new Date(block.header.timestamp),
    blockHash: block.header.hash
  });

  ctx.store.deferredUpsert(newHoldersStat);

  const totals = await getOrCreateTotals(ctx);

  totals.holders = totalHolders;

  ctx.store.deferredUpsert(totals);

  histDataMeta.holdersLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.holdersLatestTime = new Date(block.header.timestamp);
  ctx.store.deferredUpsert(histDataMeta);
}

//
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
