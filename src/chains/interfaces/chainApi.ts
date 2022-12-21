import { Block, ChainContext, Event } from '../kusama/types/support';
import { ActiveEraInfo } from '../kusama/types/v1050';
import {
  NominationPoolsData,
  EraStaker,
  ErasStakersArgs,
  CollatorInfoShort,
  DelegatorInfoShort
} from '../../utils/types';

export type ChainApi = {
  events: {
    getTransferValue: EventGetter<bigint>;
  };
  storage: {
    getTotalIssuance: StorageGetter<[], bigint | undefined>;
    // getTotalHoldersCount: StorageGetter<[], number | undefined>;
    getHoldersTotals: StorageGetter<
      [],
      { totalHoldersCount: number; totalFreeBalance: bigint } | undefined
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

type KusamaPolkadotChainsStorageCalls =
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
  events: ChainApi['events'];
  storage: C extends 'kusama' | 'polkadot'
    ? Required<Pick<ChainApi['storage'], KusamaPolkadotChainsStorageCalls>>
    : C extends 'moonbeam' | 'moonriver'
    ? Required<Pick<ChainApi['storage'], MoonChainsStorageCalls>>
    : any;
};

export type ApiDecorator = <C extends ChainName>(
  chainName: C
) => ChainApiDecorated<C>;
