import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { Totals } from '../model';

export function getOrCreateTotals() {
  let totalsEntity = SquidCache.get(Totals, '1');

  if (totalsEntity) return totalsEntity;

  totalsEntity = new Totals({
    id: '1',
    finalizedBlocks: 0n,
    totalIssuance: 0n,
    signedExtrinsics: 0n,
    transfers: 0n,
    holders: 0n,
    validatorsIdealCount: 0,
    validatorsCount: 0,
    stakedValueTotal: 0n,
    stakedValueValidator: 0n,
    stakedValueNominator: 0n,
    inflationRate: 0n
  });

  return totalsEntity;
}
