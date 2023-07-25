import { AccountBalancesPair, HoldersTotals } from '../../utils/types';
import { encodeAccount } from '../../utils/common';

export async function getKeysCountAll(
  getIterable: AsyncIterable<Uint8Array[]>
): Promise<number | undefined> {
  try {
    const keys = [];
    for await (const keysPack of getIterable) keys.push(...keysPack);
    return keys.length;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

export function handleHoldersTotals(
  pairList: AccountBalancesPair[],
  excludeAccounts?: Set<string> | undefined
): HoldersTotals {
  let totalFreeBalance = 0n;

  let filteredPairs = pairList;
  if (excludeAccounts)
    filteredPairs = filteredPairs.filter(
      (pair) => !excludeAccounts.has(encodeAccount(pair[0]))
    );

  const totalCount = filteredPairs.filter(([addr, accInfo]) => {
    totalFreeBalance += accInfo.free;
    return (
      accInfo.free + accInfo.feeFrozen + accInfo.miscFrozen + accInfo.reserved >
      0
    );
  }).length;

  return {
    totalHoldersCount: totalCount,
    totalFreeBalance: totalFreeBalance
  };
}
