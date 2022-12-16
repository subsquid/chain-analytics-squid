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

    validatorsLatestBlockNumber: 0n,
    validatorsLatestTime: null,

    stakingLatestBlockNumber: 0n,
    stakingLatestTime: null,

    nominationPoolsLatestBlockNumber: 0n,
    nominationPoolsLatestTime: null
  });

  return histMetaEntity;
}
