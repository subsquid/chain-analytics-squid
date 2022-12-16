import { Ctx, Block } from '../processor';
import { NominationPools } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { getOrCreateTotals } from './totals';
import { isCheckPoint, isMetricTrackable } from '../utils/common';
import { CheckPointsKeys, TrackingMetrics } from '../utils/types';
import { getChain } from '../chains';

const { api } = getChain();

export async function handleNominationPools(ctx: Ctx, block: Block) {
  const histDataMeta = await getOrCreateHistoricalDataMeta(ctx);

  if (
    !isMetricTrackable(TrackingMetrics.nominationPools) ||
    !isCheckPoint(CheckPointsKeys.nominationPools, histDataMeta, block)
  )
    return;

  const nominationPoolsTotals = await api.storage.getNominationPoolsData!(ctx, {
    hash: block.header.hash
  });

  if (nominationPoolsTotals !== undefined) {
    const { totalPoolsCount, totalPoolsMembers, totalPoolsStake } =
      nominationPoolsTotals;

    const newNominationPoolsStat = new NominationPools({
      id: block.header.height.toString(),
      timestamp: new Date(block.header.timestamp),
      blockHash: block.header.hash,
      totalPoolsCount: totalPoolsCount,
      totalPoolsMembers: totalPoolsMembers,
      totalPoolsStake: totalPoolsStake
    });

    ctx.store.deferredUpsert(newNominationPoolsStat);

    const totals = await getOrCreateTotals(ctx);

    totals.nominationPoolsCountPools = totalPoolsCount;
    totals.nominationPoolsCountMembers = totalPoolsMembers;
    totals.nominationPoolsTotalStake = totalPoolsStake;

    ctx.store.deferredUpsert(totals);
  }

  histDataMeta.nominationPoolsLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.nominationPoolsLatestTime = new Date(block.header.timestamp);
  ctx.store.deferredUpsert(histDataMeta);
}
