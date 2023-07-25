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

export type ChainApi = {
  events: {
    getBalancesTransferValue: EventGetter<bigint>;
    getBalancesTransferAccounts: EventGetter<Uint8Array[]>;
    getBalancesEndowedAccounts: EventGetter<Uint8Array[]>;
    getBalancesBalanceSetAccounts: EventGetter<Uint8Array[]>;
    getBalancesReservedAccounts: EventGetter<Uint8Array[]>;
    getBalancesUnreservedAccounts: EventGetter<Uint8Array[]>;
    getBalancesReserveRepatriatedAccounts: EventGetter<Uint8Array[]>;
    getBalancesDepositAccounts: EventGetter<Uint8Array[]>;
    getBalancesWithdrawAccounts: EventGetter<Uint8Array[]>;
    getBalancesSlashedAccounts: EventGetter<Uint8Array[]>;
  };
  storage: {
    getIdentitySupers: StorageGetter<[Uint8Array[]], (Uint8Array | undefined)[] | undefined >
    getLeasesTotalAmount: StorageGetter<[], bigint | undefined>
    getTotalIssuance: StorageGetter<[], bigint | undefined>;
    // getTotalHoldersCount: StorageGetter<[], number | undefined>;
    getHoldersTotals: StorageGetter<[], HoldersTotals | undefined>;

    getSystemAccountBalancesByKeys: StorageGetter<
      [Uint8Array[]],
      AccountBalanceShort[] | undefined
    >;
    getBalancesAccountBalancesByKeys: StorageGetter<
      [Uint8Array[]],
      AccountBalanceShort[] | undefined
    >;

    getEraStakersData: StorageGetter<
      [number],
      (EraStaker)[] | undefined
    >;
    getActiveEra: StorageGetter<[], ActiveEraInfo | undefined>;
    getCurrentEra: StorageGetter<[], number | undefined>;

    getSelectedCollators: StorageGetter<[], Uint8Array[] | undefined>;
    getSelectedCollatorsCount: StorageGetter<[], number | undefined>;
    getRoundNumber: StorageGetter<[], number | undefined>;
    getCollatorsDataShort: StorageGetter<
      [Uint8Array[]],
      Map<Uint8Array, CollatorInfoShort | null> | undefined
    >;
    getStakingDelegatorsAllDataShort: StorageGetter<
      [],
      DelegatorInfoShort[] | undefined
    >;
    getTotalStake: StorageGetter<[], bigint | undefined>;

    getValidators: StorageGetter<[], Uint8Array[] | undefined>;
    getValidatorsCount: StorageGetter<[], number | undefined>;
    getIdealValidatorsCount: StorageGetter<[], number | undefined>;

    getNominationPoolsData: StorageGetter<[], NominationPoolsData | undefined>;
    getCounterForValidatorsNumber: StorageGetter<[], number | undefined>;
    getCounterForNominatorsNumber: StorageGetter<[], number | undefined>;
    getAuctionCounterNumber: StorageGetter<[], number | undefined>;
  };
};

export type EventGetter<R> = (ctx: ChainContext, event: Event) => R;
export type StorageGetter<T extends Array<any>, R> = (
  ctx: ChainContext,
  block: Block,
  ...args: T
) => Promise<R>;
