export enum SubProcessorTask {
  GET_HOLDERS_KEYS_COUNT = 'getTotalHoldersCount'
}

export enum BlockEventName {
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

export interface BalancesTransferEventData {
  id: string;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
  volume: bigint;
}

export interface BalancesWithdrawEventData {
  id: string;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
}

export interface CallSignedExtrinsicData {
  id: string;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
}

export type ParsedEventsData =
  | BalancesTransferEventData
  | BalancesWithdrawEventData
  | CallSignedExtrinsicData;

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

export type SubProcessorTaskResult = SubProcessorTaskPayload & {
  result: number | undefined | null;
};

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

export type CollatorInfoShort = {
  bond: bigint;
  totalCounted: bigint;
};

export type DelegatorInfoShort = {
  id: Uint8Array;
  totalStake: bigint;
};
