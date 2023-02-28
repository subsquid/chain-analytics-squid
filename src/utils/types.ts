export enum SubProcessorTask {
  // GET_HOLDERS_KEYS_COUNT = 'getTotalHoldersCount'
  GET_HOLDERS_TOTALS = 'getHoldersTotals'
}

export enum BlockEventName {
  INVOLVED_ACCOUNTS_SYNTHETIC = 'INVOLVED_ACCOUNTS_SYNTHETIC',
  BALANCES_TRANSFER = 'BALANCES_TRANSFER',
  BALANCES_WITHDRAW = 'BALANCES_WITHDRAW',
  SIGNED_EXTRINSIC = 'SIGNED_EXTRINSIC'
}

export enum TrackingMetrics {
  holders = 'holders',
  issuance = 'issuance',
  validators = 'validators',
  staking = 'staking',
  nominationPools = 'nominationPools',
  transfers = 'transfers'
}

export enum CheckPointsKeys {
  holders = 'holders',
  issuance = 'issuance',
  validators = 'validators',
  staking = 'staking',
  nominationPools = 'nominationPools'
}

interface ItemMetadata {
  id: string;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
}

export interface BalancesTransferEventData extends ItemMetadata {
  volume: bigint;
}
export interface InvolvedAccountsData {
  id: string;
  accountsU8: Uint8Array[];
}

export interface BalancesWithdrawEventData extends ItemMetadata {}

export interface CallSignedExtrinsicData extends ItemMetadata {}

export type ParsedEventsData =
  | BalancesTransferEventData
  | BalancesWithdrawEventData
  | CallSignedExtrinsicData
  | InvolvedAccountsData;

export type ParsedEventsDataMap = Map<
  BlockEventName,
  Map<string, ParsedEventsData>
>;

export type SubProcessorTaskPayload = {
  id: string;
  taskName: string;
  blockHash: string;
  blockHeight: number;
  timestamp: string;
  queueIndex: number;
  queueSubIndex: number;
  terminated?: boolean;
};

export type AccountBalancesPair = [
  Uint8Array,
  { free: bigint; reserved: bigint; miscFrozen: bigint; feeFrozen: bigint }
];

export type HoldersTotals = {
  totalHoldersCount: number | null;
  totalFreeBalance: bigint | null;
};

type SubProcessorTaskResultValue<T> =
  T extends SubProcessorTask.GET_HOLDERS_TOTALS ? HoldersTotals : never;

export interface SubProcessorTaskResult<T> extends SubProcessorTaskPayload {
  result: SubProcessorTaskResultValue<T> | null;
}

export type BalanceData = { free: bigint; reserved: bigint };

export type NominationPoolsData = {
  totalPoolsCount: number;
  totalPoolsMembers: number;
  totalPoolsStake: bigint;
};

export interface EraStaker {
  total: bigint;
  own: bigint;
  nominators: { id: string; vote: bigint }[];
}

export type ErasStakersArgs = [account: Uint8Array, era?: number];
export type AccountBalanceShort = { free: bigint; reserved: bigint };

export type CollatorInfoShort = {
  bond: bigint;
  totalCounted: bigint;
};

export type DelegatorInfoShort = {
  id: Uint8Array;
  totalStake: bigint;
};
