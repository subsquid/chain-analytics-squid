export enum BlockEventName {
  BALANCES_TRANSFER = 'BALANCES_TRANSFER',
  BALANCES_ACCOUNT = 'BALANCES_ACCOUNT',
  SIGNED_EXTRINSIC = 'SIGNED_EXTRINSIC'
}

export enum CheckPointsKeys {
  holders = 'holders',
  issuance = 'issuance',
  validators = 'validators',
  staking = 'staking'
}

export interface BalancesTransferEventData {
  id: string;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
  volume: bigint;
}

export interface BalancesAccountData {
  idList: Set<Uint8Array>;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
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
  callName: string;
}

export type ParsedEventsData =
  | BalancesTransferEventData
  | BalancesWithdrawEventData
  | CallSignedExtrinsicData
  | BalancesAccountData;

export type ParsedEventsDataMap = Map<BlockEventName, Set<ParsedEventsData>>;
