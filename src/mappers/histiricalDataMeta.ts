import { Ctx } from '../processor';
import { HistoricalDataMeta } from '../model';

export async function getOrCreateHistoricalDataMeta(ctx: Ctx) {
  let histMetaEntity = await ctx.store.get(HistoricalDataMeta, '1', false);

  if (histMetaEntity) return histMetaEntity;

  histMetaEntity = new HistoricalDataMeta({
    id: '1',
    holdersLatestBlockNumber: 0n,
    holdersLatestTime: null,

    issuanceLatestBlockNumber: 0n,
    issuanceLatestTime: null,

    validatorLatestBlockNumber: 0n,
    validatorLatestTime: null,

    stakingLatestBlockNumber: 0n,
    stakingLatestTime: null,

    transferLatestBlockNumber: 0n,
    transferLatestTime: null
  });

  return histMetaEntity;
}
