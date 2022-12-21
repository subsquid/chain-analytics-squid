import { Block, Chain, ChainContext } from '../types/support';
import {
  BalancesTotalIssuanceStorage,
  SystemAccountStorage,
  ParachainStakingTotalSelectedStorage,
  ParachainStakingSelectedCandidatesStorage,
  ParachainStakingRoundStorage,
  ParachainStakingCandidateInfoStorage,
  ParachainStakingDelegatorStateStorage,
  ParachainStakingTotalStorage,
  ProxyProxiesStorage,
  BalancesAccountStorage
} from '../types/storage';
import { UnknownVersionError } from '../../../utils/errors';
import { getKeysCountAll } from '../../utils';
import { CollatorInfoShort, DelegatorInfoShort } from '../../../utils/types';
import { excludeFromCirculatingAssetsAmountAddresses } from '../config';
import { encodeAccount } from '../../../utils/common';

export async function getTotalIssuance(ctx: ChainContext, block: Block) {
  const storage = new BalancesTotalIssuanceStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV49) {
    return await storage.asV49.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getSelectedCollators(ctx: ChainContext, block: Block) {
  const storage = new ParachainStakingSelectedCandidatesStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV49) {
    return await storage.asV49.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getSelectedCollatorsCount(
  ctx: ChainContext,
  block: Block
) {
  const storage = new ParachainStakingTotalSelectedStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV49) {
    return await storage.asV49.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getHoldersTotals(ctx: ChainContext, block: Block) {
  const storageSysAccount = new SystemAccountStorage(ctx, block);

  if (!storageSysAccount.isExists) return undefined;

  if (storageSysAccount.isV49) {
    const accountsList = [];
    for await (const keysPack of storageSysAccount.asV49.getPairsPaged(1000))
      accountsList.push(...keysPack);

    let totalFreeBalance = 0n;
    const totalCount = accountsList
      .filter(
        (pair) =>
          !excludeFromCirculatingAssetsAmountAddresses.has(
            encodeAccount(pair[0])
          )
      )
      .filter(([addr, accInfo]) => {
        totalFreeBalance += accInfo.data.free;
        return (
          accInfo.data.free +
            accInfo.data.feeFrozen +
            accInfo.data.miscFrozen +
            accInfo.data.reserved >
          0
        );
      }).length;

    return {
      totalHoldersCount: totalCount,
      totalFreeBalance: totalFreeBalance
    };
  }
  throw new UnknownVersionError(storageSysAccount.constructor.name);
}

export async function getRoundNumber(ctx: ChainContext, block: Block) {
  const storage = new ParachainStakingRoundStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV49) {
    return (await storage.asV49.get()).current;
  }
  throw new UnknownVersionError(storage.constructor.name);
}

export async function getTotalStake(ctx: ChainContext, block: Block) {
  const storage = new ParachainStakingTotalStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV49) {
    return await storage.asV49.get();
  }
  throw new UnknownVersionError(storage.constructor.name);
}

export async function getCollatorsDataShort(
  ctx: ChainContext,
  block: Block,
  selectedCollatorsIds: Uint8Array[]
) {
  const storage = new ParachainStakingCandidateInfoStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1201) {
    const dataList = await storage.asV1201.getMany(selectedCollatorsIds);

    const res = new Map<Uint8Array, CollatorInfoShort | null>();
    for (let i = 0; i < selectedCollatorsIds.length; i++) {
      res.set(
        selectedCollatorsIds[i],
        dataList[i]
          ? {
              bond: dataList[i]!.bond,
              totalCounted: dataList[i]!.totalCounted
            }
          : null
      );
    }
    return res;
  }
  throw new UnknownVersionError(storage.constructor.name);
}

export async function getStakingDelegatorsAllDataShort(
  ctx: ChainContext,
  block: Block
) {
  const storage = new ParachainStakingDelegatorStateStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV1001) {
    return (await storage.asV1001.getAll()).map((d) => {
      return { id: d.id, totalStake: d.total };
    });
  } else if (storage.isV1502) {
    return (await storage.asV1502.getAll()).map((d) => {
      return { id: d.id, totalStake: d.total };
    });
  }
  throw new UnknownVersionError(storage.constructor.name);
}
