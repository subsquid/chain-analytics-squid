import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v0 from './v0'
import * as v5 from './v5'
import * as v6 from './v6'
import * as v7 from './v7'
import * as v8 from './v8'
import * as v9 from './v9'
import * as v10 from './v10'
import * as v11 from './v11'
import * as v13 from './v13'
import * as v14 from './v14'
import * as v15 from './v15'
import * as v17 from './v17'
import * as v18 from './v18'
import * as v23 from './v23'
import * as v24 from './v24'
import * as v25 from './v25'
import * as v26 from './v26'
import * as v27 from './v27'
import * as v28 from './v28'
import * as v29 from './v29'
import * as v30 from './v30'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9110 from './v9110'
import * as v9122 from './v9122'
import * as v9140 from './v9140'
import * as v9170 from './v9170'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9200 from './v9200'
import * as v9220 from './v9220'
import * as v9230 from './v9230'
import * as v9250 from './v9250'
import * as v9260 from './v9260'
import * as v9270 from './v9270'
import * as v9280 from './v9280'
import * as v9291 from './v9291'
import * as v9300 from './v9300'
import * as v9340 from './v9340'
import * as v9360 from './v9360'
import * as v9370 from './v9370'
import * as v9420 from './v9420'

export class AttestationsDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Attestations'
    }

    protected getName() {
        return 'DidUpdate'
    }

    get isV0(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    get asV0(): AttestationsDidUpdateStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

export interface AttestationsDidUpdateStorageV0 {
    get(): Promise<boolean>
}

export class AttestationsParaBlockAttestationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Attestations'
    }

    protected getName() {
        return 'ParaBlockAttestations'
    }

    /**
     *  Attestations on a recent parachain block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'ad8a198a3d01e7d75d496c087e6ab07e033e442693b2dae9a0a735e7162a2bf3'
    }

    /**
     *  Attestations on a recent parachain block.
     */
    get asV0(): AttestationsParaBlockAttestationsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Attestations on a recent parachain block.
 */
export interface AttestationsParaBlockAttestationsStorageV0 {
    get(key1: number, key2: Uint8Array): Promise<(v0.BlockAttestations | undefined)>
    getAll(): Promise<v0.BlockAttestations[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v0.BlockAttestations | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v0.BlockAttestations][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v0.BlockAttestations][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v0.BlockAttestations][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v0.BlockAttestations][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v0.BlockAttestations][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v0.BlockAttestations][]>
}

export class AttestationsRecentParaBlocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Attestations'
    }

    protected getName() {
        return 'RecentParaBlocks'
    }

    /**
     *  A mapping from modular block number (n % AttestationPeriod)
     *  to session index and the list of candidate hashes.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '331d739c1970fe15863a9470a57f354521e1e32b4c88a325098ff6848b5044ec'
    }

    /**
     *  A mapping from modular block number (n % AttestationPeriod)
     *  to session index and the list of candidate hashes.
     */
    get asV0(): AttestationsRecentParaBlocksStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  A mapping from modular block number (n % AttestationPeriod)
 *  to session index and the list of candidate hashes.
 */
export interface AttestationsRecentParaBlocksStorageV0 {
    get(key: number): Promise<(v0.IncludedBlocks | undefined)>
    getAll(): Promise<v0.IncludedBlocks[]>
    getMany(keys: number[]): Promise<(v0.IncludedBlocks | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v0.IncludedBlocks][]>
    getPairs(key: number): Promise<[k: number, v: v0.IncludedBlocks][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v0.IncludedBlocks][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v0.IncludedBlocks][]>
}

export class AuctionsAuctionCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'AuctionCounter'
    }

    /**
     *  Number of auctions started so far.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of auctions started so far.
     */
    get asV9110(): AuctionsAuctionCounterStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Number of auctions started so far.
 */
export interface AuctionsAuctionCounterStorageV9110 {
    get(): Promise<number>
}

export class AuctionsAuctionInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'AuctionInfo'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get asV9110(): AuctionsAuctionInfoStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface AuctionsAuctionInfoStorageV9110 {
    get(): Promise<([number, number] | undefined)>
}

export class AuctionsReservedAmountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'ReservedAmounts'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'fda6a5cc800624ef757b3d079b088c0eebe85aa8e842b133f55d4d490b10f527'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get asV9110(): AuctionsReservedAmountsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface AuctionsReservedAmountsStorageV9110 {
    get(key: [Uint8Array, number]): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, number][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: bigint][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: bigint][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: bigint][]>
}

export class AuctionsWinningStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'Winning'
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '50afa484f0cd0b49800ca936e6d5aef816fcfd7b469149f3f61b1d41d4e2bd86'
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get asV9110(): AuctionsWinningStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Sample Size. The
 *  first sample of the ending period is 0; the last is `Sample Size - 1`.
 */
export interface AuctionsWinningStorageV9110 {
    get(key: number): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)>
    getAll(): Promise<([Uint8Array, number, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
}

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV0(): AuthorshipAuthorStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV0 {
    get(): Promise<(Uint8Array | undefined)>
}

export class AuthorshipDidSetUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'DidSetUncles'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get asV0(): AuthorshipDidSetUnclesStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Whether uncles were already set in this block.
 */
export interface AuthorshipDidSetUnclesStorageV0 {
    get(): Promise<boolean>
}

export class AuthorshipUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Uncles'
    }

    /**
     *  Uncles
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'e10c952327a3967ba23352da69594b66914b44ebcef7e4703bb69fed952ecdd6'
    }

    /**
     *  Uncles
     */
    get asV0(): AuthorshipUnclesStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Uncles
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
    }

    /**
     *  Uncles
     */
    get asV9110(): AuthorshipUnclesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV0 {
    get(): Promise<v0.UncleEntryItem[]>
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV9110 {
    get(): Promise<v9110.UncleEntryItem[]>
}

export class BabeAuthorVrfRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'AuthorVrfRandomness'
    }

    /**
     *  Temporary value (cleared at block finalization) that includes the VRF output generated
     *  at this block. This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     */
    get isV26(): boolean {
        return this.getTypeHash() === '10a2769b0f42175702ad26b83248cff46d4c3e32ecee58ea6ff2417630585d13'
    }

    /**
     *  Temporary value (cleared at block finalization) that includes the VRF output generated
     *  at this block. This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     */
    get asV26(): BabeAuthorVrfRandomnessStorageV26 {
        assert(this.isV26)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) that includes the VRF output generated
 *  at this block. This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 */
export interface BabeAuthorVrfRandomnessStorageV26 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BabeAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  Current epoch authorities.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Current epoch authorities.
     */
    get asV0(): BabeAuthoritiesStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Current epoch authorities.
 */
export interface BabeAuthoritiesStorageV0 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeCurrentSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'CurrentSlot'
    }

    /**
     *  Current slot number.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current slot number.
     */
    get asV0(): BabeCurrentSlotStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Current slot number.
 */
export interface BabeCurrentSlotStorageV0 {
    get(): Promise<bigint>
}

export class BabeEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochConfig'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
     */
    get asV30(): BabeEpochConfigStorageV30 {
        assert(this.isV30)
        return this as any
    }
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
 */
export interface BabeEpochConfigStorageV30 {
    get(): Promise<(v30.BabeEpochConfiguration | undefined)>
}

export class BabeEpochIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochIndex'
    }

    /**
     *  Current epoch index.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current epoch index.
     */
    get asV0(): BabeEpochIndexStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Current epoch index.
 */
export interface BabeEpochIndexStorageV0 {
    get(): Promise<bigint>
}

export class BabeEpochStartStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochStart'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get asV30(): BabeEpochStartStorageV30 {
        assert(this.isV30)
        return this as any
    }
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface BabeEpochStartStorageV30 {
    get(): Promise<[number, number]>
}

export class BabeGenesisSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'GenesisSlot'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get asV0(): BabeGenesisSlotStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface BabeGenesisSlotStorageV0 {
    get(): Promise<bigint>
}

export class BabeInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Initialized'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'baa8b35cc3c4f9962c8e7906c4e027bf52bf107cfe165d1c64edc4d8707f6b83'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV0(): BabeInitializedStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '16ccca942b9cb8220d11bc4ab1a33375a3c8ed33a2e69b60561f6e99a60ae492'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV9220(): BabeInitializedStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'd640aa265bbc697c1d06e978513ab478b54cefe16a2b8b11b22c93e5a17fb0de'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV9420(): BabeInitializedStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV0 {
    get(): Promise<((Uint8Array | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV9220 {
    get(): Promise<((v9220.PreDigest | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV9420 {
    get(): Promise<((v9420.PreDigest | undefined) | undefined)>
}

export class BabeLatenessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Lateness'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get asV0(): BabeLatenessStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface BabeLatenessStorageV0 {
    get(): Promise<number>
}

export class BabeNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Next epoch authorities.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Next epoch authorities.
     */
    get asV28(): BabeNextAuthoritiesStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  Next epoch authorities.
 */
export interface BabeNextAuthoritiesStorageV28 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeNextEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextEpochConfig'
    }

    /**
     *  Next epoch configuration, if changed.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '007656ed996dcee130efb3a698c60ea276980e9b755810b4328f802b3398dbc6'
    }

    /**
     *  Next epoch configuration, if changed.
     */
    get asV0(): BabeNextEpochConfigStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get isV30(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get asV30(): BabeNextEpochConfigStorageV30 {
        assert(this.isV30)
        return this as any
    }
}

/**
 *  Next epoch configuration, if changed.
 */
export interface BabeNextEpochConfigStorageV0 {
    get(): Promise<(v0.NextConfigDescriptor | undefined)>
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface BabeNextEpochConfigStorageV30 {
    get(): Promise<(v30.BabeEpochConfiguration | undefined)>
}

export class BabeNextRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextRandomness'
    }

    /**
     *  Next epoch randomness.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Next epoch randomness.
     */
    get asV0(): BabeNextRandomnessStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Next epoch randomness.
 */
export interface BabeNextRandomnessStorageV0 {
    get(): Promise<Uint8Array>
}

export class BabePendingEpochConfigChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'PendingEpochConfigChange'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '007656ed996dcee130efb3a698c60ea276980e9b755810b4328f802b3398dbc6'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get asV30(): BabePendingEpochConfigChangeStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f5cc4c82ad97d6c0a6152a4f85104de3d2cb7e03288f50c7291e3d6fd9a88b9c'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get asV9110(): BabePendingEpochConfigChangeStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface BabePendingEpochConfigChangeStorageV30 {
    get(): Promise<(v30.NextConfigDescriptor | undefined)>
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface BabePendingEpochConfigChangeStorageV9110 {
    get(): Promise<(v9110.NextConfigDescriptor | undefined)>
}

export class BabeRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Randomness'
    }

    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    get asV0(): BabeRandomnessStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The epoch randomness for the *current* epoch.
 * 
 *  # Security
 * 
 *  This MUST NOT be used for gambling, as it can be influenced by a
 *  malicious validator in the short term. It MAY be used in many
 *  cryptographic protocols, however, so long as one remembers that this
 *  (like everything else on-chain) it is public. For example, it can be
 *  used where a number is needed that cannot have been chosen by an
 *  adversary, for purposes such as public-coin zero-knowledge proofs.
 */
export interface BabeRandomnessStorageV0 {
    get(): Promise<Uint8Array>
}

export class BabeSegmentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SegmentIndex'
    }

    /**
     *  Randomness under construction.
     * 
     *  We make a tradeoff between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Randomness under construction.
     * 
     *  We make a tradeoff between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    get asV0(): BabeSegmentIndexStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Randomness under construction.
 * 
 *  We make a tradeoff between storage accesses and list length.
 *  We store the under-construction randomness in segments of up to
 *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
 * 
 *  Once a segment reaches this length, we begin the next one.
 *  We reset all segments and return to `0` at the beginning of every
 *  epoch.
 */
export interface BabeSegmentIndexStorageV0 {
    get(): Promise<number>
}

export class BabeSkippedEpochsStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SkippedEpochs'
    }

    /**
     *  A list of the last 100 skipped epochs and the corresponding session index
     *  when the epoch was skipped.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof
     *  must contains a key-ownership proof for a given session, therefore we need a
     *  way to tie together sessions and epoch indices, i.e. we need to validate that
     *  a validator was the owner of a given key on a given session, and what the
     *  active epoch index was during that session.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '3df30e4db0015157d5d69bc8676ac0eac9290eba6d0cca73267e7c398c14a688'
    }

    /**
     *  A list of the last 100 skipped epochs and the corresponding session index
     *  when the epoch was skipped.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof
     *  must contains a key-ownership proof for a given session, therefore we need a
     *  way to tie together sessions and epoch indices, i.e. we need to validate that
     *  a validator was the owner of a given key on a given session, and what the
     *  active epoch index was during that session.
     */
    get asV9420(): BabeSkippedEpochsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  A list of the last 100 skipped epochs and the corresponding session index
 *  when the epoch was skipped.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof
 *  must contains a key-ownership proof for a given session, therefore we need a
 *  way to tie together sessions and epoch indices, i.e. we need to validate that
 *  a validator was the owner of a given key on a given session, and what the
 *  active epoch index was during that session.
 */
export interface BabeSkippedEpochsStorageV9420 {
    get(): Promise<[bigint, number][]>
}

export class BabeUnderConstructionStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'UnderConstruction'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get asV0(): BabeUnderConstructionStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface BabeUnderConstructionStorageV0 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class BagsListCounterForListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'CounterForListNodes'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9140(): BagsListCounterForListNodesStorageV9140 {
        assert(this.isV9140)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface BagsListCounterForListNodesStorageV9140 {
    get(): Promise<number>
}

export class BagsListListBagsStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'ListBags'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get asV9140(): BagsListListBagsStorageV9140 {
        assert(this.isV9140)
        return this as any
    }
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface BagsListListBagsStorageV9140 {
    get(key: bigint): Promise<(v9140.Bag | undefined)>
    getAll(): Promise<v9140.Bag[]>
    getMany(keys: bigint[]): Promise<(v9140.Bag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9140.Bag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9140.Bag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9140.Bag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9140.Bag][]>
}

export class BagsListListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'ListNodes'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === 'e07d9d0de844ae72bdfc2a5781243a5d680dcb863542337f28bae8b21536e8d2'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get asV9140(): BagsListListNodesStorageV9140 {
        assert(this.isV9140)
        return this as any
    }
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface BagsListListNodesStorageV9140 {
    get(key: Uint8Array): Promise<(v9140.Node | undefined)>
    getAll(): Promise<v9140.Node[]>
    getMany(keys: Uint8Array[]): Promise<(v9140.Node | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9140.Node][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9140.Node][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9140.Node][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9140.Node][]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get asV0(): BalancesAccountStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV9420(): BalancesAccountStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
 *  is ever zero, then the entry *MUST* be removed.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface BalancesAccountStorageV0 {
    get(key: Uint8Array): Promise<v0.AccountData>
    getAll(): Promise<v0.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v0.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.AccountData][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV9420 {
    get(key: Uint8Array): Promise<v9420.AccountData>
    getAll(): Promise<v9420.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v9420.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.AccountData][]>
}

export class BalancesFreezesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Freezes'
    }

    /**
     *  Freeze locks on account balances.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asV9420(): BalancesFreezesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Freeze locks on account balances.
 */
export interface BalancesFreezesStorageV9420 {
    get(key: Uint8Array): Promise<v9420.IdAmount[]>
    getAll(): Promise<v9420.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<v9420.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.IdAmount[]][]>
}

export class BalancesHoldsStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Holds'
    }

    /**
     *  Holds on account balances.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Holds on account balances.
     */
    get asV9420(): BalancesHoldsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageV9420 {
    get(key: Uint8Array): Promise<v9420.IdAmount[]>
    getAll(): Promise<v9420.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<v9420.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.IdAmount[]][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV9340(): BalancesInactiveIssuanceStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV9340 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV0(): BalancesLocksStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV0 {
    get(key: Uint8Array): Promise<v0.BalanceLock[]>
    getAll(): Promise<v0.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v0.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV9050(): BalancesReservesStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV9050 {
    get(key: Uint8Array): Promise<v9050.ReserveData[]>
    getAll(): Promise<v9050.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v9050.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.ReserveData[]][]>
}

export class BalancesStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV0(): BalancesStorageVersionStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV9110(): BalancesStorageVersionStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV0 {
    get(): Promise<v0.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV9110 {
    get(): Promise<v9110.Type_382>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV0(): BalancesTotalIssuanceStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV0 {
    get(): Promise<bigint>
}

export class BountiesBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV9110(): BountiesBountiesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV9110 {
    get(key: number): Promise<(v9110.Bounty | undefined)>
    getAll(): Promise<v9110.Bounty[]>
    getMany(keys: number[]): Promise<(v9110.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v9110.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.Bounty][]>
}

export class BountiesBountyApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyApprovals'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asV9110(): BountiesBountyApprovalsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountiesBountyApprovalsStorageV9110 {
    get(): Promise<number[]>
}

export class BountiesBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyCount'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asV9110(): BountiesBountyCountStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountiesBountyCountStorageV9110 {
    get(): Promise<number>
}

export class BountiesBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV9110(): BountiesBountyDescriptionsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV9110 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ChildBountiesChildBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBounties'
    }

    /**
     *  Child-bounties that have been added.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child-bounties that have been added.
     */
    get asV9190(): ChildBountiesChildBountiesStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  Child-bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV9190 {
    get(key1: number, key2: number): Promise<(v9190.ChildBounty | undefined)>
    getAll(): Promise<v9190.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v9190.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
}

export class ChildBountiesChildBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBountyCount'
    }

    /**
     *  Number of total child bounties.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of total child bounties.
     */
    get asV9190(): ChildBountiesChildBountyCountStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  Number of total child bounties.
 */
export interface ChildBountiesChildBountyCountStorageV9190 {
    get(): Promise<number>
}

export class ChildBountiesChildBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBountyDescriptions'
    }

    /**
     *  The description of each child-bounty.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV9190(): ChildBountiesChildBountyDescriptionsStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV9190 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ChildBountiesChildrenCuratorFeesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildrenCuratorFees'
    }

    /**
     *  The cumulative child-bounty curator fee for each parent bounty.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The cumulative child-bounty curator fee for each parent bounty.
     */
    get asV9190(): ChildBountiesChildrenCuratorFeesStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  The cumulative child-bounty curator fee for each parent bounty.
 */
export interface ChildBountiesChildrenCuratorFeesStorageV9190 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class ChildBountiesParentChildBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ParentChildBounties'
    }

    /**
     *  Number of child-bounties per parent bounty.
     *  Map of parent bounty index to number of child bounties.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  Number of child-bounties per parent bounty.
     *  Map of parent bounty index to number of child bounties.
     */
    get asV9190(): ChildBountiesParentChildBountiesStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  Number of child-bounties per parent bounty.
 *  Map of parent bounty index to number of child bounties.
 */
export interface ChildBountiesParentChildBountiesStorageV9190 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ClaimsClaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Claims'
    }

    get isV0(): boolean {
        return this.getTypeHash() === 'a4e45b744228821d2d599c2e7bd1993b9bd523df83f8ee660f73e52be555e75c'
    }

    get asV0(): ClaimsClaimsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

export interface ClaimsClaimsStorageV0 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class ClaimsPreclaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Preclaims'
    }

    /**
     *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'aedc9d9adf78c2e711b858d1696263a8b674eb7b149cc3ba7ab036d78ef5720d'
    }

    /**
     *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
     */
    get asV0(): ClaimsPreclaimsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
 */
export interface ClaimsPreclaimsStorageV0 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class ClaimsSigningStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Signing'
    }

    /**
     *  The statement kind that must be signed, if any.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '6f2974b0bc6719581bb9f20af8ac8795a47255266687127e2ee37f8df92bfb51'
    }

    /**
     *  The statement kind that must be signed, if any.
     */
    get asV0(): ClaimsSigningStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The statement kind that must be signed, if any.
 */
export interface ClaimsSigningStorageV0 {
    get(key: Uint8Array): Promise<(v0.StatementKind | undefined)>
    getAll(): Promise<v0.StatementKind[]>
    getMany(keys: Uint8Array[]): Promise<(v0.StatementKind | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.StatementKind][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.StatementKind][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.StatementKind][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.StatementKind][]>
}

export class ClaimsTotalStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Total'
    }

    get isV0(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV0(): ClaimsTotalStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

export interface ClaimsTotalStorageV0 {
    get(): Promise<bigint>
}

export class ClaimsVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Vesting'
    }

    /**
     *  Vesting schedule for a claim.
     *  First balance is the total amount that should be held for vesting.
     *  Second balance is how much should be unlocked per block.
     *  The block number is when the vesting should start.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'fb6e9345088f9784f1d027b11eaa907f04187e59dea733acc7ff1be7dd341d6f'
    }

    /**
     *  Vesting schedule for a claim.
     *  First balance is the total amount that should be held for vesting.
     *  Second balance is how much should be unlocked per block.
     *  The block number is when the vesting should start.
     */
    get asV0(): ClaimsVestingStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Vesting schedule for a claim.
 *  First balance is the total amount that should be held for vesting.
 *  Second balance is how much should be unlocked per block.
 *  The block number is when the vesting should start.
 */
export interface ClaimsVestingStorageV0 {
    get(key: Uint8Array): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, bigint, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, bigint, number]][]>
}

export class ConfigurationActiveConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'ActiveConfig'
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '3b411eb762090842fcb3eb731a73f8155fb7e5c0aab9d12d8afab26e199e7e4b'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9110(): ConfigurationActiveConfigStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '2f8b682bb3ba64c97cf407fce38c85cea560822df61abded7d790568ae6783d5'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9170(): ConfigurationActiveConfigStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'ca162b5f811d7cd7a6777d1aecb2fa039f74633179010c8cf0e0d1630dbce770'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9291(): ConfigurationActiveConfigStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'fe0de4fbd530b95b6c08c4919a8b39228534fb996d2be1fe672434d68b4a8eb1'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9340(): ConfigurationActiveConfigStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'cf652c18f01bf19a2433f416ea01f8cb5359f558fae8b079f28f8569f8cb2350'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9370(): ConfigurationActiveConfigStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'ca24d99f8fea569d11276f4c694f1c66e82ffea6823784cf4985d47aa472b537'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9420(): ConfigurationActiveConfigStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9110 {
    get(): Promise<v9110.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9170 {
    get(): Promise<v9170.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9291 {
    get(): Promise<v9291.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9340 {
    get(): Promise<v9340.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9370 {
    get(): Promise<v9370.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9420 {
    get(): Promise<v9420.HostConfiguration>
}

export class ConfigurationBypassConsistencyCheckStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'BypassConsistencyCheck'
    }

    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    get asV9170(): ConfigurationBypassConsistencyCheckStorageV9170 {
        assert(this.isV9170)
        return this as any
    }
}

/**
 *  If this is set, then the configuration setters will bypass the consistency checks. This
 *  is meant to be used only as the last resort.
 */
export interface ConfigurationBypassConsistencyCheckStorageV9170 {
    get(): Promise<boolean>
}

export class ConfigurationPendingConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'PendingConfig'
    }

    /**
     *  Pending configuration (if any) for the next session.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '260f6403d8b6c797e03fa4606d6d2021dcd15ad353b2cd28c6ed27230e602897'
    }

    /**
     *  Pending configuration (if any) for the next session.
     */
    get asV9110(): ConfigurationPendingConfigStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Pending configuration (if any) for the next session.
 */
export interface ConfigurationPendingConfigStorageV9110 {
    get(key: number): Promise<(v9110.HostConfiguration | undefined)>
    getAll(): Promise<v9110.HostConfiguration[]>
    getMany(keys: number[]): Promise<(v9110.HostConfiguration | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.HostConfiguration][]>
    getPairs(key: number): Promise<[k: number, v: v9110.HostConfiguration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.HostConfiguration][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.HostConfiguration][]>
}

export class ConfigurationPendingConfigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'PendingConfigs'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '64b626b1a713b38b2912ea906474713d0426d98b496a254dedaf0d5664daef62'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9170(): ConfigurationPendingConfigsStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'e66df23f56745228fac9a39b351a614d8d7cd03a234ef02643504298936edf39'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9291(): ConfigurationPendingConfigsStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '91cb7e3a0586dbf96a643a52ea4d45084f65a5fe46383e910f9ee36275d9baea'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9340(): ConfigurationPendingConfigsStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '7e1cf5dcc03b8629ac374a7ef87cf4c04216a6b720c26877b65e525f2bde0fbd'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9370(): ConfigurationPendingConfigsStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '7e133ae8bb548ce7f1c88397dd27ac1808948dafcc866287775db507703d05aa'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9420(): ConfigurationPendingConfigsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9170 {
    get(): Promise<[number, v9170.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9291 {
    get(): Promise<[number, v9291.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9340 {
    get(): Promise<[number, v9340.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9370 {
    get(): Promise<[number, v9370.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9420 {
    get(): Promise<[number, v9420.HostConfiguration][]>
}

export class ConvictionVotingClassLocksForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'ClassLocksFor'
    }

    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '82641f40f081979db4386ae71b3895881f193f9a8e6fe1a5537661ac52af877c'
    }

    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    get asV9420(): ConvictionVotingClassLocksForStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ConvictionVotingClassLocksForStorageV9420 {
    get(key: Uint8Array): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: Uint8Array[]): Promise<[number, bigint][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, bigint][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, bigint][]][]>
}

export class ConvictionVotingVotingForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'VotingFor'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV9420(): ConvictionVotingVotingForStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV9420 {
    get(key1: Uint8Array, key2: number): Promise<v9420.Type_605>
    getAll(): Promise<v9420.Type_605[]>
    getMany(keys: [Uint8Array, number][]): Promise<v9420.Type_605[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v9420.Type_605][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v9420.Type_605][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v9420.Type_605][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v9420.Type_605][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v9420.Type_605][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v9420.Type_605][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV9110(): CouncilMembersStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV9110 {
    get(): Promise<Uint8Array[]>
}

export class CouncilPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV9110(): CouncilPrimeStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageV9110 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV9110(): CouncilProposalCountStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV9110 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '63d24c0129919827fa9023228f4c71d3c81178663e2b642fce64b99d6fe01202'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9110(): CouncilProposalOfStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '46630105cac13d25403727b2ba5a9f33dd1995e1c7551f8890b7d09074b2e29e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9140(): CouncilProposalOfStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === 'cf07c81d23704ed462b6bfe0b42583c05b23158e6683c37e8d868a238aaa2a66'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9170(): CouncilProposalOfStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'f97a19253893953ac9957fd5cc3c6eb738010d8ad3fa671e3874d151c99c6297'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9180(): CouncilProposalOfStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '4f1bb8ab04112d992f0d47816b692572d385241d80cdbd7d5f07a66c65036f3b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9190(): CouncilProposalOfStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '80f4da00d906dc4fa47ad0b8c6e903103f231cec48bf93ba8e721b558299fcca'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9220(): CouncilProposalOfStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === 'bde9173c84a0b1d6a79d0d321515c35c8835437f3a0e65d119dfd09ccb13c6f4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9230(): CouncilProposalOfStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === '233b9c42f7eb18d5b221c2b161cab79e11c0bba8f7294ea8851932e045850319'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9250(): CouncilProposalOfStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9270(): boolean {
        return this.getTypeHash() === 'c0c9e58000365ad91758b5276a20d237aea256d42aefe7f131d12c860b668d40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9270(): CouncilProposalOfStorageV9270 {
        assert(this.isV9270)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '195c89e6d1c50fb433718c42dfef5087efbd5d416889ef321c32e8e954732455'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9280(): CouncilProposalOfStorageV9280 {
        assert(this.isV9280)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'd7245231a8317bd151161b3106e2a07fbef8faf4eb6d45aa2c71141a8a26fc8e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9291(): CouncilProposalOfStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '7772aaf0b057235e40688ad2f55f85b5048f3f210085929b092a1179238d25b8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9300(): CouncilProposalOfStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '4b61f1b33be2d038dd589c570144f30d588c945ca7d7ae9c1ba66c90b60c5fed'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9340(): CouncilProposalOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '1f46def9008095a0a4a528da889616bccb1875d2d3a23d2c41257b56f31829f8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): CouncilProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '056bf35029b7919019e17768fcfa6bc60165809adf78291dfdef1443b1e04ab9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9420(): CouncilProposalOfStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.Call | undefined)>
    getAll(): Promise<v9110.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9140 {
    get(key: Uint8Array): Promise<(v9140.Call | undefined)>
    getAll(): Promise<v9140.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9140.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9140.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9140.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9140.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9140.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.Call | undefined)>
    getAll(): Promise<v9170.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9180 {
    get(key: Uint8Array): Promise<(v9180.Call | undefined)>
    getAll(): Promise<v9180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9190 {
    get(key: Uint8Array): Promise<(v9190.Call | undefined)>
    getAll(): Promise<v9190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9220 {
    get(key: Uint8Array): Promise<(v9220.Call | undefined)>
    getAll(): Promise<v9220.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Call | undefined)>
    getAll(): Promise<v9230.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9250 {
    get(key: Uint8Array): Promise<(v9250.Call | undefined)>
    getAll(): Promise<v9250.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9270 {
    get(key: Uint8Array): Promise<(v9270.Call | undefined)>
    getAll(): Promise<v9270.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9270.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9270.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9270.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9270.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9270.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9280 {
    get(key: Uint8Array): Promise<(v9280.Call | undefined)>
    getAll(): Promise<v9280.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9280.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9280.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9280.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9280.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9280.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9291 {
    get(key: Uint8Array): Promise<(v9291.Call | undefined)>
    getAll(): Promise<v9291.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.Call | undefined)>
    getAll(): Promise<v9300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.Call | undefined)>
    getAll(): Promise<v9340.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9370 {
    get(key: Uint8Array): Promise<(v9370.Call | undefined)>
    getAll(): Promise<v9370.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9370.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9420 {
    get(key: Uint8Array): Promise<(v9420.Call | undefined)>
    getAll(): Promise<v9420.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9420.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
}

export class CouncilProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV9110(): CouncilProposalsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageV9110 {
    get(): Promise<Uint8Array[]>
}

export class CouncilVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV9110(): CouncilVotingStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.Votes | undefined)>
    getAll(): Promise<v9110.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.Votes][]>
}

export class CrowdloanEndingsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'EndingsCount'
    }

    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    get asV9110(): CrowdloanEndingsCountStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The number of auctions that have entered into their ending period so far.
 */
export interface CrowdloanEndingsCountStorageV9110 {
    get(): Promise<number>
}

export class CrowdloanFundsStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'Funds'
    }

    /**
     *  Info on all of the funds.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '12ab1ac19ae156d5acf61b3bdb7d29a147b5793947baca0144497ee7e32553c2'
    }

    /**
     *  Info on all of the funds.
     */
    get asV9110(): CrowdloanFundsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Info on all of the funds.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'e837aa8c7af80bff126d455e0237189b2b62b5bf6586a1f2e67a22edfaf5a596'
    }

    /**
     *  Info on all of the funds.
     */
    get asV9180(): CrowdloanFundsStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  Info on all of the funds.
 */
export interface CrowdloanFundsStorageV9110 {
    get(key: number): Promise<(v9110.FundInfo | undefined)>
    getAll(): Promise<v9110.FundInfo[]>
    getMany(keys: number[]): Promise<(v9110.FundInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.FundInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9110.FundInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.FundInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.FundInfo][]>
}

/**
 *  Info on all of the funds.
 */
export interface CrowdloanFundsStorageV9180 {
    get(key: number): Promise<(v9180.FundInfo | undefined)>
    getAll(): Promise<v9180.FundInfo[]>
    getMany(keys: number[]): Promise<(v9180.FundInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9180.FundInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9180.FundInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9180.FundInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9180.FundInfo][]>
}

export class CrowdloanNewRaiseStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NewRaise'
    }

    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    get asV9110(): CrowdloanNewRaiseStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The funds that have had additional contributions during the last block. This is used
 *  in order to determine which funds should submit new or updated bids.
 */
export interface CrowdloanNewRaiseStorageV9110 {
    get(): Promise<number[]>
}

export class CrowdloanNextFundIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NextFundIndex'
    }

    /**
     *  Tracker for the next available fund index
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Tracker for the next available fund index
     */
    get asV9180(): CrowdloanNextFundIndexStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  Tracker for the next available fund index
 */
export interface CrowdloanNextFundIndexStorageV9180 {
    get(): Promise<number>
}

export class CrowdloanNextTrieIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NextTrieIndex'
    }

    /**
     *  Tracker for the next available trie index
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Tracker for the next available trie index
     */
    get asV9110(): CrowdloanNextTrieIndexStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Tracker for the next available trie index
 */
export interface CrowdloanNextTrieIndexStorageV9110 {
    get(): Promise<number>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asV0(): DemocracyBlacklistStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageV0 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asV0(): DemocracyCancellationsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageV0 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asV0(): DemocracyDepositOfStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageV0 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asV0(): DemocracyLastTabledWasExternalStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageV0 {
    get(): Promise<boolean>
}

export class DemocracyLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV0(): DemocracyLocksStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface DemocracyLocksStorageV0 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asV0(): DemocracyLowestUnbakedStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageV0 {
    get(): Promise<number>
}

export class DemocracyMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'a67a07e9fffcce1c75e0f4b23d9fdf10851d6031a73b67c731af0a1b8e2197e2'
    }

    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asV9420(): DemocracyMetadataOfStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  General information concerning any proposal or referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface DemocracyMetadataOfStorageV9420 {
    get(key: v9420.MetadataOwner): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: v9420.MetadataOwner[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<v9420.MetadataOwner[]>
    getKeys(key: v9420.MetadataOwner): Promise<v9420.MetadataOwner[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9420.MetadataOwner[]>
    getKeysPaged(pageSize: number, key: v9420.MetadataOwner): AsyncIterable<v9420.MetadataOwner[]>
    getPairs(): Promise<[k: v9420.MetadataOwner, v: Uint8Array][]>
    getPairs(key: v9420.MetadataOwner): Promise<[k: v9420.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9420.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: v9420.MetadataOwner): AsyncIterable<[k: v9420.MetadataOwner, v: Uint8Array][]>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV0(): DemocracyNextExternalStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV9340(): DemocracyNextExternalStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV0 {
    get(): Promise<([Uint8Array, v0.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV9340 {
    get(): Promise<([v9340.Bounded, v9340.VoteThreshold] | undefined)>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV0(): DemocracyPreimagesStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV9110(): DemocracyPreimagesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV0 {
    get(key: Uint8Array): Promise<(v0.PreimageStatus | undefined)>
    getAll(): Promise<v0.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v0.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.PreimageStatus | undefined)>
    getAll(): Promise<v9110.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.PreimageStatus][]>
}

export class DemocracyProxyStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Proxy'
    }

    /**
     *  Who is able to vote for whom. Value is the fund-holding account, key is the
     *  vote-transaction-sending account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '7dacebc1dda0c0fa943af0a92ddcef80bfdec3130fe68515a8c3d4e861021b19'
    }

    /**
     *  Who is able to vote for whom. Value is the fund-holding account, key is the
     *  vote-transaction-sending account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV0(): DemocracyProxyStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Who is able to vote for whom. Value is the fund-holding account, key is the
 *  vote-transaction-sending account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface DemocracyProxyStorageV0 {
    get(key: Uint8Array): Promise<(v0.ProxyState | undefined)>
    getAll(): Promise<v0.ProxyState[]>
    getMany(keys: Uint8Array[]): Promise<(v0.ProxyState | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.ProxyState][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.ProxyState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.ProxyState][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.ProxyState][]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV0(): DemocracyPublicPropCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV0 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV0(): DemocracyPublicPropsStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV9340(): DemocracyPublicPropsStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV0 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV9340 {
    get(): Promise<[number, v9340.Bounded, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV0(): DemocracyReferendumCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageV0 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV0(): DemocracyReferendumInfoOfStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9110(): DemocracyReferendumInfoOfStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9340(): DemocracyReferendumInfoOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV0 {
    get(key: number): Promise<(v0.ReferendumInfo | undefined)>
    getAll(): Promise<v0.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v0.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v0.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v0.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v0.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v0.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9110 {
    get(key: number): Promise<(v9110.ReferendumInfo | undefined)>
    getAll(): Promise<v9110.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9110.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9110.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9340 {
    get(key: number): Promise<(v9340.ReferendumInfo | undefined)>
    getAll(): Promise<v9340.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9340.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9340.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9340.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9340.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9340.ReferendumInfo][]>
}

export class DemocracyStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'd0303e1bae0fc34655f81e27ee4b2eb0fb0d3ce283cc0e6cd4de7efaeb1119f2'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV0(): DemocracyStorageVersionStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV9110(): DemocracyStorageVersionStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV0 {
    get(): Promise<(v0.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV9110 {
    get(): Promise<(v9110.Type_442 | undefined)>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '1b8d82fbf262dcaeba801105bb1e0dcfa6b2f7c3b76feb5fa9d27716f50903d2'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV0(): DemocracyVotingOfStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV9110(): DemocracyVotingOfStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV0 {
    get(key: Uint8Array): Promise<v0.Voting>
    getAll(): Promise<v0.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v0.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.Voting][]>
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV9110 {
    get(key: Uint8Array): Promise<v9110.Voting>
    getAll(): Promise<v9110.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v9110.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.Voting][]>
}

export class DmpDeliveryFeeFactorStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DeliveryFeeFactor'
    }

    /**
     *  The number to multiply the base delivery fee by.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The number to multiply the base delivery fee by.
     */
    get asV9420(): DmpDeliveryFeeFactorStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The number to multiply the base delivery fee by.
 */
export interface DmpDeliveryFeeFactorStorageV9420 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class DmpDownwardMessageQueueHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DownwardMessageQueueHeads'
    }

    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    get asV9110(): DmpDownwardMessageQueueHeadsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  A mapping that stores the downward message queue MQC head for each para.
 * 
 *  Each link in this chain has a form:
 *  `(prev_head, B, H(M))`, where
 *  - `prev_head`: is the previous head hash or zero if none.
 *  - `B`: is the relay-chain block number in which a message was appended.
 *  - `H(M)`: is the hash of the message being appended.
 */
export interface DmpDownwardMessageQueueHeadsStorageV9110 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class DmpDownwardMessageQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DownwardMessageQueues'
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'e425c5091a0f36e0ae5ace2a5590775033870437355c96c2667307bf868e3248'
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get asV9110(): DmpDownwardMessageQueuesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DmpDownwardMessageQueuesStorageV9110 {
    get(key: number): Promise<v9110.InboundDownwardMessage[]>
    getAll(): Promise<v9110.InboundDownwardMessage[][]>
    getMany(keys: number[]): Promise<v9110.InboundDownwardMessage[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.InboundDownwardMessage[]][]>
    getPairs(key: number): Promise<[k: number, v: v9110.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.InboundDownwardMessage[]][]>
}

export class ElectionProviderMultiPhaseCurrentPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'CurrentPhase'
    }

    /**
     *  Current phase.
     */
    get isV29(): boolean {
        return this.getTypeHash() === 'd43c46e1fdaabf223f7ddc55f3636b227c163ebca9bccdb6f6aca606816cba64'
    }

    /**
     *  Current phase.
     */
    get asV29(): ElectionProviderMultiPhaseCurrentPhaseStorageV29 {
        assert(this.isV29)
        return this as any
    }
}

/**
 *  Current phase.
 */
export interface ElectionProviderMultiPhaseCurrentPhaseStorageV29 {
    get(): Promise<v29.ElectionPhase>
}

export class ElectionProviderMultiPhaseDesiredTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'DesiredTargets'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV29(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV29(): ElectionProviderMultiPhaseDesiredTargetsStorageV29 {
        assert(this.isV29)
        return this as any
    }
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseDesiredTargetsStorageV29 {
    get(): Promise<(number | undefined)>
}

export class ElectionProviderMultiPhaseMinimumUntrustedScoreStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'MinimumUntrustedScore'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'fc5a4796e3467f3450c1f03819f4fe9e47a6e584803699b23c3072af283f03fa'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get asV9050(): ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '54808e3ff7550c21d1fb18cb6c67f1e6942e127345058749baa91d8c1651bd60'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get asV9180(): ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV9050 {
    get(): Promise<(bigint[] | undefined)>
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV9180 {
    get(): Promise<(v9180.ElectionScore | undefined)>
}

export class ElectionProviderMultiPhaseQueuedSolutionStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'QueuedSolution'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get isV29(): boolean {
        return this.getTypeHash() === '6191b733a7e979b485b303212b77f08705ed46238cccf8c2cb5b35969c170456'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV29(): ElectionProviderMultiPhaseQueuedSolutionStorageV29 {
        assert(this.isV29)
        return this as any
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '5e071efa6b1ccd8ce3910346a833fa82ee925fd24f0d5aaef4d236d7e949c210'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV9110(): ElectionProviderMultiPhaseQueuedSolutionStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'cf8250c7935545f78c3fca062506caaa5d94dab6e6950381bca2b336b9f8876e'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV9180(): ElectionProviderMultiPhaseQueuedSolutionStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV29 {
    get(): Promise<(v29.ReadySolution | undefined)>
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV9110 {
    get(): Promise<(v9110.ReadySolution | undefined)>
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV9180 {
    get(): Promise<(v9180.ReadySolution | undefined)>
}

export class ElectionProviderMultiPhaseRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Round'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get isV29(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get asV29(): ElectionProviderMultiPhaseRoundStorageV29 {
        assert(this.isV29)
        return this as any
    }
}

/**
 *  Internal counter for the number of rounds.
 * 
 *  This is useful for de-duplication of transactions submitted to the pool, and general
 *  diagnostics of the pallet.
 * 
 *  This is merely incremented once per every time that an upstream `elect` is called.
 */
export interface ElectionProviderMultiPhaseRoundStorageV29 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionIndices'
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '299aaf991151d8c21e928a476d85e16f7f46492399aeddc4115950dbe539017a'
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV9080(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '3f17ed71261965bef8416121d1476aed24762a50bcf247a57343826d7a119a46'
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV9180(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'aecbdca3369396b8f7ae7da45a210e0b48c62258a15e0f7c1a7cb29c941f666c'
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV9340(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
 *  `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9080 {
    get(): Promise<[bigint[], number][]>
}

/**
 *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
 *  `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9180 {
    get(): Promise<[v9180.ElectionScore, number][]>
}

/**
 *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
 *  value in `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9340 {
    get(): Promise<[v9340.ElectionScore, number, number][]>
}

export class ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionNextIndex'
    }

    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    get asV9080(): ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV9080 {
        assert(this.isV9080)
        return this as any
    }
}

/**
 *  The next index to be assigned to an incoming signed submission.
 * 
 *  Every accepted submission is assigned a unique index; that index is bound to that particular
 *  submission for the duration of the election. On election finalization, the next index is
 *  reset to 0.
 * 
 *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
 *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
 *  because iteration is slow. Instead, we store the value here.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV9080 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionsMapStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionsMap'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === 'd317d62d8ccf67ae0300ae5053b35ca1ec145d7a990a9b6c47a70becf3b6ab1e'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9080(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '4833a055ded7a79acb4aad4f47e85dfcc765ae329087f1a60e0848ab605fe674'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9110(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '8ee5f91240c2e533bf8780d37f0961f05ee450d788b38d566a9a0e4b9aedc904'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9170(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '9418f0edbc78bc2e2e10fd5d80112e078dd9d85763bfd5261fa13a86dda5ab94'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9180(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '0bdd7939a257877febf5ab7215f0cc9cfa33db8610c6c8a3d48cb0f3cb8c7219'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9220(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9080 {
    get(key: number): Promise<v9080.SignedSubmissionOf>
    getAll(): Promise<v9080.SignedSubmissionOf[]>
    getMany(keys: number[]): Promise<v9080.SignedSubmissionOf[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9080.SignedSubmissionOf][]>
    getPairs(key: number): Promise<[k: number, v: v9080.SignedSubmissionOf][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9080.SignedSubmissionOf][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9080.SignedSubmissionOf][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9110 {
    get(key: number): Promise<v9110.SignedSubmission>
    getAll(): Promise<v9110.SignedSubmission[]>
    getMany(keys: number[]): Promise<v9110.SignedSubmission[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v9110.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.SignedSubmission][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9170 {
    get(key: number): Promise<(v9170.SignedSubmission | undefined)>
    getAll(): Promise<v9170.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v9170.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9170.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v9170.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9170.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9170.SignedSubmission][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9180 {
    get(key: number): Promise<(v9180.SignedSubmission | undefined)>
    getAll(): Promise<v9180.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v9180.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9180.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v9180.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9180.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9180.SignedSubmission][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9220 {
    get(key: number): Promise<(v9220.SignedSubmission | undefined)>
    getAll(): Promise<v9220.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v9220.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9220.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v9220.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9220.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9220.SignedSubmission][]>
}

export class ElectionProviderMultiPhaseSnapshotStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Snapshot'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get isV29(): boolean {
        return this.getTypeHash() === '0a57d7483519dd2d24b03dc8b9cb8e5dd9fde6a07e5c2d586f430184184c3b75'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get asV29(): ElectionProviderMultiPhaseSnapshotStorageV29 {
        assert(this.isV29)
        return this as any
    }
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface ElectionProviderMultiPhaseSnapshotStorageV29 {
    get(): Promise<(v29.RoundSnapshot | undefined)>
}

export class ElectionProviderMultiPhaseSnapshotMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SnapshotMetadata'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV29(): boolean {
        return this.getTypeHash() === '4bc67c3d694c467e93d2d551db48f7b2d0497a44b4acaecfdc842a49ce699da7'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV29(): ElectionProviderMultiPhaseSnapshotMetadataStorageV29 {
        assert(this.isV29)
        return this as any
    }
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseSnapshotMetadataStorageV29 {
    get(): Promise<(v29.SolutionOrSnapshotSize | undefined)>
}

export class FastUnstakeCounterForQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'CounterForQueue'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9300(): FastUnstakeCounterForQueueStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface FastUnstakeCounterForQueueStorageV9300 {
    get(): Promise<number>
}

export class FastUnstakeErasToCheckPerBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'ErasToCheckPerBlock'
    }

    /**
     *  Number of eras to check per block.
     * 
     *  If set to 0, this pallet does absolutely nothing.
     * 
     *  Based on the amount of weight available at `on_idle`, up to this many eras of a single
     *  nominator might be checked.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of eras to check per block.
     * 
     *  If set to 0, this pallet does absolutely nothing.
     * 
     *  Based on the amount of weight available at `on_idle`, up to this many eras of a single
     *  nominator might be checked.
     */
    get asV9300(): FastUnstakeErasToCheckPerBlockStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  Number of eras to check per block.
 * 
 *  If set to 0, this pallet does absolutely nothing.
 * 
 *  Based on the amount of weight available at `on_idle`, up to this many eras of a single
 *  nominator might be checked.
 */
export interface FastUnstakeErasToCheckPerBlockStorageV9300 {
    get(): Promise<number>
}

export class FastUnstakeHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'Head'
    }

    /**
     *  The current "head of the queue" being unstaked.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '9e110b529129d2bf445e71d5f73e7f43fc91ac729a4db9536cfc0fb67d92e6cf'
    }

    /**
     *  The current "head of the queue" being unstaked.
     */
    get asV9300(): FastUnstakeHeadStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  The current "head of the queue" being unstaked.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '53adfbb7f77e458b9628e98623c2b4f4eb2804878ca690d531d2e10861e2f759'
    }

    /**
     *  The current "head of the queue" being unstaked.
     */
    get asV9340(): FastUnstakeHeadStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The current "head of the queue" being unstaked.
 */
export interface FastUnstakeHeadStorageV9300 {
    get(): Promise<(v9300.UnstakeRequest | undefined)>
}

/**
 *  The current "head of the queue" being unstaked.
 */
export interface FastUnstakeHeadStorageV9340 {
    get(): Promise<(v9340.UnstakeRequest | undefined)>
}

export class FastUnstakeQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'Queue'
    }

    /**
     *  The map of all accounts wishing to be unstaked.
     * 
     *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    /**
     *  The map of all accounts wishing to be unstaked.
     * 
     *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
     */
    get asV9300(): FastUnstakeQueueStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  The map of all accounts wishing to be unstaked.
 * 
 *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
 */
export interface FastUnstakeQueueStorageV9300 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class FinalityTrackerInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'Initialized'
    }

    get isV0(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    get asV0(): FinalityTrackerInitializedStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

export interface FinalityTrackerInitializedStorageV0 {
    get(): Promise<boolean>
}

export class FinalityTrackerMedianStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'Median'
    }

    /**
     *  The median.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The median.
     */
    get asV0(): FinalityTrackerMedianStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The median.
 */
export interface FinalityTrackerMedianStorageV0 {
    get(): Promise<number>
}

export class FinalityTrackerOrderedHintsStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'OrderedHints'
    }

    /**
     *  Ordered recent hints.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Ordered recent hints.
     */
    get asV0(): FinalityTrackerOrderedHintsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Ordered recent hints.
 */
export interface FinalityTrackerOrderedHintsStorageV0 {
    get(): Promise<number[]>
}

export class FinalityTrackerRecentHintsStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'RecentHints'
    }

    /**
     *  Recent hints.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Recent hints.
     */
    get asV0(): FinalityTrackerRecentHintsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Recent hints.
 */
export interface FinalityTrackerRecentHintsStorageV0 {
    get(): Promise<number[]>
}

export class FinalityTrackerUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'Update'
    }

    /**
     *  Final hint to apply in the block. `None` means "same as parent".
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Final hint to apply in the block. `None` means "same as parent".
     */
    get asV0(): FinalityTrackerUpdateStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Final hint to apply in the block. `None` means "same as parent".
 */
export interface FinalityTrackerUpdateStorageV0 {
    get(): Promise<(number | undefined)>
}

export class GrandpaCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV9050(): GrandpaCurrentSetIdStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaCurrentSetIdStorageV9050 {
    get(): Promise<bigint>
}

export class GrandpaNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV9050(): GrandpaNextForcedStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaNextForcedStorageV9050 {
    get(): Promise<(number | undefined)>
}

export class GrandpaPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '13755304b861af7343de28e9c0f8c93252785a6950a8ef864736ceb88092a3c7'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV9050(): GrandpaPendingChangeStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV9110(): GrandpaPendingChangeStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV9050 {
    get(): Promise<(v9050.StoredPendingChange | undefined)>
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV9110 {
    get(): Promise<(v9110.StoredPendingChange | undefined)>
}

export class GrandpaSetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV9050(): GrandpaSetIdSessionStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaSetIdSessionStorageV9050 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class GrandpaStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV9050(): GrandpaStalledStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaStalledStorageV9050 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaStateStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'd29e1b762b13b4994e98ec10b0ecf04d5e9132829fb105fd6b9bc2a98b77ee17'
    }

    /**
     *  State of the current authority set.
     */
    get asV9050(): GrandpaStateStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  State of the current authority set.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
    }

    /**
     *  State of the current authority set.
     */
    get asV9110(): GrandpaStateStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV9050 {
    get(): Promise<v9050.StoredState>
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV9110 {
    get(): Promise<v9110.StoredState>
}

export class GrandpaFinalityCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV0(): GrandpaFinalityCurrentSetIdStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaFinalityCurrentSetIdStorageV0 {
    get(): Promise<bigint>
}

export class GrandpaFinalityNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV0(): GrandpaFinalityNextForcedStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaFinalityNextForcedStorageV0 {
    get(): Promise<(number | undefined)>
}

export class GrandpaFinalityPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV0(): boolean {
        return this.getTypeHash() === '13755304b861af7343de28e9c0f8c93252785a6950a8ef864736ceb88092a3c7'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV0(): GrandpaFinalityPendingChangeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaFinalityPendingChangeStorageV0 {
    get(): Promise<(v0.StoredPendingChange | undefined)>
}

export class GrandpaFinalitySetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV0(): GrandpaFinalitySetIdSessionStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaFinalitySetIdSessionStorageV0 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class GrandpaFinalityStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV0(): GrandpaFinalityStalledStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaFinalityStalledStorageV0 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaFinalityStateStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'd29e1b762b13b4994e98ec10b0ecf04d5e9132829fb105fd6b9bc2a98b77ee17'
    }

    /**
     *  State of the current authority set.
     */
    get asV0(): GrandpaFinalityStateStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaFinalityStateStorageV0 {
    get(): Promise<v0.StoredState>
}

export class HrmpHrmpAcceptedChannelRequestCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpAcceptedChannelRequestCount'
    }

    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    get asV9110(): HrmpHrmpAcceptedChannelRequestCountStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  This mapping tracks how many open channel requests were accepted by a given recipient para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
 *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
 */
export interface HrmpHrmpAcceptedChannelRequestCountStorageV9110 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class HrmpHrmpChannelContentsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannelContents'
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '6cd143ae2730de334efd938bdf6af5805612dab0823423596dcf6bbbeddccfb3'
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get asV9110(): HrmpHrmpChannelContentsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpHrmpChannelContentsStorageV9110 {
    get(key: v9110.HrmpChannelId): Promise<v9110.InboundHrmpMessage[]>
    getAll(): Promise<v9110.InboundHrmpMessage[][]>
    getMany(keys: v9110.HrmpChannelId[]): Promise<v9110.InboundHrmpMessage[][]>
    getKeys(): Promise<v9110.HrmpChannelId[]>
    getKeys(key: v9110.HrmpChannelId): Promise<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9110.HrmpChannelId): AsyncIterable<v9110.HrmpChannelId[]>
    getPairs(): Promise<[k: v9110.HrmpChannelId, v: v9110.InboundHrmpMessage[]][]>
    getPairs(key: v9110.HrmpChannelId): Promise<[k: v9110.HrmpChannelId, v: v9110.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9110.HrmpChannelId, v: v9110.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number, key: v9110.HrmpChannelId): AsyncIterable<[k: v9110.HrmpChannelId, v: v9110.InboundHrmpMessage[]][]>
}

export class HrmpHrmpChannelDigestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannelDigests'
    }

    /**
     *  Maintains a mapping that can be used to answer the question:
     *  What paras sent a message at the given block number for a given receiver.
     *  Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the same
     *    block number.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8b00bb4a27873ea090234c4f7aeea8dbf9ae2628a4945d4910f497ed81c5e21f'
    }

    /**
     *  Maintains a mapping that can be used to answer the question:
     *  What paras sent a message at the given block number for a given receiver.
     *  Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the same
     *    block number.
     */
    get asV9110(): HrmpHrmpChannelDigestsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Maintains a mapping that can be used to answer the question:
 *  What paras sent a message at the given block number for a given receiver.
 *  Invariants:
 *  - The inner `Vec<ParaId>` is never empty.
 *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
 *  - The outer vector is sorted ascending by block number and cannot store two items with the same
 *    block number.
 */
export interface HrmpHrmpChannelDigestsStorageV9110 {
    get(key: number): Promise<[number, number[]][]>
    getAll(): Promise<[number, number[]][][]>
    getMany(keys: number[]): Promise<[number, number[]][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number[]][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number[]][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number[]][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number[]][]][]>
}

export class HrmpHrmpChannelsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannels'
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'd5f877f4add6df244ed0d4f20e980d9cbb8f6ecb91c8f56abca84b72441b6447'
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get asV9110(): HrmpHrmpChannelsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpHrmpChannelsStorageV9110 {
    get(key: v9110.HrmpChannelId): Promise<(v9110.HrmpChannel | undefined)>
    getAll(): Promise<v9110.HrmpChannel[]>
    getMany(keys: v9110.HrmpChannelId[]): Promise<(v9110.HrmpChannel | undefined)[]>
    getKeys(): Promise<v9110.HrmpChannelId[]>
    getKeys(key: v9110.HrmpChannelId): Promise<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9110.HrmpChannelId): AsyncIterable<v9110.HrmpChannelId[]>
    getPairs(): Promise<[k: v9110.HrmpChannelId, v: v9110.HrmpChannel][]>
    getPairs(key: v9110.HrmpChannelId): Promise<[k: v9110.HrmpChannelId, v: v9110.HrmpChannel][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9110.HrmpChannelId, v: v9110.HrmpChannel][]>
    getPairsPaged(pageSize: number, key: v9110.HrmpChannelId): AsyncIterable<[k: v9110.HrmpChannelId, v: v9110.HrmpChannel][]>
}

export class HrmpHrmpCloseChannelRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpCloseChannelRequests'
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session change.
     *  Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '7755b93c00c932e936c6bfaff914a35cc38f873e39a57ea414c8be676db098d8'
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session change.
     *  Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV9110(): HrmpHrmpCloseChannelRequestsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  A set of pending HRMP close channel requests that are going to be closed during the session change.
 *  Used for checking if a given channel is registered for closure.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpCloseChannelRequestsStorageV9110 {
    get(key: v9110.HrmpChannelId): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: v9110.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(): Promise<v9110.HrmpChannelId[]>
    getKeys(key: v9110.HrmpChannelId): Promise<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9110.HrmpChannelId): AsyncIterable<v9110.HrmpChannelId[]>
    getPairs(): Promise<[k: v9110.HrmpChannelId, v: null][]>
    getPairs(key: v9110.HrmpChannelId): Promise<[k: v9110.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9110.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number, key: v9110.HrmpChannelId): AsyncIterable<[k: v9110.HrmpChannelId, v: null][]>
}

export class HrmpHrmpCloseChannelRequestsListStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpCloseChannelRequestsList'
    }

    get isV9110(): boolean {
        return this.getTypeHash() === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
    }

    get asV9110(): HrmpHrmpCloseChannelRequestsListStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

export interface HrmpHrmpCloseChannelRequestsListStorageV9110 {
    get(): Promise<v9110.HrmpChannelId[]>
}

export class HrmpHrmpEgressChannelsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpEgressChannelsIndex'
    }

    get isV9110(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    get asV9110(): HrmpHrmpEgressChannelsIndexStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

export interface HrmpHrmpEgressChannelsIndexStorageV9110 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class HrmpHrmpIngressChannelsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpIngressChannelsIndex'
    }

    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite
     *  side. I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels`
     *    as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels`
     *    as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite
     *  side. I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels`
     *    as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels`
     *    as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    get asV9110(): HrmpHrmpIngressChannelsIndexStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Ingress/egress indexes allow to find all the senders and receivers given the opposite
 *  side. I.e.
 * 
 *  (a) ingress index allows to find all the senders for a given recipient.
 *  (b) egress index allows to find all the recipients for a given sender.
 * 
 *  Invariants:
 *  - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels`
 *    as `(I, P)`.
 *  - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels`
 *    as `(P, E)`.
 *  - there should be no other dangling channels in `HrmpChannels`.
 *  - the vectors are sorted.
 */
export interface HrmpHrmpIngressChannelsIndexStorageV9110 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class HrmpHrmpOpenChannelRequestCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequestCount'
    }

    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
     *  as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
     *  as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    get asV9110(): HrmpHrmpOpenChannelRequestCountStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  This mapping tracks how many open channel requests are initiated by a given sender para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
 *  as the number of `HrmpOpenChannelRequestCount` for `X`.
 */
export interface HrmpHrmpOpenChannelRequestCountStorageV9110 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class HrmpHrmpOpenChannelRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequests'
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '14e894f64f4951bc0cda7e287037e971a9cfbd68c302fa59695038b358ef76b9'
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV9110(): HrmpHrmpOpenChannelRequestsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpOpenChannelRequestsStorageV9110 {
    get(key: v9110.HrmpChannelId): Promise<(v9110.HrmpOpenChannelRequest | undefined)>
    getAll(): Promise<v9110.HrmpOpenChannelRequest[]>
    getMany(keys: v9110.HrmpChannelId[]): Promise<(v9110.HrmpOpenChannelRequest | undefined)[]>
    getKeys(): Promise<v9110.HrmpChannelId[]>
    getKeys(key: v9110.HrmpChannelId): Promise<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9110.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9110.HrmpChannelId): AsyncIterable<v9110.HrmpChannelId[]>
    getPairs(): Promise<[k: v9110.HrmpChannelId, v: v9110.HrmpOpenChannelRequest][]>
    getPairs(key: v9110.HrmpChannelId): Promise<[k: v9110.HrmpChannelId, v: v9110.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9110.HrmpChannelId, v: v9110.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number, key: v9110.HrmpChannelId): AsyncIterable<[k: v9110.HrmpChannelId, v: v9110.HrmpOpenChannelRequest][]>
}

export class HrmpHrmpOpenChannelRequestsListStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequestsList'
    }

    get isV9110(): boolean {
        return this.getTypeHash() === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
    }

    get asV9110(): HrmpHrmpOpenChannelRequestsListStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

export interface HrmpHrmpOpenChannelRequestsListStorageV9110 {
    get(): Promise<v9110.HrmpChannelId[]>
}

export class HrmpHrmpWatermarksStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpWatermarks'
    }

    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get asV9110(): HrmpHrmpWatermarksStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The HRMP watermark associated with each para.
 *  Invariant:
 *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpHrmpWatermarksStorageV9110 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV5(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV5(): IdentityIdentityOfStorageV5 {
        assert(this.isV5)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV5 {
    get(key: Uint8Array): Promise<(v5.Registration | undefined)>
    getAll(): Promise<v5.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v5.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v5.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v5.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v5.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v5.Registration][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV5(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV5(): IdentityRegistrarsStorageV5 {
        assert(this.isV5)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV5 {
    get(): Promise<(v5.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV5(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV5(): IdentitySubsOfStorageV5 {
        assert(this.isV5)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageV5 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV5(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV5(): IdentitySuperOfStorageV5 {
        assert(this.isV5)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV5 {
    get(key: Uint8Array): Promise<([Uint8Array, v5.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v5.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v5.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, v5.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, v5.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v5.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v5.Data]][]>
}

export class ImOnlineAuthoredBlocksStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'AuthoredBlocks'
    }

    /**
     *  For each session index, we keep a mapping of `T::ValidatorId` to the
     *  number of blocks authored by the given authority.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  For each session index, we keep a mapping of `T::ValidatorId` to the
     *  number of blocks authored by the given authority.
     */
    get asV0(): ImOnlineAuthoredBlocksStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `T::ValidatorId` to the
 *  number of blocks authored by the given authority.
 */
export interface ImOnlineAuthoredBlocksStorageV0 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ImOnlineHeartbeatAfterStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'HeartbeatAfter'
    }

    /**
     *  The block number after which it's ok to send heartbeats in current session.
     * 
     *  At the beginning of each session we set this to a value that should
     *  fall roughly in the middle of the session duration.
     *  The idea is to first wait for the validators to produce a block
     *  in the current session, so that the heartbeat later on will not be necessary.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number after which it's ok to send heartbeats in current session.
     * 
     *  At the beginning of each session we set this to a value that should
     *  fall roughly in the middle of the session duration.
     *  The idea is to first wait for the validators to produce a block
     *  in the current session, so that the heartbeat later on will not be necessary.
     */
    get asV0(): ImOnlineHeartbeatAfterStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The block number after which it's ok to send heartbeats in current session.
 * 
 *  At the beginning of each session we set this to a value that should
 *  fall roughly in the middle of the session duration.
 *  The idea is to first wait for the validators to produce a block
 *  in the current session, so that the heartbeat later on will not be necessary.
 */
export interface ImOnlineHeartbeatAfterStorageV0 {
    get(): Promise<number>
}

export class ImOnlineKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'Keys'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get asV0(): ImOnlineKeysStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface ImOnlineKeysStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class ImOnlineReceivedHeartbeatsStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'ReceivedHeartbeats'
    }

    /**
     *  For each session index, we keep a mapping of `AuthIndex` to
     *  `offchain::OpaqueNetworkState`.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '682157dad304389ac6525dcc32f225e326c71b23b36940fe6c6b0ba3c53ac61f'
    }

    /**
     *  For each session index, we keep a mapping of `AuthIndex` to
     *  `offchain::OpaqueNetworkState`.
     */
    get asV0(): ImOnlineReceivedHeartbeatsStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '1e6ba35502038271a716c3edc7af482c7f3b2c3797e0bd5bc206c2fe43459e4e'
    }

    /**
     *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get asV9110(): ImOnlineReceivedHeartbeatsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `AuthIndex` to
 *  `offchain::OpaqueNetworkState`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV0 {
    get(key1: number, key2: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

/**
 *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV9110 {
    get(key1: number, key2: number): Promise<([number, v9110.BoundedOpaqueNetworkState] | undefined)>
    getAll(): Promise<[number, v9110.BoundedOpaqueNetworkState][]>
    getMany(keys: [number, number][]): Promise<([number, v9110.BoundedOpaqueNetworkState] | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: [number, v9110.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number): Promise<[k: [number, number], v: [number, v9110.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: [number, v9110.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: [number, v9110.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: [number, v9110.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: [number, v9110.BoundedOpaqueNetworkState]][]>
}

export class IndicesAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Indices'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  The lookup from index to account.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '42d7ee809a9642338b77286d1f68a99e10272a83d9d5fa33c2b7f159255a39f8'
    }

    /**
     *  The lookup from index to account.
     */
    get asV0(): IndicesAccountsStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The lookup from index to account.
     */
    get isV7(): boolean {
        return this.getTypeHash() === 'c6d4b452610ac51f7c9427bf2d9910242bb414a02409a484caf47fa24e50516e'
    }

    /**
     *  The lookup from index to account.
     */
    get asV7(): IndicesAccountsStorageV7 {
        assert(this.isV7)
        return this as any
    }
}

/**
 *  The lookup from index to account.
 */
export interface IndicesAccountsStorageV0 {
    get(key: number): Promise<([Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array, bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array, bigint]][]>
}

/**
 *  The lookup from index to account.
 */
export interface IndicesAccountsStorageV7 {
    get(key: number): Promise<([Uint8Array, bigint, boolean] | undefined)>
    getAll(): Promise<[Uint8Array, bigint, boolean][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint, boolean] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array, bigint, boolean]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array, bigint, boolean]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array, bigint, boolean]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array, bigint, boolean]][]>
}

export class InitializerBufferedSessionChangesStorage extends StorageBase {
    protected getPrefix() {
        return 'Initializer'
    }

    protected getName() {
        return 'BufferedSessionChanges'
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8ca8921e3e82455d025ef60ac4a362641034332241c6a69a4183e6e8f6e58800'
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get asV9110(): InitializerBufferedSessionChangesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Buffered session changes along with the block number at which they should be applied.
 * 
 *  Typically this will be empty or one element long. Apart from that this item never hits
 *  the storage.
 * 
 *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
 *  upgrade boundaries or if governance intervenes.
 */
export interface InitializerBufferedSessionChangesStorageV9110 {
    get(): Promise<v9110.BufferedSessionChange[]>
}

export class InitializerHasInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Initializer'
    }

    protected getName() {
        return 'HasInitialized'
    }

    /**
     *  Whether the parachains modules have been initialized within this block.
     * 
     *  Semantically a `bool`, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     * 
     *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
     *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
     *  the semantics of this variable.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Whether the parachains modules have been initialized within this block.
     * 
     *  Semantically a `bool`, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     * 
     *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
     *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
     *  the semantics of this variable.
     */
    get asV9110(): InitializerHasInitializedStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Whether the parachains modules have been initialized within this block.
 * 
 *  Semantically a `bool`, but this guarantees it should never hit the trie,
 *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
 * 
 *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
 *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
 *  the semantics of this variable.
 */
export interface InitializerHasInitializedStorageV9110 {
    get(): Promise<(null | undefined)>
}

export class Instance1CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV0(): Instance1CollectiveMembersStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The member who provides the default vote for any other members that do not vote before
     *  the timeout. If None, then no member has that privilege.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The member who provides the default vote for any other members that do not vote before
     *  the timeout. If None, then no member has that privilege.
     */
    get asV0(): Instance1CollectivePrimeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The member who provides the default vote for any other members that do not vote before
 *  the timeout. If None, then no member has that privilege.
 */
export interface Instance1CollectivePrimeStorageV0 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance1CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV0(): Instance1CollectiveProposalCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV0 {
    get(): Promise<number>
}

export class Instance1CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a7e8e7fd721404079896defed98de95dfb6868d00799b993b35f08db669a1763'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV0(): Instance1CollectiveProposalOfStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV5(): boolean {
        return this.getTypeHash() === 'a0c1ea1dbfa3390f6dd3c60a349f81ad4aaae0a4bf1404cc959919a2e7761660'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV5(): Instance1CollectiveProposalOfStorageV5 {
        assert(this.isV5)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'a245b6b6c40849f61292d59e8554f90164fb7b773053848e3086f66a4029454f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV6(): Instance1CollectiveProposalOfStorageV6 {
        assert(this.isV6)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV7(): boolean {
        return this.getTypeHash() === 'f786e78e1015659e9dee4dad5e1fb19677f9f5305acad2a9d7b198f3088d4455'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV7(): Instance1CollectiveProposalOfStorageV7 {
        assert(this.isV7)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '7b67dcb1f6fbccf8c54ad1723dbbdb798584082a852e5ff89c304236da5411c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9(): Instance1CollectiveProposalOfStorageV9 {
        assert(this.isV9)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10(): boolean {
        return this.getTypeHash() === '94d6c9dd5b81d712dbf6b4494875cf3ced8fc83f0bda0388d5a861265c5829e3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10(): Instance1CollectiveProposalOfStorageV10 {
        assert(this.isV10)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV11(): boolean {
        return this.getTypeHash() === '55ab65ec2cca9ffb4d7c056e8b1bc98667f20e007ab85cdf8443396b13de6c00'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV11(): Instance1CollectiveProposalOfStorageV11 {
        assert(this.isV11)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV13(): boolean {
        return this.getTypeHash() === 'ff27bdc60caa16879c21476834a1f6a50625591eaa77c919d9130059c139a049'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV13(): Instance1CollectiveProposalOfStorageV13 {
        assert(this.isV13)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV14(): boolean {
        return this.getTypeHash() === 'ae91e97dac7d5f661d3787859827199246375f2431490218bf06c96a5c477096'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV14(): Instance1CollectiveProposalOfStorageV14 {
        assert(this.isV14)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'fd4971e102fd82e8b77a1a6f0a5112b2e481a2ceecfa746afb7e03b918460548'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV15(): Instance1CollectiveProposalOfStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV17(): boolean {
        return this.getTypeHash() === 'c5bf1dcf686313b591217ebac224232c96e7f2edb893237d87d88f8a3d1bd8af'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV17(): Instance1CollectiveProposalOfStorageV17 {
        assert(this.isV17)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV18(): boolean {
        return this.getTypeHash() === 'ba1a6279e1478b9a04b898b9c0a846ef880db1c82972d92165054b0a89dca5b8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV18(): Instance1CollectiveProposalOfStorageV18 {
        assert(this.isV18)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV23(): boolean {
        return this.getTypeHash() === '4004a907972506e2d691a3cb7602ce8225c2592f0d12d003e87aef73f2423bcf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV23(): Instance1CollectiveProposalOfStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV24(): boolean {
        return this.getTypeHash() === '356166904edac4b3b7c786db196f1923e6c1aedae3fb21ba39c5edddf8e1ee1e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV24(): Instance1CollectiveProposalOfStorageV24 {
        assert(this.isV24)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'b3827730e0dc87803e2af5f5d1b37fe0fe13359251b675a35512af2d8ec218e8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): Instance1CollectiveProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV26(): boolean {
        return this.getTypeHash() === '99e4e58fdbb6961eee62ec42a116b9fada54ca56f6e56c42482522d916abc36c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV26(): Instance1CollectiveProposalOfStorageV26 {
        assert(this.isV26)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '68ddc084d5d45829d62ee6b366697e5316924dda852b32f9fd9f7c2d312fbe2d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV28(): Instance1CollectiveProposalOfStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV29(): boolean {
        return this.getTypeHash() === 'b2d388d5324f66c413bb92afa7d977c39607b23fcc54187660a1f748689dc65d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV29(): Instance1CollectiveProposalOfStorageV29 {
        assert(this.isV29)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV30(): boolean {
        return this.getTypeHash() === 'f2310aeea24a2defe101b6133b4047506f4f78f657c3730715d1be768af473c1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV30(): Instance1CollectiveProposalOfStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '917fa2fa061281691040a6b91cde0e1df01369342212c5c905da90dc97ef5ec8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9050(): Instance1CollectiveProposalOfStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '82b356c3398fd07ca4931f52f10a08ab9c323a7308181f6738f66e1c201fda71'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9080(): Instance1CollectiveProposalOfStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '25d60cb68d41bcc7ef930da62e43767ae9f61ed6e7f542bb8899b233f2b670d1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9090(): Instance1CollectiveProposalOfStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '2a6a093e75452f19683c23f92d39fb65d1385a5cbd87f80d385736035e5daa07'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9100(): Instance1CollectiveProposalOfStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV0 {
    get(key: Uint8Array): Promise<(v0.Proposal | undefined)>
    getAll(): Promise<v0.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v0.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV5 {
    get(key: Uint8Array): Promise<(v5.Proposal | undefined)>
    getAll(): Promise<v5.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v5.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v5.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v5.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v5.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v5.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV6 {
    get(key: Uint8Array): Promise<(v6.Proposal | undefined)>
    getAll(): Promise<v6.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v6.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v6.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v6.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v6.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v6.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV7 {
    get(key: Uint8Array): Promise<(v7.Proposal | undefined)>
    getAll(): Promise<v7.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v7.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v7.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v7.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v7.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v7.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9 {
    get(key: Uint8Array): Promise<(v9.Proposal | undefined)>
    getAll(): Promise<v9.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV10 {
    get(key: Uint8Array): Promise<(v10.Proposal | undefined)>
    getAll(): Promise<v10.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v10.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV11 {
    get(key: Uint8Array): Promise<(v11.Proposal | undefined)>
    getAll(): Promise<v11.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v11.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v11.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v11.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v11.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v11.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV13 {
    get(key: Uint8Array): Promise<(v13.Proposal | undefined)>
    getAll(): Promise<v13.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v13.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v13.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v13.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v13.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v13.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV14 {
    get(key: Uint8Array): Promise<(v14.Proposal | undefined)>
    getAll(): Promise<v14.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v14.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v14.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v14.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v14.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v14.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV15 {
    get(key: Uint8Array): Promise<(v15.Proposal | undefined)>
    getAll(): Promise<v15.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v15.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v15.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v15.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v15.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v15.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV17 {
    get(key: Uint8Array): Promise<(v17.Proposal | undefined)>
    getAll(): Promise<v17.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v17.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v17.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v17.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v17.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v17.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV18 {
    get(key: Uint8Array): Promise<(v18.Proposal | undefined)>
    getAll(): Promise<v18.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v18.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v18.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v18.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v18.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v18.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV23 {
    get(key: Uint8Array): Promise<(v23.Proposal | undefined)>
    getAll(): Promise<v23.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v23.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v23.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v23.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v23.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v23.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV24 {
    get(key: Uint8Array): Promise<(v24.Proposal | undefined)>
    getAll(): Promise<v24.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v24.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v24.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v24.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v24.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v24.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Proposal | undefined)>
    getAll(): Promise<v25.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV26 {
    get(key: Uint8Array): Promise<(v26.Proposal | undefined)>
    getAll(): Promise<v26.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v26.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v26.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v26.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v26.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v26.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV28 {
    get(key: Uint8Array): Promise<(v28.Proposal | undefined)>
    getAll(): Promise<v28.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v28.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV29 {
    get(key: Uint8Array): Promise<(v29.Proposal | undefined)>
    getAll(): Promise<v29.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v29.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v29.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v29.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v29.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v29.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV30 {
    get(key: Uint8Array): Promise<(v30.Proposal | undefined)>
    getAll(): Promise<v30.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v30.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9050 {
    get(key: Uint8Array): Promise<(v9050.Proposal | undefined)>
    getAll(): Promise<v9050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9080 {
    get(key: Uint8Array): Promise<(v9080.Proposal | undefined)>
    getAll(): Promise<v9080.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9090 {
    get(key: Uint8Array): Promise<(v9090.Proposal | undefined)>
    getAll(): Promise<v9090.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9100 {
    get(key: Uint8Array): Promise<(v9100.Proposal | undefined)>
    getAll(): Promise<v9100.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
}

export class Instance1CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV0(): Instance1CollectiveProposalsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance1CollectiveProposalsStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV0(): Instance1CollectiveVotingStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance1CollectiveVotingStorageV0 {
    get(key: Uint8Array): Promise<(v0.Votes | undefined)>
    getAll(): Promise<v0.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v0.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.Votes][]>
}

export class Instance1MembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Membership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asV0(): Instance1MembershipMembersStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface Instance1MembershipMembersStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class Instance1MembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Membership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asV0(): Instance1MembershipPrimeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface Instance1MembershipPrimeStorageV0 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance2CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV0(): Instance2CollectiveMembersStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance2CollectiveMembersStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The member who provides the default vote for any other members that do not vote before
     *  the timeout. If None, then no member has that privilege.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The member who provides the default vote for any other members that do not vote before
     *  the timeout. If None, then no member has that privilege.
     */
    get asV0(): Instance2CollectivePrimeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The member who provides the default vote for any other members that do not vote before
 *  the timeout. If None, then no member has that privilege.
 */
export interface Instance2CollectivePrimeStorageV0 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance2CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV0(): Instance2CollectiveProposalCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance2CollectiveProposalCountStorageV0 {
    get(): Promise<number>
}

export class Instance2CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a7e8e7fd721404079896defed98de95dfb6868d00799b993b35f08db669a1763'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV0(): Instance2CollectiveProposalOfStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV5(): boolean {
        return this.getTypeHash() === 'a0c1ea1dbfa3390f6dd3c60a349f81ad4aaae0a4bf1404cc959919a2e7761660'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV5(): Instance2CollectiveProposalOfStorageV5 {
        assert(this.isV5)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV6(): boolean {
        return this.getTypeHash() === 'a245b6b6c40849f61292d59e8554f90164fb7b773053848e3086f66a4029454f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV6(): Instance2CollectiveProposalOfStorageV6 {
        assert(this.isV6)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV7(): boolean {
        return this.getTypeHash() === 'f786e78e1015659e9dee4dad5e1fb19677f9f5305acad2a9d7b198f3088d4455'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV7(): Instance2CollectiveProposalOfStorageV7 {
        assert(this.isV7)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '7b67dcb1f6fbccf8c54ad1723dbbdb798584082a852e5ff89c304236da5411c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9(): Instance2CollectiveProposalOfStorageV9 {
        assert(this.isV9)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV10(): boolean {
        return this.getTypeHash() === '94d6c9dd5b81d712dbf6b4494875cf3ced8fc83f0bda0388d5a861265c5829e3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV10(): Instance2CollectiveProposalOfStorageV10 {
        assert(this.isV10)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV11(): boolean {
        return this.getTypeHash() === '55ab65ec2cca9ffb4d7c056e8b1bc98667f20e007ab85cdf8443396b13de6c00'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV11(): Instance2CollectiveProposalOfStorageV11 {
        assert(this.isV11)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV13(): boolean {
        return this.getTypeHash() === 'ff27bdc60caa16879c21476834a1f6a50625591eaa77c919d9130059c139a049'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV13(): Instance2CollectiveProposalOfStorageV13 {
        assert(this.isV13)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV14(): boolean {
        return this.getTypeHash() === 'ae91e97dac7d5f661d3787859827199246375f2431490218bf06c96a5c477096'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV14(): Instance2CollectiveProposalOfStorageV14 {
        assert(this.isV14)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV15(): boolean {
        return this.getTypeHash() === 'fd4971e102fd82e8b77a1a6f0a5112b2e481a2ceecfa746afb7e03b918460548'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV15(): Instance2CollectiveProposalOfStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV17(): boolean {
        return this.getTypeHash() === 'c5bf1dcf686313b591217ebac224232c96e7f2edb893237d87d88f8a3d1bd8af'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV17(): Instance2CollectiveProposalOfStorageV17 {
        assert(this.isV17)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV18(): boolean {
        return this.getTypeHash() === 'ba1a6279e1478b9a04b898b9c0a846ef880db1c82972d92165054b0a89dca5b8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV18(): Instance2CollectiveProposalOfStorageV18 {
        assert(this.isV18)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV23(): boolean {
        return this.getTypeHash() === '4004a907972506e2d691a3cb7602ce8225c2592f0d12d003e87aef73f2423bcf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV23(): Instance2CollectiveProposalOfStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV24(): boolean {
        return this.getTypeHash() === '356166904edac4b3b7c786db196f1923e6c1aedae3fb21ba39c5edddf8e1ee1e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV24(): Instance2CollectiveProposalOfStorageV24 {
        assert(this.isV24)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'b3827730e0dc87803e2af5f5d1b37fe0fe13359251b675a35512af2d8ec218e8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): Instance2CollectiveProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV26(): boolean {
        return this.getTypeHash() === '99e4e58fdbb6961eee62ec42a116b9fada54ca56f6e56c42482522d916abc36c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV26(): Instance2CollectiveProposalOfStorageV26 {
        assert(this.isV26)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '68ddc084d5d45829d62ee6b366697e5316924dda852b32f9fd9f7c2d312fbe2d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV28(): Instance2CollectiveProposalOfStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV29(): boolean {
        return this.getTypeHash() === 'b2d388d5324f66c413bb92afa7d977c39607b23fcc54187660a1f748689dc65d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV29(): Instance2CollectiveProposalOfStorageV29 {
        assert(this.isV29)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV30(): boolean {
        return this.getTypeHash() === 'f2310aeea24a2defe101b6133b4047506f4f78f657c3730715d1be768af473c1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV30(): Instance2CollectiveProposalOfStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '917fa2fa061281691040a6b91cde0e1df01369342212c5c905da90dc97ef5ec8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9050(): Instance2CollectiveProposalOfStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '82b356c3398fd07ca4931f52f10a08ab9c323a7308181f6738f66e1c201fda71'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9080(): Instance2CollectiveProposalOfStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '25d60cb68d41bcc7ef930da62e43767ae9f61ed6e7f542bb8899b233f2b670d1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9090(): Instance2CollectiveProposalOfStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '2a6a093e75452f19683c23f92d39fb65d1385a5cbd87f80d385736035e5daa07'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9100(): Instance2CollectiveProposalOfStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV0 {
    get(key: Uint8Array): Promise<(v0.Proposal | undefined)>
    getAll(): Promise<v0.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v0.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV5 {
    get(key: Uint8Array): Promise<(v5.Proposal | undefined)>
    getAll(): Promise<v5.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v5.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v5.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v5.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v5.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v5.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV6 {
    get(key: Uint8Array): Promise<(v6.Proposal | undefined)>
    getAll(): Promise<v6.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v6.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v6.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v6.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v6.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v6.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV7 {
    get(key: Uint8Array): Promise<(v7.Proposal | undefined)>
    getAll(): Promise<v7.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v7.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v7.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v7.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v7.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v7.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9 {
    get(key: Uint8Array): Promise<(v9.Proposal | undefined)>
    getAll(): Promise<v9.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV10 {
    get(key: Uint8Array): Promise<(v10.Proposal | undefined)>
    getAll(): Promise<v10.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v10.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v10.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v10.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v10.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v10.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV11 {
    get(key: Uint8Array): Promise<(v11.Proposal | undefined)>
    getAll(): Promise<v11.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v11.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v11.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v11.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v11.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v11.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV13 {
    get(key: Uint8Array): Promise<(v13.Proposal | undefined)>
    getAll(): Promise<v13.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v13.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v13.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v13.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v13.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v13.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV14 {
    get(key: Uint8Array): Promise<(v14.Proposal | undefined)>
    getAll(): Promise<v14.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v14.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v14.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v14.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v14.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v14.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV15 {
    get(key: Uint8Array): Promise<(v15.Proposal | undefined)>
    getAll(): Promise<v15.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v15.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v15.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v15.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v15.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v15.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV17 {
    get(key: Uint8Array): Promise<(v17.Proposal | undefined)>
    getAll(): Promise<v17.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v17.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v17.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v17.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v17.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v17.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV18 {
    get(key: Uint8Array): Promise<(v18.Proposal | undefined)>
    getAll(): Promise<v18.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v18.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v18.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v18.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v18.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v18.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV23 {
    get(key: Uint8Array): Promise<(v23.Proposal | undefined)>
    getAll(): Promise<v23.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v23.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v23.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v23.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v23.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v23.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV24 {
    get(key: Uint8Array): Promise<(v24.Proposal | undefined)>
    getAll(): Promise<v24.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v24.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v24.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v24.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v24.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v24.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Proposal | undefined)>
    getAll(): Promise<v25.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV26 {
    get(key: Uint8Array): Promise<(v26.Proposal | undefined)>
    getAll(): Promise<v26.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v26.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v26.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v26.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v26.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v26.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV28 {
    get(key: Uint8Array): Promise<(v28.Proposal | undefined)>
    getAll(): Promise<v28.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v28.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV29 {
    get(key: Uint8Array): Promise<(v29.Proposal | undefined)>
    getAll(): Promise<v29.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v29.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v29.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v29.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v29.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v29.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV30 {
    get(key: Uint8Array): Promise<(v30.Proposal | undefined)>
    getAll(): Promise<v30.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v30.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9050 {
    get(key: Uint8Array): Promise<(v9050.Proposal | undefined)>
    getAll(): Promise<v9050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9080 {
    get(key: Uint8Array): Promise<(v9080.Proposal | undefined)>
    getAll(): Promise<v9080.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9090 {
    get(key: Uint8Array): Promise<(v9090.Proposal | undefined)>
    getAll(): Promise<v9090.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9100 {
    get(key: Uint8Array): Promise<(v9100.Proposal | undefined)>
    getAll(): Promise<v9100.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
}

export class Instance2CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV0(): Instance2CollectiveProposalsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance2CollectiveProposalsStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV0(): Instance2CollectiveVotingStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance2CollectiveVotingStorageV0 {
    get(key: Uint8Array): Promise<(v0.Votes | undefined)>
    getAll(): Promise<v0.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v0.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.Votes][]>
}

export class MultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isV10(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asV10(): MultisigCallsStorageV10 {
        assert(this.isV10)
        return this as any
    }
}

export interface MultisigCallsStorageV10 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV5(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV5(): MultisigMultisigsStorageV5 {
        assert(this.isV5)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageV5 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v5.Multisig | undefined)>
    getAll(): Promise<v5.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v5.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v5.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v5.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v5.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v5.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v5.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v5.Multisig][]>
}

export class NominationPoolsBondedPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'BondedPools'
    }

    /**
     *  Storage for bonded pools.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '71e65a38fe13c43d62e01d4a26cc90c142271e60e61773941927ebd77e3df23a'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV9280(): NominationPoolsBondedPoolsStorageV9280 {
        assert(this.isV9280)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '8ee9b811b3610458137a5c6015bd84146600ec4f9ae92d1d2b13d735618d24d0'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV9420(): NominationPoolsBondedPoolsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV9280 {
    get(key: number): Promise<(v9280.BondedPoolInner | undefined)>
    getAll(): Promise<v9280.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v9280.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9280.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v9280.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9280.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9280.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV9420 {
    get(key: number): Promise<(v9420.BondedPoolInner | undefined)>
    getAll(): Promise<v9420.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v9420.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v9420.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.BondedPoolInner][]>
}

export class NominationPoolsClaimPermissionsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'ClaimPermissions'
    }

    /**
     *  Map from a pool member account to their opted claim permission.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'cecafce59b7786f4d0cda8d68dbbdb9539b8f3a7a65637f5481233f5b064abdd'
    }

    /**
     *  Map from a pool member account to their opted claim permission.
     */
    get asV9420(): NominationPoolsClaimPermissionsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Map from a pool member account to their opted claim permission.
 */
export interface NominationPoolsClaimPermissionsStorageV9420 {
    get(key: Uint8Array): Promise<v9420.ClaimPermission>
    getAll(): Promise<v9420.ClaimPermission[]>
    getMany(keys: Uint8Array[]): Promise<v9420.ClaimPermission[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.ClaimPermission][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.ClaimPermission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.ClaimPermission][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.ClaimPermission][]>
}

export class NominationPoolsCounterForBondedPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForBondedPools'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9280(): NominationPoolsCounterForBondedPoolsStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForBondedPoolsStorageV9280 {
    get(): Promise<number>
}

export class NominationPoolsCounterForMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForMetadata'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9280(): NominationPoolsCounterForMetadataStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForMetadataStorageV9280 {
    get(): Promise<number>
}

export class NominationPoolsCounterForPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForPoolMembers'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9280(): NominationPoolsCounterForPoolMembersStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForPoolMembersStorageV9280 {
    get(): Promise<number>
}

export class NominationPoolsCounterForReversePoolIdLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForReversePoolIdLookup'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9280(): NominationPoolsCounterForReversePoolIdLookupStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForReversePoolIdLookupStorageV9280 {
    get(): Promise<number>
}

export class NominationPoolsCounterForRewardPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForRewardPools'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9280(): NominationPoolsCounterForRewardPoolsStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForRewardPoolsStorageV9280 {
    get(): Promise<number>
}

export class NominationPoolsCounterForSubPoolsStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForSubPoolsStorage'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9280(): NominationPoolsCounterForSubPoolsStorageStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForSubPoolsStorageStorageV9280 {
    get(): Promise<number>
}

export class NominationPoolsGlobalMaxCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'GlobalMaxCommission'
    }

    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     *  `GlobalMaxCommission` is lower than some current pool commissions.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     *  `GlobalMaxCommission` is lower than some current pool commissions.
     */
    get asV9420(): NominationPoolsGlobalMaxCommissionStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
 *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
 *  `GlobalMaxCommission` is lower than some current pool commissions.
 */
export interface NominationPoolsGlobalMaxCommissionStorageV9420 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsLastPoolIdStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'LastPoolId'
    }

    /**
     *  Ever increasing number of all pools created so far.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Ever increasing number of all pools created so far.
     */
    get asV9280(): NominationPoolsLastPoolIdStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  Ever increasing number of all pools created so far.
 */
export interface NominationPoolsLastPoolIdStorageV9280 {
    get(): Promise<number>
}

export class NominationPoolsMaxPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MaxPoolMembers'
    }

    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    get asV9280(): NominationPoolsMaxPoolMembersStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  Maximum number of members that can exist in the system. If `None`, then the count
 *  members are not bound on a system wide basis.
 */
export interface NominationPoolsMaxPoolMembersStorageV9280 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsMaxPoolMembersPerPoolStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MaxPoolMembersPerPool'
    }

    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    get asV9280(): NominationPoolsMaxPoolMembersPerPoolStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  Maximum number of members that may belong to pool. If `None`, then the count of
 *  members is not bound on a per pool basis.
 */
export interface NominationPoolsMaxPoolMembersPerPoolStorageV9280 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsMaxPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MaxPools'
    }

    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    get asV9280(): NominationPoolsMaxPoolsStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
 *  pools can exist.
 */
export interface NominationPoolsMaxPoolsStorageV9280 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'Metadata'
    }

    /**
     *  Metadata for the pool.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Metadata for the pool.
     */
    get asV9280(): NominationPoolsMetadataStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  Metadata for the pool.
 */
export interface NominationPoolsMetadataStorageV9280 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class NominationPoolsMinCreateBondStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MinCreateBond'
    }

    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     * 
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     * 
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    get asV9280(): NominationPoolsMinCreateBondStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  Minimum bond required to create a pool.
 * 
 *  This is the amount that the depositor must put as their initial stake in the pool, as an
 *  indication of "skin in the game".
 * 
 *  This is the value that will always exist in the staking ledger of the pool bonded account
 *  while all other accounts leave.
 */
export interface NominationPoolsMinCreateBondStorageV9280 {
    get(): Promise<bigint>
}

export class NominationPoolsMinJoinBondStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MinJoinBond'
    }

    /**
     *  Minimum amount to bond to join a pool.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Minimum amount to bond to join a pool.
     */
    get asV9280(): NominationPoolsMinJoinBondStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  Minimum amount to bond to join a pool.
 */
export interface NominationPoolsMinJoinBondStorageV9280 {
    get(): Promise<bigint>
}

export class NominationPoolsPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'PoolMembers'
    }

    /**
     *  Active members.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '4b73cf52c7b7da8a11c75fe9dae69e02b83c4fe7a62b5a2e5b996edd8168c745'
    }

    /**
     *  Active members.
     */
    get asV9280(): NominationPoolsPoolMembersStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  Active members.
 */
export interface NominationPoolsPoolMembersStorageV9280 {
    get(key: Uint8Array): Promise<(v9280.PoolMember | undefined)>
    getAll(): Promise<v9280.PoolMember[]>
    getMany(keys: Uint8Array[]): Promise<(v9280.PoolMember | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9280.PoolMember][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9280.PoolMember][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9280.PoolMember][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9280.PoolMember][]>
}

export class NominationPoolsReversePoolIdLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'ReversePoolIdLookup'
    }

    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    get asV9280(): NominationPoolsReversePoolIdLookupStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  A reverse lookup from the pool's account id to its id.
 * 
 *  This is only used for slashing. In all other instances, the pool id is used, and the
 *  accounts are deterministically derived from it.
 */
export interface NominationPoolsReversePoolIdLookupStorageV9280 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class NominationPoolsRewardPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'RewardPools'
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
     *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '375666cc5d1267485e45c4d315cd3ed856c1f8bede82ba7bd7bf6b27e31a4872'
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
     *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get asV9280(): NominationPoolsRewardPoolsStorageV9280 {
        assert(this.isV9280)
        return this as any
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
     *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'baa87c11370b546112f8970d07f6ff23bef0938379d1f9d3229bd55c32959de5'
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
     *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get asV9420(): NominationPoolsRewardPoolsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
 *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface NominationPoolsRewardPoolsStorageV9280 {
    get(key: number): Promise<(v9280.RewardPool | undefined)>
    getAll(): Promise<v9280.RewardPool[]>
    getMany(keys: number[]): Promise<(v9280.RewardPool | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9280.RewardPool][]>
    getPairs(key: number): Promise<[k: number, v: v9280.RewardPool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9280.RewardPool][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9280.RewardPool][]>
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
 *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface NominationPoolsRewardPoolsStorageV9420 {
    get(key: number): Promise<(v9420.RewardPool | undefined)>
    getAll(): Promise<v9420.RewardPool[]>
    getMany(keys: number[]): Promise<(v9420.RewardPool | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.RewardPool][]>
    getPairs(key: number): Promise<[k: number, v: v9420.RewardPool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.RewardPool][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.RewardPool][]>
}

export class NominationPoolsSubPoolsStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'SubPoolsStorage'
    }

    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === 'dc5bb02a122fb418c88fbe5c06d8e91818c8d4fffe761fe0299ea8709df81bb3'
    }

    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    get asV9280(): NominationPoolsSubPoolsStorageStorageV9280 {
        assert(this.isV9280)
        return this as any
    }
}

/**
 *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
 *  hence the name sub-pools. Keyed by the bonded pools account.
 */
export interface NominationPoolsSubPoolsStorageStorageV9280 {
    get(key: number): Promise<(v9280.SubPools | undefined)>
    getAll(): Promise<v9280.SubPools[]>
    getMany(keys: number[]): Promise<(v9280.SubPools | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9280.SubPools][]>
    getPairs(key: number): Promise<[k: number, v: v9280.SubPools][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9280.SubPools][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9280.SubPools][]>
}

export class OffencesConcurrentReportsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ConcurrentReportsIndex'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'd5c59a6db2baab9f1dcc1a37b0131a737935fd2082fcf39b6abc3f1d6e3ae008'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get asV0(): OffencesConcurrentReportsIndexStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface OffencesConcurrentReportsIndexStorageV0 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<Uint8Array[][]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
}

export class OffencesDeferredOffencesStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'DeferredOffences'
    }

    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '65c2bd7c83332ec30382595579905bc2abf22a9f87aa00c33bcc28ba95f3b845'
    }

    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    get asV0(): OffencesDeferredOffencesStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Deferred reports that have been rejected by the offence handler and need to be submitted
 *  at a later time.
 */
export interface OffencesDeferredOffencesStorageV0 {
    get(): Promise<[v0.OffenceDetails[], number[], number][]>
}

export class OffencesReportsStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'Reports'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'e52641726adeb87007a96ce7684aad2f8233624d39e0ad7727f22f889bc9279f'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get asV0(): OffencesReportsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface OffencesReportsStorageV0 {
    get(key: Uint8Array): Promise<(v0.OffenceDetails | undefined)>
    getAll(): Promise<v0.OffenceDetails[]>
    getMany(keys: Uint8Array[]): Promise<(v0.OffenceDetails | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.OffenceDetails][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.OffenceDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.OffenceDetails][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.OffenceDetails][]>
}

export class OffencesReportsByKindIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ReportsByKindIndex'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '0f535b9892aaca40228e6d3f57b63c241690838a686fa8be3e7f0992bfda0d19'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get asV0(): OffencesReportsByKindIndexStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface OffencesReportsByKindIndexStorageV0 {
    get(key: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class ParaInclusionAvailabilityBitfieldsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'AvailabilityBitfields'
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'bf97f32483242f327da32063a836c1f797b9f0b05ea5417192cc00309d339c23'
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get asV9110(): ParaInclusionAvailabilityBitfieldsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface ParaInclusionAvailabilityBitfieldsStorageV9110 {
    get(key: number): Promise<(v9110.AvailabilityBitfieldRecord | undefined)>
    getAll(): Promise<v9110.AvailabilityBitfieldRecord[]>
    getMany(keys: number[]): Promise<(v9110.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.AvailabilityBitfieldRecord][]>
    getPairs(key: number): Promise<[k: number, v: v9110.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.AvailabilityBitfieldRecord][]>
}

export class ParaInclusionPendingAvailabilityStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'PendingAvailability'
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'd1ce28ee05b8364d55d8ee99dab4ba7567356381f70d142c1dda5b6de4abf79b'
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get asV9110(): ParaInclusionPendingAvailabilityStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface ParaInclusionPendingAvailabilityStorageV9110 {
    get(key: number): Promise<(v9110.CandidatePendingAvailability | undefined)>
    getAll(): Promise<v9110.CandidatePendingAvailability[]>
    getMany(keys: number[]): Promise<(v9110.CandidatePendingAvailability | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.CandidatePendingAvailability][]>
    getPairs(key: number): Promise<[k: number, v: v9110.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.CandidatePendingAvailability][]>
}

export class ParaInclusionPendingAvailabilityCommitmentsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'PendingAvailabilityCommitments'
    }

    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '4e6f7845cb653fd4982455ab1aefc6bf2c68b8591ae7b58226dd2c5b0621f0cf'
    }

    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    get asV9110(): ParaInclusionPendingAvailabilityCommitmentsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The commitments of candidates pending availability, by `ParaId`.
 */
export interface ParaInclusionPendingAvailabilityCommitmentsStorageV9110 {
    get(key: number): Promise<(v9110.V1CandidateCommitments | undefined)>
    getAll(): Promise<v9110.V1CandidateCommitments[]>
    getMany(keys: number[]): Promise<(v9110.V1CandidateCommitments | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.V1CandidateCommitments][]>
    getPairs(key: number): Promise<[k: number, v: v9110.V1CandidateCommitments][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.V1CandidateCommitments][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.V1CandidateCommitments][]>
}

export class ParaInherentIncludedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInherent'
    }

    protected getName() {
        return 'Included'
    }

    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    get asV9110(): ParaInherentIncludedStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Whether the paras inherent was included within this block.
 * 
 *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
 *  due to the guarantees of FRAME's storage APIs.
 * 
 *  If this is `None` at the end of the block, we panic and render the block invalid.
 */
export interface ParaInherentIncludedStorageV9110 {
    get(): Promise<(null | undefined)>
}

export class ParaInherentOnChainVotesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInherent'
    }

    protected getName() {
        return 'OnChainVotes'
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === '90024dc5cb8ad039cc5c064f6dae6d9b18bbb24fd2d8b5dda8f60b533147590b'
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get asV9122(): ParaInherentOnChainVotesStorageV9122 {
        assert(this.isV9122)
        return this as any
    }
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface ParaInherentOnChainVotesStorageV9122 {
    get(): Promise<(v9122.V1ScrapedOnChainVotes | undefined)>
}

export class ParaSchedulerAvailabilityCoresStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'AvailabilityCores'
    }

    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
     *  temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '7f07eeae3b19707b6c2d7d6d316072b68175ffebbad0a2329e61a8413e936151'
    }

    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
     *  temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    get asV9110(): ParaSchedulerAvailabilityCoresStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
 *  temporarily `Some` if scheduled but not occupied.
 *  The i'th parachain belongs to the i'th core, with the remaining cores all being
 *  parathread-multiplexers.
 * 
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface ParaSchedulerAvailabilityCoresStorageV9110 {
    get(): Promise<(v9110.V1CoreOccupied | undefined)[]>
}

export class ParaSchedulerParathreadClaimIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ParathreadClaimIndex'
    }

    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     * 
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     * 
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    get asV9110(): ParaSchedulerParathreadClaimIndexStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  An index used to ensure that only one claim on a parathread exists in the queue or is
 *  currently being handled by an occupied core.
 * 
 *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
 */
export interface ParaSchedulerParathreadClaimIndexStorageV9110 {
    get(): Promise<number[]>
}

export class ParaSchedulerParathreadQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ParathreadQueue'
    }

    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     * 
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'c75714ddf007711a84c1420eb03081789539e9248fd15ec5bdfd7ef07d871660'
    }

    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     * 
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    get asV9110(): ParaSchedulerParathreadQueueStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  A queue of upcoming claims and which core they should be mapped onto.
 * 
 *  The number of queued claims is bounded at the `scheduling_lookahead`
 *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
 */
export interface ParaSchedulerParathreadQueueStorageV9110 {
    get(): Promise<v9110.ParathreadClaimQueue>
}

export class ParaSchedulerScheduledStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'Scheduled'
    }

    /**
     *  Currently scheduled cores - free but up to be occupied.
     * 
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     * 
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'ba9a2a711ca71cdb5388a14f4c122bb3979325380609bfba73d66568069257a7'
    }

    /**
     *  Currently scheduled cores - free but up to be occupied.
     * 
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     * 
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    get asV9110(): ParaSchedulerScheduledStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Currently scheduled cores - free but up to be occupied.
 * 
 *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
 * 
 *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
 *  for the upcoming block.
 */
export interface ParaSchedulerScheduledStorageV9110 {
    get(): Promise<v9110.CoreAssignment[]>
}

export class ParaSchedulerSessionStartBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'SessionStartBlock'
    }

    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signaled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signaled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    get asV9110(): ParaSchedulerSessionStartBlockStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The block number where the session start occurred. Used to track how many group rotations have occurred.
 * 
 *  Note that in the context of parachains modules the session change is signaled during
 *  the block and enacted at the end of the block (at the finalization stage, to be exact).
 *  Thus for all intents and purposes the effect of the session change is observed at the
 *  block following the session change, block number of which we save in this storage value.
 */
export interface ParaSchedulerSessionStartBlockStorageV9110 {
    get(): Promise<number>
}

export class ParaSchedulerValidatorGroupsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ValidatorGroups'
    }

    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '6812c4f54daaeff8842c0895b0d89bea407fdfe1c921e760ce2f412477ce233d'
    }

    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    get asV9110(): ParaSchedulerValidatorGroupsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
 *  broader set of Polkadot validators, but instead just the subset used for parachains during
 *  this session.
 * 
 *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
 *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
 */
export interface ParaSchedulerValidatorGroupsStorageV9110 {
    get(): Promise<number[][]>
}

export class ParaSessionInfoAccountKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'AccountKeys'
    }

    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '9ec34a723b63dfc1d78a2d356bbdb08e5be19ef85e221f93b46f03e24229ffd0'
    }

    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    get asV9230(): ParaSessionInfoAccountKeysStorageV9230 {
        assert(this.isV9230)
        return this as any
    }
}

/**
 *  The validator account keys of the validators actively participating in parachain consensus.
 */
export interface ParaSessionInfoAccountKeysStorageV9230 {
    get(key: number): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class ParaSessionInfoAssignmentKeysUnsafeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'AssignmentKeysUnsafe'
    }

    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    get asV9110(): ParaSessionInfoAssignmentKeysUnsafeStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Assignment keys for the current session.
 *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
 *  When in doubt, use `Sessions` API instead.
 */
export interface ParaSessionInfoAssignmentKeysUnsafeStorageV9110 {
    get(): Promise<Uint8Array[]>
}

export class ParaSessionInfoEarliestStoredSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'EarliestStoredSession'
    }

    /**
     *  The earliest session for which previous session info is stored.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The earliest session for which previous session info is stored.
     */
    get asV9110(): ParaSessionInfoEarliestStoredSessionStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The earliest session for which previous session info is stored.
 */
export interface ParaSessionInfoEarliestStoredSessionStorageV9110 {
    get(): Promise<number>
}

export class ParaSessionInfoSessionExecutorParamsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'SessionExecutorParams'
    }

    /**
     *  Executor parameter set for a given session index
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'adef626da99b30a4e9862c45fef3ada49ed979bf86b1897fe7492b09dfa62a31'
    }

    /**
     *  Executor parameter set for a given session index
     */
    get asV9420(): ParaSessionInfoSessionExecutorParamsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Executor parameter set for a given session index
 */
export interface ParaSessionInfoSessionExecutorParamsStorageV9420 {
    get(key: number): Promise<(v9420.V4ExecutorParam[] | undefined)>
    getAll(): Promise<v9420.V4ExecutorParam[][]>
    getMany(keys: number[]): Promise<(v9420.V4ExecutorParam[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.V4ExecutorParam[]][]>
    getPairs(key: number): Promise<[k: number, v: v9420.V4ExecutorParam[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.V4ExecutorParam[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.V4ExecutorParam[]][]>
}

export class ParaSessionInfoSessionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'Sessions'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f8bd79f544a6e737b6526766ddb7fcfe1339a9318972eacf96568d40a5792dce'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get asV9110(): ParaSessionInfoSessionsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '2df170f53bbb8953f8c99d9d7899c64705f4a7bf2a4a355720ab5a1d2f0698f5'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get asV9170(): ParaSessionInfoSessionsStorageV9170 {
        assert(this.isV9170)
        return this as any
    }
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface ParaSessionInfoSessionsStorageV9110 {
    get(key: number): Promise<(v9110.V1SessionInfo | undefined)>
    getAll(): Promise<v9110.V1SessionInfo[]>
    getMany(keys: number[]): Promise<(v9110.V1SessionInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.V1SessionInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9110.V1SessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.V1SessionInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.V1SessionInfo][]>
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface ParaSessionInfoSessionsStorageV9170 {
    get(key: number): Promise<(v9170.V2SessionInfo | undefined)>
    getAll(): Promise<v9170.V2SessionInfo[]>
    getMany(keys: number[]): Promise<(v9170.V2SessionInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9170.V2SessionInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9170.V2SessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9170.V2SessionInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9170.V2SessionInfo][]>
}

export class ParachainsAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  All authorities' keys at the moment.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  All authorities' keys at the moment.
     */
    get asV0(): ParachainsAuthoritiesStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  All authorities' keys at the moment.
 */
export interface ParachainsAuthoritiesStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class ParachainsCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'Code'
    }

    /**
     *  The active code of a currently-registered parachain.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The active code of a currently-registered parachain.
     */
    get asV0(): ParachainsCodeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The active code of a currently-registered parachain.
 */
export interface ParachainsCodeStorageV0 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParachainsDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  `Some` if the parachain heads get updated in this block, along with the parachain IDs
     *  that did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
     * 
     *  `None` if not yet updated.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'e007566ad70b61f5b2395e443784d1a97319710e80f5f29c5f928c0257113213'
    }

    /**
     *  `Some` if the parachain heads get updated in this block, along with the parachain IDs
     *  that did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
     * 
     *  `None` if not yet updated.
     */
    get asV0(): ParachainsDidUpdateStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  `Some` if the parachain heads get updated in this block, along with the parachain IDs
 *  that did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
 * 
 *  `None` if not yet updated.
 */
export interface ParachainsDidUpdateStorageV0 {
    get(): Promise<(number[] | undefined)>
}

export class ParachainsDownwardMessageQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'DownwardMessageQueue'
    }

    /**
     *  Messages waiting to be delivered from the Relay chain into the parachain.
     */
    get isV13(): boolean {
        return this.getTypeHash() === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
    }

    /**
     *  Messages waiting to be delivered from the Relay chain into the parachain.
     */
    get asV13(): ParachainsDownwardMessageQueueStorageV13 {
        assert(this.isV13)
        return this as any
    }
}

/**
 *  Messages waiting to be delivered from the Relay chain into the parachain.
 */
export interface ParachainsDownwardMessageQueueStorageV13 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class ParachainsFutureCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'FutureCode'
    }

    get isV0(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    get asV0(): ParachainsFutureCodeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

export interface ParachainsFutureCodeStorageV0 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParachainsFutureCodeUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'FutureCodeUpgrades'
    }

    get isV0(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    get asV0(): ParachainsFutureCodeUpgradesStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

export interface ParachainsFutureCodeUpgradesStorageV0 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ParachainsHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'Heads'
    }

    /**
     *  The heads of the parachains registered at present.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The heads of the parachains registered at present.
     */
    get asV0(): ParachainsHeadsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The heads of the parachains registered at present.
 */
export interface ParachainsHeadsStorageV0 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParachainsNeedsDispatchStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'NeedsDispatch'
    }

    /**
     *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
     */
    get asV0(): ParachainsNeedsDispatchStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
 */
export interface ParachainsNeedsDispatchStorageV0 {
    get(): Promise<number[]>
}

export class ParachainsPastCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'PastCode'
    }

    /**
     *  Actual past code, indicated by the parachain and the block number at which it
     *  became outdated.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '6e792685cfbc88b8c231cc71eb367f5f6afd7a0241afec572c20059701e16244'
    }

    /**
     *  Actual past code, indicated by the parachain and the block number at which it
     *  became outdated.
     */
    get asV0(): ParachainsPastCodeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Actual past code, indicated by the parachain and the block number at which it
 *  became outdated.
 */
export interface ParachainsPastCodeStorageV0 {
    get(key: [number, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class ParachainsPastCodeMetaStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'PastCodeMeta'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to assist with availability.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a069a7aca8874185413a0d1fd88ae2c96bd7ecd883dd17c9e349867c0b602302'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to assist with availability.
     */
    get asV0(): ParachainsPastCodeMetaStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to assist with availability.
 */
export interface ParachainsPastCodeMetaStorageV0 {
    get(key: number): Promise<v0.ParaPastCodeMeta>
    getAll(): Promise<v0.ParaPastCodeMeta[]>
    getMany(keys: number[]): Promise<v0.ParaPastCodeMeta[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v0.ParaPastCodeMeta][]>
    getPairs(key: number): Promise<[k: number, v: v0.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v0.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v0.ParaPastCodeMeta][]>
}

export class ParachainsPastCodePruningStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'PastCodePruning'
    }

    /**
     *  Past code pruning, in order of priority.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  Past code pruning, in order of priority.
     */
    get asV0(): ParachainsPastCodePruningStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Past code pruning, in order of priority.
 */
export interface ParachainsPastCodePruningStorageV0 {
    get(): Promise<[number, number][]>
}

export class ParachainsRelayDispatchQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'RelayDispatchQueue'
    }

    /**
     *  Messages ready to be dispatched onto the relay chain. It is subject to
     *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
    }

    /**
     *  Messages ready to be dispatched onto the relay chain. It is subject to
     *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
     */
    get asV0(): ParachainsRelayDispatchQueueStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Messages ready to be dispatched onto the relay chain. It is subject to
 *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
 */
export interface ParachainsRelayDispatchQueueStorageV0 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class ParachainsRelayDispatchQueueSizeStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'RelayDispatchQueueSize'
    }

    /**
     *  Size of the dispatch queues. Separated from actual data in order to avoid costly
     *  decoding when checking receipt validity. First item in tuple is the count of messages
     *  second if the total length (in bytes) of the message payloads.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '11d84eadab69be0e8dde14b70110d550deeab55868bd2bc91f3c1cf340a76ef8'
    }

    /**
     *  Size of the dispatch queues. Separated from actual data in order to avoid costly
     *  decoding when checking receipt validity. First item in tuple is the count of messages
     *  second if the total length (in bytes) of the message payloads.
     */
    get asV0(): ParachainsRelayDispatchQueueSizeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Size of the dispatch queues. Separated from actual data in order to avoid costly
 *  decoding when checking receipt validity. First item in tuple is the count of messages
 *  second if the total length (in bytes) of the message payloads.
 */
export interface ParachainsRelayDispatchQueueSizeStorageV0 {
    get(key: number): Promise<[number, number]>
    getAll(): Promise<[number, number][]>
    getMany(keys: number[]): Promise<[number, number][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number]][]>
}

export class ParasActionsQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'ActionsQueue'
    }

    /**
     *  The actions to perform during the start of a specific session index.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  The actions to perform during the start of a specific session index.
     */
    get asV9110(): ParasActionsQueueStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The actions to perform during the start of a specific session index.
 */
export interface ParasActionsQueueStorageV9110 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class ParasCodeByHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CodeByHash'
    }

    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    get asV9110(): ParasCodeByHashStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Validation code stored by its hash.
 * 
 *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
 *  [`PastCodeHash`].
 */
export interface ParasCodeByHashStorageV9110 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class ParasCodeByHashRefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CodeByHashRefs'
    }

    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    get asV9110(): ParasCodeByHashRefsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The number of reference on the validation code in [`CodeByHash`] storage.
 */
export interface ParasCodeByHashRefsStorageV9110 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class ParasCurrentCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CurrentCodeHash'
    }

    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV9110(): ParasCurrentCodeHashStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The validation code hash of every live para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasCurrentCodeHashStorageV9110 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasFutureCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'FutureCodeHash'
    }

    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV9110(): ParasFutureCodeHashStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The actual future code hash of a para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasFutureCodeHashStorageV9110 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasFutureCodeUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'FutureCodeUpgrades'
    }

    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    get asV9110(): ParasFutureCodeUpgradesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The block number at which the planned code change is expected for a para.
 *  The change will be applied after the first parablock for this ID included which executes
 *  in the context of a relay chain block with a number >= `expected_at`.
 */
export interface ParasFutureCodeUpgradesStorageV9110 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ParasHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'Heads'
    }

    /**
     *  The head-data of every registered para.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The head-data of every registered para.
     */
    get asV9110(): ParasHeadsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The head-data of every registered para.
 */
export interface ParasHeadsStorageV9110 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasParaLifecyclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'ParaLifecycles'
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '473075bfac0a21c841bb0ec54a9d1b0a1103a28ca5c11fc19789ead6f56d4516'
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get asV9110(): ParasParaLifecyclesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The current lifecycle of a all known Para IDs.
 */
export interface ParasParaLifecyclesStorageV9110 {
    get(key: number): Promise<(v9110.ParaLifecycle | undefined)>
    getAll(): Promise<v9110.ParaLifecycle[]>
    getMany(keys: number[]): Promise<(v9110.ParaLifecycle | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.ParaLifecycle][]>
    getPairs(key: number): Promise<[k: number, v: v9110.ParaLifecycle][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.ParaLifecycle][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.ParaLifecycle][]>
}

export class ParasParachainsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'Parachains'
    }

    /**
     *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
     */
    get asV9110(): ParasParachainsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
 */
export interface ParasParachainsStorageV9110 {
    get(): Promise<number[]>
}

export class ParasPastCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodeHash'
    }

    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '0d2411ae362670c0960f353ffe86371ae2c0b12979565bcbd9e6dd986619632d'
    }

    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV9110(): ParasPastCodeHashStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Actual past code hash, indicated by the para id as well as the block number at which it
 *  became outdated.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasPastCodeHashStorageV9110 {
    get(key: [number, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class ParasPastCodeMetaStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodeMeta'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for secondary checkers.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'a069a7aca8874185413a0d1fd88ae2c96bd7ecd883dd17c9e349867c0b602302'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for secondary checkers.
     */
    get asV9110(): ParasPastCodeMetaStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to keep it available for secondary checkers.
 */
export interface ParasPastCodeMetaStorageV9110 {
    get(key: number): Promise<v9110.ParaPastCodeMeta>
    getAll(): Promise<v9110.ParaPastCodeMeta[]>
    getMany(keys: number[]): Promise<v9110.ParaPastCodeMeta[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.ParaPastCodeMeta][]>
    getPairs(key: number): Promise<[k: number, v: v9110.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.ParaPastCodeMeta][]>
}

export class ParasPastCodePruningStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodePruning'
    }

    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
     *  Note that this is the actual height of the included block, not the expected height at which the
     *  code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
     *  from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
     *  Note that this is the actual height of the included block, not the expected height at which the
     *  code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
     *  from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    get asV9110(): ParasPastCodePruningStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
 *  Note that this is the actual height of the included block, not the expected height at which the
 *  code upgrade would be applied, although they may be equal.
 *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
 *  from the time at which the parachain perceives a code upgrade as having occurred.
 *  Multiple entries for a single para are permitted. Ordered ascending by block number.
 */
export interface ParasPastCodePruningStorageV9110 {
    get(): Promise<[number, number][]>
}

export class ParasPvfActiveVoteListStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PvfActiveVoteList'
    }

    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    get asV9170(): ParasPvfActiveVoteListStorageV9170 {
        assert(this.isV9170)
        return this as any
    }
}

/**
 *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
 */
export interface ParasPvfActiveVoteListStorageV9170 {
    get(): Promise<Uint8Array[]>
}

export class ParasPvfActiveVoteMapStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PvfActiveVoteMap'
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '929cea40d98e7c9edbcba116da5df6e71054833d758ad8f6150d78bb4140a230'
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get asV9170(): ParasPvfActiveVoteMapStorageV9170 {
        assert(this.isV9170)
        return this as any
    }
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface ParasPvfActiveVoteMapStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.PvfCheckActiveVoteState | undefined)>
    getAll(): Promise<v9170.PvfCheckActiveVoteState[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.PvfCheckActiveVoteState | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.PvfCheckActiveVoteState][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.PvfCheckActiveVoteState][]>
}

export class ParasUpcomingParasGenesisStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpcomingParasGenesis'
    }

    /**
     *  Upcoming paras instantiation arguments.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '253a974d17240b520923113bbc6b12a391a5ad347b228902564103b1736e0094'
    }

    /**
     *  Upcoming paras instantiation arguments.
     */
    get asV9110(): ParasUpcomingParasGenesisStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Upcoming paras instantiation arguments.
     * 
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'd289d3b26c8320e9e0c7aba2fd8c14649921cc8f60b7a8425448a47acb39146f'
    }

    /**
     *  Upcoming paras instantiation arguments.
     * 
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    get asV9340(): ParasUpcomingParasGenesisStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  Upcoming paras instantiation arguments.
 */
export interface ParasUpcomingParasGenesisStorageV9110 {
    get(key: number): Promise<(v9110.ParaGenesisArgs | undefined)>
    getAll(): Promise<v9110.ParaGenesisArgs[]>
    getMany(keys: number[]): Promise<(v9110.ParaGenesisArgs | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.ParaGenesisArgs][]>
    getPairs(key: number): Promise<[k: number, v: v9110.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.ParaGenesisArgs][]>
}

/**
 *  Upcoming paras instantiation arguments.
 * 
 *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
 *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
 */
export interface ParasUpcomingParasGenesisStorageV9340 {
    get(key: number): Promise<(v9340.ParaGenesisArgs | undefined)>
    getAll(): Promise<v9340.ParaGenesisArgs[]>
    getMany(keys: number[]): Promise<(v9340.ParaGenesisArgs | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9340.ParaGenesisArgs][]>
    getPairs(key: number): Promise<[k: number, v: v9340.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9340.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9340.ParaGenesisArgs][]>
}

export class ParasUpcomingUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpcomingUpgrades'
    }

    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    get asV9110(): ParasUpcomingUpgradesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
 *  upgrade and at which relay-chain block it is expected at.
 * 
 *  Ordered ascending by block number.
 */
export interface ParasUpcomingUpgradesStorageV9110 {
    get(): Promise<[number, number][]>
}

export class ParasUpgradeCooldownsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeCooldowns'
    }

    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    get asV9110(): ParasUpgradeCooldownsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
 * 
 *  Ordered ascending by block number.
 */
export interface ParasUpgradeCooldownsStorageV9110 {
    get(): Promise<[number, number][]>
}

export class ParasUpgradeGoAheadSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeGoAheadSignal'
    }

    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
     * 
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
     *  can switch its upgrade function. As soon as the parachain's block is included, the value
     *  gets reset to `None`.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '786a03d0aa558686ca05fde11178abf8294fdf543e7653a81ffbb6a04bbe926d'
    }

    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
     * 
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
     *  can switch its upgrade function. As soon as the parachain's block is included, the value
     *  gets reset to `None`.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get asV9110(): ParasUpgradeGoAheadSignalStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
 * 
 *  This value is absent when there are no upgrades scheduled or during the time the relay chain
 *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
 *  can switch its upgrade function. As soon as the parachain's block is included, the value
 *  gets reset to `None`.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface ParasUpgradeGoAheadSignalStorageV9110 {
    get(key: number): Promise<(v9110.V1UpgradeGoAhead | undefined)>
    getAll(): Promise<v9110.V1UpgradeGoAhead[]>
    getMany(keys: number[]): Promise<(v9110.V1UpgradeGoAhead | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.V1UpgradeGoAhead][]>
    getPairs(key: number): Promise<[k: number, v: v9110.V1UpgradeGoAhead][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.V1UpgradeGoAhead][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.V1UpgradeGoAhead][]>
}

export class ParasUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     * 
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '62e7d5f232f72916126ae45cffcab9e9fdfc355aeb79076a51f4aebd84afeb61'
    }

    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     * 
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get asV9110(): ParasUpgradeRestrictionSignalStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  This is used by the relay-chain to communicate that there are restrictions for performing
 *  an upgrade for this parachain.
 * 
 *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
 *  potential use case is when we want to perform some maintenance (such as storage migration)
 *  we could restrict upgrades to make the process simpler.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface ParasUpgradeRestrictionSignalStorageV9110 {
    get(key: number): Promise<(v9110.V1UpgradeRestriction | undefined)>
    getAll(): Promise<v9110.V1UpgradeRestriction[]>
    getMany(keys: number[]): Promise<(v9110.V1UpgradeRestriction | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9110.V1UpgradeRestriction][]>
    getPairs(key: number): Promise<[k: number, v: v9110.V1UpgradeRestriction][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9110.V1UpgradeRestriction][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9110.V1UpgradeRestriction][]>
}

export class ParasDisputesBackersOnDisputesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'BackersOnDisputes'
    }

    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '0927addfecff9f8363e42d134edf2ce1156c2efdf83e698127f2c98bf17267de'
    }

    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    get asV9420(): ParasDisputesBackersOnDisputesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Backing votes stored for each dispute.
 *  This storage is used for slashing.
 */
export interface ParasDisputesBackersOnDisputesStorageV9420 {
    get(key1: number, key2: Uint8Array): Promise<(number[] | undefined)>
    getAll(): Promise<number[][]>
    getMany(keys: [number, Uint8Array][]): Promise<(number[] | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
}

export class ParasDisputesDisputesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Disputes'
    }

    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '33f09b62f3e474c60f6ef89b56ae30d73cc40bae8a2b340cfd6d7548cf01234e'
    }

    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    get asV9180(): ParasDisputesDisputesStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  All ongoing or concluded disputes for the last several sessions.
 */
export interface ParasDisputesDisputesStorageV9180 {
    get(key1: number, key2: Uint8Array): Promise<(v9180.V1DisputeState | undefined)>
    getAll(): Promise<v9180.V1DisputeState[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v9180.V1DisputeState | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v9180.V1DisputeState][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v9180.V1DisputeState][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v9180.V1DisputeState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v9180.V1DisputeState][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v9180.V1DisputeState][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v9180.V1DisputeState][]>
}

export class ParasDisputesFrozenStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Frozen'
    }

    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '19526a9e9cd1a1912441bd5e7765970e1b7352c8a5ea7e7769fa36f8d2329f24'
    }

    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    get asV9180(): ParasDisputesFrozenStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
 *  the chain will not accept any new parachain blocks for backing or inclusion,
 *  and its value indicates the last valid block number in the chain.
 *  It can only be set back to `None` by governance intervention.
 */
export interface ParasDisputesFrozenStorageV9180 {
    get(): Promise<(number | undefined)>
}

export class ParasDisputesIncludedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Included'
    }

    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '6c6235f5b0f971e080667bebe750cb6adb3a9877df221e67b3dc7a4419cdc5c1'
    }

    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    get asV9180(): ParasDisputesIncludedStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  All included blocks on the chain, as well as the block number in this chain that
 *  should be reverted back to if the candidate is disputed and determined to be invalid.
 */
export interface ParasDisputesIncludedStorageV9180 {
    get(key1: number, key2: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ParasDisputesLastPrunedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'LastPrunedSession'
    }

    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    get asV9180(): ParasDisputesLastPrunedSessionStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  The last pruned session, if any. All data stored by this module
 *  references sessions.
 */
export interface ParasDisputesLastPrunedSessionStorageV9180 {
    get(): Promise<(number | undefined)>
}

export class ParasDisputesSpamSlotsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'SpamSlots'
    }

    /**
     *  Maps session indices to a vector indicating the number of potentially-spam disputes
     *  each validator is participating in. Potentially-spam disputes are remote disputes which have
     *  fewer than `byzantine_threshold + 1` validators.
     * 
     *  The i'th entry of the vector corresponds to the i'th validator in the session.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '33935a30bb4f42bcb0fad1e2afd25d0dcba6d422da5f77a7e62202296371179d'
    }

    /**
     *  Maps session indices to a vector indicating the number of potentially-spam disputes
     *  each validator is participating in. Potentially-spam disputes are remote disputes which have
     *  fewer than `byzantine_threshold + 1` validators.
     * 
     *  The i'th entry of the vector corresponds to the i'th validator in the session.
     */
    get asV9180(): ParasDisputesSpamSlotsStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  Maps session indices to a vector indicating the number of potentially-spam disputes
 *  each validator is participating in. Potentially-spam disputes are remote disputes which have
 *  fewer than `byzantine_threshold + 1` validators.
 * 
 *  The i'th entry of the vector corresponds to the i'th validator in the session.
 */
export interface ParasDisputesSpamSlotsStorageV9180 {
    get(key: number): Promise<(number[] | undefined)>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<(number[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class ParasSharedActiveValidatorIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'ActiveValidatorIndices'
    }

    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    get asV9110(): ParasSharedActiveValidatorIndicesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  All the validators actively participating in parachain consensus.
 *  Indices are into the broader validator set.
 */
export interface ParasSharedActiveValidatorIndicesStorageV9110 {
    get(): Promise<number[]>
}

export class ParasSharedActiveValidatorKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'ActiveValidatorKeys'
    }

    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    get asV9110(): ParasSharedActiveValidatorKeysStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The parachain attestation keys of the validators actively participating in parachain consensus.
 *  This should be the same length as `ActiveValidatorIndices`.
 */
export interface ParasSharedActiveValidatorKeysStorageV9110 {
    get(): Promise<Uint8Array[]>
}

export class ParasSharedCurrentSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'CurrentSessionIndex'
    }

    /**
     *  The current session index.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current session index.
     */
    get asV9110(): ParasSharedCurrentSessionIndexStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The current session index.
 */
export interface ParasSharedCurrentSessionIndexStorageV9110 {
    get(): Promise<number>
}

export class PhragmenElectionCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The present candidate list. Sorted based on account-id. A current member or runner-up
     *  can never enter this vector and is always implicitly assumed to be a candidate.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The present candidate list. Sorted based on account-id. A current member or runner-up
     *  can never enter this vector and is always implicitly assumed to be a candidate.
     */
    get asV0(): PhragmenElectionCandidatesStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV28(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV28(): PhragmenElectionCandidatesStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  The present candidate list. Sorted based on account-id. A current member or runner-up
 *  can never enter this vector and is always implicitly assumed to be a candidate.
 */
export interface PhragmenElectionCandidatesStorageV0 {
    get(): Promise<Uint8Array[]>
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface PhragmenElectionCandidatesStorageV28 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class PhragmenElectionElectionRoundsStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'ElectionRounds'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get asV0(): PhragmenElectionElectionRoundsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface PhragmenElectionElectionRoundsStorageV0 {
    get(): Promise<number>
}

export class PhragmenElectionMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current elected membership. Sorted based on account id.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The current elected membership. Sorted based on account id.
     */
    get asV0(): PhragmenElectionMembersStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV28(): PhragmenElectionMembersStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  The current elected membership. Sorted based on account id.
 */
export interface PhragmenElectionMembersStorageV0 {
    get(): Promise<[Uint8Array, bigint][]>
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface PhragmenElectionMembersStorageV28 {
    get(): Promise<v28.SeatHolder[]>
}

export class PhragmenElectionRunnersUpStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'RunnersUp'
    }

    /**
     *  The current runners_up. Sorted based on low to high merit (worse to best runner).
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The current runners_up. Sorted based on low to high merit (worse to best runner).
     */
    get asV0(): PhragmenElectionRunnersUpStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get asV28(): PhragmenElectionRunnersUpStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  The current runners_up. Sorted based on low to high merit (worse to best runner).
 */
export interface PhragmenElectionRunnersUpStorageV0 {
    get(): Promise<[Uint8Array, bigint][]>
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface PhragmenElectionRunnersUpStorageV28 {
    get(): Promise<v28.SeatHolder[]>
}

export class PhragmenElectionVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash
     */
    get isV0(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash
     */
    get asV0(): PhragmenElectionVotingStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get asV28(): PhragmenElectionVotingStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash
 */
export interface PhragmenElectionVotingStorageV0 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface PhragmenElectionVotingStorageV28 {
    get(key: Uint8Array): Promise<v28.Voter>
    getAll(): Promise<v28.Voter[]>
    getMany(keys: Uint8Array[]): Promise<v28.Voter[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.Voter][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.Voter][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.Voter][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.Voter][]>
}

export class PollTotalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Poll'
    }

    protected getName() {
        return 'Totals'
    }

    /**
     *  The total balances voting for each option.
     */
    get isV14(): boolean {
        return this.getTypeHash() === '135a6cbc0ded63a5d703220bcedfbd54fd63ffaafe5d30517d9b3ab90eb6abeb'
    }

    /**
     *  The total balances voting for each option.
     */
    get asV14(): PollTotalsStorageV14 {
        assert(this.isV14)
        return this as any
    }
}

/**
 *  The total balances voting for each option.
 */
export interface PollTotalsStorageV14 {
    get(): Promise<bigint[]>
}

export class PollVoteOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Poll'
    }

    protected getName() {
        return 'VoteOf'
    }

    /**
     *  Votes, so far.
     */
    get isV14(): boolean {
        return this.getTypeHash() === '556bcc7a0702fb9193dff0d48dfe3582c15ce629af8b6d60e506a39e7502b651'
    }

    /**
     *  Votes, so far.
     */
    get asV14(): PollVoteOfStorageV14 {
        assert(this.isV14)
        return this as any
    }
}

/**
 *  Votes, so far.
 */
export interface PollVoteOfStorageV14 {
    get(key: Uint8Array): Promise<[boolean[], bigint]>
    getAll(): Promise<[boolean[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[boolean[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [boolean[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [boolean[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [boolean[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [boolean[], bigint]][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV9170(): PreimagePreimageForStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    get isV9340(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV9340(): PreimagePreimageForStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV9170 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export interface PreimagePreimageForStorageV9340 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9170(): PreimageStatusForStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9340(): PreimageStatusForStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.RequestStatus | undefined)>
    getAll(): Promise<v9170.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.RequestStatus | undefined)>
    getAll(): Promise<v9340.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.RequestStatus][]>
}

export class ProxyAnnouncementsStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Announcements'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get isV23(): boolean {
        return this.getTypeHash() === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get asV23(): ProxyAnnouncementsStorageV23 {
        assert(this.isV23)
        return this as any
    }
}

/**
 *  The announcements made by the proxy (key).
 */
export interface ProxyAnnouncementsStorageV23 {
    get(key: Uint8Array): Promise<[v23.ProxyAnnouncement[], bigint]>
    getAll(): Promise<[v23.ProxyAnnouncement[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v23.ProxyAnnouncement[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v23.ProxyAnnouncement[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v23.ProxyAnnouncement[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v23.ProxyAnnouncement[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v23.ProxyAnnouncement[], bigint]][]>
}

export class ProxyProxiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Proxies'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV5(): boolean {
        return this.getTypeHash() === '9c5fb06437a16b50744d03fa923cb642eaf13acd367e1f02fbf1154bf6434888'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV5(): ProxyProxiesStorageV5 {
        assert(this.isV5)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV23(): boolean {
        return this.getTypeHash() === 'dcc43fb5be148459bf99da0f7ae854a75313ebf2bb565fda10c1323b5f351607'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV23(): ProxyProxiesStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'da8c78ecc0328cf7e600e99d445f8a44dbb00eda73841a05b5dc279b7c54a440'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV9110(): ProxyProxiesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '7214be83d1954e5e864e6d3209c50dfc4f2c4733435a38ff4952d69a03e548f7'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV9420(): ProxyProxiesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV5 {
    get(key: Uint8Array): Promise<[[Uint8Array, v5.ProxyType][], bigint]>
    getAll(): Promise<[[Uint8Array, v5.ProxyType][], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[[Uint8Array, v5.ProxyType][], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [[Uint8Array, v5.ProxyType][], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [[Uint8Array, v5.ProxyType][], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [[Uint8Array, v5.ProxyType][], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [[Uint8Array, v5.ProxyType][], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV23 {
    get(key: Uint8Array): Promise<[v23.ProxyDefinition[], bigint]>
    getAll(): Promise<[v23.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v23.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v23.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v23.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v23.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v23.ProxyDefinition[], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV9110 {
    get(key: Uint8Array): Promise<[v9110.ProxyDefinition[], bigint]>
    getAll(): Promise<[v9110.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v9110.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v9110.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v9110.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v9110.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v9110.ProxyDefinition[], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV9420 {
    get(key: Uint8Array): Promise<[v9420.ProxyDefinition[], bigint]>
    getAll(): Promise<[v9420.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v9420.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v9420.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v9420.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v9420.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v9420.ProxyDefinition[], bigint]][]>
}

export class PurchaseAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Purchase'
    }

    protected getName() {
        return 'Accounts'
    }

    get isV15(): boolean {
        return this.getTypeHash() === '411d44a4f64dba57f8a6d3651214069bbdcd6f4c62949f18eb134bd59539388d'
    }

    get asV15(): PurchaseAccountsStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

export interface PurchaseAccountsStorageV15 {
    get(key: Uint8Array): Promise<v15.AccountStatus>
    getAll(): Promise<v15.AccountStatus[]>
    getMany(keys: Uint8Array[]): Promise<v15.AccountStatus[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v15.AccountStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v15.AccountStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v15.AccountStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v15.AccountStatus][]>
}

export class PurchasePaymentAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Purchase'
    }

    protected getName() {
        return 'PaymentAccount'
    }

    get isV15(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    get asV15(): PurchasePaymentAccountStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

export interface PurchasePaymentAccountStorageV15 {
    get(): Promise<Uint8Array>
}

export class PurchaseStatementStorage extends StorageBase {
    protected getPrefix() {
        return 'Purchase'
    }

    protected getName() {
        return 'Statement'
    }

    get isV15(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    get asV15(): PurchaseStatementStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

export interface PurchaseStatementStorageV15 {
    get(): Promise<Uint8Array>
}

export class PurchaseUnlockBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'Purchase'
    }

    protected getName() {
        return 'UnlockBlock'
    }

    get isV15(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV15(): PurchaseUnlockBlockStorageV15 {
        assert(this.isV15)
        return this as any
    }
}

export interface PurchaseUnlockBlockStorageV15 {
    get(): Promise<number>
}

export class RandomnessCollectiveFlipRandomMaterialStorage extends StorageBase {
    protected getPrefix() {
        return 'RandomnessCollectiveFlip'
    }

    protected getName() {
        return 'RandomMaterial'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asV0(): RandomnessCollectiveFlipRandomMaterialStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class ReferendaDecidingCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'DecidingCount'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '1b8a61a1a77f8c4a893b856d3455f1f9ced6f6e4bfe87bb8b1390b14318a4333'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get asV9420(): ReferendaDecidingCountStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The number of referenda being decided currently.
 */
export interface ReferendaDecidingCountStorageV9420 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ReferendaMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asV9420(): ReferendaMetadataOfStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The metadata is a general information concerning the referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface ReferendaMetadataOfStorageV9420 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ReferendaReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV9420(): ReferendaReferendumCountStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendaReferendumCountStorageV9420 {
    get(): Promise<number>
}

export class ReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '62e43207bb14aa843d5a631a4578a8257cad6749266abe27d20e60d3740e05cb'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9420(): ReferendaReferendumInfoForStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9420 {
    get(key: number): Promise<(v9420.Type_617 | undefined)>
    getAll(): Promise<v9420.Type_617[]>
    getMany(keys: number[]): Promise<(v9420.Type_617 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.Type_617][]>
    getPairs(key: number): Promise<[k: number, v: v9420.Type_617][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.Type_617][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.Type_617][]>
}

export class ReferendaTrackQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'TrackQueue'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'd59fac77bd4348bf0179a7e6c5ac239a8b8781c07a1524886ec03b3194de72e3'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get asV9420(): ReferendaTrackQueueStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 * 
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface ReferendaTrackQueueStorageV9420 {
    get(key: number): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: number[]): Promise<[number, bigint][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, bigint][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
}

export class RegistrarActiveStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Active'
    }

    /**
     *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
     *  a particular collator has already been chosen for the next block, and no other collator
     *  may provide the block. In this case we allow the possibility of the combination being
     *  retried in a later block, expressed by `Retriable`.
     * 
     *  Ordered by ParaId.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '600a0ba133041dba38285984327d7c4afc137118681877b4a1a71e1ff612c44c'
    }

    /**
     *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
     *  a particular collator has already been chosen for the next block, and no other collator
     *  may provide the block. In this case we allow the possibility of the combination being
     *  retried in a later block, expressed by `Retriable`.
     * 
     *  Ordered by ParaId.
     */
    get asV0(): RegistrarActiveStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
 *  a particular collator has already been chosen for the next block, and no other collator
 *  may provide the block. In this case we allow the possibility of the combination being
 *  retried in a later block, expressed by `Retriable`.
 * 
 *  Ordered by ParaId.
 */
export interface RegistrarActiveStorageV0 {
    get(): Promise<[number, ([Uint8Array, v0.Retriable] | undefined)][]>
}

export class RegistrarDebtorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Debtors'
    }

    /**
     *  Users who have paid a parathread's deposit
     */
    get isV0(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Users who have paid a parathread's deposit
     */
    get asV0(): RegistrarDebtorsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Users who have paid a parathread's deposit
 */
export interface RegistrarDebtorsStorageV0 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class RegistrarNextFreeIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'NextFreeId'
    }

    /**
     *  The next unused ParaId value. Start this high in order to keep low numbers for
     *  system-level chains.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next unused ParaId value. Start this high in order to keep low numbers for
     *  system-level chains.
     */
    get asV0(): RegistrarNextFreeIdStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The next unused ParaId value. Start this high in order to keep low numbers for
 *  system-level chains.
 */
export interface RegistrarNextFreeIdStorageV0 {
    get(): Promise<number>
}

export class RegistrarNextFreeParaIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'NextFreeParaId'
    }

    /**
     *  The next free `ParaId`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free `ParaId`.
     */
    get asV9110(): RegistrarNextFreeParaIdStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The next free `ParaId`.
 */
export interface RegistrarNextFreeParaIdStorageV9110 {
    get(): Promise<number>
}

export class RegistrarParachainsStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Parachains'
    }

    get isV0(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    get asV0(): RegistrarParachainsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

export interface RegistrarParachainsStorageV0 {
    get(): Promise<number[]>
}

export class RegistrarParasStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Paras'
    }

    /**
     *  Map of all registered parathreads/chains.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a66817b4476764416e1f466dedf67727ff0df383806cc68dc6be044679888b0c'
    }

    /**
     *  Map of all registered parathreads/chains.
     */
    get asV0(): RegistrarParasStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Map of all registered parathreads/chains.
 */
export interface RegistrarParasStorageV0 {
    get(key: number): Promise<(v0.ParaInfo | undefined)>
    getAll(): Promise<v0.ParaInfo[]>
    getMany(keys: number[]): Promise<(v0.ParaInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v0.ParaInfo][]>
    getPairs(key: number): Promise<[k: number, v: v0.ParaInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v0.ParaInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v0.ParaInfo][]>
}

export class RegistrarPendingSwapStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'PendingSwap'
    }

    /**
     *  Pending swap operations.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  Pending swap operations.
     */
    get asV0(): RegistrarPendingSwapStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Pending swap operations.
 */
export interface RegistrarPendingSwapStorageV0 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class RegistrarRetryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'RetryQueue'
    }

    /**
     *  The current queue for parathreads that should be retried.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '2d000462de6745859448e67b1ebf7fd04f4fb61f49e280524752c34dd9b541f8'
    }

    /**
     *  The current queue for parathreads that should be retried.
     */
    get asV0(): RegistrarRetryQueueStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current queue for parathreads that should be retried.
 */
export interface RegistrarRetryQueueStorageV0 {
    get(): Promise<[number, Uint8Array][][]>
}

export class RegistrarSelectedThreadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'SelectedThreads'
    }

    /**
     *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
     *  ascending para ID. There can be no duplicates of para ID in each list item.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '2d000462de6745859448e67b1ebf7fd04f4fb61f49e280524752c34dd9b541f8'
    }

    /**
     *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
     *  ascending para ID. There can be no duplicates of para ID in each list item.
     */
    get asV0(): RegistrarSelectedThreadsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
 *  ascending para ID. There can be no duplicates of para ID in each list item.
 */
export interface RegistrarSelectedThreadsStorageV0 {
    get(): Promise<[number, Uint8Array][][]>
}

export class RegistrarThreadCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'ThreadCount'
    }

    /**
     *  The number of threads to schedule per block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of threads to schedule per block.
     */
    get asV0(): RegistrarThreadCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The number of threads to schedule per block.
 */
export interface RegistrarThreadCountStorageV0 {
    get(): Promise<number>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '137265cc74c43f392fda9736dc8a2fe5e1fc0e6304c9ab67066ccc624e66dbfa'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV0(): SchedulerAgendaStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV5(): boolean {
        return this.getTypeHash() === '59377d57e4469c2f2c6610591f37f4a5da30aff01b9c04903455d0f7aaf1815b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV5(): SchedulerAgendaStorageV5 {
        assert(this.isV5)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV6(): boolean {
        return this.getTypeHash() === '69a9a5954963971027522d117bb8935b74063c44a851f374ede2fa5f6e4cedaa'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV6(): SchedulerAgendaStorageV6 {
        assert(this.isV6)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV7(): boolean {
        return this.getTypeHash() === 'ed6d2d7e4e4d1c7d62e990e2e6115885e6138ceceefcdb756a5ee1435e41882b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV7(): SchedulerAgendaStorageV7 {
        assert(this.isV7)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '26b8e8674c6c2bbf0ed0cb45b12e0812cc3ad81ba92f3d1c7b30fc65f0b90489'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9(): SchedulerAgendaStorageV9 {
        assert(this.isV9)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV10(): boolean {
        return this.getTypeHash() === '3486b8f7c08d86ad025b808fb6c4ba4179f67ef8727c34ad7e0f23d136a55a0b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV10(): SchedulerAgendaStorageV10 {
        assert(this.isV10)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV11(): boolean {
        return this.getTypeHash() === '777e1a8f93bb627079846474817a9e9d70ad3a720250dbac293850cbeccfeb51'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV11(): SchedulerAgendaStorageV11 {
        assert(this.isV11)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV13(): boolean {
        return this.getTypeHash() === '14483d6dd2a4685d5045d36cb0f0dce8c7f152ceee5fd8f081717bb1ab07e9ed'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV13(): SchedulerAgendaStorageV13 {
        assert(this.isV13)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV14(): boolean {
        return this.getTypeHash() === '0edeb70b15d2d9ba0f2363ed34c5b4b03620cb833a072984296defb0449be98b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV14(): SchedulerAgendaStorageV14 {
        assert(this.isV14)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '2f41b53179d2314a549d0f71381cc85afca3cf2a51bc517a6cb22b9713188364'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV15(): SchedulerAgendaStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV17(): boolean {
        return this.getTypeHash() === 'c64b3390bc71baf856d4fd25e79ebb45974849051329a8c93ee54d784c5489ba'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV17(): SchedulerAgendaStorageV17 {
        assert(this.isV17)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV18(): boolean {
        return this.getTypeHash() === '23e6be131dfece266d869520d1eb0af04a90b777461026b596abce8815a20d33'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV18(): SchedulerAgendaStorageV18 {
        assert(this.isV18)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV23(): boolean {
        return this.getTypeHash() === '3be537cd9c3d4fda0f6aea8532f7b6e08ae6a1e86689c505f02f7d11aac8c8e0'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV23(): SchedulerAgendaStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV24(): boolean {
        return this.getTypeHash() === 'a2966488772745dd1e70d2d946f9f81351df272b238a21ddbe98444d63d5eb13'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV24(): SchedulerAgendaStorageV24 {
        assert(this.isV24)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f707f2351852a46fa016ebb19670f5ce34c9c0971b6eb12a43d41b91dcafad2d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV25(): SchedulerAgendaStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV26(): boolean {
        return this.getTypeHash() === '52ba10a3b8101528abc7aff609c4c87cfd146c8f8a347f3d636cd32a9ed7a251'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV26(): SchedulerAgendaStorageV26 {
        assert(this.isV26)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '18c9edc6a4434bc8cad764f26f05d55d7a07b6b09f317e7305341c4ebd8756cd'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV28(): SchedulerAgendaStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV29(): boolean {
        return this.getTypeHash() === '0d51283fef0df83a340213e8430eb9986fa0b8ab6e9182cfe5e3345468f474a1'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV29(): SchedulerAgendaStorageV29 {
        assert(this.isV29)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '320779b3cf17a6f8a8391d6f744c2635b01dc6d775571593f982b51793ebc95f'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV30(): SchedulerAgendaStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '006c3fb74d3a4728e72b27af44734b21858162c7ac79ab4665852e3eaafe931a'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9050(): SchedulerAgendaStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === 'ab5f8031fd87c931d9323e42aee1256afe96bda99793d35830a2c425d60b7be2'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9080(): SchedulerAgendaStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '631fe1c253c2905fdba0a763f2a86f0b71751b2404efc1af7748d89b075b0c8d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9090(): SchedulerAgendaStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '9fae0371ff9616dc6827cec589fc10c75d556d57839f35db272957c14b5d3e35'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9100(): SchedulerAgendaStorageV9100 {
        assert(this.isV9100)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '85b599d4ae1dc0f91974ee60d44864ca2db5c36ad139e3f57fb7d831a57376a7'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9110(): SchedulerAgendaStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === 'dfdabf8fa8bc843dedca7515b30321eec6fb07619a61d6ca2f93f9c5e836a0a4'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9140(): SchedulerAgendaStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '7b7db690c88f651b7349fdcf3e2e7c85181c457a1a3edcd3fc96c24c1d79a07b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9170(): SchedulerAgendaStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '63dd6e321d10a04b171da96c499e0e7e647ced81b5a2591616bc6244af85ace0'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9180(): SchedulerAgendaStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '2aafe98d073755bc58bf0aea7a17c241f188c346630ebd71708d1b3ddbe882dc'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9190(): SchedulerAgendaStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '78438f94faf26857f8fc69dd0942850ec3985e5a5b367a532ee774f5c6366328'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9220(): SchedulerAgendaStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '323bac7ff8bc68fca5124a7eb2772dd0a3c05d9f8f8dd557810ae220a888f8db'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9230(): SchedulerAgendaStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === 'cfefe20d14eaf5f8fdf3af2c62fb22eee42660af3c97c6f6a2edafd551aad379'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9250(): SchedulerAgendaStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9270(): boolean {
        return this.getTypeHash() === 'd0fe8ef541a29657d4ade3bf22168b1916d14c4accce8ea1eb49540d4e02ca1c'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9270(): SchedulerAgendaStorageV9270 {
        assert(this.isV9270)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '29fb51804f53a1e974f5ceb377dbf1d7b3548d046ba8e06ac10676f15376d6c7'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9280(): SchedulerAgendaStorageV9280 {
        assert(this.isV9280)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === '818798b923b6d4a2197956037a883c4322af33cfa25ff04428133e2c15db775d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9291(): SchedulerAgendaStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === 'f324da02b202c6c696e5479deaccb2ff352ba46f69ebf94bebe0060b61656f91'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9300(): SchedulerAgendaStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'e0e1608b6ee6846ed0b2a5f578bfb47ac648f159acbe4a734356ac455f7f2bd3'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9340(): SchedulerAgendaStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '33bce084e7ea1f189d72321e0b66da63c88a2508005d0ce7fc3847924a86a243'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9370(): SchedulerAgendaStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'f7377681d0e20a4561c7151b6ffffe30bc4b46f7ba000bf224de1a6a03646a89'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9420(): SchedulerAgendaStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV0 {
    get(key: number): Promise<(v0.Scheduled | undefined)[]>
    getAll(): Promise<(v0.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v0.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v0.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v0.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v0.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v0.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV5 {
    get(key: number): Promise<(v5.Scheduled | undefined)[]>
    getAll(): Promise<(v5.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v5.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v5.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v5.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v5.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v5.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV6 {
    get(key: number): Promise<(v6.Scheduled | undefined)[]>
    getAll(): Promise<(v6.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v6.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v6.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v6.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v6.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v6.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV7 {
    get(key: number): Promise<(v7.Scheduled | undefined)[]>
    getAll(): Promise<(v7.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v7.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v7.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v7.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v7.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v7.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9 {
    get(key: number): Promise<(v9.Scheduled | undefined)[]>
    getAll(): Promise<(v9.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV10 {
    get(key: number): Promise<(v10.Scheduled | undefined)[]>
    getAll(): Promise<(v10.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v10.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v10.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v10.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v10.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v10.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV11 {
    get(key: number): Promise<(v11.Scheduled | undefined)[]>
    getAll(): Promise<(v11.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v11.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v11.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v11.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v11.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v11.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV13 {
    get(key: number): Promise<(v13.Scheduled | undefined)[]>
    getAll(): Promise<(v13.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v13.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v13.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v13.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v13.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v13.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV14 {
    get(key: number): Promise<(v14.Scheduled | undefined)[]>
    getAll(): Promise<(v14.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v14.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v14.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v14.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v14.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v14.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV15 {
    get(key: number): Promise<(v15.Scheduled | undefined)[]>
    getAll(): Promise<(v15.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v15.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v15.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v15.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v15.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v15.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV17 {
    get(key: number): Promise<(v17.Scheduled | undefined)[]>
    getAll(): Promise<(v17.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v17.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v17.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v17.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v17.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v17.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV18 {
    get(key: number): Promise<(v18.Scheduled | undefined)[]>
    getAll(): Promise<(v18.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v18.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v18.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v18.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v18.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v18.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV23 {
    get(key: number): Promise<(v23.Scheduled | undefined)[]>
    getAll(): Promise<(v23.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v23.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v23.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v23.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v23.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v23.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV24 {
    get(key: number): Promise<(v24.Scheduled | undefined)[]>
    getAll(): Promise<(v24.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v24.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v24.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v24.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v24.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v24.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV25 {
    get(key: number): Promise<(v25.Scheduled | undefined)[]>
    getAll(): Promise<(v25.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v25.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v25.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v25.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v25.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v25.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV26 {
    get(key: number): Promise<(v26.Scheduled | undefined)[]>
    getAll(): Promise<(v26.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v26.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v26.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v26.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v26.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v26.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV28 {
    get(key: number): Promise<(v28.Scheduled | undefined)[]>
    getAll(): Promise<(v28.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v28.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v28.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v28.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v28.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v28.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV29 {
    get(key: number): Promise<(v29.Scheduled | undefined)[]>
    getAll(): Promise<(v29.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v29.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v29.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v29.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v29.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v29.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV30 {
    get(key: number): Promise<(v30.Scheduled | undefined)[]>
    getAll(): Promise<(v30.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v30.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v30.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v30.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v30.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v30.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9050 {
    get(key: number): Promise<(v9050.Scheduled | undefined)[]>
    getAll(): Promise<(v9050.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9050.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9050.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9050.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9050.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9050.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9080 {
    get(key: number): Promise<(v9080.Scheduled | undefined)[]>
    getAll(): Promise<(v9080.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9080.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9080.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9080.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9080.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9080.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9090 {
    get(key: number): Promise<(v9090.Scheduled | undefined)[]>
    getAll(): Promise<(v9090.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9090.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9090.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9090.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9090.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9090.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9100 {
    get(key: number): Promise<(v9100.Scheduled | undefined)[]>
    getAll(): Promise<(v9100.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9100.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9100.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9100.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9100.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9100.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9110 {
    get(key: number): Promise<(v9110.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v9110.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9110.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9110.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9110.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9110.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9110.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9140 {
    get(key: number): Promise<(v9140.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v9140.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9140.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9140.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9140.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9140.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9140.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9170 {
    get(key: number): Promise<(v9170.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9170.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9170.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9170.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9170.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9170.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9170.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9180 {
    get(key: number): Promise<(v9180.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9180.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9180.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9180.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9180.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9180.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9180.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9190 {
    get(key: number): Promise<(v9190.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9190.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9190.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9190.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9190.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9190.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9190.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9220 {
    get(key: number): Promise<(v9220.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9220.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9220.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9220.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9220.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9220.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9220.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9230 {
    get(key: number): Promise<(v9230.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9230.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9230.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9230.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9230.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9230.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9230.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9250 {
    get(key: number): Promise<(v9250.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9250.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9250.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9250.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9250.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9250.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9250.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9270 {
    get(key: number): Promise<(v9270.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9270.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9270.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9270.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9270.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9270.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9270.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9280 {
    get(key: number): Promise<(v9280.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9280.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9280.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9280.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9280.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9280.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9280.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9291 {
    get(key: number): Promise<(v9291.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9291.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9291.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9291.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9291.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9291.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9291.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9300 {
    get(key: number): Promise<(v9300.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9300.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9300.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9340 {
    get(key: number): Promise<(v9340.Scheduled | undefined)[]>
    getAll(): Promise<(v9340.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9340.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9340.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9340.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9340.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9340.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9370 {
    get(key: number): Promise<(v9370.Scheduled | undefined)[]>
    getAll(): Promise<(v9370.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9370.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9370.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9370.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9370.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9370.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9420 {
    get(key: number): Promise<(v9420.Scheduled | undefined)[]>
    getAll(): Promise<(v9420.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9420.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9420.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9420.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9420.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9420.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isV9340(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asV9340(): SchedulerIncompleteSinceStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageV9340 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get asV0(): SchedulerLookupStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asV9340(): SchedulerLookupStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface SchedulerLookupStorageV0 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageV9340 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SchedulerStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV14(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV14(): SchedulerStorageVersionStorageV14 {
        assert(this.isV14)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV9110(): SchedulerStorageVersionStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface SchedulerStorageVersionStorageV14 {
    get(): Promise<v14.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface SchedulerStorageVersionStorageV9110 {
    get(): Promise<v9110.Releases>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV0(): SessionCurrentIndexStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV0 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get asV0(): SessionDisabledValidatorsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The set is cleared when `on_session_ending` returns a new set of identities.
 */
export interface SessionDisabledValidatorsStorageV0 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '1c05e6d248d0d3f2ef2467d3e23031e7885220321b761d4eda9deda33530daa1'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV0(): SessionKeyOwnerStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV9110(): SessionKeyOwnerStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV0 {
    get(key: [number, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key: [number, Uint8Array]): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [number, Uint8Array]): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key: [number, Uint8Array]): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [number, Uint8Array]): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV9110 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '956ce8701e71dd9d50a09047fbdde932b038f3c8a9159f64b2a827684dbfb4be'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV0(): SessionNextKeysStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '863ab736aad303dae42a86573d0940425a7dc5f86df4507bd2046c94a92485c6'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV28(): SessionNextKeysStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '3c6fcbefe7410f15bad0495b3f73dc8ed831dd09252a3ac11e3510578bfb8ced'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV9110(): SessionNextKeysStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV0 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV28 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.SessionKeys | undefined)>
    getAll(): Promise<v9110.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV0(): SessionQueuedChangedStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV0 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '60e9ef6d859b324f840841982876d81b2b58f08ea583a6d748cb5f02c048b4b6'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV0(): SessionQueuedKeysStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '8271d85dbd65415701fb3c54136c0537af5b065e3bebb0d1887ef75f6d0a349b'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV28(): SessionQueuedKeysStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '1453d2146c195e5be6172441e0d99613270f104e70759afa2ff52f346b3ea040'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV9110(): SessionQueuedKeysStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV0 {
    get(): Promise<[Uint8Array, [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV28 {
    get(): Promise<[Uint8Array, [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV9110 {
    get(): Promise<[Uint8Array, v9110.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV0(): SessionValidatorsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class SlotsAuctionCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'AuctionCounter'
    }

    /**
     *  The number of auctions that have been started so far.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of auctions that have been started so far.
     */
    get asV0(): SlotsAuctionCounterStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The number of auctions that have been started so far.
 */
export interface SlotsAuctionCounterStorageV0 {
    get(): Promise<number>
}

export class SlotsAuctionInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'AuctionInfo'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get asV0(): SlotsAuctionInfoStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface SlotsAuctionInfoStorageV0 {
    get(): Promise<([number, number] | undefined)>
}

export class SlotsDepositsStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Deposits'
    }

    /**
     *  Various amounts on deposit for each parachain. An entry in `ManagedIds` implies a non-
     *  default entry here.
     * 
     *  The actual amount locked on its behalf at any time is the maximum item in this list. The
     *  first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this module is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more zeroes to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '0c54571527d0756fb3f5933fbd2b7d0b81c2e3213e26e9771065002f7dc8bbbc'
    }

    /**
     *  Various amounts on deposit for each parachain. An entry in `ManagedIds` implies a non-
     *  default entry here.
     * 
     *  The actual amount locked on its behalf at any time is the maximum item in this list. The
     *  first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this module is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more zeroes to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     */
    get asV0(): SlotsDepositsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Various amounts on deposit for each parachain. An entry in `ManagedIds` implies a non-
 *  default entry here.
 * 
 *  The actual amount locked on its behalf at any time is the maximum item in this list. The
 *  first item in the list is the amount locked for the current Lease Period. Following
 *  items are for the subsequent lease periods.
 * 
 *  The default value (an empty list) implies that the parachain no longer exists (or never
 *  existed) as far as this module is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more zeroes to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 */
export interface SlotsDepositsStorageV0 {
    get(key: number): Promise<bigint[]>
    getAll(): Promise<bigint[][]>
    getMany(keys: number[]): Promise<bigint[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint[]][]>
    getPairs(key: number): Promise<[k: number, v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint[]][]>
}

export class SlotsLeasesStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Leases'
    }

    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
     *  of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this pallet is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '045289c99cd38832bbd83d1da1c2329eef49e8a0cf672722d68751b969c19980'
    }

    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
     *  of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this pallet is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    get asV9110(): SlotsLeasesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Amounts held on deposit for each (possibly future) leased parachain.
 * 
 *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
 *  of the items in this list whose first value is the account.
 * 
 *  The first item in the list is the amount locked for the current Lease Period. Following
 *  items are for the subsequent lease periods.
 * 
 *  The default value (an empty list) implies that the parachain no longer exists (or never
 *  existed) as far as this pallet is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 * 
 *  It is illegal for a `None` value to trail in the list.
 */
export interface SlotsLeasesStorageV9110 {
    get(key: number): Promise<([Uint8Array, bigint] | undefined)[]>
    getAll(): Promise<([Uint8Array, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint] | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
}

export class SlotsManagedIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'ManagedIds'
    }

    /**
     *  Ordered list of all `ParaId` values that are managed by this module. This includes
     *  chains that are not yet deployed (but have won an auction in the future).
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Ordered list of all `ParaId` values that are managed by this module. This includes
     *  chains that are not yet deployed (but have won an auction in the future).
     */
    get asV0(): SlotsManagedIdsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Ordered list of all `ParaId` values that are managed by this module. This includes
 *  chains that are not yet deployed (but have won an auction in the future).
 */
export interface SlotsManagedIdsStorageV0 {
    get(): Promise<number[]>
}

export class SlotsOffboardingStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Offboarding'
    }

    /**
     *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
     *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
     *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
     */
    get asV0(): SlotsOffboardingStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
 *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
 */
export interface SlotsOffboardingStorageV0 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SlotsOnboardQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'OnboardQueue'
    }

    /**
     *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
     *  This is cleared out on the first block of the lease period.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
     *  This is cleared out on the first block of the lease period.
     */
    get asV0(): SlotsOnboardQueueStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
 *  This is cleared out on the first block of the lease period.
 */
export interface SlotsOnboardQueueStorageV0 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class SlotsOnboardingStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Onboarding'
    }

    /**
     *  The actual on-boarding information. Only exists when one of the following is true:
     *  - It is before the lease period that the parachain should be on-boarded.
     *  - The full on-boarding information has not yet been provided and the parachain is not
     *  yet due to be off-boarded.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '445292ed8c4f3800f52c0936ea70aec863e5ffa949359118255bc91fa1dc1351'
    }

    /**
     *  The actual on-boarding information. Only exists when one of the following is true:
     *  - It is before the lease period that the parachain should be on-boarded.
     *  - The full on-boarding information has not yet been provided and the parachain is not
     *  yet due to be off-boarded.
     */
    get asV0(): SlotsOnboardingStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The actual on-boarding information. Only exists when one of the following is true:
 *  - It is before the lease period that the parachain should be on-boarded.
 *  - The full on-boarding information has not yet been provided and the parachain is not
 *  yet due to be off-boarded.
 */
export interface SlotsOnboardingStorageV0 {
    get(key: number): Promise<([number, v0.IncomingParachain] | undefined)>
    getAll(): Promise<[number, v0.IncomingParachain][]>
    getMany(keys: number[]): Promise<([number, v0.IncomingParachain] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, v0.IncomingParachain]][]>
    getPairs(key: number): Promise<[k: number, v: [number, v0.IncomingParachain]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, v0.IncomingParachain]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, v0.IncomingParachain]][]>
}

export class SlotsReservedAmountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'ReservedAmounts'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'aff59eb49fe51cb559f68e912c242d462e6e49152ccb21918e6e5a83024144b4'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get asV0(): SlotsReservedAmountsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface SlotsReservedAmountsStorageV0 {
    get(key: v0.Bidder): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v0.Bidder[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v0.Bidder[]>
    getKeys(key: v0.Bidder): Promise<v0.Bidder[]>
    getKeysPaged(pageSize: number): AsyncIterable<v0.Bidder[]>
    getKeysPaged(pageSize: number, key: v0.Bidder): AsyncIterable<v0.Bidder[]>
    getPairs(): Promise<[k: v0.Bidder, v: bigint][]>
    getPairs(key: v0.Bidder): Promise<[k: v0.Bidder, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v0.Bidder, v: bigint][]>
    getPairsPaged(pageSize: number, key: v0.Bidder): AsyncIterable<[k: v0.Bidder, v: bigint][]>
}

export class SlotsWinningStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Winning'
    }

    /**
     *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Ending Period. The
     *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'ccec52f96cdd97c91b3c9b4297f402aec9614e99b08967c8c604f74277944587'
    }

    /**
     *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Ending Period. The
     *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
     */
    get asV0(): SlotsWinningStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Ending Period. The
 *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
 */
export interface SlotsWinningStorageV0 {
    get(key: number): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)>
    getAll(): Promise<([Uint8Array, number, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
}

export class StakingActiveEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ActiveEra'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era currently rewarded.
     *  Validator set of this era must be equal to `SessionInterface::validators`.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '2bb946dd9c19de9f4332897005d1255528c610172f7418fae165b5dafd3cfbfe'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era currently rewarded.
     *  Validator set of this era must be equal to `SessionInterface::validators`.
     */
    get asV0(): StakingActiveEraStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era currently rewarded.
 *  Validator set of this era must be equal to `SessionInterface::validators`.
 */
export interface StakingActiveEraStorageV0 {
    get(): Promise<(v0.ActiveEraInfo | undefined)>
}

export class StakingBondedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Bonded'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    get asV0(): StakingBondedStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 */
export interface StakingBondedStorageV0 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class StakingBondedErasStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'BondedEras'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get asV0(): StakingBondedErasStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface StakingBondedErasStorageV0 {
    get(): Promise<[number, number][]>
}

export class StakingCanceledSlashPayoutStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CanceledSlashPayout'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get asV0(): StakingCanceledSlashPayoutStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface StakingCanceledSlashPayoutStorageV0 {
    get(): Promise<bigint>
}

export class StakingChillThresholdStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ChillThreshold'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators / nominators.
     *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
     *  the system compared to the configured max (`Max*Count`).
     */
    get isV9080(): boolean {
        return this.getTypeHash() === 'a05bf6dd806233a6b9a22cb1cd50bcf79bcb6a1f3014c295988bec299abc5cd3'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators / nominators.
     *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
     *  the system compared to the configured max (`Max*Count`).
     */
    get asV9080(): StakingChillThresholdStorageV9080 {
        assert(this.isV9080)
        return this as any
    }
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators / nominators.
 *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
 *  the system compared to the configured max (`Max*Count`).
 */
export interface StakingChillThresholdStorageV9080 {
    get(): Promise<(number | undefined)>
}

export class StakingCounterForNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForNominators'
    }

    /**
     *  A tracker to keep count of the number of items in the `Nominators` map.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  A tracker to keep count of the number of items in the `Nominators` map.
     */
    get asV9050(): StakingCounterForNominatorsStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  A tracker to keep count of the number of items in the `Nominators` map.
 */
export interface StakingCounterForNominatorsStorageV9050 {
    get(): Promise<number>
}

export class StakingCounterForValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForValidators'
    }

    /**
     *  A tracker to keep count of the number of items in the `Validators` map.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  A tracker to keep count of the number of items in the `Validators` map.
     */
    get asV9050(): StakingCounterForValidatorsStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  A tracker to keep count of the number of items in the `Validators` map.
 */
export interface StakingCounterForValidatorsStorageV9050 {
    get(): Promise<number>
}

export class StakingCurrentEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEra'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get asV0(): StakingCurrentEraStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface StakingCurrentEraStorageV0 {
    get(): Promise<(number | undefined)>
}

export class StakingCurrentPlannedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentPlannedSession'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`SessionManager::new_session`].
     */
    get isV29(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`SessionManager::new_session`].
     */
    get asV29(): StakingCurrentPlannedSessionStorageV29 {
        assert(this.isV29)
        return this as any
    }
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`SessionManager::new_session`].
 */
export interface StakingCurrentPlannedSessionStorageV29 {
    get(): Promise<number>
}

export class StakingEarliestUnappliedSlashStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'EarliestUnappliedSlash'
    }

    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    get asV0(): StakingEarliestUnappliedSlashStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The earliest era for which we have a pending, unapplied slash.
 */
export interface StakingEarliestUnappliedSlashStorageV0 {
    get(): Promise<(number | undefined)>
}

export class StakingEraElectionStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'EraElectionStatus'
    }

    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'bf44282bdbc037310265361b5f110910184ee499c1366addfdbeb65aef359e28'
    }

    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    get asV0(): StakingEraElectionStatusStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
 *  solutions to be submitted.
 */
export interface StakingEraElectionStatusStorageV0 {
    get(): Promise<v0.ElectionStatus>
}

export class StakingErasRewardPointsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasRewardPoints'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '48c202c7b8424da56b623834c54ceaf74129dbd88a59c39931cc7ba131501b50'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get asV0(): StakingErasRewardPointsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface StakingErasRewardPointsStorageV0 {
    get(key: number): Promise<v0.EraRewardPoints>
    getAll(): Promise<v0.EraRewardPoints[]>
    getMany(keys: number[]): Promise<v0.EraRewardPoints[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v0.EraRewardPoints][]>
    getPairs(key: number): Promise<[k: number, v: v0.EraRewardPoints][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v0.EraRewardPoints][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v0.EraRewardPoints][]>
}

export class StakingErasStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakers'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV0(): StakingErasStakersStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersStorageV0 {
    get(key1: number, key2: Uint8Array): Promise<v0.Exposure>
    getAll(): Promise<v0.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v0.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v0.Exposure][]>
}

export class StakingErasStakersClippedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakersClipped'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV0(): StakingErasStakersClippedStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
 *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
 *  (Note: the field `total` and `own` of the exposure remains unchanged).
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersClippedStorageV0 {
    get(key1: number, key2: Uint8Array): Promise<v0.Exposure>
    getAll(): Promise<v0.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v0.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v0.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v0.Exposure][]>
}

export class StakingErasStartSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStartSessionIndex'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     */
    get asV0(): StakingErasStartSessionIndexStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 */
export interface StakingErasStartSessionIndexStorageV0 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class StakingErasTotalStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasTotalStake'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get asV0(): StakingErasTotalStakeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface StakingErasTotalStakeStorageV0 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingErasValidatorPrefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorPrefs'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '3b21d3470a6c89e6da0d574a6d1402846f9836bb0d1f42e73e3fab07653299c2'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get asV0(): StakingErasValidatorPrefsStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '2f145e368b1c1a9540437d8c25b9502d09b7e977e27a6bb99156b6bf2c6269d2'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get asV28(): StakingErasValidatorPrefsStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface StakingErasValidatorPrefsStorageV0 {
    get(key1: number, key2: Uint8Array): Promise<v0.ValidatorPrefs>
    getAll(): Promise<v0.ValidatorPrefs[]>
    getMany(keys: [number, Uint8Array][]): Promise<v0.ValidatorPrefs[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v0.ValidatorPrefs][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v0.ValidatorPrefs][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v0.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v0.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v0.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v0.ValidatorPrefs][]>
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface StakingErasValidatorPrefsStorageV28 {
    get(key1: number, key2: Uint8Array): Promise<v28.ValidatorPrefs>
    getAll(): Promise<v28.ValidatorPrefs[]>
    getMany(keys: [number, Uint8Array][]): Promise<v28.ValidatorPrefs[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v28.ValidatorPrefs][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v28.ValidatorPrefs][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v28.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v28.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v28.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v28.ValidatorPrefs][]>
}

export class StakingErasValidatorRewardStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorReward'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get asV0(): StakingErasValidatorRewardStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface StakingErasValidatorRewardStorageV0 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingForceEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ForceEra'
    }

    /**
     *  Mode of era forcing.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
    }

    /**
     *  Mode of era forcing.
     */
    get asV0(): StakingForceEraStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Mode of era forcing.
 */
export interface StakingForceEraStorageV0 {
    get(): Promise<v0.Forcing>
}

export class StakingHistoryDepthStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'HistoryDepth'
    }

    /**
     *  Number of eras to keep in history.
     * 
     *  Information is kept for eras in `[current_era - history_depth; current_era]`.
     * 
     *  Must be more than the number of eras delayed by session otherwise.
     *  I.e. active era must always be in history.
     *  I.e. `active_era > current_era - history_depth` must be guaranteed.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of eras to keep in history.
     * 
     *  Information is kept for eras in `[current_era - history_depth; current_era]`.
     * 
     *  Must be more than the number of eras delayed by session otherwise.
     *  I.e. active era must always be in history.
     *  I.e. `active_era > current_era - history_depth` must be guaranteed.
     */
    get asV0(): StakingHistoryDepthStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Number of eras to keep in history.
 * 
 *  Information is kept for eras in `[current_era - history_depth; current_era]`.
 * 
 *  Must be more than the number of eras delayed by session otherwise.
 *  I.e. active era must always be in history.
 *  I.e. `active_era > current_era - history_depth` must be guaranteed.
 */
export interface StakingHistoryDepthStorageV0 {
    get(): Promise<number>
}

export class StakingInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get asV0(): StakingInvulnerablesStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface StakingInvulnerablesStorageV0 {
    get(): Promise<Uint8Array[]>
}

export class StakingIsCurrentSessionFinalStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'IsCurrentSessionFinal'
    }

    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    get asV0(): StakingIsCurrentSessionFinalStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  True if the current **planned** session is final. Note that this does not take era
 *  forcing into account.
 */
export interface StakingIsCurrentSessionFinalStorageV0 {
    get(): Promise<boolean>
}

export class StakingLedgerStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Ledger'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '838ac827cb2532f983c68467cfa97afcccf6147fb96e61e136394060880b64a4'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get asV0(): StakingLedgerStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface StakingLedgerStorageV0 {
    get(key: Uint8Array): Promise<(v0.StakingLedger | undefined)>
    getAll(): Promise<v0.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v0.StakingLedger | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.StakingLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.StakingLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.StakingLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.StakingLedger][]>
}

export class StakingMaxNominatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxNominatorsCount'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV9050(): StakingMaxNominatorsCountStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxNominatorsCountStorageV9050 {
    get(): Promise<(number | undefined)>
}

export class StakingMaxValidatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxValidatorsCount'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV9050(): StakingMaxValidatorsCountStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxValidatorsCountStorageV9050 {
    get(): Promise<(number | undefined)>
}

export class StakingMigrateEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MigrateEra'
    }

    /**
     *  The era where we migrated from Lazy Payouts to Simple Payouts
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The era where we migrated from Lazy Payouts to Simple Payouts
     */
    get asV0(): StakingMigrateEraStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The era where we migrated from Lazy Payouts to Simple Payouts
 */
export interface StakingMigrateEraStorageV0 {
    get(): Promise<(number | undefined)>
}

export class StakingMinCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinCommission'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get asV9170(): StakingMinCommissionStorageV9170 {
        assert(this.isV9170)
        return this as any
    }
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface StakingMinCommissionStorageV9170 {
    get(): Promise<number>
}

export class StakingMinNominatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinNominatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get asV9050(): StakingMinNominatorBondStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface StakingMinNominatorBondStorageV9050 {
    get(): Promise<bigint>
}

export class StakingMinValidatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinValidatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get asV9050(): StakingMinValidatorBondStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface StakingMinValidatorBondStorageV9050 {
    get(): Promise<bigint>
}

export class StakingMinimumActiveStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumActiveStake'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get isV9360(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get asV9360(): StakingMinimumActiveStakeStorageV9360 {
        assert(this.isV9360)
        return this as any
    }
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface StakingMinimumActiveStakeStorageV9360 {
    get(): Promise<bigint>
}

export class StakingMinimumValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumValidatorCount'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get asV0(): StakingMinimumValidatorCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface StakingMinimumValidatorCountStorageV0 {
    get(): Promise<number>
}

export class StakingNominatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'NominatorSlashInEra'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '019c211c1e4452f7fe517a6d5cafde0784f5991ddd51ac15e84213941f3208c2'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get asV0(): StakingNominatorSlashInEraStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface StakingNominatorSlashInEraStorageV0 {
    get(key1: number, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
}

export class StakingNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Nominators'
    }

    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a72d3e17e59f46bbd05fb0efd27052437fe2b1c41b0c89fe950edfb3b79e3c78'
    }

    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     */
    get asV0(): StakingNominatorsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The map from nominator stash key to the set of stash keys of all validators to nominate.
 */
export interface StakingNominatorsStorageV0 {
    get(key: Uint8Array): Promise<(v0.Nominations | undefined)>
    getAll(): Promise<v0.Nominations[]>
    getMany(keys: Uint8Array[]): Promise<(v0.Nominations | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.Nominations][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.Nominations][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.Nominations][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.Nominations][]>
}

export class StakingOffendingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'OffendingValidators'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === 'f462a122689229c7df85ebbfd1e391ea27650c460999212f2c78a9a5675dd9e6'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get asV9122(): StakingOffendingValidatorsStorageV9122 {
        assert(this.isV9122)
        return this as any
    }
}

/**
 *  Indices of validators that have offended in the active era and whether they are currently
 *  disabled.
 * 
 *  This value should be a superset of disabled validators since not all offences lead to the
 *  validator being disabled (if there was no slash). This is needed to track the percentage of
 *  validators that have offended in the current era, ensuring a new era is forced if
 *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
 *  whether a given validator has previously offended using binary search. It gets cleared when
 *  the era ends.
 */
export interface StakingOffendingValidatorsStorageV9122 {
    get(): Promise<[number, boolean][]>
}

export class StakingPayeeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Payee'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '997acadf80b79903fb4386b933d481dff61dad22612d657f19f39b937ea8d992'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    get asV0(): StakingPayeeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 */
export interface StakingPayeeStorageV0 {
    get(key: Uint8Array): Promise<v0.RewardDestination>
    getAll(): Promise<v0.RewardDestination[]>
    getMany(keys: Uint8Array[]): Promise<v0.RewardDestination[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.RewardDestination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.RewardDestination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.RewardDestination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.RewardDestination][]>
}

export class StakingQueuedElectedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'QueuedElected'
    }

    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '4eb4938a9c4768286e5e98cd46cabfc8a8c98b113bbbe8616621e5fc6aa8e4d5'
    }

    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    get asV0(): StakingQueuedElectedStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The next validator set. At the end of an era, if this is available (potentially from the
 *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
 *  is executed.
 */
export interface StakingQueuedElectedStorageV0 {
    get(): Promise<(v0.ElectionResult | undefined)>
}

export class StakingQueuedScoreStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'QueuedScore'
    }

    /**
     *  The score of the current [`QueuedElected`].
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'fc5a4796e3467f3450c1f03819f4fe9e47a6e584803699b23c3072af283f03fa'
    }

    /**
     *  The score of the current [`QueuedElected`].
     */
    get asV0(): StakingQueuedScoreStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The score of the current [`QueuedElected`].
 */
export interface StakingQueuedScoreStorageV0 {
    get(): Promise<(bigint[] | undefined)>
}

export class StakingSlashRewardFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashRewardFraction'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get asV0(): StakingSlashRewardFractionStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface StakingSlashRewardFractionStorageV0 {
    get(): Promise<number>
}

export class StakingSlashingSpansStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashingSpans'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'b2f49d14e3e4e56cf533a97be4eadb0e19c21d28a6b1b78aa85d7fda1f7e298b'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get asV0(): StakingSlashingSpansStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Slashing spans for stash accounts.
 */
export interface StakingSlashingSpansStorageV0 {
    get(key: Uint8Array): Promise<(v0.SlashingSpans | undefined)>
    getAll(): Promise<v0.SlashingSpans[]>
    getMany(keys: Uint8Array[]): Promise<(v0.SlashingSpans | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.SlashingSpans][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.SlashingSpans][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.SlashingSpans][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.SlashingSpans][]>
}

export class StakingSnapshotNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SnapshotNominators'
    }

    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
    }

    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get asV0(): StakingSnapshotNominatorsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Snapshot of nominators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface StakingSnapshotNominatorsStorageV0 {
    get(): Promise<(Uint8Array[] | undefined)>
}

export class StakingSnapshotValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SnapshotValidators'
    }

    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
    }

    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get asV0(): StakingSnapshotValidatorsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Snapshot of validators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface StakingSnapshotValidatorsStorageV0 {
    get(): Promise<(Uint8Array[] | undefined)>
}

export class StakingSpanSlashStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SpanSlash'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '3c3a6ad88aa43453f825e9fdcd8fb3dbdc0bef20e2be50b06d357c7c3d8e3488'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get asV0(): StakingSpanSlashStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface StakingSpanSlashStorageV0 {
    get(key: [Uint8Array, number]): Promise<v0.SpanRecord>
    getAll(): Promise<v0.SpanRecord[]>
    getMany(keys: [Uint8Array, number][]): Promise<v0.SpanRecord[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v0.SpanRecord][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: v0.SpanRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v0.SpanRecord][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: v0.SpanRecord][]>
}

export class StakingStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v3.0.0 for new networks.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v3.0.0 for new networks.
     */
    get asV0(): StakingStorageVersionStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'ef04544991bb54d78e35f735351ad18571d6f07748b22cbb3b9fcc24b06a94e9'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get asV9110(): StakingStorageVersionStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '9d27f2caf6049b435f9ac14da3b267d0e65dfad3af06ab1bc4d6fe208abf3347'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get asV9190(): StakingStorageVersionStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get isV9270(): boolean {
        return this.getTypeHash() === 'ada1e92667a52fdcb4e17dda7e6482dfa43e5fd766f816b93e620c415070cfcf'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get asV9270(): StakingStorageVersionStorageV9270 {
        assert(this.isV9270)
        return this as any
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '5124cfaa968e88f2d457c9ef638f4306fd6837d49a99d8ecb792d7300f6f114c'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get asV9300(): StakingStorageVersionStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v3.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV0 {
    get(): Promise<v0.Releases>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV9110 {
    get(): Promise<v9110.Type_407>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV9190 {
    get(): Promise<v9190.Type_488>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV9270 {
    get(): Promise<v9270.Type_494>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV9300 {
    get(): Promise<v9300.Type_506>
}

export class StakingUnappliedSlashesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'UnappliedSlashes'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '8264329f163dd76100f9d2270735f3a3cb745c5af616ebd0e203d417e2039503'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get asV0(): StakingUnappliedSlashesStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface StakingUnappliedSlashesStorageV0 {
    get(key: number): Promise<v0.UnappliedSlash[]>
    getAll(): Promise<v0.UnappliedSlash[][]>
    getMany(keys: number[]): Promise<v0.UnappliedSlash[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v0.UnappliedSlash[]][]>
    getPairs(key: number): Promise<[k: number, v: v0.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v0.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v0.UnappliedSlash[]][]>
}

export class StakingValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorCount'
    }

    /**
     *  The ideal number of staking participants.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The ideal number of staking participants.
     */
    get asV0(): StakingValidatorCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The ideal number of staking participants.
 */
export interface StakingValidatorCountStorageV0 {
    get(): Promise<number>
}

export class StakingValidatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorSlashInEra'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'facf161fd07f9163ac7ab48199356f8083a31ec97fe569c9c5e6fd30fe0ce3ae'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get asV0(): StakingValidatorSlashInEraStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface StakingValidatorSlashInEraStorageV0 {
    get(key1: number, key2: Uint8Array): Promise<([number, bigint] | undefined)>
    getAll(): Promise<[number, bigint][]>
    getMany(keys: [number, Uint8Array][]): Promise<([number, bigint] | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
}

export class StakingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '3f9d4868d833266bf0b4658a23fbe9b816c5eafdf27cd8520d058526e27af4c5'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get asV0(): StakingValidatorsStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get isV28(): boolean {
        return this.getTypeHash() === 'fa08b7a9cd071c2833987f5924d940cf66842072b85af5ecfc3afcf9fbb2ebd0'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get asV28(): StakingValidatorsStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface StakingValidatorsStorageV0 {
    get(key: Uint8Array): Promise<v0.ValidatorPrefs>
    getAll(): Promise<v0.ValidatorPrefs[]>
    getMany(keys: Uint8Array[]): Promise<v0.ValidatorPrefs[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.ValidatorPrefs][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.ValidatorPrefs][]>
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface StakingValidatorsStorageV28 {
    get(key: Uint8Array): Promise<v28.ValidatorPrefs>
    getAll(): Promise<v28.ValidatorPrefs[]>
    getMany(keys: Uint8Array[]): Promise<v28.ValidatorPrefs[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.ValidatorPrefs][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.ValidatorPrefs][]>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV0(): SudoKeyStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV0 {
    get(): Promise<Uint8Array>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV0(): SystemAccountStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'eb40f1d91f26d72e29c60e034d53a72b9b529014c7e108f422d8ad5f03f0c902'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV25(): SystemAccountStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV28(): SystemAccountStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV30(): SystemAccountStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV9420(): SystemAccountStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV0 {
    get(key: Uint8Array): Promise<v0.AccountInfo>
    getAll(): Promise<v0.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v0.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV25 {
    get(key: Uint8Array): Promise<v25.AccountInfo>
    getAll(): Promise<v25.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v25.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV28 {
    get(key: Uint8Array): Promise<v28.AccountInfo>
    getAll(): Promise<v28.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v28.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v28.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v28.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v28.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v28.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV30 {
    get(key: Uint8Array): Promise<v30.AccountInfo>
    getAll(): Promise<v30.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v30.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v30.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v30.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v30.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v30.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV9420 {
    get(key: Uint8Array): Promise<v9420.AccountInfo>
    getAll(): Promise<v9420.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v9420.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV0(): SystemAllExtrinsicsLenStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV0 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV0(): SystemBlockHashStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV0 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a48e4a92883111e45a4df82c24772ca4f3cf68ad664cd5f82e79bf2fa09efa46'
    }

    /**
     *  The current weight for the block.
     */
    get asV0(): SystemBlockWeightStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV27(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asV27(): SystemBlockWeightStorageV27 {
        assert(this.isV27)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'd35f09c6f3fd2f6e93d9006f364b5b6e91ce1207594e51247070364731dba424'
    }

    /**
     *  The current weight for the block.
     */
    get asV9291(): SystemBlockWeightStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV9340(): SystemBlockWeightStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV0 {
    get(): Promise<v0.ExtrinsicsWeight>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV27 {
    get(): Promise<v27.ConsumedWeight>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV9291 {
    get(): Promise<v9291.PerDispatchClass>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV9340 {
    get(): Promise<v9340.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '1d49db8c467b8ce13c8d27dfc1293265e11d9e73050b590ac44aa31ca0eec876'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV0(): SystemDigestStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '08ab0f1eb08eb281a0be5123646d1a04bf4254218b3b8617ed26e880f8eaa52f'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV9110(): SystemDigestStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV9140(): SystemDigestStorageV9140 {
        assert(this.isV9140)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV0 {
    get(): Promise<v0.DigestOf>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV9110 {
    get(): Promise<v9110.Digest>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV9140 {
    get(): Promise<v9140.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV0(): SystemEventCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV0 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV0(): SystemEventTopicsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV0 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '4a01a2eaa16bb3ef37463bc5f3e57721b4695f94763d026d458bc9ec3d1615b0'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV0(): SystemEventsStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV5(): boolean {
        return this.getTypeHash() === 'e4a53fa93c9aceeb523120cf8fa3eb7d99ab3c1a8f4ec019c2f3c0282fc81b75'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV5(): SystemEventsStorageV5 {
        assert(this.isV5)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV7(): boolean {
        return this.getTypeHash() === '793d1b8ff424bd83b5bfc0a18bd5ed1e20a639c2620dffd143bf48d05ff776c0'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV7(): SystemEventsStorageV7 {
        assert(this.isV7)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV8(): boolean {
        return this.getTypeHash() === '1528a10840658754fb4ee7ca2ac83199ad985edac39fdec4d18175650b7493b9'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV8(): SystemEventsStorageV8 {
        assert(this.isV8)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9(): boolean {
        return this.getTypeHash() === '59f6cf561fc210df98c699a8427abed8a679a5d3fb9ff2f78dedb67376457261'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9(): SystemEventsStorageV9 {
        assert(this.isV9)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV14(): boolean {
        return this.getTypeHash() === '6fd14141dd7b012995cd30f4d7821b40de6c3cfd0262976f66548827e41cf97f'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV14(): SystemEventsStorageV14 {
        assert(this.isV14)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV15(): boolean {
        return this.getTypeHash() === '8b01c8f9f02d521d17edc35144fac18bbc56a7b921441f0e0cd4293762839855'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV15(): SystemEventsStorageV15 {
        assert(this.isV15)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV17(): boolean {
        return this.getTypeHash() === '5540ee5d8f26bd227e4ed5aa30bff1c021b2cf5b0b6bc6f7139f03e5142a96a4'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV17(): SystemEventsStorageV17 {
        assert(this.isV17)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV18(): boolean {
        return this.getTypeHash() === '1ff3bbac7ddd57a418ad50591614534cd0e3be269283751afae3e44ab092f7a0'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV18(): SystemEventsStorageV18 {
        assert(this.isV18)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV23(): boolean {
        return this.getTypeHash() === '591039b84b793df41302e9c3b62e74dc0367aaa8d8b54fb3d7c164030e6fe46b'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV23(): SystemEventsStorageV23 {
        assert(this.isV23)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV24(): boolean {
        return this.getTypeHash() === 'b25126b3b9aa48f3ac138a249a18b3475551107459417c9b132cee598da15ecc'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV24(): SystemEventsStorageV24 {
        assert(this.isV24)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '51d3ddf7e5a7a8e9e0b67fd712bca919e4609a63117abdfe3788b678fc0dc31c'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV25(): SystemEventsStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV27(): boolean {
        return this.getTypeHash() === '88c3494777059b314b77e79e1a57fc71acd6aec06b12fb385773028766f723e7'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV27(): SystemEventsStorageV27 {
        assert(this.isV27)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '0fe3db077f8ea5ae8458dbfcf57126a89dc1d1e74d4139c8e038a6a5c524920d'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV28(): SystemEventsStorageV28 {
        assert(this.isV28)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV29(): boolean {
        return this.getTypeHash() === '708c848ca5d28870c25d8d5631d73b6338a1edb7fe5a8569055490760e4585e3'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV29(): SystemEventsStorageV29 {
        assert(this.isV29)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '9aa9666718e300d72016f13e17f8376b3a461b6565e14546e947d72853290702'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV30(): SystemEventsStorageV30 {
        assert(this.isV30)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'fa5d0ef42191117095bf005b7c3366318c8512a792c8d0de496adc290b5d458d'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9050(): SystemEventsStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '416eee5836eb5cee40a23b6abc1fd2cb4783469a6bd3b72aac1149b6d2167d7a'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9080(): SystemEventsStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '0fbb8fbe3dcfc2dc06f9f379d95829d1b33af42c6f8ee79a401988dc55d4d85a'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9090(): SystemEventsStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'a24d847e757a2ed950dff13dff845a03e83f98e8a77be81b7b7c9a96b128e603'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9110(): SystemEventsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === 'fb979dc6323732f2b9577584591fc4aa8e816466b3be9efce603a0a58e46c894'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9122(): SystemEventsStorageV9122 {
        assert(this.isV9122)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '54e83a09313c29bf463dfa62b8f622c50b84bd4e6eb55c8890257e0c381afb45'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9140(): SystemEventsStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '20337e9a2dc1668e3d475723210d984ebf734110e0d6b0129cc08cb6c5eb0a22'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9170(): SystemEventsStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '0b909afa6d9119a11222bed0b67f758717001fe0013bf73269c5552e21c75190'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9180(): SystemEventsStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'cf820ac531d2daa1a99aa02d514a0878d0f0429ae2a559d31b5e16e686301757'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9190(): SystemEventsStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9200(): boolean {
        return this.getTypeHash() === '99902282572e4a6ef190fb83ea6eb6569d266e2eff654015fb4f791f820740f0'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9200(): SystemEventsStorageV9200 {
        assert(this.isV9200)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '7789ab0c2695563ad6df214918f891aa4c5a54ca582480f0f740069e4aabbfbe'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9220(): SystemEventsStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '82f4c59aff2de9c5f5022f74580dd314b942f944eb4d9052054d00720495a3d6'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9230(): SystemEventsStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === '7033f3df87a078e1f6b06c5d7abd4e43159ab97f8d3bb0bc6923e78c89addaeb'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9250(): SystemEventsStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9260(): boolean {
        return this.getTypeHash() === '0d866eb3131868688e8bfe02ece0e5f1d44be4125c0dea7a4c060c2b81bf5262'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9260(): SystemEventsStorageV9260 {
        assert(this.isV9260)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === 'e398517ce6e7f3c43bee3184368f7f295a918a28171a28495e55974ec934ca24'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9280(): SystemEventsStorageV9280 {
        assert(this.isV9280)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'f31dbb7e281608fa8d3b97b06be86cc11afdc415cf8247604def529ec134a8b8'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9291(): SystemEventsStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '9dbb210a46854a70074093e95de97e19b89bd4a6c77babd903768370151c53ba'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9300(): SystemEventsStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '2bbf08ce94f4f08d64340072d32111365e781ff39274677df4e8b4c34204f106'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9340(): SystemEventsStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9360(): boolean {
        return this.getTypeHash() === 'b0c92b57e21b98033e5c3726ed93d2b8863176f4f391561fb9b51f3072f98002'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9360(): SystemEventsStorageV9360 {
        assert(this.isV9360)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '98463d719325e10457c1a6197ed3f2f23ba5b925e5a9bcfc9a01461e422e6980'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9370(): SystemEventsStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '69d68f834c47a0d9f98af3b4b3445ee29b05b794f39eb2522edfc8c4492264ce'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9420(): SystemEventsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV0 {
    get(): Promise<v0.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV5 {
    get(): Promise<v5.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV7 {
    get(): Promise<v7.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV8 {
    get(): Promise<v8.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9 {
    get(): Promise<v9.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV14 {
    get(): Promise<v14.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV15 {
    get(): Promise<v15.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV17 {
    get(): Promise<v17.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV18 {
    get(): Promise<v18.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV23 {
    get(): Promise<v23.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV24 {
    get(): Promise<v24.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV25 {
    get(): Promise<v25.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV27 {
    get(): Promise<v27.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV28 {
    get(): Promise<v28.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV29 {
    get(): Promise<v29.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV30 {
    get(): Promise<v30.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9050 {
    get(): Promise<v9050.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9080 {
    get(): Promise<v9080.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9090 {
    get(): Promise<v9090.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9110 {
    get(): Promise<v9110.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9122 {
    get(): Promise<v9122.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9140 {
    get(): Promise<v9140.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9170 {
    get(): Promise<v9170.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9180 {
    get(): Promise<v9180.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9190 {
    get(): Promise<v9190.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9200 {
    get(): Promise<v9200.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9220 {
    get(): Promise<v9220.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9230 {
    get(): Promise<v9230.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9250 {
    get(): Promise<v9250.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9260 {
    get(): Promise<v9260.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9280 {
    get(): Promise<v9280.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9291 {
    get(): Promise<v9291.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9300 {
    get(): Promise<v9300.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9340 {
    get(): Promise<v9340.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9360 {
    get(): Promise<v9360.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9370 {
    get(): Promise<v9370.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9420 {
    get(): Promise<v9420.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV0(): SystemExecutionPhaseStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV0 {
    get(): Promise<(v0.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV0(): SystemExtrinsicCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV0 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV0(): SystemExtrinsicDataStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV0 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemExtrinsicsRootStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicsRoot'
    }

    /**
     *  Extrinsics root of the current block, also part of the block header.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Extrinsics root of the current block, also part of the block header.
     */
    get asV0(): SystemExtrinsicsRootStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Extrinsics root of the current block, also part of the block header.
 */
export interface SystemExtrinsicsRootStorageV0 {
    get(): Promise<Uint8Array>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV0(): SystemLastRuntimeUpgradeStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV0 {
    get(): Promise<(v0.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV0(): SystemNumberStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV0 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV0(): SystemParentHashStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV0 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToDualRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToDualRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    get isV28(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    get asV28(): SystemUpgradedToDualRefCountStorageV28 {
        assert(this.isV28)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToDualRefCountStorageV28 {
    get(): Promise<boolean>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV30(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV30(): SystemUpgradedToTripleRefCountStorageV30 {
        assert(this.isV30)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV30 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV25(): SystemUpgradedToU32RefCountStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV25 {
    get(): Promise<boolean>
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV9110(): TechnicalCommitteeMembersStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageV9110 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV9110(): TechnicalCommitteePrimeStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageV9110 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV9110(): TechnicalCommitteeProposalCountStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageV9110 {
    get(): Promise<number>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '63d24c0129919827fa9023228f4c71d3c81178663e2b642fce64b99d6fe01202'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9110(): TechnicalCommitteeProposalOfStorageV9110 {
        assert(this.isV9110)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '46630105cac13d25403727b2ba5a9f33dd1995e1c7551f8890b7d09074b2e29e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9140(): TechnicalCommitteeProposalOfStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === 'cf07c81d23704ed462b6bfe0b42583c05b23158e6683c37e8d868a238aaa2a66'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9170(): TechnicalCommitteeProposalOfStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'f97a19253893953ac9957fd5cc3c6eb738010d8ad3fa671e3874d151c99c6297'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9180(): TechnicalCommitteeProposalOfStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '4f1bb8ab04112d992f0d47816b692572d385241d80cdbd7d5f07a66c65036f3b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9190(): TechnicalCommitteeProposalOfStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '80f4da00d906dc4fa47ad0b8c6e903103f231cec48bf93ba8e721b558299fcca'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9220(): TechnicalCommitteeProposalOfStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === 'bde9173c84a0b1d6a79d0d321515c35c8835437f3a0e65d119dfd09ccb13c6f4'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9230(): TechnicalCommitteeProposalOfStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === '233b9c42f7eb18d5b221c2b161cab79e11c0bba8f7294ea8851932e045850319'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9250(): TechnicalCommitteeProposalOfStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9270(): boolean {
        return this.getTypeHash() === 'c0c9e58000365ad91758b5276a20d237aea256d42aefe7f131d12c860b668d40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9270(): TechnicalCommitteeProposalOfStorageV9270 {
        assert(this.isV9270)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9280(): boolean {
        return this.getTypeHash() === '195c89e6d1c50fb433718c42dfef5087efbd5d416889ef321c32e8e954732455'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9280(): TechnicalCommitteeProposalOfStorageV9280 {
        assert(this.isV9280)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'd7245231a8317bd151161b3106e2a07fbef8faf4eb6d45aa2c71141a8a26fc8e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9291(): TechnicalCommitteeProposalOfStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '7772aaf0b057235e40688ad2f55f85b5048f3f210085929b092a1179238d25b8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9300(): TechnicalCommitteeProposalOfStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '4b61f1b33be2d038dd589c570144f30d588c945ca7d7ae9c1ba66c90b60c5fed'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9340(): TechnicalCommitteeProposalOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '1f46def9008095a0a4a528da889616bccb1875d2d3a23d2c41257b56f31829f8'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): TechnicalCommitteeProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '056bf35029b7919019e17768fcfa6bc60165809adf78291dfdef1443b1e04ab9'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9420(): TechnicalCommitteeProposalOfStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.Call | undefined)>
    getAll(): Promise<v9110.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9140 {
    get(key: Uint8Array): Promise<(v9140.Call | undefined)>
    getAll(): Promise<v9140.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9140.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9140.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9140.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9140.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9140.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.Call | undefined)>
    getAll(): Promise<v9170.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9180 {
    get(key: Uint8Array): Promise<(v9180.Call | undefined)>
    getAll(): Promise<v9180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9190 {
    get(key: Uint8Array): Promise<(v9190.Call | undefined)>
    getAll(): Promise<v9190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9220 {
    get(key: Uint8Array): Promise<(v9220.Call | undefined)>
    getAll(): Promise<v9220.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Call | undefined)>
    getAll(): Promise<v9230.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9250 {
    get(key: Uint8Array): Promise<(v9250.Call | undefined)>
    getAll(): Promise<v9250.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9270 {
    get(key: Uint8Array): Promise<(v9270.Call | undefined)>
    getAll(): Promise<v9270.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9270.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9270.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9270.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9270.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9270.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9280 {
    get(key: Uint8Array): Promise<(v9280.Call | undefined)>
    getAll(): Promise<v9280.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9280.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9280.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9280.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9280.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9280.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9291 {
    get(key: Uint8Array): Promise<(v9291.Call | undefined)>
    getAll(): Promise<v9291.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.Call | undefined)>
    getAll(): Promise<v9300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.Call | undefined)>
    getAll(): Promise<v9340.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9370 {
    get(key: Uint8Array): Promise<(v9370.Call | undefined)>
    getAll(): Promise<v9370.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9370.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9420 {
    get(key: Uint8Array): Promise<(v9420.Call | undefined)>
    getAll(): Promise<v9420.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9420.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.Call][]>
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV9110(): TechnicalCommitteeProposalsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageV9110 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV9110(): TechnicalCommitteeVotingStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.Votes | undefined)>
    getAll(): Promise<v9110.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.Votes][]>
}

export class TechnicalMembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asV9110(): TechnicalMembershipMembersStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageV9110 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalMembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asV9110(): TechnicalMembershipPrimeStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageV9110 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isV0(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV0(): TimestampDidUpdateStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV0 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV0(): TimestampNowStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV0 {
    get(): Promise<bigint>
}

export class TipsReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV9110(): TipsReasonsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV9110 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TipsTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV9110(): TipsTipsStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.OpenTip | undefined)>
    getAll(): Promise<v9110.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v9110.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.OpenTip][]>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV0(): boolean {
        return this.getTypeHash() === '8840628264db1877ef5c3718a00459d4b519de0922f813836237f71320a25aa6'
    }

    get asV0(): TransactionPaymentNextFeeMultiplierStorageV0 {
        assert(this.isV0)
        return this as any
    }

    get isV9110(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV9110(): TransactionPaymentNextFeeMultiplierStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV0 {
    get(): Promise<bigint>
}

export interface TransactionPaymentNextFeeMultiplierStorageV9110 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV11(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    get asV11(): TransactionPaymentStorageVersionStorageV11 {
        assert(this.isV11)
        return this as any
    }

    get isV9110(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV9110(): TransactionPaymentStorageVersionStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV11 {
    get(): Promise<v11.Releases>
}

export interface TransactionPaymentStorageVersionStorageV9110 {
    get(): Promise<v9110.Type_385>
}

export class TreasuryApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asV0(): TreasuryApprovalsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface TreasuryApprovalsStorageV0 {
    get(): Promise<number[]>
}

export class TreasuryBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'e276510ea57efb7a40938452ef5d335bafe4cc416f094226131c0321c9bb6599'
    }

    /**
     *  Bounties that have been made.
     */
    get asV25(): TreasuryBountiesStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface TreasuryBountiesStorageV25 {
    get(key: number): Promise<(v25.Bounty | undefined)>
    getAll(): Promise<v25.Bounty[]>
    getMany(keys: number[]): Promise<(v25.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v25.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v25.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v25.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v25.Bounty][]>
}

export class TreasuryBountyApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyApprovals'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asV25(): TreasuryBountyApprovalsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface TreasuryBountyApprovalsStorageV25 {
    get(): Promise<number[]>
}

export class TreasuryBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyCount'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asV25(): TreasuryBountyCountStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface TreasuryBountyCountStorageV25 {
    get(): Promise<number>
}

export class TreasuryBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV25(): TreasuryBountyDescriptionsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface TreasuryBountyDescriptionsStorageV25 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class TreasuryDeactivatedStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Deactivated'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asV9370(): TreasuryDeactivatedStorageV9370 {
        assert(this.isV9370)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface TreasuryDeactivatedStorageV9370 {
    get(): Promise<bigint>
}

export class TreasuryInactiveStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Inactive'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asV9340(): TreasuryInactiveStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface TreasuryInactiveStorageV9340 {
    get(): Promise<bigint>
}

export class TreasuryProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asV0(): TreasuryProposalCountStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface TreasuryProposalCountStorageV0 {
    get(): Promise<number>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV0(): TreasuryProposalsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV0 {
    get(key: number): Promise<(v0.TreasuryProposal | undefined)>
    getAll(): Promise<v0.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v0.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v0.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v0.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v0.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v0.TreasuryProposal][]>
}

export class TreasuryReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV0(): TreasuryReasonsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TreasuryReasonsStorageV0 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TreasuryTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV0(): TreasuryTipsStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV13(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV13(): TreasuryTipsStorageV13 {
        assert(this.isV13)
        return this as any
    }
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV0 {
    get(key: Uint8Array): Promise<(v0.OpenTip | undefined)>
    getAll(): Promise<v0.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v0.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.OpenTip][]>
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV13 {
    get(key: Uint8Array): Promise<(v13.OpenTip | undefined)>
    getAll(): Promise<v13.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v13.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v13.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v13.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v13.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v13.OpenTip][]>
}

export class UmpCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9420(): UmpCounterForOverweightStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface UmpCounterForOverweightStorageV9420 {
    get(): Promise<number>
}

export class UmpNeedsDispatchStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'NeedsDispatch'
    }

    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    get asV9110(): UmpNeedsDispatchStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
 * 
 *  Invariant:
 *  - The set of items from this vector should be exactly the set of the keys in
 *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
 */
export interface UmpNeedsDispatchStorageV9110 {
    get(): Promise<number[]>
}

export class UmpNextDispatchRoundStartWithStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'NextDispatchRoundStartWith'
    }

    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    get asV9110(): UmpNextDispatchRoundStartWithStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  This is the para that gets will get dispatched first during the next upward dispatchable queue
 *  execution round.
 * 
 *  Invariant:
 *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
 */
export interface UmpNextDispatchRoundStartWithStorageV9110 {
    get(): Promise<(number | undefined)>
}

export class UmpOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These messages stay there until manually dispatched.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These messages stay there until manually dispatched.
     */
    get asV9110(): UmpOverweightStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These messages stay there until manually dispatched.
 */
export interface UmpOverweightStorageV9110 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class UmpOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    get asV9110(): UmpOverweightCountStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
 *  index).
 */
export interface UmpOverweightCountStorageV9110 {
    get(): Promise<bigint>
}

export class UmpRelayDispatchQueueSizeStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'RelayDispatchQueueSize'
    }

    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     * 
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     * 
     *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     * 
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '11d84eadab69be0e8dde14b70110d550deeab55868bd2bc91f3c1cf340a76ef8'
    }

    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     * 
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     * 
     *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     * 
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    get asV9110(): UmpRelayDispatchQueueSizeStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
 * 
 *  First item in the tuple is the count of messages and second
 *  is the total length (in bytes) of the message payloads.
 * 
 *  Note that this is an auxiliary mapping: it's possible to tell the byte size and the number of
 *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
 *  loading the whole message queue if only the total size and count are required.
 * 
 *  Invariant:
 *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
 */
export interface UmpRelayDispatchQueueSizeStorageV9110 {
    get(key: number): Promise<[number, number]>
    getAll(): Promise<[number, number][]>
    getMany(keys: number[]): Promise<[number, number][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number]][]>
}

export class UmpRelayDispatchQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'RelayDispatchQueues'
    }

    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
    }

    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    get asV9110(): UmpRelayDispatchQueuesStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
 * 
 *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
 *  channel management messages.
 * 
 *  The messages are processed in FIFO order.
 */
export interface UmpRelayDispatchQueuesStorageV9110 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class UtilityMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Utility'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV0(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV0(): UtilityMultisigsStorageV0 {
        assert(this.isV0)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface UtilityMultisigsStorageV0 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v0.Multisig | undefined)>
    getAll(): Promise<v0.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v0.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v0.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v0.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v0.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v0.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v0.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v0.Multisig][]>
}

export class VestingStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '5370c514276f3735e13df7db1f1bbacaba918c365a3ed949597f7ce091eeb77e'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    get asV9110(): VestingStorageVersionStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with latest version, as determined by the genesis build.
 */
export interface VestingStorageVersionStorageV9110 {
    get(): Promise<v9110.Type_462>
}

export class VestingVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'Vesting'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get isV0(): boolean {
        return this.getTypeHash() === '04a3bd3844d81bd0b622c91e507de0014c997b5d7949e81b50c1607437b412fa'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get asV0(): VestingVestingStorageV0 {
        assert(this.isV0)
        return this as any
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get isV9110(): boolean {
        return this.getTypeHash() === '22ac0db91087ba9b3f5dee769d5e3398f8c8c045cabf7f6585992df66dba74db'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get asV9110(): VestingVestingStorageV9110 {
        assert(this.isV9110)
        return this as any
    }
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingVestingStorageV0 {
    get(key: Uint8Array): Promise<(v0.VestingInfo | undefined)>
    getAll(): Promise<v0.VestingInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v0.VestingInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v0.VestingInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v0.VestingInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v0.VestingInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v0.VestingInfo][]>
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingVestingStorageV9110 {
    get(key: Uint8Array): Promise<(v9110.VestingInfo[] | undefined)>
    getAll(): Promise<v9110.VestingInfo[][]>
    getMany(keys: Uint8Array[]): Promise<(v9110.VestingInfo[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9110.VestingInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9110.VestingInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9110.VestingInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9110.VestingInfo[]][]>
}

export class VoterListCounterForListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'CounterForListNodes'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9230(): VoterListCounterForListNodesStorageV9230 {
        assert(this.isV9230)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface VoterListCounterForListNodesStorageV9230 {
    get(): Promise<number>
}

export class VoterListListBagsStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'ListBags'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get asV9230(): VoterListListBagsStorageV9230 {
        assert(this.isV9230)
        return this as any
    }
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface VoterListListBagsStorageV9230 {
    get(key: bigint): Promise<(v9230.Bag | undefined)>
    getAll(): Promise<v9230.Bag[]>
    getMany(keys: bigint[]): Promise<(v9230.Bag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9230.Bag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9230.Bag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9230.Bag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9230.Bag][]>
}

export class VoterListListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'ListNodes'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === 'd750de9f70dc579f36482219336f529b62912998b5a4be0a48c69cf3c6158042'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get asV9230(): VoterListListNodesStorageV9230 {
        assert(this.isV9230)
        return this as any
    }
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface VoterListListNodesStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Node | undefined)>
    getAll(): Promise<v9230.Node[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Node | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Node][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Node][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Node][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Node][]>
}

export class WhitelistWhitelistedCallStorage extends StorageBase {
    protected getPrefix() {
        return 'Whitelist'
    }

    protected getName() {
        return 'WhitelistedCall'
    }

    get isV9420(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    get asV9420(): WhitelistWhitelistedCallStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

export interface WhitelistWhitelistedCallStorageV9420 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class XcmPalletAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asV9140(): XcmPalletAssetTrapsStorageV9140 {
        assert(this.isV9140)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface XcmPalletAssetTrapsStorageV9140 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class XcmPalletCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asV9140(): XcmPalletCurrentMigrationStorageV9140 {
        assert(this.isV9140)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface XcmPalletCurrentMigrationStorageV9140 {
    get(): Promise<(v9140.VersionMigrationStage | undefined)>
}

export class XcmPalletLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'LockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asV9420(): XcmPalletLockedFungiblesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface XcmPalletLockedFungiblesStorageV9420 {
    get(key: Uint8Array): Promise<([bigint, v9420.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, v9420.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v9420.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, v9420.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, v9420.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, v9420.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, v9420.VersionedMultiLocation][]][]>
}

export class XcmPalletQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === 'ae8e3438dd16f0912a0a76dfeb9e62216e42277085497217b9181be5bd15251e'
    }

    /**
     *  The ongoing queries.
     */
    get asV9140(): XcmPalletQueriesStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
    }

    /**
     *  The ongoing queries.
     */
    get asV9170(): XcmPalletQueriesStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'd10dd933536b6a509757649a144befe6c924fc7ec281f36a7bd0d258223921f2'
    }

    /**
     *  The ongoing queries.
     */
    get asV9370(): XcmPalletQueriesStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asV9420(): XcmPalletQueriesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV9140 {
    get(key: bigint): Promise<(v9140.QueryStatus | undefined)>
    getAll(): Promise<v9140.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v9140.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9140.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9140.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9140.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9140.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV9170 {
    get(key: bigint): Promise<(v9170.QueryStatus | undefined)>
    getAll(): Promise<v9170.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v9170.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9170.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9170.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9170.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9170.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV9370 {
    get(key: bigint): Promise<(v9370.QueryStatus | undefined)>
    getAll(): Promise<v9370.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v9370.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9370.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9370.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9370.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9370.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV9420 {
    get(key: bigint): Promise<(v9420.QueryStatus | undefined)>
    getAll(): Promise<v9420.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v9420.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9420.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9420.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9420.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9420.QueryStatus][]>
}

export class XcmPalletQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asV9140(): XcmPalletQueryCounterStorageV9140 {
        assert(this.isV9140)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface XcmPalletQueryCounterStorageV9140 {
    get(): Promise<bigint>
}

export class XcmPalletRemoteLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'RemoteLockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '32350375a3f683ddfbcb5dbc0bc4773d1d5aa9c2f1f2e358dced4492be76a541'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV9420(): XcmPalletRemoteLockedFungiblesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface XcmPalletRemoteLockedFungiblesStorageV9420 {
    get(key1: number, key2: Uint8Array, key3: v9420.VersionedAssetId): Promise<(v9420.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v9420.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v9420.VersionedAssetId][]): Promise<(v9420.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v9420.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v9420.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v9420.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v9420.VersionedAssetId): Promise<[number, Uint8Array, v9420.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v9420.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v9420.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v9420.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v9420.VersionedAssetId): AsyncIterable<[number, Uint8Array, v9420.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v9420.VersionedAssetId], v: v9420.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v9420.VersionedAssetId], v: v9420.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v9420.VersionedAssetId], v: v9420.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v9420.VersionedAssetId): Promise<[k: [number, Uint8Array, v9420.VersionedAssetId], v: v9420.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v9420.VersionedAssetId], v: v9420.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v9420.VersionedAssetId], v: v9420.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v9420.VersionedAssetId], v: v9420.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v9420.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v9420.VersionedAssetId], v: v9420.RemoteLockedFungibleRecord][]>
}

export class XcmPalletSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asV9140(): XcmPalletSafeXcmVersionStorageV9140 {
        assert(this.isV9140)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface XcmPalletSafeXcmVersionStorageV9140 {
    get(): Promise<(number | undefined)>
}

export class XcmPalletSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV9140(): XcmPalletSupportedVersionStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '523e16bf5eab0fa24d391969017bb7ba96a0ccf8c757f474e1305f6fb2ca4c56'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV9370(): XcmPalletSupportedVersionStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV9420(): XcmPalletSupportedVersionStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface XcmPalletSupportedVersionStorageV9140 {
    get(key1: number, key2: v9140.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v9140.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9140.VersionedMultiLocation): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9140.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v9140.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v9140.VersionedMultiLocation): Promise<[k: [number, v9140.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface XcmPalletSupportedVersionStorageV9370 {
    get(key1: number, key2: v9370.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v9370.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9370.VersionedMultiLocation): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v9370.VersionedMultiLocation): Promise<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface XcmPalletSupportedVersionStorageV9420 {
    get(key1: number, key2: v9420.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v9420.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9420.VersionedMultiLocation): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9420.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v9420.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v9420.VersionedMultiLocation): Promise<[k: [number, v9420.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: number][]>
}

export class XcmPalletVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV9140(): XcmPalletVersionDiscoveryQueueStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'c083fea4cf1195adcbfad7e0e32371a867d5ee11c67b4620ec6977d399fd1aee'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV9370(): XcmPalletVersionDiscoveryQueueStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV9420(): XcmPalletVersionDiscoveryQueueStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface XcmPalletVersionDiscoveryQueueStorageV9140 {
    get(): Promise<[v9140.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface XcmPalletVersionDiscoveryQueueStorageV9370 {
    get(): Promise<[v9370.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface XcmPalletVersionDiscoveryQueueStorageV9420 {
    get(): Promise<[v9420.VersionedMultiLocation, number][]>
}

export class XcmPalletVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV9140(): XcmPalletVersionNotifiersStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'b91f3dac7afb55835a6f5f37431cda7a2fb7722283e5e5ad9feea7b84cffdc7a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV9370(): XcmPalletVersionNotifiersStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV9420(): XcmPalletVersionNotifiersStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface XcmPalletVersionNotifiersStorageV9140 {
    get(key1: number, key2: v9140.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v9140.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9140.VersionedMultiLocation): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9140.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v9140.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v9140.VersionedMultiLocation): Promise<[k: [number, v9140.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface XcmPalletVersionNotifiersStorageV9370 {
    get(key1: number, key2: v9370.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v9370.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9370.VersionedMultiLocation): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v9370.VersionedMultiLocation): Promise<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface XcmPalletVersionNotifiersStorageV9420 {
    get(key1: number, key2: v9420.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v9420.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9420.VersionedMultiLocation): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9420.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v9420.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v9420.VersionedMultiLocation): Promise<[k: [number, v9420.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: bigint][]>
}

export class XcmPalletVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV9140(): boolean {
        return this.getTypeHash() === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV9140(): XcmPalletVersionNotifyTargetsStorageV9140 {
        assert(this.isV9140)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '0366789a1c94a7567fc5a8d256e5cd0721b84138187c2fffb75e3528ebb47078'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV9370(): XcmPalletVersionNotifyTargetsStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV9420(): XcmPalletVersionNotifyTargetsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV9140 {
    get(key1: number, key2: v9140.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v9140.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9140.VersionedMultiLocation): Promise<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[number, v9140.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9140.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v9140.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v9140.VersionedMultiLocation): Promise<[k: [number, v9140.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9140.VersionedMultiLocation): AsyncIterable<[k: [number, v9140.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV9370 {
    get(key1: number, key2: v9370.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v9370.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9370.VersionedMultiLocation): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v9370.VersionedMultiLocation): Promise<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV9420 {
    get(key1: number, key2: v9420.VersionedMultiLocation): Promise<([bigint, v9420.Weight, number] | undefined)>
    getAll(): Promise<[bigint, v9420.Weight, number][]>
    getMany(keys: [number, v9420.VersionedMultiLocation][]): Promise<([bigint, v9420.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9420.VersionedMultiLocation): Promise<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[number, v9420.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9420.VersionedMultiLocation], v: [bigint, v9420.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, v9420.VersionedMultiLocation], v: [bigint, v9420.Weight, number]][]>
    getPairs(key1: number, key2: v9420.VersionedMultiLocation): Promise<[k: [number, v9420.VersionedMultiLocation], v: [bigint, v9420.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: [bigint, v9420.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: [bigint, v9420.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9420.VersionedMultiLocation): AsyncIterable<[k: [number, v9420.VersionedMultiLocation], v: [bigint, v9420.Weight, number]][]>
}

export class XcmPalletXcmExecutionSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'XcmExecutionSuspended'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get asV9420(): XcmPalletXcmExecutionSuspendedStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface XcmPalletXcmExecutionSuspendedStorageV9420 {
    get(): Promise<boolean>
}
