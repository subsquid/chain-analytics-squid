import { Ctx, Block } from '../../processor';
import {
  SessionValidatorsStorage,
  SystemAccountStorage
} from '../../types/generated/storage';
import { UnknownVersionError } from '../../utils/errors';

export async function getSystemAccountBalances(
  ctx: Ctx,
  block: Block,
  accounts: Uint8Array[]
) {
  const storage = new SystemAccountStorage(ctx, block.header);
  if (!storage.isExists) return undefined;

  const mapData = (d: { data: { free: bigint; reserved: bigint } }) => ({
    free: d.data.free,
    reserved: d.data.reserved
  });

  if (storage.isV1050) {
    return storage.getManyAsV1050(accounts).then((data) => data.map(mapData));
  } else if (storage.isV2025) {
    return storage.getManyAsV2025(accounts).then((data) => data.map(mapData));
  } else if (storage.isV2028) {
    return storage.getManyAsV2028(accounts).then((data) => data.map(mapData));
  } else if (storage.isV2030) {
    return storage.getManyAsV2030(accounts).then((data) => data.map(mapData));
  } else {
    throw new UnknownVersionError(storage.constructor.name);
  }
}
