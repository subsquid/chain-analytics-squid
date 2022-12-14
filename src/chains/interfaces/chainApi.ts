import { Block, ChainContext, Event } from '../kusama/types/support';
import { ActiveEraInfo } from '../kusama/types/v1050';

export type ChainApi = {
  events: {
    getTransferValue: EventGetter<bigint>;
  };
  storage: {
    getTotalIssuance: StorageGetter<[], bigint | undefined>;
    getTotalHoldersCount: StorageGetter<[], number | undefined>;
    getActiveEra: StorageGetter<[], ActiveEraInfo | undefined>;
    getCurrentEra: StorageGetter<[], number | undefined>;
    getValidators: StorageGetter<[], Uint8Array[] | undefined>;
    getIdealValidatorsCount: StorageGetter<[], number | undefined>;
    getEraStakersData: StorageGetter<[ErasStakersArgs[]], (EraStaker | undefined)[] | undefined>;
  };
};

type BalanceData = { free: bigint; reserved: bigint };

type EventGetter<R> = (ctx: ChainContext, event: Event) => R;
type StorageGetter<T extends Array<any>, R> = (
  ctx: ChainContext,
  block: Block,
  ...args: T
) => Promise<R>;

export interface EraStaker {
  total: bigint;
  own: bigint;
  nominators: { id: string; vote: bigint }[];
}

export type ErasStakersArgs = [account: Uint8Array, era?: number];
