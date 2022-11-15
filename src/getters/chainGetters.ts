// import { Block, ChainContext, Event } from '../types/generated/support';
//
// export type ChainGetters = {
//   events: {
//     getTransferAccounts: EventGetter<[Uint8Array, Uint8Array, bigint, bigint?]>;
//   };
//   storage: {
//     isExistsSystemAccountStorage: StorageGetter<
//       [Uint8Array[]],
//       boolean
//     >;
//   };
// };
//
// type BalanceData = { free: bigint; reserved: bigint };
//
// type EventGetter<R> = (ctx: ChainContext, event: Event) => R;
// type StorageGetter<T extends Array<any>, R> = (
//   ctx: ChainContext,
//   block: Block,
//   ...args: T
// ) => Promise<R>;
