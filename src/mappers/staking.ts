import { Codec as ScaleCodec } from '@subsquid/scale-codec';
import { Ctx, Block } from '../processor';
import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { StakedValue } from '../model';
import { getOrCreateHistoricalDataMeta } from './histiricalDataMeta';
import { TOTAL_STAKING_CHECK_STEP } from '../config';
import { getOrCreateTotals } from './totals';
import {
  BalancesTotalIssuanceStorage,
  StakingActiveEraStorage,
  StakingErasStakersStorage,
  StakingErasTotalStakeStorage,
  StakingNominatorsStorage
} from '../types/generated/storage';
import { getStorageHash } from '../utils/common';

export async function handleStakeAmount(ctx: Ctx, block: Block) {
  const histDataMeta = getOrCreateHistoricalDataMeta();

  if (
    block.header.timestamp -
      (histDataMeta.stakingLatestTime
        ? histDataMeta.stakingLatestTime.getTime()
        : 0) <
    TOTAL_STAKING_CHECK_STEP
  ) {
    return;
  }

  const activeEraStorage = new StakingActiveEraStorage(ctx, block.header);
  const erasTotalStakeStorage = new StakingErasTotalStakeStorage(
    ctx,
    block.header
  );
  // const erasStakersStorage = new StakingErasStakersStorage(ctx, block.header);
  if (
    !activeEraStorage.isExists ||
    !erasTotalStakeStorage.isExists
    // !erasStakersStorage.isExists
  )
    return;

  const activeEra = await activeEraStorage.getAsV1050();
  if (!activeEra || !activeEra.index) return;

  const erasTotalStake = await erasTotalStakeStorage.getAsV1050(
    activeEra.index
  );

  // const keys = await ctx._chain.client.call('state_getKeys', [
  //   getStorageHash('Staking', 'ErasStakers'),
  //   block.header.hash
  // ]);

  // const erasStakers = await ctx._chain.getStorage(
  //   block.header.hash,
  //   'Staking',
  //   'ErasStakers',
  //   activeEra,
  //   null
  // );
  // let req =
  //   getStorageHash('Staking', 'ErasStakers') + 'c0459bb3f1b3dade2a070000';
  //
  // const erasStakers = await ctx._chain.client.call('state_getStorageAt', [
  //   req,
  //   block.header.hash
  // ]);

  const newStakedValueStat = new StakedValue({
    id: block.header.height.toString(),
    timestamp: new Date(block.header.timestamp),
    blockHash: block.header.hash,
    totalStake: erasTotalStake,
    validatorStake: 0n,
    nominatorStake: 0n
  });

  SquidCache.upsert(newStakedValueStat);

  histDataMeta.stakingLatestBlockNumber = BigInt(block.header.height);
  histDataMeta.stakingLatestTime = new Date(block.header.timestamp);

  SquidCache.upsert(histDataMeta);

  const totals = getOrCreateTotals();

  totals.stakedValueTotal = erasTotalStake;

  SquidCache.upsert(totals);
}
