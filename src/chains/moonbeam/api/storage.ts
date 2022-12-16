import { Block, Chain, ChainContext } from '../types/support';
import {
  BalancesTotalIssuanceStorage,
  SystemAccountStorage,
  ParachainStakingTotalSelectedStorage,
  ParachainStakingSelectedCandidatesStorage,
  ParachainStakingRoundStorage,
  ParachainStakingCandidateInfoStorage,
  ParachainStakingDelegatorStateStorage,
  ParachainStakingTotalStorage
} from '../types/storage';
import { UnknownVersionError } from '../../../utils/errors';
import { getKeysCountAll } from '../../utils';
import { CollatorInfoShort, DelegatorInfoShort } from '../../../utils/types';

export async function getTotalIssuance(ctx: ChainContext, block: Block) {
  const storage = new BalancesTotalIssuanceStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV900) {
    return await storage.asV900.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getSelectedCollators(ctx: ChainContext, block: Block) {
  const storage = new ParachainStakingSelectedCandidatesStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV900) {
    return await storage.asV900.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getSelectedCollatorsCount(
  ctx: ChainContext,
  block: Block
) {
  const storage = new ParachainStakingTotalSelectedStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV900) {
    return await storage.asV900.get();
  }

  throw new UnknownVersionError(storage.constructor.name);
}

export async function getTotalHoldersCount(ctx: ChainContext, block: Block) {
  const storage = new SystemAccountStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV900) {
    return await getKeysCountAll(storage.asV900.getKeysPaged(1000));
  }
  throw new UnknownVersionError(storage.constructor.name);
}

export async function getRoundNumber(ctx: ChainContext, block: Block) {
  const storage = new ParachainStakingRoundStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV900) {
    return (await storage.asV900.get()).current;
  }
  throw new UnknownVersionError(storage.constructor.name);
}

export async function getTotalStake(ctx: ChainContext, block: Block) {
  const storage = new ParachainStakingTotalStorage(ctx, block);
  if (!storage.isExists) return undefined;

  if (storage.isV900) {
    return await storage.asV900.get();
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
