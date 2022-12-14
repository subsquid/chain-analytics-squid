// import { Block, Chain, ChainContext } from '../types/support';
// import {
//   BalancesTotalIssuanceStorage,
//   SystemAccountStorage,
//   StakingActiveEraStorage,
//   StakingCurrentEraStorage,
//   SessionValidatorsStorage,
//   StakingErasStakersStorage,
//   StakingStakersStorage,
//   StakingValidatorCountStorage
// } from '../types/storage';
// import { UnknownVersionError } from '../../../utils/errors';
// import { decodeAccount, encodeAccount } from '../../../utils/common';
// import { getChain } from '../../index';
// import { EraStaker, ErasStakersArgs } from '../../interfaces/chainApi';
//
// const { config: chainConfig } = getChain();
//
// export async function getTotalIssuance(ctx: ChainContext, block: Block) {
//   const storage = new BalancesTotalIssuanceStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV1020) {
//     return await storage.asV1020.get();
//   }
//
//   throw new UnknownVersionError(storage.constructor.name);
// }
// export async function getActiveEra(ctx: ChainContext, block: Block) {
//   const storage = new StakingActiveEraStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV1050) {
//     return await storage.asV1050.get();
//   }
//
//   throw new UnknownVersionError(storage.constructor.name);
// }
// export async function getCurrentEra(ctx: ChainContext, block: Block) {
//   const storage = new StakingCurrentEraStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV1020) {
//     return await storage.asV1020.get();
//   } else if (storage.isV1050) {
//     return await storage.asV1050.get();
//   }
//
//   throw new UnknownVersionError(storage.constructor.name);
// }
//
// export async function getValidators(ctx: ChainContext, block: Block) {
//   const storage = new SessionValidatorsStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV1020) {
//     return await storage.asV1020.get();
//   }
//
//   throw new UnknownVersionError(storage.constructor.name);
// }
// export async function getErasStakersData(
//   ctx: ChainContext,
//   block: Block,
//   keyPairs: [number, Uint8Array][]
// ) {
//   const storage = new StakingErasStakersStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV1050) {
//     return await storage.asV1050.getMany(keyPairs);
//   }
//
//   throw new UnknownVersionError(storage.constructor.name);
// }
// export async function getStakersData(
//   ctx: ChainContext,
//   block: Block,
//   keyPairs: Uint8Array[]
// ) {
//   const storage = new StakingStakersStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV1020) {
//     return await storage.asV1020.getMany(keyPairs);
//   }
//
//   throw new UnknownVersionError(storage.constructor.name);
// }
// export async function getIdealValidatorsCount(ctx: ChainContext, block: Block) {
//   const storage = new StakingValidatorCountStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV1020) {
//     return await storage.asV1020.get();
//   }
//
//   throw new UnknownVersionError(storage.constructor.name);
// }
//
// export async function getTotalHoldersCount(ctx: ChainContext, block: Block) {
//   const storage = new SystemAccountStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV1050) {
//     return undefined; // This call is not available in this spec version
//   } else if (storage.isV2025) {
//     return await getKeysCountAll(storage.asV2025.getKeysPaged);
//   } else if (storage.isV2028) {
//     return await getKeysCountAll(storage.asV2028.getKeysPaged);
//   } else if (storage.isV2030) {
//     return await getKeysCountAll(storage.asV2030.getKeysPaged);
//   } else {
//     throw new UnknownVersionError(storage.constructor.name);
//   }
// }
//
// export async function getEraStakersData(
//   ctx: ChainContext,
//   block: Block,
//   keys: ErasStakersArgs[]
// ) {
//   if (keys.length === 0) return [];
//
//   const eraStakers: [number, Uint8Array][] = keys.map((k) => [k[1] || 0, k[0]]);
//   const stakers: Uint8Array[] = keys.map((k) => k[0]);
//
//   const data =
//     (await getErasStakersData(ctx, block, eraStakers)) ||
//     (await getStakersData(ctx, block, stakers));
//   if (!data) return undefined;
//
//   return data.map((v) => ({
//     total: v.total,
//     own: v.own,
//     nominators: v.others.map((n) => ({
//       id: encodeAccount(n.who, chainConfig.prefix),
//       vote: n.value
//     }))
//   })) as EraStaker[];
// }
//
// async function getKeysCountAll(
//   getKeysPagedFunc: (
//     pageSize: number,
//     key?: Uint8Array
//   ) => AsyncIterable<Uint8Array[]>
// ) {
//   try {
//     let getIterable = getKeysPagedFunc(1000);
//     const keys = [];
//
//     for await (const keysPack of getIterable) {
//       keys.push(keysPack);
//     }
//
//     return keys.length;
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// }
