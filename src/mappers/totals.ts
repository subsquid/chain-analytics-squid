import { Ctx } from '../processor';

import { Totals } from '../model';

export async function getOrCreateTotals(ctx: Ctx) {
  let totalsEntity = await ctx.store.get(Totals, '1', false);

  if (totalsEntity) return totalsEntity;

  totalsEntity = new Totals({
    id: '1',
    finalizedBlocks: 0n,
    totalIssuance: 0n,
    signedExtrinsics: 0n,
    transfersCount: 0n,
    holders: 0,

    stakedValueTotal: 0n,
    stakedValueNominator: 0n,
  });

  return totalsEntity;
}
