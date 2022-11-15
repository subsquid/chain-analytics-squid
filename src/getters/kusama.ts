// import { BalancesTransferEvent } from '../types/kusama/events';
// import {
//   BalancesTotalIssuanceStorage,
//   SessionValidatorsStorage,
//   StakingActiveEraStorage,
//   StakingCurrentEraStorage,
//   StakingStakersStorage,
//   StakingValidatorCountStorage,
//   SystemAccountStorage
// } from '../types/kusama/storage';
// import { Block, ChainContext, Event } from '../types/support';
// import { UnknownVersionError } from '../utils/errors';
// import { ChainGetters } from './chainGetters';
//
// function getTransferAccounts(
//   ctx: ChainContext,
//   event: Event
// ): [Uint8Array, Uint8Array, bigint, bigint?] {
//   const data = new BalancesTransferEvent(ctx, event);
//
//   if (data.isV1020) {
//     return [data.asV1020[0], data.asV1020[1], data.asV1020[2], data.asV1020[3]];
//   } else if (data.isV1050) {
//     return [data.asV1050[0], data.asV1050[1], data.asV1020[2]];
//   } else if (data.isV9130) {
//     return [data.asV9130.from, data.asV9130.to, data.asV9130.amount];
//   } else {
//     throw new UnknownVersionError(data.constructor.name);
//   }
// }
//
// async function getBalancesAccountBalances(
//   ctx: ChainContext,
//   block: Block,
//   accounts: Uint8Array[]
// ) {
//   const storage = new BalancesAccountStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   const mapData = (d: { free: bigint; reserved: bigint }) => ({
//     free: d.free,
//     reserved: d.reserved
//   });
//
//   if (storage.isV1050) {
//     return storage.getManyAsV1050(accounts).then((data) => data.map(mapData));
//   } else {
//     throw new UnknownVersionError(storage.constructor.name);
//   }
// }
//
// async function getBalancesAccountBalancesOld(
//   ctx: ChainContext,
//   block: Block,
//   accounts: Uint8Array[]
// ) {
//   const storageFree = new BalancesFreeBalanceStorage(ctx, block);
//
//   const dataFree = storageFree.isExists
//     ? await storageFree.getManyAsV1020(accounts)
//     : new Array(accounts.length).fill(0n);
//
//   const storageReserved = new BalancesReservedBalanceStorage(ctx, block);
//
//   const dataReserved = storageReserved.isExists
//     ? await storageReserved.getManyAsV1020(accounts)
//     : new Array(accounts.length).fill(0n);
//
//   return dataFree.map((f, i) => ({ free: f, reserved: dataReserved[i] }));
// }
//
// async function getSystemAccountBalances(
//   ctx: ChainContext,
//   block: Block,
//   accounts: Uint8Array[]
// ) {
//   const storage = new SystemAccountStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   const mapData = (d: { data: { free: bigint; reserved: bigint } }) => ({
//     free: d.data.free,
//     reserved: d.data.reserved
//   });
//
//   if (storage.isV1050) {
//     return storage.getManyAsV1050(accounts).then((data) => data.map(mapData));
//   } else if (storage.isV2025) {
//     return storage.getManyAsV2025(accounts).then((data) => data.map(mapData));
//   } else if (storage.isV2028) {
//     return storage.getManyAsV2028(accounts).then((data) => data.map(mapData));
//   } else if (storage.isV2030) {
//     return storage.getManyAsV2030(accounts).then((data) => data.map(mapData));
//   } else {
//     throw new UnknownVersionError(storage.constructor.name);
//   }
// }
// async function isExistsSystemAccountStorage(ctx: ChainContext, block: Block) {
//   const storage = new SystemAccountStorage(ctx, block);
//   return storage.isExists;
// }
//
// const getters: ChainGetters = {
//   events: {
//     getTransferAccounts
//   },
//   storage: {
//     getBalancesAccountBalances,
//     getBalancesAccountBalancesOld,
//     getSystemAccountBalances,
//     isExistsSystemAccountStorage
//   }
// };
//
// export default getters;
