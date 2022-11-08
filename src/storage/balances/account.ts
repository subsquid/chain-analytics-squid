import { Ctx, Block } from '../../processor';
import {
  BalancesAccountStorage,
  BalancesFreeBalanceStorage,
  BalancesReservedBalanceStorage
} from '../../types/generated/storage';
import { UnknownVersionError } from '../../utils/errors';

export async function getBalancesAccountBalances(
  ctx: Ctx,
  block: Block,
  accounts: Uint8Array[]
) {
  const storage = new BalancesAccountStorage(ctx, block.header);
  if (!storage.isExists) return undefined;

  const mapData = (d: { free: bigint; reserved: bigint }) => ({
    free: d.free,
    reserved: d.reserved
  });

  if (storage.isV1050) {
    return storage.getManyAsV1050(accounts).then((data) => data.map(mapData));
  } else {
    throw new UnknownVersionError(storage.constructor.name);
  }
}

export async function getBalancesAccountBalancesOld(
  ctx: Ctx,
  block: Block,
  accounts: Uint8Array[]
) {
  const storageFree = new BalancesFreeBalanceStorage(ctx, block.header);

  const dataFree = storageFree.isExists
    ? await storageFree.getManyAsV1020(accounts)
    : new Array(accounts.length).fill(0n);

  const storageReserved = new BalancesReservedBalanceStorage(ctx, block.header);

  const dataReserved = storageReserved.isExists
    ? await storageReserved.getManyAsV1020(accounts)
    : new Array(accounts.length).fill(0n);

  return dataFree.map((f, i) => ({ free: f, reserved: dataReserved[i] }));
}
