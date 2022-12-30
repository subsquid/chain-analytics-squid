import { Block, ChainContext, Event } from '../kusama/types/support';
import { ActiveEraInfo } from '../kusama/types/v1050';
import {
  NominationPoolsData,
  EraStaker,
  ErasStakersArgs,
  CollatorInfoShort,
  DelegatorInfoShort,
  HoldersTotals,
  AccountBalanceShort
} from '../../utils/types';
import {
  getBalancesAccountBalancesByKeys,
  getSystemAccountBalancesByKeys
} from '../polkadot/api/storage';

export type ChainApi = {
  events: {
    getBalancesTransferValue?: EventGetter<bigint>;
    getBalancesTransferAccounts?: EventGetter<Uint8Array[]>;
    getBalancesEndowedAccounts?: EventGetter<Uint8Array[]>;
    getBalancesBalanceSetAccounts?: EventGetter<Uint8Array[]>;
    getBalancesReservedAccounts?: EventGetter<Uint8Array[]>;
    getBalancesUnreservedAccounts?: EventGetter<Uint8Array[]>;
    getBalancesReserveRepatriatedAccounts?: EventGetter<Uint8Array[]>;
    getBalancesDepositAccounts?: EventGetter<Uint8Array[]>;
    getBalancesWithdrawAccounts?: EventGetter<Uint8Array[]>;
    getBalancesSlashedAccounts?: EventGetter<Uint8Array[]>;
  };
  storage: {
    getTotalIssuance: StorageGetter<[], bigint | undefined>;
    // getTotalHoldersCount: StorageGetter<[], number | undefined>;
    getHoldersTotals: StorageGetter<[], HoldersTotals | undefined>;

    getSystemAccountBalancesByKeys?: StorageGetter<
      [Uint8Array[]],
      AccountBalanceShort[] | undefined
    >;
    getBalancesAccountBalancesByKeys?: StorageGetter<
      [Uint8Array[]],
      AccountBalanceShort[] | undefined
    >;

    getEraStakersData?: StorageGetter<
      [ErasStakersArgs[]],
      (EraStaker | undefined)[] | undefined
    >;
    getActiveEra?: StorageGetter<[], ActiveEraInfo | undefined>;
    getCurrentEra?: StorageGetter<[], number | undefined>;

    getSelectedCollators?: StorageGetter<[], Uint8Array[] | undefined>;
    getSelectedCollatorsCount?: StorageGetter<[], number | undefined>;
    getRoundNumber?: StorageGetter<[], number | undefined>;
    getCollatorsDataShort?: StorageGetter<
      [Uint8Array[]],
      Map<Uint8Array, CollatorInfoShort | null> | undefined
    >;
    getStakingDelegatorsAllDataShort?: StorageGetter<
      [],
      DelegatorInfoShort[] | undefined
    >;
    getTotalStake?: StorageGetter<[], bigint | undefined>;

    getValidators?: StorageGetter<[], Uint8Array[] | undefined>;
    getValidatorsCount?: StorageGetter<[], number | undefined>;
    getIdealValidatorsCount?: StorageGetter<[], number | undefined>;

    getNominationPoolsData?: StorageGetter<[], NominationPoolsData | undefined>;
  };
};

type BalanceData = { free: bigint; reserved: bigint };

type EventGetter<R> = (ctx: ChainContext, event: Event) => R;
type StorageGetter<T extends Array<any>, R> = (
  ctx: ChainContext,
  block: Block,
  ...args: T
) => Promise<R>;

export type ChainName = 'kusama' | 'polkadot' | 'moonbeam' | 'moonriver';

type KusamaPolkadotChainsEvents =
  | 'getBalancesTransferValue'
  | 'getBalancesTransferAccounts'
  | 'getBalancesEndowedAccounts'
  | 'getBalancesBalanceSetAccounts'
  | 'getBalancesReservedAccounts'
  | 'getBalancesUnreservedAccounts'
  | 'getBalancesReserveRepatriatedAccounts'
  | 'getBalancesDepositAccounts'
  | 'getBalancesWithdrawAccounts'
  | 'getBalancesSlashedAccounts';

type MoonChainsEvents = never;

type KusamaPolkadotChainsStorageCalls =
  | 'getSystemAccountBalancesByKeys'
  | 'getBalancesAccountBalancesByKeys'
  | 'getTotalIssuance'
  | 'getHoldersTotals'
  | 'getEraStakersData'
  | 'getActiveEra'
  | 'getCurrentEra'
  | 'getValidators'
  | 'getValidatorsCount'
  | 'getIdealValidatorsCount'
  | 'getNominationPoolsData';

type MoonChainsStorageCalls =
  | 'getTotalIssuance'
  | 'getHoldersTotals'
  | 'getSelectedCollators'
  | 'getSelectedCollatorsCount'
  | 'getCollatorsDataShort'
  | 'getStakingDelegatorsAllDataShort'
  | 'getTotalStake'
  | 'getRoundNumber';

export type ChainApiDecorated<C> = {
  events: C extends 'kusama' | 'polkadot'
    ? Required<Pick<ChainApi['events'], KusamaPolkadotChainsEvents>>
    : C extends 'moonbeam' | 'moonriver'
      ? Required<Pick<ChainApi['events'], MoonChainsEvents>>
      : any;
  storage: C extends 'kusama' | 'polkadot'
    ? Required<Pick<ChainApi['storage'], KusamaPolkadotChainsStorageCalls>>
    : C extends 'moonbeam' | 'moonriver'
    ? Required<Pick<ChainApi['storage'], MoonChainsStorageCalls>>
    : any;
};

export type ApiDecorator = <C extends ChainName>(
  chainName: C
) => ChainApiDecorated<C>;
