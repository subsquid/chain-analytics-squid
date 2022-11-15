import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v1 from './v1'
import * as v801 from './v801'
import * as v802 from './v802'
import * as v803 from './v803'
import * as v804 from './v804'
import * as v805 from './v805'
import * as v900 from './v900'
import * as v901 from './v901'
import * as v902 from './v902'
import * as v906 from './v906'
import * as v908 from './v908'
import * as v910 from './v910'
import * as v912 from './v912'
import * as v914 from './v914'
import * as v915 from './v915'
import * as v916 from './v916'
import * as v918 from './v918'
import * as v920 from './v920'
import * as v922 from './v922'
import * as v923 from './v923'
import * as v925 from './v925'
import * as v926 from './v926'
import * as v927 from './v927'
import * as v930 from './v930'
import * as v932 from './v932'
import * as v940 from './v940'
import * as v942 from './v942'
import * as v944 from './v944'
import * as v946 from './v946'
import * as v948 from './v948'
import * as v952 from './v952'
import * as v954 from './v954'
import * as v956 from './v956'
import * as v958 from './v958'
import * as v962 from './v962'
import * as v964 from './v964'

export class AssetRegistryAssetMetadatasStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The storages for AssetMetadatas.
   * 
   *  AssetMetadatas: map AssetIds => Option<AssetMetadata>
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetMetadatas') === '86a5bc9d9df8bfeb6adfff34ed6f30d181d2949cc3b9a0f4a3217068b970a359'
  }

  /**
   *  The storages for AssetMetadatas.
   * 
   *  AssetMetadatas: map AssetIds => Option<AssetMetadata>
   */
  async getAsV932(key: v932.AssetIds): Promise<v932.AssetMetadata | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas', key)
  }

  async getManyAsV932(keys: v932.AssetIds[]): Promise<(v932.AssetMetadata | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.AssetMetadata)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas')
  }

  /**
   *  The storages for AssetMetadatas.
   * 
   *  AssetMetadatas: map AssetIds => Option<AssetMetadata>
   */
  get isV948() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetMetadatas') === '5eb2f27e707e2504c8ca45382c58a5fe334381b0abe096b0307f46cd97091f72'
  }

  /**
   *  The storages for AssetMetadatas.
   * 
   *  AssetMetadatas: map AssetIds => Option<AssetMetadata>
   */
  async getAsV948(key: v948.AssetIds): Promise<v948.AssetMetadata | undefined> {
    assert(this.isV948)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas', key)
  }

  async getManyAsV948(keys: v948.AssetIds[]): Promise<(v948.AssetMetadata | undefined)[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas', keys.map(k => [k]))
  }

  async getAllAsV948(): Promise<(v948.AssetMetadata)[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas')
  }

  /**
   *  The storages for AssetMetadatas.
   * 
   *  AssetMetadatas: map AssetIds => Option<AssetMetadata>
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetMetadatas') === 'bbf105e9634f35985932ee0f49ed894353bc13dbb58a048e03fa9f83f986180f'
  }

  /**
   *  The storages for AssetMetadatas.
   * 
   *  AssetMetadatas: map AssetIds => Option<AssetMetadata>
   */
  async getAsV956(key: v956.AssetIds): Promise<v956.AssetMetadata | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas', key)
  }

  async getManyAsV956(keys: v956.AssetIds[]): Promise<(v956.AssetMetadata | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.AssetMetadata)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas')
  }

  /**
   *  The storages for AssetMetadatas.
   * 
   *  AssetMetadatas: map AssetIds => Option<AssetMetadata>
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetMetadatas') === '3e7f0d5b72a0b592c6238fc4578dc9f187bf447fb9fcf423f2d73ba9bf5df4ce'
  }

  /**
   *  The storages for AssetMetadatas.
   * 
   *  AssetMetadatas: map AssetIds => Option<AssetMetadata>
   */
  async getAsV962(key: v962.AssetIds): Promise<v962.AssetMetadata | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas', key)
  }

  async getManyAsV962(keys: v962.AssetIds[]): Promise<(v962.AssetMetadata | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.AssetMetadata)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadatas')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetMetadatas') != null
  }
}

export class AssetRegistryCurrencyIdToLocationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The storages for MultiLocations.
   * 
   *  CurrencyIdToLocations: map CurrencyId => Option<MultiLocation>
   */
  get isV948() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyIdToLocations') === '8891384285d28a359fa5e7c71e0feb182d82b07e4bb56049b2e74beb8cd4b265'
  }

  /**
   *  The storages for MultiLocations.
   * 
   *  CurrencyIdToLocations: map CurrencyId => Option<MultiLocation>
   */
  async getAsV948(key: v948.CurrencyId): Promise<v948.V1MultiLocation | undefined> {
    assert(this.isV948)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToLocations', key)
  }

  async getManyAsV948(keys: v948.CurrencyId[]): Promise<(v948.V1MultiLocation | undefined)[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToLocations', keys.map(k => [k]))
  }

  async getAllAsV948(): Promise<(v948.V1MultiLocation)[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToLocations')
  }

  /**
   *  The storages for MultiLocations.
   * 
   *  CurrencyIdToLocations: map CurrencyId => Option<MultiLocation>
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyIdToLocations') === '14532a0382117701ae2a8993dde22f6c60654306ad36ccb3f70fa038b4091511'
  }

  /**
   *  The storages for MultiLocations.
   * 
   *  CurrencyIdToLocations: map CurrencyId => Option<MultiLocation>
   */
  async getAsV956(key: v956.CurrencyId): Promise<v956.V1MultiLocation | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToLocations', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(v956.V1MultiLocation | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToLocations', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.V1MultiLocation)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToLocations')
  }

  /**
   *  The storages for MultiLocations.
   * 
   *  CurrencyIdToLocations: map CurrencyId => Option<MultiLocation>
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyIdToLocations') === 'fa26b7cdf59f1ce910381680acbe560687b3e6ef57a54f15344e8296d5692afc'
  }

  /**
   *  The storages for MultiLocations.
   * 
   *  CurrencyIdToLocations: map CurrencyId => Option<MultiLocation>
   */
  async getAsV962(key: v962.CurrencyId): Promise<v962.V1MultiLocation | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToLocations', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(v962.V1MultiLocation | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToLocations', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.V1MultiLocation)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToLocations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyIdToLocations') != null
  }
}

export class AssetRegistryCurrencyIdToWeightsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyIdToWeights') === '7b56e8f9aec93bcd89f631aaa1b73c63d61ce42680b727a6c132230b655e8e55'
  }

  async getAsV956(key: v956.CurrencyId): Promise<bigint | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToWeights', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(bigint | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToWeights', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToWeights')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyIdToWeights') === '66342e8e9a83afef2ca06ff6c297619796ad3a74eda5324ec9360360a38542b3'
  }

  async getAsV962(key: v962.CurrencyId): Promise<bigint | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToWeights', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(bigint | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToWeights', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyIdToWeights')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyIdToWeights') != null
  }
}

export class AssetRegistryCurrencyMetadatasStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The storages for AssetMetadata.
   * 
   *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyMetadatas') === 'e08bc4f3aa66be2b3c650bc88441394e425e6447384c7f6022be4cc6f0185f8c'
  }

  /**
   *  The storages for AssetMetadata.
   * 
   *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
   */
  async getAsV956(key: v956.CurrencyId): Promise<v956.AssetMetadata | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'CurrencyMetadatas', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(v956.AssetMetadata | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyMetadatas', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.AssetMetadata)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyMetadatas')
  }

  /**
   *  The storages for AssetMetadata.
   * 
   *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyMetadatas') === '9119afad27c100216eed976bb02714bc032591d19a759cdbc209d5dc868aa7b2'
  }

  /**
   *  The storages for AssetMetadata.
   * 
   *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
   */
  async getAsV962(key: v962.CurrencyId): Promise<v962.AssetMetadata | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'CurrencyMetadatas', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(v962.AssetMetadata | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyMetadatas', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.AssetMetadata)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'CurrencyMetadatas')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'CurrencyMetadatas') != null
  }
}

export class AssetRegistryForeignAssetLocationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The storages for MultiLocations.
   * 
   *  ForeignAssetLocations: map ForeignAssetId => Option<MultiLocation>
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'ForeignAssetLocations') === '58dfe00b72f07bf6cab7f6a9e09ab29eb1bddff4ba0c36924d0917313958bca6'
  }

  /**
   *  The storages for MultiLocations.
   * 
   *  ForeignAssetLocations: map ForeignAssetId => Option<MultiLocation>
   */
  async getAsV932(key: number): Promise<v932.V1MultiLocation | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'ForeignAssetLocations', key)
  }

  async getManyAsV932(keys: number[]): Promise<(v932.V1MultiLocation | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'ForeignAssetLocations', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.V1MultiLocation)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'ForeignAssetLocations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'ForeignAssetLocations') != null
  }
}

export class AssetRegistryLocationToCurrencyIdsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The storages for CurrencyIds.
   * 
   *  LocationToCurrencyIds: map MultiLocation => Option<CurrencyId>
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LocationToCurrencyIds') === '4b2088b5460db9763bf1df98cbd61cd17eb418be0c97532553a74ca2ca5cc693'
  }

  /**
   *  The storages for CurrencyIds.
   * 
   *  LocationToCurrencyIds: map MultiLocation => Option<CurrencyId>
   */
  async getAsV932(key: v932.V1MultiLocation): Promise<v932.CurrencyId | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'LocationToCurrencyIds', key)
  }

  async getManyAsV932(keys: v932.V1MultiLocation[]): Promise<(v932.CurrencyId | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationToCurrencyIds', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.CurrencyId)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationToCurrencyIds')
  }

  /**
   *  The storages for CurrencyIds.
   * 
   *  LocationToCurrencyIds: map MultiLocation => Option<CurrencyId>
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LocationToCurrencyIds') === '9fda4e775df504ea3ac268333eb697c3d196338f2d9e620687f560dd5d35af24'
  }

  /**
   *  The storages for CurrencyIds.
   * 
   *  LocationToCurrencyIds: map MultiLocation => Option<CurrencyId>
   */
  async getAsV956(key: v956.V1MultiLocation): Promise<v956.CurrencyId | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'LocationToCurrencyIds', key)
  }

  async getManyAsV956(keys: v956.V1MultiLocation[]): Promise<(v956.CurrencyId | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationToCurrencyIds', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.CurrencyId)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationToCurrencyIds')
  }

  /**
   *  The storages for CurrencyIds.
   * 
   *  LocationToCurrencyIds: map MultiLocation => Option<CurrencyId>
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LocationToCurrencyIds') === '900a28264916de91dc6431aff8c1492aa33b450acd84c6bce063ef7b7c730f4a'
  }

  /**
   *  The storages for CurrencyIds.
   * 
   *  LocationToCurrencyIds: map MultiLocation => Option<CurrencyId>
   */
  async getAsV962(key: v962.V1MultiLocation): Promise<v962.CurrencyId | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'LocationToCurrencyIds', key)
  }

  async getManyAsV962(keys: v962.V1MultiLocation[]): Promise<(v962.CurrencyId | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationToCurrencyIds', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.CurrencyId)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationToCurrencyIds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LocationToCurrencyIds') != null
  }
}

export class AssetRegistryNextForeignAssetIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Next available Foreign AssetId ID.
   * 
   *  NextForeignAssetId: ForeignAssetId
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'NextForeignAssetId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Next available Foreign AssetId ID.
   * 
   *  NextForeignAssetId: ForeignAssetId
   */
  async getAsV932(): Promise<number> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'NextForeignAssetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'NextForeignAssetId') != null
  }
}

export class AssetRegistryNextTokenIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Next available TokenId ID.
   * 
   *  NextTokenId: TokenId
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'NextTokenId') === '8b3376fac84361c8fa9d2d145fe641638bab307a3907f7668e9b00eb0cf1f864'
  }

  /**
   *  Next available TokenId ID.
   * 
   *  NextTokenId: TokenId
   */
  async getAsV956(): Promise<number> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'NextTokenId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'NextTokenId') != null
  }
}

export class AuraAuthoritiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current authority set.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Aura', 'Authorities') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current authority set.
   */
  async getAsV1(): Promise<Uint8Array[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Aura', 'Authorities')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Aura', 'Authorities') != null
  }
}

export class AuraCurrentSlotStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current slot of this block.
   * 
   *  This will be set in `on_initialize`.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Aura', 'CurrentSlot') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The current slot of this block.
   * 
   *  This will be set in `on_initialize`.
   */
  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Aura', 'CurrentSlot')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Aura', 'CurrentSlot') != null
  }
}

export class AuraExtAuthoritiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Serves as cache for the authorities.
   * 
   *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
   *  but we require the old authorities to verify the seal when validating a PoV. This will always
   *  be updated to the latest AuRa authorities in `on_finalize`.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('AuraExt', 'Authorities') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  Serves as cache for the authorities.
   * 
   *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
   *  but we require the old authorities to verify the seal when validating a PoV. This will always
   *  be updated to the latest AuRa authorities in `on_finalize`.
   */
  async getAsV1(): Promise<Uint8Array[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'AuraExt', 'Authorities')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AuraExt', 'Authorities') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Author') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  Author of current block.
   */
  async getAsV1(): Promise<Uint8Array | undefined> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Authorship', 'DidSetUncles') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Whether uncles were already set in this block.
   */
  async getAsV1(): Promise<boolean> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') === 'e10c952327a3967ba23352da69594b66914b44ebcef7e4703bb69fed952ecdd6'
  }

  /**
   *  Uncles
   */
  async getAsV1(): Promise<v1.UncleEntryItem[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'Uncles')
  }

  /**
   *  Uncles
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
  }

  /**
   *  Uncles
   */
  async getAsV906(): Promise<v906.UncleEntryItem[]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'Uncles')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') != null
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
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsV1(key: Uint8Array): Promise<v1.AccountData> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV1(keys: Uint8Array[]): Promise<(v1.AccountData)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(v1.AccountData)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') != null
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
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV1(key: Uint8Array): Promise<v1.BalanceLock[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Locks', key)
  }

  async getManyAsV1(keys: Uint8Array[]): Promise<(v1.BalanceLock[])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(v1.BalanceLock[])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') != null
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
  get isV801() {
    return this._chain.getStorageItemTypeHash('Balances', 'Reserves') === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
  }

  /**
   *  Named reserves on some account balances.
   */
  async getAsV801(key: Uint8Array): Promise<v801.ReserveData[]> {
    assert(this.isV801)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Reserves', key)
  }

  async getManyAsV801(keys: Uint8Array[]): Promise<(v801.ReserveData[])[]> {
    assert(this.isV801)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Reserves', keys.map(k => [k]))
  }

  async getAllAsV801(): Promise<(v801.ReserveData[])[]> {
    assert(this.isV801)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  async getAsV1(): Promise<v1.Releases> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Balances', 'StorageVersion')
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  async getAsV906(): Promise<v906.Releases> {
    assert(this.isV906)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV906(key: number): Promise<v906.Bounty | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'Bounties', key)
  }

  async getManyAsV906(keys: number[]): Promise<(v906.Bounty | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.Bounty)[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyApprovals') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Bounty indices that have been approved but not yet funded.
   */
  async getAsV906(): Promise<number[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of bounty proposals that have been made.
   */
  async getAsV906(): Promise<number> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each bounty.
   */
  async getAsV906(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'BountyDescriptions', key)
  }

  async getManyAsV906(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'BountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(Uint8Array)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'BountyDescriptions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyDescriptions') != null
  }
}

export class CallSwitchgearDisabledTransfersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV908() {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'DisabledTransfers') === 'a7290ec824640ca2872f2fea261432dd2a2c32e1421ad10e436ca7b07f80b8d6'
  }

  async getAsV908(key: v908.CurrencyId): Promise<null | undefined> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', key)
  }

  async getManyAsV908(keys: v908.CurrencyId[]): Promise<(null | undefined)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<(null)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers')
  }

  get isV916() {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'DisabledTransfers') === 'a929199e083e4a6c337fc683182e7254aa287d6b3262b9b1900093e989e47f6e'
  }

  async getAsV916(key: v916.CurrencyId): Promise<null | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', key)
  }

  async getManyAsV916(keys: v916.CurrencyId[]): Promise<(null | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(null)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers')
  }

  get isV920() {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'DisabledTransfers') === 'ba806a7910fdcbd44eed82e19308c0f946872abb734cb9fb5616fa1289d60329'
  }

  async getAsV920(key: v920.CurrencyId): Promise<null | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', key)
  }

  async getManyAsV920(keys: v920.CurrencyId[]): Promise<(null | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(null)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers')
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'DisabledTransfers') === '0618b4e3b21f83dd1d307fec89eea09db01d984a6dbdf1ea1e60daa510f71456'
  }

  async getAsV932(key: v932.CurrencyId): Promise<null | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', key)
  }

  async getManyAsV932(keys: v932.CurrencyId[]): Promise<(null | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(null)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'DisabledTransfers') === '4889e3a6d760a93ac5814e95bdbb581677c959b31be0933f4400da1bbbecafdb'
  }

  async getAsV956(key: v956.CurrencyId): Promise<null | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(null | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(null)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'DisabledTransfers') === '6d85404764f23eee548921aeb8e1ffc5d6b5ab836573d28047870c1606a37051'
  }

  async getAsV962(key: v962.CurrencyId): Promise<null | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(null | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(null)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'DisabledTransfers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'DisabledTransfers') != null
  }
}

export class CallSwitchgearOverallToggleStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Controls whether or not all of the pallets are banned.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'OverallToggle') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Controls whether or not all of the pallets are banned.
   */
  async getAsV916(): Promise<boolean> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'CallSwitchgear', 'OverallToggle')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'OverallToggle') != null
  }
}

export class CallSwitchgearSwitchedOffTransactionsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV908() {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'SwitchedOffTransactions') === 'b84898f3d187596a7b6e3678769d37269c8b37c42ad19309d36b974ad9f3d352'
  }

  async getAsV908(key: [Uint8Array, Uint8Array]): Promise<null | undefined> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'CallSwitchgear', 'SwitchedOffTransactions', key)
  }

  async getManyAsV908(keys: [Uint8Array, Uint8Array][]): Promise<(null | undefined)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'SwitchedOffTransactions', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<(null)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'CallSwitchgear', 'SwitchedOffTransactions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CallSwitchgear', 'SwitchedOffTransactions') != null
  }
}

export class CollatorSelectionCandidacyBondStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Fixed deposit bond for each candidate.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'CandidacyBond') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  Fixed deposit bond for each candidate.
   */
  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'CandidacyBond')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'CandidacyBond') != null
  }
}

export class CollatorSelectionCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The (community, limited) collation candidates.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'Candidates') === '239ae5a83674078569642b29549b6d89d616b5748799fde8f01f3356f32141fd'
  }

  /**
   *  The (community, limited) collation candidates.
   */
  async getAsV1(): Promise<v1.CandidateInfo[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'Candidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'Candidates') != null
  }
}

export class CollatorSelectionDesiredCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Desired number of candidates.
   * 
   *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'DesiredCandidates') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Desired number of candidates.
   * 
   *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
   */
  async getAsV1(): Promise<number> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'DesiredCandidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'DesiredCandidates') != null
  }
}

export class CollatorSelectionInvulnerablesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The invulnerable, fixed collators.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'Invulnerables') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The invulnerable, fixed collators.
   */
  async getAsV1(): Promise<Uint8Array[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'Invulnerables')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'Invulnerables') != null
  }
}

export class CollatorSelectionLastAuthoredBlockStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Last block authored by collator.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'LastAuthoredBlock') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  Last block authored by collator.
   */
  async getAsV1(key: Uint8Array): Promise<number> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'LastAuthoredBlock', key)
  }

  async getManyAsV1(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'CollatorSelection', 'LastAuthoredBlock', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(number)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'CollatorSelection', 'LastAuthoredBlock')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'LastAuthoredBlock') != null
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV906(): Promise<Uint8Array[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Council', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsV906(): Promise<Uint8Array | undefined> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV906(): Promise<number> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '41895466e484ffa23b7dce58e3c36fada1543bdff8c033fab32033d59628c150'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV906(key: Uint8Array): Promise<v906.Call | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(v906.Call | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.Call)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '690a5633a50cd13e473e9dcc5c576014cfb055286f7c0054a91c7f29fefd7b90'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV908(key: Uint8Array): Promise<v908.Call | undefined> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV908(keys: Uint8Array[]): Promise<(v908.Call | undefined)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<(v908.Call)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV910() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '1ecec68300532c998b4551cf99ce181f6826d6f6c8e38901df3c23db0280297d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV910(key: Uint8Array): Promise<v910.Call | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV910(keys: Uint8Array[]): Promise<(v910.Call | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV910(): Promise<(v910.Call)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV912() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'dc88f3110f06d2704c3da45bbdbf60387114d13f45ad9ffdd3db2d14565383f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV912(key: Uint8Array): Promise<v912.Call | undefined> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV912(keys: Uint8Array[]): Promise<(v912.Call | undefined)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV912(): Promise<(v912.Call)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV914() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '7ced8245fec2975a273e6f351a8d598f3af18165feac4c1f10236009606f45f3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV914(key: Uint8Array): Promise<v914.Call | undefined> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV914(keys: Uint8Array[]): Promise<(v914.Call | undefined)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV914(): Promise<(v914.Call)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '1e918700e1dd96a255f0d980be19c7c28355c65562bb46da88e77b83116ba8d4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV915(key: Uint8Array): Promise<v915.Call | undefined> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV915(keys: Uint8Array[]): Promise<(v915.Call | undefined)[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV915(): Promise<(v915.Call)[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '8c2cc4aa9d2b11c8a02176a53ac560695d1215ce845eb72055640f11fa25fb24'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV916(key: Uint8Array): Promise<v916.Call | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV916(keys: Uint8Array[]): Promise<(v916.Call | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(v916.Call)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV918() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '91d446b09651888e05603553cd1881d423771f5c4bbc24936bf852dce0e0ac30'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV918(key: Uint8Array): Promise<v918.Call | undefined> {
    assert(this.isV918)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV918(keys: Uint8Array[]): Promise<(v918.Call | undefined)[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV918(): Promise<(v918.Call)[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '2359beb434f4906be1cf8a6b6d819b843bd3e32e4f7e84d9ffafa67c1f8cd01f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV920(key: Uint8Array): Promise<v920.Call | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV920(keys: Uint8Array[]): Promise<(v920.Call | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(v920.Call)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV922() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'f2c90c5e28a249a8a63e87e07a144d212939b2128843259f2ecc3ae9ceb56278'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV922(key: Uint8Array): Promise<v922.Call | undefined> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV922(keys: Uint8Array[]): Promise<(v922.Call | undefined)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV922(): Promise<(v922.Call)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV923() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '36778b6486e7905fb44c224ed7a1ebe484bf90ff84bc88243587097c4c81e823'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV923(key: Uint8Array): Promise<v923.Call | undefined> {
    assert(this.isV923)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV923(keys: Uint8Array[]): Promise<(v923.Call | undefined)[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV923(): Promise<(v923.Call)[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '72a42d145d4f0bb245e27a4f74ddc798556dda2ac6d14e986193e028d5a5cbba'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV926(key: Uint8Array): Promise<v926.Call | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV926(keys: Uint8Array[]): Promise<(v926.Call | undefined)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV926(): Promise<(v926.Call)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV927() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '670120d70275c84a31001af3920abe6dd849af83fa2dbe769f7d2f520f26116f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV927(key: Uint8Array): Promise<v927.Call | undefined> {
    assert(this.isV927)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV927(keys: Uint8Array[]): Promise<(v927.Call | undefined)[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV927(): Promise<(v927.Call)[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'fb352241aae80ef757c31ef21203b9293151b4270b6be049b51c725daa71abdc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV930(key: Uint8Array): Promise<v930.Call | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV930(keys: Uint8Array[]): Promise<(v930.Call | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.Call)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '25fe55775902f2abb191f8b9c1674426625631228fcd7e4eced19ea48cb2871c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV932(key: Uint8Array): Promise<v932.Call | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV932(keys: Uint8Array[]): Promise<(v932.Call | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.Call)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'df6253374412980fc5896c54587a1d449e717e4ed60cbe2f8f49f09868d23369'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV940(key: Uint8Array): Promise<v940.Call | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV940(keys: Uint8Array[]): Promise<(v940.Call | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(v940.Call)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV942() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'acb12cb1ab21af37b1c2d950487dea4fd812b945be09e101b1cce41fb26cfc1d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV942(key: Uint8Array): Promise<v942.Call | undefined> {
    assert(this.isV942)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV942(keys: Uint8Array[]): Promise<(v942.Call | undefined)[]> {
    assert(this.isV942)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV942(): Promise<(v942.Call)[]> {
    assert(this.isV942)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV944() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '7ad9cb5b33ba3ae7bd221f747303eb870e60069f1b54692a54272943a6b1000e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV944(key: Uint8Array): Promise<v944.Call | undefined> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV944(keys: Uint8Array[]): Promise<(v944.Call | undefined)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV944(): Promise<(v944.Call)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '86228955258bfcc7bbc0eab585d7b3c69a8aed7a66cb3493eb736e16f29f824d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV946(key: Uint8Array): Promise<v946.Call | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV946(keys: Uint8Array[]): Promise<(v946.Call | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(v946.Call)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV948() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '8007af47d32728c2968c39cc79980c29d8b724ede8b0ac52f325add40d4dd930'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV948(key: Uint8Array): Promise<v948.Call | undefined> {
    assert(this.isV948)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV948(keys: Uint8Array[]): Promise<(v948.Call | undefined)[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV948(): Promise<(v948.Call)[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV952() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'eea35e47df2c15b50041e3a2f137b0f86d6cdb3e5830225bb6da835e349f34d1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV952(key: Uint8Array): Promise<v952.Call | undefined> {
    assert(this.isV952)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV952(keys: Uint8Array[]): Promise<(v952.Call | undefined)[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV952(): Promise<(v952.Call)[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV954() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '7602e75ea1ef18dcff869eea4e5c93f84321a343a26b838338c5ed10aff9bed0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV954(key: Uint8Array): Promise<v954.Call | undefined> {
    assert(this.isV954)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV954(keys: Uint8Array[]): Promise<(v954.Call | undefined)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV954(): Promise<(v954.Call)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '3705f777e55d2445d7c06284b3665159c7fa95cc144ccd0114bc3f082d2fbce7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV956(key: Uint8Array): Promise<v956.Call | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV956(keys: Uint8Array[]): Promise<(v956.Call | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.Call)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV958() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'ad837f2c6462b189da38f5c582a2236a30f3654cdeec9389ad420fd8e0d9db13'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV958(key: Uint8Array): Promise<v958.Call | undefined> {
    assert(this.isV958)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV958(keys: Uint8Array[]): Promise<(v958.Call | undefined)[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV958(): Promise<(v958.Call)[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'a2ca13d78ce7fec8b0edaa1a5a7bfcea730993846db182cdc4fc2da1b2a0f809'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV962(key: Uint8Array): Promise<v962.Call | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV962(keys: Uint8Array[]): Promise<(v962.Call | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.Call)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV964() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'f8cccb24cfbb4a47a056bd606dfa0c1639cf113376e03847393b3d5522cd8b0d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV964(key: Uint8Array): Promise<v964.Call | undefined> {
    assert(this.isV964)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV964(keys: Uint8Array[]): Promise<(v964.Call | undefined)[]> {
    assert(this.isV964)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV964(): Promise<(v964.Call)[]> {
    assert(this.isV964)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Council', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV906(): Promise<Uint8Array[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Council', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV906(key: Uint8Array): Promise<v906.Votes | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Council', 'Voting', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(v906.Votes | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Council', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.Votes)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Council', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Voting') != null
  }
}

export class CouncilMembershipMembersStorage {
  private readonly _chain: Chain
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('CouncilMembership', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  async getAsV906(): Promise<Uint8Array[]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'CouncilMembership', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CouncilMembership', 'Members') != null
  }
}

export class CouncilMembershipPrimeStorage {
  private readonly _chain: Chain
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('CouncilMembership', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The current prime member, if one exists.
   */
  async getAsV906(): Promise<Uint8Array | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'CouncilMembership', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CouncilMembership', 'Prime') != null
  }
}

export class CrossInOutAccountToOuterMultilocationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Mapping a Bifrost account to a multilocation of a outer chain
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'AccountToOuterMultilocation') === '95b4facbdde9988997e605bcf225a4bd918cc14fea51042f98cfd203471f2c2f'
  }

  /**
   *  Mapping a Bifrost account to a multilocation of a outer chain
   */
  async getAsV962(key1: v962.CurrencyId, key2: Uint8Array): Promise<v962.V1MultiLocation | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'CrossInOut', 'AccountToOuterMultilocation', key1, key2)
  }

  async getManyAsV962(keys: [v962.CurrencyId, Uint8Array][]): Promise<(v962.V1MultiLocation | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'AccountToOuterMultilocation', keys)
  }

  async getAllAsV962(): Promise<(v962.V1MultiLocation)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'AccountToOuterMultilocation')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'AccountToOuterMultilocation') != null
  }
}

export class CrossInOutCrossCurrencyRegistryStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  To store currencies that support indirect cross-in and cross-out.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'CrossCurrencyRegistry') === '6d85404764f23eee548921aeb8e1ffc5d6b5ab836573d28047870c1606a37051'
  }

  /**
   *  To store currencies that support indirect cross-in and cross-out.
   */
  async getAsV962(key: v962.CurrencyId): Promise<null | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'CrossInOut', 'CrossCurrencyRegistry', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(null | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'CrossCurrencyRegistry', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(null)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'CrossCurrencyRegistry')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'CrossCurrencyRegistry') != null
  }
}

export class CrossInOutCrossingMinimumAmountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  minimum crossin and crossout amount【crossinMinimum, crossoutMinimum】
   */
  get isV964() {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'CrossingMinimumAmount') === '68e686f6a31dd9954feabff96ed835c76745d7a371917c0f393f9bf242b655fe'
  }

  /**
   *  minimum crossin and crossout amount【crossinMinimum, crossoutMinimum】
   */
  async getAsV964(key: v964.CurrencyId): Promise<[bigint, bigint] | undefined> {
    assert(this.isV964)
    return this._chain.getStorage(this.blockHash, 'CrossInOut', 'CrossingMinimumAmount', key)
  }

  async getManyAsV964(keys: v964.CurrencyId[]): Promise<([bigint, bigint] | undefined)[]> {
    assert(this.isV964)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'CrossingMinimumAmount', keys.map(k => [k]))
  }

  async getAllAsV964(): Promise<([bigint, bigint])[]> {
    assert(this.isV964)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'CrossingMinimumAmount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'CrossingMinimumAmount') != null
  }
}

export class CrossInOutIssueWhiteListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'IssueWhiteList') === 'd1051e5d4bc8b9aa597b6992ec0cdfd40a086359623802a33fc5ddf4b10162ec'
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  async getAsV962(key: v962.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'CrossInOut', 'IssueWhiteList', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'IssueWhiteList', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(Uint8Array[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'IssueWhiteList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'IssueWhiteList') != null
  }
}

export class CrossInOutOuterMultilocationToAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Mapping a multilocation of a outer chain to a Bifrost account
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'OuterMultilocationToAccount') === '5fb91dc35f01cfbeed55703c9f5e99ee8ba14c17e1ab6f18c40587152e22b186'
  }

  /**
   *  Mapping a multilocation of a outer chain to a Bifrost account
   */
  async getAsV962(key1: v962.CurrencyId, key2: v962.V1MultiLocation): Promise<Uint8Array | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'CrossInOut', 'OuterMultilocationToAccount', key1, key2)
  }

  async getManyAsV962(keys: [v962.CurrencyId, v962.V1MultiLocation][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'OuterMultilocationToAccount', keys)
  }

  async getAllAsV962(): Promise<(Uint8Array)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'OuterMultilocationToAccount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'OuterMultilocationToAccount') != null
  }
}

export class CrossInOutRegisterWhiteListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Accounts in the whitelist can register the mapping between a multilocation and an accountId.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'RegisterWhiteList') === 'd1051e5d4bc8b9aa597b6992ec0cdfd40a086359623802a33fc5ddf4b10162ec'
  }

  /**
   *  Accounts in the whitelist can register the mapping between a multilocation and an accountId.
   */
  async getAsV962(key: v962.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'CrossInOut', 'RegisterWhiteList', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'RegisterWhiteList', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(Uint8Array[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'CrossInOut', 'RegisterWhiteList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CrossInOut', 'RegisterWhiteList') != null
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Blacklist') === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
  }

  /**
   *  A record of who vetoed what. Maps proposal hash to a possible existent block number
   *  (until when it may not be resubmitted) and who vetoed it.
   */
  async getAsV803(key: Uint8Array): Promise<[number, Uint8Array[]] | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Blacklist', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Blacklist', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<([number, Uint8Array[]])[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Cancellations') === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
  }

  /**
   *  Record of all proposals that have been subject to emergency cancellation.
   */
  async getAsV803(key: Uint8Array): Promise<boolean> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Cancellations', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(boolean)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Cancellations', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(boolean)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Cancellations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Cancellations') != null
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
   * 
   *  TWOX-NOTE: Safe, as increasing integer keys are safe.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'DepositOf') === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
  }

  /**
   *  Those who have locked a deposit.
   * 
   *  TWOX-NOTE: Safe, as increasing integer keys are safe.
   */
  async getAsV803(key: number): Promise<[Uint8Array[], bigint] | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'DepositOf', key)
  }

  async getManyAsV803(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<([Uint8Array[], bigint])[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'DepositOf') != null
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'LastTabledWasExternal') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if the last referendum tabled was submitted externally. False if it was a public
   *  proposal.
   */
  async getAsV803(): Promise<boolean> {
    assert(this.isV803)
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
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Locks') === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
  }

  /**
   *  Accounts for which there are locks in action which may be removed at some point in the
   *  future. The value is the block number at which the lock expires and may be removed.
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  async getAsV803(key: Uint8Array): Promise<number | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Locks', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(number | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Locks', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(number)[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'LowestUnbaked') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The lowest referendum index representing an unbaked referendum. Equal to
   *  `ReferendumCount` if there isn't a unbaked referendum.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextExternal') === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
  }

  /**
   *  The referendum to be tabled whenever it would be valid to table an external proposal.
   *  This happens when a referendum needs to be tabled and one of two conditions are met:
   *  - `LastTabledWasExternal` is `false`; or
   *  - `PublicProps` is empty.
   */
  async getAsV803(): Promise<[Uint8Array, v803.VoteThreshold] | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'NextExternal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextExternal') != null
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV803(key: Uint8Array): Promise<v803.PreimageStatus | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(v803.PreimageStatus | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.PreimageStatus)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV906(key: Uint8Array): Promise<v906.PreimageStatus | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(v906.PreimageStatus | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.PreimageStatus)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') != null
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
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
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV803(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The next free referendum index, aka the number of referenda started so far.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
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
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV803(key: number): Promise<v803.ReferendumInfo | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV803(keys: number[]): Promise<(v803.ReferendumInfo | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.ReferendumInfo)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV906(key: number): Promise<v906.ReferendumInfo | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV906(keys: number[]): Promise<(v906.ReferendumInfo | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.ReferendumInfo)[]> {
    assert(this.isV906)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') === 'd0303e1bae0fc34655f81e27ee4b2eb0fb0d3ce283cc0e6cd4de7efaeb1119f2'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsV803(): Promise<v803.Releases | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'StorageVersion')
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsV906(): Promise<v906.Type_233 | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') != null
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
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') === '1b8d82fbf262dcaeba801105bb1e0dcfa6b2f7c3b76feb5fa9d27716f50903d2'
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  async getAsV803(key: Uint8Array): Promise<v803.Voting> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'VotingOf', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(v803.Voting)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.Voting)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf')
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  async getAsV906(key: Uint8Array): Promise<v906.Voting> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'VotingOf', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(v906.Voting)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.Voting)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') != null
  }
}

export class DmpQueueConfigurationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The configuration.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Configuration') === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
  }

  /**
   *  The configuration.
   */
  async getAsV1(): Promise<v1.ConfigData> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Configuration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Configuration') != null
  }
}

export class DmpQueueOverweightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The overweight messages.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Overweight') === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
  }

  /**
   *  The overweight messages.
   */
  async getAsV1(key: bigint): Promise<[number, Uint8Array] | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Overweight', key)
  }

  async getManyAsV1(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Overweight', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<([number, Uint8Array])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Overweight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Overweight') != null
  }
}

export class DmpQueuePageIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The page index.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'PageIndex') === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
  }

  /**
   *  The page index.
   */
  async getAsV1(): Promise<v1.PageIndexData> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'PageIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'PageIndex') != null
  }
}

export class DmpQueuePagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The queue pages.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Pages') === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
  }

  /**
   *  The queue pages.
   */
  async getAsV1(key: number): Promise<[number, Uint8Array][]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Pages', key)
  }

  async getManyAsV1(keys: number[]): Promise<([number, Uint8Array][])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Pages', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<([number, Uint8Array][])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Pages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Pages') != null
  }
}

export class FarmingGaugeInfosStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV944() {
    return this._chain.getStorageItemTypeHash('Farming', 'GaugeInfos') === 'bfcac1c2fc5422a1bb4fc529e0239e7a73cb9de789e8d33533d200ba8dec513f'
  }

  async getAsV944(key1: number, key2: Uint8Array): Promise<v944.GaugeInfo | undefined> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Farming', 'GaugeInfos', key1, key2)
  }

  async getManyAsV944(keys: [number, Uint8Array][]): Promise<(v944.GaugeInfo | undefined)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'GaugeInfos', keys)
  }

  async getAllAsV944(): Promise<(v944.GaugeInfo)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'GaugeInfos')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Farming', 'GaugeInfos') != null
  }
}

export class FarmingGaugePoolInfosStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Record gauge farming pool info.
   * 
   *  map PoolId => GaugePoolInfo
   */
  get isV944() {
    return this._chain.getStorageItemTypeHash('Farming', 'GaugePoolInfos') === 'f1cdb6ac784a11773490a50ed09e04a6a427db17a246624f62827710c852e0ff'
  }

  /**
   *  Record gauge farming pool info.
   * 
   *  map PoolId => GaugePoolInfo
   */
  async getAsV944(key: number): Promise<v944.GaugePoolInfo | undefined> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Farming', 'GaugePoolInfos', key)
  }

  async getManyAsV944(keys: number[]): Promise<(v944.GaugePoolInfo | undefined)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'GaugePoolInfos', keys.map(k => [k]))
  }

  async getAllAsV944(): Promise<(v944.GaugePoolInfo)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'GaugePoolInfos')
  }

  /**
   *  Record gauge farming pool info.
   * 
   *  map PoolId => GaugePoolInfo
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Farming', 'GaugePoolInfos') === 'ee55c0fe28b43fc3e0a8f41aa531af729a2ddcc62d7103fd1e067dcd36836146'
  }

  /**
   *  Record gauge farming pool info.
   * 
   *  map PoolId => GaugePoolInfo
   */
  async getAsV956(key: number): Promise<v956.GaugePoolInfo | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Farming', 'GaugePoolInfos', key)
  }

  async getManyAsV956(keys: number[]): Promise<(v956.GaugePoolInfo | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'GaugePoolInfos', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.GaugePoolInfo)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'GaugePoolInfos')
  }

  /**
   *  Record gauge farming pool info.
   * 
   *  map PoolId => GaugePoolInfo
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Farming', 'GaugePoolInfos') === '1819ce67483f76f3eea7d5cdfd6044cdb9418430a90defed263d6f23aeee72e5'
  }

  /**
   *  Record gauge farming pool info.
   * 
   *  map PoolId => GaugePoolInfo
   */
  async getAsV962(key: number): Promise<v962.GaugePoolInfo | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Farming', 'GaugePoolInfos', key)
  }

  async getManyAsV962(keys: number[]): Promise<(v962.GaugePoolInfo | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'GaugePoolInfos', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.GaugePoolInfo)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'GaugePoolInfos')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Farming', 'GaugePoolInfos') != null
  }
}

export class FarmingGaugePoolNextIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV944() {
    return this._chain.getStorageItemTypeHash('Farming', 'GaugePoolNextId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV944(): Promise<number> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Farming', 'GaugePoolNextId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Farming', 'GaugePoolNextId') != null
  }
}

export class FarmingPoolInfosStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Record reward pool info.
   * 
   *  map PoolId => PoolInfo
   */
  get isV944() {
    return this._chain.getStorageItemTypeHash('Farming', 'PoolInfos') === '834d2e44981e9f68eae39a166281a398fa964e99472b23a8b2702818b3ea3c51'
  }

  /**
   *  Record reward pool info.
   * 
   *  map PoolId => PoolInfo
   */
  async getAsV944(key: number): Promise<v944.Type_628 | undefined> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Farming', 'PoolInfos', key)
  }

  async getManyAsV944(keys: number[]): Promise<(v944.Type_628 | undefined)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'PoolInfos', keys.map(k => [k]))
  }

  async getAllAsV944(): Promise<(v944.Type_628)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'PoolInfos')
  }

  /**
   *  Record reward pool info.
   * 
   *  map PoolId => PoolInfo
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Farming', 'PoolInfos') === 'e7d117987f08551112c90989e0a64aa516f66a9069e0efa0a69aed831e83e3b2'
  }

  /**
   *  Record reward pool info.
   * 
   *  map PoolId => PoolInfo
   */
  async getAsV956(key: number): Promise<v956.Type_646 | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Farming', 'PoolInfos', key)
  }

  async getManyAsV956(keys: number[]): Promise<(v956.Type_646 | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'PoolInfos', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.Type_646)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'PoolInfos')
  }

  /**
   *  Record reward pool info.
   * 
   *  map PoolId => PoolInfo
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Farming', 'PoolInfos') === '097a8858df9534e9bdb57fc698960b51fbb8dab6c18e073aec315f3eab6450eb'
  }

  /**
   *  Record reward pool info.
   * 
   *  map PoolId => PoolInfo
   */
  async getAsV962(key: number): Promise<v962.Type_674 | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Farming', 'PoolInfos', key)
  }

  async getManyAsV962(keys: number[]): Promise<(v962.Type_674 | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'PoolInfos', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.Type_674)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'PoolInfos')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Farming', 'PoolInfos') != null
  }
}

export class FarmingPoolNextIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV944() {
    return this._chain.getStorageItemTypeHash('Farming', 'PoolNextId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV944(): Promise<number> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Farming', 'PoolNextId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Farming', 'PoolNextId') != null
  }
}

export class FarmingRetireLimitStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV944() {
    return this._chain.getStorageItemTypeHash('Farming', 'RetireLimit') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV944(): Promise<number> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Farming', 'RetireLimit')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Farming', 'RetireLimit') != null
  }
}

export class FarmingSharesAndWithdrawnRewardsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Record share amount, reward currency and withdrawn reward amount for
   *  specific `AccountId` under `PoolId`.
   * 
   *  double_map (PoolId, AccountId) => ShareInfo
   */
  get isV944() {
    return this._chain.getStorageItemTypeHash('Farming', 'SharesAndWithdrawnRewards') === 'e6b679f38a737b0005b846ff0de5df64b60dfbabf651193ba3214be782b4db9d'
  }

  /**
   *  Record share amount, reward currency and withdrawn reward amount for
   *  specific `AccountId` under `PoolId`.
   * 
   *  double_map (PoolId, AccountId) => ShareInfo
   */
  async getAsV944(key1: number, key2: Uint8Array): Promise<v944.ShareInfo | undefined> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Farming', 'SharesAndWithdrawnRewards', key1, key2)
  }

  async getManyAsV944(keys: [number, Uint8Array][]): Promise<(v944.ShareInfo | undefined)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'SharesAndWithdrawnRewards', keys)
  }

  async getAllAsV944(): Promise<(v944.ShareInfo)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'SharesAndWithdrawnRewards')
  }

  /**
   *  Record share amount, reward currency and withdrawn reward amount for
   *  specific `AccountId` under `PoolId`.
   * 
   *  double_map (PoolId, AccountId) => ShareInfo
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Farming', 'SharesAndWithdrawnRewards') === 'f2ed87b7e53db13a0476b8236179a06c056517748d50f5cadf08aac5c3fec735'
  }

  /**
   *  Record share amount, reward currency and withdrawn reward amount for
   *  specific `AccountId` under `PoolId`.
   * 
   *  double_map (PoolId, AccountId) => ShareInfo
   */
  async getAsV956(key1: number, key2: Uint8Array): Promise<v956.ShareInfo | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Farming', 'SharesAndWithdrawnRewards', key1, key2)
  }

  async getManyAsV956(keys: [number, Uint8Array][]): Promise<(v956.ShareInfo | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'SharesAndWithdrawnRewards', keys)
  }

  async getAllAsV956(): Promise<(v956.ShareInfo)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'SharesAndWithdrawnRewards')
  }

  /**
   *  Record share amount, reward currency and withdrawn reward amount for
   *  specific `AccountId` under `PoolId`.
   * 
   *  double_map (PoolId, AccountId) => ShareInfo
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Farming', 'SharesAndWithdrawnRewards') === '1551d3fe381a42a8e29a3c90a6b6e211c534a7f3083a1e9b31b45273d8c21a2f'
  }

  /**
   *  Record share amount, reward currency and withdrawn reward amount for
   *  specific `AccountId` under `PoolId`.
   * 
   *  double_map (PoolId, AccountId) => ShareInfo
   */
  async getAsV962(key1: number, key2: Uint8Array): Promise<v962.ShareInfo | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Farming', 'SharesAndWithdrawnRewards', key1, key2)
  }

  async getManyAsV962(keys: [number, Uint8Array][]): Promise<(v962.ShareInfo | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'SharesAndWithdrawnRewards', keys)
  }

  async getAllAsV962(): Promise<(v962.ShareInfo)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Farming', 'SharesAndWithdrawnRewards')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Farming', 'SharesAndWithdrawnRewards') != null
  }
}

export class FeeShareAutoEraStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('FeeShare', 'AutoEra') === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
  }

  async getAsV962(): Promise<[number, number]> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'FeeShare', 'AutoEra')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FeeShare', 'AutoEra') != null
  }
}

export class FeeShareDistributionInfosStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('FeeShare', 'DistributionInfos') === 'f5c8553fa1de6bef1559988f1259cd7a559c484e4aaa6a10212e71d8fe578c6c'
  }

  async getAsV962(key: number): Promise<v962.Type_215 | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'FeeShare', 'DistributionInfos', key)
  }

  async getManyAsV962(keys: number[]): Promise<(v962.Type_215 | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'FeeShare', 'DistributionInfos', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.Type_215)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'FeeShare', 'DistributionInfos')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FeeShare', 'DistributionInfos') != null
  }
}

export class FeeShareDistributionNextIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('FeeShare', 'DistributionNextId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV962(): Promise<number> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'FeeShare', 'DistributionNextId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FeeShare', 'DistributionNextId') != null
  }
}

export class FlexibleFeeDefaultFeeChargeOrderListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV803() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'DefaultFeeChargeOrderList') === 'd349522b26516398dbac0987bca59598ae5b27fc3926be7138d65eb37ccee26a'
  }

  async getAsV803(): Promise<v803.CurrencyId[]> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'DefaultFeeChargeOrderList')
  }

  get isV906() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'DefaultFeeChargeOrderList') === '4233f5eb392658ae9d18c3d2e130e16be557c8a1afe235e05d40b83360251590'
  }

  async getAsV906(): Promise<v906.CurrencyId[]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'DefaultFeeChargeOrderList')
  }

  get isV916() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'DefaultFeeChargeOrderList') === 'b514cabdfa7433a6333f4fbf2c283156a5ba256296a1879f991740f0460760c5'
  }

  async getAsV916(): Promise<v916.CurrencyId[]> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'DefaultFeeChargeOrderList')
  }

  get isV920() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'DefaultFeeChargeOrderList') === 'fd47728e0effc28c3274e564849de6e64d5a840ce48b39992ac65e568c1adfec'
  }

  async getAsV920(): Promise<v920.CurrencyId[]> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'DefaultFeeChargeOrderList')
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'DefaultFeeChargeOrderList') === 'db3f9eb4dbad3c8311e41edc50a6c4ac5f42c2b045d12a04eb328c89cf1b31e5'
  }

  async getAsV932(): Promise<v932.CurrencyId[]> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'DefaultFeeChargeOrderList')
  }

  get isV952() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'DefaultFeeChargeOrderList') === '240b9d7d77eea57aaf4924deb7880ca4e092303bc92b123c47a6b7a7b423f6fc'
  }

  async getAsV952(): Promise<v952.CurrencyId[] | undefined> {
    assert(this.isV952)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'DefaultFeeChargeOrderList')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'DefaultFeeChargeOrderList') === '0083f5a56dfb0b8bc0826a24ad4a651b728ce56725e34e82352d001d7387f49e'
  }

  async getAsV956(): Promise<v956.CurrencyId[] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'DefaultFeeChargeOrderList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'DefaultFeeChargeOrderList') != null
  }
}

export class FlexibleFeeUserFeeChargeOrderListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV803() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'UserFeeChargeOrderList') === 'ebd5340eace4384bacbc2550b4d5080257fb4ed719c6eda7de826e84f2f26f4d'
  }

  async getAsV803(key: Uint8Array): Promise<v803.CurrencyId[]> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(v803.CurrencyId[])[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.CurrencyId[])[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList')
  }

  get isV906() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'UserFeeChargeOrderList') === '553f9dc41bb97580730d57ebaea576959686b565450dd9162d199cee86dfb1bc'
  }

  async getAsV906(key: Uint8Array): Promise<v906.CurrencyId[]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(v906.CurrencyId[])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.CurrencyId[])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList')
  }

  get isV916() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'UserFeeChargeOrderList') === '1949aef23afbd56ba6a10dfcdf2fa454ac5397f21af6d5507560e244928395e4'
  }

  async getAsV916(key: Uint8Array): Promise<v916.CurrencyId[]> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', key)
  }

  async getManyAsV916(keys: Uint8Array[]): Promise<(v916.CurrencyId[])[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(v916.CurrencyId[])[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList')
  }

  get isV920() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'UserFeeChargeOrderList') === '1c650b16e6bb4f0937247c8771852d313a56b7704324a9a5928dfadbc7eb2e96'
  }

  async getAsV920(key: Uint8Array): Promise<v920.CurrencyId[]> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', key)
  }

  async getManyAsV920(keys: Uint8Array[]): Promise<(v920.CurrencyId[])[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(v920.CurrencyId[])[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList')
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'UserFeeChargeOrderList') === 'c26bed16937e18d09e9fba954c0832cca5f89005e2fc4ac130048ed0ec39cbcb'
  }

  async getAsV932(key: Uint8Array): Promise<v932.CurrencyId[]> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', key)
  }

  async getManyAsV932(keys: Uint8Array[]): Promise<(v932.CurrencyId[])[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.CurrencyId[])[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList')
  }

  get isV952() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'UserFeeChargeOrderList') === 'd8f5c8d60fef8024ecb158783872579c0821aadf834e3cf49e095da5d0720254'
  }

  async getAsV952(key: Uint8Array): Promise<v952.CurrencyId[] | undefined> {
    assert(this.isV952)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', key)
  }

  async getManyAsV952(keys: Uint8Array[]): Promise<(v952.CurrencyId[] | undefined)[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', keys.map(k => [k]))
  }

  async getAllAsV952(): Promise<(v952.CurrencyId[])[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'UserFeeChargeOrderList') === 'b8f9c28f05630e3c668a04c360bd87f3f6fac0f2bab68307e57ec96177f01392'
  }

  async getAsV956(key: Uint8Array): Promise<v956.CurrencyId[] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', key)
  }

  async getManyAsV956(keys: Uint8Array[]): Promise<(v956.CurrencyId[] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.CurrencyId[])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'UserFeeChargeOrderList') === '7273cf958d55a9ba32798b0cbb2370016479cf2c24cf1e670519cf3407b30b18'
  }

  async getAsV962(key: Uint8Array): Promise<v962.CurrencyId[] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', key)
  }

  async getManyAsV962(keys: Uint8Array[]): Promise<(v962.CurrencyId[] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.CurrencyId[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'FlexibleFee', 'UserFeeChargeOrderList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FlexibleFee', 'UserFeeChargeOrderList') != null
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
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('Identity', 'IdentityOf') === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  async getAsV908(key: Uint8Array): Promise<v908.Registration | undefined> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'Identity', 'IdentityOf', key)
  }

  async getManyAsV908(keys: Uint8Array[]): Promise<(v908.Registration | undefined)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'IdentityOf', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<(v908.Registration)[]> {
    assert(this.isV908)
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
  get isV908() {
    return this._chain.getStorageItemTypeHash('Identity', 'Registrars') === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
  }

  /**
   *  The set of registrars. Not expected to get very big as can only be added through a
   *  special origin (likely a council motion).
   * 
   *  The index into this can be cast to `RegistrarIndex` to get a valid value.
   */
  async getAsV908(): Promise<(v908.RegistrarInfo | undefined)[]> {
    assert(this.isV908)
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
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('Identity', 'SubsOf') === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
  }

  /**
   *  Alternative "sub" identities of this account.
   * 
   *  The first item is the deposit, the second is a vector of the accounts.
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  async getAsV908(key: Uint8Array): Promise<[bigint, Uint8Array[]]> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'Identity', 'SubsOf', key)
  }

  async getManyAsV908(keys: Uint8Array[]): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SubsOf', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV908)
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
  get isV908() {
    return this._chain.getStorageItemTypeHash('Identity', 'SuperOf') === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
  }

  /**
   *  The super-identity of an alternative "sub" identity together with its name, within that
   *  context. If the account is not some other account's sub-identity, then just `None`.
   */
  async getAsV908(key: Uint8Array): Promise<[Uint8Array, v908.Data] | undefined> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'Identity', 'SuperOf', key)
  }

  async getManyAsV908(keys: Uint8Array[]): Promise<([Uint8Array, v908.Data] | undefined)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SuperOf', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<([Uint8Array, v908.Data])[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SuperOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Identity', 'SuperOf') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Indices', 'Accounts') === 'c6d4b452610ac51f7c9427bf2d9910242bb414a02409a484caf47fa24e50516e'
  }

  /**
   *  The lookup from index to account.
   */
  async getAsV1(key: number): Promise<[Uint8Array, bigint, boolean] | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Indices', 'Accounts', key)
  }

  async getManyAsV1(keys: number[]): Promise<([Uint8Array, bigint, boolean] | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Indices', 'Accounts', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<([Uint8Array, bigint, boolean])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Indices', 'Accounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Indices', 'Accounts') != null
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV803(): Promise<Uint8Array[]> {
    assert(this.isV803)
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
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsV803(): Promise<Uint8Array | undefined> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ff3f2ad65672f17d3bbc15457e62e22594f0b89856bb4e3159d7b9c9c2d7b5d5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV803(key: Uint8Array): Promise<v803.Proposal | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(v803.Proposal | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.Proposal)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV804() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f469074e9c9227a3e912f03dcac5c4ed936205a77048a65c6e2a9dc835688e27'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV804(key: Uint8Array): Promise<v804.Proposal | undefined> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV804(keys: Uint8Array[]): Promise<(v804.Proposal | undefined)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV804(): Promise<(v804.Proposal)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV805() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ce8853364959a90ac79e6f73e0a72998a069c8fbb65c307d892d8fcdbcadfa3c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV805(key: Uint8Array): Promise<v805.Proposal | undefined> {
    assert(this.isV805)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV805(keys: Uint8Array[]): Promise<(v805.Proposal | undefined)[]> {
    assert(this.isV805)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV805(): Promise<(v805.Proposal)[]> {
    assert(this.isV805)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '16b177961a30ecf818ebad48a3d0a06b91074a16dec95709286a5ebfcaac2fd3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: Uint8Array): Promise<v900.Proposal | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV900(keys: Uint8Array[]): Promise<(v900.Proposal | undefined)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV900(): Promise<(v900.Proposal)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV901() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a1795356664688824aad7064b1edcc104c2d0fdfb18b9f5631fc180ad884c439'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV901(key: Uint8Array): Promise<v901.Proposal | undefined> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV901(keys: Uint8Array[]): Promise<(v901.Proposal | undefined)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV901(): Promise<(v901.Proposal)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f097e7fa22ba32e212600e411788d686ba0dcdf264e5ddbb1a5c0ce950919e77'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV902(key: Uint8Array): Promise<v902.Proposal | undefined> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV902(keys: Uint8Array[]): Promise<(v902.Proposal | undefined)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<(v902.Proposal)[]> {
    assert(this.isV902)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV803(): Promise<Uint8Array[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV803(key: Uint8Array): Promise<v803.Votes | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'Voting', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(v803.Votes | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.Votes)[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Membership', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  async getAsV803(): Promise<Uint8Array[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Membership', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The current prime member, if one exists.
   */
  async getAsV803(): Promise<Uint8Array | undefined> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV803(): Promise<Uint8Array[]> {
    assert(this.isV803)
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
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsV803(): Promise<Uint8Array | undefined> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ff3f2ad65672f17d3bbc15457e62e22594f0b89856bb4e3159d7b9c9c2d7b5d5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV803(key: Uint8Array): Promise<v803.Proposal | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(v803.Proposal | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.Proposal)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV804() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f469074e9c9227a3e912f03dcac5c4ed936205a77048a65c6e2a9dc835688e27'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV804(key: Uint8Array): Promise<v804.Proposal | undefined> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV804(keys: Uint8Array[]): Promise<(v804.Proposal | undefined)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV804(): Promise<(v804.Proposal)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV805() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ce8853364959a90ac79e6f73e0a72998a069c8fbb65c307d892d8fcdbcadfa3c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV805(key: Uint8Array): Promise<v805.Proposal | undefined> {
    assert(this.isV805)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV805(keys: Uint8Array[]): Promise<(v805.Proposal | undefined)[]> {
    assert(this.isV805)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV805(): Promise<(v805.Proposal)[]> {
    assert(this.isV805)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '16b177961a30ecf818ebad48a3d0a06b91074a16dec95709286a5ebfcaac2fd3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: Uint8Array): Promise<v900.Proposal | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV900(keys: Uint8Array[]): Promise<(v900.Proposal | undefined)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV900(): Promise<(v900.Proposal)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV901() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a1795356664688824aad7064b1edcc104c2d0fdfb18b9f5631fc180ad884c439'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV901(key: Uint8Array): Promise<v901.Proposal | undefined> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV901(keys: Uint8Array[]): Promise<(v901.Proposal | undefined)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV901(): Promise<(v901.Proposal)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f097e7fa22ba32e212600e411788d686ba0dcdf264e5ddbb1a5c0ce950919e77'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV902(key: Uint8Array): Promise<v902.Proposal | undefined> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV902(keys: Uint8Array[]): Promise<(v902.Proposal | undefined)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<(v902.Proposal)[]> {
    assert(this.isV902)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV803(): Promise<Uint8Array[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV803(key: Uint8Array): Promise<v803.Votes | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'Voting', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(v803.Votes | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.Votes)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'Voting') != null
  }
}

export class Instance2MembershipMembersStorage {
  private readonly _chain: Chain
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance2Membership', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  async getAsV803(): Promise<Uint8Array[]> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Instance2Membership', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Membership', 'Members') != null
  }
}

export class Instance2MembershipPrimeStorage {
  private readonly _chain: Chain
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance2Membership', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The current prime member, if one exists.
   */
  async getAsV803(): Promise<Uint8Array | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Instance2Membership', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Membership', 'Prime') != null
  }
}

export class LighteningRedeemExchangePriceDiscountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Exchange price discount: vsbond + vstoken => token
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('LighteningRedeem', 'ExchangePriceDiscount') === '8b3376fac84361c8fa9d2d145fe641638bab307a3907f7668e9b00eb0cf1f864'
  }

  /**
   *  Exchange price discount: vsbond + vstoken => token
   */
  async getAsV906(): Promise<number> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'LighteningRedeem', 'ExchangePriceDiscount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LighteningRedeem', 'ExchangePriceDiscount') != null
  }
}

export class LighteningRedeemPoolAmountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The remaining amount which can be exchanged for
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('LighteningRedeem', 'PoolAmount') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The remaining amount which can be exchanged for
   */
  async getAsV906(): Promise<bigint> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'LighteningRedeem', 'PoolAmount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LighteningRedeem', 'PoolAmount') != null
  }
}

export class LighteningRedeemStartEndReleaseBlockStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Token release start block
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('LighteningRedeem', 'StartEndReleaseBlock') === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
  }

  /**
   *  Token release start block
   */
  async getAsV906(): Promise<[number, number]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'LighteningRedeem', 'StartEndReleaseBlock')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LighteningRedeem', 'StartEndReleaseBlock') != null
  }
}

export class LighteningRedeemTokenReleasePerDayStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  token amount that is released everyday.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('LighteningRedeem', 'TokenReleasePerDay') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  token amount that is released everyday.
   */
  async getAsV906(): Promise<bigint> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'LighteningRedeem', 'TokenReleasePerDay')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LighteningRedeem', 'TokenReleasePerDay') != null
  }
}

export class LiquidityMiningChargedPoolIdsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV901() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'ChargedPoolIds') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  async getAsV901(): Promise<number[]> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'ChargedPoolIds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'ChargedPoolIds') != null
  }
}

export class LiquidityMiningNextPoolIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV901() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'NextPoolId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV901(): Promise<number> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'NextPoolId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'NextPoolId') != null
  }
}

export class LiquidityMiningPalletVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV922() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'PalletVersion') === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
  }

  async getAsV922(): Promise<v922.StorageVersion> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'PalletVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'PalletVersion') != null
  }
}

export class LiquidityMiningTotalDepositDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV901() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositData') === 'b44b102679f3e2cd9f5e21660165630afd78b82577fe92214c70e5700b90987a'
  }

  async getAsV901(key1: number, key2: Uint8Array): Promise<v901.DepositData | undefined> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData', key1, key2)
  }

  async getManyAsV901(keys: [number, Uint8Array][]): Promise<(v901.DepositData | undefined)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData', keys)
  }

  async getAllAsV901(): Promise<(v901.DepositData)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData')
  }

  get isV906() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositData') === 'd9da5bf3663411d6cae1ae97ac1695e50e659083f99efa8b98ae49fb2011daa6'
  }

  async getAsV906(key1: number, key2: Uint8Array): Promise<v906.DepositData | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData', key1, key2)
  }

  async getManyAsV906(keys: [number, Uint8Array][]): Promise<(v906.DepositData | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData', keys)
  }

  async getAllAsV906(): Promise<(v906.DepositData)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData')
  }

  get isV916() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositData') === '8e9864a36fde2f26939357ad4ede24632013f32e5c248b0bd6055e7968e69e20'
  }

  async getAsV916(key1: number, key2: Uint8Array): Promise<v916.DepositData | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData', key1, key2)
  }

  async getManyAsV916(keys: [number, Uint8Array][]): Promise<(v916.DepositData | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData', keys)
  }

  async getAllAsV916(): Promise<(v916.DepositData)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData')
  }

  get isV920() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositData') === '634a1663b0003deb6ef436146751a97aa4ef1d2764398f87b0fd6c70c6f742c3'
  }

  async getAsV920(key1: number, key2: Uint8Array): Promise<v920.DepositData | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData', key1, key2)
  }

  async getManyAsV920(keys: [number, Uint8Array][]): Promise<(v920.DepositData | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData', keys)
  }

  async getAllAsV920(): Promise<(v920.DepositData)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositData') != null
  }
}

export class LiquidityMiningTotalDepositDataV200Storage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV922() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositDataV200') === '6ed7623801088bb5adc6221f680b06c03bfbb138671de378f27d32516fb038f1'
  }

  async getAsV922(key1: number, key2: Uint8Array): Promise<v922.DepositData | undefined> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200', key1, key2)
  }

  async getManyAsV922(keys: [number, Uint8Array][]): Promise<(v922.DepositData | undefined)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200', keys)
  }

  async getAllAsV922(): Promise<(v922.DepositData)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200')
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositDataV200') === 'aa6e5522439d53bcafb3ee9ce9ecb6987adca31c0e35e9d5724c7234b0367962'
  }

  async getAsV932(key1: number, key2: Uint8Array): Promise<v932.DepositData | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200', key1, key2)
  }

  async getManyAsV932(keys: [number, Uint8Array][]): Promise<(v932.DepositData | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200', keys)
  }

  async getAllAsV932(): Promise<(v932.DepositData)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositDataV200') === '57e10c53df75440f1eca0760d89600eb778094f49d5dab3bee184222d4e85197'
  }

  async getAsV956(key1: number, key2: Uint8Array): Promise<v956.DepositData | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200', key1, key2)
  }

  async getManyAsV956(keys: [number, Uint8Array][]): Promise<(v956.DepositData | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200', keys)
  }

  async getAllAsV956(): Promise<(v956.DepositData)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositDataV200') === 'ff39d1c04d90c48f25f103612c5881f19d13f24f128ae8837a0ffcf5e89717e9'
  }

  async getAsV962(key1: number, key2: Uint8Array): Promise<v962.DepositData | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200', key1, key2)
  }

  async getManyAsV962(keys: [number, Uint8Array][]): Promise<(v962.DepositData | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200', keys)
  }

  async getAllAsV962(): Promise<(v962.DepositData)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalDepositDataV200')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalDepositDataV200') != null
  }
}

export class LiquidityMiningTotalPoolInfosStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV901() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfos') === '0f38f9e4e155540e18a98f17f220d84bdab59535d521cb2d84986b5dbab622be'
  }

  async getAsV901(key: number): Promise<v901.PoolInfo | undefined> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', key)
  }

  async getManyAsV901(keys: number[]): Promise<(v901.PoolInfo | undefined)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', keys.map(k => [k]))
  }

  async getAllAsV901(): Promise<(v901.PoolInfo)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos')
  }

  get isV906() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfos') === '660d2b7ab221d6edc90beeb9a60fa078fd9bf40c04dce9a2cb79b856012cb6b8'
  }

  async getAsV906(key: number): Promise<v906.PoolInfo | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', key)
  }

  async getManyAsV906(keys: number[]): Promise<(v906.PoolInfo | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.PoolInfo)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos')
  }

  get isV912() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfos') === '91cf33b0a98298af04fe6230d8cec4c0f026bebe38343bd1dde0d9a335bae249'
  }

  async getAsV912(key: number): Promise<v912.PoolInfo | undefined> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', key)
  }

  async getManyAsV912(keys: number[]): Promise<(v912.PoolInfo | undefined)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', keys.map(k => [k]))
  }

  async getAllAsV912(): Promise<(v912.PoolInfo)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos')
  }

  get isV916() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfos') === '0b76589672720817560b0ca37da71b5ea94f67fbcd967b766d3ab50f41d20a18'
  }

  async getAsV916(key: number): Promise<v916.PoolInfo | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', key)
  }

  async getManyAsV916(keys: number[]): Promise<(v916.PoolInfo | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(v916.PoolInfo)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos')
  }

  get isV920() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfos') === '66e3324422177c57109dcdf7fb03ec023dc6aa8ff535dcf3ed140cdb63235903'
  }

  async getAsV920(key: number): Promise<v920.PoolInfo | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', key)
  }

  async getManyAsV920(keys: number[]): Promise<(v920.PoolInfo | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(v920.PoolInfo)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfos')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfos') != null
  }
}

export class LiquidityMiningTotalPoolInfosV200Storage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV922() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfosV200') === '86f6936019ba7f4651fcb0354853b9ff479035c7590cc71729629084fffc9e31'
  }

  async getAsV922(key: number): Promise<v922.PoolInfo | undefined> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200', key)
  }

  async getManyAsV922(keys: number[]): Promise<(v922.PoolInfo | undefined)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200', keys.map(k => [k]))
  }

  async getAllAsV922(): Promise<(v922.PoolInfo)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200')
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfosV200') === '67950ed65a98c6ea7c567b9e974e0660d020959f3d6ba5f2f33af0055a0b0ab1'
  }

  async getAsV932(key: number): Promise<v932.PoolInfo | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200', key)
  }

  async getManyAsV932(keys: number[]): Promise<(v932.PoolInfo | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.PoolInfo)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfosV200') === '1229e49914806c94a34fb7eca8c203818447b3b3262c2eb00c518386f0bd4456'
  }

  async getAsV956(key: number): Promise<v956.PoolInfo | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200', key)
  }

  async getManyAsV956(keys: number[]): Promise<(v956.PoolInfo | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.PoolInfo)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfosV200') === '5933b21940e163fb2c465fecee1ae3ea5f311c8cecf47b3db465d34ea970a321'
  }

  async getAsV962(key: number): Promise<v962.PoolInfo | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200', key)
  }

  async getManyAsV962(keys: number[]): Promise<(v962.PoolInfo | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.PoolInfo)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMining', 'TotalPoolInfosV200')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMining', 'TotalPoolInfosV200') != null
  }
}

export class LiquidityMiningDOTChargedPoolIdsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The storage is used to store pool-ids which point to the Pools at `PoolState::Charged`.
   * 
   *  Actually, the pools(that the storage points to) are pending to be activated by `Hook`;
   *  The activation means converting the pools from `PoolState::Charged` to `PoolState::Ongoing`
   *  after the conditions that are set at the pool-creation stage are met.
   */
  get isV910() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'ChargedPoolIds') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  The storage is used to store pool-ids which point to the Pools at `PoolState::Charged`.
   * 
   *  Actually, the pools(that the storage points to) are pending to be activated by `Hook`;
   *  The activation means converting the pools from `PoolState::Charged` to `PoolState::Ongoing`
   *  after the conditions that are set at the pool-creation stage are met.
   */
  async getAsV910(): Promise<number[]> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'ChargedPoolIds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'ChargedPoolIds') != null
  }
}

export class LiquidityMiningDOTNextPoolIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV910() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'NextPoolId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV910(): Promise<number> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'NextPoolId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'NextPoolId') != null
  }
}

export class LiquidityMiningDOTPalletVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV922() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'PalletVersion') === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
  }

  async getAsV922(): Promise<v922.StorageVersion> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'PalletVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'PalletVersion') != null
  }
}

export class LiquidityMiningDOTTotalDepositDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV910() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalDepositData') === 'd9da5bf3663411d6cae1ae97ac1695e50e659083f99efa8b98ae49fb2011daa6'
  }

  async getAsV910(key1: number, key2: Uint8Array): Promise<v910.DepositData | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositData', key1, key2)
  }

  async getManyAsV910(keys: [number, Uint8Array][]): Promise<(v910.DepositData | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositData', keys)
  }

  async getAllAsV910(): Promise<(v910.DepositData)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositData')
  }

  get isV916() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalDepositData') === '8e9864a36fde2f26939357ad4ede24632013f32e5c248b0bd6055e7968e69e20'
  }

  async getAsV916(key1: number, key2: Uint8Array): Promise<v916.DepositData | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositData', key1, key2)
  }

  async getManyAsV916(keys: [number, Uint8Array][]): Promise<(v916.DepositData | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositData', keys)
  }

  async getAllAsV916(): Promise<(v916.DepositData)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositData')
  }

  get isV920() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalDepositData') === '634a1663b0003deb6ef436146751a97aa4ef1d2764398f87b0fd6c70c6f742c3'
  }

  async getAsV920(key1: number, key2: Uint8Array): Promise<v920.DepositData | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositData', key1, key2)
  }

  async getManyAsV920(keys: [number, Uint8Array][]): Promise<(v920.DepositData | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositData', keys)
  }

  async getAllAsV920(): Promise<(v920.DepositData)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalDepositData') != null
  }
}

export class LiquidityMiningDOTTotalDepositDataV200Storage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV922() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalDepositDataV200') === '6ed7623801088bb5adc6221f680b06c03bfbb138671de378f27d32516fb038f1'
  }

  async getAsV922(key1: number, key2: Uint8Array): Promise<v922.DepositData | undefined> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200', key1, key2)
  }

  async getManyAsV922(keys: [number, Uint8Array][]): Promise<(v922.DepositData | undefined)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200', keys)
  }

  async getAllAsV922(): Promise<(v922.DepositData)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200')
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalDepositDataV200') === 'aa6e5522439d53bcafb3ee9ce9ecb6987adca31c0e35e9d5724c7234b0367962'
  }

  async getAsV932(key1: number, key2: Uint8Array): Promise<v932.DepositData | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200', key1, key2)
  }

  async getManyAsV932(keys: [number, Uint8Array][]): Promise<(v932.DepositData | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200', keys)
  }

  async getAllAsV932(): Promise<(v932.DepositData)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalDepositDataV200') === '57e10c53df75440f1eca0760d89600eb778094f49d5dab3bee184222d4e85197'
  }

  async getAsV956(key1: number, key2: Uint8Array): Promise<v956.DepositData | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200', key1, key2)
  }

  async getManyAsV956(keys: [number, Uint8Array][]): Promise<(v956.DepositData | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200', keys)
  }

  async getAllAsV956(): Promise<(v956.DepositData)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalDepositDataV200') === 'ff39d1c04d90c48f25f103612c5881f19d13f24f128ae8837a0ffcf5e89717e9'
  }

  async getAsV962(key1: number, key2: Uint8Array): Promise<v962.DepositData | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200', key1, key2)
  }

  async getManyAsV962(keys: [number, Uint8Array][]): Promise<(v962.DepositData | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200', keys)
  }

  async getAllAsV962(): Promise<(v962.DepositData)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalDepositDataV200')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalDepositDataV200') != null
  }
}

export class LiquidityMiningDOTTotalPoolInfosStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV910() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfos') === '660d2b7ab221d6edc90beeb9a60fa078fd9bf40c04dce9a2cb79b856012cb6b8'
  }

  async getAsV910(key: number): Promise<v910.PoolInfo | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos', key)
  }

  async getManyAsV910(keys: number[]): Promise<(v910.PoolInfo | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos', keys.map(k => [k]))
  }

  async getAllAsV910(): Promise<(v910.PoolInfo)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos')
  }

  get isV912() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfos') === '91cf33b0a98298af04fe6230d8cec4c0f026bebe38343bd1dde0d9a335bae249'
  }

  async getAsV912(key: number): Promise<v912.PoolInfo | undefined> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos', key)
  }

  async getManyAsV912(keys: number[]): Promise<(v912.PoolInfo | undefined)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos', keys.map(k => [k]))
  }

  async getAllAsV912(): Promise<(v912.PoolInfo)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos')
  }

  get isV916() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfos') === '0b76589672720817560b0ca37da71b5ea94f67fbcd967b766d3ab50f41d20a18'
  }

  async getAsV916(key: number): Promise<v916.PoolInfo | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos', key)
  }

  async getManyAsV916(keys: number[]): Promise<(v916.PoolInfo | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(v916.PoolInfo)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos')
  }

  get isV920() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfos') === '66e3324422177c57109dcdf7fb03ec023dc6aa8ff535dcf3ed140cdb63235903'
  }

  async getAsV920(key: number): Promise<v920.PoolInfo | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos', key)
  }

  async getManyAsV920(keys: number[]): Promise<(v920.PoolInfo | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(v920.PoolInfo)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfos')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfos') != null
  }
}

export class LiquidityMiningDOTTotalPoolInfosV200Storage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV922() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfosV200') === '86f6936019ba7f4651fcb0354853b9ff479035c7590cc71729629084fffc9e31'
  }

  async getAsV922(key: number): Promise<v922.PoolInfo | undefined> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200', key)
  }

  async getManyAsV922(keys: number[]): Promise<(v922.PoolInfo | undefined)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200', keys.map(k => [k]))
  }

  async getAllAsV922(): Promise<(v922.PoolInfo)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200')
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfosV200') === '67950ed65a98c6ea7c567b9e974e0660d020959f3d6ba5f2f33af0055a0b0ab1'
  }

  async getAsV932(key: number): Promise<v932.PoolInfo | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200', key)
  }

  async getManyAsV932(keys: number[]): Promise<(v932.PoolInfo | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.PoolInfo)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfosV200') === '1229e49914806c94a34fb7eca8c203818447b3b3262c2eb00c518386f0bd4456'
  }

  async getAsV956(key: number): Promise<v956.PoolInfo | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200', key)
  }

  async getManyAsV956(keys: number[]): Promise<(v956.PoolInfo | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.PoolInfo)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfosV200') === '5933b21940e163fb2c465fecee1ae3ea5f311c8cecf47b3db465d34ea970a321'
  }

  async getAsV962(key: number): Promise<v962.PoolInfo | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200', key)
  }

  async getManyAsV962(keys: number[]): Promise<(v962.PoolInfo | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.PoolInfo)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'LiquidityMiningDOT', 'TotalPoolInfosV200')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LiquidityMiningDOT', 'TotalPoolInfosV200') != null
  }
}

export class MerkleDistributorClaimedBitMapStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV914() {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'ClaimedBitMap') === 'fa817a6bcf82f7023e26eebf037bc2ec0bb72a77eb87987b122491dee1ae23d4'
  }

  async getAsV914(key1: number, key2: number): Promise<number> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'MerkleDistributor', 'ClaimedBitMap', key1, key2)
  }

  async getManyAsV914(keys: [number, number][]): Promise<(number)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'ClaimedBitMap', keys)
  }

  async getAllAsV914(): Promise<(number)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'ClaimedBitMap')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'ClaimedBitMap') != null
  }
}

export class MerkleDistributorCreateWhiteSetStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Accounts in the whitelist can create merkle distributor.
   */
  get isV923() {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'CreateWhiteSet') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  Accounts in the whitelist can create merkle distributor.
   */
  async getAsV923(): Promise<Uint8Array[]> {
    assert(this.isV923)
    return this._chain.getStorage(this.blockHash, 'MerkleDistributor', 'CreateWhiteSet')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'CreateWhiteSet') != null
  }
}

export class MerkleDistributorMerkleDistributorMetadataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV914() {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'MerkleDistributorMetadata') === '26189a34b4d126963e6089d8fe0d5514422e774de597156e415f7fb8a583b3f0'
  }

  async getAsV914(key: number): Promise<v914.MerkleMetadata | undefined> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', key)
  }

  async getManyAsV914(keys: number[]): Promise<(v914.MerkleMetadata | undefined)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', keys.map(k => [k]))
  }

  async getAllAsV914(): Promise<(v914.MerkleMetadata)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata')
  }

  get isV916() {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'MerkleDistributorMetadata') === '7921f83993dd4ce17be2a3cc55d030a669f32dd492f31c011c3d72a7027e2f09'
  }

  async getAsV916(key: number): Promise<v916.MerkleMetadata | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', key)
  }

  async getManyAsV916(keys: number[]): Promise<(v916.MerkleMetadata | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(v916.MerkleMetadata)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata')
  }

  get isV920() {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'MerkleDistributorMetadata') === '4bfa93cd2ea75f1c3f05fbb05dd6da889e77e4a64bc79ac2b0933f841a4efb8b'
  }

  async getAsV920(key: number): Promise<v920.MerkleMetadata | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', key)
  }

  async getManyAsV920(keys: number[]): Promise<(v920.MerkleMetadata | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(v920.MerkleMetadata)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata')
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'MerkleDistributorMetadata') === '8e4364c86eca3692bb490a03efa3d71007402cdffae8c6701bbab47e1ce86c55'
  }

  async getAsV932(key: number): Promise<v932.MerkleMetadata | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', key)
  }

  async getManyAsV932(keys: number[]): Promise<(v932.MerkleMetadata | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.MerkleMetadata)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'MerkleDistributorMetadata') === 'c0433acc4a054ff8bb7f5b7ae0f1fdafcc11198373ed28158e0a1c355ae0f11d'
  }

  async getAsV956(key: number): Promise<v956.MerkleMetadata | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', key)
  }

  async getManyAsV956(keys: number[]): Promise<(v956.MerkleMetadata | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.MerkleMetadata)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'MerkleDistributorMetadata') === '00e8aed2136138c2b909019d5c3c15a6630602136c8bf3427c8e5f369f4daa3e'
  }

  async getAsV962(key: number): Promise<v962.MerkleMetadata | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', key)
  }

  async getManyAsV962(keys: number[]): Promise<(v962.MerkleMetadata | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.MerkleMetadata)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'MerkleDistributor', 'MerkleDistributorMetadata')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'MerkleDistributorMetadata') != null
  }
}

export class MerkleDistributorNextMerkleDistributorIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV914() {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'NextMerkleDistributorId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV914(): Promise<number> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'MerkleDistributor', 'NextMerkleDistributorId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MerkleDistributor', 'NextMerkleDistributorId') != null
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

  get isV804() {
    return this._chain.getStorageItemTypeHash('Multisig', 'Calls') === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
  }

  async getAsV804(key: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint] | undefined> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'Multisig', 'Calls', key)
  }

  async getManyAsV804(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Calls', keys.map(k => [k]))
  }

  async getAllAsV804(): Promise<([Uint8Array, Uint8Array, bigint])[]> {
    assert(this.isV804)
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
  get isV804() {
    return this._chain.getStorageItemTypeHash('Multisig', 'Multisigs') === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
  }

  /**
   *  The set of open multisig operations.
   */
  async getAsV804(key1: Uint8Array, key2: Uint8Array): Promise<v804.Multisig | undefined> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'Multisig', 'Multisigs', key1, key2)
  }

  async getManyAsV804(keys: [Uint8Array, Uint8Array][]): Promise<(v804.Multisig | undefined)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Multisigs', keys)
  }

  async getAllAsV804(): Promise<(v804.Multisig)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Multisigs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Multisig', 'Multisigs') != null
  }
}

export class ParachainInfoParachainIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainInfo', 'ParachainId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV1(): Promise<number> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainInfo', 'ParachainId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainInfo', 'ParachainId') != null
  }
}

export class ParachainStakingAtStakeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Snapshot of collator delegation stake at the start of the round
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'AtStake') === '32129103df227bc6b2da313f63e6d8fb4e3f78711b3492d4fa2852c2d77a461b'
  }

  /**
   *  Snapshot of collator delegation stake at the start of the round
   */
  async getAsV930(key1: number, key2: Uint8Array): Promise<v930.CollatorSnapshot> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'AtStake', key1, key2)
  }

  async getManyAsV930(keys: [number, Uint8Array][]): Promise<(v930.CollatorSnapshot)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'AtStake', keys)
  }

  async getAllAsV930(): Promise<(v930.CollatorSnapshot)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'AtStake')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'AtStake') != null
  }
}

export class ParachainStakingAwardedPtsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Points for each collator per round
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'AwardedPts') === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
  }

  /**
   *  Points for each collator per round
   */
  async getAsV930(key1: number, key2: Uint8Array): Promise<number> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'AwardedPts', key1, key2)
  }

  async getManyAsV930(keys: [number, Uint8Array][]): Promise<(number)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'AwardedPts', keys)
  }

  async getAllAsV930(): Promise<(number)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'AwardedPts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'AwardedPts') != null
  }
}

export class ParachainStakingBottomDelegationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Bottom delegations for collator candidate
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'BottomDelegations') === '78bf8579e653049b49aedc45a4a7673b44e549d6b3565ff9ed878728d9ad491f'
  }

  /**
   *  Bottom delegations for collator candidate
   */
  async getAsV930(key: Uint8Array): Promise<v930.Delegations | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'BottomDelegations', key)
  }

  async getManyAsV930(keys: Uint8Array[]): Promise<(v930.Delegations | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'BottomDelegations', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.Delegations)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'BottomDelegations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'BottomDelegations') != null
  }
}

export class ParachainStakingCandidateInfoStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Get collator candidate info associated with an account if account is candidate else None
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CandidateInfo') === '492bae942a9c270d85b89619b756314f7f898f3d8cce98311fd5a46d4f213379'
  }

  /**
   *  Get collator candidate info associated with an account if account is candidate else None
   */
  async getAsV930(key: Uint8Array): Promise<v930.CandidateMetadata | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'CandidateInfo', key)
  }

  async getManyAsV930(keys: Uint8Array[]): Promise<(v930.CandidateMetadata | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'CandidateInfo', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.CandidateMetadata)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'CandidateInfo')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CandidateInfo') != null
  }
}

export class ParachainStakingCandidatePoolStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The pool of collator candidates, each with their total backing stake
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CandidatePool') === '41b32af36cf7804dae099ff6a25b16df07f09d21ddb760beb8ff5857fd9347c0'
  }

  /**
   *  The pool of collator candidates, each with their total backing stake
   */
  async getAsV930(): Promise<v930.Bond[]> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'CandidatePool')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CandidatePool') != null
  }
}

export class ParachainStakingCandidateStateStorage {
  private readonly _chain: Chain
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
   *  Get collator candidate state associated with an account if account is a candidate else None
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CandidateState') === '43656a595b6670e14d6bcd78ba50bb1053d73d86b2f3bc251115dee26b72d7de'
  }

  /**
   *  DEPRECATED
   *  Get collator candidate state associated with an account if account is a candidate else None
   */
  async getAsV930(key: Uint8Array): Promise<v930.CollatorCandidate | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'CandidateState', key)
  }

  async getManyAsV930(keys: Uint8Array[]): Promise<(v930.CollatorCandidate | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'CandidateState', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.CollatorCandidate)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'CandidateState')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CandidateState') != null
  }
}

export class ParachainStakingCollatorCommissionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Commission percent taken off of rewards for all collators
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CollatorCommission') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Commission percent taken off of rewards for all collators
   */
  async getAsV930(): Promise<number> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'CollatorCommission')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CollatorCommission') != null
  }
}

export class ParachainStakingCollatorReserveToLockMigrationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Temporary storage item to track whether a given collator's reserve has been migrated.
   */
  get isV954() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CollatorReserveToLockMigrations') === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
  }

  /**
   *  Temporary storage item to track whether a given collator's reserve has been migrated.
   */
  async getAsV954(key: Uint8Array): Promise<boolean> {
    assert(this.isV954)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'CollatorReserveToLockMigrations', key)
  }

  async getManyAsV954(keys: Uint8Array[]): Promise<(boolean)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'CollatorReserveToLockMigrations', keys.map(k => [k]))
  }

  async getAllAsV954(): Promise<(boolean)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'CollatorReserveToLockMigrations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CollatorReserveToLockMigrations') != null
  }
}

export class ParachainStakingCollatorState2Storage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  DEPRECATED in favor of CandidateState
   *  Get collator state associated with an account if account is collating else None
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CollatorState2') === '4cc7fe379f81b38fbb1fe44c17480fa577922d697bd7030d54418f8f552a8558'
  }

  /**
   *  DEPRECATED in favor of CandidateState
   *  Get collator state associated with an account if account is collating else None
   */
  async getAsV930(key: Uint8Array): Promise<v930.Collator2 | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'CollatorState2', key)
  }

  async getManyAsV930(keys: Uint8Array[]): Promise<(v930.Collator2 | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'CollatorState2', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.Collator2)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'CollatorState2')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'CollatorState2') != null
  }
}

export class ParachainStakingDelayedPayoutsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Delayed payouts
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'DelayedPayouts') === 'c6b2ab1dc6cebec99486fb97e13b7ec0e06f244afbccf94e53a9bead67d691fb'
  }

  /**
   *  Delayed payouts
   */
  async getAsV930(key: number): Promise<v930.DelayedPayout | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'DelayedPayouts', key)
  }

  async getManyAsV930(keys: number[]): Promise<(v930.DelayedPayout | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelayedPayouts', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.DelayedPayout)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelayedPayouts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'DelayedPayouts') != null
  }
}

export class ParachainStakingDelegationScheduledRequestsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores outstanding delegation requests per collator.
   */
  get isV954() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'DelegationScheduledRequests') === 'def0195d2911f6779376336ef9bf61cf5519000bda52060ded7e276e3606c4f8'
  }

  /**
   *  Stores outstanding delegation requests per collator.
   */
  async getAsV954(key: Uint8Array): Promise<v954.ScheduledRequest[]> {
    assert(this.isV954)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'DelegationScheduledRequests', key)
  }

  async getManyAsV954(keys: Uint8Array[]): Promise<(v954.ScheduledRequest[])[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelegationScheduledRequests', keys.map(k => [k]))
  }

  async getAllAsV954(): Promise<(v954.ScheduledRequest[])[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelegationScheduledRequests')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'DelegationScheduledRequests') != null
  }
}

export class ParachainStakingDelegatorReserveToLockMigrationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Temporary storage item to track whether a given delegator's reserve has been migrated.
   */
  get isV954() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'DelegatorReserveToLockMigrations') === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
  }

  /**
   *  Temporary storage item to track whether a given delegator's reserve has been migrated.
   */
  async getAsV954(key: Uint8Array): Promise<boolean> {
    assert(this.isV954)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'DelegatorReserveToLockMigrations', key)
  }

  async getManyAsV954(keys: Uint8Array[]): Promise<(boolean)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelegatorReserveToLockMigrations', keys.map(k => [k]))
  }

  async getAllAsV954(): Promise<(boolean)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelegatorReserveToLockMigrations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'DelegatorReserveToLockMigrations') != null
  }
}

export class ParachainStakingDelegatorStateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Get delegator state associated with an account if account is delegating else None
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'DelegatorState') === 'a454af02fae693894740f1e3f06975203185b4f396ff6c08a065fca2047f852c'
  }

  /**
   *  Get delegator state associated with an account if account is delegating else None
   */
  async getAsV930(key: Uint8Array): Promise<v930.Delegator | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'DelegatorState', key)
  }

  async getManyAsV930(keys: Uint8Array[]): Promise<(v930.Delegator | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelegatorState', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.Delegator)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelegatorState')
  }

  /**
   *  Get delegator state associated with an account if account is delegating else None
   */
  get isV954() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'DelegatorState') === '6fa79ce172c27e63a5868142da60ed6770fb285e653b0980bca0ed7b7fa435be'
  }

  /**
   *  Get delegator state associated with an account if account is delegating else None
   */
  async getAsV954(key: Uint8Array): Promise<v954.Delegator | undefined> {
    assert(this.isV954)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'DelegatorState', key)
  }

  async getManyAsV954(keys: Uint8Array[]): Promise<(v954.Delegator | undefined)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelegatorState', keys.map(k => [k]))
  }

  async getAllAsV954(): Promise<(v954.Delegator)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'DelegatorState')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'DelegatorState') != null
  }
}

export class ParachainStakingInflationConfigStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Inflation configuration
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'InflationConfig') === 'c8e7064a13ebcd51a4ff87124de1d79c5482ddb97b63d7b9f431be1dacfcb089'
  }

  /**
   *  Inflation configuration
   */
  async getAsV930(): Promise<v930.InflationInfo> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'InflationConfig')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'InflationConfig') != null
  }
}

export class ParachainStakingNominatorState2Storage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  DEPRECATED in favor of DelegatorState
   *  Get nominator state associated with an account if account is nominating else None
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'NominatorState2') === '3a21166abfd6f192518c4e7b96f00aa6f26c08cb7933d8102faf5043ab0ccdbd'
  }

  /**
   *  DEPRECATED in favor of DelegatorState
   *  Get nominator state associated with an account if account is nominating else None
   */
  async getAsV930(key: Uint8Array): Promise<v930.Nominator2 | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'NominatorState2', key)
  }

  async getManyAsV930(keys: Uint8Array[]): Promise<(v930.Nominator2 | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'NominatorState2', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.Nominator2)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'NominatorState2')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'NominatorState2') != null
  }
}

export class ParachainStakingParachainBondInfoStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Parachain bond config info { account, percent_of_inflation }
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'ParachainBondInfo') === '91279ed77e7d2134ba3172c0c39c5568ee77280e877f59ebf185f2fc16447f39'
  }

  /**
   *  Parachain bond config info { account, percent_of_inflation }
   */
  async getAsV930(): Promise<v930.ParachainBondConfig> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'ParachainBondInfo')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'ParachainBondInfo') != null
  }
}

export class ParachainStakingPointsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total points awarded to collators for block production in the round
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'Points') === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
  }

  /**
   *  Total points awarded to collators for block production in the round
   */
  async getAsV930(key: number): Promise<number> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'Points', key)
  }

  async getManyAsV930(keys: number[]): Promise<(number)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'Points', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(number)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'Points')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'Points') != null
  }
}

export class ParachainStakingRoundStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current round index and next round scheduled transition
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'Round') === 'b5f3d49d6ba2e559d598977dc55516a649f67db6a4edb6de43b94edb90800928'
  }

  /**
   *  Current round index and next round scheduled transition
   */
  async getAsV930(): Promise<v930.RoundInfo> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'Round')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'Round') != null
  }
}

export class ParachainStakingSelectedCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The collator candidates selected for the current round
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'SelectedCandidates') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The collator candidates selected for the current round
   */
  async getAsV930(): Promise<Uint8Array[]> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'SelectedCandidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'SelectedCandidates') != null
  }
}

export class ParachainStakingStakedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total counted stake for selected candidates in the round
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'Staked') === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
  }

  /**
   *  Total counted stake for selected candidates in the round
   */
  async getAsV930(key: number): Promise<bigint> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'Staked', key)
  }

  async getManyAsV930(keys: number[]): Promise<(bigint)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'Staked', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(bigint)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'Staked')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'Staked') != null
  }
}

export class ParachainStakingTopDelegationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Top delegations for collator candidate
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'TopDelegations') === '78bf8579e653049b49aedc45a4a7673b44e549d6b3565ff9ed878728d9ad491f'
  }

  /**
   *  Top delegations for collator candidate
   */
  async getAsV930(key: Uint8Array): Promise<v930.Delegations | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'TopDelegations', key)
  }

  async getManyAsV930(keys: Uint8Array[]): Promise<(v930.Delegations | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'TopDelegations', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.Delegations)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'ParachainStaking', 'TopDelegations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'TopDelegations') != null
  }
}

export class ParachainStakingTotalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total capital locked by this staking pallet
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'Total') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  Total capital locked by this staking pallet
   */
  async getAsV930(): Promise<bigint> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'Total')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'Total') != null
  }
}

export class ParachainStakingTotalSelectedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total candidates selected every round
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'TotalSelected') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The total candidates selected every round
   */
  async getAsV930(): Promise<number> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'ParachainStaking', 'TotalSelected')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainStaking', 'TotalSelected') != null
  }
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
   *  announcing the weight of `on_initialize` and `on_finalize`.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
   *  announcing the weight of `on_initialize` and `on_finalize`.
   */
  async getAsV1(): Promise<number> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate') != null
  }
}

export class ParachainSystemAuthorizedUpgradeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next authorized upgrade, if there is one.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AuthorizedUpgrade') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The next authorized upgrade, if there is one.
   */
  async getAsV1(): Promise<Uint8Array | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'AuthorizedUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AuthorizedUpgrade') != null
  }
}

export class ParachainSystemCustomValidationHeadDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A custom head data that should be returned as result of `validate_block`.
   * 
   *  See [`Pallet::set_custom_validation_head_data`] for more information.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'CustomValidationHeadData') === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
  }

  /**
   *  A custom head data that should be returned as result of `validate_block`.
   * 
   *  See [`Pallet::set_custom_validation_head_data`] for more information.
   */
  async getAsV926(): Promise<Uint8Array | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'CustomValidationHeadData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'CustomValidationHeadData') != null
  }
}

export class ParachainSystemDidSetValidationCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Were the validation data set to notify the relay chain?
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'DidSetValidationCode') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Were the validation data set to notify the relay chain?
   */
  async getAsV1(): Promise<boolean> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'DidSetValidationCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'DidSetValidationCode') != null
  }
}

export class ParachainSystemHostConfigurationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HostConfiguration') === 'e7770235be9d14ed134fc6d0effb398cdedbf1010adc4f3555004a1d10de49d3'
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsV1(): Promise<v1.AbridgedHostConfiguration | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HostConfiguration')
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HostConfiguration') === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsV926(): Promise<v926.V1AbridgedHostConfiguration | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HostConfiguration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HostConfiguration') != null
  }
}

export class ParachainSystemHrmpOutboundMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  HRMP messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpOutboundMessages') === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
  }

  /**
   *  HRMP messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsV1(): Promise<v1.OutboundHrmpMessage[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HrmpOutboundMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpOutboundMessages') != null
  }
}

export class ParachainSystemHrmpWatermarkStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  HRMP watermark that was set in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpWatermark') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  HRMP watermark that was set in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsV1(): Promise<number> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HrmpWatermark')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpWatermark') != null
  }
}

export class ParachainSystemLastDmqMqcHeadStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The last downward message queue chain head we have observed.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastDmqMqcHead') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  The last downward message queue chain head we have observed.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  async getAsV1(): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastDmqMqcHead')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastDmqMqcHead') != null
  }
}

export class ParachainSystemLastHrmpMqcHeadsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The message queue chain heads we have observed per each channel incoming channel.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastHrmpMqcHeads') === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
  }

  /**
   *  The message queue chain heads we have observed per each channel incoming channel.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  async getAsV1(): Promise<[number, Uint8Array][]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastHrmpMqcHeads')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastHrmpMqcHeads') != null
  }
}

export class ParachainSystemLastRelayChainBlockNumberStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The relay chain block number associated with the last parachain block.
   */
  get isV952() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastRelayChainBlockNumber') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The relay chain block number associated with the last parachain block.
   */
  async getAsV952(): Promise<number> {
    assert(this.isV952)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastRelayChainBlockNumber')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastRelayChainBlockNumber') != null
  }
}

export class ParachainSystemLastUpgradeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The last relay parent block number at which we signalled the code upgrade.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastUpgrade') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The last relay parent block number at which we signalled the code upgrade.
   */
  async getAsV1(): Promise<number> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastUpgrade') != null
  }
}

export class ParachainSystemNewValidationCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  New validation code that was set in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block if no other pallet already set
   *  the value.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'NewValidationCode') === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
  }

  /**
   *  New validation code that was set in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block if no other pallet already set
   *  the value.
   */
  async getAsV1(): Promise<Uint8Array | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'NewValidationCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'NewValidationCode') != null
  }
}

export class ParachainSystemPendingRelayChainBlockNumberStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  We need to store the new validation function for the span between
   *  setting it and applying it. If it has a
   *  value, then [`PendingValidationCode`] must have a real value, and
   *  together will coordinate the block number where the upgrade will happen.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingRelayChainBlockNumber') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  We need to store the new validation function for the span between
   *  setting it and applying it. If it has a
   *  value, then [`PendingValidationCode`] must have a real value, and
   *  together will coordinate the block number where the upgrade will happen.
   */
  async getAsV1(): Promise<number | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'PendingRelayChainBlockNumber')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingRelayChainBlockNumber') != null
  }
}

export class ParachainSystemPendingUpwardMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Upward messages that are still pending and not yet send to the relay chain.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingUpwardMessages') === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
  }

  /**
   *  Upward messages that are still pending and not yet send to the relay chain.
   */
  async getAsV1(): Promise<Uint8Array[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'PendingUpwardMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingUpwardMessages') != null
  }
}

export class ParachainSystemPendingValidationCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The new validation function we will upgrade to when the relay chain
   *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
   *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingValidationCode') === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
  }

  /**
   *  The new validation function we will upgrade to when the relay chain
   *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
   *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
   */
  async getAsV1(): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'PendingValidationCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingValidationCode') != null
  }
}

export class ParachainSystemProcessedDownwardMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of downward messages processed in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ProcessedDownwardMessages') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of downward messages processed in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsV1(): Promise<number> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ProcessedDownwardMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ProcessedDownwardMessages') != null
  }
}

export class ParachainSystemRelayStateProofStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The state proof for the last relay parent block.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelayStateProof') === '38f79414b788123884c7cc1e6c6ca89331d3264f4bdcf6dff4501d6b20966908'
  }

  /**
   *  The state proof for the last relay parent block.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsV940(): Promise<v940.StorageProof | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'RelayStateProof')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelayStateProof') != null
  }
}

export class ParachainSystemRelevantMessagingStateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The snapshot of some state related to messaging relevant to the current parachain as per
   *  the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelevantMessagingState') === 'a8475d62c5be29375db2b2aca3d863bedb2fca1d10144f0c95b18e80ccbd3559'
  }

  /**
   *  The snapshot of some state related to messaging relevant to the current parachain as per
   *  the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsV1(): Promise<v1.MessagingStateSnapshot | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'RelevantMessagingState')
  }

  /**
   *  The snapshot of some state related to messaging relevant to the current parachain as per
   *  the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelevantMessagingState') === '24e0311e0ec9634d6acff6e06aa83b4bd4c57957b8f7525bf0dd22f0a73d7b09'
  }

  /**
   *  The snapshot of some state related to messaging relevant to the current parachain as per
   *  the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsV906(): Promise<v906.MessagingStateSnapshot | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'RelevantMessagingState')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelevantMessagingState') != null
  }
}

export class ParachainSystemReservedDmpWeightOverrideStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedDmpWeightOverride') === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsV1(): Promise<bigint | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedDmpWeightOverride')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedDmpWeightOverride') != null
  }
}

export class ParachainSystemReservedXcmpWeightOverrideStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedXcmpWeightOverride') === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsV1(): Promise<bigint | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedXcmpWeightOverride')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedXcmpWeightOverride') != null
  }
}

export class ParachainSystemUpgradeRestrictionSignalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
   *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
   *  candidate will be invalid.
   * 
   *  This storage item is a mirror of the corresponding value for the current parachain from the
   *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
   *  set after the inherent.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpgradeRestrictionSignal') === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
  }

  /**
   *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
   *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
   *  candidate will be invalid.
   * 
   *  This storage item is a mirror of the corresponding value for the current parachain from the
   *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
   *  set after the inherent.
   */
  async getAsV908(): Promise<(v908.V1UpgradeRestriction | undefined)> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'UpgradeRestrictionSignal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpgradeRestrictionSignal') != null
  }
}

export class ParachainSystemUpwardMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Upward messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpwardMessages') === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
  }

  /**
   *  Upward messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsV1(): Promise<Uint8Array[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'UpwardMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpwardMessages') != null
  }
}

export class ParachainSystemValidationDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The [`PersistedValidationData`] set for this block.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ValidationData') === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
  }

  /**
   *  The [`PersistedValidationData`] set for this block.
   */
  async getAsV1(): Promise<v1.PersistedValidationData | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ValidationData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ValidationData') != null
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
   *  The present candidate list. A current member or runner-up can never enter this vector
   *  and is always implicitly assumed to be a candidate.
   * 
   *  Second element is the deposit.
   * 
   *  Invariant: Always sorted based on account id.
   */
  get isV803() {
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
  async getAsV803(): Promise<[Uint8Array, bigint][]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'ElectionRounds') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The total number of vote rounds that have happened, excluding the upcoming one.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
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
   *  The current elected members.
   * 
   *  Invariant: Always sorted based on account id.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Members') === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
  }

  /**
   *  The current elected members.
   * 
   *  Invariant: Always sorted based on account id.
   */
  async getAsV803(): Promise<v803.SeatHolder[]> {
    assert(this.isV803)
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
   *  The current reserved runners-up.
   * 
   *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
   *  last (i.e. _best_) runner-up will be replaced.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'RunnersUp') === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
  }

  /**
   *  The current reserved runners-up.
   * 
   *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
   *  last (i.e. _best_) runner-up will be replaced.
   */
  async getAsV803(): Promise<v803.SeatHolder[]> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'RunnersUp')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'RunnersUp') != null
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
   * 
   *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Voting') === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
  }

  /**
   *  Votes and locked stake of a particular voter.
   * 
   *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
   */
  async getAsV803(key: Uint8Array): Promise<v803.Voter> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'PhragmenElection', 'Voting', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(v803.Voter)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.Voter)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'PhragmenElection', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PhragmenElection', 'Voting') != null
  }
}

export class PolkadotXcmAssetTrapsStorage {
  private readonly _chain: Chain
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
  get isV910() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'AssetTraps') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  The existing asset traps.
   * 
   *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
   *  times this pair has been trapped (usually just 1 if it exists at all).
   */
  async getAsV910(key: Uint8Array): Promise<number> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'AssetTraps', key)
  }

  async getManyAsV910(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'AssetTraps', keys.map(k => [k]))
  }

  async getAllAsV910(): Promise<(number)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'AssetTraps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'AssetTraps') != null
  }
}

export class PolkadotXcmCurrentMigrationStorage {
  private readonly _chain: Chain
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
  get isV910() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'CurrentMigration') === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
  }

  /**
   *  The current migration's stage, if any.
   */
  async getAsV910(): Promise<v910.VersionMigrationStage | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'CurrentMigration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'CurrentMigration') != null
  }
}

export class PolkadotXcmQueriesStorage {
  private readonly _chain: Chain
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
  get isV910() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'Queries') === 'ae8e3438dd16f0912a0a76dfeb9e62216e42277085497217b9181be5bd15251e'
  }

  /**
   *  The ongoing queries.
   */
  async getAsV910(key: bigint): Promise<v910.QueryStatus | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'Queries', key)
  }

  async getManyAsV910(keys: bigint[]): Promise<(v910.QueryStatus | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'Queries', keys.map(k => [k]))
  }

  async getAllAsV910(): Promise<(v910.QueryStatus)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'Queries')
  }

  /**
   *  The ongoing queries.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'Queries') === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
  }

  /**
   *  The ongoing queries.
   */
  async getAsV926(key: bigint): Promise<v926.QueryStatus | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'Queries', key)
  }

  async getManyAsV926(keys: bigint[]): Promise<(v926.QueryStatus | undefined)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'Queries', keys.map(k => [k]))
  }

  async getAllAsV926(): Promise<(v926.QueryStatus)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'Queries')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'Queries') != null
  }
}

export class PolkadotXcmQueryCounterStorage {
  private readonly _chain: Chain
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
  get isV910() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'QueryCounter') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The latest available query index.
   */
  async getAsV910(): Promise<bigint> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'QueryCounter')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'QueryCounter') != null
  }
}

export class PolkadotXcmSafeXcmVersionStorage {
  private readonly _chain: Chain
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
  get isV910() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SafeXcmVersion') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Default version to encode XCM when latest version of destination is unknown. If `None`,
   *  then the destinations whose XCM version is unknown are considered unreachable.
   */
  async getAsV910(): Promise<number | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'SafeXcmVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SafeXcmVersion') != null
  }
}

export class PolkadotXcmSupportedVersionStorage {
  private readonly _chain: Chain
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
  get isV910() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SupportedVersion') === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
  }

  /**
   *  The Latest versions that we know various locations support.
   */
  async getAsV910(key1: number, key2: v910.VersionedMultiLocation): Promise<number | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'SupportedVersion', key1, key2)
  }

  async getManyAsV910(keys: [number, v910.VersionedMultiLocation][]): Promise<(number | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'SupportedVersion', keys)
  }

  async getAllAsV910(): Promise<(number)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'SupportedVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SupportedVersion') != null
  }
}

export class PolkadotXcmVersionDiscoveryQueueStorage {
  private readonly _chain: Chain
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
  get isV910() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionDiscoveryQueue') === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
  }

  /**
   *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
   *  the `u32` counter is the number of times that a send to the destination has been attempted,
   *  which is used as a prioritization.
   */
  async getAsV910(): Promise<[v910.VersionedMultiLocation, number][]> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'VersionDiscoveryQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionDiscoveryQueue') != null
  }
}

export class PolkadotXcmVersionNotifiersStorage {
  private readonly _chain: Chain
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
  get isV910() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifiers') === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
  }

  /**
   *  All locations that we have requested version notifications from.
   */
  async getAsV910(key1: number, key2: v910.VersionedMultiLocation): Promise<bigint | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifiers', key1, key2)
  }

  async getManyAsV910(keys: [number, v910.VersionedMultiLocation][]): Promise<(bigint | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifiers', keys)
  }

  async getAllAsV910(): Promise<(bigint)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifiers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifiers') != null
  }
}

export class PolkadotXcmVersionNotifyTargetsStorage {
  private readonly _chain: Chain
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
  get isV910() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifyTargets') === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
  }

  /**
   *  The target locations that are subscribed to our version changes, as well as the most recent
   *  of our versions we informed them of.
   */
  async getAsV910(key1: number, key2: v910.VersionedMultiLocation): Promise<[bigint, bigint, number] | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifyTargets', key1, key2)
  }

  async getManyAsV910(keys: [number, v910.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifyTargets', keys)
  }

  async getAllAsV910(): Promise<([bigint, bigint, number])[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifyTargets')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifyTargets') != null
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
  get isV926() {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  The preimages stored by this pallet.
   */
  async getAsV926(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'PreimageFor', key)
  }

  async getManyAsV926(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor', keys.map(k => [k]))
  }

  async getAllAsV926(): Promise<(Uint8Array)[]> {
    assert(this.isV926)
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
  get isV926() {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
  }

  /**
   *  The request status of a given hash.
   */
  async getAsV926(key: Uint8Array): Promise<v926.RequestStatus | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'StatusFor', key)
  }

  async getManyAsV926(keys: Uint8Array[]): Promise<(v926.RequestStatus | undefined)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor', keys.map(k => [k]))
  }

  async getAllAsV926(): Promise<(v926.RequestStatus)[]> {
    assert(this.isV926)
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
  get isV908() {
    return this._chain.getStorageItemTypeHash('Proxy', 'Announcements') === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
  }

  /**
   *  The announcements made by the proxy (key).
   */
  async getAsV908(key: Uint8Array): Promise<[v908.Announcement[], bigint]> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'Proxy', 'Announcements', key)
  }

  async getManyAsV908(keys: Uint8Array[]): Promise<([v908.Announcement[], bigint])[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Announcements', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<([v908.Announcement[], bigint])[]> {
    assert(this.isV908)
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
  get isV908() {
    return this._chain.getStorageItemTypeHash('Proxy', 'Proxies') === '79b9773f4ffc1d0b215f6f3f2527c9d821988b5872ab5f2b03b40497dc44d1b9'
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  async getAsV908(key: Uint8Array): Promise<[v908.ProxyDefinition[], bigint]> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'Proxy', 'Proxies', key)
  }

  async getManyAsV908(keys: Uint8Array[]): Promise<([v908.ProxyDefinition[], bigint])[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<([v908.ProxyDefinition[], bigint])[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies')
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('Proxy', 'Proxies') === '747626c20879c4ddea29c5f3bbaa6085f13c3c02e2505c72a949f56c0dfc7327'
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  async getAsV926(key: Uint8Array): Promise<[v926.ProxyDefinition[], bigint]> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'Proxy', 'Proxies', key)
  }

  async getManyAsV926(keys: Uint8Array[]): Promise<([v926.ProxyDefinition[], bigint])[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies', keys.map(k => [k]))
  }

  async getAllAsV926(): Promise<([v926.ProxyDefinition[], bigint])[]> {
    assert(this.isV926)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  Series of block headers from the last 81 blocks that acts as random seed material. This
   *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
   *  the oldest hash.
   */
  async getAsV1(): Promise<Uint8Array[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'RandomnessCollectiveFlip', 'RandomMaterial')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') != null
  }
}

export class SalpCurrentNonceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Tracker for the next nonce index
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Salp', 'CurrentNonce') === '228bf827d35e95d258d11cd66d3469a9c64a8ee7fbe63ce51106d34980b5a861'
  }

  /**
   *  Tracker for the next nonce index
   */
  async getAsV900(key: number): Promise<bigint> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Salp', 'CurrentNonce', key)
  }

  async getManyAsV900(keys: number[]): Promise<(bigint)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'CurrentNonce', keys.map(k => [k]))
  }

  async getAllAsV900(): Promise<(bigint)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'CurrentNonce')
  }

  /**
   *  Tracker for the next nonce index
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Salp', 'CurrentNonce') === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
  }

  /**
   *  Tracker for the next nonce index
   */
  async getAsV906(key: number): Promise<number> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Salp', 'CurrentNonce', key)
  }

  async getManyAsV906(keys: number[]): Promise<(number)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'CurrentNonce', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(number)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'CurrentNonce')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Salp', 'CurrentNonce') != null
  }
}

export class SalpCurrentTrieIndexStorage {
  private readonly _chain: Chain
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
  get isV900() {
    return this._chain.getStorageItemTypeHash('Salp', 'CurrentTrieIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Tracker for the next available fund index
   */
  async getAsV900(): Promise<number> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Salp', 'CurrentTrieIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Salp', 'CurrentTrieIndex') != null
  }
}

export class SalpFailedFundsToRefundStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV923() {
    return this._chain.getStorageItemTypeHash('Salp', 'FailedFundsToRefund') === '43e22b66f98465ef6f52e68fd39166212f66ab8fbf65fafb4fa875fa4ea4cae2'
  }

  async getAsV923(key1: number, key2: number, key3: number): Promise<(v923.FundInfo | undefined)> {
    assert(this.isV923)
    return this._chain.getStorage(this.blockHash, 'Salp', 'FailedFundsToRefund', key1, key2, key3)
  }

  async getManyAsV923(keys: [number, number, number][]): Promise<((v923.FundInfo | undefined))[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'FailedFundsToRefund', keys)
  }

  async getAllAsV923(): Promise<((v923.FundInfo | undefined))[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'FailedFundsToRefund')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Salp', 'FailedFundsToRefund') != null
  }
}

export class SalpFundsStorage {
  private readonly _chain: Chain
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
  get isV900() {
    return this._chain.getStorageItemTypeHash('Salp', 'Funds') === '12bd740fc87700bbd990041dca0de02997eb498eb1db4fbd29cb6b9b9832793e'
  }

  /**
   *  Info on all of the funds.
   */
  async getAsV900(key: number): Promise<(v900.FundInfo | undefined)> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Salp', 'Funds', key)
  }

  async getManyAsV900(keys: number[]): Promise<((v900.FundInfo | undefined))[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'Funds', keys.map(k => [k]))
  }

  async getAllAsV900(): Promise<((v900.FundInfo | undefined))[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'Funds')
  }

  /**
   *  Info on all of the funds.
   */
  get isV923() {
    return this._chain.getStorageItemTypeHash('Salp', 'Funds') === '3191a6ebc327dd6d8e803bf81ec6c2d94705a4009098a051e3b507a772a42532'
  }

  /**
   *  Info on all of the funds.
   */
  async getAsV923(key: number): Promise<(v923.FundInfo | undefined)> {
    assert(this.isV923)
    return this._chain.getStorage(this.blockHash, 'Salp', 'Funds', key)
  }

  async getManyAsV923(keys: number[]): Promise<((v923.FundInfo | undefined))[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'Funds', keys.map(k => [k]))
  }

  async getAllAsV923(): Promise<((v923.FundInfo | undefined))[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'Salp', 'Funds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Salp', 'Funds') != null
  }
}

export class SalpMultisigConfirmAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Multisig confirm account
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('Salp', 'MultisigConfirmAccount') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Multisig confirm account
   */
  async getAsV915(): Promise<Uint8Array> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'Salp', 'MultisigConfirmAccount')
  }

  /**
   *  Multisig confirm account
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('Salp', 'MultisigConfirmAccount') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  Multisig confirm account
   */
  async getAsV926(): Promise<Uint8Array | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'Salp', 'MultisigConfirmAccount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Salp', 'MultisigConfirmAccount') != null
  }
}

export class SalpRedeemPoolStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The balance can be redeemed to users.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Salp', 'RedeemPool') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The balance can be redeemed to users.
   */
  async getAsV900(): Promise<bigint> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Salp', 'RedeemPool')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Salp', 'RedeemPool') != null
  }
}

export class SalpLiteCurrentTrieIndexStorage {
  private readonly _chain: Chain
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
  get isV908() {
    return this._chain.getStorageItemTypeHash('SalpLite', 'CurrentTrieIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Tracker for the next available fund index
   */
  async getAsV908(): Promise<number> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'SalpLite', 'CurrentTrieIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SalpLite', 'CurrentTrieIndex') != null
  }
}

export class SalpLiteFailedFundsToRefundStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Info on all of the fail-to-continue funds.
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('SalpLite', 'FailedFundsToRefund') === 'aa05d86d2f58f4f895fd121515f99e5aeead514c0b1c63e7d00cc0e66b1db586'
  }

  /**
   *  Info on all of the fail-to-continue funds.
   */
  async getAsV915(key1: number, key2: number, key3: number): Promise<(v915.Type_501 | undefined)> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'SalpLite', 'FailedFundsToRefund', key1, key2, key3)
  }

  async getManyAsV915(keys: [number, number, number][]): Promise<((v915.Type_501 | undefined))[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'SalpLite', 'FailedFundsToRefund', keys)
  }

  async getAllAsV915(): Promise<((v915.Type_501 | undefined))[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'SalpLite', 'FailedFundsToRefund')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SalpLite', 'FailedFundsToRefund') != null
  }
}

export class SalpLiteFundsStorage {
  private readonly _chain: Chain
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
  get isV908() {
    return this._chain.getStorageItemTypeHash('SalpLite', 'Funds') === '12bd740fc87700bbd990041dca0de02997eb498eb1db4fbd29cb6b9b9832793e'
  }

  /**
   *  Info on all of the funds.
   */
  async getAsV908(key: number): Promise<(v908.FundInfo | undefined)> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'SalpLite', 'Funds', key)
  }

  async getManyAsV908(keys: number[]): Promise<((v908.FundInfo | undefined))[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'SalpLite', 'Funds', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<((v908.FundInfo | undefined))[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'SalpLite', 'Funds')
  }

  /**
   *  Info on all of the funds.
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('SalpLite', 'Funds') === 'a11a805b217f6df4fb509ef5ec9bc2b5b328fcad10942d4e39c40563a0d14a21'
  }

  /**
   *  Info on all of the funds.
   */
  async getAsV915(key: number): Promise<(v915.Type_501 | undefined)> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'SalpLite', 'Funds', key)
  }

  async getManyAsV915(keys: number[]): Promise<((v915.Type_501 | undefined))[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'SalpLite', 'Funds', keys.map(k => [k]))
  }

  async getAllAsV915(): Promise<((v915.Type_501 | undefined))[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'SalpLite', 'Funds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SalpLite', 'Funds') != null
  }
}

export class SalpLiteFundsToMigrateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Funds to migrate
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('SalpLite', 'FundsToMigrate') === '12bd740fc87700bbd990041dca0de02997eb498eb1db4fbd29cb6b9b9832793e'
  }

  /**
   *  Funds to migrate
   */
  async getAsV908(key: number): Promise<(v908.FundInfo | undefined)> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'SalpLite', 'FundsToMigrate', key)
  }

  async getManyAsV908(keys: number[]): Promise<((v908.FundInfo | undefined))[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'SalpLite', 'FundsToMigrate', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<((v908.FundInfo | undefined))[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'SalpLite', 'FundsToMigrate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SalpLite', 'FundsToMigrate') != null
  }
}

export class SalpLiteMultisigConfirmAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Multisig confirm account
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('SalpLite', 'MultisigConfirmAccount') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Multisig confirm account
   */
  async getAsV915(): Promise<Uint8Array> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'SalpLite', 'MultisigConfirmAccount')
  }

  /**
   *  Multisig confirm account
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('SalpLite', 'MultisigConfirmAccount') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  Multisig confirm account
   */
  async getAsV926(): Promise<Uint8Array | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'SalpLite', 'MultisigConfirmAccount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SalpLite', 'MultisigConfirmAccount') != null
  }
}

export class SalpLiteRedeemPoolStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The balance can be redeemed to users.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('SalpLite', 'RedeemPool') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The balance can be redeemed to users.
   */
  async getAsV908(): Promise<bigint> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'SalpLite', 'RedeemPool')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SalpLite', 'RedeemPool') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'c829ad85ef952959006b065ea810f06db4f5384dc48508334137de224c8e340b'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV1(key: number): Promise<(v1.Scheduled | undefined)[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV1(keys: number[]): Promise<((v1.Scheduled | undefined)[])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<((v1.Scheduled | undefined)[])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV801() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '9b2b5bf7654a8a42177e3e9fcb9fb066c2f349c396159b0b4dca94eedb139c30'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV801(key: number): Promise<(v801.Scheduled | undefined)[]> {
    assert(this.isV801)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV801(keys: number[]): Promise<((v801.Scheduled | undefined)[])[]> {
    assert(this.isV801)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV801(): Promise<((v801.Scheduled | undefined)[])[]> {
    assert(this.isV801)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV802() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '48cfdd4d7d8d62bffcc8272a603d35a14aefdec73bb3fb085417f11151908071'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV802(key: number): Promise<(v802.Scheduled | undefined)[]> {
    assert(this.isV802)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV802(keys: number[]): Promise<((v802.Scheduled | undefined)[])[]> {
    assert(this.isV802)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV802(): Promise<((v802.Scheduled | undefined)[])[]> {
    assert(this.isV802)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '8139a741d5a71fb4e5499f9dc561442be3ac7acfc8826a0ea05cc8dea5a0e998'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV803(key: number): Promise<(v803.Scheduled | undefined)[]> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV803(keys: number[]): Promise<((v803.Scheduled | undefined)[])[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<((v803.Scheduled | undefined)[])[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV804() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '3d2ca0e76f9c24943ab433d3756ab85435dfd6a2fa7bbdb29f3fb5bbaf9c8b0a'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV804(key: number): Promise<(v804.Scheduled | undefined)[]> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV804(keys: number[]): Promise<((v804.Scheduled | undefined)[])[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV804(): Promise<((v804.Scheduled | undefined)[])[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV805() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '0dbfaa4eaf7ab83c356cacadf42a21f7fff58d63e12f3621cb8d9914f3135af7'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV805(key: number): Promise<(v805.Scheduled | undefined)[]> {
    assert(this.isV805)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV805(keys: number[]): Promise<((v805.Scheduled | undefined)[])[]> {
    assert(this.isV805)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV805(): Promise<((v805.Scheduled | undefined)[])[]> {
    assert(this.isV805)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'ecb6bfc06b61e9622a118e3e2fc419a1c83d975657244ef6c6aead43c16cc1cf'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV900(key: number): Promise<(v900.Scheduled | undefined)[]> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV900(keys: number[]): Promise<((v900.Scheduled | undefined)[])[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV900(): Promise<((v900.Scheduled | undefined)[])[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV901() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'e8a664dc05ddb1d9902e97a9b8f5bcd9a5b1367f86113e75a05d7098e6f2bb80'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV901(key: number): Promise<(v901.Scheduled | undefined)[]> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV901(keys: number[]): Promise<((v901.Scheduled | undefined)[])[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV901(): Promise<((v901.Scheduled | undefined)[])[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '5fbeb78f21bc057fa55e7e477aef367616c7f8ed0cd80b4721baf671303d15df'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV902(key: number): Promise<(v902.Scheduled | undefined)[]> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV902(keys: number[]): Promise<((v902.Scheduled | undefined)[])[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<((v902.Scheduled | undefined)[])[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '59f243f08a0d4e78f374e7a55bb4f94deb25fdf4688dd2a82b3afb3e41b6ad45'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV906(key: number): Promise<(v906.ScheduledV2 | undefined)[]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV906(keys: number[]): Promise<((v906.ScheduledV2 | undefined)[])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<((v906.ScheduledV2 | undefined)[])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '166473b04d8a9dcf6269194fa31540a549d90a61b37959612b8822d55ad28ddc'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV908(key: number): Promise<(v908.ScheduledV2 | undefined)[]> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV908(keys: number[]): Promise<((v908.ScheduledV2 | undefined)[])[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<((v908.ScheduledV2 | undefined)[])[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV910() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'e152a9ea6a7eb6577b20dd7a21441aff7bc912e3af588c2dae94fd199fe84966'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV910(key: number): Promise<(v910.ScheduledV2 | undefined)[]> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV910(keys: number[]): Promise<((v910.ScheduledV2 | undefined)[])[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV910(): Promise<((v910.ScheduledV2 | undefined)[])[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV912() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '85e433b7fe38ffd7e19d496800c0434d1a427e21882fbaa4bd9e2b0d41660c8f'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV912(key: number): Promise<(v912.ScheduledV2 | undefined)[]> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV912(keys: number[]): Promise<((v912.ScheduledV2 | undefined)[])[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV912(): Promise<((v912.ScheduledV2 | undefined)[])[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV914() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '3e9e55dee4492fde22b267263d08d90af2cf99b9217191d024111f8a3497df9a'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV914(key: number): Promise<(v914.ScheduledV2 | undefined)[]> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV914(keys: number[]): Promise<((v914.ScheduledV2 | undefined)[])[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV914(): Promise<((v914.ScheduledV2 | undefined)[])[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '136aee624b2c9587c2a41bb587869f019ee73b77c2ab8b730fce987bf497a761'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV915(key: number): Promise<(v915.ScheduledV2 | undefined)[]> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV915(keys: number[]): Promise<((v915.ScheduledV2 | undefined)[])[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV915(): Promise<((v915.ScheduledV2 | undefined)[])[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '754ea99cc3291531c4e309edf1ed077ab278e7ba60c2068d56f98af104605232'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV916(key: number): Promise<(v916.ScheduledV2 | undefined)[]> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV916(keys: number[]): Promise<((v916.ScheduledV2 | undefined)[])[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<((v916.ScheduledV2 | undefined)[])[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV918() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '802ec2803806ef0e4969d3e074b07aec303c8b0393baa1ff296a50795dfd293e'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV918(key: number): Promise<(v918.ScheduledV2 | undefined)[]> {
    assert(this.isV918)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV918(keys: number[]): Promise<((v918.ScheduledV2 | undefined)[])[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV918(): Promise<((v918.ScheduledV2 | undefined)[])[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '0ade3b43e07ac3d09c2077efc3b69ca7d0d11051a674aae7beb3181eeaacb858'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV920(key: number): Promise<(v920.ScheduledV2 | undefined)[]> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV920(keys: number[]): Promise<((v920.ScheduledV2 | undefined)[])[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<((v920.ScheduledV2 | undefined)[])[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV922() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'f716e6729468e1f47eab965cc629b04096024cca3008402a53a73fcd4622ba80'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV922(key: number): Promise<(v922.ScheduledV2 | undefined)[]> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV922(keys: number[]): Promise<((v922.ScheduledV2 | undefined)[])[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV922(): Promise<((v922.ScheduledV2 | undefined)[])[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV923() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '470402ce5bcf8264b2624595a462743108146c7bf97f9053c4ab76c4a3ae56f6'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV923(key: number): Promise<(v923.ScheduledV2 | undefined)[]> {
    assert(this.isV923)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV923(keys: number[]): Promise<((v923.ScheduledV2 | undefined)[])[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV923(): Promise<((v923.ScheduledV2 | undefined)[])[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'eba27f26caa41de6b816e3591e05e74de9f442a6748b4ea8b24989462273b536'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV926(key: number): Promise<(v926.ScheduledV3 | undefined)[]> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV926(keys: number[]): Promise<((v926.ScheduledV3 | undefined)[])[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV926(): Promise<((v926.ScheduledV3 | undefined)[])[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV927() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'a55f174e354a7243b15078d642b5b4478d2b689726247317ebf6de4d86bc9b1a'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV927(key: number): Promise<(v927.ScheduledV3 | undefined)[]> {
    assert(this.isV927)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV927(keys: number[]): Promise<((v927.ScheduledV3 | undefined)[])[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV927(): Promise<((v927.ScheduledV3 | undefined)[])[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'ebfd49ed65ef4d4cd34ad05035678ac30c6521758a261f0aa76d6fb1bebbe958'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV930(key: number): Promise<(v930.ScheduledV3 | undefined)[]> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV930(keys: number[]): Promise<((v930.ScheduledV3 | undefined)[])[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<((v930.ScheduledV3 | undefined)[])[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'f72fbdaa3cbcd4aec096e3f9e81abcc18ccb96b0bae0f7bca5a6d8b0026c3be9'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV932(key: number): Promise<(v932.ScheduledV3 | undefined)[]> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV932(keys: number[]): Promise<((v932.ScheduledV3 | undefined)[])[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<((v932.ScheduledV3 | undefined)[])[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '95491a2471a92bb66d2391d25a89ea8b9b69fcd54f992beb06d5423b8d8734dd'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV940(key: number): Promise<(v940.ScheduledV3 | undefined)[]> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV940(keys: number[]): Promise<((v940.ScheduledV3 | undefined)[])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<((v940.ScheduledV3 | undefined)[])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV942() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '012152e00a4ac0782107dc34b360a47ce9f676230cf3010c8d30cf8a7faeafba'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV942(key: number): Promise<(v942.ScheduledV3 | undefined)[]> {
    assert(this.isV942)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV942(keys: number[]): Promise<((v942.ScheduledV3 | undefined)[])[]> {
    assert(this.isV942)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV942(): Promise<((v942.ScheduledV3 | undefined)[])[]> {
    assert(this.isV942)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV944() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '915ef01ffc23e08ff48819fdef43dc3dbb2c86c82c6d058acc641a21cc165e04'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV944(key: number): Promise<(v944.ScheduledV3 | undefined)[]> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV944(keys: number[]): Promise<((v944.ScheduledV3 | undefined)[])[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV944(): Promise<((v944.ScheduledV3 | undefined)[])[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '8233c1cce0ca96ec1a2bd510d3619e7a20d5fe4669451832a90927ef294e5a6c'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV946(key: number): Promise<(v946.ScheduledV3 | undefined)[]> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV946(keys: number[]): Promise<((v946.ScheduledV3 | undefined)[])[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<((v946.ScheduledV3 | undefined)[])[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV948() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '80a1db1b5a18108164b59cca790a64d4a37662e5be608b7b7579af8b3d4884c0'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV948(key: number): Promise<(v948.ScheduledV3 | undefined)[]> {
    assert(this.isV948)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV948(keys: number[]): Promise<((v948.ScheduledV3 | undefined)[])[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV948(): Promise<((v948.ScheduledV3 | undefined)[])[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV952() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'd34a9366a44b484225c8087863bac09f3f32ae923f813dac3f63c7ec078615cf'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV952(key: number): Promise<(v952.ScheduledV3 | undefined)[]> {
    assert(this.isV952)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV952(keys: number[]): Promise<((v952.ScheduledV3 | undefined)[])[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV952(): Promise<((v952.ScheduledV3 | undefined)[])[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV954() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '99dcb4b82938b9169ef9c55ce8fc73002abc97989426aaef0dd428cb05938525'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV954(key: number): Promise<(v954.ScheduledV3 | undefined)[]> {
    assert(this.isV954)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV954(keys: number[]): Promise<((v954.ScheduledV3 | undefined)[])[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV954(): Promise<((v954.ScheduledV3 | undefined)[])[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '98434013d73dc30198fe2a836796912a32d1675b8dbc33d37b9e90d7d274b024'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV956(key: number): Promise<(v956.ScheduledV3 | undefined)[]> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV956(keys: number[]): Promise<((v956.ScheduledV3 | undefined)[])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<((v956.ScheduledV3 | undefined)[])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV958() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '58fe4cb7afa230f00d02b72276ca9fd1f3aadea52d3f5a9ab72e146411700c0a'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV958(key: number): Promise<(v958.ScheduledV3 | undefined)[]> {
    assert(this.isV958)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV958(keys: number[]): Promise<((v958.ScheduledV3 | undefined)[])[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV958(): Promise<((v958.ScheduledV3 | undefined)[])[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'f4dc54b70b620a77975685e6e2e447952af4fd618ac867d017fa1810148a9afe'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV962(key: number): Promise<(v962.ScheduledV3 | undefined)[]> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV962(keys: number[]): Promise<((v962.ScheduledV3 | undefined)[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<((v962.ScheduledV3 | undefined)[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV964() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === 'ad43159360e8f8b1c485de2d2d522480e4c4cbc014324ceecdf828b6e154141c'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV964(key: number): Promise<(v964.ScheduledV3 | undefined)[]> {
    assert(this.isV964)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV964(keys: number[]): Promise<((v964.ScheduledV3 | undefined)[])[]> {
    assert(this.isV964)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV964(): Promise<((v964.ScheduledV3 | undefined)[])[]> {
    assert(this.isV964)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Lookup') === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
  }

  /**
   *  Lookup from identity to the block number and index of the task.
   */
  async getAsV1(key: Uint8Array): Promise<[number, number] | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Lookup', key)
  }

  async getManyAsV1(keys: Uint8Array[]): Promise<([number, number] | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Lookup', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<([number, number])[]> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'StorageVersion') === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsV1(): Promise<v1.Releases> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'StorageVersion')
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'StorageVersion') === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsV906(): Promise<v906.Type_340> {
    assert(this.isV906)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Session', 'CurrentIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Current index of the session.
   */
  async getAsV1(): Promise<number> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Session', 'DisabledValidators') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Indices of disabled validators.
   * 
   *  The set is cleared when `on_session_ending` returns a new set of identities.
   */
  async getAsV1(): Promise<number[]> {
    assert(this.isV1)
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
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') === '1c05e6d248d0d3f2ef2467d3e23031e7885220321b761d4eda9deda33530daa1'
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  async getAsV1(key: [number, Uint8Array]): Promise<Uint8Array | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Session', 'KeyOwner', key)
  }

  async getManyAsV1(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner')
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  async getAsV906(key: [Uint8Array, Uint8Array]): Promise<Uint8Array | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Session', 'KeyOwner', key)
  }

  async getManyAsV906(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(Uint8Array)[]> {
    assert(this.isV906)
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
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
  }

  /**
   *  The next session keys for a validator.
   */
  async getAsV1(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key)
  }

  async getManyAsV1(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys')
  }

  /**
   *  The next session keys for a validator.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === '631bdf50943dc1aa6eef0e538bc5f8db41fca7120b2bae11b9c7ad84ada29964'
  }

  /**
   *  The next session keys for a validator.
   */
  async getAsV906(key: Uint8Array): Promise<v906.SessionKeys | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(v906.SessionKeys | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.SessionKeys)[]> {
    assert(this.isV906)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedChanged') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if the underlying economic identities or weighting behind the validators
   *  has changed in the queued validator set.
   */
  async getAsV1(): Promise<boolean> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') === 'e5698f1a5d4118d4fdacda8339f619396cd6a9d4f37fd3324ca610b30171cb27'
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  async getAsV1(): Promise<[Uint8Array, Uint8Array][]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedKeys')
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') === '88cd205a98ff7b5562f0d030266b07e3566fdf283e05e6bd4c2405710a6a3b90'
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  async getAsV906(): Promise<[Uint8Array, v906.SessionKeys][]> {
    assert(this.isV906)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Session', 'Validators') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current set of validators.
   */
  async getAsV1(): Promise<Uint8Array[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Session', 'Validators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'Validators') != null
  }
}

export class SlpCurrencyDelaysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  TimeUnit delay params for different chains.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyDelays') === '6e664cb069e856adbf6fe3c5436dd8c5a3abd3b85f5ab03b76b53909b414aff1'
  }

  /**
   *  TimeUnit delay params for different chains.
   */
  async getAsV940(key: v940.CurrencyId): Promise<v940.Delays | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyDelays', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(v940.Delays | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyDelays', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(v940.Delays)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyDelays')
  }

  /**
   *  TimeUnit delay params for different chains.
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyDelays') === '94ca35a61d721b34eee70a4b4f060d84b990a64f798c564cbb8b06234a90913a'
  }

  /**
   *  TimeUnit delay params for different chains.
   */
  async getAsV946(key: v946.CurrencyId): Promise<v946.Delays | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyDelays', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(v946.Delays | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyDelays', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(v946.Delays)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyDelays')
  }

  /**
   *  TimeUnit delay params for different chains.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyDelays') === '1e17cb337ba3d01b3f823a21ec298cdaa1c3c6dbcb1da0bc274323e5dcb6f76c'
  }

  /**
   *  TimeUnit delay params for different chains.
   */
  async getAsV956(key: v956.CurrencyId): Promise<v956.Delays | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyDelays', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(v956.Delays | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyDelays', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.Delays)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyDelays')
  }

  /**
   *  TimeUnit delay params for different chains.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyDelays') === '840fddc9e9dc0a5763b6d3ccdf6cc2c002716b19a6c66b3d743b151aa4173d86'
  }

  /**
   *  TimeUnit delay params for different chains.
   */
  async getAsV962(key: v962.CurrencyId): Promise<v962.Delays | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyDelays', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(v962.Delays | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyDelays', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.Delays)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyDelays')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyDelays') != null
  }
}

export class SlpCurrencyLatestTuneRecordStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Currency's tuning record of exchange rate for the current time unit.
   *  Currency Id => (latest tuned TimeUnit, number of tuning times)
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyLatestTuneRecord') === '20ebda1183c8f7e4455cf5a7b82e3b02466a75c988bbaceb0e8c86e7b27c3ae6'
  }

  /**
   *  Currency's tuning record of exchange rate for the current time unit.
   *  Currency Id => (latest tuned TimeUnit, number of tuning times)
   */
  async getAsV946(key: v946.CurrencyId): Promise<[v946.TimeUnit, number] | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyLatestTuneRecord', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<([v946.TimeUnit, number] | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyLatestTuneRecord', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<([v946.TimeUnit, number])[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyLatestTuneRecord')
  }

  /**
   *  Currency's tuning record of exchange rate for the current time unit.
   *  Currency Id => (latest tuned TimeUnit, number of tuning times)
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyLatestTuneRecord') === 'c74644c45772274ef06ad2430d5707ceef48fc0a6952cf492d1dec2431f8ad77'
  }

  /**
   *  Currency's tuning record of exchange rate for the current time unit.
   *  Currency Id => (latest tuned TimeUnit, number of tuning times)
   */
  async getAsV956(key: v956.CurrencyId): Promise<[v956.TimeUnit, number] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyLatestTuneRecord', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<([v956.TimeUnit, number] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyLatestTuneRecord', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<([v956.TimeUnit, number])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyLatestTuneRecord')
  }

  /**
   *  Currency's tuning record of exchange rate for the current time unit.
   *  Currency Id => (latest tuned TimeUnit, number of tuning times)
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyLatestTuneRecord') === '49c9e09af7d44861e6441139519dd4f915b548e72dc3d383bffa63a025e2c44e'
  }

  /**
   *  Currency's tuning record of exchange rate for the current time unit.
   *  Currency Id => (latest tuned TimeUnit, number of tuning times)
   */
  async getAsV962(key: v962.CurrencyId): Promise<[v962.TimeUnit, number] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyLatestTuneRecord', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<([v962.TimeUnit, number] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyLatestTuneRecord', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<([v962.TimeUnit, number])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyLatestTuneRecord')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyLatestTuneRecord') != null
  }
}

export class SlpCurrencyTuneExchangeRateLimitStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  For each currencyId: how many times that a delegator can tune the exchange rate for a single
   *  time unit, and how much at most each time a delegator can tune the exchange rate
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyTuneExchangeRateLimit') === '25af6d817d374c8fce9aefc694c9e5073285e3b1d0ac7bfab773e3f4744395aa'
  }

  /**
   *  For each currencyId: how many times that a delegator can tune the exchange rate for a single
   *  time unit, and how much at most each time a delegator can tune the exchange rate
   */
  async getAsV940(key: v940.CurrencyId): Promise<[number, number] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyTuneExchangeRateLimit', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<([number, number] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyTuneExchangeRateLimit', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<([number, number])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyTuneExchangeRateLimit')
  }

  /**
   *  For each currencyId: how many times that a Currency's all delegators can tune the exchange
   *  rate for a single time unit, and how much at most each time can tune the
   *  exchange rate
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyTuneExchangeRateLimit') === 'a553515e1c1b482fd00c2e8077d267b44a2ddbf39785a13274b00a540b82705d'
  }

  /**
   *  For each currencyId: how many times that a Currency's all delegators can tune the exchange
   *  rate for a single time unit, and how much at most each time can tune the
   *  exchange rate
   */
  async getAsV956(key: v956.CurrencyId): Promise<[number, number] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyTuneExchangeRateLimit', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<([number, number] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyTuneExchangeRateLimit', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<([number, number])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyTuneExchangeRateLimit')
  }

  /**
   *  For each currencyId: how many times that a Currency's all delegators can tune the exchange
   *  rate for a single time unit, and how much at most each time can tune the
   *  exchange rate
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyTuneExchangeRateLimit') === '5b500871b2a8bb6f03065364e2b1dbafe57aea548938adcf7451ea9035115bfa'
  }

  /**
   *  For each currencyId: how many times that a Currency's all delegators can tune the exchange
   *  rate for a single time unit, and how much at most each time can tune the
   *  exchange rate
   */
  async getAsV962(key: v962.CurrencyId): Promise<[number, number] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'CurrencyTuneExchangeRateLimit', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<([number, number] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyTuneExchangeRateLimit', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<([number, number])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'CurrencyTuneExchangeRateLimit')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'CurrencyTuneExchangeRateLimit') != null
  }
}

export class SlpDelegationsOccupiedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  reflect if all delegations are on a decrease/revoke status. If yes, then new user redeeming
   *  is unaccepted.
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegationsOccupied') === '60134d5f2fd73a92fcefbee5e09765c23243d2882a5cebb059201c086d0ea68c'
  }

  /**
   *  reflect if all delegations are on a decrease/revoke status. If yes, then new user redeeming
   *  is unaccepted.
   */
  async getAsV946(key: v946.CurrencyId): Promise<boolean | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegationsOccupied', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(boolean | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegationsOccupied', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(boolean)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegationsOccupied')
  }

  /**
   *  reflect if all delegations are on a decrease/revoke status. If yes, then new user redeeming
   *  is unaccepted.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegationsOccupied') === '6e7822059a4c3a18b1a904927bf9e88ba5102a793a3221c6b2b21b3a23db7eff'
  }

  /**
   *  reflect if all delegations are on a decrease/revoke status. If yes, then new user redeeming
   *  is unaccepted.
   */
  async getAsV956(key: v956.CurrencyId): Promise<boolean | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegationsOccupied', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(boolean | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegationsOccupied', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(boolean)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegationsOccupied')
  }

  /**
   *  reflect if all delegations are on a decrease/revoke status. If yes, then new user redeeming
   *  is unaccepted.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegationsOccupied') === 'f1f4045855a4570f8488278f833dcb083a0b1810feb955a817f32e2e8c514e88'
  }

  /**
   *  reflect if all delegations are on a decrease/revoke status. If yes, then new user redeeming
   *  is unaccepted.
   */
  async getAsV962(key: v962.CurrencyId): Promise<boolean | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegationsOccupied', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(boolean | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegationsOccupied', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(boolean)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegationsOccupied')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegationsOccupied') != null
  }
}

export class SlpDelegatorLatestTuneRecordStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A delegator's tuning record of exchange rate for the current time unit.
   *  Currency Id + Delegator Id => (latest tuned TimeUnit, number of tuning times)
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLatestTuneRecord') === '21c23813a79b25fb3d76b8384962753bb6730d777a57d2a365029940415a2530'
  }

  /**
   *  A delegator's tuning record of exchange rate for the current time unit.
   *  Currency Id + Delegator Id => (latest tuned TimeUnit, number of tuning times)
   */
  async getAsV940(key1: v940.CurrencyId, key2: v940.V1MultiLocation): Promise<[v940.TimeUnit, number] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord', key1, key2)
  }

  async getManyAsV940(keys: [v940.CurrencyId, v940.V1MultiLocation][]): Promise<([v940.TimeUnit, number] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord', keys)
  }

  async getAllAsV940(): Promise<([v940.TimeUnit, number])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord')
  }

  /**
   *  A delegator's tuning record of exchange rate for the current time unit.
   *  Currency Id + Delegator Id => latest tuned TimeUnit
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLatestTuneRecord') === 'cda6baaeaa25f2163cef1f3252a7922609ec6d036e867d508f62fca92415b3bb'
  }

  /**
   *  A delegator's tuning record of exchange rate for the current time unit.
   *  Currency Id + Delegator Id => latest tuned TimeUnit
   */
  async getAsV946(key1: v946.CurrencyId, key2: v946.V1MultiLocation): Promise<v946.TimeUnit | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord', key1, key2)
  }

  async getManyAsV946(keys: [v946.CurrencyId, v946.V1MultiLocation][]): Promise<(v946.TimeUnit | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord', keys)
  }

  async getAllAsV946(): Promise<(v946.TimeUnit)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord')
  }

  /**
   *  A delegator's tuning record of exchange rate for the current time unit.
   *  Currency Id + Delegator Id => latest tuned TimeUnit
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLatestTuneRecord') === '5d146bf93e056a73d1a058a9e177ba3d659126aed73f8950f68a3a545de99fec'
  }

  /**
   *  A delegator's tuning record of exchange rate for the current time unit.
   *  Currency Id + Delegator Id => latest tuned TimeUnit
   */
  async getAsV956(key1: v956.CurrencyId, key2: v956.V1MultiLocation): Promise<v956.TimeUnit | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord', key1, key2)
  }

  async getManyAsV956(keys: [v956.CurrencyId, v956.V1MultiLocation][]): Promise<(v956.TimeUnit | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord', keys)
  }

  async getAllAsV956(): Promise<(v956.TimeUnit)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord')
  }

  /**
   *  A delegator's tuning record of exchange rate for the current time unit.
   *  Currency Id + Delegator Id => latest tuned TimeUnit
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLatestTuneRecord') === '18ef11f4ddb071c01859631f5f68151b3d497aeb511b5af8a1cc5e5af9b55e62'
  }

  /**
   *  A delegator's tuning record of exchange rate for the current time unit.
   *  Currency Id + Delegator Id => latest tuned TimeUnit
   */
  async getAsV962(key1: v962.CurrencyId, key2: v962.V1MultiLocation): Promise<v962.TimeUnit | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord', key1, key2)
  }

  async getManyAsV962(keys: [v962.CurrencyId, v962.V1MultiLocation][]): Promise<(v962.TimeUnit | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord', keys)
  }

  async getAllAsV962(): Promise<(v962.TimeUnit)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLatestTuneRecord')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLatestTuneRecord') != null
  }
}

export class SlpDelegatorLedgerXcmUpdateQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgerXcmUpdateQueue') === 'dd455f09db041dff51067d78226474e0a0b37c4cfc773ea2fff1c16fc150a62d'
  }

  async getAsV940(key: bigint): Promise<[v940.LedgerUpdateEntry, number] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', key)
  }

  async getManyAsV940(keys: bigint[]): Promise<([v940.LedgerUpdateEntry, number] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<([v940.LedgerUpdateEntry, number])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue')
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgerXcmUpdateQueue') === 'ac8cb67335df003de341ff728602d311560ad7599a717e726f11e4aa97d4478c'
  }

  async getAsV946(key: bigint): Promise<[v946.LedgerUpdateEntry, number] | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', key)
  }

  async getManyAsV946(keys: bigint[]): Promise<([v946.LedgerUpdateEntry, number] | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<([v946.LedgerUpdateEntry, number])[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgerXcmUpdateQueue') === '620ba1371c2db24ce870fe23766061e614eafd448f24ceab5d6932fc0ff3106b'
  }

  async getAsV956(key: bigint): Promise<[v956.LedgerUpdateEntry, number] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', key)
  }

  async getManyAsV956(keys: bigint[]): Promise<([v956.LedgerUpdateEntry, number] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<([v956.LedgerUpdateEntry, number])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue')
  }

  get isV958() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgerXcmUpdateQueue') === 'bf5fbf3f43f3c184907df23b557c97560b57642feb3840dd28bb0e31c1a4cf42'
  }

  async getAsV958(key: bigint): Promise<[v958.LedgerUpdateEntry, number] | undefined> {
    assert(this.isV958)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', key)
  }

  async getManyAsV958(keys: bigint[]): Promise<([v958.LedgerUpdateEntry, number] | undefined)[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', keys.map(k => [k]))
  }

  async getAllAsV958(): Promise<([v958.LedgerUpdateEntry, number])[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgerXcmUpdateQueue') === 'e46eda6a6300cc20f2212c0a4c3cc5026d4ab217d20fbaf514ab0a9998f5e946'
  }

  async getAsV962(key: bigint): Promise<[v962.LedgerUpdateEntry, number] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', key)
  }

  async getManyAsV962(keys: bigint[]): Promise<([v962.LedgerUpdateEntry, number] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<([v962.LedgerUpdateEntry, number])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgerXcmUpdateQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgerXcmUpdateQueue') != null
  }
}

export class SlpDelegatorLedgersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgers') === 'da5e6f23defd5aefc6432bebfc9a22ba981ce4a8516ce41eac483d1d59561063'
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  async getAsV940(key1: v940.CurrencyId, key2: v940.V1MultiLocation): Promise<v940.Ledger | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgers', key1, key2)
  }

  async getManyAsV940(keys: [v940.CurrencyId, v940.V1MultiLocation][]): Promise<(v940.Ledger | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers', keys)
  }

  async getAllAsV940(): Promise<(v940.Ledger)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers')
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgers') === '78a1ed5d00a667367b8197b4858fde223151c31e51891bc9045db1638dcf753c'
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  async getAsV946(key1: v946.CurrencyId, key2: v946.V1MultiLocation): Promise<v946.Ledger | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgers', key1, key2)
  }

  async getManyAsV946(keys: [v946.CurrencyId, v946.V1MultiLocation][]): Promise<(v946.Ledger | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers', keys)
  }

  async getAllAsV946(): Promise<(v946.Ledger)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers')
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgers') === 'ea440e033e641029b049d5f4b0c49f57dbd4d244c2a30ecca010e088c418e70a'
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  async getAsV956(key1: v956.CurrencyId, key2: v956.V1MultiLocation): Promise<v956.Ledger | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgers', key1, key2)
  }

  async getManyAsV956(keys: [v956.CurrencyId, v956.V1MultiLocation][]): Promise<(v956.Ledger | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers', keys)
  }

  async getAllAsV956(): Promise<(v956.Ledger)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers')
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  get isV958() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgers') === 'dea166372682e4ede4016ff1cae8d8da60d68e715e536d8146001975edb0c7ce'
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  async getAsV958(key1: v958.CurrencyId, key2: v958.V1MultiLocation): Promise<v958.Ledger | undefined> {
    assert(this.isV958)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgers', key1, key2)
  }

  async getManyAsV958(keys: [v958.CurrencyId, v958.V1MultiLocation][]): Promise<(v958.Ledger | undefined)[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers', keys)
  }

  async getAllAsV958(): Promise<(v958.Ledger)[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers')
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgers') === '11e5256e3eaab5356a1922059851124766feb9c5e3dca57be63e205d02be714a'
  }

  /**
   *  Delegator ledgers. A delegator is identified in MultiLocation format.
   */
  async getAsV962(key1: v962.CurrencyId, key2: v962.V1MultiLocation): Promise<v962.Ledger | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorLedgers', key1, key2)
  }

  async getManyAsV962(keys: [v962.CurrencyId, v962.V1MultiLocation][]): Promise<(v962.Ledger | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers', keys)
  }

  async getAllAsV962(): Promise<(v962.Ledger)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorLedgers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorLedgers') != null
  }
}

export class SlpDelegatorNextIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Next index of different currency delegators.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorNextIndex') === '59f81ca17a3df9d80bcefd297420c91faea7cc59ba6f6cf5d9c0be04a19b54c8'
  }

  /**
   *  Next index of different currency delegators.
   */
  async getAsV940(key: v940.CurrencyId): Promise<number> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorNextIndex', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(number)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorNextIndex', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(number)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorNextIndex')
  }

  /**
   *  Next index of different currency delegators.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorNextIndex') === '6983dc7053f4e772e1b2f8d535d4d6abd55c30e2e31c0d170bd30d9d63d6d584'
  }

  /**
   *  Next index of different currency delegators.
   */
  async getAsV956(key: v956.CurrencyId): Promise<number> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorNextIndex', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(number)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorNextIndex', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(number)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorNextIndex')
  }

  /**
   *  Next index of different currency delegators.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorNextIndex') === '890e28c8e9bbd923a9c7b1fa7d7dbbfb7e4a96ade4556a0af855fcd00f4361cb'
  }

  /**
   *  Next index of different currency delegators.
   */
  async getAsV962(key: v962.CurrencyId): Promise<number> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorNextIndex', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(number)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorNextIndex', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(number)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorNextIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorNextIndex') != null
  }
}

export class SlpDelegatorsIndex2MultilocationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Delegators in service. A delegator is identified in MultiLocation format.
   *  Currency Id + Sub-account index => MultiLocation
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorsIndex2Multilocation') === '98aedf3ac039512628b35256cbff92a3ed18d53f3f45a71e2515cb87cc33281d'
  }

  /**
   *  Delegators in service. A delegator is identified in MultiLocation format.
   *  Currency Id + Sub-account index => MultiLocation
   */
  async getAsV940(key1: v940.CurrencyId, key2: number): Promise<v940.V1MultiLocation | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorsIndex2Multilocation', key1, key2)
  }

  async getManyAsV940(keys: [v940.CurrencyId, number][]): Promise<(v940.V1MultiLocation | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsIndex2Multilocation', keys)
  }

  async getAllAsV940(): Promise<(v940.V1MultiLocation)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsIndex2Multilocation')
  }

  /**
   *  Delegators in service. A delegator is identified in MultiLocation format.
   *  Currency Id + Sub-account index => MultiLocation
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorsIndex2Multilocation') === '264a43d3ec39f5bda9aff9fef65e294428a24d8b759f1e7d03d7c4e185e98645'
  }

  /**
   *  Delegators in service. A delegator is identified in MultiLocation format.
   *  Currency Id + Sub-account index => MultiLocation
   */
  async getAsV956(key1: v956.CurrencyId, key2: number): Promise<v956.V1MultiLocation | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorsIndex2Multilocation', key1, key2)
  }

  async getManyAsV956(keys: [v956.CurrencyId, number][]): Promise<(v956.V1MultiLocation | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsIndex2Multilocation', keys)
  }

  async getAllAsV956(): Promise<(v956.V1MultiLocation)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsIndex2Multilocation')
  }

  /**
   *  Delegators in service. A delegator is identified in MultiLocation format.
   *  Currency Id + Sub-account index => MultiLocation
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorsIndex2Multilocation') === '14395c4726b51f4695c7308c42cf918254a34a423a134a40eda5fa59a0f58125'
  }

  /**
   *  Delegators in service. A delegator is identified in MultiLocation format.
   *  Currency Id + Sub-account index => MultiLocation
   */
  async getAsV962(key1: v962.CurrencyId, key2: number): Promise<v962.V1MultiLocation | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorsIndex2Multilocation', key1, key2)
  }

  async getManyAsV962(keys: [v962.CurrencyId, number][]): Promise<(v962.V1MultiLocation | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsIndex2Multilocation', keys)
  }

  async getAllAsV962(): Promise<(v962.V1MultiLocation)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsIndex2Multilocation')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorsIndex2Multilocation') != null
  }
}

export class SlpDelegatorsMultilocation2IndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Delegators in service. Currency Id + MultiLocation => Sub-account index
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorsMultilocation2Index') === '2916a8943e3f2e4f52b83a70fd95a7fec7e94124e8713077a422d4a3260a9f7d'
  }

  /**
   *  Delegators in service. Currency Id + MultiLocation => Sub-account index
   */
  async getAsV940(key1: v940.CurrencyId, key2: v940.V1MultiLocation): Promise<number | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorsMultilocation2Index', key1, key2)
  }

  async getManyAsV940(keys: [v940.CurrencyId, v940.V1MultiLocation][]): Promise<(number | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsMultilocation2Index', keys)
  }

  async getAllAsV940(): Promise<(number)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsMultilocation2Index')
  }

  /**
   *  Delegators in service. Currency Id + MultiLocation => Sub-account index
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorsMultilocation2Index') === 'cf746b105335985e9bb5328e58e13b3f44c32633f00ed25bcbfae0aadc673d3c'
  }

  /**
   *  Delegators in service. Currency Id + MultiLocation => Sub-account index
   */
  async getAsV956(key1: v956.CurrencyId, key2: v956.V1MultiLocation): Promise<number | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorsMultilocation2Index', key1, key2)
  }

  async getManyAsV956(keys: [v956.CurrencyId, v956.V1MultiLocation][]): Promise<(number | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsMultilocation2Index', keys)
  }

  async getAllAsV956(): Promise<(number)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsMultilocation2Index')
  }

  /**
   *  Delegators in service. Currency Id + MultiLocation => Sub-account index
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorsMultilocation2Index') === '234a6c6052350524f69ad49dfa8cfd8023274e2b4292ff7996331f302caf7c5c'
  }

  /**
   *  Delegators in service. Currency Id + MultiLocation => Sub-account index
   */
  async getAsV962(key1: v962.CurrencyId, key2: v962.V1MultiLocation): Promise<number | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'DelegatorsMultilocation2Index', key1, key2)
  }

  async getManyAsV962(keys: [v962.CurrencyId, v962.V1MultiLocation][]): Promise<(number | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsMultilocation2Index', keys)
  }

  async getAllAsV962(): Promise<(number)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'DelegatorsMultilocation2Index')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'DelegatorsMultilocation2Index') != null
  }
}

export class SlpFeeSourcesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Origins and Amounts for the staking operating account fee supplement. An operating account
   *  is identified in MultiLocation format.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'FeeSources') === '03d6f415fec543f27dac29076f045eb8ef0826253e73236ce56a5679b9201da8'
  }

  /**
   *  Origins and Amounts for the staking operating account fee supplement. An operating account
   *  is identified in MultiLocation format.
   */
  async getAsV940(key: v940.CurrencyId): Promise<[v940.V1MultiLocation, bigint] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'FeeSources', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<([v940.V1MultiLocation, bigint] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'FeeSources', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<([v940.V1MultiLocation, bigint])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'FeeSources')
  }

  /**
   *  Origins and Amounts for the staking operating account fee supplement. An operating account
   *  is identified in MultiLocation format.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'FeeSources') === '677903fddb8a431ddb874d168b3686228089e1fc8b0ba8403e094d5781f4222b'
  }

  /**
   *  Origins and Amounts for the staking operating account fee supplement. An operating account
   *  is identified in MultiLocation format.
   */
  async getAsV956(key: v956.CurrencyId): Promise<[v956.V1MultiLocation, bigint] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'FeeSources', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<([v956.V1MultiLocation, bigint] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'FeeSources', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<([v956.V1MultiLocation, bigint])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'FeeSources')
  }

  /**
   *  Origins and Amounts for the staking operating account fee supplement. An operating account
   *  is identified in MultiLocation format.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'FeeSources') === '194ff657c86974994c32d59b079b24d223bbeaa6e9f53a0f98b0d9efca398009'
  }

  /**
   *  Origins and Amounts for the staking operating account fee supplement. An operating account
   *  is identified in MultiLocation format.
   */
  async getAsV962(key: v962.CurrencyId): Promise<[v962.V1MultiLocation, bigint] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'FeeSources', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<([v962.V1MultiLocation, bigint] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'FeeSources', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<([v962.V1MultiLocation, bigint])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'FeeSources')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'FeeSources') != null
  }
}

export class SlpHostingFeesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Hosting fee percentage and beneficiary account for different chains
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'HostingFees') === '5d2f9b4483167abdb2dc16f8ef9d6332fda06fe0446576b7bdc042bbe0435a7c'
  }

  /**
   *  Hosting fee percentage and beneficiary account for different chains
   */
  async getAsV940(key: v940.CurrencyId): Promise<[number, v940.V1MultiLocation] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'HostingFees', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<([number, v940.V1MultiLocation] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'HostingFees', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<([number, v940.V1MultiLocation])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'HostingFees')
  }

  /**
   *  Hosting fee percentage and beneficiary account for different chains
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'HostingFees') === '1efe796545bcdc9b61e6a288ca09799fd018c98bc3acbdd96f3e7f86d0140a72'
  }

  /**
   *  Hosting fee percentage and beneficiary account for different chains
   */
  async getAsV956(key: v956.CurrencyId): Promise<[number, v956.V1MultiLocation] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'HostingFees', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<([number, v956.V1MultiLocation] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'HostingFees', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<([number, v956.V1MultiLocation])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'HostingFees')
  }

  /**
   *  Hosting fee percentage and beneficiary account for different chains
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'HostingFees') === '38334c75f2a5e995b64667c8f8a5271f5254bd69d6f24a5798f133b432e35fbb'
  }

  /**
   *  Hosting fee percentage and beneficiary account for different chains
   */
  async getAsV962(key: v962.CurrencyId): Promise<[number, v962.V1MultiLocation] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'HostingFees', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<([number, v962.V1MultiLocation] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'HostingFees', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<([number, v962.V1MultiLocation])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'HostingFees')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'HostingFees') != null
  }
}

export class SlpLastTimeUpdatedOngoingTimeUnitStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'LastTimeUpdatedOngoingTimeUnit') === 'd5a8b62c1590a82b0fc803f0708880b192ad4c1991dbf01d510d1af1403fb5b8'
  }

  async getAsV946(key: v946.CurrencyId): Promise<number | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'LastTimeUpdatedOngoingTimeUnit', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(number | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'LastTimeUpdatedOngoingTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(number)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'LastTimeUpdatedOngoingTimeUnit')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'LastTimeUpdatedOngoingTimeUnit') === 'fa211054cf27fec0f71afc829678fe5f88052e3de0f1bb2a211d51139627165d'
  }

  async getAsV956(key: v956.CurrencyId): Promise<number | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'LastTimeUpdatedOngoingTimeUnit', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(number | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'LastTimeUpdatedOngoingTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(number)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'LastTimeUpdatedOngoingTimeUnit')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'LastTimeUpdatedOngoingTimeUnit') === '51645ae30bfa3f22c56faa9e3576b3aee53293360d66ab21949e74bd308994b3'
  }

  async getAsV962(key: v962.CurrencyId): Promise<number | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'LastTimeUpdatedOngoingTimeUnit', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(number | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'LastTimeUpdatedOngoingTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(number)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'LastTimeUpdatedOngoingTimeUnit')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'LastTimeUpdatedOngoingTimeUnit') != null
  }
}

export class SlpMinimumsAndMaximumsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Minimum and Maximum constraints for different chains.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'MinimumsAndMaximums') === 'c901de60a80dcef95d6f53391866e08540d27e68384b2c9c194800589c83665d'
  }

  /**
   *  Minimum and Maximum constraints for different chains.
   */
  async getAsV940(key: v940.CurrencyId): Promise<v940.MinimumsMaximums | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(v940.MinimumsMaximums | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(v940.MinimumsMaximums)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums')
  }

  /**
   *  Minimum and Maximum constraints for different chains.
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'MinimumsAndMaximums') === '0d9fcb8def8afeb2d59f788b82a830952ae47311a1d3144d9062940219b0837d'
  }

  /**
   *  Minimum and Maximum constraints for different chains.
   */
  async getAsV946(key: v946.CurrencyId): Promise<v946.MinimumsMaximums | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(v946.MinimumsMaximums | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(v946.MinimumsMaximums)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums')
  }

  /**
   *  Minimum and Maximum constraints for different chains.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'MinimumsAndMaximums') === 'c5669edb83256bd9757b43b2b5781fa260a9fb1a84dd8b114f76dc95f303ff68'
  }

  /**
   *  Minimum and Maximum constraints for different chains.
   */
  async getAsV956(key: v956.CurrencyId): Promise<v956.MinimumsMaximums | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(v956.MinimumsMaximums | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.MinimumsMaximums)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums')
  }

  /**
   *  Minimum and Maximum constraints for different chains.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'MinimumsAndMaximums') === 'b2a5ce2b82b5378eeb9c8a9ccb149bd9507eeb767ef3ee246eaa609dde00df66'
  }

  /**
   *  Minimum and Maximum constraints for different chains.
   */
  async getAsV962(key: v962.CurrencyId): Promise<v962.MinimumsMaximums | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(v962.MinimumsMaximums | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.MinimumsMaximums)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'MinimumsAndMaximums')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'MinimumsAndMaximums') != null
  }
}

export class SlpOngoingTimeUnitUpdateIntervalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'OngoingTimeUnitUpdateInterval') === 'd5a8b62c1590a82b0fc803f0708880b192ad4c1991dbf01d510d1af1403fb5b8'
  }

  async getAsV946(key: v946.CurrencyId): Promise<number | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'OngoingTimeUnitUpdateInterval', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(number | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OngoingTimeUnitUpdateInterval', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(number)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OngoingTimeUnitUpdateInterval')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'OngoingTimeUnitUpdateInterval') === 'fa211054cf27fec0f71afc829678fe5f88052e3de0f1bb2a211d51139627165d'
  }

  async getAsV956(key: v956.CurrencyId): Promise<number | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'OngoingTimeUnitUpdateInterval', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(number | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OngoingTimeUnitUpdateInterval', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(number)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OngoingTimeUnitUpdateInterval')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'OngoingTimeUnitUpdateInterval') === '51645ae30bfa3f22c56faa9e3576b3aee53293360d66ab21949e74bd308994b3'
  }

  async getAsV962(key: v962.CurrencyId): Promise<number | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'OngoingTimeUnitUpdateInterval', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(number | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OngoingTimeUnitUpdateInterval', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(number)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OngoingTimeUnitUpdateInterval')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'OngoingTimeUnitUpdateInterval') != null
  }
}

export class SlpOperateOriginsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  One operate origin(can be a multisig account) for a currency. An operating origins are
   *  normal account in Bifrost chain.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'OperateOrigins') === '01627dd9ae607afebd0335c3ad61cc15d4ae7c702de528ebed54b09c4f223551'
  }

  /**
   *  One operate origin(can be a multisig account) for a currency. An operating origins are
   *  normal account in Bifrost chain.
   */
  async getAsV940(key: v940.CurrencyId): Promise<Uint8Array | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'OperateOrigins', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OperateOrigins', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(Uint8Array)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OperateOrigins')
  }

  /**
   *  One operate origin(can be a multisig account) for a currency. An operating origins are
   *  normal account in Bifrost chain.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'OperateOrigins') === 'b7870235b5d20fb832900be52b5eabdf6e0db089438e3654e104fb07c05287f2'
  }

  /**
   *  One operate origin(can be a multisig account) for a currency. An operating origins are
   *  normal account in Bifrost chain.
   */
  async getAsV956(key: v956.CurrencyId): Promise<Uint8Array | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'OperateOrigins', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OperateOrigins', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(Uint8Array)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OperateOrigins')
  }

  /**
   *  One operate origin(can be a multisig account) for a currency. An operating origins are
   *  normal account in Bifrost chain.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'OperateOrigins') === 'f11f2404bd685172c19f09317b2b13dbf3f5f5f15838296142a67ffda79fa5f5'
  }

  /**
   *  One operate origin(can be a multisig account) for a currency. An operating origins are
   *  normal account in Bifrost chain.
   */
  async getAsV962(key: v962.CurrencyId): Promise<Uint8Array | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'OperateOrigins', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OperateOrigins', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(Uint8Array)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'OperateOrigins')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'OperateOrigins') != null
  }
}

export class SlpSupplementFeeAccountWhitelistStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'SupplementFeeAccountWhitelist') === '74d288c8dc5787c4d0f35664cfcb8662107649fa7d844c48425c0884c1a4c6c1'
  }

  async getAsV946(key: v946.CurrencyId): Promise<[v946.V1MultiLocation, Uint8Array][] | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'SupplementFeeAccountWhitelist', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<([v946.V1MultiLocation, Uint8Array][] | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'SupplementFeeAccountWhitelist', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<([v946.V1MultiLocation, Uint8Array][])[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'SupplementFeeAccountWhitelist')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'SupplementFeeAccountWhitelist') === '5090d0be162db28b02967ac346a9231db05a4a9759111e3f9cac1726ac9a6c68'
  }

  async getAsV956(key: v956.CurrencyId): Promise<[v956.V1MultiLocation, Uint8Array][] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'SupplementFeeAccountWhitelist', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<([v956.V1MultiLocation, Uint8Array][] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'SupplementFeeAccountWhitelist', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<([v956.V1MultiLocation, Uint8Array][])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'SupplementFeeAccountWhitelist')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'SupplementFeeAccountWhitelist') === '91a98cb05205938fb30bb54d376d37116248ea5fe40b2374ca3531004ab8fe12'
  }

  async getAsV962(key: v962.CurrencyId): Promise<[v962.V1MultiLocation, Uint8Array][] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'SupplementFeeAccountWhitelist', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<([v962.V1MultiLocation, Uint8Array][] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'SupplementFeeAccountWhitelist', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<([v962.V1MultiLocation, Uint8Array][])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'SupplementFeeAccountWhitelist')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'SupplementFeeAccountWhitelist') != null
  }
}

export class SlpValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Validator in service. A validator is identified in MultiLocation format.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'Validators') === '74d288c8dc5787c4d0f35664cfcb8662107649fa7d844c48425c0884c1a4c6c1'
  }

  /**
   *  Validator in service. A validator is identified in MultiLocation format.
   */
  async getAsV940(key: v940.CurrencyId): Promise<[v940.V1MultiLocation, Uint8Array][] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'Validators', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<([v940.V1MultiLocation, Uint8Array][] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'Validators', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<([v940.V1MultiLocation, Uint8Array][])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'Validators')
  }

  /**
   *  Validator in service. A validator is identified in MultiLocation format.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'Validators') === '5090d0be162db28b02967ac346a9231db05a4a9759111e3f9cac1726ac9a6c68'
  }

  /**
   *  Validator in service. A validator is identified in MultiLocation format.
   */
  async getAsV956(key: v956.CurrencyId): Promise<[v956.V1MultiLocation, Uint8Array][] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'Validators', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<([v956.V1MultiLocation, Uint8Array][] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'Validators', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<([v956.V1MultiLocation, Uint8Array][])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'Validators')
  }

  /**
   *  Validator in service. A validator is identified in MultiLocation format.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'Validators') === '91a98cb05205938fb30bb54d376d37116248ea5fe40b2374ca3531004ab8fe12'
  }

  /**
   *  Validator in service. A validator is identified in MultiLocation format.
   */
  async getAsV962(key: v962.CurrencyId): Promise<[v962.V1MultiLocation, Uint8Array][] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'Validators', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<([v962.V1MultiLocation, Uint8Array][] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'Validators', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<([v962.V1MultiLocation, Uint8Array][])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'Validators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'Validators') != null
  }
}

export class SlpValidatorsByDelegatorStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Validators for each delegator. CurrencyId + Delegator => Vec<Validator>
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'ValidatorsByDelegator') === '5ce15075129078bd9d5071b1a069051bdb4c829d8e426600250ce01a538b97e3'
  }

  /**
   *  Validators for each delegator. CurrencyId + Delegator => Vec<Validator>
   */
  async getAsV940(key1: v940.CurrencyId, key2: v940.V1MultiLocation): Promise<[v940.V1MultiLocation, Uint8Array][] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'ValidatorsByDelegator', key1, key2)
  }

  async getManyAsV940(keys: [v940.CurrencyId, v940.V1MultiLocation][]): Promise<([v940.V1MultiLocation, Uint8Array][] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegator', keys)
  }

  async getAllAsV940(): Promise<([v940.V1MultiLocation, Uint8Array][])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegator')
  }

  /**
   *  Validators for each delegator. CurrencyId + Delegator => Vec<Validator>
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'ValidatorsByDelegator') === '98f2487e834eb84e2283b94647e961cf1d630b9c61df7f1d3263aa39c10d0ec1'
  }

  /**
   *  Validators for each delegator. CurrencyId + Delegator => Vec<Validator>
   */
  async getAsV956(key1: v956.CurrencyId, key2: v956.V1MultiLocation): Promise<[v956.V1MultiLocation, Uint8Array][] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'ValidatorsByDelegator', key1, key2)
  }

  async getManyAsV956(keys: [v956.CurrencyId, v956.V1MultiLocation][]): Promise<([v956.V1MultiLocation, Uint8Array][] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegator', keys)
  }

  async getAllAsV956(): Promise<([v956.V1MultiLocation, Uint8Array][])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegator')
  }

  /**
   *  Validators for each delegator. CurrencyId + Delegator => Vec<Validator>
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'ValidatorsByDelegator') === '937dc1d127a8567fe1b89a309afb810c3c9e4ba690df7260265157247b5b97bb'
  }

  /**
   *  Validators for each delegator. CurrencyId + Delegator => Vec<Validator>
   */
  async getAsV962(key1: v962.CurrencyId, key2: v962.V1MultiLocation): Promise<[v962.V1MultiLocation, Uint8Array][] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'ValidatorsByDelegator', key1, key2)
  }

  async getManyAsV962(keys: [v962.CurrencyId, v962.V1MultiLocation][]): Promise<([v962.V1MultiLocation, Uint8Array][] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegator', keys)
  }

  async getAllAsV962(): Promise<([v962.V1MultiLocation, Uint8Array][])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegator')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'ValidatorsByDelegator') != null
  }
}

export class SlpValidatorsByDelegatorXcmUpdateQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'ValidatorsByDelegatorXcmUpdateQueue') === 'e3ca1459ca7cabba6be0188032e48d3d91ae31754534661b8f8c11d21d633486'
  }

  async getAsV940(key: bigint): Promise<[v940.ValidatorsByDelegatorUpdateEntry, number] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'ValidatorsByDelegatorXcmUpdateQueue', key)
  }

  async getManyAsV940(keys: bigint[]): Promise<([v940.ValidatorsByDelegatorUpdateEntry, number] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegatorXcmUpdateQueue', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<([v940.ValidatorsByDelegatorUpdateEntry, number])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegatorXcmUpdateQueue')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'ValidatorsByDelegatorXcmUpdateQueue') === '18610ff9deacf882001eda83c01a3338c639385aca5d6a1ab6c1baf0c7269977'
  }

  async getAsV956(key: bigint): Promise<[v956.ValidatorsByDelegatorUpdateEntry, number] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'ValidatorsByDelegatorXcmUpdateQueue', key)
  }

  async getManyAsV956(keys: bigint[]): Promise<([v956.ValidatorsByDelegatorUpdateEntry, number] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegatorXcmUpdateQueue', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<([v956.ValidatorsByDelegatorUpdateEntry, number])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegatorXcmUpdateQueue')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'ValidatorsByDelegatorXcmUpdateQueue') === '8a15c43b90718c7652e3bd78152a894b9e7f4bdb79e07e2a8d6069041b2f6db0'
  }

  async getAsV962(key: bigint): Promise<[v962.ValidatorsByDelegatorUpdateEntry, number] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'ValidatorsByDelegatorXcmUpdateQueue', key)
  }

  async getManyAsV962(keys: bigint[]): Promise<([v962.ValidatorsByDelegatorUpdateEntry, number] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegatorXcmUpdateQueue', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<([v962.ValidatorsByDelegatorUpdateEntry, number])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'ValidatorsByDelegatorXcmUpdateQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'ValidatorsByDelegatorXcmUpdateQueue') != null
  }
}

export class SlpXcmDestWeightAndFeeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended out. Must be
   *  sufficient, otherwise the execution of XCM msg on the dest chain will fail.
   * 
   *  XcmDestWeightAndFee: DoubleMap: CurrencyId, XcmOperation => (Weight, Balance)
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Slp', 'XcmDestWeightAndFee') === '5db2b50f6447a4a3125ba4de3850ed9e4951f5a5ab4baba14b62c6875df5a833'
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended out. Must be
   *  sufficient, otherwise the execution of XCM msg on the dest chain will fail.
   * 
   *  XcmDestWeightAndFee: DoubleMap: CurrencyId, XcmOperation => (Weight, Balance)
   */
  async getAsV940(key1: v940.CurrencyId, key2: v940.XcmOperation): Promise<[bigint, bigint] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee', key1, key2)
  }

  async getManyAsV940(keys: [v940.CurrencyId, v940.XcmOperation][]): Promise<([bigint, bigint] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee', keys)
  }

  async getAllAsV940(): Promise<([bigint, bigint])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee')
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended out. Must be
   *  sufficient, otherwise the execution of XCM msg on the dest chain will fail.
   * 
   *  XcmDestWeightAndFee: DoubleMap: CurrencyId, XcmOperation => (Weight, Balance)
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('Slp', 'XcmDestWeightAndFee') === '50551787095cece9e230abbba20c4561e69bd0695825491e38ef39eedd48187a'
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended out. Must be
   *  sufficient, otherwise the execution of XCM msg on the dest chain will fail.
   * 
   *  XcmDestWeightAndFee: DoubleMap: CurrencyId, XcmOperation => (Weight, Balance)
   */
  async getAsV946(key1: v946.CurrencyId, key2: v946.XcmOperation): Promise<[bigint, bigint] | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee', key1, key2)
  }

  async getManyAsV946(keys: [v946.CurrencyId, v946.XcmOperation][]): Promise<([bigint, bigint] | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee', keys)
  }

  async getAllAsV946(): Promise<([bigint, bigint])[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee')
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended out. Must be
   *  sufficient, otherwise the execution of XCM msg on the dest chain will fail.
   * 
   *  XcmDestWeightAndFee: DoubleMap: CurrencyId, XcmOperation => (Weight, Balance)
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Slp', 'XcmDestWeightAndFee') === 'd5e3a7511a5c8fcfde54aa9f1f7c0de37ecc776ac2b03f1671cbbe3cdc646fef'
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended out. Must be
   *  sufficient, otherwise the execution of XCM msg on the dest chain will fail.
   * 
   *  XcmDestWeightAndFee: DoubleMap: CurrencyId, XcmOperation => (Weight, Balance)
   */
  async getAsV956(key1: v956.CurrencyId, key2: v956.XcmOperation): Promise<[bigint, bigint] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee', key1, key2)
  }

  async getManyAsV956(keys: [v956.CurrencyId, v956.XcmOperation][]): Promise<([bigint, bigint] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee', keys)
  }

  async getAllAsV956(): Promise<([bigint, bigint])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee')
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended out. Must be
   *  sufficient, otherwise the execution of XCM msg on the dest chain will fail.
   * 
   *  XcmDestWeightAndFee: DoubleMap: CurrencyId, XcmOperation => (Weight, Balance)
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Slp', 'XcmDestWeightAndFee') === '7c528db952fe700233206c28e7791d0ea6beb10cd43fa8acaf26060edd5cc7e0'
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended out. Must be
   *  sufficient, otherwise the execution of XCM msg on the dest chain will fail.
   * 
   *  XcmDestWeightAndFee: DoubleMap: CurrencyId, XcmOperation => (Weight, Balance)
   */
  async getAsV962(key1: v962.CurrencyId, key2: v962.XcmOperation): Promise<[bigint, bigint] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee', key1, key2)
  }

  async getManyAsV962(keys: [v962.CurrencyId, v962.XcmOperation][]): Promise<([bigint, bigint] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee', keys)
  }

  async getAllAsV962(): Promise<([bigint, bigint])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Slp', 'XcmDestWeightAndFee')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Slp', 'XcmDestWeightAndFee') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  async getAsV1(): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'Key')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV1(key: Uint8Array): Promise<v1.AccountInfo> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV1(keys: Uint8Array[]): Promise<(v1.AccountInfo)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(v1.AccountInfo)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  async getAsV1(): Promise<number | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'AllExtrinsicsLen')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'BlockHash') === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
  }

  /**
   *  Map of block numbers to block hashes.
   */
  async getAsV1(key: number): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockHash', key)
  }

  async getManyAsV1(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'System', 'BlockHash', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(Uint8Array)[]> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
  }

  /**
   *  The current weight for the block.
   */
  async getAsV1(): Promise<v1.ConsumedWeight> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '1ddf323439264601ddc32cb21cada8436fbec4e5389a9ff6d45f95e6e3c4b579'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV1(): Promise<v1.DigestOf> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '08ab0f1eb08eb281a0be5123646d1a04bf4254218b3b8617ed26e880f8eaa52f'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV906(): Promise<v906.Digest> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV916(): Promise<v916.Digest> {
    assert(this.isV916)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'EventCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  async getAsV1(): Promise<number> {
    assert(this.isV1)
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
   *  All topic vectors have deterministic storage locations depending on the topic. This
   *  allows light-clients to leverage the changes trie storage tracking mechanism and
   *  in case of changes fetch the list of events of interest.
   * 
   *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
   *  the `EventIndex` then in case if the topic has the same contents on the next block
   *  no notification will be triggered thus the event might be lost.
   */
  get isV1() {
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
  async getAsV1(key: Uint8Array): Promise<[number, number][]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'EventTopics', key)
  }

  async getManyAsV1(keys: Uint8Array[]): Promise<([number, number][])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<([number, number][])[]> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'c20aa34c0e40802da36c6f1309e5c2abfedf2f2a3f67d401ba80629d5de095b7'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV1(): Promise<v1.EventRecord[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV802() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '273b62ad3fe1daa5622100928c462a2202b93dd5b98283436211fb86ba853242'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV802(): Promise<v802.EventRecord[]> {
    assert(this.isV802)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'd9871fb92f566a17f54bc73c0ffcccad14f80266c7053980ca854d374d80b4e6'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV803(): Promise<v803.EventRecord[]> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV804() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '795f2a23ff5e4e731870ef9abd00fa4f2e4242ded11b7a4bab4224cc49ef0c3b'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV804(): Promise<v804.EventRecord[]> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV805() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '55a20e76bdfb74e2748a4b31cf8754486323b0e94dc434ff1166ac7dc07389e1'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV805(): Promise<v805.EventRecord[]> {
    assert(this.isV805)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '4902e79fc06e8876dc49d35aaa12bb4a6782eb6237e54fffabb8632fc21e469c'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV900(): Promise<v900.EventRecord[]> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV901() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '5dd77ba4d9634adf68ab6c3692c50a13f4f46d2cd7fdd840cb3a06a5d0278e7e'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV901(): Promise<v901.EventRecord[]> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '3facceb49f7fd1604921d48152a8bd8bb7e0948cc13a09540b0692a955c6c715'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV902(): Promise<v902.EventRecord[]> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '2146fb78799c67379dbcf2524c9dc90e2f3f77a52e90442c2e1772a79517adfb'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV906(): Promise<v906.EventRecord[]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '3a1dd6b77202d79492d14ab71e258a187b5747950dca9135332712f1a8087851'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV908(): Promise<v908.EventRecord[]> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV910() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '1d8f589375568c459d4da77411f6bac82a8b0286f1ee21900bac459527455e19'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV910(): Promise<v910.EventRecord[]> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV912() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '519b6c618f8df2034ef2ae842cf986db54ad57819b001965d688f4c7e6abb251'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV912(): Promise<v912.EventRecord[]> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV914() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '5c3bd2aa6c87a6e2cdac899611e771896ea51a61c6759e3c24514ce2a5be18ec'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV914(): Promise<v914.EventRecord[]> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'd4c01cafeb70e12fde184ecaafbb7c8b35af746823c7862010f98f98d33ab87b'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV915(): Promise<v915.EventRecord[]> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '5000a078e2c62eb61e423fe857019d40ede750b2e447578d4cd39207b3b60549'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV916(): Promise<v916.EventRecord[]> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'cda44c5c1b5bd7925b333ed669084df8fab867fd4d966a6cbd00e38f81029d9a'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV920(): Promise<v920.EventRecord[]> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV922() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'a7ce7bd496acbb1fd32599c9369b30bbd65bad877f0b552483c1f2c29bf1c199'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV922(): Promise<v922.EventRecord[]> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV923() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'b7c6b0b858a52790fa814546271b134c56a1f7dc464e723787f5953d35570e28'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV923(): Promise<v923.EventRecord[]> {
    assert(this.isV923)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV925() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '5f3a6b0f0aae1435d0ff0a5ecc039229026b9e2df6540f36e0d15c152f1261d7'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV925(): Promise<v925.EventRecord[]> {
    assert(this.isV925)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '799a8199735d42e6a03b7117d89c85606214460968c84e5b243f90ff2cd9edf6'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV926(): Promise<v926.EventRecord[]> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV927() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'a01370b5a79f04036ee5c82294ef9c43ff777b3154d4c693ca8dab381b3508a6'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV927(): Promise<v927.EventRecord[]> {
    assert(this.isV927)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'f1d8e6abcb54e425f7c2ef80439e51314bc5852dd42fdb505834a50e3fea1db5'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV930(): Promise<v930.EventRecord[]> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '5e2fb9acde833c73800a376e9a1afdf52b4d0df576de4e1f6feba764020360aa'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV932(): Promise<v932.EventRecord[]> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'b8d76fe6ebe7369d97743f6988ab4d920178a0ca3c632d656bf83b944ab072c5'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV940(): Promise<v940.EventRecord[]> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV942() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '8a0e40ee703ff7464f07dc207e5b3a3550d5de81f71baf483cd6066c8683f7e9'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV942(): Promise<v942.EventRecord[]> {
    assert(this.isV942)
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
  get isV944() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '07f3d507956a09dbbdb54ca441bbe724493eec07dd44ef5588d3af301cf80086'
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
  async getAsV944(): Promise<v944.EventRecord[]> {
    assert(this.isV944)
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
  get isV946() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'b7aa2898bb20ced437e6229bb481563bee121725a4c7b97ae19f46ee80eddbd0'
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
  async getAsV946(): Promise<v946.EventRecord[]> {
    assert(this.isV946)
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
  get isV948() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '3180000e14a17b1e7555b10411c9d8b1e0fd9fbe3f578d7cec9c944805bb996e'
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
  async getAsV948(): Promise<v948.EventRecord[]> {
    assert(this.isV948)
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
  get isV952() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'd416465d4235e2e66ac37d895ad2af27dd0be7180ca13dd823eebc5da83f073f'
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
  async getAsV952(): Promise<v952.EventRecord[]> {
    assert(this.isV952)
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
  get isV954() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '1a40b2e8bd87ee877d5b121ad5b5430f8222abbf9c87ce0a8fa4c02948b44d8f'
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
  async getAsV954(): Promise<v954.EventRecord[]> {
    assert(this.isV954)
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
  get isV956() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'd8c54c45948f58274516f67b5222b6c29fbc1e1ecef71cf3ed2da30fe69305e8'
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
  async getAsV956(): Promise<v956.EventRecord[]> {
    assert(this.isV956)
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
  get isV958() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'd7ea9aa5b3e2f3783611292315a741620371e9468ab9a8e4cb30f6457e2a4a6f'
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
  async getAsV958(): Promise<v958.EventRecord[]> {
    assert(this.isV958)
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
  get isV962() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '67044774c4cb5cfd5d6e62ab3752d40464f715f7eb1cb6f37d6b63d893cd83d2'
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
  async getAsV962(): Promise<v962.EventRecord[]> {
    assert(this.isV962)
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
  get isV964() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '98d4ab7cdb1465bd236c43acea4e2772d6b08b55973915b6e7a24c961b39d113'
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
  async getAsV964(): Promise<v964.EventRecord[]> {
    assert(this.isV964)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') === 'd79e80744c6939b13f7b8c45d8ea2656fb288e2987e1e58a3c0c8e3c80bc2040'
  }

  /**
   *  The execution phase of the block.
   */
  async getAsV1(): Promise<v1.Phase | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'ExecutionPhase')
  }

  /**
   *  The execution phase of the block.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
  }

  /**
   *  The execution phase of the block.
   */
  async getAsV906(): Promise<v906.Phase | undefined> {
    assert(this.isV906)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total extrinsics count for the current block.
   */
  async getAsV1(): Promise<number | undefined> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  async getAsV1(key: number): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicData', key)
  }

  async getManyAsV1(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'System', 'ExtrinsicData', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'System', 'ExtrinsicData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  async getAsV1(): Promise<v1.LastRuntimeUpgradeInfo | undefined> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'Number') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  async getAsV1(): Promise<number> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Hash of the previous block.
   */
  async getAsV1(): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'ParentHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  async getAsV1(): Promise<boolean> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  async getAsV1(): Promise<boolean> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToU32RefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') != null
  }
}

export class SystemMakerInfosStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV958() {
    return this._chain.getStorageItemTypeHash('SystemMaker', 'Infos') === '23e39caa95cfa6b2fbd810cc016f7d4703223947c5b4b586b533ee63757d0897'
  }

  async getAsV958(key: v958.CurrencyId): Promise<v958.Info | undefined> {
    assert(this.isV958)
    return this._chain.getStorage(this.blockHash, 'SystemMaker', 'Infos', key)
  }

  async getManyAsV958(keys: v958.CurrencyId[]): Promise<(v958.Info | undefined)[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'SystemMaker', 'Infos', keys.map(k => [k]))
  }

  async getAllAsV958(): Promise<(v958.Info)[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'SystemMaker', 'Infos')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('SystemMaker', 'Infos') === '24962376afdb3e6ed88089447a4f7e47c2850cc42319ce74103d9f8160a20ee6'
  }

  async getAsV962(key: v962.CurrencyId): Promise<v962.Info | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'SystemMaker', 'Infos', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(v962.Info | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'SystemMaker', 'Infos', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.Info)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'SystemMaker', 'Infos')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SystemMaker', 'Infos') != null
  }
}

export class SystemStakingRoundStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Currend Round Information
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'Round') === '7fb0f13a2ba439e4d5f15037d08009f65126b781f248e7d64a92ede963dc5bfd'
  }

  /**
   *  Currend Round Information
   */
  async getAsV946(): Promise<v946.RoundInfo | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'SystemStaking', 'Round')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'Round') != null
  }
}

export class SystemStakingTokenListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'TokenList') === 'db3f9eb4dbad3c8311e41edc50a6c4ac5f42c2b045d12a04eb328c89cf1b31e5'
  }

  async getAsV946(): Promise<v946.CurrencyId[]> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'SystemStaking', 'TokenList')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'TokenList') === 'db0cbfc37ef9d09587a534d8c3d4e541c11b600cd56cdf1bcf9a76816b954dec'
  }

  async getAsV956(): Promise<v956.CurrencyId[]> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'SystemStaking', 'TokenList')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'TokenList') === '7014d45af5c8f87c169f6376f8aacca23108d3bb702c3b77b3840dcfaadb8bff'
  }

  async getAsV962(): Promise<v962.CurrencyId[]> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'SystemStaking', 'TokenList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'TokenList') != null
  }
}

export class SystemStakingTokenStatusStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'TokenStatus') === '82e34f1b592d40e2ad8a2592831ca37029d31ad3fb279d8e03e00f9573820f60'
  }

  async getAsV946(key: v946.CurrencyId): Promise<v946.TokenInfo | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'SystemStaking', 'TokenStatus', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(v946.TokenInfo | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'SystemStaking', 'TokenStatus', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(v946.TokenInfo)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'SystemStaking', 'TokenStatus')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'TokenStatus') === '51d28fa1fe19c23da35161de1208cf7df106327feead77c7e4982ca58f5d8e79'
  }

  async getAsV956(key: v956.CurrencyId): Promise<v956.TokenInfo | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'SystemStaking', 'TokenStatus', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(v956.TokenInfo | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'SystemStaking', 'TokenStatus', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.TokenInfo)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'SystemStaking', 'TokenStatus')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'TokenStatus') === '63f0efecf1d0f1d75b3249c15a57660cc13bd685711be9042de415adcf29b312'
  }

  async getAsV962(key: v962.CurrencyId): Promise<v962.TokenInfo | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'SystemStaking', 'TokenStatus', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(v962.TokenInfo | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'SystemStaking', 'TokenStatus', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.TokenInfo)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'SystemStaking', 'TokenStatus')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('SystemStaking', 'TokenStatus') != null
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV906(): Promise<Uint8Array[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsV906(): Promise<Uint8Array | undefined> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV906(): Promise<number> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '41895466e484ffa23b7dce58e3c36fada1543bdff8c033fab32033d59628c150'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV906(key: Uint8Array): Promise<v906.Call | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(v906.Call | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.Call)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '690a5633a50cd13e473e9dcc5c576014cfb055286f7c0054a91c7f29fefd7b90'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV908(key: Uint8Array): Promise<v908.Call | undefined> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV908(keys: Uint8Array[]): Promise<(v908.Call | undefined)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV908(): Promise<(v908.Call)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV910() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '1ecec68300532c998b4551cf99ce181f6826d6f6c8e38901df3c23db0280297d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV910(key: Uint8Array): Promise<v910.Call | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV910(keys: Uint8Array[]): Promise<(v910.Call | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV910(): Promise<(v910.Call)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV912() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'dc88f3110f06d2704c3da45bbdbf60387114d13f45ad9ffdd3db2d14565383f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV912(key: Uint8Array): Promise<v912.Call | undefined> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV912(keys: Uint8Array[]): Promise<(v912.Call | undefined)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV912(): Promise<(v912.Call)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV914() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '7ced8245fec2975a273e6f351a8d598f3af18165feac4c1f10236009606f45f3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV914(key: Uint8Array): Promise<v914.Call | undefined> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV914(keys: Uint8Array[]): Promise<(v914.Call | undefined)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV914(): Promise<(v914.Call)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '1e918700e1dd96a255f0d980be19c7c28355c65562bb46da88e77b83116ba8d4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV915(key: Uint8Array): Promise<v915.Call | undefined> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV915(keys: Uint8Array[]): Promise<(v915.Call | undefined)[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV915(): Promise<(v915.Call)[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '8c2cc4aa9d2b11c8a02176a53ac560695d1215ce845eb72055640f11fa25fb24'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV916(key: Uint8Array): Promise<v916.Call | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV916(keys: Uint8Array[]): Promise<(v916.Call | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(v916.Call)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV918() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '91d446b09651888e05603553cd1881d423771f5c4bbc24936bf852dce0e0ac30'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV918(key: Uint8Array): Promise<v918.Call | undefined> {
    assert(this.isV918)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV918(keys: Uint8Array[]): Promise<(v918.Call | undefined)[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV918(): Promise<(v918.Call)[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '2359beb434f4906be1cf8a6b6d819b843bd3e32e4f7e84d9ffafa67c1f8cd01f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV920(key: Uint8Array): Promise<v920.Call | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV920(keys: Uint8Array[]): Promise<(v920.Call | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(v920.Call)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV922() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'f2c90c5e28a249a8a63e87e07a144d212939b2128843259f2ecc3ae9ceb56278'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV922(key: Uint8Array): Promise<v922.Call | undefined> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV922(keys: Uint8Array[]): Promise<(v922.Call | undefined)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV922(): Promise<(v922.Call)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV923() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '36778b6486e7905fb44c224ed7a1ebe484bf90ff84bc88243587097c4c81e823'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV923(key: Uint8Array): Promise<v923.Call | undefined> {
    assert(this.isV923)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV923(keys: Uint8Array[]): Promise<(v923.Call | undefined)[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV923(): Promise<(v923.Call)[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '72a42d145d4f0bb245e27a4f74ddc798556dda2ac6d14e986193e028d5a5cbba'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV926(key: Uint8Array): Promise<v926.Call | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV926(keys: Uint8Array[]): Promise<(v926.Call | undefined)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV926(): Promise<(v926.Call)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV927() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '670120d70275c84a31001af3920abe6dd849af83fa2dbe769f7d2f520f26116f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV927(key: Uint8Array): Promise<v927.Call | undefined> {
    assert(this.isV927)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV927(keys: Uint8Array[]): Promise<(v927.Call | undefined)[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV927(): Promise<(v927.Call)[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'fb352241aae80ef757c31ef21203b9293151b4270b6be049b51c725daa71abdc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV930(key: Uint8Array): Promise<v930.Call | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV930(keys: Uint8Array[]): Promise<(v930.Call | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV930(): Promise<(v930.Call)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '25fe55775902f2abb191f8b9c1674426625631228fcd7e4eced19ea48cb2871c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV932(key: Uint8Array): Promise<v932.Call | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV932(keys: Uint8Array[]): Promise<(v932.Call | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.Call)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'df6253374412980fc5896c54587a1d449e717e4ed60cbe2f8f49f09868d23369'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV940(key: Uint8Array): Promise<v940.Call | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV940(keys: Uint8Array[]): Promise<(v940.Call | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(v940.Call)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV942() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'acb12cb1ab21af37b1c2d950487dea4fd812b945be09e101b1cce41fb26cfc1d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV942(key: Uint8Array): Promise<v942.Call | undefined> {
    assert(this.isV942)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV942(keys: Uint8Array[]): Promise<(v942.Call | undefined)[]> {
    assert(this.isV942)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV942(): Promise<(v942.Call)[]> {
    assert(this.isV942)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV944() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '7ad9cb5b33ba3ae7bd221f747303eb870e60069f1b54692a54272943a6b1000e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV944(key: Uint8Array): Promise<v944.Call | undefined> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV944(keys: Uint8Array[]): Promise<(v944.Call | undefined)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV944(): Promise<(v944.Call)[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV946() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '86228955258bfcc7bbc0eab585d7b3c69a8aed7a66cb3493eb736e16f29f824d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV946(key: Uint8Array): Promise<v946.Call | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV946(keys: Uint8Array[]): Promise<(v946.Call | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(v946.Call)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV948() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '8007af47d32728c2968c39cc79980c29d8b724ede8b0ac52f325add40d4dd930'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV948(key: Uint8Array): Promise<v948.Call | undefined> {
    assert(this.isV948)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV948(keys: Uint8Array[]): Promise<(v948.Call | undefined)[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV948(): Promise<(v948.Call)[]> {
    assert(this.isV948)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV952() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'eea35e47df2c15b50041e3a2f137b0f86d6cdb3e5830225bb6da835e349f34d1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV952(key: Uint8Array): Promise<v952.Call | undefined> {
    assert(this.isV952)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV952(keys: Uint8Array[]): Promise<(v952.Call | undefined)[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV952(): Promise<(v952.Call)[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV954() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '7602e75ea1ef18dcff869eea4e5c93f84321a343a26b838338c5ed10aff9bed0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV954(key: Uint8Array): Promise<v954.Call | undefined> {
    assert(this.isV954)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV954(keys: Uint8Array[]): Promise<(v954.Call | undefined)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV954(): Promise<(v954.Call)[]> {
    assert(this.isV954)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '3705f777e55d2445d7c06284b3665159c7fa95cc144ccd0114bc3f082d2fbce7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV956(key: Uint8Array): Promise<v956.Call | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV956(keys: Uint8Array[]): Promise<(v956.Call | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.Call)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV958() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ad837f2c6462b189da38f5c582a2236a30f3654cdeec9389ad420fd8e0d9db13'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV958(key: Uint8Array): Promise<v958.Call | undefined> {
    assert(this.isV958)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV958(keys: Uint8Array[]): Promise<(v958.Call | undefined)[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV958(): Promise<(v958.Call)[]> {
    assert(this.isV958)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'a2ca13d78ce7fec8b0edaa1a5a7bfcea730993846db182cdc4fc2da1b2a0f809'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV962(key: Uint8Array): Promise<v962.Call | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV962(keys: Uint8Array[]): Promise<(v962.Call | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.Call)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV964() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'f8cccb24cfbb4a47a056bd606dfa0c1639cf113376e03847393b3d5522cd8b0d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV964(key: Uint8Array): Promise<v964.Call | undefined> {
    assert(this.isV964)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV964(keys: Uint8Array[]): Promise<(v964.Call | undefined)[]> {
    assert(this.isV964)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV964(): Promise<(v964.Call)[]> {
    assert(this.isV964)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV906(): Promise<Uint8Array[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV906(key: Uint8Array): Promise<v906.Votes | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Voting', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(v906.Votes | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.Votes)[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  async getAsV906(): Promise<Uint8Array[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The current prime member, if one exists.
   */
  async getAsV906(): Promise<Uint8Array | undefined> {
    assert(this.isV906)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  async getAsV1(): Promise<boolean> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'Now') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  Current time for the current block.
   */
  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Tips', 'Reasons') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  async getAsV906(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Reasons', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Reasons', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(Uint8Array)[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV906(key: Uint8Array): Promise<v906.OpenTip | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Tips', key)
  }

  async getManyAsV906(keys: Uint8Array[]): Promise<(v906.OpenTip | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.OpenTip)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') != null
  }
}

export class TokenIssuerIssueWhiteListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'IssueWhiteList') === '1a966b57908f91919e805725b52307bb4fc7b6dc0bbbc4b8f6ae8589b24e726c'
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  async getAsV902(key: v902.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', key)
  }

  async getManyAsV902(keys: v902.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<(Uint8Array[])[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList')
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'IssueWhiteList') === 'ac1c7cd806cb71d1bb910e1636876009dff14d9b13d3da10bcdbe644b7aa1037'
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  async getAsV906(key: v906.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', key)
  }

  async getManyAsV906(keys: v906.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(Uint8Array[])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList')
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'IssueWhiteList') === '2e4e80a9dde30b1d6abd69d38f463a27b87cbbbda6e5485b0c44ed648a7ae182'
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  async getAsV916(key: v916.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', key)
  }

  async getManyAsV916(keys: v916.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(Uint8Array[])[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList')
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'IssueWhiteList') === '8a4c7c2128dc2990ad98c4f9eca1f1703bc99580b29bcd4a46a574e0b4b37dfa'
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  async getAsV920(key: v920.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', key)
  }

  async getManyAsV920(keys: v920.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(Uint8Array[])[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList')
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'IssueWhiteList') === '65f8d6421285fa1e7d4720768daec8816d296397e30652a6b80673682f35de07'
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  async getAsV932(key: v932.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', key)
  }

  async getManyAsV932(keys: v932.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(Uint8Array[])[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList')
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'IssueWhiteList') === '43e57ecd9a7d5d366e057327c720cc5efaae05c6e3feca4e521fe0ef0262b0d6'
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  async getAsV956(key: v956.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(Uint8Array[])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList')
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'IssueWhiteList') === 'd1051e5d4bc8b9aa597b6992ec0cdfd40a086359623802a33fc5ddf4b10162ec'
  }

  /**
   *  Accounts in the whitelist can issue the corresponding Currency.
   */
  async getAsV962(key: v962.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(Uint8Array[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'IssueWhiteList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'IssueWhiteList') != null
  }
}

export class TokenIssuerTransferWhiteListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'TransferWhiteList') === '1a966b57908f91919e805725b52307bb4fc7b6dc0bbbc4b8f6ae8589b24e726c'
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  async getAsV902(key: v902.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', key)
  }

  async getManyAsV902(keys: v902.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<(Uint8Array[])[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList')
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'TransferWhiteList') === 'ac1c7cd806cb71d1bb910e1636876009dff14d9b13d3da10bcdbe644b7aa1037'
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  async getAsV906(key: v906.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', key)
  }

  async getManyAsV906(keys: v906.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(Uint8Array[])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList')
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'TransferWhiteList') === '2e4e80a9dde30b1d6abd69d38f463a27b87cbbbda6e5485b0c44ed648a7ae182'
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  async getAsV916(key: v916.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', key)
  }

  async getManyAsV916(keys: v916.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(Uint8Array[])[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList')
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'TransferWhiteList') === '8a4c7c2128dc2990ad98c4f9eca1f1703bc99580b29bcd4a46a574e0b4b37dfa'
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  async getAsV920(key: v920.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', key)
  }

  async getManyAsV920(keys: v920.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(Uint8Array[])[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList')
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'TransferWhiteList') === '65f8d6421285fa1e7d4720768daec8816d296397e30652a6b80673682f35de07'
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  async getAsV932(key: v932.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', key)
  }

  async getManyAsV932(keys: v932.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(Uint8Array[])[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList')
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'TransferWhiteList') === '43e57ecd9a7d5d366e057327c720cc5efaae05c6e3feca4e521fe0ef0262b0d6'
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  async getAsV956(key: v956.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(Uint8Array[])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList')
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'TransferWhiteList') === 'd1051e5d4bc8b9aa597b6992ec0cdfd40a086359623802a33fc5ddf4b10162ec'
  }

  /**
   *  Accounts in the whitelist can transfer the corresponding Currency.
   */
  async getAsV962(key: v962.CurrencyId): Promise<Uint8Array[] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(Uint8Array[] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(Uint8Array[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'TokenIssuer', 'TransferWhiteList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TokenIssuer', 'TransferWhiteList') != null
  }
}

export class TokensAccountsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  get isV802() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') === '06fcc557a28c943c10058252f1354218fefcc2f585411a83de9f5e5caeec4e91'
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  async getAsV802(key1: Uint8Array, key2: v802.CurrencyId): Promise<v802.OrmlAccountData> {
    assert(this.isV802)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV802(keys: [Uint8Array, v802.CurrencyId][]): Promise<(v802.OrmlAccountData)[]> {
    assert(this.isV802)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV802(): Promise<(v802.OrmlAccountData)[]> {
    assert(this.isV802)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') === '8ea314d04aa7f347c62c956b85a71b71b4c155a0546ef6c7fc901ae08951705f'
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  async getAsV906(key1: Uint8Array, key2: v906.CurrencyId): Promise<v906.Type_363> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV906(keys: [Uint8Array, v906.CurrencyId][]): Promise<(v906.Type_363)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV906(): Promise<(v906.Type_363)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') === '5057ce5de21b041387339e87cd92c9039a7712d8d3dd3c66a9270fde8cd2dfcd'
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  async getAsV916(key1: Uint8Array, key2: v916.CurrencyId): Promise<v916.Type_454> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV916(keys: [Uint8Array, v916.CurrencyId][]): Promise<(v916.Type_454)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV916(): Promise<(v916.Type_454)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') === '4fdccf77c962f52ef880d117304bc8b3344093216b5ea56bd2a9c0f7d2ce48fa'
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  async getAsV920(key1: Uint8Array, key2: v920.CurrencyId): Promise<v920.Type_454> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV920(keys: [Uint8Array, v920.CurrencyId][]): Promise<(v920.Type_454)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV920(): Promise<(v920.Type_454)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') === 'a98af2b607a9b66d8ee7e5fcfb0b1d8a6cf02933f75fcafd0752fefaa03e1168'
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  async getAsV932(key1: Uint8Array, key2: v932.CurrencyId): Promise<v932.Type_507> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV932(keys: [Uint8Array, v932.CurrencyId][]): Promise<(v932.Type_507)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV932(): Promise<(v932.Type_507)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') === 'b6a53be77df83383c0a1b8395b54ecfacf478653d11f6ac618bc625a62cf9435'
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  async getAsV956(key1: Uint8Array, key2: v956.CurrencyId): Promise<v956.Type_568> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV956(keys: [Uint8Array, v956.CurrencyId][]): Promise<(v956.Type_568)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV956(): Promise<(v956.Type_568)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') === '320cf65e8586698cf6c17de6d0fd1a55530700be0e4ec598786cf5644a87f656'
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  async getAsV962(key1: Uint8Array, key2: v962.CurrencyId): Promise<v962.Type_591> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV962(keys: [Uint8Array, v962.CurrencyId][]): Promise<(v962.Type_591)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV962(): Promise<(v962.Type_591)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') != null
  }
}

export class TokensLocksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV802() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') === '4427f4f4ab9ba9508f2e8779c61bdbd5ce36411efc40a42faa16a4dd1a4af11f'
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV802(key1: Uint8Array, key2: v802.CurrencyId): Promise<v802.OrmlBalanceLock[]> {
    assert(this.isV802)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Locks', key1, key2)
  }

  async getManyAsV802(keys: [Uint8Array, v802.CurrencyId][]): Promise<(v802.OrmlBalanceLock[])[]> {
    assert(this.isV802)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks', keys)
  }

  async getAllAsV802(): Promise<(v802.OrmlBalanceLock[])[]> {
    assert(this.isV802)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks')
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') === 'd11893497f6e22866f735cb09f4697e64ce165cdb92dfde30510f3c2b1b754c8'
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV906(key1: Uint8Array, key2: v906.CurrencyId): Promise<v906.Type_361[]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Locks', key1, key2)
  }

  async getManyAsV906(keys: [Uint8Array, v906.CurrencyId][]): Promise<(v906.Type_361[])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks', keys)
  }

  async getAllAsV906(): Promise<(v906.Type_361[])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks')
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') === 'cfb252db3d8c5cbf55f9b09bc829f3b4d5dfda16a17553c117b2a9d9c58fe004'
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV916(key1: Uint8Array, key2: v916.CurrencyId): Promise<v916.Type_452[]> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Locks', key1, key2)
  }

  async getManyAsV916(keys: [Uint8Array, v916.CurrencyId][]): Promise<(v916.Type_452[])[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks', keys)
  }

  async getAllAsV916(): Promise<(v916.Type_452[])[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks')
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') === 'b5f07b611465e094ea88495c3798865418a1dc6d1fa329bae8bf1984d57770f6'
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV920(key1: Uint8Array, key2: v920.CurrencyId): Promise<v920.Type_452[]> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Locks', key1, key2)
  }

  async getManyAsV920(keys: [Uint8Array, v920.CurrencyId][]): Promise<(v920.Type_452[])[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks', keys)
  }

  async getAllAsV920(): Promise<(v920.Type_452[])[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks')
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') === 'dd453e05f24253897a43d6bf58b119cad771783a1dad96216994e2e59f0c8629'
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV932(key1: Uint8Array, key2: v932.CurrencyId): Promise<v932.Type_505[]> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Locks', key1, key2)
  }

  async getManyAsV932(keys: [Uint8Array, v932.CurrencyId][]): Promise<(v932.Type_505[])[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks', keys)
  }

  async getAllAsV932(): Promise<(v932.Type_505[])[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks')
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') === 'e67884159ca2ff69576281c5011a20b4646e85c747e0f5efd01cc0c5d4640c3e'
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV956(key1: Uint8Array, key2: v956.CurrencyId): Promise<v956.Type_566[]> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Locks', key1, key2)
  }

  async getManyAsV956(keys: [Uint8Array, v956.CurrencyId][]): Promise<(v956.Type_566[])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks', keys)
  }

  async getAllAsV956(): Promise<(v956.Type_566[])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks')
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') === '7f6c9752bd40f53e90e9745fbffbe683235d9a274a66a23c2db8a05ea2cae197'
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV962(key1: Uint8Array, key2: v962.CurrencyId): Promise<v962.Type_589[]> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Locks', key1, key2)
  }

  async getManyAsV962(keys: [Uint8Array, v962.CurrencyId][]): Promise<(v962.Type_589[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks', keys)
  }

  async getAllAsV962(): Promise<(v962.Type_589[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') != null
  }
}

export class TokensReservesStorage {
  private readonly _chain: Chain
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
  get isV944() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Reserves') === 'dd453e05f24253897a43d6bf58b119cad771783a1dad96216994e2e59f0c8629'
  }

  /**
   *  Named reserves on some account balances.
   */
  async getAsV944(key1: Uint8Array, key2: v944.CurrencyId): Promise<v944.ReserveData[]> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Reserves', key1, key2)
  }

  async getManyAsV944(keys: [Uint8Array, v944.CurrencyId][]): Promise<(v944.ReserveData[])[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Reserves', keys)
  }

  async getAllAsV944(): Promise<(v944.ReserveData[])[]> {
    assert(this.isV944)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Reserves')
  }

  /**
   *  Named reserves on some account balances.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Reserves') === 'e67884159ca2ff69576281c5011a20b4646e85c747e0f5efd01cc0c5d4640c3e'
  }

  /**
   *  Named reserves on some account balances.
   */
  async getAsV956(key1: Uint8Array, key2: v956.CurrencyId): Promise<v956.ReserveData[]> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Reserves', key1, key2)
  }

  async getManyAsV956(keys: [Uint8Array, v956.CurrencyId][]): Promise<(v956.ReserveData[])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Reserves', keys)
  }

  async getAllAsV956(): Promise<(v956.ReserveData[])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Reserves')
  }

  /**
   *  Named reserves on some account balances.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Reserves') === '7f6c9752bd40f53e90e9745fbffbe683235d9a274a66a23c2db8a05ea2cae197'
  }

  /**
   *  Named reserves on some account balances.
   */
  async getAsV962(key1: Uint8Array, key2: v962.CurrencyId): Promise<v962.ReserveData[]> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Reserves', key1, key2)
  }

  async getManyAsV962(keys: [Uint8Array, v962.CurrencyId][]): Promise<(v962.ReserveData[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Reserves', keys)
  }

  async getAllAsV962(): Promise<(v962.ReserveData[])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Reserves')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tokens', 'Reserves') != null
  }
}

export class TokensTotalIssuanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total issuance of a token type.
   */
  get isV802() {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') === '4485e1de640ba6d5644bccfa5de05d1fda969c5acf14643aaaa0e5902011be6f'
  }

  /**
   *  The total issuance of a token type.
   */
  async getAsV802(key: v802.CurrencyId): Promise<bigint> {
    assert(this.isV802)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'TotalIssuance', key)
  }

  async getManyAsV802(keys: v802.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV802)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance', keys.map(k => [k]))
  }

  async getAllAsV802(): Promise<(bigint)[]> {
    assert(this.isV802)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance')
  }

  /**
   *  The total issuance of a token type.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') === 'bc7ace11b9acb0503943c179b0df6b087fe54378a529b00bc4d74e91a92b8d20'
  }

  /**
   *  The total issuance of a token type.
   */
  async getAsV906(key: v906.CurrencyId): Promise<bigint> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'TotalIssuance', key)
  }

  async getManyAsV906(keys: v906.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance')
  }

  /**
   *  The total issuance of a token type.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') === '0c4cf2796fe05257005182b83584d3bc188cf7115e54343b6eed66117bdc03a7'
  }

  /**
   *  The total issuance of a token type.
   */
  async getAsV916(key: v916.CurrencyId): Promise<bigint> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'TotalIssuance', key)
  }

  async getManyAsV916(keys: v916.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(bigint)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance')
  }

  /**
   *  The total issuance of a token type.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') === '007e17879f51eca619124318e9c48246b55feb1399b77cf08bc5d6e6dfee39db'
  }

  /**
   *  The total issuance of a token type.
   */
  async getAsV920(key: v920.CurrencyId): Promise<bigint> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'TotalIssuance', key)
  }

  async getManyAsV920(keys: v920.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(bigint)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance')
  }

  /**
   *  The total issuance of a token type.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') === '882212a0ba28258088066051bf9e56c0767f43777f841fe4f85a0848b73f1ea4'
  }

  /**
   *  The total issuance of a token type.
   */
  async getAsV932(key: v932.CurrencyId): Promise<bigint> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'TotalIssuance', key)
  }

  async getManyAsV932(keys: v932.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(bigint)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance')
  }

  /**
   *  The total issuance of a token type.
   */
  get isV956() {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') === '4c39b9bae716dbe5a3072da27c59dffcdf999bdf64e2e4128f5e6038396d4a03'
  }

  /**
   *  The total issuance of a token type.
   */
  async getAsV956(key: v956.CurrencyId): Promise<bigint> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'TotalIssuance', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance')
  }

  /**
   *  The total issuance of a token type.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') === '90285da57e7305354cef41c507a8403919ee1ccfad0a423e082e82bb7abe002a'
  }

  /**
   *  The total issuance of a token type.
   */
  async getAsV962(key: v962.CurrencyId): Promise<bigint> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'TotalIssuance', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') != null
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

  get isV1() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') === '8840628264db1877ef5c3718a00459d4b519de0922f813836237f71320a25aa6'
  }

  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'NextFeeMultiplier')
  }

  get isV906() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  async getAsV906(): Promise<bigint> {
    assert(this.isV906)
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

  get isV1() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
  }

  async getAsV1(): Promise<v1.Releases> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'StorageVersion')
  }

  get isV906() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
  }

  async getAsV906(): Promise<v906.Type_187> {
    assert(this.isV906)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Approvals') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Proposal indices that have been approved but not yet awarded.
   */
  async getAsV803(): Promise<number[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Bounties') === '338c03a838c88e6ae3cb2011fbe2c50c23c1a14bcea7cd6606cc95ea0a3a18ab'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV803(key: number): Promise<v803.Bounty | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Bounties', key)
  }

  async getManyAsV803(keys: number[]): Promise<(v803.Bounty | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Bounties', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.Bounty)[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyApprovals') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Bounty indices that have been approved but not yet funded.
   */
  async getAsV803(): Promise<number[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of bounty proposals that have been made.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'BountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each bounty.
   */
  async getAsV803(key: number): Promise<Uint8Array | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'BountyDescriptions', key)
  }

  async getManyAsV803(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'BountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(Uint8Array)[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of proposals that have been made.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV803(key: number): Promise<v803.TreasuryProposal | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV803(keys: number[]): Promise<(v803.TreasuryProposal | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.TreasuryProposal)[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Reasons') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  async getAsV803(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Reasons', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Reasons', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(Uint8Array)[]> {
    assert(this.isV803)
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
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV803(key: Uint8Array): Promise<v803.OpenTip | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV803(keys: Uint8Array[]): Promise<(v803.OpenTip | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  async getAllAsV803(): Promise<(v803.OpenTip)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}

export class UnknownTokensAbstractFungibleBalancesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Abstract fungible balances under a given location and a abstract
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  get isV804() {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'AbstractFungibleBalances') === 'd217e5380b5da2af6889855d79e9fcca670d2d8ce19be91206a5bb9565250b80'
  }

  /**
   *  Abstract fungible balances under a given location and a abstract
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  async getAsV804(key1: v804.MultiLocation, key2: Uint8Array): Promise<bigint> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances', key1, key2)
  }

  async getManyAsV804(keys: [v804.MultiLocation, Uint8Array][]): Promise<(bigint)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances', keys)
  }

  async getAllAsV804(): Promise<(bigint)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances')
  }

  /**
   *  Abstract fungible balances under a given location and a abstract
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'AbstractFungibleBalances') === 'ba8ec6dc294130abdb53c6a6b242429d9e550beaffee625b083c25e47facfbdd'
  }

  /**
   *  Abstract fungible balances under a given location and a abstract
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  async getAsV902(key1: v902.MultiLocation, key2: Uint8Array): Promise<bigint> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances', key1, key2)
  }

  async getManyAsV902(keys: [v902.MultiLocation, Uint8Array][]): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances', keys)
  }

  async getAllAsV902(): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances')
  }

  /**
   *  Abstract fungible balances under a given location and a abstract
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'AbstractFungibleBalances') === 'f6cf7e5c9878cef27f99d1df60d9721e0034a66cd864d15d65a9196bb951c149'
  }

  /**
   *  Abstract fungible balances under a given location and a abstract
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  async getAsV906(key1: v906.V1MultiLocation, key2: Uint8Array): Promise<bigint> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances', key1, key2)
  }

  async getManyAsV906(keys: [v906.V1MultiLocation, Uint8Array][]): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances', keys)
  }

  async getAllAsV906(): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'AbstractFungibleBalances') != null
  }
}

export class UnknownTokensConcreteFungibleBalancesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Concrete fungible balances under a given location and a concrete
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  get isV804() {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'ConcreteFungibleBalances') === '16430967f6cd61631efcdb13111a7c87798484d48597ea2ebaed43c39198aa1c'
  }

  /**
   *  Concrete fungible balances under a given location and a concrete
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  async getAsV804(key1: v804.MultiLocation, key2: v804.MultiLocation): Promise<bigint> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances', key1, key2)
  }

  async getManyAsV804(keys: [v804.MultiLocation, v804.MultiLocation][]): Promise<(bigint)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances', keys)
  }

  async getAllAsV804(): Promise<(bigint)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances')
  }

  /**
   *  Concrete fungible balances under a given location and a concrete
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'ConcreteFungibleBalances') === '89f266038161cef7500eaf1e2abcc285a033ae13151535d4ad3cc9d7141fc4de'
  }

  /**
   *  Concrete fungible balances under a given location and a concrete
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  async getAsV902(key1: v902.MultiLocation, key2: v902.MultiLocation): Promise<bigint> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances', key1, key2)
  }

  async getManyAsV902(keys: [v902.MultiLocation, v902.MultiLocation][]): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances', keys)
  }

  async getAllAsV902(): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances')
  }

  /**
   *  Concrete fungible balances under a given location and a concrete
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'ConcreteFungibleBalances') === 'a1d05d2a23ba410062fdbbbbea5e8c90763e56102572e63e7d9a78dff938ef51'
  }

  /**
   *  Concrete fungible balances under a given location and a concrete
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  async getAsV906(key1: v906.V1MultiLocation, key2: v906.V1MultiLocation): Promise<bigint> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances', key1, key2)
  }

  async getManyAsV906(keys: [v906.V1MultiLocation, v906.V1MultiLocation][]): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances', keys)
  }

  async getAllAsV906(): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'ConcreteFungibleBalances') != null
  }
}

export class VSBondAuctionNextOrderIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV912() {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'NextOrderId') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV912(): Promise<bigint> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'VSBondAuction', 'NextOrderId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'NextOrderId') != null
  }
}

export class VSBondAuctionTotalOrderInfosStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV912() {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'TotalOrderInfos') === '92039aa3dcb58b33995f52835286d626e062029cded0151495ea9b6acf7e5ef0'
  }

  async getAsV912(key: bigint): Promise<v912.OrderInfo | undefined> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', key)
  }

  async getManyAsV912(keys: bigint[]): Promise<(v912.OrderInfo | undefined)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', keys.map(k => [k]))
  }

  async getAllAsV912(): Promise<(v912.OrderInfo)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos')
  }

  get isV916() {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'TotalOrderInfos') === 'ff826e6026096bfe570baf79574b73a6e456f5892d463b5502df3f083883f6c4'
  }

  async getAsV916(key: bigint): Promise<v916.OrderInfo | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', key)
  }

  async getManyAsV916(keys: bigint[]): Promise<(v916.OrderInfo | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', keys.map(k => [k]))
  }

  async getAllAsV916(): Promise<(v916.OrderInfo)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos')
  }

  get isV920() {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'TotalOrderInfos') === '502d36fca98485620ee1c25e69deb63b85951217d1583a532cd7b52ea62857f1'
  }

  async getAsV920(key: bigint): Promise<v920.OrderInfo | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', key)
  }

  async getManyAsV920(keys: bigint[]): Promise<(v920.OrderInfo | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', keys.map(k => [k]))
  }

  async getAllAsV920(): Promise<(v920.OrderInfo)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos')
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'TotalOrderInfos') === '191fa8cf5c6477b39083f56e2280c6ef6c13b83741a592b4ef168803633835d0'
  }

  async getAsV932(key: bigint): Promise<v932.OrderInfo | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', key)
  }

  async getManyAsV932(keys: bigint[]): Promise<(v932.OrderInfo | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.OrderInfo)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'TotalOrderInfos') === '9d458ca67cec110d91b674aee8f413d5aff96298e7b662c26c6a5a3aeaecfe26'
  }

  async getAsV956(key: bigint): Promise<v956.OrderInfo | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', key)
  }

  async getManyAsV956(keys: bigint[]): Promise<(v956.OrderInfo | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.OrderInfo)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'TotalOrderInfos') === '9704976ed5419430529e069acb1a0542bd47b6f0ba9a17d644a6774cb4bad3b6'
  }

  async getAsV962(key: bigint): Promise<v962.OrderInfo | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', key)
  }

  async getManyAsV962(keys: bigint[]): Promise<(v962.OrderInfo | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.OrderInfo)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'TotalOrderInfos')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'TotalOrderInfos') != null
  }
}

export class VSBondAuctionTransactionFeeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  transaction fee rate[sellFee, buyFee]
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'TransactionFee') === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
  }

  /**
   *  transaction fee rate[sellFee, buyFee]
   */
  async getAsV916(): Promise<[number, number]> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'VSBondAuction', 'TransactionFee')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'TransactionFee') != null
  }
}

export class VSBondAuctionUserOrderIdsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV912() {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'UserOrderIds') === '375ca2ca498199fb4021498aeade0effd7e9f8973d378a8029922d2934f3605e'
  }

  async getAsV912(key1: Uint8Array, key2: v912.OrderType): Promise<bigint[]> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'VSBondAuction', 'UserOrderIds', key1, key2)
  }

  async getManyAsV912(keys: [Uint8Array, v912.OrderType][]): Promise<(bigint[])[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'UserOrderIds', keys)
  }

  async getAllAsV912(): Promise<(bigint[])[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'VSBondAuction', 'UserOrderIds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VSBondAuction', 'UserOrderIds') != null
  }
}

export class VestingCliffStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Cliff vesting
   */
  get isV918() {
    return this._chain.getStorageItemTypeHash('Vesting', 'Cliff') === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
  }

  /**
   *  Cliff vesting
   */
  async getAsV918(key: Uint8Array): Promise<number | undefined> {
    assert(this.isV918)
    return this._chain.getStorage(this.blockHash, 'Vesting', 'Cliff', key)
  }

  async getManyAsV918(keys: Uint8Array[]): Promise<(number | undefined)[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'Cliff', keys.map(k => [k]))
  }

  async getAllAsV918(): Promise<(number)[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'Cliff')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Vesting', 'Cliff') != null
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Vesting', 'Vesting') === '04a3bd3844d81bd0b622c91e507de0014c997b5d7949e81b50c1607437b412fa'
  }

  /**
   *  Information regarding the vesting of a given account.
   */
  async getAsV1(key: Uint8Array): Promise<v1.VestingInfo | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Vesting', 'Vesting', key)
  }

  async getManyAsV1(keys: Uint8Array[]): Promise<(v1.VestingInfo | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'Vesting', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(v1.VestingInfo)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'Vesting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Vesting', 'Vesting') != null
  }
}

export class VestingVestingStartAtStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Start at
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Vesting', 'VestingStartAt') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Start at
   */
  async getAsV1(): Promise<number | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Vesting', 'VestingStartAt')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Vesting', 'VestingStartAt') != null
  }
}

export class VstokenConversionExchangeFeeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  exchange fee
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'ExchangeFee') === '077e796d8ed8a153654b3d93809caf05434c549b9c2b567e6aac95e17be66f25'
  }

  /**
   *  exchange fee
   */
  async getAsV932(): Promise<v932.VstokenConversionExchangeFee> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'VstokenConversion', 'ExchangeFee')
  }

  /**
   *  exchange fee
   */
  get isV952() {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'ExchangeFee') === 'ef41abb29c146ee5c064181640c2dbf29bbc1de721b84e08b5a1a087960b84da'
  }

  /**
   *  exchange fee
   */
  async getAsV952(): Promise<v952.VstokenConversionExchangeFee> {
    assert(this.isV952)
    return this._chain.getStorage(this.blockHash, 'VstokenConversion', 'ExchangeFee')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'ExchangeFee') != null
  }
}

export class VstokenConversionExchangeRateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'ExchangeRate') === '8237a247218387bf8a47444638dd5e646a5505138186437bbf8a91e7b2f3c650'
  }

  async getAsV932(key: number): Promise<v932.VstokenConversionExchangeRate> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'VstokenConversion', 'ExchangeRate', key)
  }

  async getManyAsV932(keys: number[]): Promise<(v932.VstokenConversionExchangeRate)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'VstokenConversion', 'ExchangeRate', keys.map(k => [k]))
  }

  async getAllAsV932(): Promise<(v932.VstokenConversionExchangeRate)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'VstokenConversion', 'ExchangeRate')
  }

  get isV952() {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'ExchangeRate') === 'b2aeabb078e8ef0cf6d68de66e8d331f2080e6af12b5bad370355340c8451fd2'
  }

  async getAsV952(key: number): Promise<v952.VstokenConversionExchangeRate> {
    assert(this.isV952)
    return this._chain.getStorage(this.blockHash, 'VstokenConversion', 'ExchangeRate', key)
  }

  async getManyAsV952(keys: number[]): Promise<(v952.VstokenConversionExchangeRate)[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'VstokenConversion', 'ExchangeRate', keys.map(k => [k]))
  }

  async getAllAsV952(): Promise<(v952.VstokenConversionExchangeRate)[]> {
    assert(this.isV952)
    return this._chain.queryStorage(this.blockHash, 'VstokenConversion', 'ExchangeRate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'ExchangeRate') != null
  }
}

export class VstokenConversionKusamaLeaseStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'KusamaLease') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV932(): Promise<number> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'VstokenConversion', 'KusamaLease')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'KusamaLease') != null
  }
}

export class VstokenConversionPolkadotLeaseStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV932() {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'PolkadotLease') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV932(): Promise<number> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'VstokenConversion', 'PolkadotLease')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'PolkadotLease') != null
  }
}

export class VstokenConversionRelaychainLeaseStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV952() {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'RelaychainLease') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV952(): Promise<number> {
    assert(this.isV952)
    return this._chain.getStorage(this.blockHash, 'VstokenConversion', 'RelaychainLease')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VstokenConversion', 'RelaychainLease') != null
  }
}

export class VtokenMintingCurrencyUnlockingTotalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'CurrencyUnlockingTotal') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  async getAsV940(): Promise<bigint> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'CurrencyUnlockingTotal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'CurrencyUnlockingTotal') != null
  }
}

export class VtokenMintingFeesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'Fees') === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
  }

  async getAsV940(): Promise<[number, number]> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'Fees')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'Fees') != null
  }
}

export class VtokenMintingHookIterationLimitStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'HookIterationLimit') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV940(): Promise<number> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'HookIterationLimit')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'HookIterationLimit') != null
  }
}

export class VtokenMintingMinTimeUnitStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinTimeUnit') === '886732e656e8e5027c829b2d1ece645ce68edbe68cf78c25a52c745ede530615'
  }

  async getAsV940(key: v940.CurrencyId): Promise<v940.TimeUnit> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(v940.TimeUnit)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(v940.TimeUnit)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit')
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinTimeUnit') === 'dd03b25d9bc3a586cddd8628e321d821d2108a9cc1d864ceb3c515c556899d68'
  }

  async getAsV946(key: v946.CurrencyId): Promise<v946.TimeUnit> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(v946.TimeUnit)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(v946.TimeUnit)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinTimeUnit') === 'bece0f0415b28dbccd1080c63ab6c79d15e4316d499c949e8c5a444a0ede4401'
  }

  async getAsV956(key: v956.CurrencyId): Promise<v956.TimeUnit> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(v956.TimeUnit)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.TimeUnit)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinTimeUnit') === '46170ddd0defeec69e346e544875db5c79e2d8486a3b3ebf93a5bd3a3e20a304'
  }

  async getAsV962(key: v962.CurrencyId): Promise<v962.TimeUnit> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(v962.TimeUnit)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.TimeUnit)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinTimeUnit')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinTimeUnit') != null
  }
}

export class VtokenMintingMinimumMintStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinimumMint') === '882212a0ba28258088066051bf9e56c0767f43777f841fe4f85a0848b73f1ea4'
  }

  async getAsV940(key: v940.CurrencyId): Promise<bigint> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinimumMint', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumMint', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(bigint)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumMint')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinimumMint') === '4c39b9bae716dbe5a3072da27c59dffcdf999bdf64e2e4128f5e6038396d4a03'
  }

  async getAsV956(key: v956.CurrencyId): Promise<bigint> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinimumMint', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumMint', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumMint')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinimumMint') === '90285da57e7305354cef41c507a8403919ee1ccfad0a423e082e82bb7abe002a'
  }

  async getAsV962(key: v962.CurrencyId): Promise<bigint> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinimumMint', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumMint', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumMint')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinimumMint') != null
  }
}

export class VtokenMintingMinimumRedeemStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinimumRedeem') === '882212a0ba28258088066051bf9e56c0767f43777f841fe4f85a0848b73f1ea4'
  }

  async getAsV940(key: v940.CurrencyId): Promise<bigint> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinimumRedeem', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumRedeem', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(bigint)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumRedeem')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinimumRedeem') === '4c39b9bae716dbe5a3072da27c59dffcdf999bdf64e2e4128f5e6038396d4a03'
  }

  async getAsV956(key: v956.CurrencyId): Promise<bigint> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinimumRedeem', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumRedeem', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumRedeem')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinimumRedeem') === '90285da57e7305354cef41c507a8403919ee1ccfad0a423e082e82bb7abe002a'
  }

  async getAsV962(key: v962.CurrencyId): Promise<bigint> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'MinimumRedeem', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumRedeem', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'MinimumRedeem')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'MinimumRedeem') != null
  }
}

export class VtokenMintingOngoingTimeUnitStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'OngoingTimeUnit') === '4e2db87035e2453189cf2f869d41d0808ba7eb7891b92cbd0325096d689d6bfb'
  }

  async getAsV940(key: v940.CurrencyId): Promise<v940.TimeUnit | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(v940.TimeUnit | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(v940.TimeUnit)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit')
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'OngoingTimeUnit') === 'e65bf4544daa13441c4f8a6404609bc4b5c53ac2a6ed547cad1bdce55320cefe'
  }

  async getAsV946(key: v946.CurrencyId): Promise<v946.TimeUnit | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(v946.TimeUnit | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(v946.TimeUnit)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'OngoingTimeUnit') === '38b90e77da7e91d72b738f29bd8c9d7413e472218f9996a59ae1b229dd39ed1a'
  }

  async getAsV956(key: v956.CurrencyId): Promise<v956.TimeUnit | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(v956.TimeUnit | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.TimeUnit)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'OngoingTimeUnit') === '138915239c1aab49bfc509554ee46826fa9ba85031789ff77157490053c55480'
  }

  async getAsV962(key: v962.CurrencyId): Promise<v962.TimeUnit | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(v962.TimeUnit | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.TimeUnit)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'OngoingTimeUnit')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'OngoingTimeUnit') != null
  }
}

export class VtokenMintingTimeUnitUnlockLedgerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TimeUnitUnlockLedger') === '83ef3c57b043639e9395568f27c1b16bba5b7a072c65c20c8ff0b324763e365d'
  }

  async getAsV940(key1: v940.TimeUnit, key2: v940.CurrencyId): Promise<[bigint, number[], v940.CurrencyId] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger', key1, key2)
  }

  async getManyAsV940(keys: [v940.TimeUnit, v940.CurrencyId][]): Promise<([bigint, number[], v940.CurrencyId] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger', keys)
  }

  async getAllAsV940(): Promise<([bigint, number[], v940.CurrencyId])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger')
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TimeUnitUnlockLedger') === 'd52d8e5d41952ccddd1319a3b8f769c02c5f9295a7d4f719a0e3d1e6e4d50fd1'
  }

  async getAsV946(key1: v946.TimeUnit, key2: v946.CurrencyId): Promise<[bigint, number[], v946.CurrencyId] | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger', key1, key2)
  }

  async getManyAsV946(keys: [v946.TimeUnit, v946.CurrencyId][]): Promise<([bigint, number[], v946.CurrencyId] | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger', keys)
  }

  async getAllAsV946(): Promise<([bigint, number[], v946.CurrencyId])[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TimeUnitUnlockLedger') === '5c318124344d56bdda901c66cfeaaa0fdedc2b104baba49d43038a07e3706012'
  }

  async getAsV956(key1: v956.TimeUnit, key2: v956.CurrencyId): Promise<[bigint, number[], v956.CurrencyId] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger', key1, key2)
  }

  async getManyAsV956(keys: [v956.TimeUnit, v956.CurrencyId][]): Promise<([bigint, number[], v956.CurrencyId] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger', keys)
  }

  async getAllAsV956(): Promise<([bigint, number[], v956.CurrencyId])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TimeUnitUnlockLedger') === '5c38952291836d8859c0c557ebc4db497921c90143e884874b7174d016465500'
  }

  async getAsV962(key1: v962.TimeUnit, key2: v962.CurrencyId): Promise<[bigint, number[], v962.CurrencyId] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger', key1, key2)
  }

  async getManyAsV962(keys: [v962.TimeUnit, v962.CurrencyId][]): Promise<([bigint, number[], v962.CurrencyId] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger', keys)
  }

  async getAllAsV962(): Promise<([bigint, number[], v962.CurrencyId])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TimeUnitUnlockLedger')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TimeUnitUnlockLedger') != null
  }
}

export class VtokenMintingTokenPoolStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenPool') === '882212a0ba28258088066051bf9e56c0767f43777f841fe4f85a0848b73f1ea4'
  }

  async getAsV940(key: v940.CurrencyId): Promise<bigint> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenPool', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenPool', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(bigint)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenPool')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenPool') === '4c39b9bae716dbe5a3072da27c59dffcdf999bdf64e2e4128f5e6038396d4a03'
  }

  async getAsV956(key: v956.CurrencyId): Promise<bigint> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenPool', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenPool', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenPool')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenPool') === '90285da57e7305354cef41c507a8403919ee1ccfad0a423e082e82bb7abe002a'
  }

  async getAsV962(key: v962.CurrencyId): Promise<bigint> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenPool', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenPool', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenPool')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenPool') != null
  }
}

export class VtokenMintingTokenToRebondStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenToRebond') === '37f5a577398f02547377481983b6ecee838545e0ce791017dba23f018361b644'
  }

  async getAsV940(key: v940.CurrencyId): Promise<bigint | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenToRebond', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(bigint | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenToRebond', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(bigint)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenToRebond')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenToRebond') === '7b56e8f9aec93bcd89f631aaa1b73c63d61ce42680b727a6c132230b655e8e55'
  }

  async getAsV956(key: v956.CurrencyId): Promise<bigint | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenToRebond', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(bigint | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenToRebond', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenToRebond')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenToRebond') === '66342e8e9a83afef2ca06ff6c297619796ad3a74eda5324ec9360360a38542b3'
  }

  async getAsV962(key: v962.CurrencyId): Promise<bigint | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenToRebond', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(bigint | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenToRebond', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenToRebond')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenToRebond') != null
  }
}

export class VtokenMintingTokenUnlockLedgerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenUnlockLedger') === 'ef405972cb5253fc5ffc82d9b5ede6b061606211521560918d965d22b64f83c2'
  }

  async getAsV940(key1: v940.CurrencyId, key2: number): Promise<[Uint8Array, bigint, v940.TimeUnit] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger', key1, key2)
  }

  async getManyAsV940(keys: [v940.CurrencyId, number][]): Promise<([Uint8Array, bigint, v940.TimeUnit] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger', keys)
  }

  async getAllAsV940(): Promise<([Uint8Array, bigint, v940.TimeUnit])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger')
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenUnlockLedger') === 'b3efed9b5fb4d8c7457fb55dc4fa9b290106f4fedb7a8f49a0c980d4f8d65b2e'
  }

  async getAsV946(key1: v946.CurrencyId, key2: number): Promise<[Uint8Array, bigint, v946.TimeUnit] | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger', key1, key2)
  }

  async getManyAsV946(keys: [v946.CurrencyId, number][]): Promise<([Uint8Array, bigint, v946.TimeUnit] | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger', keys)
  }

  async getAllAsV946(): Promise<([Uint8Array, bigint, v946.TimeUnit])[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenUnlockLedger') === 'daa533e8b153e83389f6ec1428b5e4401ada523834aacb6b695d9580ccc0f6c3'
  }

  async getAsV956(key1: v956.CurrencyId, key2: number): Promise<[Uint8Array, bigint, v956.TimeUnit] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger', key1, key2)
  }

  async getManyAsV956(keys: [v956.CurrencyId, number][]): Promise<([Uint8Array, bigint, v956.TimeUnit] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger', keys)
  }

  async getAllAsV956(): Promise<([Uint8Array, bigint, v956.TimeUnit])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenUnlockLedger') === '4feaa35e571f28531a3fc31764536c85b7a4de87630709f776ac04d031c12d3d'
  }

  async getAsV962(key1: v962.CurrencyId, key2: number): Promise<[Uint8Array, bigint, v962.TimeUnit] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger', key1, key2)
  }

  async getManyAsV962(keys: [v962.CurrencyId, number][]): Promise<([Uint8Array, bigint, v962.TimeUnit] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger', keys)
  }

  async getAllAsV962(): Promise<([Uint8Array, bigint, v962.TimeUnit])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockLedger')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenUnlockLedger') != null
  }
}

export class VtokenMintingTokenUnlockNextIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenUnlockNextId') === '47b878cd7e1f9fa236fc23699431ad4490ec06c41e61615b4b1794708cd62fe8'
  }

  async getAsV940(key: v940.CurrencyId): Promise<number> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockNextId', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(number)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockNextId', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(number)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockNextId')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenUnlockNextId') === '4a1a8955511e59627b79e2f0b77d80eb81b41119e3161589bc42dcf04dcbb46d'
  }

  async getAsV956(key: v956.CurrencyId): Promise<number> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockNextId', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(number)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockNextId', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(number)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockNextId')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenUnlockNextId') === '4eda57b0231db3b12116f1d27c46b41b86246cb66c02ad2c9db637935e62b827'
  }

  async getAsV962(key: v962.CurrencyId): Promise<number> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockNextId', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(number)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockNextId', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(number)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'TokenUnlockNextId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'TokenUnlockNextId') != null
  }
}

export class VtokenMintingUnlockDurationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UnlockDuration') === '4e2db87035e2453189cf2f869d41d0808ba7eb7891b92cbd0325096d689d6bfb'
  }

  async getAsV940(key: v940.CurrencyId): Promise<v940.TimeUnit | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration', key)
  }

  async getManyAsV940(keys: v940.CurrencyId[]): Promise<(v940.TimeUnit | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration', keys.map(k => [k]))
  }

  async getAllAsV940(): Promise<(v940.TimeUnit)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration')
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UnlockDuration') === 'e65bf4544daa13441c4f8a6404609bc4b5c53ac2a6ed547cad1bdce55320cefe'
  }

  async getAsV946(key: v946.CurrencyId): Promise<v946.TimeUnit | undefined> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(v946.TimeUnit | undefined)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(v946.TimeUnit)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UnlockDuration') === '38b90e77da7e91d72b738f29bd8c9d7413e472218f9996a59ae1b229dd39ed1a'
  }

  async getAsV956(key: v956.CurrencyId): Promise<v956.TimeUnit | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(v956.TimeUnit | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(v956.TimeUnit)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UnlockDuration') === '138915239c1aab49bfc509554ee46826fa9ba85031789ff77157490053c55480'
  }

  async getAsV962(key: v962.CurrencyId): Promise<v962.TimeUnit | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(v962.TimeUnit | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.TimeUnit)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockDuration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UnlockDuration') != null
  }
}

export class VtokenMintingUnlockingTotalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV946() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UnlockingTotal') === '882212a0ba28258088066051bf9e56c0767f43777f841fe4f85a0848b73f1ea4'
  }

  async getAsV946(key: v946.CurrencyId): Promise<bigint> {
    assert(this.isV946)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UnlockingTotal', key)
  }

  async getManyAsV946(keys: v946.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockingTotal', keys.map(k => [k]))
  }

  async getAllAsV946(): Promise<(bigint)[]> {
    assert(this.isV946)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockingTotal')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UnlockingTotal') === '4c39b9bae716dbe5a3072da27c59dffcdf999bdf64e2e4128f5e6038396d4a03'
  }

  async getAsV956(key: v956.CurrencyId): Promise<bigint> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UnlockingTotal', key)
  }

  async getManyAsV956(keys: v956.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockingTotal', keys.map(k => [k]))
  }

  async getAllAsV956(): Promise<(bigint)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockingTotal')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UnlockingTotal') === '90285da57e7305354cef41c507a8403919ee1ccfad0a423e082e82bb7abe002a'
  }

  async getAsV962(key: v962.CurrencyId): Promise<bigint> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UnlockingTotal', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockingTotal', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(bigint)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UnlockingTotal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UnlockingTotal') != null
  }
}

export class VtokenMintingUserUnlockLedgerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV940() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UserUnlockLedger') === '94c39ff148267fb7f155782550bd0ab22d4e1f76f5d5df882712988180386f6f'
  }

  async getAsV940(key1: Uint8Array, key2: v940.CurrencyId): Promise<[bigint, number[]] | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UserUnlockLedger', key1, key2)
  }

  async getManyAsV940(keys: [Uint8Array, v940.CurrencyId][]): Promise<([bigint, number[]] | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UserUnlockLedger', keys)
  }

  async getAllAsV940(): Promise<([bigint, number[]])[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UserUnlockLedger')
  }

  get isV956() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UserUnlockLedger') === 'c6ee5d5888f8c4b6f7f04c3f6a8c6132bf646a96dce19acc25e820b955971fcf'
  }

  async getAsV956(key1: Uint8Array, key2: v956.CurrencyId): Promise<[bigint, number[]] | undefined> {
    assert(this.isV956)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UserUnlockLedger', key1, key2)
  }

  async getManyAsV956(keys: [Uint8Array, v956.CurrencyId][]): Promise<([bigint, number[]] | undefined)[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UserUnlockLedger', keys)
  }

  async getAllAsV956(): Promise<([bigint, number[]])[]> {
    assert(this.isV956)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UserUnlockLedger')
  }

  get isV962() {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UserUnlockLedger') === '2604ec2fc4e37c8c419ed11b35cf747d2131a10af5ea09ffb7021dc56e839af6'
  }

  async getAsV962(key1: Uint8Array, key2: v962.CurrencyId): Promise<[bigint, number[]] | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'VtokenMinting', 'UserUnlockLedger', key1, key2)
  }

  async getManyAsV962(keys: [Uint8Array, v962.CurrencyId][]): Promise<([bigint, number[]] | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UserUnlockLedger', keys)
  }

  async getAllAsV962(): Promise<([bigint, number[]])[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'VtokenMinting', 'UserUnlockLedger')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('VtokenMinting', 'UserUnlockLedger') != null
  }
}

export class XcmInterfaceCurrentNonceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Tracker for the next nonce index
   */
  get isV927() {
    return this._chain.getStorageItemTypeHash('XcmInterface', 'CurrentNonce') === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
  }

  /**
   *  Tracker for the next nonce index
   */
  async getAsV927(key: number): Promise<number> {
    assert(this.isV927)
    return this._chain.getStorage(this.blockHash, 'XcmInterface', 'CurrentNonce', key)
  }

  async getManyAsV927(keys: number[]): Promise<(number)[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'XcmInterface', 'CurrentNonce', keys.map(k => [k]))
  }

  async getAllAsV927(): Promise<(number)[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'XcmInterface', 'CurrentNonce')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmInterface', 'CurrentNonce') != null
  }
}

export class XcmInterfaceXcmDestWeightAndFeeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended by XcmInterface. Must be
   *  sufficient, otherwise the execution of XCM msg on relaychain will fail.
   * 
   *  XcmDestWeightAndFee: map: XcmInterfaceOperation => (Weight, Balance)
   */
  get isV927() {
    return this._chain.getStorageItemTypeHash('XcmInterface', 'XcmDestWeightAndFee') === 'e2339cdfc82e87a09ccc8cd52977434c1896d38db9a1b04723363801446a0bbc'
  }

  /**
   *  The dest weight limit and fee for execution XCM msg sended by XcmInterface. Must be
   *  sufficient, otherwise the execution of XCM msg on relaychain will fail.
   * 
   *  XcmDestWeightAndFee: map: XcmInterfaceOperation => (Weight, Balance)
   */
  async getAsV927(key: v927.XcmInterfaceOperation): Promise<[bigint, bigint] | undefined> {
    assert(this.isV927)
    return this._chain.getStorage(this.blockHash, 'XcmInterface', 'XcmDestWeightAndFee', key)
  }

  async getManyAsV927(keys: v927.XcmInterfaceOperation[]): Promise<([bigint, bigint] | undefined)[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'XcmInterface', 'XcmDestWeightAndFee', keys.map(k => [k]))
  }

  async getAllAsV927(): Promise<([bigint, bigint])[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'XcmInterface', 'XcmDestWeightAndFee')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmInterface', 'XcmDestWeightAndFee') != null
  }
}

export class XcmpQueueInboundXcmpMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpMessages') === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
  }

  /**
   *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
   */
  async getAsV1(key1: number, key2: number): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpMessages', key1, key2)
  }

  async getManyAsV1(keys: [number, number][]): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpMessages', keys)
  }

  async getAllAsV1(): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpMessages') != null
  }
}

export class XcmpQueueInboundXcmpStatusStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpStatus') === '48f3de6a738f03ae3c729fdf2adfbcc7dd58a2d62c1e81c228ac332b7237c8c2'
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  async getAsV1(): Promise<[number, v1.InboundStatus, [number, v1.XcmpMessageFormat][]][]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpStatus')
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpStatus') === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  async getAsV926(): Promise<v926.InboundChannelDetails[]> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpStatus')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpStatus') != null
  }
}

export class XcmpQueueOutboundXcmpMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The messages outbound in a given XCMP channel.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpMessages') === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
  }

  /**
   *  The messages outbound in a given XCMP channel.
   */
  async getAsV1(key1: number, key2: number): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpMessages', key1, key2)
  }

  async getManyAsV1(keys: [number, number][]): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpMessages', keys)
  }

  async getAllAsV1(): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpMessages') != null
  }
}

export class XcmpQueueOutboundXcmpStatusStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpStatus') === '2284f25ad36d908dd9054d516baba1c7da89eb5dbefc09e2f88eaad6bd217ebf'
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  async getAsV1(): Promise<[number, v1.OutboundStatus, boolean, number, number][]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpStatus')
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpStatus') === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  async getAsV926(): Promise<v926.OutboundChannelDetails[]> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpStatus')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpStatus') != null
  }
}

export class XcmpQueueOverweightStorage {
  private readonly _chain: Chain
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
   *  These message stay in this storage map until they are manually dispatched via
   *  `service_overweight`.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'Overweight') === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
  }

  /**
   *  The messages that exceeded max individual message weight budget.
   * 
   *  These message stay in this storage map until they are manually dispatched via
   *  `service_overweight`.
   */
  async getAsV926(key: bigint): Promise<[number, number, Uint8Array] | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'Overweight', key)
  }

  async getManyAsV926(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'Overweight', keys.map(k => [k]))
  }

  async getAllAsV926(): Promise<([number, number, Uint8Array])[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'Overweight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'Overweight') != null
  }
}

export class XcmpQueueOverweightCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
   *  available free overweight index.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OverweightCount') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
   *  available free overweight index.
   */
  async getAsV926(): Promise<bigint> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OverweightCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OverweightCount') != null
  }
}

export class XcmpQueueQueueConfigStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') === '4eee4c318310895e220c6e665c876bf76f75ef8f5530bcd8f8ea1d5b966ff46f'
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  async getAsV1(): Promise<v1.QueueConfigData> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueConfig')
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  async getAsV926(): Promise<v926.QueueConfigData> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueConfig')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') != null
  }
}

export class XcmpQueueQueueSuspendedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueSuspended') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
   */
  async getAsV932(): Promise<boolean> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueSuspended')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueSuspended') != null
  }
}

export class XcmpQueueSignalMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any signal messages waiting to be sent.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'SignalMessages') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Any signal messages waiting to be sent.
   */
  async getAsV1(key: number): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'SignalMessages', key)
  }

  async getManyAsV1(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'SignalMessages', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'SignalMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'SignalMessages') != null
  }
}

export class ZenlinkProtocolBootstrapEndStatusStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  End status of bootstrap
   * 
   *  BootstrapEndStatus: map bootstrap pair => pairStatus
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapEndStatus') === '2faae79f4ae95d419833b1d0471ee60a503e09075a12d9ccba4e2fec7b728d75'
  }

  /**
   *  End status of bootstrap
   * 
   *  BootstrapEndStatus: map bootstrap pair => pairStatus
   */
  async getAsV902(key: [number, number]): Promise<v902.PairStatus> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapEndStatus', key)
  }

  async getManyAsV902(keys: [number, number][]): Promise<(v902.PairStatus)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapEndStatus', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<(v902.PairStatus)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapEndStatus')
  }

  /**
   *  End status of bootstrap
   * 
   *  BootstrapEndStatus: map bootstrap pair => pairStatus
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapEndStatus') === 'bad89eddde62d5d40bc938d63d2495e173228abf7011695d72c252612979bde7'
  }

  /**
   *  End status of bootstrap
   * 
   *  BootstrapEndStatus: map bootstrap pair => pairStatus
   */
  async getAsV906(key: [v906.AssetId, v906.AssetId]): Promise<v906.PairStatus> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapEndStatus', key)
  }

  async getManyAsV906(keys: [v906.AssetId, v906.AssetId][]): Promise<(v906.PairStatus)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapEndStatus', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.PairStatus)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapEndStatus')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapEndStatus') != null
  }
}

export class ZenlinkProtocolBootstrapLimitsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV914() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapLimits') === '035cfde947e53311bcc62cf03a2e01efec73a6851648f8d0195dee25c7c4ef08'
  }

  async getAsV914(key: [v914.AssetId, v914.AssetId]): Promise<[v914.AssetId, bigint][]> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapLimits', key)
  }

  async getManyAsV914(keys: [v914.AssetId, v914.AssetId][]): Promise<([v914.AssetId, bigint][])[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapLimits', keys.map(k => [k]))
  }

  async getAllAsV914(): Promise<([v914.AssetId, bigint][])[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapLimits')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapLimits') != null
  }
}

export class ZenlinkProtocolBootstrapPersonalSupplyStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV902() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapPersonalSupply') === '95f4da0bff9bb8a74334e66f9f0dd3b4e3d34b0eee8f8621769f8664ffcf656f'
  }

  async getAsV902(key: [[number, number], Uint8Array]): Promise<[bigint, bigint]> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapPersonalSupply', key)
  }

  async getManyAsV902(keys: [[number, number], Uint8Array][]): Promise<([bigint, bigint])[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapPersonalSupply', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<([bigint, bigint])[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapPersonalSupply')
  }

  get isV906() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapPersonalSupply') === '9d3557c1329f34afd8dff30b444d5bba07f1606891a664b37cc7d2d196010dc5'
  }

  async getAsV906(key: [[v906.AssetId, v906.AssetId], Uint8Array]): Promise<[bigint, bigint]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapPersonalSupply', key)
  }

  async getManyAsV906(keys: [[v906.AssetId, v906.AssetId], Uint8Array][]): Promise<([bigint, bigint])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapPersonalSupply', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<([bigint, bigint])[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapPersonalSupply')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapPersonalSupply') != null
  }
}

export class ZenlinkProtocolBootstrapRewardsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV914() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapRewards') === '035cfde947e53311bcc62cf03a2e01efec73a6851648f8d0195dee25c7c4ef08'
  }

  async getAsV914(key: [v914.AssetId, v914.AssetId]): Promise<[v914.AssetId, bigint][]> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapRewards', key)
  }

  async getManyAsV914(keys: [v914.AssetId, v914.AssetId][]): Promise<([v914.AssetId, bigint][])[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapRewards', keys.map(k => [k]))
  }

  async getAllAsV914(): Promise<([v914.AssetId, bigint][])[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'BootstrapRewards')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'BootstrapRewards') != null
  }
}

export class ZenlinkProtocolFeeMetaStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  (Option<fee_receiver>, fee_point)
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'FeeMeta') === '6df913439163f71368a6f5482a5fe3923b3b6af7db99f11d0452140d567a844c'
  }

  /**
   *  (Option<fee_receiver>, fee_point)
   */
  async getAsV902(): Promise<[(Uint8Array | undefined), number]> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'FeeMeta')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'FeeMeta') != null
  }
}

export class ZenlinkProtocolForeignLedgerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Foreign foreign storage
   *  The number of units of assets held by any given account.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'ForeignLedger') === 'ebd37e141ac2577515fcb1bb10d4ec3df252d27d40ff887ee1740e231cca6fdf'
  }

  /**
   *  Foreign foreign storage
   *  The number of units of assets held by any given account.
   */
  async getAsV902(key: [number, Uint8Array]): Promise<bigint> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignLedger', key)
  }

  async getManyAsV902(keys: [number, Uint8Array][]): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignLedger', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignLedger')
  }

  /**
   *  Foreign foreign storage
   *  The number of units of assets held by any given account.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'ForeignLedger') === '7def24205a0eedd1e73b2aef9a5dd684244e419695eb7ede495c5f9bc78186df'
  }

  /**
   *  Foreign foreign storage
   *  The number of units of assets held by any given account.
   */
  async getAsV906(key: [v906.AssetId, Uint8Array]): Promise<bigint> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignLedger', key)
  }

  async getManyAsV906(keys: [v906.AssetId, Uint8Array][]): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignLedger', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignLedger')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'ForeignLedger') != null
  }
}

export class ZenlinkProtocolForeignListStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV902() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'ForeignList') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  async getAsV902(): Promise<number[]> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignList')
  }

  get isV906() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'ForeignList') === 'cda230eb0d3b325e7cf74d8dff5bbb5076c51adfbf16a8a1f0cd976fd3b5029d'
  }

  async getAsV906(): Promise<v906.AssetId[]> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignList')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'ForeignList') != null
  }
}

export class ZenlinkProtocolForeignMetaStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  TWOX-NOTE: `AssetId` is trusted, so this is safe.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'ForeignMeta') === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
  }

  /**
   *  TWOX-NOTE: `AssetId` is trusted, so this is safe.
   */
  async getAsV902(key: number): Promise<bigint> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignMeta', key)
  }

  async getManyAsV902(keys: number[]): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignMeta', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignMeta')
  }

  /**
   *  TWOX-NOTE: `AssetId` is trusted, so this is safe.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'ForeignMeta') === '279986b9fc874417230cc6b2b1c67c436ff7ff0cf50a2f21697c71e5c0b585f4'
  }

  /**
   *  TWOX-NOTE: `AssetId` is trusted, so this is safe.
   */
  async getAsV906(key: v906.AssetId): Promise<bigint> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignMeta', key)
  }

  async getManyAsV906(keys: v906.AssetId[]): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignMeta', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'ForeignMeta')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'ForeignMeta') != null
  }
}

export class ZenlinkProtocolKLastStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Refer: https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol#L88
   *  Last unliquidated protocol fee;
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'KLast') === 'ee59b03aade675945f480efa05bccca6e3f4c5d08862a17491ece4d40a855b17'
  }

  /**
   *  Refer: https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol#L88
   *  Last unliquidated protocol fee;
   */
  async getAsV902(key: [number, number]): Promise<bigint> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'KLast', key)
  }

  async getManyAsV902(keys: [number, number][]): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'KLast', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<(bigint)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'KLast')
  }

  /**
   *  Refer: https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol#L88
   *  Last unliquidated protocol fee;
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'KLast') === 'ba8edac0d252a7dc77ef6bbfaccc0d8fe1fada8a7a11bea4aa852db0ba8c5934'
  }

  /**
   *  Refer: https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol#L88
   *  Last unliquidated protocol fee;
   */
  async getAsV906(key: [v906.AssetId, v906.AssetId]): Promise<bigint> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'KLast', key)
  }

  async getManyAsV906(keys: [v906.AssetId, v906.AssetId][]): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'KLast', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(bigint)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'KLast')
  }

  /**
   *  Refer: https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol#L88
   *  Last unliquidated protocol fee;
   */
  get isV910() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'KLast') === '0bd0ead61161eee53a630d76512d0226d41ee2c1e38efe15ee84647e677c2582'
  }

  /**
   *  Refer: https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol#L88
   *  Last unliquidated protocol fee;
   */
  async getAsV910(key: [v910.AssetId, v910.AssetId]): Promise<bigint[]> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'KLast', key)
  }

  async getManyAsV910(keys: [v910.AssetId, v910.AssetId][]): Promise<(bigint[])[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'KLast', keys.map(k => [k]))
  }

  async getAllAsV910(): Promise<(bigint[])[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'KLast')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'KLast') != null
  }
}

export class ZenlinkProtocolLiquidityPairsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV902() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'LiquidityPairs') === 'e95fb5126bd8e5d9a624a5075b31639743d7dfb5262de60578b320acf59ce453'
  }

  async getAsV902(key: [number, number]): Promise<(number | undefined)> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'LiquidityPairs', key)
  }

  async getManyAsV902(keys: [number, number][]): Promise<((number | undefined))[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'LiquidityPairs', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<((number | undefined))[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'LiquidityPairs')
  }

  get isV906() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'LiquidityPairs') === '789cf3f60e0a697e380821675a1d5385e419abba09e35755b95a3eb7b5a28f1f'
  }

  async getAsV906(key: [v906.AssetId, v906.AssetId]): Promise<(v906.AssetId | undefined)> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'LiquidityPairs', key)
  }

  async getManyAsV906(keys: [v906.AssetId, v906.AssetId][]): Promise<((v906.AssetId | undefined))[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'LiquidityPairs', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<((v906.AssetId | undefined))[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'LiquidityPairs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'LiquidityPairs') != null
  }
}

export class ZenlinkProtocolPairStatusesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  (AssetId, AssetId) -> PairStatus
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'PairStatuses') === '2faae79f4ae95d419833b1d0471ee60a503e09075a12d9ccba4e2fec7b728d75'
  }

  /**
   *  (AssetId, AssetId) -> PairStatus
   */
  async getAsV902(key: [number, number]): Promise<v902.PairStatus> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'PairStatuses', key)
  }

  async getManyAsV902(keys: [number, number][]): Promise<(v902.PairStatus)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'PairStatuses', keys.map(k => [k]))
  }

  async getAllAsV902(): Promise<(v902.PairStatus)[]> {
    assert(this.isV902)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'PairStatuses')
  }

  /**
   *  (AssetId, AssetId) -> PairStatus
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'PairStatuses') === 'bad89eddde62d5d40bc938d63d2495e173228abf7011695d72c252612979bde7'
  }

  /**
   *  (AssetId, AssetId) -> PairStatus
   */
  async getAsV906(key: [v906.AssetId, v906.AssetId]): Promise<v906.PairStatus> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'ZenlinkProtocol', 'PairStatuses', key)
  }

  async getManyAsV906(keys: [v906.AssetId, v906.AssetId][]): Promise<(v906.PairStatus)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'PairStatuses', keys.map(k => [k]))
  }

  async getAllAsV906(): Promise<(v906.PairStatus)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkProtocol', 'PairStatuses')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkProtocol', 'PairStatuses') != null
  }
}

export class ZenlinkStableAMMLpCurrenciesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The pool id corresponding to lp currency
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('ZenlinkStableAMM', 'LpCurrencies') === '51645ae30bfa3f22c56faa9e3576b3aee53293360d66ab21949e74bd308994b3'
  }

  /**
   *  The pool id corresponding to lp currency
   */
  async getAsV962(key: v962.CurrencyId): Promise<number | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'ZenlinkStableAMM', 'LpCurrencies', key)
  }

  async getManyAsV962(keys: v962.CurrencyId[]): Promise<(number | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkStableAMM', 'LpCurrencies', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(number)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkStableAMM', 'LpCurrencies')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkStableAMM', 'LpCurrencies') != null
  }
}

export class ZenlinkStableAMMNextPoolIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The id of next pool
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('ZenlinkStableAMM', 'NextPoolId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The id of next pool
   */
  async getAsV962(): Promise<number> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'ZenlinkStableAMM', 'NextPoolId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkStableAMM', 'NextPoolId') != null
  }
}

export class ZenlinkStableAMMPoolsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Info of a pool.
   */
  get isV962() {
    return this._chain.getStorageItemTypeHash('ZenlinkStableAMM', 'Pools') === 'eab29c44c1843d0de4be3ed75c2a9412a7cdaeff5502cfe86b839f08a3630716'
  }

  /**
   *  Info of a pool.
   */
  async getAsV962(key: number): Promise<v962.Pool | undefined> {
    assert(this.isV962)
    return this._chain.getStorage(this.blockHash, 'ZenlinkStableAMM', 'Pools', key)
  }

  async getManyAsV962(keys: number[]): Promise<(v962.Pool | undefined)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkStableAMM', 'Pools', keys.map(k => [k]))
  }

  async getAllAsV962(): Promise<(v962.Pool)[]> {
    assert(this.isV962)
    return this._chain.queryStorage(this.blockHash, 'ZenlinkStableAMM', 'Pools')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ZenlinkStableAMM', 'Pools') != null
  }
}
