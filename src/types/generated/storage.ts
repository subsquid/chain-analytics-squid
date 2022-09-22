import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v1020 from './v1020'
import * as v1022 from './v1022'
import * as v1024 from './v1024'
import * as v1027 from './v1027'
import * as v1029 from './v1029'
import * as v1030 from './v1030'
import * as v1031 from './v1031'
import * as v1032 from './v1032'
import * as v1038 from './v1038'
import * as v1039 from './v1039'
import * as v1040 from './v1040'
import * as v1042 from './v1042'
import * as v1045 from './v1045'
import * as v1050 from './v1050'
import * as v1051 from './v1051'
import * as v1052 from './v1052'
import * as v1053 from './v1053'
import * as v1054 from './v1054'
import * as v1055 from './v1055'
import * as v1058 from './v1058'
import * as v1062 from './v1062'
import * as v2005 from './v2005'
import * as v2007 from './v2007'
import * as v2008 from './v2008'
import * as v2011 from './v2011'
import * as v2013 from './v2013'
import * as v2015 from './v2015'
import * as v2022 from './v2022'
import * as v2023 from './v2023'
import * as v2024 from './v2024'
import * as v2025 from './v2025'
import * as v2026 from './v2026'
import * as v2027 from './v2027'
import * as v2028 from './v2028'
import * as v2029 from './v2029'
import * as v2030 from './v2030'
import * as v9010 from './v9010'
import * as v9030 from './v9030'
import * as v9040 from './v9040'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9111 from './v9111'
import * as v9122 from './v9122'
import * as v9130 from './v9130'
import * as v9160 from './v9160'
import * as v9170 from './v9170'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9200 from './v9200'
import * as v9220 from './v9220'
import * as v9230 from './v9230'
import * as v9250 from './v9250'
import * as v9260 from './v9260'
import * as v9271 from './v9271'

export class AttestationsDidUpdateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1020() {
    return this._chain.getStorageItemTypeHash('Attestations', 'DidUpdate') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  async getAsV1020(): Promise<boolean> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Attestations', 'DidUpdate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Attestations', 'DidUpdate') != null
  }
}

export class AttestationsParaBlockAttestationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Attestations on a recent parachain block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Attestations', 'ParaBlockAttestations') === 'ad8a198a3d01e7d75d496c087e6ab07e033e442693b2dae9a0a735e7162a2bf3'
  }

  /**
   *  Attestations on a recent parachain block.
   */
  async getAsV1020(key1: number, key2: Uint8Array): Promise<v1020.BlockAttestations | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Attestations', 'ParaBlockAttestations', key1, key2)
  }

  async getManyAsV1020(keys: [number, Uint8Array][]): Promise<(v1020.BlockAttestations | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Attestations', 'ParaBlockAttestations', keys)
  }

  async getAllAsV1020(): Promise<(v1020.BlockAttestations)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Attestations', 'ParaBlockAttestations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Attestations', 'ParaBlockAttestations') != null
  }
}

export class AttestationsRecentParaBlocksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A mapping from modular block number (n % AttestationPeriod)
   *  to session index and the list of candidate hashes.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Attestations', 'RecentParaBlocks') === '331d739c1970fe15863a9470a57f354521e1e32b4c88a325098ff6848b5044ec'
  }

  /**
   *  A mapping from modular block number (n % AttestationPeriod)
   *  to session index and the list of candidate hashes.
   */
  async getAsV1020(key: number): Promise<v1020.IncludedBlocks | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Attestations', 'RecentParaBlocks', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(v1020.IncludedBlocks | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Attestations', 'RecentParaBlocks', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.IncludedBlocks)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Attestations', 'RecentParaBlocks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Attestations', 'RecentParaBlocks') != null
  }
}

export class AuctionsAuctionCounterStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of auctions started so far.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Auctions', 'AuctionCounter') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of auctions started so far.
   */
  async getAsV9010(): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Auctions', 'AuctionCounter')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Auctions', 'AuctionCounter') != null
  }
}

export class AuctionsAuctionInfoStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information relating to the current auction, if there is one.
   * 
   *  The first item in the tuple is the lease period index that the first of the four
   *  contiguous lease periods on auction is for. The second is the block number when the
   *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Auctions', 'AuctionInfo') === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
  }

  /**
   *  Information relating to the current auction, if there is one.
   * 
   *  The first item in the tuple is the lease period index that the first of the four
   *  contiguous lease periods on auction is for. The second is the block number when the
   *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
   */
  async getAsV9010(): Promise<[number, number] | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Auctions', 'AuctionInfo')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Auctions', 'AuctionInfo') != null
  }
}

export class AuctionsReservedAmountsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Amounts currently reserved in the accounts of the bidders currently winning
   *  (sub-)ranges.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Auctions', 'ReservedAmounts') === 'fda6a5cc800624ef757b3d079b088c0eebe85aa8e842b133f55d4d490b10f527'
  }

  /**
   *  Amounts currently reserved in the accounts of the bidders currently winning
   *  (sub-)ranges.
   */
  async getAsV9010(key: [Uint8Array, number]): Promise<bigint | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Auctions', 'ReservedAmounts', key)
  }

  async getManyAsV9010(keys: [Uint8Array, number][]): Promise<(bigint | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Auctions', 'ReservedAmounts', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(bigint)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Auctions', 'ReservedAmounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Auctions', 'ReservedAmounts') != null
  }
}

export class AuctionsWinningStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
   *  the current auction. The map's key is the 0-based index into the Sample Size. The
   *  first sample of the ending period is 0; the last is `Sample Size - 1`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Auctions', 'Winning') === 'ccec52f96cdd97c91b3c9b4297f402aec9614e99b08967c8c604f74277944587'
  }

  /**
   *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
   *  the current auction. The map's key is the 0-based index into the Sample Size. The
   *  first sample of the ending period is 0; the last is `Sample Size - 1`.
   */
  async getAsV9010(key: number): Promise<([Uint8Array, number, bigint] | undefined)[] | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Auctions', 'Winning', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Auctions', 'Winning', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(([Uint8Array, number, bigint] | undefined)[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Auctions', 'Winning')
  }

  /**
   *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
   *  the current auction. The map's key is the 0-based index into the Sample Size. The
   *  first sample of the ending period is 0; the last is `Sample Size - 1`.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Auctions', 'Winning') === '50afa484f0cd0b49800ca936e6d5aef816fcfd7b469149f3f61b1d41d4e2bd86'
  }

  /**
   *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
   *  the current auction. The map's key is the 0-based index into the Sample Size. The
   *  first sample of the ending period is 0; the last is `Sample Size - 1`.
   */
  async getAsV9111(key: number): Promise<([Uint8Array, number, bigint] | undefined)[] | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Auctions', 'Winning', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Auctions', 'Winning', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(([Uint8Array, number, bigint] | undefined)[])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Auctions', 'Winning')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Auctions', 'Winning') != null
  }
}

export class AuthorshipAuthorStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Author of current block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Author') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  Author of current block.
   */
  async getAsV1020(): Promise<Uint8Array | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'Author')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'Author') != null
  }
}

export class AuthorshipDidSetUnclesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Whether uncles were already set in this block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Authorship', 'DidSetUncles') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Whether uncles were already set in this block.
   */
  async getAsV1020(): Promise<boolean> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'DidSetUncles')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'DidSetUncles') != null
  }
}

export class AuthorshipUnclesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Uncles
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') === 'e10c952327a3967ba23352da69594b66914b44ebcef7e4703bb69fed952ecdd6'
  }

  /**
   *  Uncles
   */
  async getAsV1020(): Promise<v1020.UncleEntryItem[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'Uncles')
  }

  /**
   *  Uncles
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
  }

  /**
   *  Uncles
   */
  async getAsV9111(): Promise<v9111.UncleEntryItem[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'Uncles')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') != null
  }
}

export class BabeAuthorVrfRandomnessStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Temporary value (cleared at block finalization) that includes the VRF output generated
   *  at this block. This field should always be populated during block processing unless
   *  secondary plain slots are enabled (which don't contain a VRF output).
   */
  get isV2026() {
    return this._chain.getStorageItemTypeHash('Babe', 'AuthorVrfRandomness') === '10a2769b0f42175702ad26b83248cff46d4c3e32ecee58ea6ff2417630585d13'
  }

  /**
   *  Temporary value (cleared at block finalization) that includes the VRF output generated
   *  at this block. This field should always be populated during block processing unless
   *  secondary plain slots are enabled (which don't contain a VRF output).
   */
  async getAsV2026(): Promise<(Uint8Array | undefined)> {
    assert(this.isV2026)
    return this._chain.getStorage(this.blockHash, 'Babe', 'AuthorVrfRandomness')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'AuthorVrfRandomness') != null
  }
}

export class BabeAuthoritiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current epoch authorities.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Babe', 'Authorities') === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
  }

  /**
   *  Current epoch authorities.
   */
  async getAsV1020(): Promise<[Uint8Array, bigint][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Babe', 'Authorities')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'Authorities') != null
  }
}

export class BabeCurrentSlotStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current slot number.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Babe', 'CurrentSlot') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  Current slot number.
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Babe', 'CurrentSlot')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'CurrentSlot') != null
  }
}

export class BabeEpochConfigStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('Babe', 'EpochConfig') === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
  }

  /**
   *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
   */
  async getAsV2030(): Promise<v2030.BabeEpochConfiguration | undefined> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'Babe', 'EpochConfig')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'EpochConfig') != null
  }
}

export class BabeEpochIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current epoch index.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Babe', 'EpochIndex') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  Current epoch index.
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Babe', 'EpochIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'EpochIndex') != null
  }
}

export class BabeEpochStartStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The block numbers when the last and current epoch have started, respectively `N-1` and
   *  `N`.
   *  NOTE: We track this is in order to annotate the block number when a given pool of
   *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
   *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('Babe', 'EpochStart') === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
  }

  /**
   *  The block numbers when the last and current epoch have started, respectively `N-1` and
   *  `N`.
   *  NOTE: We track this is in order to annotate the block number when a given pool of
   *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
   *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
   */
  async getAsV2030(): Promise<[number, number]> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'Babe', 'EpochStart')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'EpochStart') != null
  }
}

export class BabeGenesisSlotStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The slot at which the first epoch actually started. This is 0
   *  until the first block of the chain.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Babe', 'GenesisSlot') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The slot at which the first epoch actually started. This is 0
   *  until the first block of the chain.
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Babe', 'GenesisSlot')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'GenesisSlot') != null
  }
}

export class BabeInitializedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Temporary value (cleared at block finalization) which is `Some`
   *  if per-block initialization has already been called for current block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Babe', 'Initialized') === 'baa8b35cc3c4f9962c8e7906c4e027bf52bf107cfe165d1c64edc4d8707f6b83'
  }

  /**
   *  Temporary value (cleared at block finalization) which is `Some`
   *  if per-block initialization has already been called for current block.
   */
  async getAsV1020(): Promise<(Uint8Array | undefined) | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Babe', 'Initialized')
  }

  /**
   *  Temporary value (cleared at block finalization) which is `Some`
   *  if per-block initialization has already been called for current block.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('Babe', 'Initialized') === '16ccca942b9cb8220d11bc4ab1a33375a3c8ed33a2e69b60561f6e99a60ae492'
  }

  /**
   *  Temporary value (cleared at block finalization) which is `Some`
   *  if per-block initialization has already been called for current block.
   */
  async getAsV9220(): Promise<(v9220.PreDigest | undefined) | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'Babe', 'Initialized')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'Initialized') != null
  }
}

export class BabeLatenessStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  How late the current block is compared to its parent.
   * 
   *  This entry is populated as part of block execution and is cleaned up
   *  on block finalization. Querying this storage entry outside of block
   *  execution context should always yield zero.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Babe', 'Lateness') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  How late the current block is compared to its parent.
   * 
   *  This entry is populated as part of block execution and is cleaned up
   *  on block finalization. Querying this storage entry outside of block
   *  execution context should always yield zero.
   */
  async getAsV1058(): Promise<number> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Babe', 'Lateness')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'Lateness') != null
  }
}

export class BabeNextAuthoritiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Next epoch authorities.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Babe', 'NextAuthorities') === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
  }

  /**
   *  Next epoch authorities.
   */
  async getAsV2028(): Promise<[Uint8Array, bigint][]> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Babe', 'NextAuthorities')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'NextAuthorities') != null
  }
}

export class BabeNextEpochConfigStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Next epoch configuration, if changed.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Babe', 'NextEpochConfig') === '7cecabccfcfa3b536bdcfd233ae6e9de2c062ee4f7139316c4dc3f1d5c89c059'
  }

  /**
   *  Next epoch configuration, if changed.
   */
  async getAsV2005(): Promise<v2005.NextConfigDescriptor | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Babe', 'NextEpochConfig')
  }

  /**
   *  The configuration for the next epoch, `None` if the config will not change
   *  (you can fallback to `EpochConfig` instead in that case).
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('Babe', 'NextEpochConfig') === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
  }

  /**
   *  The configuration for the next epoch, `None` if the config will not change
   *  (you can fallback to `EpochConfig` instead in that case).
   */
  async getAsV2030(): Promise<v2030.BabeEpochConfiguration | undefined> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'Babe', 'NextEpochConfig')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'NextEpochConfig') != null
  }
}

export class BabeNextRandomnessStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Next epoch randomness.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Babe', 'NextRandomness') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Next epoch randomness.
   */
  async getAsV1020(): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Babe', 'NextRandomness')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'NextRandomness') != null
  }
}

export class BabePendingEpochConfigChangeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pending epoch configuration change that will be applied when the next epoch is enacted.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('Babe', 'PendingEpochConfigChange') === '7cecabccfcfa3b536bdcfd233ae6e9de2c062ee4f7139316c4dc3f1d5c89c059'
  }

  /**
   *  Pending epoch configuration change that will be applied when the next epoch is enacted.
   */
  async getAsV2030(): Promise<v2030.NextConfigDescriptor | undefined> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'Babe', 'PendingEpochConfigChange')
  }

  /**
   *  Pending epoch configuration change that will be applied when the next epoch is enacted.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Babe', 'PendingEpochConfigChange') === 'f5cc4c82ad97d6c0a6152a4f85104de3d2cb7e03288f50c7291e3d6fd9a88b9c'
  }

  /**
   *  Pending epoch configuration change that will be applied when the next epoch is enacted.
   */
  async getAsV9111(): Promise<v9111.NextConfigDescriptor | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Babe', 'PendingEpochConfigChange')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'PendingEpochConfigChange') != null
  }
}

export class BabeRandomnessStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Babe', 'Randomness') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
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
  async getAsV1020(): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Babe', 'Randomness')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'Randomness') != null
  }
}

export class BabeSegmentIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Babe', 'SegmentIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
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
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Babe', 'SegmentIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'SegmentIndex') != null
  }
}

export class BabeUnderConstructionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1020() {
    return this._chain.getStorageItemTypeHash('Babe', 'UnderConstruction') === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
  }

  async getAsV1020(key: number): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Babe', 'UnderConstruction', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Babe', 'UnderConstruction', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Babe', 'UnderConstruction')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Babe', 'UnderConstruction') != null
  }
}

export class BagsListCounterForListNodesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  How many ids are registered.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('BagsList', 'CounterForListNodes') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  How many ids are registered.
   */
  async getAsV9111(): Promise<number> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'BagsList', 'CounterForListNodes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('BagsList', 'CounterForListNodes') != null
  }
}

export class BagsListListBagsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A bag stored in storage.
   * 
   *  Stores a `Bag` struct, which stores head and tail pointers to itself.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('BagsList', 'ListBags') === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
  }

  /**
   *  A bag stored in storage.
   * 
   *  Stores a `Bag` struct, which stores head and tail pointers to itself.
   */
  async getAsV9111(key: bigint): Promise<v9111.Bag | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'BagsList', 'ListBags', key)
  }

  async getManyAsV9111(keys: bigint[]): Promise<(v9111.Bag | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'BagsList', 'ListBags', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Bag)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'BagsList', 'ListBags')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('BagsList', 'ListBags') != null
  }
}

export class BagsListListNodesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A single node, within some bag.
   * 
   *  Nodes store links forward and back within their respective bags.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('BagsList', 'ListNodes') === 'e07d9d0de844ae72bdfc2a5781243a5d680dcb863542337f28bae8b21536e8d2'
  }

  /**
   *  A single node, within some bag.
   * 
   *  Nodes store links forward and back within their respective bags.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.Node | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'BagsList', 'ListNodes', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.Node | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'BagsList', 'ListNodes', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Node)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'BagsList', 'ListNodes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('BagsList', 'ListNodes') != null
  }
}

export class BalancesAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
   *  is ever zero, then the entry *MUST* be removed.
   * 
   *  NOTE: This is only used in the case that this module is used to store balances.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
   *  is ever zero, then the entry *MUST* be removed.
   * 
   *  NOTE: This is only used in the case that this module is used to store balances.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.AccountData> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.AccountData)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.AccountData)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') != null
  }
}

export class BalancesFreeBalanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The 'free' balance of a given account.
   * 
   *  This is the only balance that matters in terms of most operations on tokens. It
   *  alone is used to determine the balance when in the contract execution environment. When this
   *  balance falls below the value of `ExistentialDeposit`, then the 'current account' is
   *  deleted: specifically `FreeBalance`. Further, the `OnFreeBalanceZero` callback
   *  is invoked, giving a chance to external modules to clean up data associated with
   *  the deleted account.
   * 
   *  `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets
   *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Balances', 'FreeBalance') === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
  }

  /**
   *  The 'free' balance of a given account.
   * 
   *  This is the only balance that matters in terms of most operations on tokens. It
   *  alone is used to determine the balance when in the contract execution environment. When this
   *  balance falls below the value of `ExistentialDeposit`, then the 'current account' is
   *  deleted: specifically `FreeBalance`. Further, the `OnFreeBalanceZero` callback
   *  is invoked, giving a chance to external modules to clean up data associated with
   *  the deleted account.
   * 
   *  `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets
   *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.
   */
  async getAsV1020(key: Uint8Array): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Balances', 'FreeBalance', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(bigint)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'FreeBalance', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(bigint)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'FreeBalance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'FreeBalance') != null
  }
}

export class BalancesLocksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any liquidity locks on some account balances.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') === '329862747441bc673e51ce6a50e7fd4e419560625c603bf3cee1e4cbf5404f36'
  }

  /**
   *  Any liquidity locks on some account balances.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.BalanceLock[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Locks', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.BalanceLock[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.BalanceLock[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks')
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.BalanceLock[]> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Locks', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.BalanceLock[])[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.BalanceLock[])[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') != null
  }
}

export class BalancesNextFeeMultiplierStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1020() {
    return this._chain.getStorageItemTypeHash('Balances', 'NextFeeMultiplier') === '3c9260c078e57deb94e3d10dca1995a3263c48d53634c311a3537412486bb35e'
  }

  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Balances', 'NextFeeMultiplier')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'NextFeeMultiplier') != null
  }
}

export class BalancesReservedBalanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The amount of the balance of a given account that is externally reserved; this can still get
   *  slashed, but gets slashed last of all.
   * 
   *  This balance is a 'reserve' balance that other subsystems use in order to set aside tokens
   *  that are still 'owned' by the account holder, but which are suspendable.
   * 
   *  When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account'
   *  is deleted: specifically, `ReservedBalance`.
   * 
   *  `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets
   *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.)
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Balances', 'ReservedBalance') === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
  }

  /**
   *  The amount of the balance of a given account that is externally reserved; this can still get
   *  slashed, but gets slashed last of all.
   * 
   *  This balance is a 'reserve' balance that other subsystems use in order to set aside tokens
   *  that are still 'owned' by the account holder, but which are suspendable.
   * 
   *  When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account'
   *  is deleted: specifically, `ReservedBalance`.
   * 
   *  `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets
   *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.)
   */
  async getAsV1020(key: Uint8Array): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Balances', 'ReservedBalance', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(bigint)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'ReservedBalance', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(bigint)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'ReservedBalance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'ReservedBalance') != null
  }
}

export class BalancesReservesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Named reserves on some account balances.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Balances', 'Reserves') === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
  }

  /**
   *  Named reserves on some account balances.
   */
  async getAsV9050(key: Uint8Array): Promise<v9050.ReserveData[]> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Reserves', key)
  }

  async getManyAsV9050(keys: Uint8Array[]): Promise<(v9050.ReserveData[])[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Reserves', keys.map(k => [k]))
  }

  async getAllAsV9050(): Promise<(v9050.ReserveData[])[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Reserves')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Reserves') != null
  }
}

export class BalancesStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  async getAsV1050(): Promise<v1050.Releases> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Balances', 'StorageVersion')
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  async getAsV9111(): Promise<v9111.Releases> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Balances', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') != null
  }
}

export class BalancesTotalIssuanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total units issued in the system.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class BalancesVestingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information regarding the vesting of a given account.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Balances', 'Vesting') === '70ea21851f5b3aaf2fe97373762ec4196dec739099ef671cf4f20dd079aa66b4'
  }

  /**
   *  Information regarding the vesting of a given account.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.VestingSchedule | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Vesting', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.VestingSchedule | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Vesting', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.VestingSchedule)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Vesting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Vesting') != null
  }
}

export class BountiesBountiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Bounties that have been made.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV9111(key: number): Promise<v9111.Bounty | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'Bounties', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.Bounty | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Bounty)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') != null
  }
}

export class BountiesBountyApprovalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Bounty indices that have been approved but not yet funded.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyApprovals') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Bounty indices that have been approved but not yet funded.
   */
  async getAsV9111(): Promise<number[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'BountyApprovals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyApprovals') != null
  }
}

export class BountiesBountyCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of bounty proposals that have been made.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of bounty proposals that have been made.
   */
  async getAsV9111(): Promise<number> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'BountyCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyCount') != null
  }
}

export class BountiesBountyDescriptionsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The description of each bounty.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each bounty.
   */
  async getAsV9111(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'BountyDescriptions', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'BountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(Uint8Array)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'BountyDescriptions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyDescriptions') != null
  }
}

export class ChildBountiesChildBountiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Child-bounties that have been added.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBounties') === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
  }

  /**
   *  Child-bounties that have been added.
   */
  async getAsV9190(key1: number, key2: number): Promise<v9190.ChildBounty | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'ChildBounties', 'ChildBounties', key1, key2)
  }

  async getManyAsV9190(keys: [number, number][]): Promise<(v9190.ChildBounty | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBounties', keys)
  }

  async getAllAsV9190(): Promise<(v9190.ChildBounty)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBounties')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBounties') != null
  }
}

export class ChildBountiesChildBountyCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of total child bounties.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBountyCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of total child bounties.
   */
  async getAsV9190(): Promise<number> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'ChildBounties', 'ChildBountyCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBountyCount') != null
  }
}

export class ChildBountiesChildBountyDescriptionsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The description of each child-bounty.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each child-bounty.
   */
  async getAsV9190(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'ChildBounties', 'ChildBountyDescriptions', key)
  }

  async getManyAsV9190(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV9190(): Promise<(Uint8Array)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildBountyDescriptions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildBountyDescriptions') != null
  }
}

export class ChildBountiesChildrenCuratorFeesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The cumulative child-bounty curator fee for each parent bounty.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildrenCuratorFees') === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
  }

  /**
   *  The cumulative child-bounty curator fee for each parent bounty.
   */
  async getAsV9190(key: number): Promise<bigint> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'ChildBounties', 'ChildrenCuratorFees', key)
  }

  async getManyAsV9190(keys: number[]): Promise<(bigint)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildrenCuratorFees', keys.map(k => [k]))
  }

  async getAllAsV9190(): Promise<(bigint)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ChildrenCuratorFees')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ChildrenCuratorFees') != null
  }
}

export class ChildBountiesParentChildBountiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of child-bounties per parent bounty.
   *  Map of parent bounty index to number of child bounties.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ParentChildBounties') === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
  }

  /**
   *  Number of child-bounties per parent bounty.
   *  Map of parent bounty index to number of child bounties.
   */
  async getAsV9190(key: number): Promise<number> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'ChildBounties', 'ParentChildBounties', key)
  }

  async getManyAsV9190(keys: number[]): Promise<(number)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ParentChildBounties', keys.map(k => [k]))
  }

  async getAllAsV9190(): Promise<(number)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'ChildBounties', 'ParentChildBounties')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ChildBounties', 'ParentChildBounties') != null
  }
}

export class ClaimsClaimsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1020() {
    return this._chain.getStorageItemTypeHash('Claims', 'Claims') === 'a4e45b744228821d2d599c2e7bd1993b9bd523df83f8ee660f73e52be555e75c'
  }

  async getAsV1020(key: Uint8Array): Promise<bigint | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Claims', 'Claims', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(bigint | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Claims', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(bigint)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Claims')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Claims', 'Claims') != null
  }
}

export class ClaimsPreclaimsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Claims', 'Preclaims') === 'aedc9d9adf78c2e711b858d1696263a8b674eb7b149cc3ba7ab036d78ef5720d'
  }

  /**
   *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
   */
  async getAsV2005(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Claims', 'Preclaims', key)
  }

  async getManyAsV2005(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Preclaims', keys.map(k => [k]))
  }

  async getAllAsV2005(): Promise<(Uint8Array)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Preclaims')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Claims', 'Preclaims') != null
  }
}

export class ClaimsSigningStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The statement kind that must be signed, if any.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Claims', 'Signing') === '6f2974b0bc6719581bb9f20af8ac8795a47255266687127e2ee37f8df92bfb51'
  }

  /**
   *  The statement kind that must be signed, if any.
   */
  async getAsV2005(key: Uint8Array): Promise<v2005.StatementKind | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Claims', 'Signing', key)
  }

  async getManyAsV2005(keys: Uint8Array[]): Promise<(v2005.StatementKind | undefined)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Signing', keys.map(k => [k]))
  }

  async getAllAsV2005(): Promise<(v2005.StatementKind)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Signing')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Claims', 'Signing') != null
  }
}

export class ClaimsTotalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1020() {
    return this._chain.getStorageItemTypeHash('Claims', 'Total') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Claims', 'Total')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Claims', 'Total') != null
  }
}

export class ClaimsVestingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Vesting schedule for a claim.
   *  First balance is the total amount that should be held for vesting.
   *  Second balance is how much should be unlocked per block.
   *  The block number is when the vesting should start.
   */
  get isV1024() {
    return this._chain.getStorageItemTypeHash('Claims', 'Vesting') === 'fb6e9345088f9784f1d027b11eaa907f04187e59dea733acc7ff1be7dd341d6f'
  }

  /**
   *  Vesting schedule for a claim.
   *  First balance is the total amount that should be held for vesting.
   *  Second balance is how much should be unlocked per block.
   *  The block number is when the vesting should start.
   */
  async getAsV1024(key: Uint8Array): Promise<[bigint, bigint, number] | undefined> {
    assert(this.isV1024)
    return this._chain.getStorage(this.blockHash, 'Claims', 'Vesting', key)
  }

  async getManyAsV1024(keys: Uint8Array[]): Promise<([bigint, bigint, number] | undefined)[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Vesting', keys.map(k => [k]))
  }

  async getAllAsV1024(): Promise<([bigint, bigint, number])[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Vesting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Claims', 'Vesting') != null
  }
}

export class ConfigurationActiveConfigStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The active configuration for the current session.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Configuration', 'ActiveConfig') === 'c083cec301f8abae0215094a7d3f838418d1b61c82eaf8f51690d126aa7bab3e'
  }

  /**
   *  The active configuration for the current session.
   */
  async getAsV9010(): Promise<v9010.HostConfiguration> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Configuration', 'ActiveConfig')
  }

  /**
   *  The active configuration for the current session.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Configuration', 'ActiveConfig') === '3b411eb762090842fcb3eb731a73f8155fb7e5c0aab9d12d8afab26e199e7e4b'
  }

  /**
   *  The active configuration for the current session.
   */
  async getAsV9111(): Promise<v9111.HostConfiguration> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Configuration', 'ActiveConfig')
  }

  /**
   *  The active configuration for the current session.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Configuration', 'ActiveConfig') === '2f8b682bb3ba64c97cf407fce38c85cea560822df61abded7d790568ae6783d5'
  }

  /**
   *  The active configuration for the current session.
   */
  async getAsV9160(): Promise<v9160.HostConfiguration> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Configuration', 'ActiveConfig')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Configuration', 'ActiveConfig') != null
  }
}

export class ConfigurationBypassConsistencyCheckStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  If this is set, then the configuration setters will bypass the consistency checks. This
   *  is meant to be used only as the last resort.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Configuration', 'BypassConsistencyCheck') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  If this is set, then the configuration setters will bypass the consistency checks. This
   *  is meant to be used only as the last resort.
   */
  async getAsV9160(): Promise<boolean> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Configuration', 'BypassConsistencyCheck')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Configuration', 'BypassConsistencyCheck') != null
  }
}

export class ConfigurationPendingConfigStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pending configuration (if any) for the next session.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Configuration', 'PendingConfig') === 'df282e2976abbcac8359f05072ed80135ebc9760900f21d932fe5a29c921168b'
  }

  /**
   *  Pending configuration (if any) for the next session.
   */
  async getAsV9010(key: number): Promise<v9010.HostConfiguration | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Configuration', 'PendingConfig', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.HostConfiguration | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Configuration', 'PendingConfig', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.HostConfiguration)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Configuration', 'PendingConfig')
  }

  /**
   *  Pending configuration (if any) for the next session.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Configuration', 'PendingConfig') === '260f6403d8b6c797e03fa4606d6d2021dcd15ad353b2cd28c6ed27230e602897'
  }

  /**
   *  Pending configuration (if any) for the next session.
   */
  async getAsV9111(key: number): Promise<v9111.HostConfiguration | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Configuration', 'PendingConfig', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.HostConfiguration | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Configuration', 'PendingConfig', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.HostConfiguration)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Configuration', 'PendingConfig')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Configuration', 'PendingConfig') != null
  }
}

export class ConfigurationPendingConfigsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Configuration', 'PendingConfigs') === '64b626b1a713b38b2912ea906474713d0426d98b496a254dedaf0d5664daef62'
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
  async getAsV9160(): Promise<[number, v9160.HostConfiguration][]> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Configuration', 'PendingConfigs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Configuration', 'PendingConfigs') != null
  }
}

export class CouncilMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV9111(): Promise<Uint8Array[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Council', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Members') != null
  }
}

export class CouncilPrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Council', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsV9111(): Promise<Uint8Array | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Council', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Prime') != null
  }
}

export class CouncilProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV9111(): Promise<number> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') != null
  }
}

export class CouncilProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.Call | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.Call | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Call)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9122() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9122(key: Uint8Array): Promise<v9122.Call | undefined> {
    assert(this.isV9122)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9122(keys: Uint8Array[]): Promise<(v9122.Call | undefined)[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9122(): Promise<(v9122.Call)[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '000fa9eac9f34fd52e1de16af6c8184e689b16aff5b69e5b770310c6592b9a23'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9130(key: Uint8Array): Promise<v9130.Call | undefined> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9130(keys: Uint8Array[]): Promise<(v9130.Call | undefined)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9130(): Promise<(v9130.Call)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'ae191f57edfafa0ed77684f6c6956e661698f7626fcceabc35fc02aa204fc327'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9160(key: Uint8Array): Promise<v9160.Call | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9160(keys: Uint8Array[]): Promise<(v9160.Call | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.Call)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '92131b74d89cee349edae227d67d4039f396e38796421ef6ccad698229d1be87'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9170(key: Uint8Array): Promise<v9170.Call | undefined> {
    assert(this.isV9170)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9170(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9170(): Promise<(v9170.Call)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '75d269266869aab19a7c849bd16e82439d759218a7ceb76d9d44ca8913eac77b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9180(key: Uint8Array): Promise<v9180.Call | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9180(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9180(): Promise<(v9180.Call)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'ad90492cf87d0e7973eb29afcc4224fdcd5cea7edbc9f874a78e09ffb7af764a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9190(key: Uint8Array): Promise<v9190.Call | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9190(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9190(): Promise<(v9190.Call)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '4364e985a64c3f6addf377d90f061349553d92fcbc29839df8b7cde1ec346b0c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9220(key: Uint8Array): Promise<v9220.Call | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9220(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(v9220.Call)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '60a712e8f852a3af336091a63ce735a781e9f17a09e4fb3ea560e93a76c19d2e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9230(key: Uint8Array): Promise<v9230.Call | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9230(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9230(): Promise<(v9230.Call)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9250() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'c62c655cbb15038afffc766086c6f698f366a8695bacaa50b3b5b2d97d4b89f5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9250(key: Uint8Array): Promise<v9250.Call | undefined> {
    assert(this.isV9250)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9250(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9250(): Promise<(v9250.Call)[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9271() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'b6f7b824ac82eac6e00f10809e508dfaacd22dda3aeafc8c9374020bd69d27ad'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9271(key: Uint8Array): Promise<v9271.Call | undefined> {
    assert(this.isV9271)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9271(keys: Uint8Array[]): Promise<(v9271.Call | undefined)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9271(): Promise<(v9271.Call)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') != null
  }
}

export class CouncilProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The hashes of the active proposals.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Council', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV9111(): Promise<Uint8Array[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Council', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Proposals') != null
  }
}

export class CouncilVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Council', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.Votes | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Council', 'Voting', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.Votes | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Council', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Votes)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Council', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Voting') != null
  }
}

export class CrowdloanEndingsCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of auctions that have entered into their ending period so far.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'EndingsCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of auctions that have entered into their ending period so far.
   */
  async getAsV9010(): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Crowdloan', 'EndingsCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'EndingsCount') != null
  }
}

export class CrowdloanFundsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Info on all of the funds.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'Funds') === 'eb9089ef4c01c54f3287c4396bf755b671cecb8b45487320ccd4d35e3df76840'
  }

  /**
   *  Info on all of the funds.
   */
  async getAsV9010(key: number): Promise<v9010.FundInfo | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Crowdloan', 'Funds', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.FundInfo | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Crowdloan', 'Funds', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.FundInfo)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Crowdloan', 'Funds')
  }

  /**
   *  Info on all of the funds.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'Funds') === '12ab1ac19ae156d5acf61b3bdb7d29a147b5793947baca0144497ee7e32553c2'
  }

  /**
   *  Info on all of the funds.
   */
  async getAsV9111(key: number): Promise<v9111.FundInfo | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Crowdloan', 'Funds', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.FundInfo | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Crowdloan', 'Funds', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.FundInfo)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Crowdloan', 'Funds')
  }

  /**
   *  Info on all of the funds.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'Funds') === 'e837aa8c7af80bff126d455e0237189b2b62b5bf6586a1f2e67a22edfaf5a596'
  }

  /**
   *  Info on all of the funds.
   */
  async getAsV9180(key: number): Promise<v9180.FundInfo | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'Crowdloan', 'Funds', key)
  }

  async getManyAsV9180(keys: number[]): Promise<(v9180.FundInfo | undefined)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Crowdloan', 'Funds', keys.map(k => [k]))
  }

  async getAllAsV9180(): Promise<(v9180.FundInfo)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Crowdloan', 'Funds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'Funds') != null
  }
}

export class CrowdloanNewRaiseStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The funds that have had additional contributions during the last block. This is used
   *  in order to determine which funds should submit new or updated bids.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'NewRaise') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  The funds that have had additional contributions during the last block. This is used
   *  in order to determine which funds should submit new or updated bids.
   */
  async getAsV9010(): Promise<number[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Crowdloan', 'NewRaise')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'NewRaise') != null
  }
}

export class CrowdloanNextFundIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Tracker for the next available fund index
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'NextFundIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Tracker for the next available fund index
   */
  async getAsV9180(): Promise<number> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'Crowdloan', 'NextFundIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'NextFundIndex') != null
  }
}

export class CrowdloanNextTrieIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Tracker for the next available trie index
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'NextTrieIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Tracker for the next available trie index
   */
  async getAsV9010(): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Crowdloan', 'NextTrieIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Crowdloan', 'NextTrieIndex') != null
  }
}

export class DemocracyBlacklistStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A record of who vetoed what. Maps proposal hash to a possible existent block number
   *  (until when it may not be resubmitted) and who vetoed it.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Blacklist') === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
  }

  /**
   *  A record of who vetoed what. Maps proposal hash to a possible existent block number
   *  (until when it may not be resubmitted) and who vetoed it.
   */
  async getAsV1020(key: Uint8Array): Promise<[number, Uint8Array[]] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Blacklist', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Blacklist', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<([number, Uint8Array[]])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Blacklist')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Blacklist') != null
  }
}

export class DemocracyCancellationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Record of all proposals that have been subject to emergency cancellation.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Cancellations') === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
  }

  /**
   *  Record of all proposals that have been subject to emergency cancellation.
   */
  async getAsV1020(key: Uint8Array): Promise<boolean> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Cancellations', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(boolean)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Cancellations', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(boolean)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Cancellations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Cancellations') != null
  }
}

export class DemocracyDelegationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Get the account (and lock periods) to which another account is delegating vote.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Delegations') === 'a8c56ca27cefe7fc41a2a363a935c8042399b85c552b937e8e5a006f0a9cc4aa'
  }

  /**
   *  Get the account (and lock periods) to which another account is delegating vote.
   */
  async getAsV1020(key: Uint8Array): Promise<[Uint8Array, v1020.Conviction]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Delegations', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<([Uint8Array, v1020.Conviction])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Delegations', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<([Uint8Array, v1020.Conviction])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Delegations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Delegations') != null
  }
}

export class DemocracyDepositOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Those who have locked a deposit.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'DepositOf') === '83cec356b097452496e9033ac60105a18a989e0451716fcebdf5ada22fdda33a'
  }

  /**
   *  Those who have locked a deposit.
   */
  async getAsV1020(key: number): Promise<[bigint, Uint8Array[]] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'DepositOf', key)
  }

  async getManyAsV1020(keys: number[]): Promise<([bigint, Uint8Array[]] | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf')
  }

  /**
   *  Those who have locked a deposit.
   * 
   *  TWOX-NOTE: Safe, as increasing integer keys are safe.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Democracy', 'DepositOf') === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
  }

  /**
   *  Those who have locked a deposit.
   * 
   *  TWOX-NOTE: Safe, as increasing integer keys are safe.
   */
  async getAsV2005(key: number): Promise<[Uint8Array[], bigint] | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'DepositOf', key)
  }

  async getManyAsV2005(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf', keys.map(k => [k]))
  }

  async getAllAsV2005(): Promise<([Uint8Array[], bigint])[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'DepositOf') != null
  }
}

export class DemocracyDispatchQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Queue of successful referenda to be dispatched.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'DispatchQueue') === '9b0c5c62a8920d3e20d388cd89dee8718c21938d9ea9cfed8c78181fb19ae244'
  }

  /**
   *  Queue of successful referenda to be dispatched.
   */
  async getAsV1020(key: number): Promise<([v1020.Proposal, number] | undefined)[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'DispatchQueue', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(([v1020.Proposal, number] | undefined)[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DispatchQueue', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(([v1020.Proposal, number] | undefined)[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DispatchQueue')
  }

  /**
   *  Queue of successful referenda to be dispatched.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Democracy', 'DispatchQueue') === '857f0787f9dd09673d3dff9d1087d2ba779e2fd2d63c8dd0ef4fc24b0e9f8e58'
  }

  /**
   *  Queue of successful referenda to be dispatched.
   */
  async getAsV1022(key: number): Promise<([Uint8Array, number] | undefined)[]> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'DispatchQueue', key)
  }

  async getManyAsV1022(keys: number[]): Promise<(([Uint8Array, number] | undefined)[])[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DispatchQueue', keys.map(k => [k]))
  }

  async getAllAsV1022(): Promise<(([Uint8Array, number] | undefined)[])[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DispatchQueue')
  }

  /**
   *  Queue of successful referenda to be dispatched. Stored ordered by block number.
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('Democracy', 'DispatchQueue') === '11ee03d6bb6c669f52ca4d2d69396c941dc13acd7557ace6bccfba659b340697'
  }

  /**
   *  Queue of successful referenda to be dispatched. Stored ordered by block number.
   */
  async getAsV1030(): Promise<[number, Uint8Array, number][]> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'DispatchQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'DispatchQueue') != null
  }
}

export class DemocracyLastTabledWasExternalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if the last referendum tabled was submitted externally. False if it was a public
   *  proposal.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'LastTabledWasExternal') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if the last referendum tabled was submitted externally. False if it was a public
   *  proposal.
   */
  async getAsV1020(): Promise<boolean> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'LastTabledWasExternal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'LastTabledWasExternal') != null
  }
}

export class DemocracyLocksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Accounts for which there are locks in action which may be removed at some point in the
   *  future. The value is the block number at which the lock expires and may be removed.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Locks') === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
  }

  /**
   *  Accounts for which there are locks in action which may be removed at some point in the
   *  future. The value is the block number at which the lock expires and may be removed.
   */
  async getAsV1050(key: Uint8Array): Promise<number | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Locks', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(number | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Locks', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(number)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Locks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Locks') != null
  }
}

export class DemocracyLowestUnbakedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The lowest referendum index representing an unbaked referendum. Equal to
   *  `ReferendumCount` if there isn't a unbaked referendum.
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('Democracy', 'LowestUnbaked') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The lowest referendum index representing an unbaked referendum. Equal to
   *  `ReferendumCount` if there isn't a unbaked referendum.
   */
  async getAsV1030(): Promise<number> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'LowestUnbaked')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'LowestUnbaked') != null
  }
}

export class DemocracyNextExternalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The referendum to be tabled whenever it would be valid to table an external proposal.
   *  This happens when a referendum needs to be tabled and one of two conditions are met:
   *  - `LastTabledWasExternal` is `false`; or
   *  - `PublicProps` is empty.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextExternal') === '42128beccb199d46a6bec373802f7f37302904f9ff5a483e3456985c675c9c34'
  }

  /**
   *  The referendum to be tabled whenever it would be valid to table an external proposal.
   *  This happens when a referendum needs to be tabled and one of two conditions are met:
   *  - `LastTabledWasExternal` is `false`; or
   *  - `PublicProps` is empty.
   */
  async getAsV1020(): Promise<[v1020.Proposal, v1020.VoteThreshold] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'NextExternal')
  }

  /**
   *  The referendum to be tabled whenever it would be valid to table an external proposal.
   *  This happens when a referendum needs to be tabled and one of two conditions are met:
   *  - `LastTabledWasExternal` is `false`; or
   *  - `PublicProps` is empty.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextExternal') === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
  }

  /**
   *  The referendum to be tabled whenever it would be valid to table an external proposal.
   *  This happens when a referendum needs to be tabled and one of two conditions are met:
   *  - `LastTabledWasExternal` is `false`; or
   *  - `PublicProps` is empty.
   */
  async getAsV1022(): Promise<[Uint8Array, v1022.VoteThreshold] | undefined> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'NextExternal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextExternal') != null
  }
}

export class DemocracyNextTallyStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next referendum index that should be tallied.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextTally') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The next referendum index that should be tallied.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'NextTally')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextTally') != null
  }
}

export class DemocracyPreimagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '8d49bec84532cce5991ad4c420ddf4ab792644a27de5f8450488e36a6c1c40ef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1022(key: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint, number] | undefined> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1022(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint, number] | undefined)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV1022(): Promise<([Uint8Array, Uint8Array, bigint, number])[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1058(key: Uint8Array): Promise<v1058.PreimageStatus | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1058(keys: Uint8Array[]): Promise<(v1058.PreimageStatus | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(v1058.PreimageStatus)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.PreimageStatus | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.PreimageStatus | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.PreimageStatus)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') != null
  }
}

export class DemocracyProxyStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Who is able to vote for whom. Value is the fund-holding account, key is the
   *  vote-transaction-sending account.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Proxy') === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
  }

  /**
   *  Who is able to vote for whom. Value is the fund-holding account, key is the
   *  vote-transaction-sending account.
   */
  async getAsV1020(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Proxy', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Proxy', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Proxy')
  }

  /**
   *  Who is able to vote for whom. Value is the fund-holding account, key is the
   *  vote-transaction-sending account.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Proxy') === '7dacebc1dda0c0fa943af0a92ddcef80bfdec3130fe68515a8c3d4e861021b19'
  }

  /**
   *  Who is able to vote for whom. Value is the fund-holding account, key is the
   *  vote-transaction-sending account.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.ProxyState | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Proxy', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.ProxyState | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Proxy', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.ProxyState)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Proxy')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Proxy') != null
  }
}

export class DemocracyPublicPropCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicPropCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') != null
  }
}

export class DemocracyPublicPropsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The public proposals. Unsorted.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '73cb1a7c4424f713001c8416e3f33d8a4cff058377ae880f2cae103ae0ffec18'
  }

  /**
   *  The public proposals. Unsorted.
   */
  async getAsV1020(): Promise<[number, v1020.Proposal, Uint8Array][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicProps')
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV1022(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicProps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') != null
  }
}

export class DemocracyReferendumCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next free referendum index, aka the number of referenda started so far.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The next free referendum index, aka the number of referenda started so far.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumCount') != null
  }
}

export class DemocracyReferendumInfoOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information concerning any given referendum.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === 'b841a2a79796892945d8a9256375f0a9e422926b95cb3e85c8edae023ec07300'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV1020(key: number): Promise<v1020.Type_283 | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(v1020.Type_283 | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Type_283)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   *  Information concerning any given referendum.
   */
  get isV1055() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV1055(key: number): Promise<v1055.ReferendumInfo | undefined> {
    assert(this.isV1055)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1055(keys: number[]): Promise<(v1055.ReferendumInfo | undefined)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV1055(): Promise<(v1055.ReferendumInfo)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV9111(key: number): Promise<v9111.ReferendumInfo | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.ReferendumInfo | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.ReferendumInfo)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class DemocracyStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') === 'd0303e1bae0fc34655f81e27ee4b2eb0fb0d3ce283cc0e6cd4de7efaeb1119f2'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsV2005(): Promise<v2005.Releases | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'StorageVersion')
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsV9111(): Promise<v9111.Type_294 | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') != null
  }
}

export class DemocracyVoteOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Get the vote in a given referendum of a particular voter. The result is meaningful only
   *  if `voters_for` includes the voter when called with the referendum (you'll get the
   *  default `Vote` value otherwise). If you don't want to check `voters_for`, then you can
   *  also check for simple existence with `VoteOf::exists` first.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'VoteOf') === '57c21b4880a2ddcb9e3340146f5c62306203c4eddbe632b68c77043d251a21df'
  }

  /**
   *  Get the vote in a given referendum of a particular voter. The result is meaningful only
   *  if `voters_for` includes the voter when called with the referendum (you'll get the
   *  default `Vote` value otherwise). If you don't want to check `voters_for`, then you can
   *  also check for simple existence with `VoteOf::exists` first.
   */
  async getAsV1020(key: [number, Uint8Array]): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'VoteOf', key)
  }

  async getManyAsV1020(keys: [number, Uint8Array][]): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VoteOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VoteOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'VoteOf') != null
  }
}

export class DemocracyVotersForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Get the voters for the current proposal.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotersFor') === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
  }

  /**
   *  Get the voters for the current proposal.
   */
  async getAsV1020(key: number): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'VotersFor', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotersFor', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotersFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotersFor') != null
  }
}

export class DemocracyVotingOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   */
  get isV1055() {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') === '1b8d82fbf262dcaeba801105bb1e0dcfa6b2f7c3b76feb5fa9d27716f50903d2'
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   */
  async getAsV1055(key: Uint8Array): Promise<v1055.Voting> {
    assert(this.isV1055)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'VotingOf', key)
  }

  async getManyAsV1055(keys: Uint8Array[]): Promise<(v1055.Voting)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf', keys.map(k => [k]))
  }

  async getAllAsV1055(): Promise<(v1055.Voting)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf')
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.Voting> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'VotingOf', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.Voting)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Voting)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') != null
  }
}

export class DmpDownwardMessageQueueHeadsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Dmp', 'DownwardMessageQueueHeads') === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
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
  async getAsV9010(key: number): Promise<Uint8Array> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Dmp', 'DownwardMessageQueueHeads', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Dmp', 'DownwardMessageQueueHeads', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(Uint8Array)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Dmp', 'DownwardMessageQueueHeads')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Dmp', 'DownwardMessageQueueHeads') != null
  }
}

export class DmpDownwardMessageQueuesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The downward messages addressed for a certain para.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Dmp', 'DownwardMessageQueues') === '08d1b4bd179dcf7c4beee379a02b1ca5f5922b402537221dd59a21604576605c'
  }

  /**
   *  The downward messages addressed for a certain para.
   */
  async getAsV9010(key: number): Promise<v9010.InboundDownwardMessage[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Dmp', 'DownwardMessageQueues', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.InboundDownwardMessage[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Dmp', 'DownwardMessageQueues', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.InboundDownwardMessage[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Dmp', 'DownwardMessageQueues')
  }

  /**
   *  The downward messages addressed for a certain para.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Dmp', 'DownwardMessageQueues') === 'e425c5091a0f36e0ae5ace2a5590775033870437355c96c2667307bf868e3248'
  }

  /**
   *  The downward messages addressed for a certain para.
   */
  async getAsV9111(key: number): Promise<v9111.InboundDownwardMessage[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Dmp', 'DownwardMessageQueues', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.InboundDownwardMessage[])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Dmp', 'DownwardMessageQueues', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.InboundDownwardMessage[])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Dmp', 'DownwardMessageQueues')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Dmp', 'DownwardMessageQueues') != null
  }
}

export class ElectionProviderMultiPhaseCurrentPhaseStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current phase.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'CurrentPhase') === 'd43c46e1fdaabf223f7ddc55f3636b227c163ebca9bccdb6f6aca606816cba64'
  }

  /**
   *  Current phase.
   */
  async getAsV2029(): Promise<v2029.ElectionPhase> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'CurrentPhase')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'CurrentPhase') != null
  }
}

export class ElectionProviderMultiPhaseDesiredTargetsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Desired number of targets to elect for this round.
   * 
   *  Only exists when [`Snapshot`] is present.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'DesiredTargets') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Desired number of targets to elect for this round.
   * 
   *  Only exists when [`Snapshot`] is present.
   */
  async getAsV2029(): Promise<number | undefined> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'DesiredTargets')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'DesiredTargets') != null
  }
}

export class ElectionProviderMultiPhaseMinimumUntrustedScoreStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The minimum score that each 'untrusted' solution must attain in order to be considered
   *  feasible.
   * 
   *  Can be set via `set_minimum_untrusted_score`.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'MinimumUntrustedScore') === 'fc5a4796e3467f3450c1f03819f4fe9e47a6e584803699b23c3072af283f03fa'
  }

  /**
   *  The minimum score that each 'untrusted' solution must attain in order to be considered
   *  feasible.
   * 
   *  Can be set via `set_minimum_untrusted_score`.
   */
  async getAsV9040(): Promise<bigint[] | undefined> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'MinimumUntrustedScore')
  }

  /**
   *  The minimum score that each 'untrusted' solution must attain in order to be considered
   *  feasible.
   * 
   *  Can be set via `set_minimum_untrusted_score`.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'MinimumUntrustedScore') === '54808e3ff7550c21d1fb18cb6c67f1e6942e127345058749baa91d8c1651bd60'
  }

  /**
   *  The minimum score that each 'untrusted' solution must attain in order to be considered
   *  feasible.
   * 
   *  Can be set via `set_minimum_untrusted_score`.
   */
  async getAsV9180(): Promise<v9180.ElectionScore | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'MinimumUntrustedScore')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'MinimumUntrustedScore') != null
  }
}

export class ElectionProviderMultiPhaseQueuedSolutionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'QueuedSolution') === '6191b733a7e979b485b303212b77f08705ed46238cccf8c2cb5b35969c170456'
  }

  /**
   *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
   */
  async getAsV2029(): Promise<v2029.ReadySolution | undefined> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'QueuedSolution')
  }

  /**
   *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'QueuedSolution') === '5e071efa6b1ccd8ce3910346a833fa82ee925fd24f0d5aaef4d236d7e949c210'
  }

  /**
   *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
   */
  async getAsV9111(): Promise<v9111.ReadySolution | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'QueuedSolution')
  }

  /**
   *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'QueuedSolution') === 'cf8250c7935545f78c3fca062506caaa5d94dab6e6950381bca2b336b9f8876e'
  }

  /**
   *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
   */
  async getAsV9180(): Promise<v9180.ReadySolution | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'QueuedSolution')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'QueuedSolution') != null
  }
}

export class ElectionProviderMultiPhaseRoundStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Internal counter for the number of rounds.
   * 
   *  This is useful for de-duplication of transactions submitted to the pool, and general
   *  diagnostics of the pallet.
   * 
   *  This is merely incremented once per every time that an upstream `elect` is called.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'Round') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Internal counter for the number of rounds.
   * 
   *  This is useful for de-duplication of transactions submitted to the pool, and general
   *  diagnostics of the pallet.
   * 
   *  This is merely incremented once per every time that an upstream `elect` is called.
   */
  async getAsV2029(): Promise<number> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'Round')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'Round') != null
  }
}

export class ElectionProviderMultiPhaseSignedSubmissionIndicesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
   *  `SignedSubmissions`.
   * 
   *  We never need to process more than a single signed submission at a time. Signed submissions
   *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
   *  them one at a time instead of reading and decoding all of them at once.
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionIndices') === '299aaf991151d8c21e928a476d85e16f7f46492399aeddc4115950dbe539017a'
  }

  /**
   *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
   *  `SignedSubmissions`.
   * 
   *  We never need to process more than a single signed submission at a time. Signed submissions
   *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
   *  them one at a time instead of reading and decoding all of them at once.
   */
  async getAsV9080(): Promise<[bigint[], number][]> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionIndices')
  }

  /**
   *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
   *  `SignedSubmissions`.
   * 
   *  We never need to process more than a single signed submission at a time. Signed submissions
   *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
   *  them one at a time instead of reading and decoding all of them at once.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionIndices') === '3f17ed71261965bef8416121d1476aed24762a50bcf247a57343826d7a119a46'
  }

  /**
   *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
   *  `SignedSubmissions`.
   * 
   *  We never need to process more than a single signed submission at a time. Signed submissions
   *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
   *  them one at a time instead of reading and decoding all of them at once.
   */
  async getAsV9180(): Promise<[v9180.ElectionScore, number][]> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionIndices')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionIndices') != null
  }
}

export class ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9080() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionNextIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
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
  async getAsV9080(): Promise<number> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionNextIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionNextIndex') != null
  }
}

export class ElectionProviderMultiPhaseSignedSubmissionsMapStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9080() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionsMap') === '16dfef1a71eeb812bcf9043204001925a6a217567b898246dbccde92a0a07ed3'
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
  async getAsV9080(key: number): Promise<v9080.SignedSubmissionOf> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', key)
  }

  async getManyAsV9080(keys: number[]): Promise<(v9080.SignedSubmissionOf)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', keys.map(k => [k]))
  }

  async getAllAsV9080(): Promise<(v9080.SignedSubmissionOf)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap')
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
  get isV9111() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionsMap') === 'fdea1268433835e6bd0300ac1e98b8c039efba8f951fc0f3aa5545cfcae70275'
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
  async getAsV9111(key: number): Promise<v9111.SignedSubmission> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.SignedSubmission)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.SignedSubmission)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap')
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
  get isV9160() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionsMap') === '6402673c0e140b0153d91c905fedebfa4c54b578ccc07e3848d1d3dcaa1c40d4'
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
  async getAsV9160(key: number): Promise<v9160.SignedSubmission | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', key)
  }

  async getManyAsV9160(keys: number[]): Promise<(v9160.SignedSubmission | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.SignedSubmission)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap')
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
  get isV9180() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionsMap') === 'dd990644564a8bf41b154f8130d7817d731fdbe50bdf105fd5a02d533251a069'
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
  async getAsV9180(key: number): Promise<v9180.SignedSubmission | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', key)
  }

  async getManyAsV9180(keys: number[]): Promise<(v9180.SignedSubmission | undefined)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', keys.map(k => [k]))
  }

  async getAllAsV9180(): Promise<(v9180.SignedSubmission)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap')
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
  get isV9220() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionsMap') === '860f23403a5b9592ac7098f4a1420d32719bc8612e4102bb2e54d1fa53040870'
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
  async getAsV9220(key: number): Promise<v9220.SignedSubmission | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', key)
  }

  async getManyAsV9220(keys: number[]): Promise<(v9220.SignedSubmission | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(v9220.SignedSubmission)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SignedSubmissionsMap')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SignedSubmissionsMap') != null
  }
}

export class ElectionProviderMultiPhaseSnapshotStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Snapshot data of the round.
   * 
   *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'Snapshot') === '0a57d7483519dd2d24b03dc8b9cb8e5dd9fde6a07e5c2d586f430184184c3b75'
  }

  /**
   *  Snapshot data of the round.
   * 
   *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
   */
  async getAsV2029(): Promise<v2029.RoundSnapshot | undefined> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'Snapshot')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'Snapshot') != null
  }
}

export class ElectionProviderMultiPhaseSnapshotMetadataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The metadata of the [`RoundSnapshot`]
   * 
   *  Only exists when [`Snapshot`] is present.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SnapshotMetadata') === '4bc67c3d694c467e93d2d551db48f7b2d0497a44b4acaecfdc842a49ce699da7'
  }

  /**
   *  The metadata of the [`RoundSnapshot`]
   * 
   *  Only exists when [`Snapshot`] is present.
   */
  async getAsV2029(): Promise<v2029.SolutionOrSnapshotSize | undefined> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'ElectionProviderMultiPhase', 'SnapshotMetadata')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ElectionProviderMultiPhase', 'SnapshotMetadata') != null
  }
}

export class FinalityTrackerInitializedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1052() {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'Initialized') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  async getAsV1052(): Promise<boolean> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'FinalityTracker', 'Initialized')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'Initialized') != null
  }
}

export class FinalityTrackerMedianStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The median.
   */
  get isV1052() {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'Median') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The median.
   */
  async getAsV1052(): Promise<number> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'FinalityTracker', 'Median')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'Median') != null
  }
}

export class FinalityTrackerOrderedHintsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Ordered recent hints.
   */
  get isV1052() {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'OrderedHints') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Ordered recent hints.
   */
  async getAsV1052(): Promise<number[]> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'FinalityTracker', 'OrderedHints')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'OrderedHints') != null
  }
}

export class FinalityTrackerRecentHintsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Recent hints.
   */
  get isV1052() {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'RecentHints') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Recent hints.
   */
  async getAsV1052(): Promise<number[]> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'FinalityTracker', 'RecentHints')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'RecentHints') != null
  }
}

export class FinalityTrackerUpdateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Final hint to apply in the block. `None` means "same as parent".
   */
  get isV1052() {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'Update') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Final hint to apply in the block. `None` means "same as parent".
   */
  async getAsV1052(): Promise<number | undefined> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'FinalityTracker', 'Update')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FinalityTracker', 'Update') != null
  }
}

export class GiltActiveStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The currently active gilts, indexed according to the order of creation.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Gilt', 'Active') === 'b2c834c719dbb22b7e22532e6d5a1e472c7a2f7ad0853df02e647be08f292c03'
  }

  /**
   *  The currently active gilts, indexed according to the order of creation.
   */
  async getAsV9010(key: number): Promise<v9010.ActiveGilt | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Gilt', 'Active', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.ActiveGilt | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Gilt', 'Active', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.ActiveGilt)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Gilt', 'Active')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Gilt', 'Active') != null
  }
}

export class GiltActiveTotalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information relating to the gilts currently active.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Gilt', 'ActiveTotal') === 'c669047de180d01cb964c4e9e526c25c411b8aef8c9471b9c490f933cc2811fd'
  }

  /**
   *  Information relating to the gilts currently active.
   */
  async getAsV9010(): Promise<v9010.ActiveGiltsTotal> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Gilt', 'ActiveTotal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Gilt', 'ActiveTotal') != null
  }
}

export class GiltQueueTotalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The totals of items and balances within each queue. Saves a lot of storage reads in the
   *  case of sparsely packed queues.
   * 
   *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
   *  whose duration is one `Period` would be storage `0`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Gilt', 'QueueTotals') === '67637cf79fb2042d6f9976100af5ca8921a580769459271f2902d29698078547'
  }

  /**
   *  The totals of items and balances within each queue. Saves a lot of storage reads in the
   *  case of sparsely packed queues.
   * 
   *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
   *  whose duration is one `Period` would be storage `0`.
   */
  async getAsV9010(): Promise<[number, bigint][]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Gilt', 'QueueTotals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Gilt', 'QueueTotals') != null
  }
}

export class GiltQueuesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The queues of bids ready to become gilts. Indexed by duration (in `Period`s).
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Gilt', 'Queues') === '70c5b3f30abfea02e22acf4a0d93299c0781d870ea5f30525742e4cb4712fea6'
  }

  /**
   *  The queues of bids ready to become gilts. Indexed by duration (in `Period`s).
   */
  async getAsV9010(key: number): Promise<v9010.GiltBid[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Gilt', 'Queues', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.GiltBid[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Gilt', 'Queues', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.GiltBid[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Gilt', 'Queues')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Gilt', 'Queues') != null
  }
}

export class GrandpaCurrentSetIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of changes (both in terms of keys and underlying economic responsibilities)
   *  in the "set" of Grandpa validators from genesis.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'CurrentSetId') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The number of changes (both in terms of keys and underlying economic responsibilities)
   *  in the "set" of Grandpa validators from genesis.
   */
  async getAsV9040(): Promise<bigint> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'CurrentSetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'CurrentSetId') != null
  }
}

export class GrandpaNextForcedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  next block number where we can force a change.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'NextForced') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  next block number where we can force a change.
   */
  async getAsV9040(): Promise<number | undefined> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'NextForced')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'NextForced') != null
  }
}

export class GrandpaPendingChangeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'PendingChange') === '13755304b861af7343de28e9c0f8c93252785a6950a8ef864736ceb88092a3c7'
  }

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  async getAsV9040(): Promise<v9040.StoredPendingChange | undefined> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'PendingChange')
  }

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'PendingChange') === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
  }

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  async getAsV9111(): Promise<v9111.StoredPendingChange | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'PendingChange')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'PendingChange') != null
  }
}

export class GrandpaSetIdSessionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A mapping from grandpa set ID to the index of the *most recent* session for which its
   *  members were responsible.
   * 
   *  TWOX-NOTE: `SetId` is not under user control.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'SetIdSession') === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
  }

  /**
   *  A mapping from grandpa set ID to the index of the *most recent* session for which its
   *  members were responsible.
   * 
   *  TWOX-NOTE: `SetId` is not under user control.
   */
  async getAsV9040(key: bigint): Promise<number | undefined> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'SetIdSession', key)
  }

  async getManyAsV9040(keys: bigint[]): Promise<(number | undefined)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Grandpa', 'SetIdSession', keys.map(k => [k]))
  }

  async getAllAsV9040(): Promise<(number)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Grandpa', 'SetIdSession')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'SetIdSession') != null
  }
}

export class GrandpaStalledStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  `true` if we are currently stalled.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'Stalled') === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
  }

  /**
   *  `true` if we are currently stalled.
   */
  async getAsV9040(): Promise<[number, number] | undefined> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'Stalled')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'Stalled') != null
  }
}

export class GrandpaStateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  State of the current authority set.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'State') === 'a793f4266a3a22cf894ef532591752b5cadd1e784285284a201d9d4da95a60fe'
  }

  /**
   *  State of the current authority set.
   */
  async getAsV9040(): Promise<v9040.StoredState> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'State')
  }

  /**
   *  State of the current authority set.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Grandpa', 'State') === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
  }

  /**
   *  State of the current authority set.
   */
  async getAsV9111(): Promise<v9111.StoredState> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Grandpa', 'State')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Grandpa', 'State') != null
  }
}

export class GrandpaFinalityAuthoritiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  DEPRECATED
   * 
   *  This used to store the current authority set, which has been migrated to the well-known
   *  GRANDPA_AUTHORITES_KEY unhashed key.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'Authorities') === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
  }

  /**
   *  DEPRECATED
   * 
   *  This used to store the current authority set, which has been migrated to the well-known
   *  GRANDPA_AUTHORITES_KEY unhashed key.
   */
  async getAsV1020(): Promise<[Uint8Array, bigint][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'GrandpaFinality', 'Authorities')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'Authorities') != null
  }
}

export class GrandpaFinalityCurrentSetIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of changes (both in terms of keys and underlying economic responsibilities)
   *  in the "set" of Grandpa validators from genesis.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'CurrentSetId') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The number of changes (both in terms of keys and underlying economic responsibilities)
   *  in the "set" of Grandpa validators from genesis.
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'GrandpaFinality', 'CurrentSetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'CurrentSetId') != null
  }
}

export class GrandpaFinalityNextForcedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  next block number where we can force a change.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'NextForced') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  next block number where we can force a change.
   */
  async getAsV1020(): Promise<number | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'GrandpaFinality', 'NextForced')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'NextForced') != null
  }
}

export class GrandpaFinalityPendingChangeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'PendingChange') === '13755304b861af7343de28e9c0f8c93252785a6950a8ef864736ceb88092a3c7'
  }

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  async getAsV1020(): Promise<v1020.StoredPendingChange | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'GrandpaFinality', 'PendingChange')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'PendingChange') != null
  }
}

export class GrandpaFinalitySetIdSessionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'SetIdSession') === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
  }

  /**
   *  A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.
   */
  async getAsV1020(key: bigint): Promise<number | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'GrandpaFinality', 'SetIdSession', key)
  }

  async getManyAsV1020(keys: bigint[]): Promise<(number | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'GrandpaFinality', 'SetIdSession', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'GrandpaFinality', 'SetIdSession')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'SetIdSession') != null
  }
}

export class GrandpaFinalityStalledStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  `true` if we are currently stalled.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'Stalled') === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
  }

  /**
   *  `true` if we are currently stalled.
   */
  async getAsV1020(): Promise<[number, number] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'GrandpaFinality', 'Stalled')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'Stalled') != null
  }
}

export class GrandpaFinalityStateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  State of the current authority set.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'State') === 'a793f4266a3a22cf894ef532591752b5cadd1e784285284a201d9d4da95a60fe'
  }

  /**
   *  State of the current authority set.
   */
  async getAsV1020(): Promise<v1020.StoredState> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'GrandpaFinality', 'State')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GrandpaFinality', 'State') != null
  }
}

export class HrmpHrmpAcceptedChannelRequestCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  This mapping tracks how many open channel requests were accepted by a given recipient para.
   *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
   *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpAcceptedChannelRequestCount') === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
  }

  /**
   *  This mapping tracks how many open channel requests were accepted by a given recipient para.
   *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
   *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
   */
  async getAsV9010(key: number): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpAcceptedChannelRequestCount', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(number)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpAcceptedChannelRequestCount', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(number)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpAcceptedChannelRequestCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpAcceptedChannelRequestCount') != null
  }
}

export class HrmpHrmpChannelContentsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage for the messages for each channel.
   *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpChannelContents') === 'ba3a0ca70f01a0a72b27bbec1b8e5531a01075c5f49381d9542ac00ee8646cb8'
  }

  /**
   *  Storage for the messages for each channel.
   *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
   */
  async getAsV9010(key: v9010.HrmpChannelId): Promise<v9010.InboundHrmpMessage[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpChannelContents', key)
  }

  async getManyAsV9010(keys: v9010.HrmpChannelId[]): Promise<(v9010.InboundHrmpMessage[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannelContents', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.InboundHrmpMessage[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannelContents')
  }

  /**
   *  Storage for the messages for each channel.
   *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpChannelContents') === '6cd143ae2730de334efd938bdf6af5805612dab0823423596dcf6bbbeddccfb3'
  }

  /**
   *  Storage for the messages for each channel.
   *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
   */
  async getAsV9111(key: v9111.HrmpChannelId): Promise<v9111.InboundHrmpMessage[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpChannelContents', key)
  }

  async getManyAsV9111(keys: v9111.HrmpChannelId[]): Promise<(v9111.InboundHrmpMessage[])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannelContents', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.InboundHrmpMessage[])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannelContents')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpChannelContents') != null
  }
}

export class HrmpHrmpChannelDigestsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Maintains a mapping that can be used to answer the question:
   *  What paras sent a message at the given block number for a given reciever.
   *  Invariants:
   *  - The inner `Vec<ParaId>` is never empty.
   *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
   *  - The outer vector is sorted ascending by block number and cannot store two items with the same
   *    block number.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpChannelDigests') === '8b00bb4a27873ea090234c4f7aeea8dbf9ae2628a4945d4910f497ed81c5e21f'
  }

  /**
   *  Maintains a mapping that can be used to answer the question:
   *  What paras sent a message at the given block number for a given reciever.
   *  Invariants:
   *  - The inner `Vec<ParaId>` is never empty.
   *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
   *  - The outer vector is sorted ascending by block number and cannot store two items with the same
   *    block number.
   */
  async getAsV9010(key: number): Promise<[number, number[]][]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpChannelDigests', key)
  }

  async getManyAsV9010(keys: number[]): Promise<([number, number[]][])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannelDigests', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<([number, number[]][])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannelDigests')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpChannelDigests') != null
  }
}

export class HrmpHrmpChannelsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  HRMP channel data associated with each para.
   *  Invariant:
   *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpChannels') === '194777781ab9502f73851a7f429a7f2001a8d6e3c328767ca1adad832af65bbf'
  }

  /**
   *  HRMP channel data associated with each para.
   *  Invariant:
   *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
   */
  async getAsV9010(key: v9010.HrmpChannelId): Promise<v9010.HrmpChannel | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpChannels', key)
  }

  async getManyAsV9010(keys: v9010.HrmpChannelId[]): Promise<(v9010.HrmpChannel | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannels', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.HrmpChannel)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannels')
  }

  /**
   *  HRMP channel data associated with each para.
   *  Invariant:
   *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpChannels') === 'd5f877f4add6df244ed0d4f20e980d9cbb8f6ecb91c8f56abca84b72441b6447'
  }

  /**
   *  HRMP channel data associated with each para.
   *  Invariant:
   *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
   */
  async getAsV9111(key: v9111.HrmpChannelId): Promise<v9111.HrmpChannel | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpChannels', key)
  }

  async getManyAsV9111(keys: v9111.HrmpChannelId[]): Promise<(v9111.HrmpChannel | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannels', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.HrmpChannel)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpChannels')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpChannels') != null
  }
}

export class HrmpHrmpCloseChannelRequestsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpCloseChannelRequests') === '11c2cd559ad10664bf5b9bd5c9f6057de0dbe329d8ad99799edf2affa48a44f9'
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
  async getAsV9010(key: v9010.HrmpChannelId): Promise<null | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpCloseChannelRequests', key)
  }

  async getManyAsV9010(keys: v9010.HrmpChannelId[]): Promise<(null | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpCloseChannelRequests', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(null)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpCloseChannelRequests')
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
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpCloseChannelRequests') === '7755b93c00c932e936c6bfaff914a35cc38f873e39a57ea414c8be676db098d8'
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
  async getAsV9111(key: v9111.HrmpChannelId): Promise<null | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpCloseChannelRequests', key)
  }

  async getManyAsV9111(keys: v9111.HrmpChannelId[]): Promise<(null | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpCloseChannelRequests', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(null)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpCloseChannelRequests')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpCloseChannelRequests') != null
  }
}

export class HrmpHrmpCloseChannelRequestsListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpCloseChannelRequestsList') === 'd792901ff7d249c8c5461debb906b34443587045441c21bcbca439e1c6939deb'
  }

  async getAsV9010(): Promise<v9010.HrmpChannelId[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpCloseChannelRequestsList')
  }

  get isV9111() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpCloseChannelRequestsList') === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
  }

  async getAsV9111(): Promise<v9111.HrmpChannelId[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpCloseChannelRequestsList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpCloseChannelRequestsList') != null
  }
}

export class HrmpHrmpEgressChannelsIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpEgressChannelsIndex') === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
  }

  async getAsV9010(key: number): Promise<number[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpEgressChannelsIndex', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(number[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpEgressChannelsIndex', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(number[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpEgressChannelsIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpEgressChannelsIndex') != null
  }
}

export class HrmpHrmpIngressChannelsIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpIngressChannelsIndex') === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
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
  async getAsV9010(key: number): Promise<number[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpIngressChannelsIndex', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(number[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpIngressChannelsIndex', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(number[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpIngressChannelsIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpIngressChannelsIndex') != null
  }
}

export class HrmpHrmpOpenChannelRequestCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  This mapping tracks how many open channel requests are inititated by a given sender para.
   *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
   *  as the number of `HrmpOpenChannelRequestCount` for `X`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpOpenChannelRequestCount') === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
  }

  /**
   *  This mapping tracks how many open channel requests are inititated by a given sender para.
   *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
   *  as the number of `HrmpOpenChannelRequestCount` for `X`.
   */
  async getAsV9010(key: number): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequestCount', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(number)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequestCount', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(number)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequestCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpOpenChannelRequestCount') != null
  }
}

export class HrmpHrmpOpenChannelRequestsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of pending HRMP open channel requests.
   * 
   *  The set is accompanied by a list for iteration.
   * 
   *  Invariant:
   *  - There are no channels that exists in list but not in the set and vice versa.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpOpenChannelRequests') === '489913b7e9dd8ceaf3f82192ca3508b6427deae6da32f6c0e54f3d4389e4c734'
  }

  /**
   *  The set of pending HRMP open channel requests.
   * 
   *  The set is accompanied by a list for iteration.
   * 
   *  Invariant:
   *  - There are no channels that exists in list but not in the set and vice versa.
   */
  async getAsV9010(key: v9010.HrmpChannelId): Promise<v9010.HrmpOpenChannelRequest | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequests', key)
  }

  async getManyAsV9010(keys: v9010.HrmpChannelId[]): Promise<(v9010.HrmpOpenChannelRequest | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequests', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.HrmpOpenChannelRequest)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequests')
  }

  /**
   *  The set of pending HRMP open channel requests.
   * 
   *  The set is accompanied by a list for iteration.
   * 
   *  Invariant:
   *  - There are no channels that exists in list but not in the set and vice versa.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpOpenChannelRequests') === '14e894f64f4951bc0cda7e287037e971a9cfbd68c302fa59695038b358ef76b9'
  }

  /**
   *  The set of pending HRMP open channel requests.
   * 
   *  The set is accompanied by a list for iteration.
   * 
   *  Invariant:
   *  - There are no channels that exists in list but not in the set and vice versa.
   */
  async getAsV9111(key: v9111.HrmpChannelId): Promise<v9111.HrmpOpenChannelRequest | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequests', key)
  }

  async getManyAsV9111(keys: v9111.HrmpChannelId[]): Promise<(v9111.HrmpOpenChannelRequest | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequests', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.HrmpOpenChannelRequest)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequests')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpOpenChannelRequests') != null
  }
}

export class HrmpHrmpOpenChannelRequestsListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpOpenChannelRequestsList') === 'd792901ff7d249c8c5461debb906b34443587045441c21bcbca439e1c6939deb'
  }

  async getAsV9010(): Promise<v9010.HrmpChannelId[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequestsList')
  }

  get isV9111() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpOpenChannelRequestsList') === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
  }

  async getAsV9111(): Promise<v9111.HrmpChannelId[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpOpenChannelRequestsList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpOpenChannelRequestsList') != null
  }
}

export class HrmpHrmpWatermarksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The HRMP watermark associated with each para.
   *  Invariant:
   *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpWatermarks') === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
  }

  /**
   *  The HRMP watermark associated with each para.
   *  Invariant:
   *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
   */
  async getAsV9010(key: number): Promise<number | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Hrmp', 'HrmpWatermarks', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(number | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpWatermarks', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(number)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Hrmp', 'HrmpWatermarks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Hrmp', 'HrmpWatermarks') != null
  }
}

export class IdentityIdentityOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   */
  get isV1052() {
    return this._chain.getStorageItemTypeHash('Identity', 'IdentityOf') === '4858510e4d16a634a6efd37fc0fbc0a75e16596326ae6d014f4bfca201c459de'
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   */
  async getAsV1052(key: Uint8Array): Promise<v1052.Registration | undefined> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'Identity', 'IdentityOf', key)
  }

  async getManyAsV1052(keys: Uint8Array[]): Promise<(v1052.Registration | undefined)[]> {
    assert(this.isV1052)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'IdentityOf', keys.map(k => [k]))
  }

  async getAllAsV1052(): Promise<(v1052.Registration)[]> {
    assert(this.isV1052)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'IdentityOf')
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Identity', 'IdentityOf') === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.Registration | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Identity', 'IdentityOf', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.Registration | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'IdentityOf', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Registration)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'IdentityOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Identity', 'IdentityOf') != null
  }
}

export class IdentityRegistrarsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of registrars. Not expected to get very big as can only be added through a
   *  special origin (likely a council motion).
   * 
   *  The index into this can be cast to `RegistrarIndex` to get a valid value.
   */
  get isV1052() {
    return this._chain.getStorageItemTypeHash('Identity', 'Registrars') === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
  }

  /**
   *  The set of registrars. Not expected to get very big as can only be added through a
   *  special origin (likely a council motion).
   * 
   *  The index into this can be cast to `RegistrarIndex` to get a valid value.
   */
  async getAsV1052(): Promise<(v1052.RegistrarInfo | undefined)[]> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'Identity', 'Registrars')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Identity', 'Registrars') != null
  }
}

export class IdentitySubsOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Alternative "sub" identities of this account.
   * 
   *  The first item is the deposit, the second is a vector of the accounts.
   */
  get isV1052() {
    return this._chain.getStorageItemTypeHash('Identity', 'SubsOf') === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
  }

  /**
   *  Alternative "sub" identities of this account.
   * 
   *  The first item is the deposit, the second is a vector of the accounts.
   */
  async getAsV1052(key: Uint8Array): Promise<[bigint, Uint8Array[]]> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'Identity', 'SubsOf', key)
  }

  async getManyAsV1052(keys: Uint8Array[]): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV1052)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SubsOf', keys.map(k => [k]))
  }

  async getAllAsV1052(): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV1052)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SubsOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Identity', 'SubsOf') != null
  }
}

export class IdentitySuperOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The super-identity of an alternative "sub" identity together with its name, within that
   *  context. If the account is not some other account's sub-identity, then just `None`.
   */
  get isV1052() {
    return this._chain.getStorageItemTypeHash('Identity', 'SuperOf') === 'c565a83b0bf993e5396af12d8df2b9b95182a9fa6ad470d460d1dcf06e6881a0'
  }

  /**
   *  The super-identity of an alternative "sub" identity together with its name, within that
   *  context. If the account is not some other account's sub-identity, then just `None`.
   */
  async getAsV1052(key: Uint8Array): Promise<[Uint8Array, v1052.Data] | undefined> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'Identity', 'SuperOf', key)
  }

  async getManyAsV1052(keys: Uint8Array[]): Promise<([Uint8Array, v1052.Data] | undefined)[]> {
    assert(this.isV1052)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SuperOf', keys.map(k => [k]))
  }

  async getAllAsV1052(): Promise<([Uint8Array, v1052.Data])[]> {
    assert(this.isV1052)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SuperOf')
  }

  /**
   *  The super-identity of an alternative "sub" identity together with its name, within that
   *  context. If the account is not some other account's sub-identity, then just `None`.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Identity', 'SuperOf') === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
  }

  /**
   *  The super-identity of an alternative "sub" identity together with its name, within that
   *  context. If the account is not some other account's sub-identity, then just `None`.
   */
  async getAsV9111(key: Uint8Array): Promise<[Uint8Array, v9111.Data] | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Identity', 'SuperOf', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<([Uint8Array, v9111.Data] | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SuperOf', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<([Uint8Array, v9111.Data])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SuperOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Identity', 'SuperOf') != null
  }
}

export class ImOnlineAuthoredBlocksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  For each session index, we keep a mapping of `T::ValidatorId` to the
   *  number of blocks authored by the given authority.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('ImOnline', 'AuthoredBlocks') === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
  }

  /**
   *  For each session index, we keep a mapping of `T::ValidatorId` to the
   *  number of blocks authored by the given authority.
   */
  async getAsV1020(key1: number, key2: Uint8Array): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'ImOnline', 'AuthoredBlocks', key1, key2)
  }

  async getManyAsV1020(keys: [number, Uint8Array][]): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'ImOnline', 'AuthoredBlocks', keys)
  }

  async getAllAsV1020(): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'ImOnline', 'AuthoredBlocks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ImOnline', 'AuthoredBlocks') != null
  }
}

export class ImOnlineGossipAtStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The block number when we should gossip.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('ImOnline', 'GossipAt') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The block number when we should gossip.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'ImOnline', 'GossipAt')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ImOnline', 'GossipAt') != null
  }
}

export class ImOnlineHeartbeatAfterStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The block number after which it's ok to send heartbeats in current session.
   * 
   *  At the beginning of each session we set this to a value that should
   *  fall roughly in the middle of the session duration.
   *  The idea is to first wait for the validators to produce a block
   *  in the current session, so that the heartbeat later on will not be necessary.
   */
  get isV1045() {
    return this._chain.getStorageItemTypeHash('ImOnline', 'HeartbeatAfter') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The block number after which it's ok to send heartbeats in current session.
   * 
   *  At the beginning of each session we set this to a value that should
   *  fall roughly in the middle of the session duration.
   *  The idea is to first wait for the validators to produce a block
   *  in the current session, so that the heartbeat later on will not be necessary.
   */
  async getAsV1045(): Promise<number> {
    assert(this.isV1045)
    return this._chain.getStorage(this.blockHash, 'ImOnline', 'HeartbeatAfter')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ImOnline', 'HeartbeatAfter') != null
  }
}

export class ImOnlineKeysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current set of keys that may issue a heartbeat.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('ImOnline', 'Keys') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current set of keys that may issue a heartbeat.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'ImOnline', 'Keys')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ImOnline', 'Keys') != null
  }
}

export class ImOnlineReceivedHeartbeatsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  For each session index, we keep a mapping of `AuthIndex`
   *  to `offchain::OpaqueNetworkState`.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('ImOnline', 'ReceivedHeartbeats') === '682157dad304389ac6525dcc32f225e326c71b23b36940fe6c6b0ba3c53ac61f'
  }

  /**
   *  For each session index, we keep a mapping of `AuthIndex`
   *  to `offchain::OpaqueNetworkState`.
   */
  async getAsV1020(key1: number, key2: number): Promise<Uint8Array | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'ImOnline', 'ReceivedHeartbeats', key1, key2)
  }

  async getManyAsV1020(keys: [number, number][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'ImOnline', 'ReceivedHeartbeats', keys)
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'ImOnline', 'ReceivedHeartbeats')
  }

  /**
   *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
   *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('ImOnline', 'ReceivedHeartbeats') === '1e6ba35502038271a716c3edc7af482c7f3b2c3797e0bd5bc206c2fe43459e4e'
  }

  /**
   *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
   *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
   */
  async getAsV9111(key1: number, key2: number): Promise<[number, v9111.BoundedOpaqueNetworkState] | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'ImOnline', 'ReceivedHeartbeats', key1, key2)
  }

  async getManyAsV9111(keys: [number, number][]): Promise<([number, v9111.BoundedOpaqueNetworkState] | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'ImOnline', 'ReceivedHeartbeats', keys)
  }

  async getAllAsV9111(): Promise<([number, v9111.BoundedOpaqueNetworkState])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'ImOnline', 'ReceivedHeartbeats')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ImOnline', 'ReceivedHeartbeats') != null
  }
}

export class IndicesAccountsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The lookup from index to account.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Indices', 'Accounts') === '42d7ee809a9642338b77286d1f68a99e10272a83d9d5fa33c2b7f159255a39f8'
  }

  /**
   *  The lookup from index to account.
   */
  async getAsV1050(key: number): Promise<[Uint8Array, bigint] | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Indices', 'Accounts', key)
  }

  async getManyAsV1050(keys: number[]): Promise<([Uint8Array, bigint] | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Indices', 'Accounts', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<([Uint8Array, bigint])[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Indices', 'Accounts')
  }

  /**
   *  The lookup from index to account.
   */
  get isV2007() {
    return this._chain.getStorageItemTypeHash('Indices', 'Accounts') === 'c6d4b452610ac51f7c9427bf2d9910242bb414a02409a484caf47fa24e50516e'
  }

  /**
   *  The lookup from index to account.
   */
  async getAsV2007(key: number): Promise<[Uint8Array, bigint, boolean] | undefined> {
    assert(this.isV2007)
    return this._chain.getStorage(this.blockHash, 'Indices', 'Accounts', key)
  }

  async getManyAsV2007(keys: number[]): Promise<([Uint8Array, bigint, boolean] | undefined)[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Indices', 'Accounts', keys.map(k => [k]))
  }

  async getAllAsV2007(): Promise<([Uint8Array, bigint, boolean])[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Indices', 'Accounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Indices', 'Accounts') != null
  }
}

export class IndicesEnumSetStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The enumeration sets.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Indices', 'EnumSet') === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
  }

  /**
   *  The enumeration sets.
   */
  async getAsV1020(key: number): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Indices', 'EnumSet', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Indices', 'EnumSet', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Indices', 'EnumSet')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Indices', 'EnumSet') != null
  }
}

export class IndicesNextEnumSetStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next free enumeration set.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Indices', 'NextEnumSet') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The next free enumeration set.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Indices', 'NextEnumSet')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Indices', 'NextEnumSet') != null
  }
}

export class InitializerBufferedSessionChangesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Initializer', 'BufferedSessionChanges') === '6914e52e4a9c335c02339b4e3e33d68b49a03e7e8aa3c2a6368d4d29c23f2382'
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
  async getAsV9010(): Promise<v9010.BufferedSessionChange[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Initializer', 'BufferedSessionChanges')
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
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Initializer', 'BufferedSessionChanges') === '8ca8921e3e82455d025ef60ac4a362641034332241c6a69a4183e6e8f6e58800'
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
  async getAsV9111(): Promise<v9111.BufferedSessionChange[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Initializer', 'BufferedSessionChanges')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Initializer', 'BufferedSessionChanges') != null
  }
}

export class InitializerHasInitializedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Whether the parachains modules have been initialized within this block.
   * 
   *  Semantically a bool, but this guarantees it should never hit the trie,
   *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
   * 
   *  As a bool, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
   *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
   *  the semantics of this variable.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Initializer', 'HasInitialized') === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
  }

  /**
   *  Whether the parachains modules have been initialized within this block.
   * 
   *  Semantically a bool, but this guarantees it should never hit the trie,
   *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
   * 
   *  As a bool, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
   *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
   *  the semantics of this variable.
   */
  async getAsV9010(): Promise<null | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Initializer', 'HasInitialized')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Initializer', 'HasInitialized') != null
  }
}

export class Instance1CollectiveMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') != null
  }
}

export class Instance1CollectivePrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The member who provides the default vote for any other members that do not vote before
   *  the timeout. If None, then no member has that privilege.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The member who provides the default vote for any other members that do not vote before
   *  the timeout. If None, then no member has that privilege.
   */
  async getAsV1050(): Promise<Uint8Array | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Prime') != null
  }
}

export class Instance1CollectiveProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') != null
  }
}

export class Instance1CollectiveProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '988b54a69200501d1caa21231c09e8d115ce376b26e5cfe53b9efe6d1aa2353f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Proposal | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.Proposal | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Proposal)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'dd07ea6860eb31afbcf979619a9f751f46be77411e9c22ab6d968f1cbb826975'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1022(key: Uint8Array): Promise<v1022.Proposal | undefined> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1022(keys: Uint8Array[]): Promise<(v1022.Proposal | undefined)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1022(): Promise<(v1022.Proposal)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1024() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'd1057f90e4da1f4375c8e1942f93abac694f8f1e3eb41ae19b49794a3cd7754c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1024(key: Uint8Array): Promise<v1024.Proposal | undefined> {
    assert(this.isV1024)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1024(keys: Uint8Array[]): Promise<(v1024.Proposal | undefined)[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1024(): Promise<(v1024.Proposal)[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1027() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '952306cf3b40b722e8a89f97348456e7288504655b1fef8f8848728064e020d6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1027(key: Uint8Array): Promise<v1027.Proposal | undefined> {
    assert(this.isV1027)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1027(keys: Uint8Array[]): Promise<(v1027.Proposal | undefined)[]> {
    assert(this.isV1027)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1027(): Promise<(v1027.Proposal)[]> {
    assert(this.isV1027)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1029() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c684ff44da66806df8f7b0311e8b461bcd53a6438c7321d8065c89376d754173'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1029(key: Uint8Array): Promise<v1029.Proposal | undefined> {
    assert(this.isV1029)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1029(keys: Uint8Array[]): Promise<(v1029.Proposal | undefined)[]> {
    assert(this.isV1029)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1029(): Promise<(v1029.Proposal)[]> {
    assert(this.isV1029)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a5dece5dab1ee986977b4658ed7c0dcc0ead6936604d3359ae5d56497127c435'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1030(key: Uint8Array): Promise<v1030.Proposal | undefined> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1030(keys: Uint8Array[]): Promise<(v1030.Proposal | undefined)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1030(): Promise<(v1030.Proposal)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1031() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '491d769f67c8b91e6c1892535c8a0d6726eac1c321ce672b23b722cea1b1ab46'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1031(key: Uint8Array): Promise<v1031.Proposal | undefined> {
    assert(this.isV1031)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1031(keys: Uint8Array[]): Promise<(v1031.Proposal | undefined)[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1031(): Promise<(v1031.Proposal)[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1032() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '3cec838f63976aa29bba710d21944d10bd6aaf418ca780e11fe2c2d0e628d629'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1032(key: Uint8Array): Promise<v1032.Proposal | undefined> {
    assert(this.isV1032)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1032(keys: Uint8Array[]): Promise<(v1032.Proposal | undefined)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1032(): Promise<(v1032.Proposal)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1038() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '6f242fd68c6cf6b13795cb7c87e22bc4d5cb344260c9c4976f712b389f1a72e5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1038(key: Uint8Array): Promise<v1038.Proposal | undefined> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1038(keys: Uint8Array[]): Promise<(v1038.Proposal | undefined)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1038(): Promise<(v1038.Proposal)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1039() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '46ed4057a9e44696c823f53a2afcf45ec0e1319fff4b984ff2a78dac066632b7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1039(key: Uint8Array): Promise<v1039.Proposal | undefined> {
    assert(this.isV1039)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1039(keys: Uint8Array[]): Promise<(v1039.Proposal | undefined)[]> {
    assert(this.isV1039)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1039(): Promise<(v1039.Proposal)[]> {
    assert(this.isV1039)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '09964938a6344ce4017f443d37b809998da5205b97ba32089dc34e25517d8727'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1040(key: Uint8Array): Promise<v1040.Proposal | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(v1040.Proposal | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(v1040.Proposal)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1042() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c5be77395b90894b0b9d89a8bfd40c3969fd90f48d12a513d31f62f19ba198b2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1042(key: Uint8Array): Promise<v1042.Proposal | undefined> {
    assert(this.isV1042)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1042(keys: Uint8Array[]): Promise<(v1042.Proposal | undefined)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1042(): Promise<(v1042.Proposal)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '75a26ba5a11378b5ec0d7e80a5150e53f1723bf825534c48ac8df88d46f8ad11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.Proposal | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.Proposal | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.Proposal)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1054() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ecb491dab152e949512780951867e171f6a72abd7ec8510103dcec7c8482218c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1054(key: Uint8Array): Promise<v1054.Proposal | undefined> {
    assert(this.isV1054)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1054(keys: Uint8Array[]): Promise<(v1054.Proposal | undefined)[]> {
    assert(this.isV1054)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1054(): Promise<(v1054.Proposal)[]> {
    assert(this.isV1054)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1055() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f76941917fe1c97effc3b54c45775b17c3dd7b8644e859888214965a3d2c1915'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1055(key: Uint8Array): Promise<v1055.Proposal | undefined> {
    assert(this.isV1055)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1055(keys: Uint8Array[]): Promise<(v1055.Proposal | undefined)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1055(): Promise<(v1055.Proposal)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a40aebf7430950292287f9ba1ac41514aec633d7ce9c595b51922b2d00f766c4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1058(key: Uint8Array): Promise<v1058.Proposal | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1058(keys: Uint8Array[]): Promise<(v1058.Proposal | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(v1058.Proposal)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1062() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f1964574c2acdf7657cebbec13992465e146c9c1d70a9ebfe5cb2c849e33a8fb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1062(key: Uint8Array): Promise<v1062.Proposal | undefined> {
    assert(this.isV1062)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1062(keys: Uint8Array[]): Promise<(v1062.Proposal | undefined)[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1062(): Promise<(v1062.Proposal)[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '59d62f9580ec29b948bb61b54782d0eb894f759082f4cd66b3d721cd51fc6eab'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2005(key: Uint8Array): Promise<v2005.Proposal | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2005(keys: Uint8Array[]): Promise<(v2005.Proposal | undefined)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2005(): Promise<(v2005.Proposal)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2007() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '9b8403a58da018e039e7d02e03c58751e5f3966f734c0a805247c8f819ebe6e6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2007(key: Uint8Array): Promise<v2007.Proposal | undefined> {
    assert(this.isV2007)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2007(keys: Uint8Array[]): Promise<(v2007.Proposal | undefined)[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2007(): Promise<(v2007.Proposal)[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '72ae96a40c2e115fd196fda8aba62965500743102911195e5db6bffe5c730a89'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: Uint8Array): Promise<v2011.Proposal | undefined> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2011(keys: Uint8Array[]): Promise<(v2011.Proposal | undefined)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2011(): Promise<(v2011.Proposal)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '646a7b14d2d0c7e0302ab7e697eb7a22ce351bc30f8ed014a36febdee8fd066c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: Uint8Array): Promise<v2013.Proposal | undefined> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2013(keys: Uint8Array[]): Promise<(v2013.Proposal | undefined)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2013(): Promise<(v2013.Proposal)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2015() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '49cb7fd61e09b6e09885d9254e3179527de1bb56a3bac4e41806540efa177504'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2015(key: Uint8Array): Promise<v2015.Proposal | undefined> {
    assert(this.isV2015)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2015(keys: Uint8Array[]): Promise<(v2015.Proposal | undefined)[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2015(): Promise<(v2015.Proposal)[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'e940a02bab509e8f3c662c3743d99681461dc41eb7807d9f724137541d6d6888'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: Uint8Array): Promise<v2022.Proposal | undefined> {
    assert(this.isV2022)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2022(keys: Uint8Array[]): Promise<(v2022.Proposal | undefined)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2022(): Promise<(v2022.Proposal)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '28ae6082aa3659f3eb665b763906f5f43dfc25a261e76bc3bfaae2bf35809886'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: Uint8Array): Promise<v2023.Proposal | undefined> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2023(keys: Uint8Array[]): Promise<(v2023.Proposal | undefined)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2023(): Promise<(v2023.Proposal)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2024() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '30c3471266df7fa23a52dd4c3eee936e8a38a242733b19606a6d8434b8818044'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2024(key: Uint8Array): Promise<v2024.Proposal | undefined> {
    assert(this.isV2024)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2024(keys: Uint8Array[]): Promise<(v2024.Proposal | undefined)[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2024(): Promise<(v2024.Proposal)[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c6aa8f92b929d74aa84d6bc73ac4de7208eb9ea79b0633b7ece10545e71bc6bc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2025(key: Uint8Array): Promise<v2025.Proposal | undefined> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2025(keys: Uint8Array[]): Promise<(v2025.Proposal | undefined)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(v2025.Proposal)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2026() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '8273b8a7016b06dcb65adf9f34a09480690bdb5cd14cc410c9b0899a03dd8f22'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2026(key: Uint8Array): Promise<v2026.Proposal | undefined> {
    assert(this.isV2026)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2026(keys: Uint8Array[]): Promise<(v2026.Proposal | undefined)[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2026(): Promise<(v2026.Proposal)[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '90dd79f7117af09c072af285850479432c5a99791d1cb8011e2307aefaf37418'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2028(key: Uint8Array): Promise<v2028.Proposal | undefined> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2028(keys: Uint8Array[]): Promise<(v2028.Proposal | undefined)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<(v2028.Proposal)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '9a9b6f49439518cb37672ca52b7e5cdb2843109031f61e24e5cf371f32c697a7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2029(key: Uint8Array): Promise<v2029.Proposal | undefined> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2029(keys: Uint8Array[]): Promise<(v2029.Proposal | undefined)[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2029(): Promise<(v2029.Proposal)[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '25b92df233c91ed77e0904a09051cb0985d8c95cc1fce890170e11c95ab35140'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2030(key: Uint8Array): Promise<v2030.Proposal | undefined> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2030(keys: Uint8Array[]): Promise<(v2030.Proposal | undefined)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2030(): Promise<(v2030.Proposal)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5bf6f4d6a582b79d1aee1559e4425bb7d7571ed6552fd0809e0e4b0dbbf14be1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9010(key: Uint8Array): Promise<v9010.Proposal | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9010(keys: Uint8Array[]): Promise<(v9010.Proposal | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.Proposal)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9030() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '267a1fbacfcf39c6f41faa7e15dafc885f811d4264d1b98fd4dedb06864a2336'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9030(key: Uint8Array): Promise<v9030.Proposal | undefined> {
    assert(this.isV9030)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9030(keys: Uint8Array[]): Promise<(v9030.Proposal | undefined)[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9030(): Promise<(v9030.Proposal)[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5972aac9112d1be3d00a2d2b08c3514aa87c25a026ecea82cc1e4313f6ab53fd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9040(key: Uint8Array): Promise<v9040.Proposal | undefined> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9040(keys: Uint8Array[]): Promise<(v9040.Proposal | undefined)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9040(): Promise<(v9040.Proposal)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '13cccf90ea77264605ec33f6f3b06b5c5099212f507d16348a4307e25e0037c8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: Uint8Array): Promise<v9050.Proposal | undefined> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9050(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9050(): Promise<(v9050.Proposal)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a06f31f28526e77b614a3b1ddf8bbed59ba55c22b665429e9747768d6a8dabcb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: Uint8Array): Promise<v9080.Proposal | undefined> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9080(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9080(): Promise<(v9080.Proposal)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '56cdb3f333767ac0c8f3522af138085a5e74d4faaeea50fddc95031771c85058'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: Uint8Array): Promise<v9090.Proposal | undefined> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9090(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9090(): Promise<(v9090.Proposal)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'eaae83c0de21b5d6a3d1072074b4bb2172d61801a9d623da700c1b0b85c82321'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: Uint8Array): Promise<v9100.Proposal | undefined> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9100(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9100(): Promise<(v9100.Proposal)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') != null
  }
}

export class Instance1CollectiveProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The hashes of the active proposals.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Proposals') != null
  }
}

export class Instance1CollectiveVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Voting') === 'a49f71820894c68e6a42e5b7677c024504071e0ede7cfda1198b1450e21c1f22'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Votes | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'Voting', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.Votes | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Votes)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'Voting')
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.Votes | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'Voting', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.Votes | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.Votes)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Voting') != null
  }
}

export class Instance1MembershipMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance1Membership', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance1Membership', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Membership', 'Members') != null
  }
}

export class Instance1MembershipPrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current prime member, if one exists.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Instance1Membership', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The current prime member, if one exists.
   */
  async getAsV1050(): Promise<Uint8Array | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Instance1Membership', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Membership', 'Prime') != null
  }
}

export class Instance2CollectiveMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Members') != null
  }
}

export class Instance2CollectivePrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The member who provides the default vote for any other members that do not vote before
   *  the timeout. If None, then no member has that privilege.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The member who provides the default vote for any other members that do not vote before
   *  the timeout. If None, then no member has that privilege.
   */
  async getAsV1050(): Promise<Uint8Array | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Prime') != null
  }
}

export class Instance2CollectiveProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalCount') != null
  }
}

export class Instance2CollectiveProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '988b54a69200501d1caa21231c09e8d115ce376b26e5cfe53b9efe6d1aa2353f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Proposal | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.Proposal | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Proposal)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'dd07ea6860eb31afbcf979619a9f751f46be77411e9c22ab6d968f1cbb826975'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1022(key: Uint8Array): Promise<v1022.Proposal | undefined> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1022(keys: Uint8Array[]): Promise<(v1022.Proposal | undefined)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1022(): Promise<(v1022.Proposal)[]> {
    assert(this.isV1022)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1024() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'd1057f90e4da1f4375c8e1942f93abac694f8f1e3eb41ae19b49794a3cd7754c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1024(key: Uint8Array): Promise<v1024.Proposal | undefined> {
    assert(this.isV1024)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1024(keys: Uint8Array[]): Promise<(v1024.Proposal | undefined)[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1024(): Promise<(v1024.Proposal)[]> {
    assert(this.isV1024)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1027() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '952306cf3b40b722e8a89f97348456e7288504655b1fef8f8848728064e020d6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1027(key: Uint8Array): Promise<v1027.Proposal | undefined> {
    assert(this.isV1027)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1027(keys: Uint8Array[]): Promise<(v1027.Proposal | undefined)[]> {
    assert(this.isV1027)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1027(): Promise<(v1027.Proposal)[]> {
    assert(this.isV1027)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1029() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c684ff44da66806df8f7b0311e8b461bcd53a6438c7321d8065c89376d754173'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1029(key: Uint8Array): Promise<v1029.Proposal | undefined> {
    assert(this.isV1029)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1029(keys: Uint8Array[]): Promise<(v1029.Proposal | undefined)[]> {
    assert(this.isV1029)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1029(): Promise<(v1029.Proposal)[]> {
    assert(this.isV1029)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a5dece5dab1ee986977b4658ed7c0dcc0ead6936604d3359ae5d56497127c435'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1030(key: Uint8Array): Promise<v1030.Proposal | undefined> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1030(keys: Uint8Array[]): Promise<(v1030.Proposal | undefined)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1030(): Promise<(v1030.Proposal)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1031() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '491d769f67c8b91e6c1892535c8a0d6726eac1c321ce672b23b722cea1b1ab46'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1031(key: Uint8Array): Promise<v1031.Proposal | undefined> {
    assert(this.isV1031)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1031(keys: Uint8Array[]): Promise<(v1031.Proposal | undefined)[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1031(): Promise<(v1031.Proposal)[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1032() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '3cec838f63976aa29bba710d21944d10bd6aaf418ca780e11fe2c2d0e628d629'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1032(key: Uint8Array): Promise<v1032.Proposal | undefined> {
    assert(this.isV1032)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1032(keys: Uint8Array[]): Promise<(v1032.Proposal | undefined)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1032(): Promise<(v1032.Proposal)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1038() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '6f242fd68c6cf6b13795cb7c87e22bc4d5cb344260c9c4976f712b389f1a72e5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1038(key: Uint8Array): Promise<v1038.Proposal | undefined> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1038(keys: Uint8Array[]): Promise<(v1038.Proposal | undefined)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1038(): Promise<(v1038.Proposal)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1039() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '46ed4057a9e44696c823f53a2afcf45ec0e1319fff4b984ff2a78dac066632b7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1039(key: Uint8Array): Promise<v1039.Proposal | undefined> {
    assert(this.isV1039)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1039(keys: Uint8Array[]): Promise<(v1039.Proposal | undefined)[]> {
    assert(this.isV1039)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1039(): Promise<(v1039.Proposal)[]> {
    assert(this.isV1039)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '09964938a6344ce4017f443d37b809998da5205b97ba32089dc34e25517d8727'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1040(key: Uint8Array): Promise<v1040.Proposal | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(v1040.Proposal | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(v1040.Proposal)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1042() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c5be77395b90894b0b9d89a8bfd40c3969fd90f48d12a513d31f62f19ba198b2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1042(key: Uint8Array): Promise<v1042.Proposal | undefined> {
    assert(this.isV1042)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1042(keys: Uint8Array[]): Promise<(v1042.Proposal | undefined)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1042(): Promise<(v1042.Proposal)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '75a26ba5a11378b5ec0d7e80a5150e53f1723bf825534c48ac8df88d46f8ad11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.Proposal | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.Proposal | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.Proposal)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1054() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ecb491dab152e949512780951867e171f6a72abd7ec8510103dcec7c8482218c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1054(key: Uint8Array): Promise<v1054.Proposal | undefined> {
    assert(this.isV1054)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1054(keys: Uint8Array[]): Promise<(v1054.Proposal | undefined)[]> {
    assert(this.isV1054)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1054(): Promise<(v1054.Proposal)[]> {
    assert(this.isV1054)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1055() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f76941917fe1c97effc3b54c45775b17c3dd7b8644e859888214965a3d2c1915'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1055(key: Uint8Array): Promise<v1055.Proposal | undefined> {
    assert(this.isV1055)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1055(keys: Uint8Array[]): Promise<(v1055.Proposal | undefined)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1055(): Promise<(v1055.Proposal)[]> {
    assert(this.isV1055)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a40aebf7430950292287f9ba1ac41514aec633d7ce9c595b51922b2d00f766c4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1058(key: Uint8Array): Promise<v1058.Proposal | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1058(keys: Uint8Array[]): Promise<(v1058.Proposal | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(v1058.Proposal)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1062() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f1964574c2acdf7657cebbec13992465e146c9c1d70a9ebfe5cb2c849e33a8fb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1062(key: Uint8Array): Promise<v1062.Proposal | undefined> {
    assert(this.isV1062)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1062(keys: Uint8Array[]): Promise<(v1062.Proposal | undefined)[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV1062(): Promise<(v1062.Proposal)[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '59d62f9580ec29b948bb61b54782d0eb894f759082f4cd66b3d721cd51fc6eab'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2005(key: Uint8Array): Promise<v2005.Proposal | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2005(keys: Uint8Array[]): Promise<(v2005.Proposal | undefined)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2005(): Promise<(v2005.Proposal)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2007() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '9b8403a58da018e039e7d02e03c58751e5f3966f734c0a805247c8f819ebe6e6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2007(key: Uint8Array): Promise<v2007.Proposal | undefined> {
    assert(this.isV2007)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2007(keys: Uint8Array[]): Promise<(v2007.Proposal | undefined)[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2007(): Promise<(v2007.Proposal)[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '72ae96a40c2e115fd196fda8aba62965500743102911195e5db6bffe5c730a89'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: Uint8Array): Promise<v2011.Proposal | undefined> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2011(keys: Uint8Array[]): Promise<(v2011.Proposal | undefined)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2011(): Promise<(v2011.Proposal)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '646a7b14d2d0c7e0302ab7e697eb7a22ce351bc30f8ed014a36febdee8fd066c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: Uint8Array): Promise<v2013.Proposal | undefined> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2013(keys: Uint8Array[]): Promise<(v2013.Proposal | undefined)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2013(): Promise<(v2013.Proposal)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2015() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '49cb7fd61e09b6e09885d9254e3179527de1bb56a3bac4e41806540efa177504'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2015(key: Uint8Array): Promise<v2015.Proposal | undefined> {
    assert(this.isV2015)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2015(keys: Uint8Array[]): Promise<(v2015.Proposal | undefined)[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2015(): Promise<(v2015.Proposal)[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'e940a02bab509e8f3c662c3743d99681461dc41eb7807d9f724137541d6d6888'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: Uint8Array): Promise<v2022.Proposal | undefined> {
    assert(this.isV2022)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2022(keys: Uint8Array[]): Promise<(v2022.Proposal | undefined)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2022(): Promise<(v2022.Proposal)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '28ae6082aa3659f3eb665b763906f5f43dfc25a261e76bc3bfaae2bf35809886'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: Uint8Array): Promise<v2023.Proposal | undefined> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2023(keys: Uint8Array[]): Promise<(v2023.Proposal | undefined)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2023(): Promise<(v2023.Proposal)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2024() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '30c3471266df7fa23a52dd4c3eee936e8a38a242733b19606a6d8434b8818044'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2024(key: Uint8Array): Promise<v2024.Proposal | undefined> {
    assert(this.isV2024)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2024(keys: Uint8Array[]): Promise<(v2024.Proposal | undefined)[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2024(): Promise<(v2024.Proposal)[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c6aa8f92b929d74aa84d6bc73ac4de7208eb9ea79b0633b7ece10545e71bc6bc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2025(key: Uint8Array): Promise<v2025.Proposal | undefined> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2025(keys: Uint8Array[]): Promise<(v2025.Proposal | undefined)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(v2025.Proposal)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2026() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '8273b8a7016b06dcb65adf9f34a09480690bdb5cd14cc410c9b0899a03dd8f22'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2026(key: Uint8Array): Promise<v2026.Proposal | undefined> {
    assert(this.isV2026)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2026(keys: Uint8Array[]): Promise<(v2026.Proposal | undefined)[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2026(): Promise<(v2026.Proposal)[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '90dd79f7117af09c072af285850479432c5a99791d1cb8011e2307aefaf37418'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2028(key: Uint8Array): Promise<v2028.Proposal | undefined> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2028(keys: Uint8Array[]): Promise<(v2028.Proposal | undefined)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<(v2028.Proposal)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '9a9b6f49439518cb37672ca52b7e5cdb2843109031f61e24e5cf371f32c697a7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2029(key: Uint8Array): Promise<v2029.Proposal | undefined> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2029(keys: Uint8Array[]): Promise<(v2029.Proposal | undefined)[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2029(): Promise<(v2029.Proposal)[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '25b92df233c91ed77e0904a09051cb0985d8c95cc1fce890170e11c95ab35140'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2030(key: Uint8Array): Promise<v2030.Proposal | undefined> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2030(keys: Uint8Array[]): Promise<(v2030.Proposal | undefined)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2030(): Promise<(v2030.Proposal)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5bf6f4d6a582b79d1aee1559e4425bb7d7571ed6552fd0809e0e4b0dbbf14be1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9010(key: Uint8Array): Promise<v9010.Proposal | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9010(keys: Uint8Array[]): Promise<(v9010.Proposal | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.Proposal)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9030() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '267a1fbacfcf39c6f41faa7e15dafc885f811d4264d1b98fd4dedb06864a2336'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9030(key: Uint8Array): Promise<v9030.Proposal | undefined> {
    assert(this.isV9030)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9030(keys: Uint8Array[]): Promise<(v9030.Proposal | undefined)[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9030(): Promise<(v9030.Proposal)[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5972aac9112d1be3d00a2d2b08c3514aa87c25a026ecea82cc1e4313f6ab53fd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9040(key: Uint8Array): Promise<v9040.Proposal | undefined> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9040(keys: Uint8Array[]): Promise<(v9040.Proposal | undefined)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9040(): Promise<(v9040.Proposal)[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '13cccf90ea77264605ec33f6f3b06b5c5099212f507d16348a4307e25e0037c8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: Uint8Array): Promise<v9050.Proposal | undefined> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9050(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9050(): Promise<(v9050.Proposal)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a06f31f28526e77b614a3b1ddf8bbed59ba55c22b665429e9747768d6a8dabcb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: Uint8Array): Promise<v9080.Proposal | undefined> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9080(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9080(): Promise<(v9080.Proposal)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '56cdb3f333767ac0c8f3522af138085a5e74d4faaeea50fddc95031771c85058'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: Uint8Array): Promise<v9090.Proposal | undefined> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9090(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9090(): Promise<(v9090.Proposal)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'eaae83c0de21b5d6a3d1072074b4bb2172d61801a9d623da700c1b0b85c82321'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: Uint8Array): Promise<v9100.Proposal | undefined> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9100(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9100(): Promise<(v9100.Proposal)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') != null
  }
}

export class Instance2CollectiveProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The hashes of the active proposals.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Proposals') != null
  }
}

export class Instance2CollectiveVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Voting') === 'a49f71820894c68e6a42e5b7677c024504071e0ede7cfda1198b1450e21c1f22'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Votes | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'Voting', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.Votes | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Votes)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'Voting')
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.Votes | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'Voting', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.Votes | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.Votes)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Voting') != null
  }
}

export class MultisigCallsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV2011() {
    return this._chain.getStorageItemTypeHash('Multisig', 'Calls') === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
  }

  async getAsV2011(key: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint] | undefined> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'Multisig', 'Calls', key)
  }

  async getManyAsV2011(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Calls', keys.map(k => [k]))
  }

  async getAllAsV2011(): Promise<([Uint8Array, Uint8Array, bigint])[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Calls')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Multisig', 'Calls') != null
  }
}

export class MultisigMultisigsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of open multisig operations.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Multisig', 'Multisigs') === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
  }

  /**
   *  The set of open multisig operations.
   */
  async getAsV2005(key1: Uint8Array, key2: Uint8Array): Promise<v2005.Multisig | undefined> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Multisig', 'Multisigs', key1, key2)
  }

  async getManyAsV2005(keys: [Uint8Array, Uint8Array][]): Promise<(v2005.Multisig | undefined)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Multisigs', keys)
  }

  async getAllAsV2005(): Promise<(v2005.Multisig)[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Multisigs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Multisig', 'Multisigs') != null
  }
}

export class NominationPoolsBondedPoolsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage for bonded pools.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'BondedPools') === '67944bfd3ece8ec03cf8b826771965a12ebd527ce15d35cb270c1d84427557e8'
  }

  /**
   *  Storage for bonded pools.
   */
  async getAsV9220(key: number): Promise<v9220.BondedPoolInner | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'BondedPools', key)
  }

  async getManyAsV9220(keys: number[]): Promise<(v9220.BondedPoolInner | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'BondedPools', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(v9220.BondedPoolInner)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'BondedPools')
  }

  /**
   *  Storage for bonded pools.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'BondedPools') === '71e65a38fe13c43d62e01d4a26cc90c142271e60e61773941927ebd77e3df23a'
  }

  /**
   *  Storage for bonded pools.
   */
  async getAsV9230(key: number): Promise<v9230.BondedPoolInner | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'BondedPools', key)
  }

  async getManyAsV9230(keys: number[]): Promise<(v9230.BondedPoolInner | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'BondedPools', keys.map(k => [k]))
  }

  async getAllAsV9230(): Promise<(v9230.BondedPoolInner)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'BondedPools')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'BondedPools') != null
  }
}

export class NominationPoolsCounterForBondedPoolsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   * Counter for the related counted storage map
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForBondedPools') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   * Counter for the related counted storage map
   */
  async getAsV9220(): Promise<number> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'CounterForBondedPools')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForBondedPools') != null
  }
}

export class NominationPoolsCounterForMetadataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   * Counter for the related counted storage map
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForMetadata') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   * Counter for the related counted storage map
   */
  async getAsV9220(): Promise<number> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'CounterForMetadata')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForMetadata') != null
  }
}

export class NominationPoolsCounterForPoolMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   * Counter for the related counted storage map
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForPoolMembers') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   * Counter for the related counted storage map
   */
  async getAsV9220(): Promise<number> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'CounterForPoolMembers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForPoolMembers') != null
  }
}

export class NominationPoolsCounterForReversePoolIdLookupStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   * Counter for the related counted storage map
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForReversePoolIdLookup') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   * Counter for the related counted storage map
   */
  async getAsV9220(): Promise<number> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'CounterForReversePoolIdLookup')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForReversePoolIdLookup') != null
  }
}

export class NominationPoolsCounterForRewardPoolsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   * Counter for the related counted storage map
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForRewardPools') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   * Counter for the related counted storage map
   */
  async getAsV9220(): Promise<number> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'CounterForRewardPools')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForRewardPools') != null
  }
}

export class NominationPoolsCounterForSubPoolsStorageStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   * Counter for the related counted storage map
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForSubPoolsStorage') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   * Counter for the related counted storage map
   */
  async getAsV9220(): Promise<number> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'CounterForSubPoolsStorage')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'CounterForSubPoolsStorage') != null
  }
}

export class NominationPoolsLastPoolIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Ever increasing number of all pools created so far.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'LastPoolId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Ever increasing number of all pools created so far.
   */
  async getAsV9220(): Promise<number> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'LastPoolId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'LastPoolId') != null
  }
}

export class NominationPoolsMaxPoolMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of members that can exist in the system. If `None`, then the count
   *  members are not bound on a system wide basis.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MaxPoolMembers') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Maximum number of members that can exist in the system. If `None`, then the count
   *  members are not bound on a system wide basis.
   */
  async getAsV9220(): Promise<number | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'MaxPoolMembers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MaxPoolMembers') != null
  }
}

export class NominationPoolsMaxPoolMembersPerPoolStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of members that may belong to pool. If `None`, then the count of
   *  members is not bound on a per pool basis.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MaxPoolMembersPerPool') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Maximum number of members that may belong to pool. If `None`, then the count of
   *  members is not bound on a per pool basis.
   */
  async getAsV9220(): Promise<number | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'MaxPoolMembersPerPool')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MaxPoolMembersPerPool') != null
  }
}

export class NominationPoolsMaxPoolsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
   *  pools can exist.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MaxPools') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
   *  pools can exist.
   */
  async getAsV9220(): Promise<number | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'MaxPools')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MaxPools') != null
  }
}

export class NominationPoolsMetadataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Metadata for the pool.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'Metadata') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Metadata for the pool.
   */
  async getAsV9220(key: number): Promise<Uint8Array> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'Metadata', key)
  }

  async getManyAsV9220(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'Metadata', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(Uint8Array)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'Metadata')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'Metadata') != null
  }
}

export class NominationPoolsMinCreateBondStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Minimum bond required to create a pool.
   * 
   *  This is the amount that the depositor must put as their initial stake in the pool, as an
   *  indication of "skin in the game".
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MinCreateBond') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  Minimum bond required to create a pool.
   * 
   *  This is the amount that the depositor must put as their initial stake in the pool, as an
   *  indication of "skin in the game".
   */
  async getAsV9220(): Promise<bigint> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'MinCreateBond')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MinCreateBond') != null
  }
}

export class NominationPoolsMinJoinBondStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Minimum amount to bond to join a pool.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MinJoinBond') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  Minimum amount to bond to join a pool.
   */
  async getAsV9220(): Promise<bigint> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'MinJoinBond')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'MinJoinBond') != null
  }
}

export class NominationPoolsPoolMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Active members.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'PoolMembers') === '4f9161a3af2171d1defcb37cc13acaaf238fa6c0a68eaa85950cb94339fca91a'
  }

  /**
   *  Active members.
   */
  async getAsV9220(key: Uint8Array): Promise<v9220.PoolMember | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'PoolMembers', key)
  }

  async getManyAsV9220(keys: Uint8Array[]): Promise<(v9220.PoolMember | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'PoolMembers', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(v9220.PoolMember)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'PoolMembers')
  }

  /**
   *  Active members.
   */
  get isV9271() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'PoolMembers') === '4b73cf52c7b7da8a11c75fe9dae69e02b83c4fe7a62b5a2e5b996edd8168c745'
  }

  /**
   *  Active members.
   */
  async getAsV9271(key: Uint8Array): Promise<v9271.PoolMember | undefined> {
    assert(this.isV9271)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'PoolMembers', key)
  }

  async getManyAsV9271(keys: Uint8Array[]): Promise<(v9271.PoolMember | undefined)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'PoolMembers', keys.map(k => [k]))
  }

  async getAllAsV9271(): Promise<(v9271.PoolMember)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'PoolMembers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'PoolMembers') != null
  }
}

export class NominationPoolsReversePoolIdLookupStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A reverse lookup from the pool's account id to its id.
   * 
   *  This is only used for slashing. In all other instances, the pool id is used, and the
   *  accounts are deterministically derived from it.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'ReversePoolIdLookup') === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
  }

  /**
   *  A reverse lookup from the pool's account id to its id.
   * 
   *  This is only used for slashing. In all other instances, the pool id is used, and the
   *  accounts are deterministically derived from it.
   */
  async getAsV9220(key: Uint8Array): Promise<number | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'ReversePoolIdLookup', key)
  }

  async getManyAsV9220(keys: Uint8Array[]): Promise<(number | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'ReversePoolIdLookup', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(number)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'ReversePoolIdLookup')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'ReversePoolIdLookup') != null
  }
}

export class NominationPoolsRewardPoolsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
   *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'RewardPools') === '1fed7df58506d59e0d018e19660ab2bedce0bd16cefc75089e3ee1db1bd9afe1'
  }

  /**
   *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
   *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
   */
  async getAsV9220(key: number): Promise<v9220.RewardPool | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'RewardPools', key)
  }

  async getManyAsV9220(keys: number[]): Promise<(v9220.RewardPool | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'RewardPools', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(v9220.RewardPool)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'RewardPools')
  }

  /**
   *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
   *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
   */
  get isV9271() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'RewardPools') === '375666cc5d1267485e45c4d315cd3ed856c1f8bede82ba7bd7bf6b27e31a4872'
  }

  /**
   *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
   *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
   */
  async getAsV9271(key: number): Promise<v9271.RewardPool | undefined> {
    assert(this.isV9271)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'RewardPools', key)
  }

  async getManyAsV9271(keys: number[]): Promise<(v9271.RewardPool | undefined)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'RewardPools', keys.map(k => [k]))
  }

  async getAllAsV9271(): Promise<(v9271.RewardPool)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'RewardPools')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'RewardPools') != null
  }
}

export class NominationPoolsSubPoolsStorageStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
   *  hence the name sub-pools. Keyed by the bonded pools account.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('NominationPools', 'SubPoolsStorage') === 'dc5bb02a122fb418c88fbe5c06d8e91818c8d4fffe761fe0299ea8709df81bb3'
  }

  /**
   *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
   *  hence the name sub-pools. Keyed by the bonded pools account.
   */
  async getAsV9220(key: number): Promise<v9220.SubPools | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'NominationPools', 'SubPoolsStorage', key)
  }

  async getManyAsV9220(keys: number[]): Promise<(v9220.SubPools | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'SubPoolsStorage', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(v9220.SubPools)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'NominationPools', 'SubPoolsStorage')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NominationPools', 'SubPoolsStorage') != null
  }
}

export class OffencesConcurrentReportsIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A vector of reports of the same kind that happened at the same time slot.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Offences', 'ConcurrentReportsIndex') === 'd5c59a6db2baab9f1dcc1a37b0131a737935fd2082fcf39b6abc3f1d6e3ae008'
  }

  /**
   *  A vector of reports of the same kind that happened at the same time slot.
   */
  async getAsV1020(key1: Uint8Array, key2: Uint8Array): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Offences', 'ConcurrentReportsIndex', key1, key2)
  }

  async getManyAsV1020(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Offences', 'ConcurrentReportsIndex', keys)
  }

  async getAllAsV1020(): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Offences', 'ConcurrentReportsIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Offences', 'ConcurrentReportsIndex') != null
  }
}

export class OffencesDeferredOffencesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Deferred reports that have been rejected by the offence handler and need to be submitted
   *  at a later time.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Offences', 'DeferredOffences') === '65c2bd7c83332ec30382595579905bc2abf22a9f87aa00c33bcc28ba95f3b845'
  }

  /**
   *  Deferred reports that have been rejected by the offence handler and need to be submitted
   *  at a later time.
   */
  async getAsV1058(): Promise<[v1058.OffenceDetails[], number[], number][]> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Offences', 'DeferredOffences')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Offences', 'DeferredOffences') != null
  }
}

export class OffencesReportsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The primary structure that holds all offence records keyed by report identifiers.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Offences', 'Reports') === 'e52641726adeb87007a96ce7684aad2f8233624d39e0ad7727f22f889bc9279f'
  }

  /**
   *  The primary structure that holds all offence records keyed by report identifiers.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.OffenceDetails | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Offences', 'Reports', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.OffenceDetails | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Offences', 'Reports', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.OffenceDetails)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Offences', 'Reports')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Offences', 'Reports') != null
  }
}

export class OffencesReportsByKindIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Enumerates all reports of a kind along with the time they happened.
   * 
   *  All reports are sorted by the time of offence.
   * 
   *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
   *  different types are not supported at the moment so we are doing the manual serialization.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Offences', 'ReportsByKindIndex') === '0f535b9892aaca40228e6d3f57b63c241690838a686fa8be3e7f0992bfda0d19'
  }

  /**
   *  Enumerates all reports of a kind along with the time they happened.
   * 
   *  All reports are sorted by the time of offence.
   * 
   *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
   *  different types are not supported at the moment so we are doing the manual serialization.
   */
  async getAsV1020(key: Uint8Array): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Offences', 'ReportsByKindIndex', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Offences', 'ReportsByKindIndex', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Offences', 'ReportsByKindIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Offences', 'ReportsByKindIndex') != null
  }
}

export class ParaInclusionAvailabilityBitfieldsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The latest bitfield for each validator, referred to by their index in the validator set.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaInclusion', 'AvailabilityBitfields') === '427b03442d1c34025fbd811519bd8197494cfb35a7860997ce064b28b820bd8e'
  }

  /**
   *  The latest bitfield for each validator, referred to by their index in the validator set.
   */
  async getAsV9010(key: number): Promise<v9010.AvailabilityBitfieldRecord | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaInclusion', 'AvailabilityBitfields', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.AvailabilityBitfieldRecord | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'AvailabilityBitfields', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.AvailabilityBitfieldRecord)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'AvailabilityBitfields')
  }

  /**
   *  The latest bitfield for each validator, referred to by their index in the validator set.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('ParaInclusion', 'AvailabilityBitfields') === 'bf97f32483242f327da32063a836c1f797b9f0b05ea5417192cc00309d339c23'
  }

  /**
   *  The latest bitfield for each validator, referred to by their index in the validator set.
   */
  async getAsV9111(key: number): Promise<v9111.AvailabilityBitfieldRecord | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'ParaInclusion', 'AvailabilityBitfields', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.AvailabilityBitfieldRecord | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'AvailabilityBitfields', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.AvailabilityBitfieldRecord)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'AvailabilityBitfields')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaInclusion', 'AvailabilityBitfields') != null
  }
}

export class ParaInclusionPendingAvailabilityStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Candidates pending availability by `ParaId`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaInclusion', 'PendingAvailability') === '7f95dd70d9be9204fc6db7ec2d088508d7e12bcb315715fc0d8fd82897858c1b'
  }

  /**
   *  Candidates pending availability by `ParaId`.
   */
  async getAsV9010(key: number): Promise<v9010.CandidatePendingAvailability | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaInclusion', 'PendingAvailability', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.CandidatePendingAvailability | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'PendingAvailability', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.CandidatePendingAvailability)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'PendingAvailability')
  }

  /**
   *  Candidates pending availability by `ParaId`.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('ParaInclusion', 'PendingAvailability') === 'd1ce28ee05b8364d55d8ee99dab4ba7567356381f70d142c1dda5b6de4abf79b'
  }

  /**
   *  Candidates pending availability by `ParaId`.
   */
  async getAsV9111(key: number): Promise<v9111.CandidatePendingAvailability | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'ParaInclusion', 'PendingAvailability', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.CandidatePendingAvailability | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'PendingAvailability', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.CandidatePendingAvailability)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'PendingAvailability')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaInclusion', 'PendingAvailability') != null
  }
}

export class ParaInclusionPendingAvailabilityCommitmentsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The commitments of candidates pending availability, by ParaId.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaInclusion', 'PendingAvailabilityCommitments') === '4e6f7845cb653fd4982455ab1aefc6bf2c68b8591ae7b58226dd2c5b0621f0cf'
  }

  /**
   *  The commitments of candidates pending availability, by ParaId.
   */
  async getAsV9010(key: number): Promise<v9010.CandidateCommitments | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaInclusion', 'PendingAvailabilityCommitments', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.CandidateCommitments | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'PendingAvailabilityCommitments', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.CandidateCommitments)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'ParaInclusion', 'PendingAvailabilityCommitments')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaInclusion', 'PendingAvailabilityCommitments') != null
  }
}

export class ParaInherentIncludedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Whether the paras inherent was included within this block.
   * 
   *  The `Option<()>` is effectively a bool, but it never hits storage in the `None` variant
   *  due to the guarantees of FRAME's storage APIs.
   * 
   *  If this is `None` at the end of the block, we panic and render the block invalid.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaInherent', 'Included') === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
  }

  /**
   *  Whether the paras inherent was included within this block.
   * 
   *  The `Option<()>` is effectively a bool, but it never hits storage in the `None` variant
   *  due to the guarantees of FRAME's storage APIs.
   * 
   *  If this is `None` at the end of the block, we panic and render the block invalid.
   */
  async getAsV9010(): Promise<null | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaInherent', 'Included')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaInherent', 'Included') != null
  }
}

export class ParaInherentOnChainVotesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Scraped on chain data for extracting resolved disputes as well as backing votes.
   */
  get isV9122() {
    return this._chain.getStorageItemTypeHash('ParaInherent', 'OnChainVotes') === '90024dc5cb8ad039cc5c064f6dae6d9b18bbb24fd2d8b5dda8f60b533147590b'
  }

  /**
   *  Scraped on chain data for extracting resolved disputes as well as backing votes.
   */
  async getAsV9122(): Promise<v9122.V1ScrapedOnChainVotes | undefined> {
    assert(this.isV9122)
    return this._chain.getStorage(this.blockHash, 'ParaInherent', 'OnChainVotes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaInherent', 'OnChainVotes') != null
  }
}

export class ParaSchedulerAvailabilityCoresStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'AvailabilityCores') === 'e8866464de6f9b4baa4ed69eebe4153539d1fc96124dd9acb8f9cf67c160676e'
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
  async getAsV9010(): Promise<(v9010.CoreOccupied | undefined)[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaScheduler', 'AvailabilityCores')
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
  get isV9111() {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'AvailabilityCores') === '7f07eeae3b19707b6c2d7d6d316072b68175ffebbad0a2329e61a8413e936151'
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
  async getAsV9111(): Promise<(v9111.V1CoreOccupied | undefined)[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'ParaScheduler', 'AvailabilityCores')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'AvailabilityCores') != null
  }
}

export class ParaSchedulerParathreadClaimIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  An index used to ensure that only one claim on a parathread exists in the queue or is
   *  currently being handled by an occupied core.
   * 
   *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'ParathreadClaimIndex') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  An index used to ensure that only one claim on a parathread exists in the queue or is
   *  currently being handled by an occupied core.
   * 
   *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
   */
  async getAsV9010(): Promise<number[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaScheduler', 'ParathreadClaimIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'ParathreadClaimIndex') != null
  }
}

export class ParaSchedulerParathreadQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A queue of upcoming claims and which core they should be mapped onto.
   * 
   *  The number of queued claims is bounded at the `scheduling_lookahead`
   *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'ParathreadQueue') === 'c75714ddf007711a84c1420eb03081789539e9248fd15ec5bdfd7ef07d871660'
  }

  /**
   *  A queue of upcoming claims and which core they should be mapped onto.
   * 
   *  The number of queued claims is bounded at the `scheduling_lookahead`
   *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
   */
  async getAsV9010(): Promise<v9010.ParathreadClaimQueue> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaScheduler', 'ParathreadQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'ParathreadQueue') != null
  }
}

export class ParaSchedulerScheduledStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Currently scheduled cores - free but up to be occupied.
   * 
   *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
   * 
   *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
   *  for the upcoming block.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'Scheduled') === 'ccb6b6869e4c2b06b189d11efb9130dad98d2b215bb282c9bec01215706af40a'
  }

  /**
   *  Currently scheduled cores - free but up to be occupied.
   * 
   *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
   * 
   *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
   *  for the upcoming block.
   */
  async getAsV9010(): Promise<v9010.CoreAssignment[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaScheduler', 'Scheduled')
  }

  /**
   *  Currently scheduled cores - free but up to be occupied.
   * 
   *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
   * 
   *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
   *  for the upcoming block.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'Scheduled') === 'ba9a2a711ca71cdb5388a14f4c122bb3979325380609bfba73d66568069257a7'
  }

  /**
   *  Currently scheduled cores - free but up to be occupied.
   * 
   *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
   * 
   *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
   *  for the upcoming block.
   */
  async getAsV9111(): Promise<v9111.CoreAssignment[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'ParaScheduler', 'Scheduled')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'Scheduled') != null
  }
}

export class ParaSchedulerSessionStartBlockStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The block number where the session start occurred. Used to track how many group rotations have occurred.
   * 
   *  Note that in the context of parachains modules the session change is signalled during
   *  the block and enacted at the end of the block (at the finalization stage, to be exact).
   *  Thus for all intents and purposes the effect of the session change is observed at the
   *  block following the session change, block number of which we save in this storage value.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'SessionStartBlock') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The block number where the session start occurred. Used to track how many group rotations have occurred.
   * 
   *  Note that in the context of parachains modules the session change is signalled during
   *  the block and enacted at the end of the block (at the finalization stage, to be exact).
   *  Thus for all intents and purposes the effect of the session change is observed at the
   *  block following the session change, block number of which we save in this storage value.
   */
  async getAsV9010(): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaScheduler', 'SessionStartBlock')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'SessionStartBlock') != null
  }
}

export class ParaSchedulerValidatorGroupsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
   *  broader set of Polkadot validators, but instead just the subset used for parachains during
   *  this session.
   * 
   *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
   *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'ValidatorGroups') === '6812c4f54daaeff8842c0895b0d89bea407fdfe1c921e760ce2f412477ce233d'
  }

  /**
   *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
   *  broader set of Polkadot validators, but instead just the subset used for parachains during
   *  this session.
   * 
   *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
   *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
   */
  async getAsV9010(): Promise<number[][]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaScheduler', 'ValidatorGroups')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaScheduler', 'ValidatorGroups') != null
  }
}

export class ParaSessionInfoAccountKeysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The validator account keys of the validators actively participating in parachain consensus.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('ParaSessionInfo', 'AccountKeys') === '9ec34a723b63dfc1d78a2d356bbdb08e5be19ef85e221f93b46f03e24229ffd0'
  }

  /**
   *  The validator account keys of the validators actively participating in parachain consensus.
   */
  async getAsV9230(key: number): Promise<Uint8Array[] | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'ParaSessionInfo', 'AccountKeys', key)
  }

  async getManyAsV9230(keys: number[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'ParaSessionInfo', 'AccountKeys', keys.map(k => [k]))
  }

  async getAllAsV9230(): Promise<(Uint8Array[])[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'ParaSessionInfo', 'AccountKeys')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaSessionInfo', 'AccountKeys') != null
  }
}

export class ParaSessionInfoAssignmentKeysUnsafeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Assignment keys for the current session.
   *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
   *  When in doubt, use `Sessions` API instead.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaSessionInfo', 'AssignmentKeysUnsafe') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  Assignment keys for the current session.
   *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
   *  When in doubt, use `Sessions` API instead.
   */
  async getAsV9010(): Promise<Uint8Array[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaSessionInfo', 'AssignmentKeysUnsafe')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaSessionInfo', 'AssignmentKeysUnsafe') != null
  }
}

export class ParaSessionInfoEarliestStoredSessionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The earliest session for which previous session info is stored.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaSessionInfo', 'EarliestStoredSession') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The earliest session for which previous session info is stored.
   */
  async getAsV9010(): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaSessionInfo', 'EarliestStoredSession')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaSessionInfo', 'EarliestStoredSession') != null
  }
}

export class ParaSessionInfoSessionsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Session information in a rolling window.
   *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
   *  Does not have any entries before the session index in the first session change notification.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParaSessionInfo', 'Sessions') === 'f8bd79f544a6e737b6526766ddb7fcfe1339a9318972eacf96568d40a5792dce'
  }

  /**
   *  Session information in a rolling window.
   *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
   *  Does not have any entries before the session index in the first session change notification.
   */
  async getAsV9010(key: number): Promise<v9010.SessionInfo | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParaSessionInfo', 'Sessions', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.SessionInfo | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'ParaSessionInfo', 'Sessions', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.SessionInfo)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'ParaSessionInfo', 'Sessions')
  }

  /**
   *  Session information in a rolling window.
   *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
   *  Does not have any entries before the session index in the first session change notification.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('ParaSessionInfo', 'Sessions') === '2df170f53bbb8953f8c99d9d7899c64705f4a7bf2a4a355720ab5a1d2f0698f5'
  }

  /**
   *  Session information in a rolling window.
   *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
   *  Does not have any entries before the session index in the first session change notification.
   */
  async getAsV9160(key: number): Promise<v9160.V2SessionInfo | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'ParaSessionInfo', 'Sessions', key)
  }

  async getManyAsV9160(keys: number[]): Promise<(v9160.V2SessionInfo | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'ParaSessionInfo', 'Sessions', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.V2SessionInfo)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'ParaSessionInfo', 'Sessions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParaSessionInfo', 'Sessions') != null
  }
}

export class ParachainsAuthoritiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All authorities' keys at the moment.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Parachains', 'Authorities') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  All authorities' keys at the moment.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'Authorities')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'Authorities') != null
  }
}

export class ParachainsCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The parachains registered at present.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Parachains', 'Code') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The parachains registered at present.
   */
  async getAsV1020(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'Code', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'Code', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'Code')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'Code') != null
  }
}

export class ParachainsDidUpdateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Some if the parachain heads get updated in this block, along with the parachain IDs that
   *  did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
   * 
   *  None if not yet updated.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Parachains', 'DidUpdate') === 'e007566ad70b61f5b2395e443784d1a97319710e80f5f29c5f928c0257113213'
  }

  /**
   *  Some if the parachain heads get updated in this block, along with the parachain IDs that
   *  did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
   * 
   *  None if not yet updated.
   */
  async getAsV1020(): Promise<number[] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'DidUpdate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'DidUpdate') != null
  }
}

export class ParachainsDownwardMessageQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Messages waiting to be delivered from the Relay chain into the parachain.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('Parachains', 'DownwardMessageQueue') === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
  }

  /**
   *  Messages waiting to be delivered from the Relay chain into the parachain.
   */
  async getAsV2013(key: number): Promise<Uint8Array[]> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'DownwardMessageQueue', key)
  }

  async getManyAsV2013(keys: number[]): Promise<(Uint8Array[])[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'DownwardMessageQueue', keys.map(k => [k]))
  }

  async getAllAsV2013(): Promise<(Uint8Array[])[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'DownwardMessageQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'DownwardMessageQueue') != null
  }
}

export class ParachainsFutureCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1058() {
    return this._chain.getStorageItemTypeHash('Parachains', 'FutureCode') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  async getAsV1058(key: number): Promise<Uint8Array> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'FutureCode', key)
  }

  async getManyAsV1058(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'FutureCode', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(Uint8Array)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'FutureCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'FutureCode') != null
  }
}

export class ParachainsFutureCodeUpgradesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1058() {
    return this._chain.getStorageItemTypeHash('Parachains', 'FutureCodeUpgrades') === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
  }

  async getAsV1058(key: number): Promise<number | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'FutureCodeUpgrades', key)
  }

  async getManyAsV1058(keys: number[]): Promise<(number | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'FutureCodeUpgrades', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(number)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'FutureCodeUpgrades')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'FutureCodeUpgrades') != null
  }
}

export class ParachainsHeadsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The heads of the parachains registered at present.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Parachains', 'Heads') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The heads of the parachains registered at present.
   */
  async getAsV1020(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'Heads', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'Heads', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'Heads')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'Heads') != null
  }
}

export class ParachainsNeedsDispatchStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Parachains', 'NeedsDispatch') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
   */
  async getAsV1020(): Promise<number[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'NeedsDispatch')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'NeedsDispatch') != null
  }
}

export class ParachainsPastCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual past code, indicated by the parachain and the block number at which it
   *  became outdated.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Parachains', 'PastCode') === '6e792685cfbc88b8c231cc71eb367f5f6afd7a0241afec572c20059701e16244'
  }

  /**
   *  Actual past code, indicated by the parachain and the block number at which it
   *  became outdated.
   */
  async getAsV1058(key: [number, number]): Promise<Uint8Array | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'PastCode', key)
  }

  async getManyAsV1058(keys: [number, number][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'PastCode', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(Uint8Array)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'PastCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'PastCode') != null
  }
}

export class ParachainsPastCodeMetaStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Past code of parachains. The parachains themselves may not be registered anymore,
   *  but we also keep their code on-chain for the same amount of time as outdated code
   *  to assist with availability.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Parachains', 'PastCodeMeta') === 'a069a7aca8874185413a0d1fd88ae2c96bd7ecd883dd17c9e349867c0b602302'
  }

  /**
   *  Past code of parachains. The parachains themselves may not be registered anymore,
   *  but we also keep their code on-chain for the same amount of time as outdated code
   *  to assist with availability.
   */
  async getAsV1058(key: number): Promise<v1058.ParaPastCodeMeta> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'PastCodeMeta', key)
  }

  async getManyAsV1058(keys: number[]): Promise<(v1058.ParaPastCodeMeta)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'PastCodeMeta', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(v1058.ParaPastCodeMeta)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'PastCodeMeta')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'PastCodeMeta') != null
  }
}

export class ParachainsPastCodePruningStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Past code pruning, in order of priority.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Parachains', 'PastCodePruning') === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
  }

  /**
   *  Past code pruning, in order of priority.
   */
  async getAsV1058(): Promise<[number, number][]> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'PastCodePruning')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'PastCodePruning') != null
  }
}

export class ParachainsRelayDispatchQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Messages ready to be dispatched onto the relay chain. It is subject to
   *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Parachains', 'RelayDispatchQueue') === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
  }

  /**
   *  Messages ready to be dispatched onto the relay chain. It is subject to
   *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
   */
  async getAsV1020(key: number): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'RelayDispatchQueue', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'RelayDispatchQueue', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'RelayDispatchQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'RelayDispatchQueue') != null
  }
}

export class ParachainsRelayDispatchQueueSizeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Size of the dispatch queues. Separated from actual data in order to avoid costly
   *  decoding when checking receipt validity. First item in tuple is the count of messages
   * 	second if the total length (in bytes) of the message payloads.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Parachains', 'RelayDispatchQueueSize') === '11d84eadab69be0e8dde14b70110d550deeab55868bd2bc91f3c1cf340a76ef8'
  }

  /**
   *  Size of the dispatch queues. Separated from actual data in order to avoid costly
   *  decoding when checking receipt validity. First item in tuple is the count of messages
   * 	second if the total length (in bytes) of the message payloads.
   */
  async getAsV1020(key: number): Promise<[number, number]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'RelayDispatchQueueSize', key)
  }

  async getManyAsV1020(keys: number[]): Promise<([number, number])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'RelayDispatchQueueSize', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<([number, number])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'RelayDispatchQueueSize')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'RelayDispatchQueueSize') != null
  }
}

export class ParachainsUnroutedIngressStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Unrouted ingress. Maps (BlockNumber, to_chain) pairs to [(from_chain, egress_root)].
   * 
   *  There may be an entry under (i, p) in this map for every i between the parachain's
   *  watermark and the current block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Parachains', 'UnroutedIngress') === 'a856709520a75e18c5d4252951787728f023e8104fc8e95e2e9e243a38e95938'
  }

  /**
   *  Unrouted ingress. Maps (BlockNumber, to_chain) pairs to [(from_chain, egress_root)].
   * 
   *  There may be an entry under (i, p) in this map for every i between the parachain's
   *  watermark and the current block.
   */
  async getAsV1020(key: [number, number]): Promise<[number, Uint8Array][] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'UnroutedIngress', key)
  }

  async getManyAsV1020(keys: [number, number][]): Promise<([number, Uint8Array][] | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'UnroutedIngress', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<([number, Uint8Array][])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'UnroutedIngress')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'UnroutedIngress') != null
  }
}

export class ParachainsWatermarksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The watermark heights of the parachains registered at present.
   *  For every parachain, this is the block height from which all messages targeting
   *  that parachain have been processed. Can be `None` only if the parachain doesn't exist.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Parachains', 'Watermarks') === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
  }

  /**
   *  The watermark heights of the parachains registered at present.
   *  For every parachain, this is the block height from which all messages targeting
   *  that parachain have been processed. Can be `None` only if the parachain doesn't exist.
   */
  async getAsV1020(key: number): Promise<number | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Parachains', 'Watermarks', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(number | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'Watermarks', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Parachains', 'Watermarks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Parachains', 'Watermarks') != null
  }
}

export class ParasActionsQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The actions to perform during the start of a specific session index.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'ActionsQueue') === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
  }

  /**
   *  The actions to perform during the start of a specific session index.
   */
  async getAsV9010(key: number): Promise<number[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'ActionsQueue', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(number[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'ActionsQueue', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(number[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'ActionsQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'ActionsQueue') != null
  }
}

export class ParasCodeByHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Validation code stored by its hash.
   * 
   *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
   *  [`PastCodeHash`].
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'CodeByHash') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  Validation code stored by its hash.
   * 
   *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
   *  [`PastCodeHash`].
   */
  async getAsV9010(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'CodeByHash', key)
  }

  async getManyAsV9010(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'CodeByHash', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(Uint8Array)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'CodeByHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'CodeByHash') != null
  }
}

export class ParasCodeByHashRefsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of reference on the validation code in [`CodeByHash`] storage.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'CodeByHashRefs') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  The number of reference on the validation code in [`CodeByHash`] storage.
   */
  async getAsV9010(key: Uint8Array): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'CodeByHashRefs', key)
  }

  async getManyAsV9010(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'CodeByHashRefs', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(number)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'CodeByHashRefs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'CodeByHashRefs') != null
  }
}

export class ParasCurrentCodeHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The validation code hash of every live para.
   * 
   *  Corresponding code can be retrieved with [`CodeByHash`].
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'CurrentCodeHash') === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
  }

  /**
   *  The validation code hash of every live para.
   * 
   *  Corresponding code can be retrieved with [`CodeByHash`].
   */
  async getAsV9010(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'CurrentCodeHash', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'CurrentCodeHash', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(Uint8Array)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'CurrentCodeHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'CurrentCodeHash') != null
  }
}

export class ParasFutureCodeHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The actual future code hash of a para.
   * 
   *  Corresponding code can be retrieved with [`CodeByHash`].
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'FutureCodeHash') === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
  }

  /**
   *  The actual future code hash of a para.
   * 
   *  Corresponding code can be retrieved with [`CodeByHash`].
   */
  async getAsV9010(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'FutureCodeHash', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'FutureCodeHash', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(Uint8Array)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'FutureCodeHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'FutureCodeHash') != null
  }
}

export class ParasFutureCodeUpgradesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The block number at which the planned code change is expected for a para.
   *  The change will be applied after the first parablock for this ID included which executes
   *  in the context of a relay chain block with a number >= `expected_at`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'FutureCodeUpgrades') === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
  }

  /**
   *  The block number at which the planned code change is expected for a para.
   *  The change will be applied after the first parablock for this ID included which executes
   *  in the context of a relay chain block with a number >= `expected_at`.
   */
  async getAsV9010(key: number): Promise<number | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'FutureCodeUpgrades', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(number | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'FutureCodeUpgrades', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(number)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'FutureCodeUpgrades')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'FutureCodeUpgrades') != null
  }
}

export class ParasHeadsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The head-data of every registered para.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'Heads') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The head-data of every registered para.
   */
  async getAsV9010(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'Heads', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'Heads', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(Uint8Array)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'Heads')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'Heads') != null
  }
}

export class ParasParaLifecyclesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current lifecycle of a all known Para IDs.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'ParaLifecycles') === '45a3eed50f0f2fba6b06f48a315aabecc27c96194135525440ebe9c30e9ad688'
  }

  /**
   *  The current lifecycle of a all known Para IDs.
   */
  async getAsV9010(key: number): Promise<v9010.ParaLifecycle | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'ParaLifecycles', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.ParaLifecycle | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'ParaLifecycles', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.ParaLifecycle)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'ParaLifecycles')
  }

  /**
   *  The current lifecycle of a all known Para IDs.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Paras', 'ParaLifecycles') === '473075bfac0a21c841bb0ec54a9d1b0a1103a28ca5c11fc19789ead6f56d4516'
  }

  /**
   *  The current lifecycle of a all known Para IDs.
   */
  async getAsV9111(key: number): Promise<v9111.ParaLifecycle | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Paras', 'ParaLifecycles', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.ParaLifecycle | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'ParaLifecycles', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.ParaLifecycle)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'ParaLifecycles')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'ParaLifecycles') != null
  }
}

export class ParasParachainsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All parachains. Ordered ascending by ParaId. Parathreads are not included.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'Parachains') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  All parachains. Ordered ascending by ParaId. Parathreads are not included.
   */
  async getAsV9010(): Promise<number[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'Parachains')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'Parachains') != null
  }
}

export class ParasPastCodeHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual past code hash, indicated by the para id as well as the block number at which it
   *  became outdated.
   * 
   *  Corresponding code can be retrieved with [`CodeByHash`].
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'PastCodeHash') === '0d2411ae362670c0960f353ffe86371ae2c0b12979565bcbd9e6dd986619632d'
  }

  /**
   *  Actual past code hash, indicated by the para id as well as the block number at which it
   *  became outdated.
   * 
   *  Corresponding code can be retrieved with [`CodeByHash`].
   */
  async getAsV9010(key: [number, number]): Promise<Uint8Array | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'PastCodeHash', key)
  }

  async getManyAsV9010(keys: [number, number][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'PastCodeHash', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(Uint8Array)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'PastCodeHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'PastCodeHash') != null
  }
}

export class ParasPastCodeMetaStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Past code of parachains. The parachains themselves may not be registered anymore,
   *  but we also keep their code on-chain for the same amount of time as outdated code
   *  to keep it available for secondary checkers.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'PastCodeMeta') === 'a069a7aca8874185413a0d1fd88ae2c96bd7ecd883dd17c9e349867c0b602302'
  }

  /**
   *  Past code of parachains. The parachains themselves may not be registered anymore,
   *  but we also keep their code on-chain for the same amount of time as outdated code
   *  to keep it available for secondary checkers.
   */
  async getAsV9010(key: number): Promise<v9010.ParaPastCodeMeta> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'PastCodeMeta', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.ParaPastCodeMeta)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'PastCodeMeta', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.ParaPastCodeMeta)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'PastCodeMeta')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'PastCodeMeta') != null
  }
}

export class ParasPastCodePruningStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
   *  Note that this is the actual height of the included block, not the expected height at which the
   *  code upgrade would be applied, although they may be equal.
   *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
   *  from the time at which the parachain perceives a code upgrade as having occurred.
   *  Multiple entries for a single para are permitted. Ordered ascending by block number.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'PastCodePruning') === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
  }

  /**
   *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
   *  Note that this is the actual height of the included block, not the expected height at which the
   *  code upgrade would be applied, although they may be equal.
   *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
   *  from the time at which the parachain perceives a code upgrade as having occurred.
   *  Multiple entries for a single para are permitted. Ordered ascending by block number.
   */
  async getAsV9010(): Promise<[number, number][]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'PastCodePruning')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'PastCodePruning') != null
  }
}

export class ParasPvfActiveVoteListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Paras', 'PvfActiveVoteList') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
   */
  async getAsV9160(): Promise<Uint8Array[]> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Paras', 'PvfActiveVoteList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'PvfActiveVoteList') != null
  }
}

export class ParasPvfActiveVoteMapStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All currently active PVF pre-checking votes.
   * 
   *  Invariant:
   *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Paras', 'PvfActiveVoteMap') === '929cea40d98e7c9edbcba116da5df6e71054833d758ad8f6150d78bb4140a230'
  }

  /**
   *  All currently active PVF pre-checking votes.
   * 
   *  Invariant:
   *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
   */
  async getAsV9160(key: Uint8Array): Promise<v9160.PvfCheckActiveVoteState | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Paras', 'PvfActiveVoteMap', key)
  }

  async getManyAsV9160(keys: Uint8Array[]): Promise<(v9160.PvfCheckActiveVoteState | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'PvfActiveVoteMap', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.PvfCheckActiveVoteState)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'PvfActiveVoteMap')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'PvfActiveVoteMap') != null
  }
}

export class ParasUpcomingParasGenesisStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Upcoming paras instantiation arguments.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Paras', 'UpcomingParasGenesis') === '253a974d17240b520923113bbc6b12a391a5ad347b228902564103b1736e0094'
  }

  /**
   *  Upcoming paras instantiation arguments.
   */
  async getAsV9010(key: number): Promise<v9010.ParaGenesisArgs | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Paras', 'UpcomingParasGenesis', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(v9010.ParaGenesisArgs | undefined)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'UpcomingParasGenesis', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(v9010.ParaGenesisArgs)[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'UpcomingParasGenesis')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'UpcomingParasGenesis') != null
  }
}

export class ParasUpcomingUpgradesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
   *  upgrade and at which relay-chain block it is expected at.
   * 
   *  Ordered ascending by block number.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Paras', 'UpcomingUpgrades') === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
  }

  /**
   *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
   *  upgrade and at which relay-chain block it is expected at.
   * 
   *  Ordered ascending by block number.
   */
  async getAsV9090(): Promise<[number, number][]> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Paras', 'UpcomingUpgrades')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'UpcomingUpgrades') != null
  }
}

export class ParasUpgradeCooldownsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
   * 
   *  Ordered ascending by block number.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Paras', 'UpgradeCooldowns') === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
  }

  /**
   *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
   * 
   *  Ordered ascending by block number.
   */
  async getAsV9090(): Promise<[number, number][]> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Paras', 'UpgradeCooldowns')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'UpgradeCooldowns') != null
  }
}

export class ParasUpgradeGoAheadSignalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Paras', 'UpgradeGoAheadSignal') === '786a03d0aa558686ca05fde11178abf8294fdf543e7653a81ffbb6a04bbe926d'
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
  async getAsV9090(key: number): Promise<v9090.UpgradeGoAhead | undefined> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Paras', 'UpgradeGoAheadSignal', key)
  }

  async getManyAsV9090(keys: number[]): Promise<(v9090.UpgradeGoAhead | undefined)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'UpgradeGoAheadSignal', keys.map(k => [k]))
  }

  async getAllAsV9090(): Promise<(v9090.UpgradeGoAhead)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'UpgradeGoAheadSignal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'UpgradeGoAheadSignal') != null
  }
}

export class ParasUpgradeRestrictionSignalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Paras', 'UpgradeRestrictionSignal') === '62e7d5f232f72916126ae45cffcab9e9fdfc355aeb79076a51f4aebd84afeb61'
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
  async getAsV9090(key: number): Promise<v9090.UpgradeRestriction | undefined> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Paras', 'UpgradeRestrictionSignal', key)
  }

  async getManyAsV9090(keys: number[]): Promise<(v9090.UpgradeRestriction | undefined)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'UpgradeRestrictionSignal', keys.map(k => [k]))
  }

  async getAllAsV9090(): Promise<(v9090.UpgradeRestriction)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Paras', 'UpgradeRestrictionSignal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Paras', 'UpgradeRestrictionSignal') != null
  }
}

export class ParasDisputesDisputesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All ongoing or concluded disputes for the last several sessions.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'Disputes') === '33f09b62f3e474c60f6ef89b56ae30d73cc40bae8a2b340cfd6d7548cf01234e'
  }

  /**
   *  All ongoing or concluded disputes for the last several sessions.
   */
  async getAsV9130(key1: number, key2: Uint8Array): Promise<v9130.V1DisputeState | undefined> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'ParasDisputes', 'Disputes', key1, key2)
  }

  async getManyAsV9130(keys: [number, Uint8Array][]): Promise<(v9130.V1DisputeState | undefined)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'ParasDisputes', 'Disputes', keys)
  }

  async getAllAsV9130(): Promise<(v9130.V1DisputeState)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'ParasDisputes', 'Disputes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'Disputes') != null
  }
}

export class ParasDisputesFrozenStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
   *  the chain will not accept any new parachain blocks for backing or inclusion,
   *  and its value indicates the last valid block number in the chain.
   *  It can only be set back to `None` by governance intervention.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'Frozen') === '19526a9e9cd1a1912441bd5e7765970e1b7352c8a5ea7e7769fa36f8d2329f24'
  }

  /**
   *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
   *  the chain will not accept any new parachain blocks for backing or inclusion,
   *  and its value indicates the last valid block number in the chain.
   *  It can only be set back to `None` by governance intervention.
   */
  async getAsV9130(): Promise<(number | undefined)> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'ParasDisputes', 'Frozen')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'Frozen') != null
  }
}

export class ParasDisputesIncludedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All included blocks on the chain, as well as the block number in this chain that
   *  should be reverted back to if the candidate is disputed and determined to be invalid.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'Included') === '6c6235f5b0f971e080667bebe750cb6adb3a9877df221e67b3dc7a4419cdc5c1'
  }

  /**
   *  All included blocks on the chain, as well as the block number in this chain that
   *  should be reverted back to if the candidate is disputed and determined to be invalid.
   */
  async getAsV9130(key1: number, key2: Uint8Array): Promise<number | undefined> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'ParasDisputes', 'Included', key1, key2)
  }

  async getManyAsV9130(keys: [number, Uint8Array][]): Promise<(number | undefined)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'ParasDisputes', 'Included', keys)
  }

  async getAllAsV9130(): Promise<(number)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'ParasDisputes', 'Included')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'Included') != null
  }
}

export class ParasDisputesLastPrunedSessionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The last pruned session, if any. All data stored by this module
   *  references sessions.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'LastPrunedSession') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  The last pruned session, if any. All data stored by this module
   *  references sessions.
   */
  async getAsV9130(): Promise<number | undefined> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'ParasDisputes', 'LastPrunedSession')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'LastPrunedSession') != null
  }
}

export class ParasDisputesSpamSlotsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Maps session indices to a vector indicating the number of potentially-spam disputes
   *  each validator is participating in. Potentially-spam disputes are remote disputes which have
   *  fewer than `byzantine_threshold + 1` validators.
   * 
   *  The i'th entry of the vector corresponds to the i'th validator in the session.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'SpamSlots') === '33935a30bb4f42bcb0fad1e2afd25d0dcba6d422da5f77a7e62202296371179d'
  }

  /**
   *  Maps session indices to a vector indicating the number of potentially-spam disputes
   *  each validator is participating in. Potentially-spam disputes are remote disputes which have
   *  fewer than `byzantine_threshold + 1` validators.
   * 
   *  The i'th entry of the vector corresponds to the i'th validator in the session.
   */
  async getAsV9130(key: number): Promise<number[] | undefined> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'ParasDisputes', 'SpamSlots', key)
  }

  async getManyAsV9130(keys: number[]): Promise<(number[] | undefined)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'ParasDisputes', 'SpamSlots', keys.map(k => [k]))
  }

  async getAllAsV9130(): Promise<(number[])[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'ParasDisputes', 'SpamSlots')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParasDisputes', 'SpamSlots') != null
  }
}

export class ParasSharedActiveValidatorIndicesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All the validators actively participating in parachain consensus.
   *  Indices are into the broader validator set.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParasShared', 'ActiveValidatorIndices') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  All the validators actively participating in parachain consensus.
   *  Indices are into the broader validator set.
   */
  async getAsV9010(): Promise<number[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParasShared', 'ActiveValidatorIndices')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParasShared', 'ActiveValidatorIndices') != null
  }
}

export class ParasSharedActiveValidatorKeysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The parachain attestation keys of the validators actively participating in parachain consensus.
   *  This should be the same length as `ActiveValidatorIndices`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParasShared', 'ActiveValidatorKeys') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The parachain attestation keys of the validators actively participating in parachain consensus.
   *  This should be the same length as `ActiveValidatorIndices`.
   */
  async getAsV9010(): Promise<Uint8Array[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParasShared', 'ActiveValidatorKeys')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParasShared', 'ActiveValidatorKeys') != null
  }
}

export class ParasSharedCurrentSessionIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current session index.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('ParasShared', 'CurrentSessionIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The current session index.
   */
  async getAsV9010(): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'ParasShared', 'CurrentSessionIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParasShared', 'CurrentSessionIndex') != null
  }
}

export class PhragmenElectionCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The present candidate list. Sorted based on account id. A current member can never enter
   *  this vector and is always implicitly assumed to be a candidate.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Candidates') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The present candidate list. Sorted based on account id. A current member can never enter
   *  this vector and is always implicitly assumed to be a candidate.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'Candidates')
  }

  /**
   *  The present candidate list. A current member or runner-up can never enter this vector
   *  and is always implicitly assumed to be a candidate.
   * 
   *  Second element is the deposit.
   * 
   *  Invariant: Always sorted based on account id.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Candidates') === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
  }

  /**
   *  The present candidate list. A current member or runner-up can never enter this vector
   *  and is always implicitly assumed to be a candidate.
   * 
   *  Second element is the deposit.
   * 
   *  Invariant: Always sorted based on account id.
   */
  async getAsV2028(): Promise<[Uint8Array, bigint][]> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'Candidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Candidates') != null
  }
}

export class PhragmenElectionElectionRoundsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total number of vote rounds that have happened, excluding the upcoming one.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'ElectionRounds') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The total number of vote rounds that have happened, excluding the upcoming one.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'ElectionRounds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'ElectionRounds') != null
  }
}

export class PhragmenElectionMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current elected membership. Sorted based on account id.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Members') === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
  }

  /**
   *  The current elected membership. Sorted based on account id.
   */
  async getAsV1020(): Promise<[Uint8Array, bigint][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'Members')
  }

  /**
   *  The current elected members.
   * 
   *  Invariant: Always sorted based on account id.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Members') === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
  }

  /**
   *  The current elected members.
   * 
   *  Invariant: Always sorted based on account id.
   */
  async getAsV2028(): Promise<v2028.SeatHolder[]> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Members') != null
  }
}

export class PhragmenElectionRunnersUpStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current runners_up. Sorted based on low to high merit (worse to best runner).
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'RunnersUp') === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
  }

  /**
   *  The current runners_up. Sorted based on low to high merit (worse to best runner).
   */
  async getAsV1020(): Promise<[Uint8Array, bigint][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'RunnersUp')
  }

  /**
   *  The current reserved runners-up.
   * 
   *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
   *  last (i.e. _best_) runner-up will be replaced.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'RunnersUp') === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
  }

  /**
   *  The current reserved runners-up.
   * 
   *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
   *  last (i.e. _best_) runner-up will be replaced.
   */
  async getAsV2028(): Promise<v2028.SeatHolder[]> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'RunnersUp')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'RunnersUp') != null
  }
}

export class PhragmenElectionStakeOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Locked stake of a voter.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'StakeOf') === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
  }

  /**
   *  Locked stake of a voter.
   */
  async getAsV1020(key: Uint8Array): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'StakeOf', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(bigint)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'StakeOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(bigint)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'StakeOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'StakeOf') != null
  }
}

export class PhragmenElectionVotesOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes of a particular voter, with the round index of the votes.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'VotesOf') === 'ad7e5187ae060fec07b1929f558af1374198afab9d21e08b23028f5c02a1b279'
  }

  /**
   *  Votes of a particular voter, with the round index of the votes.
   */
  async getAsV1020(key: Uint8Array): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'VotesOf', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'VotesOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'VotesOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'VotesOf') != null
  }
}

export class PhragmenElectionVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes and locked stake of a particular voter.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Voting') === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
  }

  /**
   *  Votes and locked stake of a particular voter.
   */
  async getAsV1058(key: Uint8Array): Promise<[bigint, Uint8Array[]]> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'Voting', key)
  }

  async getManyAsV1058(keys: Uint8Array[]): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'Voting')
  }

  /**
   *  Votes and locked stake of a particular voter.
   * 
   *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Voting') === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
  }

  /**
   *  Votes and locked stake of a particular voter.
   * 
   *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
   */
  async getAsV2028(key: Uint8Array): Promise<v2028.Voter> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'Voting', key)
  }

  async getManyAsV2028(keys: Uint8Array[]): Promise<(v2028.Voter)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<(v2028.Voter)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Voting') != null
  }
}

export class PreimagePreimageForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The preimages stored by this pallet.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  The preimages stored by this pallet.
   */
  async getAsV9160(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'PreimageFor', key)
  }

  async getManyAsV9160(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(Uint8Array)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') != null
  }
}

export class PreimageStatusForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The request status of a given hash.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
  }

  /**
   *  The request status of a given hash.
   */
  async getAsV9160(key: Uint8Array): Promise<v9160.RequestStatus | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'StatusFor', key)
  }

  async getManyAsV9160(keys: Uint8Array[]): Promise<(v9160.RequestStatus | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.RequestStatus)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') != null
  }
}

export class ProxyAnnouncementsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The announcements made by the proxy (key).
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('Proxy', 'Announcements') === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
  }

  /**
   *  The announcements made by the proxy (key).
   */
  async getAsV2023(key: Uint8Array): Promise<[v2023.ProxyAnnouncement[], bigint]> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'Proxy', 'Announcements', key)
  }

  async getManyAsV2023(keys: Uint8Array[]): Promise<([v2023.ProxyAnnouncement[], bigint])[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Announcements', keys.map(k => [k]))
  }

  async getAllAsV2023(): Promise<([v2023.ProxyAnnouncement[], bigint])[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Announcements')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Proxy', 'Announcements') != null
  }
}

export class ProxyProxiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Proxy', 'Proxies') === 'ec72946b5e1319a89d58a3cfb9a9ad1c78ee98d1981ae699f7316bc6fb29092f'
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  async getAsV2005(key: Uint8Array): Promise<[[Uint8Array, v2005.ProxyType][], bigint]> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Proxy', 'Proxies', key)
  }

  async getManyAsV2005(keys: Uint8Array[]): Promise<([[Uint8Array, v2005.ProxyType][], bigint])[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies', keys.map(k => [k]))
  }

  async getAllAsV2005(): Promise<([[Uint8Array, v2005.ProxyType][], bigint])[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies')
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('Proxy', 'Proxies') === 'da8c78ecc0328cf7e600e99d445f8a44dbb00eda73841a05b5dc279b7c54a440'
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  async getAsV2023(key: Uint8Array): Promise<[v2023.ProxyDefinition[], bigint]> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'Proxy', 'Proxies', key)
  }

  async getManyAsV2023(keys: Uint8Array[]): Promise<([v2023.ProxyDefinition[], bigint])[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies', keys.map(k => [k]))
  }

  async getAllAsV2023(): Promise<([v2023.ProxyDefinition[], bigint])[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies')
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('Proxy', 'Proxies') === 'acc3faf186613356bb89da7b77e3f00db745f2a35ca9789e7458cbdf6f57bc4d'
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  async getAsV9180(key: Uint8Array): Promise<[v9180.ProxyDefinition[], bigint]> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'Proxy', 'Proxies', key)
  }

  async getManyAsV9180(keys: Uint8Array[]): Promise<([v9180.ProxyDefinition[], bigint])[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies', keys.map(k => [k]))
  }

  async getAllAsV9180(): Promise<([v9180.ProxyDefinition[], bigint])[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Proxy', 'Proxies') != null
  }
}

export class RandomnessCollectiveFlipRandomMaterialStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Series of block headers from the last 81 blocks that acts as random seed material. This
   *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
   *  the oldest hash.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  Series of block headers from the last 81 blocks that acts as random seed material. This
   *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
   *  the oldest hash.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'RandomnessCollectiveFlip', 'RandomMaterial')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') != null
  }
}

export class RecoveryActiveRecoveriesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Active recovery attempts.
   * 
   *  First account is the account to be recovered, and the second account
   *  is the user trying to recover the account.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Recovery', 'ActiveRecoveries') === 'f5dad44e1c51a87a418fb5a1db781c2d814656f6b4adea220158b1d85e9e1622'
  }

  /**
   *  Active recovery attempts.
   * 
   *  First account is the account to be recovered, and the second account
   *  is the user trying to recover the account.
   */
  async getAsV1040(key1: Uint8Array, key2: Uint8Array): Promise<v1040.ActiveRecovery | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Recovery', 'ActiveRecoveries', key1, key2)
  }

  async getManyAsV1040(keys: [Uint8Array, Uint8Array][]): Promise<(v1040.ActiveRecovery | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Recovery', 'ActiveRecoveries', keys)
  }

  async getAllAsV1040(): Promise<(v1040.ActiveRecovery)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Recovery', 'ActiveRecoveries')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Recovery', 'ActiveRecoveries') != null
  }
}

export class RecoveryProxyStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The list of allowed proxy accounts.
   * 
   *  Map from the user who can access it to the recovered account.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Recovery', 'Proxy') === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
  }

  /**
   *  The list of allowed proxy accounts.
   * 
   *  Map from the user who can access it to the recovered account.
   */
  async getAsV1050(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Recovery', 'Proxy', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Recovery', 'Proxy', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(Uint8Array)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Recovery', 'Proxy')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Recovery', 'Proxy') != null
  }
}

export class RecoveryRecoverableStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of recoverable accounts and their recovery configuration.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Recovery', 'Recoverable') === 'f9493d29ddc03c2d5f186ec1168f1f86ff2385eb4dc7ca3278f0f82111d9e70b'
  }

  /**
   *  The set of recoverable accounts and their recovery configuration.
   */
  async getAsV1040(key: Uint8Array): Promise<v1040.RecoveryConfig | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Recovery', 'Recoverable', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(v1040.RecoveryConfig | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Recovery', 'Recoverable', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(v1040.RecoveryConfig)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Recovery', 'Recoverable')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Recovery', 'Recoverable') != null
  }
}

export class RecoveryRecoveredStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The final list of recovered accounts.
   * 
   *  Map from the recovered account to the user who can access it.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Recovery', 'Recovered') === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
  }

  /**
   *  The final list of recovered accounts.
   * 
   *  Map from the recovered account to the user who can access it.
   */
  async getAsV1040(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Recovery', 'Recovered', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Recovery', 'Recovered', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(Uint8Array)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Recovery', 'Recovered')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Recovery', 'Recovered') != null
  }
}

export class RegistrarActiveStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
   *  a particular collator has already been chosen for the next block, and no other collator
   *  may provide the block. In this case we allow the possibility of the combination being
   *  retried in a later block, expressed by `Retriable`.
   * 
   *  Ordered by ParaId.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Registrar', 'Active') === '83b1b8c757cbaa2e8bf88f7401c1bd5fea0500ff77fc340150633697c91bdc16'
  }

  /**
   *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
   *  a particular collator has already been chosen for the next block, and no other collator
   *  may provide the block. In this case we allow the possibility of the combination being
   *  retried in a later block, expressed by `Retriable`.
   * 
   *  Ordered by ParaId.
   */
  async getAsV1020(): Promise<[number, ([Uint8Array, v1020.Retriable] | undefined)][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'Active')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'Active') != null
  }
}

export class RegistrarDebtorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Users who have paid a parathread's deposit
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Registrar', 'Debtors') === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
  }

  /**
   *  Users who have paid a parathread's deposit
   */
  async getAsV1020(key: number): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'Debtors', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Registrar', 'Debtors', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Registrar', 'Debtors')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'Debtors') != null
  }
}

export class RegistrarNextFreeIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next unused ParaId value. Start this high in order to keep low numbers for
   *  system-level chains.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Registrar', 'NextFreeId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The next unused ParaId value. Start this high in order to keep low numbers for
   *  system-level chains.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'NextFreeId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'NextFreeId') != null
  }
}

export class RegistrarNextFreeParaIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next free `ParaId`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Registrar', 'NextFreeParaId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The next free `ParaId`.
   */
  async getAsV9010(): Promise<number> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'NextFreeParaId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'NextFreeParaId') != null
  }
}

export class RegistrarParachainsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1020() {
    return this._chain.getStorageItemTypeHash('Registrar', 'Parachains') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  async getAsV1020(): Promise<number[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'Parachains')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'Parachains') != null
  }
}

export class RegistrarParasStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of all registered parathreads/chains.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Registrar', 'Paras') === 'a66817b4476764416e1f466dedf67727ff0df383806cc68dc6be044679888b0c'
  }

  /**
   *  Map of all registered parathreads/chains.
   */
  async getAsV1020(key: number): Promise<v1020.ParaInfo | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'Paras', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(v1020.ParaInfo | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Registrar', 'Paras', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.ParaInfo)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Registrar', 'Paras')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'Paras') != null
  }
}

export class RegistrarPendingSwapStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pending swap operations.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Registrar', 'PendingSwap') === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
  }

  /**
   *  Pending swap operations.
   */
  async getAsV1020(key: number): Promise<number | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'PendingSwap', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(number | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Registrar', 'PendingSwap', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Registrar', 'PendingSwap')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'PendingSwap') != null
  }
}

export class RegistrarRetryQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current queue for parathreads that should be retried.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Registrar', 'RetryQueue') === '2d000462de6745859448e67b1ebf7fd04f4fb61f49e280524752c34dd9b541f8'
  }

  /**
   *  The current queue for parathreads that should be retried.
   */
  async getAsV1020(): Promise<[number, Uint8Array][][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'RetryQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'RetryQueue') != null
  }
}

export class RegistrarSelectedThreadsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
   *  ascending para ID. There can be no duplicates of para ID in each list item.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Registrar', 'SelectedThreads') === '2d000462de6745859448e67b1ebf7fd04f4fb61f49e280524752c34dd9b541f8'
  }

  /**
   *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
   *  ascending para ID. There can be no duplicates of para ID in each list item.
   */
  async getAsV1020(): Promise<[number, Uint8Array][][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'SelectedThreads')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'SelectedThreads') != null
  }
}

export class RegistrarThreadCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of threads to schedule per block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Registrar', 'ThreadCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of threads to schedule per block.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Registrar', 'ThreadCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Registrar', 'ThreadCount') != null
  }
}

export class SchedulerAgendaStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'b180c48816157bf24577912bae934e76d30180d1e604746229694a13e9d66cdf'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV1058(key: number): Promise<(v1058.Scheduled | undefined)[]> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV1058(keys: number[]): Promise<((v1058.Scheduled | undefined)[])[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<((v1058.Scheduled | undefined)[])[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV1062() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '0fe81063a96deaaec3b9a7c0caed1bd81fca540fd8fb15f9f82ae9a31f94fc51'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV1062(key: number): Promise<(v1062.Scheduled | undefined)[]> {
    assert(this.isV1062)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV1062(keys: number[]): Promise<((v1062.Scheduled | undefined)[])[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV1062(): Promise<((v1062.Scheduled | undefined)[])[]> {
    assert(this.isV1062)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'be1ca75311615c90c6dd11683b807c43649f8dfd9e299692344c4fe3115a453f'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2005(key: number): Promise<(v2005.Scheduled | undefined)[]> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2005(keys: number[]): Promise<((v2005.Scheduled | undefined)[])[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2005(): Promise<((v2005.Scheduled | undefined)[])[]> {
    assert(this.isV2005)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2007() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'd0e42dfec60c5860de77aeb2f59c2f5896b4fdaf63a33810cb67efec41f3f534'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2007(key: number): Promise<(v2007.Scheduled | undefined)[]> {
    assert(this.isV2007)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2007(keys: number[]): Promise<((v2007.Scheduled | undefined)[])[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2007(): Promise<((v2007.Scheduled | undefined)[])[]> {
    assert(this.isV2007)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2011() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'bc7faa7d3bd0587d04301cf8b3d61b99e21fdcaea250659f6ce17e6b98234d92'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2011(key: number): Promise<(v2011.Scheduled | undefined)[]> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2011(keys: number[]): Promise<((v2011.Scheduled | undefined)[])[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2011(): Promise<((v2011.Scheduled | undefined)[])[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'aeeaf89fcba49801e33032ef69f8da91e82b96f0e9bc308324ea637a0338e855'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2013(key: number): Promise<(v2013.Scheduled | undefined)[]> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2013(keys: number[]): Promise<((v2013.Scheduled | undefined)[])[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2013(): Promise<((v2013.Scheduled | undefined)[])[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2015() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '4de9afa42ec7e513963d8b0ac14ec150453b153850c13d2b8c4b363a09f9dfd9'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2015(key: number): Promise<(v2015.Scheduled | undefined)[]> {
    assert(this.isV2015)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2015(keys: number[]): Promise<((v2015.Scheduled | undefined)[])[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2015(): Promise<((v2015.Scheduled | undefined)[])[]> {
    assert(this.isV2015)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2022() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '57b37073a0f77c68dcb0ea7093ffc2ebb18759d07781d688ff5def23092f466d'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2022(key: number): Promise<(v2022.Scheduled | undefined)[]> {
    assert(this.isV2022)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2022(keys: number[]): Promise<((v2022.Scheduled | undefined)[])[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2022(): Promise<((v2022.Scheduled | undefined)[])[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '09107b939f7c13cca754a19596a0c03aa8b21e93f72373f53e18c0f3cbd04aa6'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2023(key: number): Promise<(v2023.Scheduled | undefined)[]> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2023(keys: number[]): Promise<((v2023.Scheduled | undefined)[])[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2023(): Promise<((v2023.Scheduled | undefined)[])[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2024() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'b95c7d7babbbaad1bc8abb53888eb45ddd26b8583f58593d0cc5729ae6a0c9a1'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2024(key: number): Promise<(v2024.Scheduled | undefined)[]> {
    assert(this.isV2024)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2024(keys: number[]): Promise<((v2024.Scheduled | undefined)[])[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2024(): Promise<((v2024.Scheduled | undefined)[])[]> {
    assert(this.isV2024)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '02ca77dedbb94ed19aabf7e5df2f383e2a0996f3fdbd91e513075285bb7c5cd7'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2025(key: number): Promise<(v2025.Scheduled | undefined)[]> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2025(keys: number[]): Promise<((v2025.Scheduled | undefined)[])[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<((v2025.Scheduled | undefined)[])[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2026() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'c229a214727016a3dfe21549c123b87f9f2ef9b890355fb3e45ff8b940fbace8'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2026(key: number): Promise<(v2026.Scheduled | undefined)[]> {
    assert(this.isV2026)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2026(keys: number[]): Promise<((v2026.Scheduled | undefined)[])[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2026(): Promise<((v2026.Scheduled | undefined)[])[]> {
    assert(this.isV2026)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '21165bbe87417d77c8ae492c183c5fa335f3a7a2f78080a03aa3661fd46cc599'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2028(key: number): Promise<(v2028.Scheduled | undefined)[]> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2028(keys: number[]): Promise<((v2028.Scheduled | undefined)[])[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<((v2028.Scheduled | undefined)[])[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '0e6878acfc4754125f82b231ae334236644a7db3b01f57e70cfc3d4b9a044a26'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2029(key: number): Promise<(v2029.Scheduled | undefined)[]> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2029(keys: number[]): Promise<((v2029.Scheduled | undefined)[])[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2029(): Promise<((v2029.Scheduled | undefined)[])[]> {
    assert(this.isV2029)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '228b48b761922be134e2e3daca5dd8c3de8d86fcd644747fae63feba01490af0'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2030(key: number): Promise<(v2030.Scheduled | undefined)[]> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2030(keys: number[]): Promise<((v2030.Scheduled | undefined)[])[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2030(): Promise<((v2030.Scheduled | undefined)[])[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'd0e052ff4e4b7f3372a43e359168e100e132020d75bccf9bd55c86cc818242d3'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9010(key: number): Promise<(v9010.Scheduled | undefined)[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9010(keys: number[]): Promise<((v9010.Scheduled | undefined)[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<((v9010.Scheduled | undefined)[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9030() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '0a3ae788cc283370a1af3233a9b9899eaa139353d877e97f8077c7e463cb8357'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9030(key: number): Promise<(v9030.Scheduled | undefined)[]> {
    assert(this.isV9030)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9030(keys: number[]): Promise<((v9030.Scheduled | undefined)[])[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9030(): Promise<((v9030.Scheduled | undefined)[])[]> {
    assert(this.isV9030)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '2c047b82a4e8ae4f8e3ed9ffbc487466345f18721ad166b86cb8f7a765f57b0d'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9040(key: number): Promise<(v9040.Scheduled | undefined)[]> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9040(keys: number[]): Promise<((v9040.Scheduled | undefined)[])[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9040(): Promise<((v9040.Scheduled | undefined)[])[]> {
    assert(this.isV9040)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '54da4602f6ec450a9e6215f47f323fe927a04024a9655b0f85004f87e98038c0'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9050(key: number): Promise<(v9050.Scheduled | undefined)[]> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9050(keys: number[]): Promise<((v9050.Scheduled | undefined)[])[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9050(): Promise<((v9050.Scheduled | undefined)[])[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '73d61460eeee0886a032fc9de54f5a6cab51c95593f9cbf0186325f121e44c62'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9080(key: number): Promise<(v9080.Scheduled | undefined)[]> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9080(keys: number[]): Promise<((v9080.Scheduled | undefined)[])[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9080(): Promise<((v9080.Scheduled | undefined)[])[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'deba6b7ff17dc60835d36be0b858374fc422641e34c2655a3bee2cb0a81e08f5'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9090(key: number): Promise<(v9090.Scheduled | undefined)[]> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9090(keys: number[]): Promise<((v9090.Scheduled | undefined)[])[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9090(): Promise<((v9090.Scheduled | undefined)[])[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '54f6b97cb1aa70a3e6d9f01a711164ef879fd13387b8da0caa2aedd1a81d0aff'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9100(key: number): Promise<(v9100.Scheduled | undefined)[]> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9100(keys: number[]): Promise<((v9100.Scheduled | undefined)[])[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9100(): Promise<((v9100.Scheduled | undefined)[])[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '855fd592dc08504b9f77ab44721fb5530a96ec7e39ae454c50853bfccf22f78d'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9111(key: number): Promise<(v9111.ScheduledV2 | undefined)[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9111(keys: number[]): Promise<((v9111.ScheduledV2 | undefined)[])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<((v9111.ScheduledV2 | undefined)[])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9122() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '992154c282b8081c78969e259f1a5ccc7218af7ce571ada232b51000c6f5debe'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9122(key: number): Promise<(v9122.ScheduledV2 | undefined)[]> {
    assert(this.isV9122)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9122(keys: number[]): Promise<((v9122.ScheduledV2 | undefined)[])[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9122(): Promise<((v9122.ScheduledV2 | undefined)[])[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '30d53378261a79f00a9ab72dd9d5c24a814885e9a00961d6842c5f2cb23718e2'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9130(key: number): Promise<(v9130.ScheduledV2 | undefined)[]> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9130(keys: number[]): Promise<((v9130.ScheduledV2 | undefined)[])[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9130(): Promise<((v9130.ScheduledV2 | undefined)[])[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '93a83d3e9e9713272cf5eba2ebe46a2e8210173b9208d8e039eb7be9abf8c6a1'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9160(key: number): Promise<(v9160.ScheduledV3 | undefined)[]> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9160(keys: number[]): Promise<((v9160.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<((v9160.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9170() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'e4a7319ab6ce8260d93b4ea04802e913400e5ef90837b5656dbc16bdfe6b618e'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9170(key: number): Promise<(v9170.ScheduledV3 | undefined)[]> {
    assert(this.isV9170)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9170(keys: number[]): Promise<((v9170.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9170(): Promise<((v9170.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '18dd9bed1eddc89263af6e84b44142680d4997a91849f1f1616c728298b7e1b6'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9180(key: number): Promise<(v9180.ScheduledV3 | undefined)[]> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9180(keys: number[]): Promise<((v9180.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9180(): Promise<((v9180.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '38c51890e381af33bc0191759181b8fe95286950f49b691ac6df64e4cd28b5d7'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9190(key: number): Promise<(v9190.ScheduledV3 | undefined)[]> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9190(keys: number[]): Promise<((v9190.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9190(): Promise<((v9190.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'f25747d736742c964b8c1ab67804da392e2fb11200d0b7665aeb63a2a2b53236'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9220(key: number): Promise<(v9220.ScheduledV3 | undefined)[]> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9220(keys: number[]): Promise<((v9220.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<((v9220.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '2e52a770fdbc44a1c735b5f17910b8ca3807dc08d834f56efd9e492d2beaee77'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9230(key: number): Promise<(v9230.ScheduledV3 | undefined)[]> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9230(keys: number[]): Promise<((v9230.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9230(): Promise<((v9230.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9250() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '763b74570e5d2dc645f17eb9c9a35f6ec8ef9863cac033f45ddcf807653fb3f8'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9250(key: number): Promise<(v9250.ScheduledV3 | undefined)[]> {
    assert(this.isV9250)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9250(keys: number[]): Promise<((v9250.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9250(): Promise<((v9250.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV9271() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'a120835d6fa6abebd066538315e5944fdd3e04d6f3561558def30d4f11d4c05d'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV9271(key: number): Promise<(v9271.ScheduledV3 | undefined)[]> {
    assert(this.isV9271)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV9271(keys: number[]): Promise<((v9271.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV9271(): Promise<((v9271.ScheduledV3 | undefined)[])[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') != null
  }
}

export class SchedulerLookupStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Lookup from identity to the block number and index of the task.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Lookup') === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
  }

  /**
   *  Lookup from identity to the block number and index of the task.
   */
  async getAsV1058(key: Uint8Array): Promise<[number, number] | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Lookup', key)
  }

  async getManyAsV1058(keys: Uint8Array[]): Promise<([number, number] | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Lookup', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<([number, number])[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Lookup')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Lookup') != null
  }
}

export class SchedulerStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  get isV2015() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'StorageVersion') === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsV2015(): Promise<v2015.Releases> {
    assert(this.isV2015)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'StorageVersion')
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'StorageVersion') === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsV9111(): Promise<v9111.Type_580> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Scheduler', 'StorageVersion') != null
  }
}

export class SessionCurrentIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current index of the session.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Session', 'CurrentIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Current index of the session.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Session', 'CurrentIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'CurrentIndex') != null
  }
}

export class SessionDisabledValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Indices of disabled validators.
   * 
   *  The set is cleared when `on_session_ending` returns a new set of identities.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Session', 'DisabledValidators') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Indices of disabled validators.
   * 
   *  The set is cleared when `on_session_ending` returns a new set of identities.
   */
  async getAsV1020(): Promise<number[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Session', 'DisabledValidators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'DisabledValidators') != null
  }
}

export class SessionKeyOwnerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The owner of a key. The second key is the `KeyTypeId` + the encoded key.
   * 
   *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
   *  the trie. Having all data in the same branch should prevent slowing down other queries.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') === 'd13b5df6532bb01442c1ee70d65ef880f0c2f7c8b505b1010155ed60e8ddc5c9'
  }

  /**
   *  The owner of a key. The second key is the `KeyTypeId` + the encoded key.
   * 
   *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
   *  the trie. Having all data in the same branch should prevent slowing down other queries.
   */
  async getAsV1020(key1: Uint8Array, key2: [number, Uint8Array]): Promise<Uint8Array | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Session', 'KeyOwner', key1, key2)
  }

  async getManyAsV1020(keys: [Uint8Array, [number, Uint8Array]][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner', keys)
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner')
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  get isV1051() {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') === '1c05e6d248d0d3f2ef2467d3e23031e7885220321b761d4eda9deda33530daa1'
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  async getAsV1051(key: [number, Uint8Array]): Promise<Uint8Array | undefined> {
    assert(this.isV1051)
    return this._chain.getStorage(this.blockHash, 'Session', 'KeyOwner', key)
  }

  async getManyAsV1051(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1051)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner', keys.map(k => [k]))
  }

  async getAllAsV1051(): Promise<(Uint8Array)[]> {
    assert(this.isV1051)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner')
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  async getAsV9111(key: [Uint8Array, Uint8Array]): Promise<Uint8Array | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Session', 'KeyOwner', key)
  }

  async getManyAsV9111(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(Uint8Array)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') != null
  }
}

export class SessionNextKeysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next session keys for a validator.
   * 
   *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
   *  the trie. Having all data in the same branch should prevent slowing down other queries.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === '7ab43eb145e25456b876e18dac02bcc4c69c0d22f00108d52c674a35804868fe'
  }

  /**
   *  The next session keys for a validator.
   * 
   *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
   *  the trie. Having all data in the same branch should prevent slowing down other queries.
   */
  async getAsV1020(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key1, key2)
  }

  async getManyAsV1020(keys: [Uint8Array, Uint8Array][]): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys)
  }

  async getAllAsV1020(): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys')
  }

  /**
   *  The next session keys for a validator.
   */
  get isV1051() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === '956ce8701e71dd9d50a09047fbdde932b038f3c8a9159f64b2a827684dbfb4be'
  }

  /**
   *  The next session keys for a validator.
   */
  async getAsV1051(key: Uint8Array): Promise<[Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined> {
    assert(this.isV1051)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key)
  }

  async getManyAsV1051(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)[]> {
    assert(this.isV1051)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys.map(k => [k]))
  }

  async getAllAsV1051(): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array])[]> {
    assert(this.isV1051)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys')
  }

  /**
   *  The next session keys for a validator.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === '863ab736aad303dae42a86573d0940425a7dc5f86df4507bd2046c94a92485c6'
  }

  /**
   *  The next session keys for a validator.
   */
  async getAsV2028(key: Uint8Array): Promise<[Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key)
  }

  async getManyAsV2028(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array])[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys')
  }

  /**
   *  The next session keys for a validator.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === '3c6fcbefe7410f15bad0495b3f73dc8ed831dd09252a3ac11e3510578bfb8ced'
  }

  /**
   *  The next session keys for a validator.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.SessionKeys | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.SessionKeys | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.SessionKeys)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') != null
  }
}

export class SessionQueuedChangedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if the underlying economic identities or weighting behind the validators
   *  has changed in the queued validator set.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedChanged') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if the underlying economic identities or weighting behind the validators
   *  has changed in the queued validator set.
   */
  async getAsV1020(): Promise<boolean> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedChanged')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedChanged') != null
  }
}

export class SessionQueuedKeysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') === '60e9ef6d859b324f840841982876d81b2b58f08ea583a6d748cb5f02c048b4b6'
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  async getAsV1020(): Promise<[Uint8Array, [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedKeys')
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') === '8271d85dbd65415701fb3c54136c0537af5b065e3bebb0d1887ef75f6d0a349b'
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  async getAsV2028(): Promise<[Uint8Array, [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedKeys')
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') === '1453d2146c195e5be6172441e0d99613270f104e70759afa2ff52f346b3ea040'
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  async getAsV9111(): Promise<[Uint8Array, v9111.SessionKeys][]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedKeys')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') != null
  }
}

export class SessionValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current set of validators.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Session', 'Validators') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current set of validators.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Session', 'Validators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'Validators') != null
  }
}

export class SlotsAuctionCounterStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of auctions that been started so far.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Slots', 'AuctionCounter') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of auctions that been started so far.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Slots', 'AuctionCounter')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'AuctionCounter') != null
  }
}

export class SlotsAuctionInfoStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information relating to the current auction, if there is one.
   * 
   *  The first item in the tuple is the lease period index that the first of the four
   *  contiguous lease periods on auction is for. The second is the block number when the
   *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Slots', 'AuctionInfo') === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
  }

  /**
   *  Information relating to the current auction, if there is one.
   * 
   *  The first item in the tuple is the lease period index that the first of the four
   *  contiguous lease periods on auction is for. The second is the block number when the
   *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
   */
  async getAsV1020(): Promise<[number, number] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Slots', 'AuctionInfo')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'AuctionInfo') != null
  }
}

export class SlotsDepositsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Slots', 'Deposits') === '0c54571527d0756fb3f5933fbd2b7d0b81c2e3213e26e9771065002f7dc8bbbc'
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
  async getAsV1020(key: number): Promise<bigint[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Slots', 'Deposits', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(bigint[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Deposits', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(bigint[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Deposits')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'Deposits') != null
  }
}

export class SlotsLeasesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
   *  existed) as far as this module is concerned.
   * 
   *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
   *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
   *  deposit for the non-existent chain currently, but is held at some point in the future.
   * 
   *  It is illegal for a `None` value to trail in the list.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Slots', 'Leases') === '045289c99cd38832bbd83d1da1c2329eef49e8a0cf672722d68751b969c19980'
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
   *  existed) as far as this module is concerned.
   * 
   *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
   *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
   *  deposit for the non-existent chain currently, but is held at some point in the future.
   * 
   *  It is illegal for a `None` value to trail in the list.
   */
  async getAsV9010(key: number): Promise<([Uint8Array, bigint] | undefined)[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Slots', 'Leases', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(([Uint8Array, bigint] | undefined)[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Leases', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(([Uint8Array, bigint] | undefined)[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Leases')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'Leases') != null
  }
}

export class SlotsManagedIdsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Ordered list of all `ParaId` values that are managed by this module. This includes
   *  chains that are not yet deployed (but have won an auction in the future).
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Slots', 'ManagedIds') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Ordered list of all `ParaId` values that are managed by this module. This includes
   *  chains that are not yet deployed (but have won an auction in the future).
   */
  async getAsV1020(): Promise<number[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Slots', 'ManagedIds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'ManagedIds') != null
  }
}

export class SlotsOffboardingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
   *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Slots', 'Offboarding') === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
  }

  /**
   *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
   *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
   */
  async getAsV1020(key: number): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Slots', 'Offboarding', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Offboarding', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Offboarding')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'Offboarding') != null
  }
}

export class SlotsOnboardQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
   *  This is cleared out on the first block of the lease period.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Slots', 'OnboardQueue') === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
  }

  /**
   *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
   *  This is cleared out on the first block of the lease period.
   */
  async getAsV1020(key: number): Promise<number[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Slots', 'OnboardQueue', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(number[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'OnboardQueue', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(number[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'OnboardQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'OnboardQueue') != null
  }
}

export class SlotsOnboardingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The actual on-boarding information. Only exists when one of the following is true:
   *  - It is before the lease period that the parachain should be on-boarded.
   *  - The full on-boarding information has not yet been provided and the parachain is not
   *  yet due to be off-boarded.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Slots', 'Onboarding') === '445292ed8c4f3800f52c0936ea70aec863e5ffa949359118255bc91fa1dc1351'
  }

  /**
   *  The actual on-boarding information. Only exists when one of the following is true:
   *  - It is before the lease period that the parachain should be on-boarded.
   *  - The full on-boarding information has not yet been provided and the parachain is not
   *  yet due to be off-boarded.
   */
  async getAsV1020(key: number): Promise<[number, v1020.IncomingParachain] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Slots', 'Onboarding', key)
  }

  async getManyAsV1020(keys: number[]): Promise<([number, v1020.IncomingParachain] | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Onboarding', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<([number, v1020.IncomingParachain])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Onboarding')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'Onboarding') != null
  }
}

export class SlotsReservedAmountsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Amounts currently reserved in the accounts of the bidders currently winning
   *  (sub-)ranges.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Slots', 'ReservedAmounts') === 'aff59eb49fe51cb559f68e912c242d462e6e49152ccb21918e6e5a83024144b4'
  }

  /**
   *  Amounts currently reserved in the accounts of the bidders currently winning
   *  (sub-)ranges.
   */
  async getAsV1020(key: v1020.Bidder): Promise<bigint | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Slots', 'ReservedAmounts', key)
  }

  async getManyAsV1020(keys: v1020.Bidder[]): Promise<(bigint | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'ReservedAmounts', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(bigint)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'ReservedAmounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'ReservedAmounts') != null
  }
}

export class SlotsWinningStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
   *  the current auction. The map's key is the 0-based index into the Ending Period. The
   *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Slots', 'Winning') === 'ccec52f96cdd97c91b3c9b4297f402aec9614e99b08967c8c604f74277944587'
  }

  /**
   *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
   *  the current auction. The map's key is the 0-based index into the Ending Period. The
   *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
   */
  async getAsV1020(key: number): Promise<([Uint8Array, number, bigint] | undefined)[] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Slots', 'Winning', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Winning', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(([Uint8Array, number, bigint] | undefined)[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Slots', 'Winning')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slots', 'Winning') != null
  }
}

export class SocietyBidsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current bids, stored ordered by the value of the bid.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Bids') === '10cb2b16047aef87eb4b97693b155888dcdf8be529db6a3478537291fd09c4ea'
  }

  /**
   *  The current bids, stored ordered by the value of the bid.
   */
  async getAsV1040(): Promise<v1040.Bid[]> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Bids')
  }

  /**
   *  The current bids, stored ordered by the value of the bid.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Society', 'Bids') === '411686a59edbfe2554e1198de065938b91c3bf21c2de84694e25ec4198e08949'
  }

  /**
   *  The current bids, stored ordered by the value of the bid.
   */
  async getAsV9111(): Promise<v9111.Bid[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Society', 'Bids')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Bids') != null
  }
}

export class SocietyCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current set of candidates; bidders that are attempting to become members.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Candidates') === '10cb2b16047aef87eb4b97693b155888dcdf8be529db6a3478537291fd09c4ea'
  }

  /**
   *  The current set of candidates; bidders that are attempting to become members.
   */
  async getAsV1040(): Promise<v1040.Bid[]> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Candidates')
  }

  /**
   *  The current set of candidates; bidders that are attempting to become members.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Society', 'Candidates') === '411686a59edbfe2554e1198de065938b91c3bf21c2de84694e25ec4198e08949'
  }

  /**
   *  The current set of candidates; bidders that are attempting to become members.
   */
  async getAsV9111(): Promise<v9111.Bid[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Society', 'Candidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Candidates') != null
  }
}

export class SocietyDefenderStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The defending member currently being challenged.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Defender') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The defending member currently being challenged.
   */
  async getAsV1040(): Promise<Uint8Array | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Defender')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Defender') != null
  }
}

export class SocietyDefenderVotesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes for the defender.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'DefenderVotes') === '1fe3718f000611c375ff3fc9c5ff5c0d1352b72df9fe99984aed210abd7964fe'
  }

  /**
   *  Votes for the defender.
   */
  async getAsV1040(key: Uint8Array): Promise<v1040.SocietyVote | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'DefenderVotes', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(v1040.SocietyVote | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'DefenderVotes', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(v1040.SocietyVote)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'DefenderVotes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'DefenderVotes') != null
  }
}

export class SocietyFounderStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The first member.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Founder') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The first member.
   */
  async getAsV1040(): Promise<Uint8Array | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Founder')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Founder') != null
  }
}

export class SocietyHeadStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The most primary from the most recently approved members.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Head') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The most primary from the most recently approved members.
   */
  async getAsV1040(): Promise<Uint8Array | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Head')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Head') != null
  }
}

export class SocietyMaxMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The max number of members for the society at one time.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'MaxMembers') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The max number of members for the society at one time.
   */
  async getAsV1040(): Promise<number> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'MaxMembers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'MaxMembers') != null
  }
}

export class SocietyMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current set of members, ordered.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current set of members, ordered.
   */
  async getAsV1040(): Promise<Uint8Array[]> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Members') != null
  }
}

export class SocietyPayoutsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pending payouts; ordered by block number, with the amount that should be paid out.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Payouts') === '634e12d45992be72bb69b63c5640dcec8deb21a9d8b1b06b139451b1ee8b77b3'
  }

  /**
   *  Pending payouts; ordered by block number, with the amount that should be paid out.
   */
  async getAsV1040(key: Uint8Array): Promise<[number, bigint][]> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Payouts', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<([number, bigint][])[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'Payouts', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<([number, bigint][])[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'Payouts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Payouts') != null
  }
}

export class SocietyPotStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Amount of our account balance that is specifically for the next round's bid(s).
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Pot') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  Amount of our account balance that is specifically for the next round's bid(s).
   */
  async getAsV1040(): Promise<bigint> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Pot')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Pot') != null
  }
}

export class SocietyRulesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A hash of the rules of this society concerning membership. Can only be set once and
   *  only by the founder.
   */
  get isV1042() {
    return this._chain.getStorageItemTypeHash('Society', 'Rules') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  A hash of the rules of this society concerning membership. Can only be set once and
   *  only by the founder.
   */
  async getAsV1042(): Promise<Uint8Array | undefined> {
    assert(this.isV1042)
    return this._chain.getStorage(this.blockHash, 'Society', 'Rules')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Rules') != null
  }
}

export class SocietyStrikesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The ongoing number of losing votes cast by the member.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Strikes') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  The ongoing number of losing votes cast by the member.
   */
  async getAsV1040(key: Uint8Array): Promise<number> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Strikes', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'Strikes', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(number)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'Strikes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Strikes') != null
  }
}

export class SocietySuspendedCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of suspended candidates.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'SuspendedCandidates') === '058575ab36a3716bfc871d4349ee61dd2ae86e5eae3fea166b94aa32c0aa10a0'
  }

  /**
   *  The set of suspended candidates.
   */
  async getAsV1040(key: Uint8Array): Promise<[bigint, v1040.BidKind] | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'SuspendedCandidates', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<([bigint, v1040.BidKind] | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'SuspendedCandidates', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<([bigint, v1040.BidKind])[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'SuspendedCandidates')
  }

  /**
   *  The set of suspended candidates.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Society', 'SuspendedCandidates') === '03c129b567eb923d3b5dbafe018996690d5ea9ff2dc10cd2c60c2e8c64759a15'
  }

  /**
   *  The set of suspended candidates.
   */
  async getAsV9111(key: Uint8Array): Promise<[bigint, v9111.BidKind] | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Society', 'SuspendedCandidates', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<([bigint, v9111.BidKind] | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Society', 'SuspendedCandidates', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<([bigint, v9111.BidKind])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Society', 'SuspendedCandidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'SuspendedCandidates') != null
  }
}

export class SocietySuspendedMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of suspended members.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'SuspendedMembers') === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
  }

  /**
   *  The set of suspended members.
   */
  async getAsV1040(key: Uint8Array): Promise<null | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'SuspendedMembers', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(null | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'SuspendedMembers', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(null)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'SuspendedMembers')
  }

  /**
   *  The set of suspended members.
   */
  get isV1042() {
    return this._chain.getStorageItemTypeHash('Society', 'SuspendedMembers') === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
  }

  /**
   *  The set of suspended members.
   */
  async getAsV1042(key: Uint8Array): Promise<boolean> {
    assert(this.isV1042)
    return this._chain.getStorage(this.blockHash, 'Society', 'SuspendedMembers', key)
  }

  async getManyAsV1042(keys: Uint8Array[]): Promise<(boolean)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Society', 'SuspendedMembers', keys.map(k => [k]))
  }

  async getAllAsV1042(): Promise<(boolean)[]> {
    assert(this.isV1042)
    return this._chain.queryStorage(this.blockHash, 'Society', 'SuspendedMembers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'SuspendedMembers') != null
  }
}

export class SocietyVotesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Double map from Candidate -> Voter -> (Maybe) Vote.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Votes') === '85829b361182877978da5efee007f1238e35f432a09132733eafee5c3e0a3478'
  }

  /**
   *  Double map from Candidate -> Voter -> (Maybe) Vote.
   */
  async getAsV1040(key1: Uint8Array, key2: Uint8Array): Promise<v1040.SocietyVote | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Votes', key1, key2)
  }

  async getManyAsV1040(keys: [Uint8Array, Uint8Array][]): Promise<(v1040.SocietyVote | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'Votes', keys)
  }

  async getAllAsV1040(): Promise<(v1040.SocietyVote)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'Votes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Votes') != null
  }
}

export class SocietyVouchingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Members currently vouching or banned from vouching again
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('Society', 'Vouching') === '37fcd9321a31e81d0e225810aa4633926f004ccc35f626c23b1fd140a9546edc'
  }

  /**
   *  Members currently vouching or banned from vouching again
   */
  async getAsV1040(key: Uint8Array): Promise<v1040.VouchingStatus | undefined> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'Society', 'Vouching', key)
  }

  async getManyAsV1040(keys: Uint8Array[]): Promise<(v1040.VouchingStatus | undefined)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'Vouching', keys.map(k => [k]))
  }

  async getAllAsV1040(): Promise<(v1040.VouchingStatus)[]> {
    assert(this.isV1040)
    return this._chain.queryStorage(this.blockHash, 'Society', 'Vouching')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Society', 'Vouching') != null
  }
}

export class StakingActiveEraStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The active era information, it holds index and start.
   * 
   *  The active era is the era currently rewarded.
   *  Validator set of this era must be equal to `SessionInterface::validators`.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'ActiveEra') === '2bb946dd9c19de9f4332897005d1255528c610172f7418fae165b5dafd3cfbfe'
  }

  /**
   *  The active era information, it holds index and start.
   * 
   *  The active era is the era currently rewarded.
   *  Validator set of this era must be equal to `SessionInterface::validators`.
   */
  async getAsV1050(): Promise<v1050.ActiveEraInfo | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ActiveEra')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ActiveEra') != null
  }
}

export class StakingBondedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map from all locked "stash" accounts to the controller account.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'Bonded') === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
  }

  /**
   *  Map from all locked "stash" accounts to the controller account.
   */
  async getAsV1020(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Bonded', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Bonded', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Bonded')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'Bonded') != null
  }
}

export class StakingBondedErasStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A mapping from still-bonded eras to the first session index of that era.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'BondedEras') === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
  }

  /**
   *  A mapping from still-bonded eras to the first session index of that era.
   */
  async getAsV1020(): Promise<[number, number][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'BondedEras')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'BondedEras') != null
  }
}

export class StakingCanceledSlashPayoutStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency given to reporters of a slash event which was
   *  canceled by extraordinary circumstances (e.g. governance).
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'CanceledSlashPayout') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The amount of currency given to reporters of a slash event which was
   *  canceled by extraordinary circumstances (e.g. governance).
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CanceledSlashPayout')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'CanceledSlashPayout') != null
  }
}

export class StakingChillThresholdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The threshold for when users can start calling `chill_other` for other validators / nominators.
   *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
   *  the system compared to the configured max (`Max*Count`).
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('Staking', 'ChillThreshold') === 'a05bf6dd806233a6b9a22cb1cd50bcf79bcb6a1f3014c295988bec299abc5cd3'
  }

  /**
   *  The threshold for when users can start calling `chill_other` for other validators / nominators.
   *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
   *  the system compared to the configured max (`Max*Count`).
   */
  async getAsV9080(): Promise<number | undefined> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ChillThreshold')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ChillThreshold') != null
  }
}

export class StakingCounterForNominatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A tracker to keep count of the number of items in the `Nominators` map.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Staking', 'CounterForNominators') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  A tracker to keep count of the number of items in the `Nominators` map.
   */
  async getAsV9050(): Promise<number> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CounterForNominators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'CounterForNominators') != null
  }
}

export class StakingCounterForValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A tracker to keep count of the number of items in the `Validators` map.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Staking', 'CounterForValidators') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  A tracker to keep count of the number of items in the `Validators` map.
   */
  async getAsV9050(): Promise<number> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CounterForValidators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'CounterForValidators') != null
  }
}

export class StakingCurrentElectedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The currently elected validator set keyed by stash account ID.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentElected') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The currently elected validator set keyed by stash account ID.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CurrentElected')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentElected') != null
  }
}

export class StakingCurrentEraStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current era index.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentEra') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The current era index.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CurrentEra')
  }

  /**
   *  The current era index.
   * 
   *  This is the latest planned era, depending on how session module queues the validator
   *  set, it might be active or not.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentEra') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  The current era index.
   * 
   *  This is the latest planned era, depending on how session module queues the validator
   *  set, it might be active or not.
   */
  async getAsV1050(): Promise<number | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CurrentEra')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentEra') != null
  }
}

export class StakingCurrentEraPointsEarnedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Rewards for the current era. Using indices of current elected set.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentEraPointsEarned') === 'c9c80f076e65b760730b101fa65c97291c622cd82a2926ed3f662fce619cc3d1'
  }

  /**
   *  Rewards for the current era. Using indices of current elected set.
   */
  async getAsV1020(): Promise<v1020.EraPoints> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CurrentEraPointsEarned')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentEraPointsEarned') != null
  }
}

export class StakingCurrentEraStartStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The start of the current era.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentEraStart') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The start of the current era.
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CurrentEraStart')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentEraStart') != null
  }
}

export class StakingCurrentEraStartSessionIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The session index at which the current era started.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentEraStartSessionIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The session index at which the current era started.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CurrentEraStartSessionIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentEraStartSessionIndex') != null
  }
}

export class StakingCurrentPlannedSessionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The last planned session scheduled by the session pallet.
   * 
   *  This is basically in sync with the call to [`SessionManager::new_session`].
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentPlannedSession') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The last planned session scheduled by the session pallet.
   * 
   *  This is basically in sync with the call to [`SessionManager::new_session`].
   */
  async getAsV2029(): Promise<number> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'Staking', 'CurrentPlannedSession')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'CurrentPlannedSession') != null
  }
}

export class StakingEarliestUnappliedSlashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The earliest era for which we have a pending, unapplied slash.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'EarliestUnappliedSlash') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  The earliest era for which we have a pending, unapplied slash.
   */
  async getAsV1020(): Promise<number | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'EarliestUnappliedSlash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'EarliestUnappliedSlash') != null
  }
}

export class StakingEraElectionStatusStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
   *  solutions to be submitted.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Staking', 'EraElectionStatus') === '6ab8fd45f2e3733d18c84b0734b8c9ca6951713b16a0a2513c1591af917fdf38'
  }

  /**
   *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
   *  solutions to be submitted.
   */
  async getAsV1058(): Promise<v1058.ElectionStatus> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Staking', 'EraElectionStatus')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'EraElectionStatus') != null
  }
}

export class StakingErasRewardPointsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Rewards for the last `HISTORY_DEPTH` eras.
   *  If reward hasn't been set or has been removed then 0 reward is returned.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasRewardPoints') === '48c202c7b8424da56b623834c54ceaf74129dbd88a59c39931cc7ba131501b50'
  }

  /**
   *  Rewards for the last `HISTORY_DEPTH` eras.
   *  If reward hasn't been set or has been removed then 0 reward is returned.
   */
  async getAsV1050(key: number): Promise<v1050.EraRewardPoints> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ErasRewardPoints', key)
  }

  async getManyAsV1050(keys: number[]): Promise<(v1050.EraRewardPoints)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasRewardPoints', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.EraRewardPoints)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasRewardPoints')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasRewardPoints') != null
  }
}

export class StakingErasStakersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Exposure of validator at era.
   * 
   *  This is keyed first by the era index to allow bulk deletion and then the stash account.
   * 
   *  Is it removed after `HISTORY_DEPTH` eras.
   *  If stakers hasn't been set or has been removed then empty exposure is returned.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasStakers') === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
  }

  /**
   *  Exposure of validator at era.
   * 
   *  This is keyed first by the era index to allow bulk deletion and then the stash account.
   * 
   *  Is it removed after `HISTORY_DEPTH` eras.
   *  If stakers hasn't been set or has been removed then empty exposure is returned.
   */
  async getAsV1050(key1: number, key2: Uint8Array): Promise<v1050.Exposure> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ErasStakers', key1, key2)
  }

  async getManyAsV1050(keys: [number, Uint8Array][]): Promise<(v1050.Exposure)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasStakers', keys)
  }

  async getAllAsV1050(): Promise<(v1050.Exposure)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasStakers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasStakers') != null
  }
}

export class StakingErasStakersClippedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Clipped Exposure of validator at era.
   * 
   *  This is similar to [`ErasStakers`] but number of nominators exposed is reduce to the
   *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
   *  This is used to limit the i/o cost for the nominator payout.
   * 
   *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
   * 
   *  Is it removed after `HISTORY_DEPTH` eras.
   *  If stakers hasn't been set or has been removed then empty exposure is returned.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasStakersClipped') === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
  }

  /**
   *  Clipped Exposure of validator at era.
   * 
   *  This is similar to [`ErasStakers`] but number of nominators exposed is reduce to the
   *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
   *  This is used to limit the i/o cost for the nominator payout.
   * 
   *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
   * 
   *  Is it removed after `HISTORY_DEPTH` eras.
   *  If stakers hasn't been set or has been removed then empty exposure is returned.
   */
  async getAsV1050(key1: number, key2: Uint8Array): Promise<v1050.Exposure> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ErasStakersClipped', key1, key2)
  }

  async getManyAsV1050(keys: [number, Uint8Array][]): Promise<(v1050.Exposure)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasStakersClipped', keys)
  }

  async getAllAsV1050(): Promise<(v1050.Exposure)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasStakersClipped')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasStakersClipped') != null
  }
}

export class StakingErasStartSessionIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The session index at which the era start for the last `HISTORY_DEPTH` eras
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasStartSessionIndex') === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
  }

  /**
   *  The session index at which the era start for the last `HISTORY_DEPTH` eras
   */
  async getAsV1050(key: number): Promise<number | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ErasStartSessionIndex', key)
  }

  async getManyAsV1050(keys: number[]): Promise<(number | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasStartSessionIndex', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(number)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasStartSessionIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasStartSessionIndex') != null
  }
}

export class StakingErasTotalStakeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total amount staked for the last `HISTORY_DEPTH` eras.
   *  If total hasn't been set or has been removed then 0 stake is returned.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasTotalStake') === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
  }

  /**
   *  The total amount staked for the last `HISTORY_DEPTH` eras.
   *  If total hasn't been set or has been removed then 0 stake is returned.
   */
  async getAsV1050(key: number): Promise<bigint> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ErasTotalStake', key)
  }

  async getManyAsV1050(keys: number[]): Promise<(bigint)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasTotalStake', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(bigint)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasTotalStake')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasTotalStake') != null
  }
}

export class StakingErasValidatorPrefsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Similarly to `ErasStakers` this holds the preferences of validators.
   * 
   *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
   * 
   *  Is it removed after `HISTORY_DEPTH` eras.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasValidatorPrefs') === '3b21d3470a6c89e6da0d574a6d1402846f9836bb0d1f42e73e3fab07653299c2'
  }

  /**
   *  Similarly to `ErasStakers` this holds the preferences of validators.
   * 
   *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
   * 
   *  Is it removed after `HISTORY_DEPTH` eras.
   */
  async getAsV1050(key1: number, key2: Uint8Array): Promise<v1050.ValidatorPrefs> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ErasValidatorPrefs', key1, key2)
  }

  async getManyAsV1050(keys: [number, Uint8Array][]): Promise<(v1050.ValidatorPrefs)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasValidatorPrefs', keys)
  }

  async getAllAsV1050(): Promise<(v1050.ValidatorPrefs)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasValidatorPrefs')
  }

  /**
   *  Similar to `ErasStakers`, this holds the preferences of validators.
   * 
   *  This is keyed first by the era index to allow bulk deletion and then the stash account.
   * 
   *  Is it removed after `HISTORY_DEPTH` eras.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasValidatorPrefs') === '2f145e368b1c1a9540437d8c25b9502d09b7e977e27a6bb99156b6bf2c6269d2'
  }

  /**
   *  Similar to `ErasStakers`, this holds the preferences of validators.
   * 
   *  This is keyed first by the era index to allow bulk deletion and then the stash account.
   * 
   *  Is it removed after `HISTORY_DEPTH` eras.
   */
  async getAsV2028(key1: number, key2: Uint8Array): Promise<v2028.ValidatorPrefs> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ErasValidatorPrefs', key1, key2)
  }

  async getManyAsV2028(keys: [number, Uint8Array][]): Promise<(v2028.ValidatorPrefs)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasValidatorPrefs', keys)
  }

  async getAllAsV2028(): Promise<(v2028.ValidatorPrefs)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasValidatorPrefs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasValidatorPrefs') != null
  }
}

export class StakingErasValidatorRewardStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total validator era payout for the last `HISTORY_DEPTH` eras.
   * 
   *  Eras that haven't finished yet or has been removed doesn't have reward.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasValidatorReward') === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
  }

  /**
   *  The total validator era payout for the last `HISTORY_DEPTH` eras.
   * 
   *  Eras that haven't finished yet or has been removed doesn't have reward.
   */
  async getAsV1050(key: number): Promise<bigint | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ErasValidatorReward', key)
  }

  async getManyAsV1050(keys: number[]): Promise<(bigint | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasValidatorReward', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(bigint)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ErasValidatorReward')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ErasValidatorReward') != null
  }
}

export class StakingForceEraStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if the next session change will be a new era regardless of index.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'ForceEra') === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
  }

  /**
   *  True if the next session change will be a new era regardless of index.
   */
  async getAsV1020(): Promise<v1020.Forcing> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ForceEra')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ForceEra') != null
  }
}

export class StakingHistoryDepthStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of era to keep in history.
   * 
   *  Information is kept for eras in `[current_era - history_depth; current_era]
   * 
   *  Must be more than the number of era delayed by session otherwise.
   *  i.e. active era must always be in history.
   *  i.e. `active_era > current_era - history_depth` must be guaranteed.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'HistoryDepth') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of era to keep in history.
   * 
   *  Information is kept for eras in `[current_era - history_depth; current_era]
   * 
   *  Must be more than the number of era delayed by session otherwise.
   *  i.e. active era must always be in history.
   *  i.e. `active_era > current_era - history_depth` must be guaranteed.
   */
  async getAsV1050(): Promise<number> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'HistoryDepth')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'HistoryDepth') != null
  }
}

export class StakingInvulnerablesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
   *  easy to initialize and the performance hit is minimal (we expect no more than four
   *  invulnerables) and restricted to testnets.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'Invulnerables') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
   *  easy to initialize and the performance hit is minimal (we expect no more than four
   *  invulnerables) and restricted to testnets.
   */
  async getAsV1020(): Promise<Uint8Array[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Invulnerables')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'Invulnerables') != null
  }
}

export class StakingIsCurrentSessionFinalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if the current **planned** session is final. Note that this does not take era
   *  forcing into account.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Staking', 'IsCurrentSessionFinal') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if the current **planned** session is final. Note that this does not take era
   *  forcing into account.
   */
  async getAsV1058(): Promise<boolean> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Staking', 'IsCurrentSessionFinal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'IsCurrentSessionFinal') != null
  }
}

export class StakingLedgerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'Ledger') === 'c27b3ed6dad75f65e118399ee7274c494565332d8c67cc85aef297dd1092284b'
  }

  /**
   *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.StakingLedger | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Ledger', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.StakingLedger | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Ledger', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.StakingLedger)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Ledger')
  }

  /**
   *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'Ledger') === 'acb0ae5b3ecc4c620a929a6d33a493f14d936906f24812ba68afe18beaf2314a'
  }

  /**
   *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.StakingLedger | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Ledger', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.StakingLedger | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Ledger', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.StakingLedger)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Ledger')
  }

  /**
   *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Staking', 'Ledger') === '838ac827cb2532f983c68467cfa97afcccf6147fb96e61e136394060880b64a4'
  }

  /**
   *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
   */
  async getAsV1058(key: Uint8Array): Promise<v1058.StakingLedger | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Ledger', key)
  }

  async getManyAsV1058(keys: Uint8Array[]): Promise<(v1058.StakingLedger | undefined)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Ledger', keys.map(k => [k]))
  }

  async getAllAsV1058(): Promise<(v1058.StakingLedger)[]> {
    assert(this.isV1058)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Ledger')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'Ledger') != null
  }
}

export class StakingMaxNominatorsCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The maximum nominator count before we stop allowing new validators to join.
   * 
   *  When this value is not set, no limits are enforced.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Staking', 'MaxNominatorsCount') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  The maximum nominator count before we stop allowing new validators to join.
   * 
   *  When this value is not set, no limits are enforced.
   */
  async getAsV9050(): Promise<number | undefined> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'MaxNominatorsCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'MaxNominatorsCount') != null
  }
}

export class StakingMaxValidatorsCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The maximum validator count before we stop allowing new validators to join.
   * 
   *  When this value is not set, no limits are enforced.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Staking', 'MaxValidatorsCount') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  The maximum validator count before we stop allowing new validators to join.
   * 
   *  When this value is not set, no limits are enforced.
   */
  async getAsV9050(): Promise<number | undefined> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'MaxValidatorsCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'MaxValidatorsCount') != null
  }
}

export class StakingMigrateEraStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The era where we migrated from Lazy Payouts to Simple Payouts
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Staking', 'MigrateEra') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  The era where we migrated from Lazy Payouts to Simple Payouts
   */
  async getAsV1058(): Promise<number | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Staking', 'MigrateEra')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'MigrateEra') != null
  }
}

export class StakingMinCommissionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount of commission that validators can set.
   * 
   *  If set to `0`, no limit exists.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('Staking', 'MinCommission') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The minimum amount of commission that validators can set.
   * 
   *  If set to `0`, no limit exists.
   */
  async getAsV9160(): Promise<number> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'Staking', 'MinCommission')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'MinCommission') != null
  }
}

export class StakingMinNominatorBondStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The minimum active bond to become and maintain the role of a nominator.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Staking', 'MinNominatorBond') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The minimum active bond to become and maintain the role of a nominator.
   */
  async getAsV9050(): Promise<bigint> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'MinNominatorBond')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'MinNominatorBond') != null
  }
}

export class StakingMinValidatorBondStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The minimum active bond to become and maintain the role of a validator.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Staking', 'MinValidatorBond') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The minimum active bond to become and maintain the role of a validator.
   */
  async getAsV9050(): Promise<bigint> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'MinValidatorBond')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'MinValidatorBond') != null
  }
}

export class StakingMinimumValidatorCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Minimum number of staking participants before emergency conditions are imposed.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'MinimumValidatorCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Minimum number of staking participants before emergency conditions are imposed.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'MinimumValidatorCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'MinimumValidatorCount') != null
  }
}

export class StakingNominatorSlashInEraStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All slashing events on nominators, mapped by era to the highest slash value of the era.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'NominatorSlashInEra') === '019c211c1e4452f7fe517a6d5cafde0784f5991ddd51ac15e84213941f3208c2'
  }

  /**
   *  All slashing events on nominators, mapped by era to the highest slash value of the era.
   */
  async getAsV1020(key1: number, key2: Uint8Array): Promise<bigint | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'NominatorSlashInEra', key1, key2)
  }

  async getManyAsV1020(keys: [number, Uint8Array][]): Promise<(bigint | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'NominatorSlashInEra', keys)
  }

  async getAllAsV1020(): Promise<(bigint)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'NominatorSlashInEra')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'NominatorSlashInEra') != null
  }
}

export class StakingNominatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The map from nominator stash key to the set of stash keys of all validators to nominate.
   * 
   *  NOTE: is private so that we can ensure upgraded before all typical accesses.
   *  Direct storage APIs can still bypass this protection.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'Nominators') === 'a72d3e17e59f46bbd05fb0efd27052437fe2b1c41b0c89fe950edfb3b79e3c78'
  }

  /**
   *  The map from nominator stash key to the set of stash keys of all validators to nominate.
   * 
   *  NOTE: is private so that we can ensure upgraded before all typical accesses.
   *  Direct storage APIs can still bypass this protection.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Nominations | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Nominators', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.Nominations | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Nominators', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Nominations)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Nominators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'Nominators') != null
  }
}

export class StakingOffendingValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isV9122() {
    return this._chain.getStorageItemTypeHash('Staking', 'OffendingValidators') === 'f462a122689229c7df85ebbfd1e391ea27650c460999212f2c78a9a5675dd9e6'
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
  async getAsV9122(): Promise<[number, boolean][]> {
    assert(this.isV9122)
    return this._chain.getStorage(this.blockHash, 'Staking', 'OffendingValidators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'OffendingValidators') != null
  }
}

export class StakingPayeeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Where the reward payment should be made. Keyed by stash.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'Payee') === '3d88af4306e38ea477ff9098e5cfc51177c77c5023d8403a57071d4f2a0cf0be'
  }

  /**
   *  Where the reward payment should be made. Keyed by stash.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.RewardDestination> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Payee', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.RewardDestination)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Payee', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.RewardDestination)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Payee')
  }

  /**
   *  Where the reward payment should be made. Keyed by stash.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Staking', 'Payee') === '997acadf80b79903fb4386b933d481dff61dad22612d657f19f39b937ea8d992'
  }

  /**
   *  Where the reward payment should be made. Keyed by stash.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.RewardDestination> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Payee', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.RewardDestination)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Payee', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.RewardDestination)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Payee')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'Payee') != null
  }
}

export class StakingQueuedElectedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next validator set. At the end of an era, if this is available (potentially from the
   *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
   *  is executed.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Staking', 'QueuedElected') === '4eb4938a9c4768286e5e98cd46cabfc8a8c98b113bbbe8616621e5fc6aa8e4d5'
  }

  /**
   *  The next validator set. At the end of an era, if this is available (potentially from the
   *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
   *  is executed.
   */
  async getAsV1058(): Promise<v1058.ElectionResult | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Staking', 'QueuedElected')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'QueuedElected') != null
  }
}

export class StakingQueuedScoreStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The score of the current [`QueuedElected`].
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Staking', 'QueuedScore') === 'fc5a4796e3467f3450c1f03819f4fe9e47a6e584803699b23c3072af283f03fa'
  }

  /**
   *  The score of the current [`QueuedElected`].
   */
  async getAsV1058(): Promise<bigint[] | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Staking', 'QueuedScore')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'QueuedScore') != null
  }
}

export class StakingSlashRewardFractionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The percentage of the slash that is distributed to reporters.
   * 
   *  The rest of the slashed value is handled by the `Slash`.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'SlashRewardFraction') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The percentage of the slash that is distributed to reporters.
   * 
   *  The rest of the slashed value is handled by the `Slash`.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'SlashRewardFraction')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'SlashRewardFraction') != null
  }
}

export class StakingSlashingSpansStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Slashing spans for stash accounts.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'SlashingSpans') === 'ff450f1b753d13a5521c053c1ddf4b424ae5119d732701434520d017c5790332'
  }

  /**
   *  Slashing spans for stash accounts.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.SlashingSpans | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'SlashingSpans', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.SlashingSpans | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'SlashingSpans', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.SlashingSpans)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'SlashingSpans')
  }

  /**
   *  Slashing spans for stash accounts.
   */
  get isV1045() {
    return this._chain.getStorageItemTypeHash('Staking', 'SlashingSpans') === 'b2f49d14e3e4e56cf533a97be4eadb0e19c21d28a6b1b78aa85d7fda1f7e298b'
  }

  /**
   *  Slashing spans for stash accounts.
   */
  async getAsV1045(key: Uint8Array): Promise<v1045.SlashingSpans | undefined> {
    assert(this.isV1045)
    return this._chain.getStorage(this.blockHash, 'Staking', 'SlashingSpans', key)
  }

  async getManyAsV1045(keys: Uint8Array[]): Promise<(v1045.SlashingSpans | undefined)[]> {
    assert(this.isV1045)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'SlashingSpans', keys.map(k => [k]))
  }

  async getAllAsV1045(): Promise<(v1045.SlashingSpans)[]> {
    assert(this.isV1045)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'SlashingSpans')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'SlashingSpans') != null
  }
}

export class StakingSlotStakeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The amount of balance actively at stake for each validator slot, currently.
   * 
   *  This is used to derive rewards and punishments.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'SlotStake') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The amount of balance actively at stake for each validator slot, currently.
   * 
   *  This is used to derive rewards and punishments.
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'SlotStake')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'SlotStake') != null
  }
}

export class StakingSnapshotNominatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Snapshot of nominators at the beginning of the current election window. This should only
   *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Staking', 'SnapshotNominators') === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
  }

  /**
   *  Snapshot of nominators at the beginning of the current election window. This should only
   *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
   */
  async getAsV1058(): Promise<Uint8Array[] | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Staking', 'SnapshotNominators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'SnapshotNominators') != null
  }
}

export class StakingSnapshotValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Snapshot of validators at the beginning of the current election window. This should only
   *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('Staking', 'SnapshotValidators') === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
  }

  /**
   *  Snapshot of validators at the beginning of the current election window. This should only
   *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
   */
  async getAsV1058(): Promise<Uint8Array[] | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'Staking', 'SnapshotValidators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'SnapshotValidators') != null
  }
}

export class StakingSpanSlashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Records information about the maximum slash of a stash within a slashing span,
   *  as well as how much reward has been paid out.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'SpanSlash') === '3c3a6ad88aa43453f825e9fdcd8fb3dbdc0bef20e2be50b06d357c7c3d8e3488'
  }

  /**
   *  Records information about the maximum slash of a stash within a slashing span,
   *  as well as how much reward has been paid out.
   */
  async getAsV1020(key: [Uint8Array, number]): Promise<v1020.SpanRecord> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'SpanSlash', key)
  }

  async getManyAsV1020(keys: [Uint8Array, number][]): Promise<(v1020.SpanRecord)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'SpanSlash', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.SpanRecord)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'SpanSlash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'SpanSlash') != null
  }
}

export class StakingStakersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Nominators for a particular account that is in action right now. You can't iterate
   *  through validators here, but you can find them in the Session module.
   * 
   *  This is keyed by the stash account.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'Stakers') === 'd3eee9271023eb9c766a48fd0a709136d59d1bde5407acf940037ad950c8900d'
  }

  /**
   *  Nominators for a particular account that is in action right now. You can't iterate
   *  through validators here, but you can find them in the Session module.
   * 
   *  This is keyed by the stash account.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Exposure> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Stakers', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.Exposure)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Stakers', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.Exposure)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Stakers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'Stakers') != null
  }
}

export class StakingStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The version of storage for upgrade.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'StorageVersion') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The version of storage for upgrade.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'StorageVersion')
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Staking', 'StorageVersion') === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  async getAsV1050(): Promise<v1050.Releases> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Staking', 'StorageVersion')
  }

  /**
   *  True if network has been upgraded to this version.
   *  Storage version of the pallet.
   * 
   *  This is set to v7.0.0 for new networks.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Staking', 'StorageVersion') === 'ef04544991bb54d78e35f735351ad18571d6f07748b22cbb3b9fcc24b06a94e9'
  }

  /**
   *  True if network has been upgraded to this version.
   *  Storage version of the pallet.
   * 
   *  This is set to v7.0.0 for new networks.
   */
  async getAsV9111(): Promise<v9111.Type_228> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Staking', 'StorageVersion')
  }

  /**
   *  True if network has been upgraded to this version.
   *  Storage version of the pallet.
   * 
   *  This is set to v7.0.0 for new networks.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('Staking', 'StorageVersion') === '9d27f2caf6049b435f9ac14da3b267d0e65dfad3af06ab1bc4d6fe208abf3347'
  }

  /**
   *  True if network has been upgraded to this version.
   *  Storage version of the pallet.
   * 
   *  This is set to v7.0.0 for new networks.
   */
  async getAsV9190(): Promise<v9190.Type_240> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'Staking', 'StorageVersion')
  }

  /**
   *  True if network has been upgraded to this version.
   *  Storage version of the pallet.
   * 
   *  This is set to v7.0.0 for new networks.
   */
  get isV9271() {
    return this._chain.getStorageItemTypeHash('Staking', 'StorageVersion') === 'ada1e92667a52fdcb4e17dda7e6482dfa43e5fd766f816b93e620c415070cfcf'
  }

  /**
   *  True if network has been upgraded to this version.
   *  Storage version of the pallet.
   * 
   *  This is set to v7.0.0 for new networks.
   */
  async getAsV9271(): Promise<v9271.Type_248> {
    assert(this.isV9271)
    return this._chain.getStorage(this.blockHash, 'Staking', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'StorageVersion') != null
  }
}

export class StakingUnappliedSlashesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All unapplied slashes that are queued for later.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'UnappliedSlashes') === '8264329f163dd76100f9d2270735f3a3cb745c5af616ebd0e203d417e2039503'
  }

  /**
   *  All unapplied slashes that are queued for later.
   */
  async getAsV1020(key: number): Promise<v1020.UnappliedSlash[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'UnappliedSlashes', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(v1020.UnappliedSlash[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'UnappliedSlashes', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.UnappliedSlash[])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'UnappliedSlashes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'UnappliedSlashes') != null
  }
}

export class StakingValidatorCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The ideal number of staking participants.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'ValidatorCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The ideal number of staking participants.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ValidatorCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ValidatorCount') != null
  }
}

export class StakingValidatorSlashInEraStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All slashing events on validators, mapped by era to the highest slash proportion
   *  and slash value of the era.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'ValidatorSlashInEra') === 'facf161fd07f9163ac7ab48199356f8083a31ec97fe569c9c5e6fd30fe0ce3ae'
  }

  /**
   *  All slashing events on validators, mapped by era to the highest slash proportion
   *  and slash value of the era.
   */
  async getAsV1020(key1: number, key2: Uint8Array): Promise<[number, bigint] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'ValidatorSlashInEra', key1, key2)
  }

  async getManyAsV1020(keys: [number, Uint8Array][]): Promise<([number, bigint] | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ValidatorSlashInEra', keys)
  }

  async getAllAsV1020(): Promise<([number, bigint])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'ValidatorSlashInEra')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'ValidatorSlashInEra') != null
  }
}

export class StakingValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The map from (wannabe) validator stash key to the preferences of that validator.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Staking', 'Validators') === '3f9d4868d833266bf0b4658a23fbe9b816c5eafdf27cd8520d058526e27af4c5'
  }

  /**
   *  The map from (wannabe) validator stash key to the preferences of that validator.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.ValidatorPrefs> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Validators', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(v1020.ValidatorPrefs)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Validators', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.ValidatorPrefs)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Validators')
  }

  /**
   *  The map from (wannabe) validator stash key to the preferences of that validator.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('Staking', 'Validators') === 'fa08b7a9cd071c2833987f5924d940cf66842072b85af5ecfc3afcf9fbb2ebd0'
  }

  /**
   *  The map from (wannabe) validator stash key to the preferences of that validator.
   */
  async getAsV2028(key: Uint8Array): Promise<v2028.ValidatorPrefs> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'Staking', 'Validators', key)
  }

  async getManyAsV2028(keys: Uint8Array[]): Promise<(v2028.ValidatorPrefs)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Validators', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<(v2028.ValidatorPrefs)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'Staking', 'Validators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Staking', 'Validators') != null
  }
}

export class SudoIdentityOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('Sudo', 'IdentityOf') === '27c0876580f8209a4f629b0880c424ee5b34dadaf52dd150491589b8625eda7d'
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   */
  async getAsV1030(key: Uint8Array): Promise<v1030.Registration | undefined> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'IdentityOf', key)
  }

  async getManyAsV1030(keys: Uint8Array[]): Promise<(v1030.Registration | undefined)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'IdentityOf', keys.map(k => [k]))
  }

  async getAllAsV1030(): Promise<(v1030.Registration)[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'IdentityOf')
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   */
  get isV1032() {
    return this._chain.getStorageItemTypeHash('Sudo', 'IdentityOf') === '4858510e4d16a634a6efd37fc0fbc0a75e16596326ae6d014f4bfca201c459de'
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   */
  async getAsV1032(key: Uint8Array): Promise<v1032.Registration | undefined> {
    assert(this.isV1032)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'IdentityOf', key)
  }

  async getManyAsV1032(keys: Uint8Array[]): Promise<(v1032.Registration | undefined)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'IdentityOf', keys.map(k => [k]))
  }

  async getAllAsV1032(): Promise<(v1032.Registration)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'IdentityOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'IdentityOf') != null
  }
}

export class SudoKeyStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  async getAsV1020(): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'Key')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') != null
  }
}

export class SudoNameOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The lookup table for names.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Sudo', 'NameOf') === '2057524b406c0da066a71270ca14868d7d6ec1450784f1c659ab6e5726329a76'
  }

  /**
   *  The lookup table for names.
   */
  async getAsV1020(key: Uint8Array): Promise<[Uint8Array, bigint] | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'NameOf', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<([Uint8Array, bigint] | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'NameOf', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<([Uint8Array, bigint])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'NameOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'NameOf') != null
  }
}

export class SudoRegistrarsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of registrars. Not expected to get very big as can only be added through a
   *  special origin (likely a council motion).
   * 
   *  The index into this can be cast to `RegistrarIndex` to get a valid value.
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('Sudo', 'Registrars') === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
  }

  /**
   *  The set of registrars. Not expected to get very big as can only be added through a
   *  special origin (likely a council motion).
   * 
   *  The index into this can be cast to `RegistrarIndex` to get a valid value.
   */
  async getAsV1030(): Promise<(v1030.RegistrarInfo | undefined)[]> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'Registrars')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'Registrars') != null
  }
}

export class SudoSubsOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Alternative "sub" identities of this account.
   * 
   *  The first item is the deposit, the second is a vector of the accounts together with
   *  their "local" name (i.e. in the context of the identity).
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('Sudo', 'SubsOf') === '52e834d4baacf2b5d3cc801deda4d4e52e635a689852f4a58f6d89e9c1faefc1'
  }

  /**
   *  Alternative "sub" identities of this account.
   * 
   *  The first item is the deposit, the second is a vector of the accounts together with
   *  their "local" name (i.e. in the context of the identity).
   */
  async getAsV1030(key: Uint8Array): Promise<[bigint, [Uint8Array, v1030.Data][]]> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'SubsOf', key)
  }

  async getManyAsV1030(keys: Uint8Array[]): Promise<([bigint, [Uint8Array, v1030.Data][]])[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'SubsOf', keys.map(k => [k]))
  }

  async getAllAsV1030(): Promise<([bigint, [Uint8Array, v1030.Data][]])[]> {
    assert(this.isV1030)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'SubsOf')
  }

  /**
   *  Alternative "sub" identities of this account.
   * 
   *  The first item is the deposit, the second is a vector of the accounts.
   */
  get isV1031() {
    return this._chain.getStorageItemTypeHash('Sudo', 'SubsOf') === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
  }

  /**
   *  Alternative "sub" identities of this account.
   * 
   *  The first item is the deposit, the second is a vector of the accounts.
   */
  async getAsV1031(key: Uint8Array): Promise<[bigint, Uint8Array[]]> {
    assert(this.isV1031)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'SubsOf', key)
  }

  async getManyAsV1031(keys: Uint8Array[]): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'SubsOf', keys.map(k => [k]))
  }

  async getAllAsV1031(): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'SubsOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'SubsOf') != null
  }
}

export class SudoSuperOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The super-identity of an alternative "sub" identity together with its name, within that
   *  context. If the account is not some other account's sub-identity, then just `None`.
   */
  get isV1031() {
    return this._chain.getStorageItemTypeHash('Sudo', 'SuperOf') === 'c565a83b0bf993e5396af12d8df2b9b95182a9fa6ad470d460d1dcf06e6881a0'
  }

  /**
   *  The super-identity of an alternative "sub" identity together with its name, within that
   *  context. If the account is not some other account's sub-identity, then just `None`.
   */
  async getAsV1031(key: Uint8Array): Promise<[Uint8Array, v1031.Data] | undefined> {
    assert(this.isV1031)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'SuperOf', key)
  }

  async getManyAsV1031(keys: Uint8Array[]): Promise<([Uint8Array, v1031.Data] | undefined)[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'SuperOf', keys.map(k => [k]))
  }

  async getAllAsV1031(): Promise<([Uint8Array, v1031.Data])[]> {
    assert(this.isV1031)
    return this._chain.queryStorage(this.blockHash, 'Sudo', 'SuperOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'SuperOf') != null
  }
}

export class SystemAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.AccountInfo> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.AccountInfo)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.AccountInfo)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === 'eb40f1d91f26d72e29c60e034d53a72b9b529014c7e108f422d8ad5f03f0c902'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2025(key: Uint8Array): Promise<v2025.AccountInfo> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV2025(keys: Uint8Array[]): Promise<(v2025.AccountInfo)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(v2025.AccountInfo)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2028(key: Uint8Array): Promise<v2028.AccountInfo> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV2028(keys: Uint8Array[]): Promise<(v2028.AccountInfo)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV2028(): Promise<(v2028.AccountInfo)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2030(key: Uint8Array): Promise<v2030.AccountInfo> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV2030(keys: Uint8Array[]): Promise<(v2030.AccountInfo)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV2030(): Promise<(v2030.AccountInfo)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class SystemAccountNonceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Extrinsics nonce for accounts.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'AccountNonce') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  Extrinsics nonce for accounts.
   */
  async getAsV1020(key: Uint8Array): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'AccountNonce', key)
  }

  async getManyAsV1020(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'AccountNonce', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(number)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'AccountNonce')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'AccountNonce') != null
  }
}

export class SystemAllExtrinsicsLenStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  async getAsV1020(): Promise<number | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'AllExtrinsicsLen')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') != null
  }
}

export class SystemAllExtrinsicsWeightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total weight for all extrinsics put together, for the current block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsWeight') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total weight for all extrinsics put together, for the current block.
   */
  async getAsV1020(): Promise<number | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'AllExtrinsicsWeight')
  }

  /**
   *  Total weight for all extrinsics put together, for the current block.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsWeight') === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
  }

  /**
   *  Total weight for all extrinsics put together, for the current block.
   */
  async getAsV1058(): Promise<bigint | undefined> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'System', 'AllExtrinsicsWeight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsWeight') != null
  }
}

export class SystemBlockHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of block numbers to block hashes.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'BlockHash') === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
  }

  /**
   *  Map of block numbers to block hashes.
   */
  async getAsV1020(key: number): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockHash', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'BlockHash', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'BlockHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'BlockHash') != null
  }
}

export class SystemBlockWeightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current weight for the block.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') === 'a48e4a92883111e45a4df82c24772ca4f3cf68ad664cd5f82e79bf2fa09efa46'
  }

  /**
   *  The current weight for the block.
   */
  async getAsV2005(): Promise<v2005.ExtrinsicsWeight> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockWeight')
  }

  /**
   *  The current weight for the block.
   */
  get isV2027() {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
  }

  /**
   *  The current weight for the block.
   */
  async getAsV2027(): Promise<v2027.ConsumedWeight> {
    assert(this.isV2027)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockWeight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') != null
  }
}

export class SystemDigestStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '1ddf323439264601ddc32cb21cada8436fbec4e5389a9ff6d45f95e6e3c4b579'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV1020(): Promise<v1020.DigestOf> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '08ab0f1eb08eb281a0be5123646d1a04bf4254218b3b8617ed26e880f8eaa52f'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV9111(): Promise<v9111.Digest> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV9130(): Promise<v9130.Digest> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Digest') != null
  }
}

export class SystemEventCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'EventCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'EventCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'EventCount') != null
  }
}

export class SystemEventTopicsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Mapping between a topic (represented by T::Hash) and a vector of indexes
   *  of events in the `<Events<T>>` list.
   * 
   *  The first key serves no purpose. This field is declared as double_map just
   *  for convenience of using `remove_prefix`.
   * 
   *  All topic vectors have deterministic storage locations depending on the topic. This
   *  allows light-clients to leverage the changes trie storage tracking mechanism and
   *  in case of changes fetch the list of events of interest.
   * 
   *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
   *  the `EventIndex` then in case if the topic has the same contents on the next block
   *  no notification will be triggered thus the event might be lost.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'EventTopics') === '585b911b33f5f6144032aab18de940e63106098b8714e2d320c6c6bb9b1d67d8'
  }

  /**
   *  Mapping between a topic (represented by T::Hash) and a vector of indexes
   *  of events in the `<Events<T>>` list.
   * 
   *  The first key serves no purpose. This field is declared as double_map just
   *  for convenience of using `remove_prefix`.
   * 
   *  All topic vectors have deterministic storage locations depending on the topic. This
   *  allows light-clients to leverage the changes trie storage tracking mechanism and
   *  in case of changes fetch the list of events of interest.
   * 
   *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
   *  the `EventIndex` then in case if the topic has the same contents on the next block
   *  no notification will be triggered thus the event might be lost.
   */
  async getAsV1020(key1: null, key2: Uint8Array): Promise<[number, number][]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'EventTopics', key1, key2)
  }

  async getManyAsV1020(keys: [null, Uint8Array][]): Promise<([number, number][])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics', keys)
  }

  async getAllAsV1020(): Promise<([number, number][])[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics')
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
  get isV1038() {
    return this._chain.getStorageItemTypeHash('System', 'EventTopics') === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
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
  async getAsV1038(key: Uint8Array): Promise<[number, number][]> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'System', 'EventTopics', key)
  }

  async getManyAsV1038(keys: Uint8Array[]): Promise<([number, number][])[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics', keys.map(k => [k]))
  }

  async getAllAsV1038(): Promise<([number, number][])[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'EventTopics') != null
  }
}

export class SystemEventsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'e7ddb676a82c8e729cafa1d749d02ad4b3ce650ff1d4c4eef47b17f4beb492ed'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1020(): Promise<v1020.EventRecord[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1022() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '167fc51b7e496e5ba3b5b669c41706ea0c66646fea1b6e25976fb08dcd3765dc'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1022(): Promise<v1022.EventRecord[]> {
    assert(this.isV1022)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1027() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'a01a4528d7adcffde913c6abb9be23c8015de7399507c1a009e68dcaf2479c1a'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1027(): Promise<v1027.EventRecord[]> {
    assert(this.isV1027)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1029() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'dec24fe05b8ddec093191098fb2e3c100896d2e4cf3e5fc21a7cb1fa3e887fa1'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1029(): Promise<v1029.EventRecord[]> {
    assert(this.isV1029)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1030() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '6171b1eba8c2060d29056b0d192c61bab50b993b39a51c21e22bd6b0360d9979'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1030(): Promise<v1030.EventRecord[]> {
    assert(this.isV1030)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1031() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'dac90aaa3a9610942ec44fb8320441e40459387549e20f8d211dc3f4b5cbffec'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1031(): Promise<v1031.EventRecord[]> {
    assert(this.isV1031)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1032() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '4ea0904e6f354c891a702bb2250c79c344bbcf38fe94da3f45a6f375fbc0dcf2'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1032(): Promise<v1032.EventRecord[]> {
    assert(this.isV1032)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1038() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '05c38181c113d51120e01cc4341a22089566c95fe955c9342e5d7c6d1b5b6cbc'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1038(): Promise<v1038.EventRecord[]> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1040() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'e55480bbbc627795a9916f7bcc5cfb3a995d4094f390ba35920eec84808fbd49'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1040(): Promise<v1040.EventRecord[]> {
    assert(this.isV1040)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1042() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'fcbbc45be00439b3d5d444534f8f2ea61222875721635f2206d8f99e544dd674'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1042(): Promise<v1042.EventRecord[]> {
    assert(this.isV1042)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1045() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'cb85f7f47c3ed34ad3797653a9d04fd0de8f3fae76434c46cc95aadafb853853'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1045(): Promise<v1045.EventRecord[]> {
    assert(this.isV1045)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '361a737f048615aeb41893adc831abbcae8e09cc94b4dc5c0f909181787e4c08'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1050(): Promise<v1050.EventRecord[]> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1051() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'cae412d01be6ba77224f93f127851423c1fbbc5afde1765cce6fceff871e3cf7'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1051(): Promise<v1051.EventRecord[]> {
    assert(this.isV1051)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1058() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'c7e88ecf9cbe0231cd5631d89eb4de8a54f290e0e3ab419d4864fa1c03e44935'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1058(): Promise<v1058.EventRecord[]> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV1062() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '3f3a8e5a8d1c8490299ba8ae403c35dd67111039b845c429394065916b7fd1c1'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1062(): Promise<v1062.EventRecord[]> {
    assert(this.isV1062)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2005() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '5bab8a695b3953aaa5dc87b2ecef9bfb2c3e297bf67199a2ceb1749cd5e49fba'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2005(): Promise<v2005.EventRecord[]> {
    assert(this.isV2005)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2007() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '9c7eb4f2c6a7494f43260bf2704016b7c20ac1fefa211a33e4a2acae2a12ed9f'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2007(): Promise<v2007.EventRecord[]> {
    assert(this.isV2007)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2008() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '0e0b9b2ead5e3abef754ad6c8055630ea4a21c53f5885b801ac754510f49f917'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2008(): Promise<v2008.EventRecord[]> {
    assert(this.isV2008)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2011() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '752d4913fe8adfbdf9840ba5be8ebfa1f7b5a432226d96a28e04b8d7fd6ed591'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2011(): Promise<v2011.EventRecord[]> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2015() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '625c6dcfac7bc18a95d5ee6baf7eca543709b59a7efc8fa723e9cf4315c9a87d'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2015(): Promise<v2015.EventRecord[]> {
    assert(this.isV2015)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'ed6fbbbaf2ba32544361b2d98c76346ccd34ac534671e49d3645f8fb492cfcd2'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2023(): Promise<v2023.EventRecord[]> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2024() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '03f3330b4e744aecd41bdd9ea93fdea29a929bfb135027ef27f28389793f7db4'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2024(): Promise<v2024.EventRecord[]> {
    assert(this.isV2024)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '3e3d6fc8887586b17ec7821bceb33526a25bc057c486ddf1182f26454efdce65'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2025(): Promise<v2025.EventRecord[]> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2027() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'f445a7bae8c9e0f55a6c6158d076ba23f36516cd5b2161869fcaa06341f76f29'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2027(): Promise<v2027.EventRecord[]> {
    assert(this.isV2027)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '9249f1d2dd111b9f969c60906f3b01e8281f8298f52eaa3fb0d381854af9d84f'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2028(): Promise<v2028.EventRecord[]> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2029() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '4b66d7da6876d6edc7d108d7643e43949b1b4e30fd6a7fdec2321d9d72cbb586'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2029(): Promise<v2029.EventRecord[]> {
    assert(this.isV2029)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'db5a2163aa25b13908b953ae15d801ec79b14912af25e75408e74af0fec84f73'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV2030(): Promise<v2030.EventRecord[]> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'ff6ce749b913c8743a2b69b4f7d1a2e2d8bfb560d712920cd0815558c079128f'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV9010(): Promise<v9010.EventRecord[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV9040() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '27475c2957b106613afdd5735ebf0e83f826c846c0eb23702b10d214c1dd887c'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV9040(): Promise<v9040.EventRecord[]> {
    assert(this.isV9040)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '54fd6e75c0c55213c2feb45ff5b29c4b6b632be1d260797b5347806d72c619ab'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV9050(): Promise<v9050.EventRecord[]> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'c8fd4e971ce10710888abdf889538f5b48bd0ddd6ec7061961b354feefa3dd6e'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV9080(): Promise<v9080.EventRecord[]> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'c7f111394ce6b72261cd62aa09a932206df02a751b79dd3188b0d3d68ebd7d7d'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV9090(): Promise<v9090.EventRecord[]> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '7e6e8039d7e32c5e5b81d8250a66804484e3ce995eddf9fe9c0973c14a3423d8'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV9100(): Promise<v9100.EventRecord[]> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'd0c366c5c9a80bc443cc82a915794539bb08bef9cac53dd7041eed64c15f70d9'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV9111(): Promise<v9111.EventRecord[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV9122() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '097ff3b8447c84fc178683d6ee33627f1502319672f928d5aab7f7cf9cc9a15f'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV9122(): Promise<v9122.EventRecord[]> {
    assert(this.isV9122)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '2d0f09e7200b6276ca417c20ec85d6a8e7b3d85173ae3291c6cb8eed2b449582'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV9130(): Promise<v9130.EventRecord[]> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '64b9bab79f4e2c0520ca1dbe3309730dab4c1f7cf191e02ea4bf9fdb979f3541'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV9160(): Promise<v9160.EventRecord[]> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV9170() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '7153390f0591273ceafc52a8c9f871885ae10be25f8a9ee15638ace7a1b53165'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV9170(): Promise<v9170.EventRecord[]> {
    assert(this.isV9170)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'a4c85c4ea8e1bc3c70e1d3a28449b56537a956e433fc832616b65098d3540623'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV9180(): Promise<v9180.EventRecord[]> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'a1444ae173548d7fb64232afa01028dfd51933c03ada173db207417b06858633'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV9190(): Promise<v9190.EventRecord[]> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
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
  get isV9200() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'd9988836e681346ea8c10e932ac2177354ad7080633cd3a163971789521d7dde'
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
  async getAsV9200(): Promise<v9200.EventRecord[]> {
    assert(this.isV9200)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
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
  get isV9220() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'ebf788b56d6bdaadc9e4604f4e8d77cfc021a1e47b04635d65e9d78b5f501b88'
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
  async getAsV9220(): Promise<v9220.EventRecord[]> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
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
  get isV9230() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '602b25c440598f4fd7816aaaa28ddeef083c6aca72319e851e4eefba141c59b3'
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
  async getAsV9230(): Promise<v9230.EventRecord[]> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
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
  get isV9250() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '6cd6d416debb67cf768279a43b7063719baccb53682135e824961227d85b85c2'
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
  async getAsV9250(): Promise<v9250.EventRecord[]> {
    assert(this.isV9250)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
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
  get isV9260() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '9f26ac44ffc295e6e3952b1a283cadf3393d8b695f065866c16e51745388385b'
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
  async getAsV9260(): Promise<v9260.EventRecord[]> {
    assert(this.isV9260)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
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
  get isV9271() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'c3ac15cee7fa972edcf641e52bd89e966764d3211b629106a463cb22f4b8cc6f'
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
  async getAsV9271(): Promise<v9271.EventRecord[]> {
    assert(this.isV9271)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Events') != null
  }
}

export class SystemExecutionPhaseStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The execution phase of the block.
   */
  get isV1055() {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') === 'd79e80744c6939b13f7b8c45d8ea2656fb288e2987e1e58a3c0c8e3c80bc2040'
  }

  /**
   *  The execution phase of the block.
   */
  async getAsV1055(): Promise<v1055.Phase | undefined> {
    assert(this.isV1055)
    return this._chain.getStorage(this.blockHash, 'System', 'ExecutionPhase')
  }

  /**
   *  The execution phase of the block.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
  }

  /**
   *  The execution phase of the block.
   */
  async getAsV9111(): Promise<v9111.Phase | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'System', 'ExecutionPhase')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') != null
  }
}

export class SystemExtrinsicCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total extrinsics count for the current block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total extrinsics count for the current block.
   */
  async getAsV1020(): Promise<number | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') != null
  }
}

export class SystemExtrinsicDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  async getAsV1020(key: number): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicData', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'ExtrinsicData', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(Uint8Array)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'System', 'ExtrinsicData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') != null
  }
}

export class SystemExtrinsicsRootStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Extrinsics root of the current block, also part of the block header.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicsRoot') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Extrinsics root of the current block, also part of the block header.
   */
  async getAsV1020(): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicsRoot')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicsRoot') != null
  }
}

export class SystemLastRuntimeUpgradeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  get isV1053() {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  async getAsV1053(): Promise<v1053.LastRuntimeUpgradeInfo | undefined> {
    assert(this.isV1053)
    return this._chain.getStorage(this.blockHash, 'System', 'LastRuntimeUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') != null
  }
}

export class SystemNumberStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'Number') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'Number')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Number') != null
  }
}

export class SystemParentHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Hash of the previous block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Hash of the previous block.
   */
  async getAsV1020(): Promise<Uint8Array> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'System', 'ParentHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') != null
  }
}

export class SystemRuntimeUpgradedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A bool to track if the runtime was upgraded last block.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('System', 'RuntimeUpgraded') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  A bool to track if the runtime was upgraded last block.
   */
  async getAsV1050(): Promise<boolean> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'System', 'RuntimeUpgraded')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'RuntimeUpgraded') != null
  }
}

export class SystemUpgradedToDualRefCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
   *  (default) if not.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToDualRefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
   *  (default) if not.
   */
  async getAsV2028(): Promise<boolean> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToDualRefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToDualRefCount') != null
  }
}

export class SystemUpgradedToTripleRefCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  async getAsV2030(): Promise<boolean> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToTripleRefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') != null
  }
}

export class SystemUpgradedToU32RefCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  async getAsV2025(): Promise<boolean> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToU32RefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') != null
  }
}

export class TechnicalCommitteeMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV9111(): Promise<Uint8Array[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Members') != null
  }
}

export class TechnicalCommitteePrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsV9111(): Promise<Uint8Array | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Prime') != null
  }
}

export class TechnicalCommitteeProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV9111(): Promise<number> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalCount') != null
  }
}

export class TechnicalCommitteeProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.Call | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.Call | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Call)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9122() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9122(key: Uint8Array): Promise<v9122.Call | undefined> {
    assert(this.isV9122)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9122(keys: Uint8Array[]): Promise<(v9122.Call | undefined)[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9122(): Promise<(v9122.Call)[]> {
    assert(this.isV9122)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9130() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '000fa9eac9f34fd52e1de16af6c8184e689b16aff5b69e5b770310c6592b9a23'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9130(key: Uint8Array): Promise<v9130.Call | undefined> {
    assert(this.isV9130)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9130(keys: Uint8Array[]): Promise<(v9130.Call | undefined)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9130(): Promise<(v9130.Call)[]> {
    assert(this.isV9130)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ae191f57edfafa0ed77684f6c6956e661698f7626fcceabc35fc02aa204fc327'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9160(key: Uint8Array): Promise<v9160.Call | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9160(keys: Uint8Array[]): Promise<(v9160.Call | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.Call)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '92131b74d89cee349edae227d67d4039f396e38796421ef6ccad698229d1be87'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9170(key: Uint8Array): Promise<v9170.Call | undefined> {
    assert(this.isV9170)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9170(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9170(): Promise<(v9170.Call)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '75d269266869aab19a7c849bd16e82439d759218a7ceb76d9d44ca8913eac77b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9180(key: Uint8Array): Promise<v9180.Call | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9180(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9180(): Promise<(v9180.Call)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ad90492cf87d0e7973eb29afcc4224fdcd5cea7edbc9f874a78e09ffb7af764a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9190(key: Uint8Array): Promise<v9190.Call | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9190(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9190(): Promise<(v9190.Call)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '4364e985a64c3f6addf377d90f061349553d92fcbc29839df8b7cde1ec346b0c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9220(key: Uint8Array): Promise<v9220.Call | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9220(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9220(): Promise<(v9220.Call)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '60a712e8f852a3af336091a63ce735a781e9f17a09e4fb3ea560e93a76c19d2e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9230(key: Uint8Array): Promise<v9230.Call | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9230(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9230(): Promise<(v9230.Call)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9250() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'c62c655cbb15038afffc766086c6f698f366a8695bacaa50b3b5b2d97d4b89f5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9250(key: Uint8Array): Promise<v9250.Call | undefined> {
    assert(this.isV9250)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9250(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9250(): Promise<(v9250.Call)[]> {
    assert(this.isV9250)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9271() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'b6f7b824ac82eac6e00f10809e508dfaacd22dda3aeafc8c9374020bd69d27ad'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9271(key: Uint8Array): Promise<v9271.Call | undefined> {
    assert(this.isV9271)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9271(keys: Uint8Array[]): Promise<(v9271.Call | undefined)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV9271(): Promise<(v9271.Call)[]> {
    assert(this.isV9271)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') != null
  }
}

export class TechnicalCommitteeProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The hashes of the active proposals.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV9111(): Promise<Uint8Array[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Proposals') != null
  }
}

export class TechnicalCommitteeVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.Votes | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Voting', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.Votes | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.Votes)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Voting') != null
  }
}

export class TechnicalMembershipMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  async getAsV9111(): Promise<Uint8Array[]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TechnicalMembership', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Members') != null
  }
}

export class TechnicalMembershipPrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current prime member, if one exists.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The current prime member, if one exists.
   */
  async getAsV9111(): Promise<Uint8Array | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TechnicalMembership', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Prime') != null
  }
}

export class TimestampDidUpdateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  async getAsV1020(): Promise<boolean> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Timestamp', 'DidUpdate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') != null
  }
}

export class TimestampNowStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current time for the current block.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'Now') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  Current time for the current block.
   */
  async getAsV1020(): Promise<bigint> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Timestamp', 'Now')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Timestamp', 'Now') != null
  }
}

export class TipsReasonsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Tips', 'Reasons') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  async getAsV9111(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Reasons', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Reasons', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(Uint8Array)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Reasons')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tips', 'Reasons') != null
  }
}

export class TipsTipsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.OpenTip | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Tips', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.OpenTip | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.OpenTip)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') != null
  }
}

export class TransactionPaymentNextFeeMultiplierStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1052() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') === '3c9260c078e57deb94e3d10dca1995a3263c48d53634c311a3537412486bb35e'
  }

  async getAsV1052(): Promise<bigint> {
    assert(this.isV1052)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'NextFeeMultiplier')
  }

  get isV1058() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') === '8840628264db1877ef5c3718a00459d4b519de0922f813836237f71320a25aa6'
  }

  async getAsV1058(): Promise<bigint> {
    assert(this.isV1058)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'NextFeeMultiplier')
  }

  get isV9111() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  async getAsV9111(): Promise<bigint> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'NextFeeMultiplier')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') != null
  }
}

export class TransactionPaymentStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV2011() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
  }

  async getAsV2011(): Promise<v2011.Releases> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'StorageVersion')
  }

  get isV9111() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
  }

  async getAsV9111(): Promise<v9111.Type_199> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') != null
  }
}

export class TreasuryApprovalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposal indices that have been approved but not yet awarded.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Approvals') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Proposal indices that have been approved but not yet awarded.
   */
  async getAsV1020(): Promise<number[]> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Approvals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Approvals') != null
  }
}

export class TreasuryBountiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Bounties that have been made.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Bounties') === '338c03a838c88e6ae3cb2011fbe2c50c23c1a14bcea7cd6606cc95ea0a3a18ab'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV2025(key: number): Promise<v2025.Bounty | undefined> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Bounties', key)
  }

  async getManyAsV2025(keys: number[]): Promise<(v2025.Bounty | undefined)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Bounties', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(v2025.Bounty)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Bounties')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Bounties') != null
  }
}

export class TreasuryBountyApprovalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Bounty indices that have been approved but not yet funded.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyApprovals') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Bounty indices that have been approved but not yet funded.
   */
  async getAsV2025(): Promise<number[]> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'BountyApprovals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyApprovals') != null
  }
}

export class TreasuryBountyCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of bounty proposals that have been made.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of bounty proposals that have been made.
   */
  async getAsV2025(): Promise<number> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'BountyCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyCount') != null
  }
}

export class TreasuryBountyDescriptionsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The description of each bounty.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each bounty.
   */
  async getAsV2025(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'BountyDescriptions', key)
  }

  async getManyAsV2025(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'BountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV2025(): Promise<(Uint8Array)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'BountyDescriptions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyDescriptions') != null
  }
}

export class TreasuryProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of proposals that have been made.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Treasury', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of proposals that have been made.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'ProposalCount') != null
  }
}

export class TreasuryProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals that have been made.
   */
  get isV1020() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV1020(key: number): Promise<v1020.TreasuryProposal | undefined> {
    assert(this.isV1020)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV1020(keys: number[]): Promise<(v1020.TreasuryProposal | undefined)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  async getAllAsV1020(): Promise<(v1020.TreasuryProposal)[]> {
    assert(this.isV1020)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}

export class TreasuryReasonsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  get isV1038() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Reasons') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  async getAsV1038(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Reasons', key)
  }

  async getManyAsV1038(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Reasons', keys.map(k => [k]))
  }

  async getAllAsV1038(): Promise<(Uint8Array)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Reasons')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Reasons') != null
  }
}

export class TreasuryTipsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV1038() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV1038(key: Uint8Array): Promise<v1038.OpenTip | undefined> {
    assert(this.isV1038)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV1038(keys: Uint8Array[]): Promise<(v1038.OpenTip | undefined)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  async getAllAsV1038(): Promise<(v1038.OpenTip)[]> {
    assert(this.isV1038)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips')
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV2013(key: Uint8Array): Promise<v2013.OpenTip | undefined> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV2013(keys: Uint8Array[]): Promise<(v2013.OpenTip | undefined)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  async getAllAsV2013(): Promise<(v2013.OpenTip)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}

export class UmpNeedsDispatchStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
   * 
   *  Invariant:
   *  - The set of items from this vector should be exactly the set of the keys in
   *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Ump', 'NeedsDispatch') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
   * 
   *  Invariant:
   *  - The set of items from this vector should be exactly the set of the keys in
   *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
   */
  async getAsV9010(): Promise<number[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Ump', 'NeedsDispatch')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Ump', 'NeedsDispatch') != null
  }
}

export class UmpNextDispatchRoundStartWithStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  This is the para that gets will get dispatched first during the next upward dispatchable queue
   *  execution round.
   * 
   *  Invariant:
   *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Ump', 'NextDispatchRoundStartWith') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  This is the para that gets will get dispatched first during the next upward dispatchable queue
   *  execution round.
   * 
   *  Invariant:
   *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
   */
  async getAsV9010(): Promise<number | undefined> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Ump', 'NextDispatchRoundStartWith')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Ump', 'NextDispatchRoundStartWith') != null
  }
}

export class UmpOverweightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The messages that exceeded max individual message weight budget.
   * 
   *  These messages stay there until manually dispatched.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('Ump', 'Overweight') === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
  }

  /**
   *  The messages that exceeded max individual message weight budget.
   * 
   *  These messages stay there until manually dispatched.
   */
  async getAsV9100(key: bigint): Promise<[number, Uint8Array] | undefined> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'Ump', 'Overweight', key)
  }

  async getManyAsV9100(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Ump', 'Overweight', keys.map(k => [k]))
  }

  async getAllAsV9100(): Promise<([number, Uint8Array])[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Ump', 'Overweight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Ump', 'Overweight') != null
  }
}

export class UmpOverweightCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
   *  index).
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('Ump', 'OverweightCount') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
   *  index).
   */
  async getAsV9100(): Promise<bigint> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'Ump', 'OverweightCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Ump', 'OverweightCount') != null
  }
}

export class UmpRelayDispatchQueueSizeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
   * 
   *  First item in the tuple is the count of messages and second
   *  is the total length (in bytes) of the message payloads.
   * 
   *  Note that this is an auxilary mapping: it's possible to tell the byte size and the number of
   *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
   *  loading the whole message queue if only the total size and count are required.
   * 
   *  Invariant:
   *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Ump', 'RelayDispatchQueueSize') === '11d84eadab69be0e8dde14b70110d550deeab55868bd2bc91f3c1cf340a76ef8'
  }

  /**
   *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
   * 
   *  First item in the tuple is the count of messages and second
   *  is the total length (in bytes) of the message payloads.
   * 
   *  Note that this is an auxilary mapping: it's possible to tell the byte size and the number of
   *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
   *  loading the whole message queue if only the total size and count are required.
   * 
   *  Invariant:
   *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
   */
  async getAsV9010(key: number): Promise<[number, number]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Ump', 'RelayDispatchQueueSize', key)
  }

  async getManyAsV9010(keys: number[]): Promise<([number, number])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Ump', 'RelayDispatchQueueSize', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<([number, number])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Ump', 'RelayDispatchQueueSize')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Ump', 'RelayDispatchQueueSize') != null
  }
}

export class UmpRelayDispatchQueuesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
   * 
   *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
   *  channel management messages.
   * 
   *  The messages are processed in FIFO order.
   */
  get isV9010() {
    return this._chain.getStorageItemTypeHash('Ump', 'RelayDispatchQueues') === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
  }

  /**
   *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
   * 
   *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
   *  channel management messages.
   * 
   *  The messages are processed in FIFO order.
   */
  async getAsV9010(key: number): Promise<Uint8Array[]> {
    assert(this.isV9010)
    return this._chain.getStorage(this.blockHash, 'Ump', 'RelayDispatchQueues', key)
  }

  async getManyAsV9010(keys: number[]): Promise<(Uint8Array[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Ump', 'RelayDispatchQueues', keys.map(k => [k]))
  }

  async getAllAsV9010(): Promise<(Uint8Array[])[]> {
    assert(this.isV9010)
    return this._chain.queryStorage(this.blockHash, 'Ump', 'RelayDispatchQueues')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Ump', 'RelayDispatchQueues') != null
  }
}

export class UtilityMultisigsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of open multisig operations.
   */
  get isV1032() {
    return this._chain.getStorageItemTypeHash('Utility', 'Multisigs') === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
  }

  /**
   *  The set of open multisig operations.
   */
  async getAsV1032(key1: Uint8Array, key2: Uint8Array): Promise<v1032.Multisig | undefined> {
    assert(this.isV1032)
    return this._chain.getStorage(this.blockHash, 'Utility', 'Multisigs', key1, key2)
  }

  async getManyAsV1032(keys: [Uint8Array, Uint8Array][]): Promise<(v1032.Multisig | undefined)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Utility', 'Multisigs', keys)
  }

  async getAllAsV1032(): Promise<(v1032.Multisig)[]> {
    assert(this.isV1032)
    return this._chain.queryStorage(this.blockHash, 'Utility', 'Multisigs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Utility', 'Multisigs') != null
  }
}

export class VestingStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with latest version, as determined by the genesis build.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Vesting', 'StorageVersion') === '5370c514276f3735e13df7db1f1bbacaba918c365a3ed949597f7ce091eeb77e'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with latest version, as determined by the genesis build.
   */
  async getAsV9111(): Promise<v9111.Type_568> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Vesting', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Vesting', 'StorageVersion') != null
  }
}

export class VestingVestingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information regarding the vesting of a given account.
   */
  get isV1050() {
    return this._chain.getStorageItemTypeHash('Vesting', 'Vesting') === '04a3bd3844d81bd0b622c91e507de0014c997b5d7949e81b50c1607437b412fa'
  }

  /**
   *  Information regarding the vesting of a given account.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.VestingInfo | undefined> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'Vesting', 'Vesting', key)
  }

  async getManyAsV1050(keys: Uint8Array[]): Promise<(v1050.VestingInfo | undefined)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'Vesting', keys.map(k => [k]))
  }

  async getAllAsV1050(): Promise<(v1050.VestingInfo)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'Vesting')
  }

  /**
   *  Information regarding the vesting of a given account.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('Vesting', 'Vesting') === '22ac0db91087ba9b3f5dee769d5e3398f8c8c045cabf7f6585992df66dba74db'
  }

  /**
   *  Information regarding the vesting of a given account.
   */
  async getAsV9111(key: Uint8Array): Promise<v9111.VestingInfo[] | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'Vesting', 'Vesting', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(v9111.VestingInfo[] | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'Vesting', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.VestingInfo[])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'Vesting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Vesting', 'Vesting') != null
  }
}

export class VoterListCounterForListNodesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   * Counter for the related counted storage map
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('VoterList', 'CounterForListNodes') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   * Counter for the related counted storage map
   */
  async getAsV9230(): Promise<number> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'VoterList', 'CounterForListNodes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VoterList', 'CounterForListNodes') != null
  }
}

export class VoterListListBagsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A bag stored in storage.
   * 
   *  Stores a `Bag` struct, which stores head and tail pointers to itself.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('VoterList', 'ListBags') === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
  }

  /**
   *  A bag stored in storage.
   * 
   *  Stores a `Bag` struct, which stores head and tail pointers to itself.
   */
  async getAsV9230(key: bigint): Promise<v9230.Bag | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'VoterList', 'ListBags', key)
  }

  async getManyAsV9230(keys: bigint[]): Promise<(v9230.Bag | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'VoterList', 'ListBags', keys.map(k => [k]))
  }

  async getAllAsV9230(): Promise<(v9230.Bag)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'VoterList', 'ListBags')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VoterList', 'ListBags') != null
  }
}

export class VoterListListNodesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A single node, within some bag.
   * 
   *  Nodes store links forward and back within their respective bags.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('VoterList', 'ListNodes') === 'd750de9f70dc579f36482219336f529b62912998b5a4be0a48c69cf3c6158042'
  }

  /**
   *  A single node, within some bag.
   * 
   *  Nodes store links forward and back within their respective bags.
   */
  async getAsV9230(key: Uint8Array): Promise<v9230.Node | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'VoterList', 'ListNodes', key)
  }

  async getManyAsV9230(keys: Uint8Array[]): Promise<(v9230.Node | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'VoterList', 'ListNodes', keys.map(k => [k]))
  }

  async getAllAsV9230(): Promise<(v9230.Node)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'VoterList', 'ListNodes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VoterList', 'ListNodes') != null
  }
}

export class XcmPalletAssetTrapsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The existing asset traps.
   * 
   *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
   *  times this pair has been trapped (usually just 1 if it exists at all).
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'AssetTraps') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  The existing asset traps.
   * 
   *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
   *  times this pair has been trapped (usually just 1 if it exists at all).
   */
  async getAsV9111(key: Uint8Array): Promise<number> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'AssetTraps', key)
  }

  async getManyAsV9111(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'AssetTraps', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(number)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'AssetTraps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'AssetTraps') != null
  }
}

export class XcmPalletCurrentMigrationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current migration's stage, if any.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'CurrentMigration') === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
  }

  /**
   *  The current migration's stage, if any.
   */
  async getAsV9111(): Promise<v9111.VersionMigrationStage | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'CurrentMigration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'CurrentMigration') != null
  }
}

export class XcmPalletQueriesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The ongoing queries.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'Queries') === 'ae8e3438dd16f0912a0a76dfeb9e62216e42277085497217b9181be5bd15251e'
  }

  /**
   *  The ongoing queries.
   */
  async getAsV9111(key: bigint): Promise<v9111.QueryStatus | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'Queries', key)
  }

  async getManyAsV9111(keys: bigint[]): Promise<(v9111.QueryStatus | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'Queries', keys.map(k => [k]))
  }

  async getAllAsV9111(): Promise<(v9111.QueryStatus)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'Queries')
  }

  /**
   *  The ongoing queries.
   */
  get isV9160() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'Queries') === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
  }

  /**
   *  The ongoing queries.
   */
  async getAsV9160(key: bigint): Promise<v9160.QueryStatus | undefined> {
    assert(this.isV9160)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'Queries', key)
  }

  async getManyAsV9160(keys: bigint[]): Promise<(v9160.QueryStatus | undefined)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'Queries', keys.map(k => [k]))
  }

  async getAllAsV9160(): Promise<(v9160.QueryStatus)[]> {
    assert(this.isV9160)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'Queries')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'Queries') != null
  }
}

export class XcmPalletQueryCounterStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The latest available query index.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'QueryCounter') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The latest available query index.
   */
  async getAsV9111(): Promise<bigint> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'QueryCounter')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'QueryCounter') != null
  }
}

export class XcmPalletSafeXcmVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Default version to encode XCM when latest version of destination is unknown. If `None`,
   *  then the destinations whose XCM version is unknown are considered unreachable.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'SafeXcmVersion') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Default version to encode XCM when latest version of destination is unknown. If `None`,
   *  then the destinations whose XCM version is unknown are considered unreachable.
   */
  async getAsV9111(): Promise<number | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'SafeXcmVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'SafeXcmVersion') != null
  }
}

export class XcmPalletSupportedVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The Latest versions that we know various locations support.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'SupportedVersion') === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
  }

  /**
   *  The Latest versions that we know various locations support.
   */
  async getAsV9111(key1: number, key2: v9111.VersionedMultiLocation): Promise<number | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'SupportedVersion', key1, key2)
  }

  async getManyAsV9111(keys: [number, v9111.VersionedMultiLocation][]): Promise<(number | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'SupportedVersion', keys)
  }

  async getAllAsV9111(): Promise<(number)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'SupportedVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'SupportedVersion') != null
  }
}

export class XcmPalletVersionDiscoveryQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
   *  the `u32` counter is the number of times that a send to the destination has been attempted,
   *  which is used as a prioritization.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'VersionDiscoveryQueue') === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
  }

  /**
   *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
   *  the `u32` counter is the number of times that a send to the destination has been attempted,
   *  which is used as a prioritization.
   */
  async getAsV9111(): Promise<[v9111.VersionedMultiLocation, number][]> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'VersionDiscoveryQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'VersionDiscoveryQueue') != null
  }
}

export class XcmPalletVersionNotifiersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All locations that we have requested version notifications from.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'VersionNotifiers') === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
  }

  /**
   *  All locations that we have requested version notifications from.
   */
  async getAsV9111(key1: number, key2: v9111.VersionedMultiLocation): Promise<bigint | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'VersionNotifiers', key1, key2)
  }

  async getManyAsV9111(keys: [number, v9111.VersionedMultiLocation][]): Promise<(bigint | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'VersionNotifiers', keys)
  }

  async getAllAsV9111(): Promise<(bigint)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'VersionNotifiers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'VersionNotifiers') != null
  }
}

export class XcmPalletVersionNotifyTargetsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The target locations that are subscribed to our version changes, as well as the most recent
   *  of our versions we informed them of.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'VersionNotifyTargets') === '48df7a99b459964c08376e5a66bc7e3e0a1ecd5fdcc5ace72223082b375da912'
  }

  /**
   *  The target locations that are subscribed to our version changes, as well as the most recent
   *  of our versions we informed them of.
   */
  async getAsV9100(key1: number, key2: v9100.VersionedMultiLocation): Promise<[bigint, bigint, number] | undefined> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'VersionNotifyTargets', key1, key2)
  }

  async getManyAsV9100(keys: [number, v9100.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'VersionNotifyTargets', keys)
  }

  async getAllAsV9100(): Promise<([bigint, bigint, number])[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'VersionNotifyTargets')
  }

  /**
   *  The target locations that are subscribed to our version changes, as well as the most recent
   *  of our versions we informed them of.
   */
  get isV9111() {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'VersionNotifyTargets') === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
  }

  /**
   *  The target locations that are subscribed to our version changes, as well as the most recent
   *  of our versions we informed them of.
   */
  async getAsV9111(key1: number, key2: v9111.VersionedMultiLocation): Promise<[bigint, bigint, number] | undefined> {
    assert(this.isV9111)
    return this._chain.getStorage(this.blockHash, 'XcmPallet', 'VersionNotifyTargets', key1, key2)
  }

  async getManyAsV9111(keys: [number, v9111.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'VersionNotifyTargets', keys)
  }

  async getAllAsV9111(): Promise<([bigint, bigint, number])[]> {
    assert(this.isV9111)
    return this._chain.queryStorage(this.blockHash, 'XcmPallet', 'VersionNotifyTargets')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmPallet', 'VersionNotifyTargets') != null
  }
}
