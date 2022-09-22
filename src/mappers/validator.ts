import { Ctx, Block } from '../processor';
import { ProcessorCache as SquidCache } from '@subsquid/processor-tools';
import { Issuance, Validator } from '../model';
import { getOrHistoricalDataMeta } from './histiricalDataMeta';
import { TOTAL_ISSUANCE_CHECK_STEP } from '../config';
import { getOrCreateTotals } from './totals';
import {
  BalancesTotalIssuanceStorage,
  StakingMaxValidatorsCountStorage,
  StakingValidatorCountStorage,
  StakingValidatorsStorage
} from '../types/generated/storage';
import { getStorageHash } from '../utils/common';

export async function handleValidators(ctx: Ctx, block: Block) {
  const histDataMeta = getOrHistoricalDataMeta();
  const blockHeightBigInt = BigInt(block.header.height);

  if (
    blockHeightBigInt - (histDataMeta.validatorLatestBlockNumber || 0n) <
    BigInt(TOTAL_ISSUANCE_CHECK_STEP)
  ) {
    return;
  }

  let validatorsKeys = null;

  const storageIdealCount = new StakingValidatorCountStorage(ctx, block.header);
  const storageCount = new StakingValidatorsStorage(ctx, block.header);
  if (!storageIdealCount.isExists || !storageCount.isExists) return;

  const idealCount = await storageIdealCount.getAsV1020();

  validatorsKeys = await ctx._chain.client.call('state_getKeys', [
    getStorageHash('Staking', 'Validators'),
    block.header.hash
  ]);

  if (!validatorsKeys) return;

  const newValidatorStat = new Validator({
    id: blockHeightBigInt.toString(),
    timestamp: new Date(block.header.timestamp),
    count: validatorsKeys.length,
    idealCount
  });

  SquidCache.upsert(newValidatorStat);

  histDataMeta.validatorLatestBlockNumber = blockHeightBigInt;
  histDataMeta.validatorLatestTime = new Date(block.header.timestamp);

  SquidCache.upsert(histDataMeta);

  const totals = getOrCreateTotals();
  totals.validatorsIdealCount = idealCount;
  totals.validatorsCount = validatorsKeys.length;

  SquidCache.upsert(totals);
}
