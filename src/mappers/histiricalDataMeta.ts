import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { HistoricalDataMeta } from '../model';

export function getOrCreateHistoricalDataMeta() {
  let histMetaEntity = SquidCache.get(HistoricalDataMeta, '1');

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
