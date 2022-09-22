import { Ctx, Block } from '../processor';
import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { Issuance } from '../model';
import { getOrHistoricalDataMeta } from './histiricalDataMeta';
import { TOTAL_ISSUANCE_CHECK_STEP } from '../config';
import { getOrCreateTotals } from './totals';
import {
  BalancesTotalIssuanceStorage,
  StakingNominatorsStorage
} from '../types/generated/storage';

export async function handleStakeAmount(ctx: Ctx, block: Block) {
  const histDataMeta = getOrHistoricalDataMeta();
  const blockHeightBigInt = BigInt(block.header.height);

  if (
    blockHeightBigInt - (histDataMeta.stakingLatestBlockNumber || 0n) <
    BigInt(TOTAL_ISSUANCE_CHECK_STEP)
  ) {
    return;
  }

  const storageNominators = new StakingNominatorsStorage(ctx, block.header);
  if (!storageNominators.isExists) return;

  const nominators = await storageNominators.getAllAsV1020();

  console.log('nominators - ', nominators);


  // const newIssuanceStat = new Issuance({
  //   id: blockHeightBigInt.toString(),
  //   timestamp: new Date(block.header.timestamp),
  //   amount
  // });
  //
  // SquidCache.upsert(newIssuanceStat);
  //
  // histDataMeta.issuanceLatestBlockNumber = blockHeightBigInt;
  // histDataMeta.issuanceLatestTime = new Date(block.header.timestamp);
  //
  // SquidCache.upsert(histDataMeta);
  //
  // const totals = getOrCreateTotals();
  //
  // totals.totalIssuance = amount;
  //
  // SquidCache.upsert(totals);
}
