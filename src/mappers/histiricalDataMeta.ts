import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { HistoricalDataMeta } from '../model';

export function getOrHistoricalDataMeta() {
  let histMetaEntity = SquidCache.get(HistoricalDataMeta, '1');

  if (histMetaEntity) return histMetaEntity;

  histMetaEntity = new HistoricalDataMeta({
    id: '1',
    holdersLatestBlockNumber: 0n,
    holdersLatestTime: null,

    issuanceLatestBlockNumber: 0n,
    issuanceLatestTime: null,

    validatorLatestBlockNumber: 0n,
    validatorLatestTime: null
  });

  return histMetaEntity;
}
