import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v1 from './v1'
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
import * as v916 from './v916'
import * as v920 from './v920'
import * as v922 from './v922'
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

export class AssetRegistryAssetRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.AssetRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The asset registered.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('AssetRegistry.AssetRegistered') === '90a725af9d96e9729c957263d36fca98c017fc34b4277c62d761dea2e9f3c946'
  }

  /**
   * The asset registered.
   */
  get asV932(): {assetId: v932.AssetIds, metadata: v932.AssetMetadata} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The asset registered.
   */
  get isV948(): boolean {
    return this._chain.getEventHash('AssetRegistry.AssetRegistered') === '9c4cff1f91b735b702404b7670b834034dd45e59e85009d68cc929f53ad3d978'
  }

  /**
   * The asset registered.
   */
  get asV948(): {assetId: v948.AssetIds, metadata: v948.AssetMetadata} {
    assert(this.isV948)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The asset registered.
   */
  get isV956(): boolean {
    return this._chain.getEventHash('AssetRegistry.AssetRegistered') === 'c3895081a9a782b464ca435a06fac3d18b08681ab6a4b5d570b20ef828869495'
  }

  /**
   * The asset registered.
   */
  get asV956(): {assetId: v956.AssetIds, metadata: v956.AssetMetadata} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The asset registered.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('AssetRegistry.AssetRegistered') === '3b72629245ed1d8d615c4b16d3f731634251d80c2ab1c486e5b87a2274341776'
  }

  /**
   * The asset registered.
   */
  get asV962(): {assetId: v962.AssetIds, metadata: v962.AssetMetadata} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetRegistryAssetUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.AssetUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The asset updated.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('AssetRegistry.AssetUpdated') === '90a725af9d96e9729c957263d36fca98c017fc34b4277c62d761dea2e9f3c946'
  }

  /**
   * The asset updated.
   */
  get asV932(): {assetId: v932.AssetIds, metadata: v932.AssetMetadata} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The asset updated.
   */
  get isV948(): boolean {
    return this._chain.getEventHash('AssetRegistry.AssetUpdated') === '9c4cff1f91b735b702404b7670b834034dd45e59e85009d68cc929f53ad3d978'
  }

  /**
   * The asset updated.
   */
  get asV948(): {assetId: v948.AssetIds, metadata: v948.AssetMetadata} {
    assert(this.isV948)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The asset updated.
   */
  get isV956(): boolean {
    return this._chain.getEventHash('AssetRegistry.AssetUpdated') === 'c3895081a9a782b464ca435a06fac3d18b08681ab6a4b5d570b20ef828869495'
  }

  /**
   * The asset updated.
   */
  get asV956(): {assetId: v956.AssetIds, metadata: v956.AssetMetadata} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The asset updated.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('AssetRegistry.AssetUpdated') === '3b72629245ed1d8d615c4b16d3f731634251d80c2ab1c486e5b87a2274341776'
  }

  /**
   * The asset updated.
   */
  get asV962(): {assetId: v962.AssetIds, metadata: v962.AssetMetadata} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetRegistryCurrencyIdRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.CurrencyIdRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The CurrencyId registered.
   */
  get isV958(): boolean {
    return this._chain.getEventHash('AssetRegistry.CurrencyIdRegistered') === '20f53192ecab8e01502ca2d9ab91ed9bccb089f05c8f934a933c2d7ca4c16e44'
  }

  /**
   * The CurrencyId registered.
   */
  get asV958(): {currencyId: v958.CurrencyId, metadata: v958.AssetMetadata} {
    assert(this.isV958)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The CurrencyId registered.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('AssetRegistry.CurrencyIdRegistered') === '4cbe4a76e67d6187c05545bf971362dc57a02315503a7d140ca60cd036e0c9be'
  }

  /**
   * The CurrencyId registered.
   */
  get asV962(): {currencyId: v962.CurrencyId, metadata: v962.AssetMetadata} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetRegistryForeignAssetRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.ForeignAssetRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The foreign asset registered.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('AssetRegistry.ForeignAssetRegistered') === '31d1256c3b0376ab8bcdc3dfd631917d7217d3c593bc26009ed030e0ade12bbc'
  }

  /**
   * The foreign asset registered.
   */
  get asV932(): {assetId: number, assetAddress: v932.V1MultiLocation, metadata: v932.AssetMetadata} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetRegistryForeignAssetUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.ForeignAssetUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The foreign asset updated.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('AssetRegistry.ForeignAssetUpdated') === '31d1256c3b0376ab8bcdc3dfd631917d7217d3c593bc26009ed030e0ade12bbc'
  }

  /**
   * The foreign asset updated.
   */
  get asV932(): {assetId: number, assetAddress: v932.V1MultiLocation, metadata: v932.AssetMetadata} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A balance was set by root. \[who, free, reserved\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
  }

  /**
   *  A balance was set by root. \[who, free, reserved\]
   */
  get asV1(): [Uint8Array, bigint, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
  }

  /**
   * A balance was set by root.
   */
  get asV916(): {who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get asV916(): {who: Uint8Array, amount: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDustLostEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.DustLost')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An account was removed whose balance was non-zero but below ExistentialDeposit,
   *  resulting in an outright loss. \[account, balance\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  An account was removed whose balance was non-zero but below ExistentialDeposit,
   *  resulting in an outright loss. \[account, balance\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get asV916(): {account: Uint8Array, amount: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesEndowedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Endowed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An account was created with some free balance. \[account, free_balance\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  An account was created with some free balance. \[account, free_balance\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
  }

  /**
   * An account was created with some free balance.
   */
  get asV916(): {account: Uint8Array, freeBalance: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReserveRepatriatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.ReserveRepatriated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some balance was moved from the reserve of the first account to the second account.
   *  Final argument indicates the destination balance type.
   *  \[from, to, balance, destination_status\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
  }

  /**
   *  Some balance was moved from the reserve of the first account to the second account.
   *  Final argument indicates the destination balance type.
   *  \[from, to, balance, destination_status\]
   */
  get asV1(): [Uint8Array, Uint8Array, bigint, v1.BalanceStatus] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get asV916(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v916.BalanceStatus} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some balance was reserved (moved from free to reserved). \[who, value\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  Some balance was reserved (moved from free to reserved). \[who, value\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV916(): {who: Uint8Array, amount: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior). \[who,
   * amount_slashed\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Balances.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior). \[who,
   * amount_slashed\]
   */
  get asV908(): [Uint8Array, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get asV916(): {who: Uint8Array, amount: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Transfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Transfer succeeded. \[from, to, value\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  Transfer succeeded. \[from, to, value\]
   */
  get asV1(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asV916(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some balance was unreserved (moved from reserved to free). \[who, value\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  Some balance was unreserved (moved from reserved to free). \[who, value\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV916(): {who: Uint8Array, amount: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Withdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
   */
  get asV908(): [Uint8Array, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get asV916(): {who: Uint8Array, amount: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyAwardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyAwarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyAwarded') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
  }

  /**
   *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
   */
  get asV803(): [number, Uint8Array] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty is awarded to a beneficiary.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
  }

  /**
   * A bounty is awarded to a beneficiary.
   */
  get asV916(): {index: number, beneficiary: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyBecameActiveEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyBecameActive')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty proposal is funded and became active. \[index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyBecameActive') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty proposal is funded and became active. \[index\]
   */
  get asV803(): number {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty proposal is funded and became active.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty proposal is funded and became active.
   */
  get asV916(): {index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyCanceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty is cancelled. \[index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyCanceled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty is cancelled. \[index\]
   */
  get asV803(): number {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty is cancelled.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty is cancelled.
   */
  get asV916(): {index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyClaimed') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
  }

  /**
   *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
   */
  get asV803(): [number, bigint, Uint8Array] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty is claimed by beneficiary.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
  }

  /**
   * A bounty is claimed by beneficiary.
   */
  get asV916(): {index: number, payout: bigint, beneficiary: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyExtendedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyExtended')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty expiry is extended. \[index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyExtended') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty expiry is extended. \[index\]
   */
  get asV803(): number {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty expiry is extended.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty expiry is extended.
   */
  get asV916(): {index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyProposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  New bounty proposal. \[index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyProposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New bounty proposal. \[index\]
   */
  get asV803(): number {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New bounty proposal.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * New bounty proposal.
   */
  get asV916(): {index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyRejectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyRejected')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyRejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
   */
  get asV803(): [number, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty proposal was rejected; funds were slashed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
  }

  /**
   * A bounty proposal was rejected; funds were slashed.
   */
  get asV916(): {index: number, bond: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CallSwitchgearTransactionSwitchedOnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CallSwitchgear.TransactionSwitchedOn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Switch on transaction . \[pallet_name, function_name\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransactionSwitchedOn') === '6ac2cdf180e95ec69493abb05b6725ed248f5ffaabd316f38277fbbb4a7fb255'
  }

  /**
   * Switch on transaction . \[pallet_name, function_name\]
   */
  get asV908(): [Uint8Array, Uint8Array] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class CallSwitchgearTransactionSwitchedoffEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CallSwitchgear.TransactionSwitchedoff')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Switch off transaction . \[pallet_name, function_name\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransactionSwitchedoff') === '6ac2cdf180e95ec69493abb05b6725ed248f5ffaabd316f38277fbbb4a7fb255'
  }

  /**
   * Switch off transaction . \[pallet_name, function_name\]
   */
  get asV908(): [Uint8Array, Uint8Array] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class CallSwitchgearTransferAccountDisabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CallSwitchgear.TransferAccountDisabled')
    this._chain = ctx._chain
    this.event = event
  }

  get isV908(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountDisabled') === '7f14e65f561c607cc4f4d02a1a3ad7638d08fff6eaacd056e90f62808276ec23'
  }

  get asV908(): v908.CurrencyId {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  get isV916(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountDisabled') === 'c50b6693d40de2e77ac96a3e393e19addd8d3ff74ef0eef2b7252acff888c78c'
  }

  get asV916(): v916.CurrencyId {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  get isV920(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountDisabled') === '3f2543d1275a613824bacd2f0c1f47c0300d47eb98992f165e97d20996592a57'
  }

  get asV920(): v920.CurrencyId {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  get isV932(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountDisabled') === 'b71aec4bec6eccdc4b24c3436436713106f5fab27b4770a69661f5df0330040b'
  }

  get asV932(): v932.CurrencyId {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountDisabled') === '0480c17cbe4ea8c62df1d043c4b802176598d094019c2ce589835f6cc98c058e'
  }

  get asV956(): v956.CurrencyId {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountDisabled') === '63ac0314191c27a630e7b66599deb00e6695d26bfbbd992209b9a35e95618aed'
  }

  get asV962(): v962.CurrencyId {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CallSwitchgearTransferAccountEnabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CallSwitchgear.TransferAccountEnabled')
    this._chain = ctx._chain
    this.event = event
  }

  get isV908(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountEnabled') === '7f14e65f561c607cc4f4d02a1a3ad7638d08fff6eaacd056e90f62808276ec23'
  }

  get asV908(): v908.CurrencyId {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  get isV916(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountEnabled') === 'c50b6693d40de2e77ac96a3e393e19addd8d3ff74ef0eef2b7252acff888c78c'
  }

  get asV916(): v916.CurrencyId {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  get isV920(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountEnabled') === '3f2543d1275a613824bacd2f0c1f47c0300d47eb98992f165e97d20996592a57'
  }

  get asV920(): v920.CurrencyId {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  get isV932(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountEnabled') === 'b71aec4bec6eccdc4b24c3436436713106f5fab27b4770a69661f5df0330040b'
  }

  get asV932(): v932.CurrencyId {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountEnabled') === '0480c17cbe4ea8c62df1d043c4b802176598d094019c2ce589835f6cc98c058e'
  }

  get asV956(): v956.CurrencyId {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CallSwitchgear.TransferAccountEnabled') === '63ac0314191c27a630e7b66599deb00e6695d26bfbbd992209b9a35e95618aed'
  }

  get asV962(): v962.CurrencyId {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionCandidateAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.CandidateAdded')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1(): boolean {
    return this._chain.getEventHash('CollatorSelection.CandidateAdded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionCandidateRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.CandidateRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1(): boolean {
    return this._chain.getEventHash('CollatorSelection.CandidateRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionNewCandidacyBondEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.NewCandidacyBond')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1(): boolean {
    return this._chain.getEventHash('CollatorSelection.NewCandidacyBond') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  get asV1(): bigint {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionNewDesiredCandidatesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.NewDesiredCandidates')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1(): boolean {
    return this._chain.getEventHash('CollatorSelection.NewDesiredCandidates') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV1(): number {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionNewInvulnerablesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.NewInvulnerables')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1(): boolean {
    return this._chain.getEventHash('CollatorSelection.NewInvulnerables') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
  }

  get asV1(): Uint8Array[] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV916(): {proposalHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV803(): [Uint8Array, number, number] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV916(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV916(): {proposalHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV803(): [Uint8Array, Result<null, v803.DispatchError>] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Council.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV906(): [Uint8Array, Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV916(): {proposalHash: Uint8Array, result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Council.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV926(): {proposalHash: Uint8Array, result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Council.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV932(): {proposalHash: Uint8Array, result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Council.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV942(): {proposalHash: Uint8Array, result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilMemberExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.MemberExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A single member did some action; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A single member did some action; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV803(): [Uint8Array, Result<null, v803.DispatchError>] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV906(): [Uint8Array, Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV916(): {proposalHash: Uint8Array, result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV926(): {proposalHash: Uint8Array, result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV932(): {proposalHash: Uint8Array, result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV942(): {proposalHash: Uint8Array, result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV803(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV916(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV803(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV916(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilMembershipDummyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilMembership.Dummy')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Phantom member, never used.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('CouncilMembership.Dummy') === '6ea0d8c3ebb0c80adfebfa7747cde2554918946196e670d302d2f5d3d5d43a0b'
  }

  /**
   *  Phantom member, never used.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Phantom member, never used.
   */
  get isV906(): boolean {
    return this._chain.getEventHash('CouncilMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Phantom member, never used.
   */
  get asV906(): null {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilMembershipKeyChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilMembership.KeyChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  One of the members' keys changed.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('CouncilMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  One of the members' keys changed.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilMembershipMemberAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilMembership.MemberAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The given member was added; see the transaction for who.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('CouncilMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  The given member was added; see the transaction for who.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilMembershipMemberRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilMembership.MemberRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The given member was removed; see the transaction for who.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('CouncilMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  The given member was removed; see the transaction for who.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilMembershipMembersResetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilMembership.MembersReset')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The membership was reset; see the transaction for who the new set is.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('CouncilMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  The membership was reset; see the transaction for who the new set is.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilMembershipMembersSwappedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilMembership.MembersSwapped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Two members were swapped; see the transaction for who.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('CouncilMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Two members were swapped; see the transaction for who.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrossInOutAddedToIssueListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrossInOut.AddedToIssueList')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CrossInOut.AddedToIssueList') === 'e42de735ea7fa8deb59dd03460b6c1927aa7d2eb795c01cb43a48e458ab5223c'
  }

  get asV962(): {account: Uint8Array, currencyId: v962.CurrencyId} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrossInOutAddedToRegisterListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrossInOut.AddedToRegisterList')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CrossInOut.AddedToRegisterList') === 'e42de735ea7fa8deb59dd03460b6c1927aa7d2eb795c01cb43a48e458ab5223c'
  }

  get asV962(): {account: Uint8Array, currencyId: v962.CurrencyId} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrossInOutCrossedInEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrossInOut.CrossedIn')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CrossInOut.CrossedIn') === '67ca1b4d66c74f92b340000496443f3d2e9f37810c2e87c5d6b57a1f2541b9f3'
  }

  get asV962(): {currencyId: v962.CurrencyId, dest: Uint8Array, location: v962.V1MultiLocation, amount: bigint, remark: (Uint8Array | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrossInOutCrossedOutEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrossInOut.CrossedOut')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CrossInOut.CrossedOut') === '2be0d7034f2655dc36dcefea0ed3153bd36b7345616697084c21a9f8089a241e'
  }

  get asV962(): {currencyId: v962.CurrencyId, crosser: Uint8Array, location: v962.V1MultiLocation, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrossInOutCrossingMinimumAmountSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrossInOut.CrossingMinimumAmountSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV964(): boolean {
    return this._chain.getEventHash('CrossInOut.CrossingMinimumAmountSet') === '374b27cf5e4ee14009fad03e4ff93bc50ff078e22788bc9e84e022b42e1ad02d'
  }

  get asV964(): {currencyId: v964.CurrencyId, crossInMinimum: bigint, crossOutMinimum: bigint} {
    assert(this.isV964)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrossInOutCurrencyRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrossInOut.CurrencyRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CrossInOut.CurrencyRegistered') === 'c6af28f7d481ca6cdf69fbe83549fb136b4581b4c69e1d28ef838055c0af93da'
  }

  get asV962(): {currencyId: v962.CurrencyId, operation: boolean} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrossInOutLinkedAccountRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrossInOut.LinkedAccountRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CrossInOut.LinkedAccountRegistered') === '7dc95c274d6ef133d5c7c43172f1ed326af120c7c9def37d3a052196c98b8507'
  }

  get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, foreignLocation: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrossInOutRemovedFromIssueListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrossInOut.RemovedFromIssueList')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CrossInOut.RemovedFromIssueList') === 'e42de735ea7fa8deb59dd03460b6c1927aa7d2eb795c01cb43a48e458ab5223c'
  }

  get asV962(): {account: Uint8Array, currencyId: v962.CurrencyId} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrossInOutRemovedFromRegisterListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrossInOut.RemovedFromRegisterList')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('CrossInOut.RemovedFromRegisterList') === 'e42de735ea7fa8deb59dd03460b6c1927aa7d2eb795c01cb43a48e458ab5223c'
  }

  get asV962(): {account: Uint8Array, currencyId: v962.CurrencyId} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmExecutedDownwardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.ExecutedDownward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Downward message executed with the given outcome.
   *  \[ id, outcome \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '6b6a39fa5c8dde920e0a842a934f915ebaab3ac02363bdf30f6239d7256d9882'
  }

  /**
   *  Downward message executed with the given outcome.
   *  \[ id, outcome \]
   */
  get asV1(): [Uint8Array, v1.Outcome] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  Downward message executed with the given outcome.
   *  \[ id, outcome \]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '6501ff219f9ccf32282558849350abd1a173be900774a57f772c187c94e215b9'
  }

  /**
   *  Downward message executed with the given outcome.
   *  \[ id, outcome \]
   */
  get asV902(): [Uint8Array, v902.Outcome] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === 'ce1ecc6cb7bde7a0e967ed0e6caff9002b8e335404bc1e51403dc21d44028613'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV906(): [Uint8Array, v906.V2Outcome] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV926(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV926(): [Uint8Array, v926.V2Outcome] {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmInvalidFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.InvalidFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Downward message is invalid XCM.
   *  \[ id \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   *  Downward message is invalid XCM.
   *  \[ id \]
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmUnsupportedVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.UnsupportedVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Downward message is unsupported version of XCM.
   *  \[ id \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   *  Downward message is unsupported version of XCM.
   *  \[ id \]
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class CurrenciesBalanceUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Currencies.BalanceUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Update balance success. \[currency_id, who, amount\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Currencies.BalanceUpdated') === '5fe49bbf5bcd19bfb8c37d7852ab05b1cbbd0e438c461a23fe32d7acb477f8f5'
  }

  /**
   *  Update balance success. \[currency_id, who, amount\]
   */
  get asV802(): [v802.Currency, Uint8Array, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Update balance success. \[currency_id, who, amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Currencies.BalanceUpdated') === 'ddec8bd684851f9feec82d80da31ee58e89ff572a979b0b48708e4fbca69b2ad'
  }

  /**
   * Update balance success. \[currency_id, who, amount\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Update balance success. \[currency_id, who, amount\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Currencies.BalanceUpdated') === '161875a7e197406eae1ad86c3729f7b657ffad2a7bea723fc4d4b0a281b64b73'
  }

  /**
   * Update balance success. \[currency_id, who, amount\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Update balance success. \[currency_id, who, amount\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Currencies.BalanceUpdated') === 'a4a3b438daea8b416e078f95fcfa9537224669914c5016d556fa74f4afba0982'
  }

  /**
   * Update balance success. \[currency_id, who, amount\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Update balance success.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Currencies.BalanceUpdated') === '4b4341a1e7aa950cf2cc868419f53eb16f4285766ac3561dc953274ac7cf724e'
  }

  /**
   * Update balance success.
   */
  get asV925(): {currencyId: v925.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Update balance success.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Currencies.BalanceUpdated') === '932d2089f126ccabe0a912f09f640f1e9199596a5a178c8d8c027a4440683e5e'
  }

  /**
   * Update balance success.
   */
  get asV932(): {currencyId: v932.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class CurrenciesDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Currencies.Deposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Deposit success. \[currency_id, who, amount\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Currencies.Deposited') === '5fe49bbf5bcd19bfb8c37d7852ab05b1cbbd0e438c461a23fe32d7acb477f8f5'
  }

  /**
   *  Deposit success. \[currency_id, who, amount\]
   */
  get asV802(): [v802.Currency, Uint8Array, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposit success. \[currency_id, who, amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Currencies.Deposited') === 'c8713a7005be0801e686127b1c9c719c8d70c657c9017663e38dc362fef7c1e4'
  }

  /**
   * Deposit success. \[currency_id, who, amount\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposit success. \[currency_id, who, amount\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Currencies.Deposited') === 'c98a9c0e43cee71e9a03eb050db2c25c457db7b4fa66a3b051f227316f7d5713'
  }

  /**
   * Deposit success. \[currency_id, who, amount\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposit success. \[currency_id, who, amount\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Currencies.Deposited') === '13b0bfa0829dd36324a53fafee814e18a21efab597ba6541e253f3d8a368fa86'
  }

  /**
   * Deposit success. \[currency_id, who, amount\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposit success.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Currencies.Deposited') === '57b29a04130eb9e4ed007338d13bdadd6994a860fc1e73492f3333999934a312'
  }

  /**
   * Deposit success.
   */
  get asV925(): {currencyId: v925.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposit success.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Currencies.Deposited') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
  }

  /**
   * Deposit success.
   */
  get asV932(): {currencyId: v932.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class CurrenciesTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Currencies.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Currency transfer success. \[currency_id, from, to, amount\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Currencies.Transferred') === '0b11f978a7c8e2ac29a7988a16979a11b7f5b1bf5b8683bdbe9a0704daa369e5'
  }

  /**
   *  Currency transfer success. \[currency_id, from, to, amount\]
   */
  get asV802(): [v802.Currency, Uint8Array, Uint8Array, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Currency transfer success. \[currency_id, from, to, amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Currencies.Transferred') === '214ed349d49dfebf1b1c3d317e36368ab84724cd9944f806dd74f4a1bd2f8b60'
  }

  /**
   * Currency transfer success. \[currency_id, from, to, amount\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Currency transfer success. \[currency_id, from, to, amount\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Currencies.Transferred') === '514e961c949a93c66edc6fb2b7766d16cbf1f96c1865b98970a8d5b2f37c516f'
  }

  /**
   * Currency transfer success. \[currency_id, from, to, amount\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, Uint8Array, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Currency transfer success. \[currency_id, from, to, amount\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Currencies.Transferred') === '7ca0b40b8e64ca6b8ac6a5ff2656d8c653217759cd84d8420cd5230c35994d38'
  }

  /**
   * Currency transfer success. \[currency_id, from, to, amount\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Currency transfer success.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Currencies.Transferred') === '8a8b8d1a9186129de11b486cead25d3729cb35145cf90872f992944076c10fa0'
  }

  /**
   * Currency transfer success.
   */
  get asV925(): {currencyId: v925.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Currency transfer success.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Currencies.Transferred') === 'de38bc825d1ed89a7c963df259f29b413310694dc8c343b9729be00f2fed48b1'
  }

  /**
   * Currency transfer success.
   */
  get asV932(): {currencyId: v932.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class CurrenciesWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Currencies.Withdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Withdraw success. \[currency_id, who, amount\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Currencies.Withdrawn') === '5fe49bbf5bcd19bfb8c37d7852ab05b1cbbd0e438c461a23fe32d7acb477f8f5'
  }

  /**
   *  Withdraw success. \[currency_id, who, amount\]
   */
  get asV802(): [v802.Currency, Uint8Array, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Withdraw success. \[currency_id, who, amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Currencies.Withdrawn') === 'c8713a7005be0801e686127b1c9c719c8d70c657c9017663e38dc362fef7c1e4'
  }

  /**
   * Withdraw success. \[currency_id, who, amount\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Withdraw success. \[currency_id, who, amount\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Currencies.Withdrawn') === 'c98a9c0e43cee71e9a03eb050db2c25c457db7b4fa66a3b051f227316f7d5713'
  }

  /**
   * Withdraw success. \[currency_id, who, amount\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Withdraw success. \[currency_id, who, amount\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Currencies.Withdrawn') === '13b0bfa0829dd36324a53fafee814e18a21efab597ba6541e253f3d8a368fa86'
  }

  /**
   * Withdraw success. \[currency_id, who, amount\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Withdraw success.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Currencies.Withdrawn') === '57b29a04130eb9e4ed007338d13bdadd6994a860fc1e73492f3333999934a312'
  }

  /**
   * Withdraw success.
   */
  get asV925(): {currencyId: v925.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Withdraw success.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Currencies.Withdrawn') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
  }

  /**
   * Withdraw success.
   */
  get asV932(): {currencyId: v932.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyBlacklistedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Blacklisted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal \[hash\] has been blacklisted permanently.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Blacklisted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A proposal \[hash\] has been blacklisted permanently.
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal_hash has been blacklisted permanently.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A proposal_hash has been blacklisted permanently.
   */
  get asV916(): {proposalHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Cancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get asV803(): number {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has been cancelled.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV916(): {refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyDelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Delegated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An account has delegated their vote to another account. \[who, target\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Delegated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
  }

  /**
   *  An account has delegated their vote to another account. \[who, target\]
   */
  get asV803(): [Uint8Array, Uint8Array] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has delegated their vote to another account.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
  }

  /**
   * An account has delegated their vote to another account.
   */
  get asV916(): {who: Uint8Array, target: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get asV803(): [number, boolean] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '8d7c54bbac5b548a558504b413146fe5bff0b9275a2e7f4c831a148273ee173a'
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get asV804(): [number, Result<null, v804.DispatchError>] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '4569400573983e7dffe031a303e5028518f139390f47223a097cb35de3005258'
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get asV906(): [number, Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '1f0fb32f2f0aaba231b69023c5858e85b8bfd660b5ce8c47d1b99b39602e4963'
  }

  /**
   * A proposal has been enacted.
   */
  get asV916(): {refIndex: number, result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'fe9cbb2e8fcebf406053419831a31120f211751f75230bfefe38454cc691c00a'
  }

  /**
   * A proposal has been enacted.
   */
  get asV926(): {refIndex: number, result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asV932(): {refIndex: number, result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '2abe2e7ca2af8b119eb4f3a1f669843943049e3f4e2f613fc3b077115902ca2b'
  }

  /**
   * A proposal has been enacted.
   */
  get asV942(): {refIndex: number, result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyExternalTabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.ExternalTabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An external proposal has been tabled.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  An external proposal has been tabled.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyNotPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.NotPassed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV803(): number {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV916(): {refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Passed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get asV803(): number {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV916(): {refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageInvalidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageInvalid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get asV803(): [Uint8Array, number] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV916(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageMissingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageMissing')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get asV803(): [Uint8Array, number] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV916(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageNotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageNoted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV803(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV916(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageReapedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageReaped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === 'b60e8c24758d2dae6f1d75c508a3141a304f756181262747ee8d704bd555ac86'
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get asV803(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV916(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageUsedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageUsed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get asV803(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV916(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyProposalCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.ProposalCanceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal got canceled.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('Democracy.ProposalCanceled') === '4229a060ed682a59f5b96a0a1d18ae4a471b42fbbe5beff110f3dbb41e7d7224'
  }

  /**
   * A proposal got canceled.
   */
  get asV952(): {propIndex: number} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV803(): [number, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV916(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracySecondedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Seconded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has secconded a proposal
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
  }

  /**
   * An account has secconded a proposal
   */
  get asV926(): {seconder: Uint8Array, propIndex: number} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Started')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get asV803(): [number, v803.VoteThreshold] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has begun.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV916(): {refIndex: number, threshold: v916.VoteThreshold} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyTabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Tabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === '21f3d10122d183ae1df61d3456ae07c362a2e0cdffab1829f4febb4f7b53f6bd'
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get asV803(): [number, bigint, Uint8Array[]] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV916(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyUndelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Undelegated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An \[account\] has cancelled a previous delegation operation.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Undelegated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  An \[account\] has cancelled a previous delegation operation.
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has cancelled a previous delegation operation.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * An account has cancelled a previous delegation operation.
   */
  get asV916(): {account: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyUnlockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Unlocked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An \[account\] has been unlocked successfully.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Unlocked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  An \[account\] has been unlocked successfully.
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyVetoedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Vetoed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An external proposal has been vetoed. \[who, proposal_hash, until\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Vetoed') === '64ac8a943d1fe7bd7a24f0e53a57114f1d7eb2c98c411ff4d06daf824de450a7'
  }

  /**
   *  An external proposal has been vetoed. \[who, proposal_hash, until\]
   */
  get asV803(): [Uint8Array, Uint8Array, number] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An external proposal has been vetoed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
  }

  /**
   * An external proposal has been vetoed.
   */
  get asV916(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has voted in a referendum
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
  }

  /**
   * An account has voted in a referendum
   */
  get asV926(): {voter: Uint8Array, refIndex: number, vote: v926.AccountVote} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueExecutedDownwardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.ExecutedDownward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Downward message executed with the given outcome.
   *  \[ id, outcome \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '5384153394cfeddd381853bc4daa372a9025fd1a27a3adddfd6c601657ca084e'
  }

  /**
   *  Downward message executed with the given outcome.
   *  \[ id, outcome \]
   */
  get asV1(): [Uint8Array, v1.Outcome] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  Downward message executed with the given outcome.
   *  \[ id, outcome \]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'bcf28d22d20044ad18f17737b19d0871f4a37cb22f0f2fd9f0c932c0b23dca50'
  }

  /**
   *  Downward message executed with the given outcome.
   *  \[ id, outcome \]
   */
  get asV902(): [Uint8Array, v902.Outcome] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'f660a1eb74571095e7cab99beb471c0ab4687ebb9afcd9f8734fc316dd9f477d'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV906(): [Uint8Array, v906.V2Outcome] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV926(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV926(): [Uint8Array, v926.V2Outcome] {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '9b6c90aca74067a591eda76a227e61ce66cd6597483f828a039aba267c0d21a9'
  }

  /**
   * Downward message executed with the given outcome.
   */
  get asV952(): {messageId: Uint8Array, outcome: v952.V2Outcome} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueInvalidFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.InvalidFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Downward message is invalid XCM.
   *  \[ id \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('DmpQueue.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  Downward message is invalid XCM.
   *  \[ id \]
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is invalid XCM.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('DmpQueue.InvalidFormat') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
  }

  /**
   * Downward message is invalid XCM.
   */
  get asV952(): {messageId: Uint8Array} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueOverweightEnqueuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.OverweightEnqueued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Downward message is overweight and was placed in the overweight queue.
   *  \[ id, index, required \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   *  Downward message is overweight and was placed in the overweight queue.
   *  \[ id, index, required \]
   */
  get asV1(): [Uint8Array, bigint, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ffa192c80e10233d155345fc4cc34bc357a97a6465c78ccf6a14b02ee5b8c21f'
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   */
  get asV952(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueOverweightServicedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.OverweightServiced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Downward message from the overweight queue was executed.
   *  \[ index, used \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   *  Downward message from the overweight queue was executed.
   *  \[ index, used \]
   */
  get asV1(): [bigint, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message from the overweight queue was executed.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightServiced') === '7deec7d9ba4a81157571b321671d50b393890bd802f27d9b3ba2609ffa497713'
  }

  /**
   * Downward message from the overweight queue was executed.
   */
  get asV952(): {overweightIndex: bigint, weightUsed: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueUnsupportedVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.UnsupportedVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Downward message is unsupported version of XCM.
   *  \[ id \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  Downward message is unsupported version of XCM.
   *  \[ id \]
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is unsupported version of XCM.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
  }

  /**
   * Downward message is unsupported version of XCM.
   */
  get asV952(): {messageId: Uint8Array} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueWeightExhaustedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.WeightExhausted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The weight limit for handling downward messages was reached.
   *  \[ id, remaining, required \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('DmpQueue.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   *  The weight limit for handling downward messages was reached.
   *  \[ id, remaining, required \]
   */
  get asV1(): [Uint8Array, bigint, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The weight limit for handling downward messages was reached.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'dcf12831e69a1760af0584247b404096aa4ce1c77c7b3caae95d831bf4afa0b2'
  }

  /**
   * The weight limit for handling downward messages was reached.
   */
  get asV952(): {messageId: Uint8Array, remainingWeight: bigint, requiredWeight: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingAllForceGaugeClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.AllForceGaugeClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.AllForceGaugeClaimed') === '5fc91e49a454b9b911770c486bb364158255e35bb8ac14e2cd8df4b39cf2ba51'
  }

  get asV944(): {gid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingAllRetiredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.AllRetired')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.AllRetired') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
  }

  get asV944(): {pid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingChargedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.Charged')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.Charged') === 'c3d1c59b341540c4f9f6d3972ddfac8a4b0aaceb867c161a35299667a60d1f8d'
  }

  get asV944(): {who: Uint8Array, pid: number, rewards: [v944.CurrencyId, bigint][]} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Farming.Charged') === '2fd9b615ba5d74fc1f8c1865e37d483cfbb6359f6f92bfbb88a91567d3a972c7'
  }

  get asV956(): {who: Uint8Array, pid: number, rewards: [v956.CurrencyId, bigint][]} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Farming.Charged') === '6894ad45d0ddc47a0c8eb5ba834aaca533d18eddeeb618bf1d7a1748fa821bf7'
  }

  get asV962(): {who: Uint8Array, pid: number, rewards: [v962.CurrencyId, bigint][]} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.Claimed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.Claimed') === '89ce641abe29449db445666fb2eeb9e04162deb011ebf5f31c7d6ccdbc8dbbcb'
  }

  get asV944(): {who: Uint8Array, pid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.Deposited')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.Deposited') === '7703d993e467f7326c71c5fff1d9d8c87e8dbac70896103e60cbdd95c0d89347'
  }

  get asV944(): {who: Uint8Array, pid: number, addValue: bigint, gaugeInfo: ([bigint, number] | undefined)} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingFarmingPoolClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.FarmingPoolClosed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.FarmingPoolClosed') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
  }

  get asV944(): {pid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingFarmingPoolCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.FarmingPoolCreated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.FarmingPoolCreated') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
  }

  get asV944(): {pid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingFarmingPoolEditedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.FarmingPoolEdited')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.FarmingPoolEdited') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
  }

  get asV944(): {pid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingFarmingPoolKilledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.FarmingPoolKilled')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.FarmingPoolKilled') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
  }

  get asV944(): {pid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingFarmingPoolResetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.FarmingPoolReset')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.FarmingPoolReset') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
  }

  get asV944(): {pid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingGaugeWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.GaugeWithdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.GaugeWithdrawn') === '658e3741d543918bd767d541bf7175de9da29aee454a31604c16b575802aa21c'
  }

  get asV944(): {who: Uint8Array, gid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingPartiallyForceGaugeClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.PartiallyForceGaugeClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.PartiallyForceGaugeClaimed') === '5fc91e49a454b9b911770c486bb364158255e35bb8ac14e2cd8df4b39cf2ba51'
  }

  get asV944(): {gid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingPartiallyRetiredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.PartiallyRetired')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.PartiallyRetired') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
  }

  get asV944(): {pid: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingRetireLimitSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.RetireLimitSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.RetireLimitSet') === 'f707ff742083978d0b1f391a9771c28219f5e35ce5ba83507482cd04e92d916b'
  }

  get asV944(): {limit: number} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingWithdrawClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.WithdrawClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV948(): boolean {
    return this._chain.getEventHash('Farming.WithdrawClaimed') === '89ce641abe29449db445666fb2eeb9e04162deb011ebf5f31c7d6ccdbc8dbbcb'
  }

  get asV948(): {who: Uint8Array, pid: number} {
    assert(this.isV948)
    return this._chain.decodeEvent(this.event)
  }
}

export class FarmingWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Farming.Withdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  get isV944(): boolean {
    return this._chain.getEventHash('Farming.Withdrawn') === 'f5231bf39060f5b29b8d9b30ed6cfd929166055825b5b1b4700b057961cadd54'
  }

  get asV944(): {who: Uint8Array, pid: number, removeValue: (bigint | undefined)} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class FeeShareCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FeeShare.Created')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('FeeShare.Created') === '29aab95d96cac7b3375b92dfca52d25666314a72a5ede96825ccbc42676ccf7c'
  }

  get asV962(): {info: v962.Type_215} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class FeeShareDeletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FeeShare.Deleted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('FeeShare.Deleted') === 'cc8ca4348d096f4a581f247e86d25d61a1848c1213f4daf4208bd619d6ea3b9c'
  }

  get asV962(): {distributionId: number} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class FeeShareEditedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FeeShare.Edited')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('FeeShare.Edited') === '29aab95d96cac7b3375b92dfca52d25666314a72a5ede96825ccbc42676ccf7c'
  }

  get asV962(): {info: v962.Type_215} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class FeeShareEraLengthSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FeeShare.EraLengthSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('FeeShare.EraLengthSet') === 'f9986d435971a3d2fcd3a742c64163bb163e45b1b7f330cc21879c353cc8271a'
  }

  get asV962(): {eraLength: number, nextEra: number} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class FeeShareExecuteFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FeeShare.ExecuteFailed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('FeeShare.ExecuteFailed') === 'dd3c66f00cc4dec3ecd17b4c8650479f8def2bad80ac04cecc1e1dad5612f53d'
  }

  get asV962(): {distributionId: number, info: v962.Type_215, nextEra: number} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class FeeShareExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FeeShare.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('FeeShare.Executed') === 'cc8ca4348d096f4a581f247e86d25d61a1848c1213f4daf4208bd619d6ea3b9c'
  }

  get asV962(): {distributionId: number} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlexibleFeeExtraFeeDeductedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FlexibleFee.ExtraFeeDeducted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('FlexibleFee.ExtraFeeDeducted') === 'a30da374402180e5d07ae9a648c089019b9e11505bf433f803a6c6429a8a3a47'
  }

  get asV900(): [v900.ExtraFeeName, v900.CurrencyIdOf, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  get isV906(): boolean {
    return this._chain.getEventHash('FlexibleFee.ExtraFeeDeducted') === '556e22d8c400791e94de3c17449f4df10de6fae748ef27fdca89ebd62a71b9b4'
  }

  get asV906(): [v906.ExtraFeeName, v906.CurrencyId, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  get isV916(): boolean {
    return this._chain.getEventHash('FlexibleFee.ExtraFeeDeducted') === 'e513049668d5f87fd2056a7512fcd3f4448b8edcce558378378c4b00ef7d8c7e'
  }

  get asV916(): [v916.ExtraFeeName, v916.CurrencyId, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  get isV920(): boolean {
    return this._chain.getEventHash('FlexibleFee.ExtraFeeDeducted') === '84bae6ffc98186682e9feae7d3fab3538a443fc650bdb7ea6d1e8d368432fab5'
  }

  get asV920(): [v920.ExtraFeeName, v920.CurrencyId, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  get isV932(): boolean {
    return this._chain.getEventHash('FlexibleFee.ExtraFeeDeducted') === 'f5eb5118498db132109c78079d670de7f7004bf9afd0b579f7529a7d488ccb16'
  }

  get asV932(): [v932.ExtraFeeName, v932.CurrencyId, bigint] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('FlexibleFee.ExtraFeeDeducted') === '9aae3ff94b0a156c610ffe65fdfec3d295cae1f909b843684c0f18b5ac2b623d'
  }

  get asV956(): [v956.ExtraFeeName, v956.CurrencyId, bigint] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('FlexibleFee.ExtraFeeDeducted') === 'a65fd872aaf7bd88fe355035dd8da98ff9525ce06ab943d06d70298c32a6ee26'
  }

  get asV962(): [v962.ExtraFeeName, v962.CurrencyId, bigint] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlexibleFeeFixedRateFeeExchangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FlexibleFee.FixedRateFeeExchanged')
    this._chain = ctx._chain
    this.event = event
  }

  get isV803(): boolean {
    return this._chain.getEventHash('FlexibleFee.FixedRateFeeExchanged') === '13719a1bdec0af67b45e9b959375786a60587c2f0fd46eca6e5bdac11d305427'
  }

  get asV803(): [v803.CurrencyId, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  get isV906(): boolean {
    return this._chain.getEventHash('FlexibleFee.FixedRateFeeExchanged') === 'a2a80e49b5ce8a2d79c5cd735d248a895e3320067268fc9c95e16077c2d6130c'
  }

  get asV906(): [v906.CurrencyId, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  get isV916(): boolean {
    return this._chain.getEventHash('FlexibleFee.FixedRateFeeExchanged') === 'ba67de522bfd13909fac7ca975297ae1ef65a771c96e3a1a9709dead2245fbb7'
  }

  get asV916(): [v916.CurrencyId, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  get isV920(): boolean {
    return this._chain.getEventHash('FlexibleFee.FixedRateFeeExchanged') === 'b1d4505b4e541b7061d968720d1482eef6200ac2d7bbbb8dad97cd68c58ee0ac'
  }

  get asV920(): [v920.CurrencyId, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  get isV932(): boolean {
    return this._chain.getEventHash('FlexibleFee.FixedRateFeeExchanged') === 'a83a13def8889c3d1afda64e55af96105bf18cc5356830c2e8fd828fdb9fd046'
  }

  get asV932(): [v932.CurrencyId, bigint] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('FlexibleFee.FixedRateFeeExchanged') === '4fcc1d6e8348da620ee8fad42e983be427d7a9d464adbba7073619b5acfdf02a'
  }

  get asV956(): [v956.CurrencyId, bigint] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('FlexibleFee.FixedRateFeeExchanged') === '12060a53f57091790e65adda76e28e027e82fb532fe8c6d5217fdec9555e68d4'
  }

  get asV962(): [v962.CurrencyId, bigint] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlexibleFeeFlexibleFeeExchangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FlexibleFee.FlexibleFeeExchanged')
    this._chain = ctx._chain
    this.event = event
  }

  get isV803(): boolean {
    return this._chain.getEventHash('FlexibleFee.FlexibleFeeExchanged') === '13719a1bdec0af67b45e9b959375786a60587c2f0fd46eca6e5bdac11d305427'
  }

  get asV803(): [v803.CurrencyId, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  get isV906(): boolean {
    return this._chain.getEventHash('FlexibleFee.FlexibleFeeExchanged') === 'a2a80e49b5ce8a2d79c5cd735d248a895e3320067268fc9c95e16077c2d6130c'
  }

  get asV906(): [v906.CurrencyId, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  get isV916(): boolean {
    return this._chain.getEventHash('FlexibleFee.FlexibleFeeExchanged') === 'ba67de522bfd13909fac7ca975297ae1ef65a771c96e3a1a9709dead2245fbb7'
  }

  get asV916(): [v916.CurrencyId, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  get isV920(): boolean {
    return this._chain.getEventHash('FlexibleFee.FlexibleFeeExchanged') === 'b1d4505b4e541b7061d968720d1482eef6200ac2d7bbbb8dad97cd68c58ee0ac'
  }

  get asV920(): [v920.CurrencyId, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  get isV932(): boolean {
    return this._chain.getEventHash('FlexibleFee.FlexibleFeeExchanged') === 'a83a13def8889c3d1afda64e55af96105bf18cc5356830c2e8fd828fdb9fd046'
  }

  get asV932(): [v932.CurrencyId, bigint] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('FlexibleFee.FlexibleFeeExchanged') === '4fcc1d6e8348da620ee8fad42e983be427d7a9d464adbba7073619b5acfdf02a'
  }

  get asV956(): [v956.CurrencyId, bigint] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('FlexibleFee.FlexibleFeeExchanged') === '12060a53f57091790e65adda76e28e027e82fb532fe8c6d5217fdec9555e68d4'
  }

  get asV962(): [v962.CurrencyId, bigint] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentityClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentityCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was cleared, and the given balance returned. \[who, deposit\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.IdentityCleared') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * A name was cleared, and the given balance returned. \[who, deposit\]
   */
  get asV908(): [Uint8Array, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get asV916(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentityKilledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentityKilled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was removed and the given balance slashed. \[who, deposit\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.IdentityKilled') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * A name was removed and the given balance slashed. \[who, deposit\]
   */
  get asV908(): [Uint8Array, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A name was removed and the given balance slashed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
  }

  /**
   * A name was removed and the given balance slashed.
   */
  get asV916(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentitySetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentitySet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was set or reset (which will remove all judgements). \[who\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.IdentitySet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A name was set or reset (which will remove all judgements). \[who\]
   */
  get asV908(): Uint8Array {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A name was set or reset (which will remove all judgements).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * A name was set or reset (which will remove all judgements).
   */
  get asV916(): {who: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityJudgementGivenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.JudgementGiven')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A judgement was given by a registrar. \[target, registrar_index\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.JudgementGiven') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   * A judgement was given by a registrar. \[target, registrar_index\]
   */
  get asV908(): [Uint8Array, number] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A judgement was given by a registrar.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
  }

  /**
   * A judgement was given by a registrar.
   */
  get asV916(): {target: Uint8Array, registrarIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityJudgementRequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.JudgementRequested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A judgement was asked from a registrar. \[who, registrar_index\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.JudgementRequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   * A judgement was asked from a registrar. \[who, registrar_index\]
   */
  get asV908(): [Uint8Array, number] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A judgement was asked from a registrar.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
  }

  /**
   * A judgement was asked from a registrar.
   */
  get asV916(): {who: Uint8Array, registrarIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityJudgementUnrequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.JudgementUnrequested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A judgement request was retracted. \[who, registrar_index\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.JudgementUnrequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   * A judgement request was retracted. \[who, registrar_index\]
   */
  get asV908(): [Uint8Array, number] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A judgement request was retracted.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
  }

  /**
   * A judgement request was retracted.
   */
  get asV916(): {who: Uint8Array, registrarIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityRegistrarAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.RegistrarAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A registrar was added. \[registrar_index\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.RegistrarAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * A registrar was added. \[registrar_index\]
   */
  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A registrar was added.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
  }

  /**
   * A registrar was added.
   */
  get asV916(): {registrarIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentitySubIdentityAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.SubIdentityAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityAdded') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
   */
  get asV908(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sub-identity was added to an identity and the deposit paid.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
  }

  /**
   * A sub-identity was added to an identity and the deposit paid.
   */
  get asV916(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentitySubIdentityRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.SubIdentityRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   * \[sub, main, deposit\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   * \[sub, main, deposit\]
   */
  get asV908(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   */
  get asV916(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentitySubIdentityRevokedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.SubIdentityRevoked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account. \[sub, main, deposit\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account. \[sub, main, deposit\]
   */
  get asV908(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account.
   */
  get asV916(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IndicesIndexAssignedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Indices.IndexAssigned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A account index was assigned. \[index, who\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Indices.IndexAssigned') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A account index was assigned. \[index, who\]
   */
  get asV1(): [Uint8Array, number] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A account index was assigned.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Indices.IndexAssigned') === '9b3d917cee3d7e2adf0a9df20e0bca9e5f81d6fb7f3c50084c4851608cd1a8f2'
  }

  /**
   * A account index was assigned.
   */
  get asV916(): {who: Uint8Array, index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IndicesIndexFreedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Indices.IndexFreed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A account index has been freed up (unassigned). \[index\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Indices.IndexFreed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A account index has been freed up (unassigned). \[index\]
   */
  get asV1(): number {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A account index has been freed up (unassigned).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Indices.IndexFreed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A account index has been freed up (unassigned).
   */
  get asV916(): {index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class IndicesIndexFrozenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Indices.IndexFrozen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A account index has been frozen to its current account ID. \[index, who\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Indices.IndexFrozen') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
  }

  /**
   *  A account index has been frozen to its current account ID. \[index, who\]
   */
  get asV1(): [number, Uint8Array] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A account index has been frozen to its current account ID.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Indices.IndexFrozen') === 'a4b2a09a4b129b731502d8f49526603d4f98cc90af6286baad9f0cab57c26843'
  }

  /**
   * A account index has been frozen to its current account ID.
   */
  get asV916(): {index: number, who: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class LighteningRedeemBlockIntervalEditedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LighteningRedeem.BlockIntervalEdited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * [start, end]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LighteningRedeem.BlockIntervalEdited') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * [start, end]
   */
  get asV906(): [number, number] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class LighteningRedeemKsmAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LighteningRedeem.KSMAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * [adder, ksm_amount]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LighteningRedeem.KSMAdded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * [adder, ksm_amount]
   */
  get asV906(): [Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class LighteningRedeemKsmExchangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LighteningRedeem.KSMExchanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * [exchanger, ksm_amount]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LighteningRedeem.KSMExchanged') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * [exchanger, ksm_amount]
   */
  get asV906(): [Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class LighteningRedeemPriceEditedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LighteningRedeem.PriceEdited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * [original_prce, new_price]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LighteningRedeem.PriceEdited') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
  }

  /**
   * [original_prce, new_price]
   */
  get asV906(): [bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class LighteningRedeemReleasedPerDayEditedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LighteningRedeem.ReleasedPerDayEdited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * [originla_amount_per_day, amount_per_day]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LighteningRedeem.ReleasedPerDayEdited') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
  }

  /**
   * [originla_amount_per_day, amount_per_day]
   */
  get asV906(): [bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningLazyMigrationEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.LazyMigration')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Lazy migration event
   * 
   * [deposit_data_migration_nums, pool_info_migration_nums]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMining.LazyMigration') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * Lazy migration event
   * 
   * [deposit_data_migration_nums, pool_info_migration_nums]
   */
  get asV922(): [number, number] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningPoolChargedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.PoolCharged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The liquidity-pool has been charged
   * 
   *  [pool_id, pool_type, trading_pair, investor]
   */
  get isV901(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCharged') === '724a3a7a59440e5bac001cc322dc7188c867d2f647cf669621d605b8bb384b04'
  }

  /**
   *  The liquidity-pool has been charged
   * 
   *  [pool_id, pool_type, trading_pair, investor]
   */
  get asV901(): [number, v901.PoolType, [v901.CurrencyId, v901.CurrencyId], Uint8Array] {
    assert(this.isV901)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCharged') === '83f8fd811cf400973d64d3d05309a8e7bf4d8f627632621d686ef9dba8f68fe1'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV906(): [number, v906.PoolType, [v906.CurrencyId, v906.CurrencyId], Uint8Array] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCharged') === 'a347d3589a0182a49353ee847e99d091b5f18043f74aa5c3c611f630ca7dbfa1'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCharged') === '9315af49850256fd1cfe92d7d9ce1e9bfb88ef6b8d2ca7da0c0bcb6283ba9938'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCharged') === 'c41338e0412567a7df8f506121b2f0f06e21338d22c1a35451e141d04d1985c9'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCharged') === '6508268d30be3375830a2730c5fde0333377a0f2224f6b1878ad446daf49f933'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCharged') === 'c92d4b36f96eafac2eda320bb793cc44a3b5ec0f979746259a7095f3c47fe5c7'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCharged') === 'c3dd84542b933b16db08dab2f1a72b13f95898b04a40339e9ed9e7c79a5f6e08'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningPoolCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.PoolCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The liquidity-pool has been created
   * 
   *  [pool_id, pool_type, trading_pair, keeper]
   */
  get isV901(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCreated') === '724a3a7a59440e5bac001cc322dc7188c867d2f647cf669621d605b8bb384b04'
  }

  /**
   *  The liquidity-pool has been created
   * 
   *  [pool_id, pool_type, trading_pair, keeper]
   */
  get asV901(): [number, v901.PoolType, [v901.CurrencyId, v901.CurrencyId], Uint8Array] {
    assert(this.isV901)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCreated') === '83f8fd811cf400973d64d3d05309a8e7bf4d8f627632621d686ef9dba8f68fe1'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV906(): [number, v906.PoolType, [v906.CurrencyId, v906.CurrencyId], Uint8Array] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCreated') === 'a347d3589a0182a49353ee847e99d091b5f18043f74aa5c3c611f630ca7dbfa1'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCreated') === '9315af49850256fd1cfe92d7d9ce1e9bfb88ef6b8d2ca7da0c0bcb6283ba9938'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCreated') === 'c41338e0412567a7df8f506121b2f0f06e21338d22c1a35451e141d04d1985c9'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCreated') === '6508268d30be3375830a2730c5fde0333377a0f2224f6b1878ad446daf49f933'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCreated') === 'c92d4b36f96eafac2eda320bb793cc44a3b5ec0f979746259a7095f3c47fe5c7'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolCreated') === 'c3dd84542b933b16db08dab2f1a72b13f95898b04a40339e9ed9e7c79a5f6e08'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningPoolEditedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.PoolEdited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The liquidity-pool was edited
   * 
   * [pool_id, old_redeem_limit_time, old_unlock_limit_nums, new_redeem_limit_time,
   * new_unlock_limit_nums]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolEdited') === '8d837edb7f23adf7aa48ec3c1d3909d195aa0b8074803e239c767270afce1232'
  }

  /**
   * The liquidity-pool was edited
   * 
   * [pool_id, old_redeem_limit_time, old_unlock_limit_nums, new_redeem_limit_time,
   * new_unlock_limit_nums]
   */
  get asV922(): [number, number, number, number, number] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningPoolKilledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.PoolKilled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The liquidity-pool has been killed
   * 
   *  [pool_id, pool_type, trading_pair]
   */
  get isV901(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolKilled') === 'befaea1a375a312d1c1eed910b8f58848876c053bafd7b3670c3e5659359dd93'
  }

  /**
   *  The liquidity-pool has been killed
   * 
   *  [pool_id, pool_type, trading_pair]
   */
  get asV901(): [number, v901.PoolType, [v901.CurrencyId, v901.CurrencyId]] {
    assert(this.isV901)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolKilled') === '2b23f94f314426469c48ad4e7151c0cf804cf2ac6f31b416b2279e855ca19c25'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV906(): [number, v906.PoolType, [v906.CurrencyId, v906.CurrencyId]] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolKilled') === 'ca15bbf15aebb14992cc24ae039b7657a5240f9923340c52918510f624751b4a'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId]] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolKilled') === '430663f763145b46f8aaf79e0e3b90c3a4dfc25386c857a6c9ac15548dc4a4f0'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId]] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolKilled') === '411c5d40694ac3f56833e34718fe1dd4350ce031631ccd25958450514d9e47c7'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId]] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolKilled') === 'e8af2df1e7dbf13bd0fee5256a664b9bc6c8a07cd449340adc7c8b7567b80573'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId]] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolKilled') === '3e906e4613134cd5ddab8ec956b151fe5f8529b34198ffe0eb4b69528b9b2cbc'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId]] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolKilled') === '8e8f7763034a00ba4af810eca5a511b90c4d0baa8a35006655cf3e8f4479f629'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId]] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningPoolRetiredForcefullyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.PoolRetiredForcefully')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The liquidity-pool has been retired forcefully
   * 
   *  [pool_id, pool_type, trading_pair]
   */
  get isV901(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolRetiredForcefully') === 'befaea1a375a312d1c1eed910b8f58848876c053bafd7b3670c3e5659359dd93'
  }

  /**
   *  The liquidity-pool has been retired forcefully
   * 
   *  [pool_id, pool_type, trading_pair]
   */
  get asV901(): [number, v901.PoolType, [v901.CurrencyId, v901.CurrencyId]] {
    assert(this.isV901)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolRetiredForcefully') === '2b23f94f314426469c48ad4e7151c0cf804cf2ac6f31b416b2279e855ca19c25'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV906(): [number, v906.PoolType, [v906.CurrencyId, v906.CurrencyId]] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolRetiredForcefully') === 'ca15bbf15aebb14992cc24ae039b7657a5240f9923340c52918510f624751b4a'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId]] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolRetiredForcefully') === '430663f763145b46f8aaf79e0e3b90c3a4dfc25386c857a6c9ac15548dc4a4f0'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId]] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolRetiredForcefully') === '411c5d40694ac3f56833e34718fe1dd4350ce031631ccd25958450514d9e47c7'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId]] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolRetiredForcefully') === 'e8af2df1e7dbf13bd0fee5256a664b9bc6c8a07cd449340adc7c8b7567b80573'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId]] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolRetiredForcefully') === '3e906e4613134cd5ddab8ec956b151fe5f8529b34198ffe0eb4b69528b9b2cbc'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId]] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolRetiredForcefully') === '8e8f7763034a00ba4af810eca5a511b90c4d0baa8a35006655cf3e8f4479f629'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId]] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningPoolStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.PoolStarted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The liquidity-pool has been started up
   * 
   *  [pool_id, pool_type, trading_pair]
   */
  get isV901(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolStarted') === 'befaea1a375a312d1c1eed910b8f58848876c053bafd7b3670c3e5659359dd93'
  }

  /**
   *  The liquidity-pool has been started up
   * 
   *  [pool_id, pool_type, trading_pair]
   */
  get asV901(): [number, v901.PoolType, [v901.CurrencyId, v901.CurrencyId]] {
    assert(this.isV901)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolStarted') === '2b23f94f314426469c48ad4e7151c0cf804cf2ac6f31b416b2279e855ca19c25'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV906(): [number, v906.PoolType, [v906.CurrencyId, v906.CurrencyId]] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolStarted') === 'ca15bbf15aebb14992cc24ae039b7657a5240f9923340c52918510f624751b4a'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId]] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolStarted') === '430663f763145b46f8aaf79e0e3b90c3a4dfc25386c857a6c9ac15548dc4a4f0'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId]] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolStarted') === '411c5d40694ac3f56833e34718fe1dd4350ce031631ccd25958450514d9e47c7'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId]] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolStarted') === 'e8af2df1e7dbf13bd0fee5256a664b9bc6c8a07cd449340adc7c8b7567b80573'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId]] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolStarted') === '3e906e4613134cd5ddab8ec956b151fe5f8529b34198ffe0eb4b69528b9b2cbc'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId]] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.PoolStarted') === '8e8f7763034a00ba4af810eca5a511b90c4d0baa8a35006655cf3e8f4479f629'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId]] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningUserCancelUnlockEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.UserCancelUnlock')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserCancelUnlock') === '07ba5b9fa5c50cdda9c3c22c7d8807056329af50580131d56853958ae0544ed3'
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get asV922(): [number, v922.PoolType, [v922.CurrencyId, v922.CurrencyId], bigint, Uint8Array] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserCancelUnlock') === '09c84c16faca827a2596af6380160ac4e1c4bc3fdd893654ff3c529b6711bd00'
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], bigint, Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserCancelUnlock') === '25f0d2728f9c570dd9e07deca14aaae649324d257c54acd5283386db55890a5f'
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], bigint, Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserCancelUnlock') === '911fafcd42b3199bc003709ddbe5c0678d4cd143c27c39151dc137d2eb07d25a'
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], bigint, Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningUserClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.UserClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  User has been claimed the rewards from a liquidity-pool
   * 
   *  [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV901(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserClaimed') === 'b45ed57532c40afb3a632ebf31c74f3793f7bd0ac410b968c98f567ca9a5dd21'
  }

  /**
   *  User has been claimed the rewards from a liquidity-pool
   * 
   *  [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV901(): [number, v901.PoolType, [v901.CurrencyId, v901.CurrencyId], [v901.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV901)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserClaimed') === 'faf6453e23eb0d6efc2ccc84b8f5614effd1edce47ab8b084d9efbc99990abcf'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV906(): [number, v906.PoolType, [v906.CurrencyId, v906.CurrencyId], [v906.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserClaimed') === '6e2ab4bc73f0f957d5f5804a9a62034a6e9ffec7d3ce46b7f26d3f45c7fc94ee'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], [v912.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserClaimed') === 'eda9c57db0554c6b3c441b165eb401a4985300ae9edd54465a5e562984dd842d'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], [v916.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserClaimed') === '2529b56409cd38d465cf8d8046af511d01d110764c369cd77bd109f7f8b8505b'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], [v920.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserClaimed') === 'd7edab23545458adf4b44f2feac8388397d5cc28539b5e9eb74f5a310a53b8ac'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], [v932.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserClaimed') === '68d64e9a02ac58ff8963db10921ef4d178d524fb5d68e430a8b3d28ae50cd3d6'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], [v956.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserClaimed') === 'a9ace270ad6767c0ac754b780e2121988363a3f1c2a2d237dcfbbfb0c9cefeb5'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], [v962.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningUserDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.UserDeposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  User has deposited some trading-pair to a liquidity-pool
   * 
   *  [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV901(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserDeposited') === '7cc88ed251528415ad71a4761c113fb7292a219cdba5d56813a5385a1333b7d3'
  }

  /**
   *  User has deposited some trading-pair to a liquidity-pool
   * 
   *  [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV901(): [number, v901.PoolType, [v901.CurrencyId, v901.CurrencyId], bigint, Uint8Array] {
    assert(this.isV901)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserDeposited') === 'c6011fccda05945a5532d343f0b082c6fa6ff179ae03c97626a227e8baf1d569'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV906(): [number, v906.PoolType, [v906.CurrencyId, v906.CurrencyId], bigint, Uint8Array] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserDeposited') === '8ffe86d8f482c68920edd3399173b7c92de74206c397884493c5cd308e8934eb'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], bigint, Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserDeposited') === '30180216cc3d607ab6c03594351d2ec9117c7bc63fecd45f754b484512632872'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], bigint, Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserDeposited') === '07ba5b9fa5c50cdda9c3c22c7d8807056329af50580131d56853958ae0544ed3'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], bigint, Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserDeposited') === '09c84c16faca827a2596af6380160ac4e1c4bc3fdd893654ff3c529b6711bd00'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], bigint, Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserDeposited') === '25f0d2728f9c570dd9e07deca14aaae649324d257c54acd5283386db55890a5f'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], bigint, Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserDeposited') === '911fafcd42b3199bc003709ddbe5c0678d4cd143c27c39151dc137d2eb07d25a'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], bigint, Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningUserRedeemedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.UserRedeemed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  User has been redeemed some trading-pair from a liquidity-pool
   * 
   *  [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV901(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserRedeemed') === '7cc88ed251528415ad71a4761c113fb7292a219cdba5d56813a5385a1333b7d3'
  }

  /**
   *  User has been redeemed some trading-pair from a liquidity-pool
   * 
   *  [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV901(): [number, v901.PoolType, [v901.CurrencyId, v901.CurrencyId], bigint, Uint8Array] {
    assert(this.isV901)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserRedeemed') === 'c6011fccda05945a5532d343f0b082c6fa6ff179ae03c97626a227e8baf1d569'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV906(): [number, v906.PoolType, [v906.CurrencyId, v906.CurrencyId], bigint, Uint8Array] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserRedeemed') === '8ffe86d8f482c68920edd3399173b7c92de74206c397884493c5cd308e8934eb'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], bigint, Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserRedeemed') === '30180216cc3d607ab6c03594351d2ec9117c7bc63fecd45f754b484512632872'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], bigint, Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserRedeemed') === '07ba5b9fa5c50cdda9c3c22c7d8807056329af50580131d56853958ae0544ed3'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], bigint, Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserRedeemed') === '13728dc28a9c3e742fc66cfae41d5fa9effb0a6dc621be8997d4d013701300af'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get asV922(): [number, v922.PoolType, [v922.CurrencyId, v922.CurrencyId], bigint, number, Uint8Array] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserRedeemed') === 'b73d2cb883045a8a1eb0dbe95e21dcb1cb0127bf51e3bbd08e1ef9a6195e88bd'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], bigint, number, Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserRedeemed') === '51c18ba248779f90b3f44709b499eabddec44dd48941361bf1dd84040001c5ab'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], bigint, number, Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserRedeemed') === '46fac8214e90400beb29d3f00db7209dae09354fff9e931c3e699fbde8c37575'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], bigint, number, Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningUserUnlockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.UserUnlocked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserUnlocked') === '07ba5b9fa5c50cdda9c3c22c7d8807056329af50580131d56853958ae0544ed3'
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV922(): [number, v922.PoolType, [v922.CurrencyId, v922.CurrencyId], bigint, Uint8Array] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserUnlocked') === '09c84c16faca827a2596af6380160ac4e1c4bc3fdd893654ff3c529b6711bd00'
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], bigint, Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserUnlocked') === '25f0d2728f9c570dd9e07deca14aaae649324d257c54acd5283386db55890a5f'
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], bigint, Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMining.UserUnlocked') === '911fafcd42b3199bc003709ddbe5c0678d4cd143c27c39151dc137d2eb07d25a'
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], bigint, Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotLazyMigrationEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.LazyMigration')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Lazy migration event
   * 
   * [deposit_data_migration_nums, pool_info_migration_nums]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.LazyMigration') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * Lazy migration event
   * 
   * [deposit_data_migration_nums, pool_info_migration_nums]
   */
  get asV922(): [number, number] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotPoolChargedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.PoolCharged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV910(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCharged') === '83f8fd811cf400973d64d3d05309a8e7bf4d8f627632621d686ef9dba8f68fe1'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV910(): [number, v910.PoolType, [v910.CurrencyId, v910.CurrencyId], Uint8Array] {
    assert(this.isV910)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCharged') === 'a347d3589a0182a49353ee847e99d091b5f18043f74aa5c3c611f630ca7dbfa1'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCharged') === '9315af49850256fd1cfe92d7d9ce1e9bfb88ef6b8d2ca7da0c0bcb6283ba9938'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCharged') === 'c41338e0412567a7df8f506121b2f0f06e21338d22c1a35451e141d04d1985c9'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCharged') === '6508268d30be3375830a2730c5fde0333377a0f2224f6b1878ad446daf49f933'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCharged') === 'c92d4b36f96eafac2eda320bb793cc44a3b5ec0f979746259a7095f3c47fe5c7'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCharged') === 'c3dd84542b933b16db08dab2f1a72b13f95898b04a40339e9ed9e7c79a5f6e08'
  }

  /**
   * The liquidity-pool was charged
   * 
   * [pool_id, pool_type, trading_pair, investor]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotPoolCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.PoolCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV910(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCreated') === '83f8fd811cf400973d64d3d05309a8e7bf4d8f627632621d686ef9dba8f68fe1'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV910(): [number, v910.PoolType, [v910.CurrencyId, v910.CurrencyId], Uint8Array] {
    assert(this.isV910)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCreated') === 'a347d3589a0182a49353ee847e99d091b5f18043f74aa5c3c611f630ca7dbfa1'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCreated') === '9315af49850256fd1cfe92d7d9ce1e9bfb88ef6b8d2ca7da0c0bcb6283ba9938'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCreated') === 'c41338e0412567a7df8f506121b2f0f06e21338d22c1a35451e141d04d1985c9'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCreated') === '6508268d30be3375830a2730c5fde0333377a0f2224f6b1878ad446daf49f933'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCreated') === 'c92d4b36f96eafac2eda320bb793cc44a3b5ec0f979746259a7095f3c47fe5c7'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolCreated') === 'c3dd84542b933b16db08dab2f1a72b13f95898b04a40339e9ed9e7c79a5f6e08'
  }

  /**
   * The liquidity-pool was created
   * 
   * [pool_id, pool_type, trading_pair, keeper]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotPoolEditedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.PoolEdited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The liquidity-pool was edited
   * 
   * [pool_id, old_redeem_limit_time, old_unlock_limit_nums, new_redeem_limit_time,
   * new_unlock_limit_nums]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolEdited') === '8d837edb7f23adf7aa48ec3c1d3909d195aa0b8074803e239c767270afce1232'
  }

  /**
   * The liquidity-pool was edited
   * 
   * [pool_id, old_redeem_limit_time, old_unlock_limit_nums, new_redeem_limit_time,
   * new_unlock_limit_nums]
   */
  get asV922(): [number, number, number, number, number] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotPoolKilledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.PoolKilled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV910(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolKilled') === '2b23f94f314426469c48ad4e7151c0cf804cf2ac6f31b416b2279e855ca19c25'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV910(): [number, v910.PoolType, [v910.CurrencyId, v910.CurrencyId]] {
    assert(this.isV910)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolKilled') === 'ca15bbf15aebb14992cc24ae039b7657a5240f9923340c52918510f624751b4a'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId]] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolKilled') === '430663f763145b46f8aaf79e0e3b90c3a4dfc25386c857a6c9ac15548dc4a4f0'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId]] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolKilled') === '411c5d40694ac3f56833e34718fe1dd4350ce031631ccd25958450514d9e47c7'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId]] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolKilled') === 'e8af2df1e7dbf13bd0fee5256a664b9bc6c8a07cd449340adc7c8b7567b80573'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId]] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolKilled') === '3e906e4613134cd5ddab8ec956b151fe5f8529b34198ffe0eb4b69528b9b2cbc'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId]] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolKilled') === '8e8f7763034a00ba4af810eca5a511b90c4d0baa8a35006655cf3e8f4479f629'
  }

  /**
   * The liquidity-pool was killed
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId]] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotPoolRetiredForcefullyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.PoolRetiredForcefully')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV910(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolRetiredForcefully') === '2b23f94f314426469c48ad4e7151c0cf804cf2ac6f31b416b2279e855ca19c25'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV910(): [number, v910.PoolType, [v910.CurrencyId, v910.CurrencyId]] {
    assert(this.isV910)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolRetiredForcefully') === 'ca15bbf15aebb14992cc24ae039b7657a5240f9923340c52918510f624751b4a'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId]] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolRetiredForcefully') === '430663f763145b46f8aaf79e0e3b90c3a4dfc25386c857a6c9ac15548dc4a4f0'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId]] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolRetiredForcefully') === '411c5d40694ac3f56833e34718fe1dd4350ce031631ccd25958450514d9e47c7'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId]] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolRetiredForcefully') === 'e8af2df1e7dbf13bd0fee5256a664b9bc6c8a07cd449340adc7c8b7567b80573'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId]] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolRetiredForcefully') === '3e906e4613134cd5ddab8ec956b151fe5f8529b34198ffe0eb4b69528b9b2cbc'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId]] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolRetiredForcefully') === '8e8f7763034a00ba4af810eca5a511b90c4d0baa8a35006655cf3e8f4479f629'
  }

  /**
   * The liquidity-pool was retired forcefully
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId]] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotPoolStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.PoolStarted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV910(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolStarted') === '2b23f94f314426469c48ad4e7151c0cf804cf2ac6f31b416b2279e855ca19c25'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV910(): [number, v910.PoolType, [v910.CurrencyId, v910.CurrencyId]] {
    assert(this.isV910)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolStarted') === 'ca15bbf15aebb14992cc24ae039b7657a5240f9923340c52918510f624751b4a'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId]] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolStarted') === '430663f763145b46f8aaf79e0e3b90c3a4dfc25386c857a6c9ac15548dc4a4f0'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId]] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolStarted') === '411c5d40694ac3f56833e34718fe1dd4350ce031631ccd25958450514d9e47c7'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId]] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolStarted') === 'e8af2df1e7dbf13bd0fee5256a664b9bc6c8a07cd449340adc7c8b7567b80573'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId]] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolStarted') === '3e906e4613134cd5ddab8ec956b151fe5f8529b34198ffe0eb4b69528b9b2cbc'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId]] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.PoolStarted') === '8e8f7763034a00ba4af810eca5a511b90c4d0baa8a35006655cf3e8f4479f629'
  }

  /**
   * The liquidity-pool was started up
   * 
   * [pool_id, pool_type, trading_pair]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId]] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotUserCancelUnlockEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.UserCancelUnlock')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserCancelUnlock') === '07ba5b9fa5c50cdda9c3c22c7d8807056329af50580131d56853958ae0544ed3'
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get asV922(): [number, v922.PoolType, [v922.CurrencyId, v922.CurrencyId], bigint, Uint8Array] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserCancelUnlock') === '09c84c16faca827a2596af6380160ac4e1c4bc3fdd893654ff3c529b6711bd00'
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], bigint, Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserCancelUnlock') === '25f0d2728f9c570dd9e07deca14aaae649324d257c54acd5283386db55890a5f'
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], bigint, Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserCancelUnlock') === '911fafcd42b3199bc003709ddbe5c0678d4cd143c27c39151dc137d2eb07d25a'
  }

  /**
   * User cancels a pending-unlock from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_canceled, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], bigint, Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotUserClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.UserClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV910(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserClaimed') === 'faf6453e23eb0d6efc2ccc84b8f5614effd1edce47ab8b084d9efbc99990abcf'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV910(): [number, v910.PoolType, [v910.CurrencyId, v910.CurrencyId], [v910.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV910)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserClaimed') === '6e2ab4bc73f0f957d5f5804a9a62034a6e9ffec7d3ce46b7f26d3f45c7fc94ee'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], [v912.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserClaimed') === 'eda9c57db0554c6b3c441b165eb401a4985300ae9edd54465a5e562984dd842d'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], [v916.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserClaimed') === '2529b56409cd38d465cf8d8046af511d01d110764c369cd77bd109f7f8b8505b'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], [v920.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserClaimed') === 'd7edab23545458adf4b44f2feac8388397d5cc28539b5e9eb74f5a310a53b8ac'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], [v932.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserClaimed') === '68d64e9a02ac58ff8963db10921ef4d178d524fb5d68e430a8b3d28ae50cd3d6'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], [v956.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserClaimed') === 'a9ace270ad6767c0ac754b780e2121988363a3f1c2a2d237dcfbbfb0c9cefeb5'
  }

  /**
   * User withdrew the rewards whose deserved from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, rewards, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], [v962.CurrencyId, bigint][], Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotUserDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.UserDeposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV910(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserDeposited') === 'c6011fccda05945a5532d343f0b082c6fa6ff179ae03c97626a227e8baf1d569'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV910(): [number, v910.PoolType, [v910.CurrencyId, v910.CurrencyId], bigint, Uint8Array] {
    assert(this.isV910)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserDeposited') === '8ffe86d8f482c68920edd3399173b7c92de74206c397884493c5cd308e8934eb'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], bigint, Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserDeposited') === '30180216cc3d607ab6c03594351d2ec9117c7bc63fecd45f754b484512632872'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], bigint, Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserDeposited') === '07ba5b9fa5c50cdda9c3c22c7d8807056329af50580131d56853958ae0544ed3'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], bigint, Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserDeposited') === '09c84c16faca827a2596af6380160ac4e1c4bc3fdd893654ff3c529b6711bd00'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], bigint, Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserDeposited') === '25f0d2728f9c570dd9e07deca14aaae649324d257c54acd5283386db55890a5f'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], bigint, Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserDeposited') === '911fafcd42b3199bc003709ddbe5c0678d4cd143c27c39151dc137d2eb07d25a'
  }

  /**
   * User deposited tokens to a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_deposited, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], bigint, Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotUserRedeemedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.UserRedeemed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV910(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserRedeemed') === 'c6011fccda05945a5532d343f0b082c6fa6ff179ae03c97626a227e8baf1d569'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV910(): [number, v910.PoolType, [v910.CurrencyId, v910.CurrencyId], bigint, Uint8Array] {
    assert(this.isV910)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserRedeemed') === '8ffe86d8f482c68920edd3399173b7c92de74206c397884493c5cd308e8934eb'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV912(): [number, v912.PoolType, [v912.CurrencyId, v912.CurrencyId], bigint, Uint8Array] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserRedeemed') === '30180216cc3d607ab6c03594351d2ec9117c7bc63fecd45f754b484512632872'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV916(): [number, v916.PoolType, [v916.CurrencyId, v916.CurrencyId], bigint, Uint8Array] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserRedeemed') === '07ba5b9fa5c50cdda9c3c22c7d8807056329af50580131d56853958ae0544ed3'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV920(): [number, v920.PoolType, [v920.CurrencyId, v920.CurrencyId], bigint, Uint8Array] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserRedeemed') === '13728dc28a9c3e742fc66cfae41d5fa9effb0a6dc621be8997d4d013701300af'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get asV922(): [number, v922.PoolType, [v922.CurrencyId, v922.CurrencyId], bigint, number, Uint8Array] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserRedeemed') === 'b73d2cb883045a8a1eb0dbe95e21dcb1cb0127bf51e3bbd08e1ef9a6195e88bd'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], bigint, number, Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserRedeemed') === '51c18ba248779f90b3f44709b499eabddec44dd48941361bf1dd84040001c5ab'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], bigint, number, Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserRedeemed') === '46fac8214e90400beb29d3f00db7209dae09354fff9e931c3e699fbde8c37575'
  }

  /**
   * User redeemed tokens from a liquidity-mining
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], bigint, number, Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDotUserUnlockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMiningDOT.UserUnlocked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV922(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserUnlocked') === '07ba5b9fa5c50cdda9c3c22c7d8807056329af50580131d56853958ae0544ed3'
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV922(): [number, v922.PoolType, [v922.CurrencyId, v922.CurrencyId], bigint, Uint8Array] {
    assert(this.isV922)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserUnlocked') === '09c84c16faca827a2596af6380160ac4e1c4bc3fdd893654ff3c529b6711bd00'
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV932(): [number, v932.PoolType, [v932.CurrencyId, v932.CurrencyId], bigint, Uint8Array] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserUnlocked') === '25f0d2728f9c570dd9e07deca14aaae649324d257c54acd5283386db55890a5f'
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV956(): [number, v956.PoolType, [v956.CurrencyId, v956.CurrencyId], bigint, Uint8Array] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('LiquidityMiningDOT.UserUnlocked') === '911fafcd42b3199bc003709ddbe5c0678d4cd143c27c39151dc137d2eb07d25a'
  }

  /**
   * User unlock tokens from a liquidity-pool
   * 
   * [pool_id, pool_type, trading_pair, amount_redeemed, user]
   */
  get asV962(): [number, v962.PoolType, [v962.CurrencyId, v962.CurrencyId], bigint, Uint8Array] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class MerkleDistributorAddToWhiteListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MerkleDistributor.AddToWhiteList')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * add account who can create merkle distributor. \ [account]
   */
  get isV923(): boolean {
    return this._chain.getEventHash('MerkleDistributor.AddToWhiteList') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * add account who can create merkle distributor. \ [account]
   */
  get asV923(): Uint8Array {
    assert(this.isV923)
    return this._chain.decodeEvent(this.event)
  }
}

export class MerkleDistributorClaimEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MerkleDistributor.Claim')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * claim reward. \[merkle distributor id, account, balance]
   */
  get isV914(): boolean {
    return this._chain.getEventHash('MerkleDistributor.Claim') === '491d5eb10503fbf716b3399d749f1a02c0a60c5f903a500a8ed4f9f98fd07f34'
  }

  /**
   * claim reward. \[merkle distributor id, account, balance]
   */
  get asV914(): [number, Uint8Array, bigint] {
    assert(this.isV914)
    return this._chain.decodeEvent(this.event)
  }
}

export class MerkleDistributorCreateEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MerkleDistributor.Create')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * create a merkle distributor. \[merkle distributor id, merkle tree root, total reward balance]
   */
  get isV914(): boolean {
    return this._chain.getEventHash('MerkleDistributor.Create') === '491d5eb10503fbf716b3399d749f1a02c0a60c5f903a500a8ed4f9f98fd07f34'
  }

  /**
   * create a merkle distributor. \[merkle distributor id, merkle tree root, total reward balance]
   */
  get asV914(): [number, Uint8Array, bigint] {
    assert(this.isV914)
    return this._chain.decodeEvent(this.event)
  }
}

export class MerkleDistributorRemoveFromWhiteListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MerkleDistributor.RemoveFromWhiteList')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * remove account from the set who can create merkle distributor. \ [account]
   */
  get isV923(): boolean {
    return this._chain.getEventHash('MerkleDistributor.RemoveFromWhiteList') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * remove account from the set who can create merkle distributor. \ [account]
   */
  get asV923(): Uint8Array {
    assert(this.isV923)
    return this._chain.decodeEvent(this.event)
  }
}

export class MerkleDistributorWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MerkleDistributor.Withdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * withdraw reward. \[merkle distributor id, account, balance]
   */
  get isV914(): boolean {
    return this._chain.getEventHash('MerkleDistributor.Withdraw') === '491d5eb10503fbf716b3399d749f1a02c0a60c5f903a500a8ed4f9f98fd07f34'
  }

  /**
   * withdraw reward. \[merkle distributor id, account, balance]
   */
  get asV914(): [number, Uint8Array, bigint] {
    assert(this.isV914)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigMultisigApprovalEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.MultisigApproval')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A multisig operation has been approved by someone.
   *  \[approving, timepoint, multisig, call_hash\]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('Multisig.MultisigApproval') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
  }

  /**
   *  A multisig operation has been approved by someone.
   *  \[approving, timepoint, multisig, call_hash\]
   */
  get asV804(): [Uint8Array, v804.Timepoint, Uint8Array, Uint8Array] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A multisig operation has been approved by someone.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
  }

  /**
   * A multisig operation has been approved by someone.
   */
  get asV916(): {approving: Uint8Array, timepoint: v916.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigMultisigCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.MultisigCancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('Multisig.MultisigCancelled') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
  }

  /**
   *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
   */
  get asV804(): [Uint8Array, v804.Timepoint, Uint8Array, Uint8Array] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A multisig operation has been cancelled.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
  }

  /**
   * A multisig operation has been cancelled.
   */
  get asV916(): {cancelling: Uint8Array, timepoint: v916.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigMultisigExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.MultisigExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === 'bfc793611d2faccf5c1d0a2c5b4afd72aeb277a9fab594cb541da6cfeb6a3623'
  }

  /**
   *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
   */
  get asV804(): [Uint8Array, v804.Timepoint, Uint8Array, Uint8Array, Result<null, v804.DispatchError>] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === 'f08385690c4e3355f9175e471de831715b0a105591098a8f0a837cda340ea8c3'
  }

  /**
   * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
   */
  get asV906(): [Uint8Array, v906.Timepoint, Uint8Array, Uint8Array, Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A multisig operation has been executed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === '3e9e82dc7d08f9bcbad1507865a84a75849f617bbfb6aecae0cbc44d71025dc5'
  }

  /**
   * A multisig operation has been executed.
   */
  get asV916(): {approving: Uint8Array, timepoint: v916.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A multisig operation has been executed.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === '65fa86b1377c71906c798a7c2cfab5cc1142a5df1cec617a631c34af7104f7ef'
  }

  /**
   * A multisig operation has been executed.
   */
  get asV926(): {approving: Uint8Array, timepoint: v926.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A multisig operation has been executed.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === '64fde797dd4ea0a5e8b72fba6c3511764d52e9d275c92fae4375d984eddab747'
  }

  /**
   * A multisig operation has been executed.
   */
  get asV932(): {approving: Uint8Array, timepoint: v932.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A multisig operation has been executed.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === '9a90127767690cc1a48990f005cdf6993802881e3af2da8d0fe9f8294b8c4b9d'
  }

  /**
   * A multisig operation has been executed.
   */
  get asV942(): {approving: Uint8Array, timepoint: v942.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigNewMultisigEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.NewMultisig')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A new multisig operation has begun. \[approving, multisig, call_hash\]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('Multisig.NewMultisig') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
  }

  /**
   *  A new multisig operation has begun. \[approving, multisig, call_hash\]
   */
  get asV804(): [Uint8Array, Uint8Array, Uint8Array] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new multisig operation has begun.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
  }

  /**
   * A new multisig operation has begun.
   */
  get asV916(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class OrmlXcmSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'OrmlXcm.Sent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  XCM message sent. \[from, to, message\]
   */
  get isV805(): boolean {
    return this._chain.getEventHash('OrmlXcm.Sent') === '1805872a5637016e40c5692e35331ef2d63033fef12ad190f4e8b05dbe330de6'
  }

  /**
   *  XCM message sent. \[from, to, message\]
   */
  get asV805(): [v805.MultiLocation, v805.MultiLocation, v805.Xcm] {
    assert(this.isV805)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  XCM message sent. \[to, message\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('OrmlXcm.Sent') === '4687698ffee8ffc18fbb87d3c6ea6ee5418163eae5470452163c0f03baba0e32'
  }

  /**
   *  XCM message sent. \[to, message\]
   */
  get asV902(): [v902.MultiLocation, v902.Xcm] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('OrmlXcm.Sent') === '2736f74101ec76982523bf9c0f4a85fc84da8c15989fcc2045cbd9fa3b2e186b'
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get asV906(): [v906.V1MultiLocation, v906.V2Instruction[]] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get isV925(): boolean {
    return this._chain.getEventHash('OrmlXcm.Sent') === 'd38dfbfc62673b6d60b39c2cc2bc2c49f87e7d7e4ad585a72ff9689951556a1f'
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get asV925(): {to: v925.V1MultiLocation, message: v925.V2Instruction[]} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get isV926(): boolean {
    return this._chain.getEventHash('OrmlXcm.Sent') === 'a58e2ab3184c3e4e335af85f0463bed0f68d37969e80066264857c6d71dbf4c7'
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get asV926(): {to: v926.V1MultiLocation, message: v926.V2Instruction[]} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingBlocksPerRoundSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.BlocksPerRoundSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Set blocks per round
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.BlocksPerRoundSet') === '74d8f3bfd5f29c3879a0a39bcc98bbbf2126b8bd8f84484d4798554409c999b3'
  }

  /**
   * Set blocks per round
   */
  get asV930(): {currentRound: number, firstBlock: number, old: number, new: number, newPerRoundInflationMin: number, newPerRoundInflationIdeal: number, newPerRoundInflationMax: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCancelledCandidateBondLessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CancelledCandidateBondLess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Cancelled request to decrease candidate's bond.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledCandidateBondLess') === 'bad2bb017b2205b3b15c75ff6fdd7f0bb8d59d5fd14df4cb8874b21292f699a8'
  }

  /**
   * Cancelled request to decrease candidate's bond.
   */
  get asV930(): {candidate: Uint8Array, amount: bigint, executeRound: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCancelledCandidateExitEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CancelledCandidateExit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Cancelled request to leave the set of candidates.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledCandidateExit') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
  }

  /**
   * Cancelled request to leave the set of candidates.
   */
  get asV930(): {candidate: Uint8Array} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCancelledDelegationRequestEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CancelledDelegationRequest')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Cancelled request to change an existing delegation.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === '46af4b1d2cfb4cc4634323376fe291f2ff356e7cd57e903535a945d3e3393d7b'
  }

  /**
   * Cancelled request to change an existing delegation.
   */
  get asV930(): {delegator: Uint8Array, cancelledRequest: v930.DelegationRequest} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Cancelled request to change an existing delegation.
   */
  get isV954(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === '8aedfed09d22a5851676a3041c7dfb0161f0b4423f7156ac758a2ca32812a2a5'
  }

  /**
   * Cancelled request to change an existing delegation.
   */
  get asV954(): {delegator: Uint8Array, cancelledRequest: v954.CancelledScheduledRequest, collator: Uint8Array} {
    assert(this.isV954)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateBackOnlineEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateBackOnline')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate rejoins the set of collator candidates.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBackOnline') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
  }

  /**
   * Candidate rejoins the set of collator candidates.
   */
  get asV930(): {candidate: Uint8Array} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateBondLessRequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateBondLessRequested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Сandidate requested to decrease a self bond.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBondLessRequested') === '1d9dd427739469ad726bf81a0c0b38805035667c30e6a9fe377548316553a7a3'
  }

  /**
   * Сandidate requested to decrease a self bond.
   */
  get asV930(): {candidate: Uint8Array, amountToDecrease: bigint, executeRound: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateBondedLessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateBondedLess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Сandidate has decreased a self bond.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBondedLess') === '29dfa3e28f81d3d1053aa8a109068e837e27bd18c2fd1255bf4a84b3f4ad3646'
  }

  /**
   * Сandidate has decreased a self bond.
   */
  get asV930(): {candidate: Uint8Array, amount: bigint, newBond: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateBondedMoreEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateBondedMore')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Сandidate has increased a self bond.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBondedMore') === '3555667014ed491dbe7285cd00ca93d412ddafe3f0519d33df883a1f5f0b60ee'
  }

  /**
   * Сandidate has increased a self bond.
   */
  get asV930(): {candidate: Uint8Array, amount: bigint, newTotalBond: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateLeftEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateLeft')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate has left the set of candidates.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateLeft') === '9455507cee1dbacfcddf86bf2afec2f8fa01f688a383fc7d913c342da2331154'
  }

  /**
   * Candidate has left the set of candidates.
   */
  get asV930(): {exCandidate: Uint8Array, unlockedAmount: bigint, newTotalAmtLocked: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateScheduledExitEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateScheduledExit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Сandidate has requested to leave the set of candidates.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateScheduledExit') === 'd448041a4a1bdbe3492a1dc2516bebab567198a414d72b2eaa4254ed7248297c'
  }

  /**
   * Сandidate has requested to leave the set of candidates.
   */
  get asV930(): {exitAllowedRound: number, candidate: Uint8Array, scheduledExit: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateWentOfflineEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateWentOffline')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate temporarily leave the set of collator candidates without unbonding.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateWentOffline') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
  }

  /**
   * Candidate temporarily leave the set of collator candidates without unbonding.
   */
  get asV930(): {candidate: Uint8Array} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorChosenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorChosen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate selected for collators. Total Exposed Amount includes all delegations.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorChosen') === 'e39a7c1cbb003367ccb2e8ac99ff67fe973f19c8f4d0ba8fdd754a846bc02fa0'
  }

  /**
   * Candidate selected for collators. Total Exposed Amount includes all delegations.
   */
  get asV930(): {round: number, collatorAccount: Uint8Array, totalExposedAmount: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorCommissionSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorCommissionSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Set collator commission to this value.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorCommissionSet') === '2a46248fcf922d799638b5954d60e33df4d7dd9113650c71660a937cd4b5613d'
  }

  /**
   * Set collator commission to this value.
   */
  get asV930(): {old: number, new: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.Delegation')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New delegation (increase of the existing one).
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.Delegation') === 'dbeb00002e0e711f8d6ab1758ba836f98f14598de2f5e4c546d3c3ac2bb88f85'
  }

  /**
   * New delegation (increase of the existing one).
   */
  get asV930(): {delegator: Uint8Array, lockedAmount: bigint, candidate: Uint8Array, delegatorPosition: v930.DelegatorAdded} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationDecreaseScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationDecreaseScheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator requested to decrease a bond for the collator candidate.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationDecreaseScheduled') === 'dad0c96a1d19cefcdee6c3f1d15faf2e2984df101d71591df8e4f8db32ebc673'
  }

  /**
   * Delegator requested to decrease a bond for the collator candidate.
   */
  get asV930(): {delegator: Uint8Array, candidate: Uint8Array, amountToDecrease: bigint, executeRound: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationDecreasedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationDecreased')
    this._chain = ctx._chain
    this.event = event
  }

  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationDecreased') === '578d871808b851f365c061fed4bb2e04ce24d572792f345fb055d2c4dff71471'
  }

  get asV930(): {delegator: Uint8Array, candidate: Uint8Array, amount: bigint, inTop: boolean} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationIncreasedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationIncreased')
    this._chain = ctx._chain
    this.event = event
  }

  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationIncreased') === '578d871808b851f365c061fed4bb2e04ce24d572792f345fb055d2c4dff71471'
  }

  get asV930(): {delegator: Uint8Array, candidate: Uint8Array, amount: bigint, inTop: boolean} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationKickedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationKicked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegation kicked.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationKicked') === 'ee999c83b6b0952280ddb043c0b936ad93e99efd43b619a9cb433e75452693e7'
  }

  /**
   * Delegation kicked.
   */
  get asV930(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationRevocationScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationRevocationScheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator requested to revoke delegation.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationRevocationScheduled') === '6ee92edd1ee620fc58d5573f822c739bef3db08530370007a65e0e324c7fd1ac'
  }

  /**
   * Delegator requested to revoke delegation.
   */
  get asV930(): {round: number, delegator: Uint8Array, candidate: Uint8Array, scheduledExit: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationRevokedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationRevoked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegation revoked.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationRevoked') === 'ee999c83b6b0952280ddb043c0b936ad93e99efd43b619a9cb433e75452693e7'
  }

  /**
   * Delegation revoked.
   */
  get asV930(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegatorExitCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegatorExitCancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Cancelled a pending request to exit the set of delegators.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorExitCancelled') === '3d3838bcdd21a8f0595cc9cd424acf3d984b169d1503483ecf5a480bda8b126e'
  }

  /**
   * Cancelled a pending request to exit the set of delegators.
   */
  get asV930(): {delegator: Uint8Array} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegatorExitScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegatorExitScheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator requested to leave the set of delegators.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorExitScheduled') === 'b0ecb7b0e9d90e91d46ad2884adf3275ce434f0de306b44b7dd8e6c0ac096270'
  }

  /**
   * Delegator requested to leave the set of delegators.
   */
  get asV930(): {round: number, delegator: Uint8Array, scheduledExit: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegatorLeftEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegatorLeft')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator has left the set of delegators.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorLeft') === 'f36a8c40c8ea325606e0c9f58919ca14407f237efae652798cd82614cbb5639d'
  }

  /**
   * Delegator has left the set of delegators.
   */
  get asV930(): {delegator: Uint8Array, unstakedAmount: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegatorLeftCandidateEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegatorLeftCandidate')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegation from candidate state has been remove.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorLeftCandidate') === 'b5d039328045457ec2ccd3b61a64e0187b8398b0e1a9f8f670d96680ad9e297a'
  }

  /**
   * Delegation from candidate state has been remove.
   */
  get asV930(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint, totalCandidateStaked: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingInflationSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.InflationSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.InflationSet') === '6eae1c9cc0a52424f3a2724c2e3727bd3861cd6d631a605d47134df51d2a275a'
  }

  /**
   * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
   */
  get asV930(): {annualMin: number, annualIdeal: number, annualMax: number, roundMin: number, roundIdeal: number, roundMax: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingJoinedCollatorCandidatesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.JoinedCollatorCandidates')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Account joined the set of collator candidates.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.JoinedCollatorCandidates') === '893e64af1fd9bde84d8749ef70be7dc46cb8974c5ccb1f7dcdb8f0b5c2ad4db7'
  }

  /**
   * Account joined the set of collator candidates.
   */
  get asV930(): {account: Uint8Array, amountLocked: bigint, newTotalAmtLocked: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingNewRoundEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.NewRound')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Started new round.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.NewRound') === '36b479d535ff0b4066a6ca7641a4dba5e090be428fc6b6e9fe8fec13d953fcfb'
  }

  /**
   * Started new round.
   */
  get asV930(): {startingBlock: number, round: number, selectedCollatorsNumber: number, totalBalance: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingParachainBondAccountSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.ParachainBondAccountSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Account (re)set for parachain bond treasury.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.ParachainBondAccountSet') === 'adbc830aa5ccdce297416513461c20af4d4cfc0a3e68cea7f721b0e6691db7b4'
  }

  /**
   * Account (re)set for parachain bond treasury.
   */
  get asV930(): {old: Uint8Array, new: Uint8Array} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingParachainBondReservePaymentSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.ParachainBondReservePaymentSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Payment reserved for each round
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.ParachainBondReservePaymentSet') === 'f9e13247f29786fd6eb0fa83ca8d59aef91a25e6becc3d99e138f9f419b9462b'
  }

  /**
   * Payment reserved for each round
   */
  get asV930(): {old: bigint, new: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingParachainBondReservePercentSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.ParachainBondReservePercentSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Percent of inflation reserved for parachain bond (re)set.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.ParachainBondReservePercentSet') === '4416290d0d279f778bdd022e996767b16d74caaec023f9380514b1862c75b357'
  }

  /**
   * Percent of inflation reserved for parachain bond (re)set.
   */
  get asV930(): {old: number, new: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingReservedForParachainBondEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.ReservedForParachainBond')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred to account which holds funds reserved for parachain bond.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.ReservedForParachainBond') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
  }

  /**
   * Transferred to account which holds funds reserved for parachain bond.
   */
  get asV930(): {account: Uint8Array, value: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingRewardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.Rewarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Paid the account (delegator or collator) the balance as liquid rewards.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.Rewarded') === '1a005a96fdd51900b5609e011c697b2588490316080f642724ed18b187dfc5e5'
  }

  /**
   * Paid the account (delegator or collator) the balance as liquid rewards.
   */
  get asV930(): {account: Uint8Array, rewards: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingStakeExpectationsSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.StakeExpectationsSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Staking expectations set.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.StakeExpectationsSet') === 'd8561f533aee1b8ba1c36d259010dca00cbc71ab7eb327cf0fa605d647371c6f'
  }

  /**
   * Staking expectations set.
   */
  get asV930(): {expectMin: bigint, expectIdeal: bigint, expectMax: bigint} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingTotalSelectedSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.TotalSelectedSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Set total selected candidates to this value.
   */
  get isV930(): boolean {
    return this._chain.getEventHash('ParachainStaking.TotalSelectedSet') === '2a46248fcf922d799638b5954d60e33df4d7dd9113650c71660a937cd4b5613d'
  }

  /**
   * Set total selected candidates to this value.
   */
  get asV930(): {old: number, new: number} {
    assert(this.isV930)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemDownwardMessagesProcessedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.DownwardMessagesProcessed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Downward messages were processed using the given weight.
   *  \[ weight_used, result_mqc_head \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
  }

  /**
   *  Downward messages were processed using the given weight.
   *  \[ weight_used, result_mqc_head \]
   */
  get asV1(): [bigint, Uint8Array] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward messages were processed using the given weight.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '83022e6226975081ba018c2b45a90d494bc922ece44e69af0322583651264f8e'
  }

  /**
   * Downward messages were processed using the given weight.
   */
  get asV952(): {weightUsed: bigint, dmqHead: Uint8Array} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemDownwardMessagesReceivedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.DownwardMessagesReceived')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some downward messages have been received and will be processed.
   *  \[ count \]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  Some downward messages have been received and will be processed.
   *  \[ count \]
   */
  get asV1(): number {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some downward messages have been received and will be processed.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '1cdbdc8ac203922f95ae6ab3e8b98004e956389f7ec11480ec5633d29b48cf71'
  }

  /**
   * Some downward messages have been received and will be processed.
   */
  get asV952(): {count: number} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemUpgradeAuthorizedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.UpgradeAuthorized')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An upgrade has been authorized.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  An upgrade has been authorized.
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An upgrade has been authorized.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  /**
   * An upgrade has been authorized.
   */
  get asV952(): {codeHash: Uint8Array} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionAppliedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionApplied')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The validation function was applied as of the contained relay chain block number.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  The validation function was applied as of the contained relay chain block number.
   */
  get asV1(): number {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === 'f35adbaa82c93636884997faedd16369ac498b9208d7c11f2233b9ef2aa4f092'
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get asV952(): {relayChainBlockNum: number} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionDiscardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionDiscarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The relay-chain aborted the upgrade process.
   */
  get isV908(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The relay-chain aborted the upgrade process.
   */
  get asV908(): null {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionStoredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionStored')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The validation function has been scheduled to apply as of the contained relay chain
   *  block number.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  The validation function has been scheduled to apply as of the contained relay chain
   *  block number.
   */
  get asV1(): number {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The validation function has been scheduled to apply.
   */
  get isV908(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The validation function has been scheduled to apply.
   */
  get asV908(): null {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class PhragmenElectionCandidateSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PhragmenElection.CandidateSlashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
   *  runner-up.
   * 
   *  Note that old members and runners-up are also candidates.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('PhragmenElection.CandidateSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
   *  runner-up.
   * 
   *  Note that old members and runners-up are also candidates.
   */
  get asV803(): [Uint8Array, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A candidate was slashed by amount due to failing to obtain a seat as member or
   * runner-up.
   * 
   * Note that old members and runners-up are also candidates.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('PhragmenElection.CandidateSlashed') === 'a64270141b7a7c84c0950e5dcd31bc284b27b39505d278ff519f44f855ee33d8'
  }

  /**
   * A candidate was slashed by amount due to failing to obtain a seat as member or
   * runner-up.
   * 
   * Note that old members and runners-up are also candidates.
   */
  get asV916(): {candidate: Uint8Array, amount: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class PhragmenElectionElectionErrorEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PhragmenElection.ElectionError')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Internal error happened while trying to perform election.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('PhragmenElection.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Internal error happened while trying to perform election.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class PhragmenElectionEmptyTermEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PhragmenElection.EmptyTerm')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  No (or not enough) candidates existed for this round. This is different from
   *  `NewTerm(\[\])`. See the description of `NewTerm`.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('PhragmenElection.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  No (or not enough) candidates existed for this round. This is different from
   *  `NewTerm(\[\])`. See the description of `NewTerm`.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class PhragmenElectionMemberKickedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PhragmenElection.MemberKicked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
   *  `EmptyTerm`.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('PhragmenElection.MemberKicked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
   *  `EmptyTerm`.
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A member has been removed. This should always be followed by either `NewTerm` or
   * `EmptyTerm`.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('PhragmenElection.MemberKicked') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
  }

  /**
   * A member has been removed. This should always be followed by either `NewTerm` or
   * `EmptyTerm`.
   */
  get asV916(): {member: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class PhragmenElectionNewTermEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PhragmenElection.NewTerm')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A new term with \[new_members\]. This indicates that enough candidates existed to run
   *  the election, not that enough have has been elected. The inner value must be examined
   *  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
   *  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
   *  begin with.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('PhragmenElection.NewTerm') === 'd7a45cf0fb3b6c39f6db66d04bddff68afaa850200debf915801414eda809fe1'
  }

  /**
   *  A new term with \[new_members\]. This indicates that enough candidates existed to run
   *  the election, not that enough have has been elected. The inner value must be examined
   *  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
   *  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
   *  begin with.
   */
  get asV803(): [Uint8Array, bigint][] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new term with new_members. This indicates that enough candidates existed to run
   * the election, not that enough have has been elected. The inner value must be examined
   * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
   * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
   * begin with.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('PhragmenElection.NewTerm') === 'c26c6ac673ee46db2001722c75880df159f382274469750dc468b868c6f738c8'
  }

  /**
   * A new term with new_members. This indicates that enough candidates existed to run
   * the election, not that enough have has been elected. The inner value must be examined
   * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
   * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
   * begin with.
   */
  get asV916(): {newMembers: [Uint8Array, bigint][]} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class PhragmenElectionRenouncedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PhragmenElection.Renounced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Someone has renounced their candidacy.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('PhragmenElection.Renounced') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  Someone has renounced their candidacy.
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Someone has renounced their candidacy.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('PhragmenElection.Renounced') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
  }

  /**
   * Someone has renounced their candidacy.
   */
  get asV916(): {candidate: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class PhragmenElectionSeatHolderSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PhragmenElection.SeatHolderSlashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('PhragmenElection.SeatHolderSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
   */
  get asV803(): [Uint8Array, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A seat holder was slashed by amount by being forcefully removed from the set.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('PhragmenElection.SeatHolderSlashed') === '7a1552e3cb4a3dc87408db4d42391f3a98998bb0e6bf70aa82661919c4d12eaa'
  }

  /**
   * A seat holder was slashed by amount by being forcefully removed from the set.
   */
  get asV916(): {seatHolder: Uint8Array, amount: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmAssetsTrappedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.AssetsTrapped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets have been placed in an asset trap.
   * 
   * \[ hash, origin, assets \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
  }

  /**
   * Some assets have been placed in an asset trap.
   * 
   * \[ hash, origin, assets \]
   */
  get asV906(): [Uint8Array, v906.V1MultiLocation, v906.VersionedMultiAssets] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmAttemptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Attempted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === '26c207f1b7514901013592d170553f1989d514c1be8cb564fb5a7d8d9217155d'
  }

  get asV1(): v1.Outcome {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  get isV902(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === 'fb37f5e43f250e32a36f5cb3601fcf318e1a1a8e3cad8dce30e8d9dca1d0f0a0'
  }

  get asV902(): v902.Outcome {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === '193515c3b0e5bbe78313ce7bb5d80d3c789be70e0085c1d43ce0347187c43a50'
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get asV906(): v906.V2Outcome {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get isV926(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get asV926(): v926.V2Outcome {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmInvalidResponderEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.InvalidResponder')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Expected query response has been received but the origin location of the response does
   * not match that expected. The query remains registered for a later, valid, response to
   * be received and acted upon.
   * 
   * \[ origin location, id, expected location \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
  }

  /**
   * Expected query response has been received but the origin location of the response does
   * not match that expected. The query remains registered for a later, valid, response to
   * be received and acted upon.
   * 
   * \[ origin location, id, expected location \]
   */
  get asV906(): [v906.V1MultiLocation, bigint, (v906.V1MultiLocation | undefined)] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmInvalidResponderVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.InvalidResponderVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Expected query response has been received but the expected origin location placed in
   * storate by this runtime previously cannot be decoded. The query remains registered.
   * 
   * This is unexpected (since a location placed in storage in a previously executing
   * runtime should be readable prior to query timeout) and dangerous since the possibly
   * valid response will be dropped. Manual governance intervention is probably going to be
   * needed.
   * 
   * \[ origin location, id \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.InvalidResponderVersion') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
  }

  /**
   * Expected query response has been received but the expected origin location placed in
   * storate by this runtime previously cannot be decoded. The query remains registered.
   * 
   * This is unexpected (since a location placed in storage in a previously executing
   * runtime should be readable prior to query timeout) and dangerous since the possibly
   * valid response will be dropped. Manual governance intervention is probably going to be
   * needed.
   * 
   * \[ origin location, id \]
   */
  get asV906(): [v906.V1MultiLocation, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifiedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Notified')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The registered notification has
   * been dispatched and executed successfully.
   * 
   * \[ id, pallet index, call index \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The registered notification has
   * been dispatched and executed successfully.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV906(): [bigint, number, number] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyDecodeFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyDecodeFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The dispatch was unable to be
   * decoded into a `Call`; this might be due to dispatch function having a signature which
   * is not `(origin, QueryId, Response)`.
   * 
   * \[ id, pallet index, call index \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The dispatch was unable to be
   * decoded into a `Call`; this might be due to dispatch function having a signature which
   * is not `(origin, QueryId, Response)`.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV906(): [bigint, number, number] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyDispatchErrorEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyDispatchError')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. There was a general error with
   * dispatching the notification call.
   * 
   * \[ id, pallet index, call index \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. There was a general error with
   * dispatching the notification call.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV906(): [bigint, number, number] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyOverweightEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyOverweight')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get asV906(): [bigint, number, number, bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyTargetMigrationFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyTargetMigrationFail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * migrating the location to our new XCM format.
   * 
   * \[ location, query ID \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * migrating the location to our new XCM format.
   * 
   * \[ location, query ID \]
   */
  get asV906(): [v906.VersionedMultiLocation, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyTargetSendFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyTargetSendFail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '691ecac12054acab4727e4ac3bcc4cc884bcf98e86e777b9c154133f1ff85778'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get asV906(): [v906.V1MultiLocation, bigint, v906.V2Error] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get isV926(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get asV926(): [v926.V1MultiLocation, bigint, v926.V2Error] {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmResponseReadyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.ResponseReady')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseReady') === 'e6cd72b673b499abf36b946b4ab2a4531e2ca4af4aa3d41e14bafae7b2502409'
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get asV906(): [bigint, v906.V2Response] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get isV926(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get asV926(): [bigint, v926.V2Response] {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmResponseTakenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.ResponseTaken')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Received query response has been read and removed.
   * 
   * \[ id \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
  }

  /**
   * Received query response has been read and removed.
   * 
   * \[ id \]
   */
  get asV906(): bigint {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Sent')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === '1805872a5637016e40c5692e35331ef2d63033fef12ad190f4e8b05dbe330de6'
  }

  get asV1(): [v1.MultiLocation, v1.MultiLocation, v1.Xcm] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  get isV902(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === '439c4bace34dec918790700887310b0e24ce328384852103b55e9827dc538068'
  }

  get asV902(): [v902.MultiLocation, v902.MultiLocation, v902.Xcm] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === '1a2c2f0f587aa6cafef526c4c8aabbb80179c1dda79383508e93899dd8a8604c'
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get asV906(): [v906.V1MultiLocation, v906.V1MultiLocation, v906.V2Instruction[]] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get isV926(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get asV926(): [v926.V1MultiLocation, v926.V1MultiLocation, v926.V2Instruction[]] {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmSupportedVersionChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.SupportedVersionChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The supported version of a location has been changed. This might be through an
   * automatic notification or a manual intervention.
   * 
   * \[ location, XCM version \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * The supported version of a location has been changed. This might be through an
   * automatic notification or a manual intervention.
   * 
   * \[ location, XCM version \]
   */
  get asV906(): [v906.V1MultiLocation, number] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmUnexpectedResponseEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.UnexpectedResponse')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response received which does not match a registered query. This may be because a
   * matching query was never registered, it may be because it is a duplicate response, or
   * because the query timed out.
   * 
   * \[ origin location, id \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
  }

  /**
   * Query response received which does not match a registered query. This may be because a
   * matching query was never registered, it may be because it is a duplicate response, or
   * because the query timed out.
   * 
   * \[ origin location, id \]
   */
  get asV906(): [v906.V1MultiLocation, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmVersionChangeNotifiedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.VersionChangeNotified')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM version change notification message has been attempted to be sent.
   * 
   * \[ destination, result \]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * An XCM version change notification message has been attempted to be sent.
   * 
   * \[ destination, result \]
   */
  get asV906(): [v906.V1MultiLocation, number] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class PreimageClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Preimage.Cleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A preimage has ben cleared.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has ben cleared.
   */
  get asV926(): {hash: Uint8Array} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class PreimageNotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Preimage.Noted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A preimage has been noted.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been noted.
   */
  get asV926(): {hash: Uint8Array} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class PreimageRequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Preimage.Requested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A preimage has been requested.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been requested.
   */
  get asV926(): {hash: Uint8Array} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyAnnouncedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.Announced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Proxy.Announced') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
  }

  /**
   * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
   */
  get asV908(): [Uint8Array, Uint8Array, Uint8Array] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An announcement was placed to make a call in the future.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Proxy.Announced') === '5c2546e4632bb75e839f990a33f7feb63fb5598747a25d3d09f23108c106abc4'
  }

  /**
   * An announcement was placed to make a call in the future.
   */
  get asV916(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyAnonymousCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.AnonymousCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type. \[anonymous, who, proxy_type,
   * disambiguation_index\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Proxy.AnonymousCreated') === 'be414f78c7c3200e8faa4f986ca144db2b9e18d8cd9bcf24117ed4cd0d1048bc'
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type. \[anonymous, who, proxy_type,
   * disambiguation_index\]
   */
  get asV908(): [Uint8Array, Uint8Array, v908.ProxyType, number] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Proxy.AnonymousCreated') === 'f01334e02d3c36f20b371f5cbb49e4465cde79719717855348e540a3d73c672f'
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get asV916(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v916.ProxyType, disambiguationIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Proxy.AnonymousCreated') === '9ae8bbb878de1c4ef3b99aa4c5703733d25e3a5b1ad8b86b670622bac5d715df'
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get asV926(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v926.ProxyType, disambiguationIndex: number} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyProxyAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.ProxyAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Proxy.ProxyAdded') === '03116f16df23620031a44841f526ca8742334b4bb4055bf02756b118c6e7fb72'
  }

  /**
   * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
   */
  get asV908(): [Uint8Array, Uint8Array, v908.ProxyType, number] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was added.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Proxy.ProxyAdded') === '277028bd690c63c71c201eab1978527944682284d5d3ef8b406df2f0dea085c0'
  }

  /**
   * A proxy was added.
   */
  get asV916(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v916.ProxyType, delay: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was added.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Proxy.ProxyAdded') === '4c99f5a443954fc1232e9c7541060ea850dfbd52d127f9ff8bf0e6e407200500'
  }

  /**
   * A proxy was added.
   */
  get asV926(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v926.ProxyType, delay: number} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyProxyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.ProxyExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proxy was executed correctly, with the given \[result\].
   */
  get isV908(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === 'ab888611b1630e8ada6ae91aa73bbcaa3417be141a0a0db92f4f509e4cfba02a'
  }

  /**
   * A proxy was executed correctly, with the given \[result\].
   */
  get asV908(): Result<null, v908.DispatchError> {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === 'd96aa7f2eece8cc4576093229086d4b5035cea1c38d31c9f4c7fb8ed70fb6bcc'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV916(): {result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === 'a5f93f40c8dbc0e7785a5800c0344513f6a8b6a6a0394b0938320dec7e44be85'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV926(): {result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === '437b0d6b61f01d02ca149f7d3a9e00406fc26ecde780532ed80e532801995307'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV932(): {result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === 'cbb13e6f8f0e2a0b00b89705f05de04cf34bbb44653bcdccedddc8448bc95bfc'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV942(): {result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyProxyRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.ProxyRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proxy was removed.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Proxy.ProxyRemoved') === '4c99f5a443954fc1232e9c7541060ea850dfbd52d127f9ff8bf0e6e407200500'
  }

  /**
   * A proxy was removed.
   */
  get asV942(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v942.ProxyType, delay: number} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpAllRefundedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.AllRefunded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  all refund
   */
  get isV901(): boolean {
    return this._chain.getEventHash('Salp.AllRefunded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  all refund
   */
  get asV901(): number {
    assert(this.isV901)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpAllUnlockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.AllUnlocked')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('Salp.AllUnlocked') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpBuybackEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Buyback')
    this._chain = ctx._chain
    this.event = event
  }

  get isV952(): boolean {
    return this._chain.getEventHash('Salp.Buyback') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  get asV952(): bigint {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpContinuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Continued')
    this._chain = ctx._chain
    this.event = event
  }

  get isV923(): boolean {
    return this._chain.getEventHash('Salp.Continued') === 'ee14df8652ec18f0202c95706dac25953673d4834fcfe21e7d7559cb96975c06'
  }

  get asV923(): [number, number, number] {
    assert(this.isV923)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpContributeFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.ContributeFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Fail on contribute to crowd sale. [who, fund_index, amount]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.ContributeFailed') === 'e40c718e9ea2b3e387a33231d657e7de5f227d6938409bebde14dd021a2a1734'
  }

  /**
   *  Fail on contribute to crowd sale. [who, fund_index, amount]
   */
  get asV900(): [Uint8Array, number, bigint, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpContributedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Contributed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Contributed to a crowd sale. [who, fund_index, amount]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Contributed') === 'e40c718e9ea2b3e387a33231d657e7de5f227d6938409bebde14dd021a2a1734'
  }

  /**
   *  Contributed to a crowd sale. [who, fund_index, amount]
   */
  get asV900(): [Uint8Array, number, bigint, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpContributingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Contributing')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Contributing to a crowd sale. [who, fund_index, amount]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Contributing') === 'e40c718e9ea2b3e387a33231d657e7de5f227d6938409bebde14dd021a2a1734'
  }

  /**
   *  Contributing to a crowd sale. [who, fund_index, amount]
   */
  get asV900(): [Uint8Array, number, bigint, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Create a new crowdloaning campaign. [fund_index]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Created') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  Create a new crowdloaning campaign. [fund_index]
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpDissolvedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Dissolved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Fund is dissolved. [fund_index]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Dissolved') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  Fund is dissolved. [fund_index]
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpEditedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Edited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Fund is edited. [fund_index]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Edited') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  Fund is edited. [fund_index]
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpEndEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.End')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('Salp.End') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Failed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Fund status change
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Failed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  Fund status change
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpMintedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Minted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Mint
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Minted') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  Mint
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpProxyAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.ProxyAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Proxy
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.ProxyAdded') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  Proxy
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpProxyRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.ProxyRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('Salp.ProxyRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpRedeemedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Redeemed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  redeem to account. [who, fund_index, first_slot, last_slot, value]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Redeemed') === '9698feac309a037229c2f66b0111739380a1e755de86c4ad36aa068f57b4b49b'
  }

  /**
   *  redeem to account. [who, fund_index, first_slot, last_slot, value]
   */
  get asV900(): [Uint8Array, number, number, number, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpRefundedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Refunded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  redeem to account. [who, fund_index,value]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Refunded') === 'ad00729b31f26d2879a6f96c1691ed42a69cd4947c75e84221a6bde93a3415bc'
  }

  /**
   *  redeem to account. [who, fund_index,value]
   */
  get asV900(): [Uint8Array, number, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * refund to account. [who, fund_index,value]
   */
  get isV923(): boolean {
    return this._chain.getEventHash('Salp.Refunded') === '9698feac309a037229c2f66b0111739380a1e755de86c4ad36aa068f57b4b49b'
  }

  /**
   * refund to account. [who, fund_index,value]
   */
  get asV923(): [Uint8Array, number, number, number, bigint] {
    assert(this.isV923)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpRefundedDissolvedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.RefundedDissolved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV923(): boolean {
    return this._chain.getEventHash('Salp.RefundedDissolved') === 'ee14df8652ec18f0202c95706dac25953673d4834fcfe21e7d7559cb96975c06'
  }

  get asV923(): [number, number, number] {
    assert(this.isV923)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpRetiredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Retired')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Retired') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Success')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Success') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpTransferredStatemineMultiAssetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.TransferredStatemineMultiAsset')
    this._chain = ctx._chain
    this.event = event
  }

  get isV920(): boolean {
    return this._chain.getEventHash('Salp.TransferredStatemineMultiAsset') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  get asV920(): [Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpUnlockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Unlocked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The vsToken/vsBond was be unlocked. [who, fund_index, value]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Unlocked') === 'ad00729b31f26d2879a6f96c1691ed42a69cd4947c75e84221a6bde93a3415bc'
  }

  /**
   *  The vsToken/vsBond was be unlocked. [who, fund_index, value]
   */
  get asV900(): [Uint8Array, number, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpVstokenUnlockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.VstokenUnlocked')
    this._chain = ctx._chain
    this.event = event
  }

  get isV964(): boolean {
    return this._chain.getEventHash('Salp.VstokenUnlocked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  get asV964(): Uint8Array {
    assert(this.isV964)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpWithdrewEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Salp.Withdrew')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Withdrew full balance of a contributor. [who, fund_index, amount]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Salp.Withdrew') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  Withdrew full balance of a contributor. [who, fund_index, amount]
   */
  get asV900(): [number, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteAllMigratedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.AllMigrated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * vsAssets migrated
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.AllMigrated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * vsAssets migrated
   */
  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteAllUnlockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.AllUnlocked')
    this._chain = ctx._chain
    this.event = event
  }

  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.AllUnlocked') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteContinuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Continued')
    this._chain = ctx._chain
    this.event = event
  }

  get isV915(): boolean {
    return this._chain.getEventHash('SalpLite.Continued') === 'ee14df8652ec18f0202c95706dac25953673d4834fcfe21e7d7559cb96975c06'
  }

  get asV915(): [number, number, number] {
    assert(this.isV915)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Create a new crowdloaning campaign. [fund_index]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Created') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * Create a new crowdloaning campaign. [fund_index]
   */
  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteDissolvedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Dissolved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Fund is dissolved. [fund_index]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Dissolved') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * Fund is dissolved. [fund_index]
   */
  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteEditedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Edited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Fund is edited. [fund_index]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Edited') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * Fund is edited. [fund_index]
   */
  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteEndEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.End')
    this._chain = ctx._chain
    this.event = event
  }

  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.End') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Failed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Fund status change
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Failed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * Fund status change
   */
  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteIssuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Issued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Contributed to a crowd sale. [who, fund_index, amount]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Issued') === 'e40c718e9ea2b3e387a33231d657e7de5f227d6938409bebde14dd021a2a1734'
  }

  /**
   * Contributed to a crowd sale. [who, fund_index, amount]
   */
  get asV908(): [Uint8Array, number, bigint, Uint8Array] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteRedeemedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Redeemed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * redeem to account. [who, fund_index, first_slot, last_slot, value]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Redeemed') === '9698feac309a037229c2f66b0111739380a1e755de86c4ad36aa068f57b4b49b'
  }

  /**
   * redeem to account. [who, fund_index, first_slot, last_slot, value]
   */
  get asV908(): [Uint8Array, number, number, number, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteRefundedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Refunded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * refund to account. [who, fund_index,value]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Refunded') === 'ad00729b31f26d2879a6f96c1691ed42a69cd4947c75e84221a6bde93a3415bc'
  }

  /**
   * refund to account. [who, fund_index,value]
   */
  get asV908(): [Uint8Array, number, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * refund to account. [who, fund_index,value]
   */
  get isV915(): boolean {
    return this._chain.getEventHash('SalpLite.Refunded') === '9698feac309a037229c2f66b0111739380a1e755de86c4ad36aa068f57b4b49b'
  }

  /**
   * refund to account. [who, fund_index,value]
   */
  get asV915(): [Uint8Array, number, number, number, bigint] {
    assert(this.isV915)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteRefundedDissolvedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.RefundedDissolved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV915(): boolean {
    return this._chain.getEventHash('SalpLite.RefundedDissolved') === 'ee14df8652ec18f0202c95706dac25953673d4834fcfe21e7d7559cb96975c06'
  }

  get asV915(): [number, number, number] {
    assert(this.isV915)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteRetiredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Retired')
    this._chain = ctx._chain
    this.event = event
  }

  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Retired') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Success')
    this._chain = ctx._chain
    this.event = event
  }

  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Success') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV908(): number {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteUnlockedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Unlocked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The vsToken/vsBond was be unlocked. [who, fund_index, value]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Unlocked') === 'ad00729b31f26d2879a6f96c1691ed42a69cd4947c75e84221a6bde93a3415bc'
  }

  /**
   * The vsToken/vsBond was be unlocked. [who, fund_index, value]
   */
  get asV908(): [Uint8Array, number, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SalpLiteWithdrewEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SalpLite.Withdrew')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Withdrew full balance of a contributor. [who, fund_index, amount]
   */
  get isV908(): boolean {
    return this._chain.getEventHash('SalpLite.Withdrew') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   * Withdrew full balance of a contributor. [who, fund_index, amount]
   */
  get asV908(): [number, bigint] {
    assert(this.isV908)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerCallLookupFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.CallLookupFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The call for the provided hash was not found so the task has been aborted.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
  }

  /**
   * The call for the provided hash was not found so the task has been aborted.
   */
  get asV926(): {task: [number, number], id: (Uint8Array | undefined), error: v926.LookupError} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Canceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Canceled some task. \[when, index\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Scheduler.Canceled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   *  Canceled some task. \[when, index\]
   */
  get asV1(): [number, number] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Canceled some task.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Canceled some task.
   */
  get asV926(): {when: number, index: number} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerDispatchedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Dispatched')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Dispatched some task. \[task, id, result\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === 'd0a1386dc04332910028a01cc9c16c79f10aed3bb5dcb69c8335c1dae1c22f4a'
  }

  /**
   *  Dispatched some task. \[task, id, result\]
   */
  get asV1(): [[number, number], (Uint8Array | undefined), Result<null, v1.DispatchError>] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Dispatched some task. \[task, id, result\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '12c2631182bbd65384b8ff2afee779ec1941e149568c871b28bde1f87c6afab0'
  }

  /**
   * Dispatched some task. \[task, id, result\]
   */
  get asV906(): [[number, number], (Uint8Array | undefined), Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Dispatched some task.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '439ef87771a96fe3726e3ffb055c38438b502913c76a8fada434b22e13a72246'
  }

  /**
   * Dispatched some task.
   */
  get asV926(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Dispatched some task.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '39cf66f8b318db4669e183ffaa1290aec1f8ac972b379087a931cf63e5ddf8f9'
  }

  /**
   * Dispatched some task.
   */
  get asV932(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Dispatched some task.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '3fd36e1da4dd6a57fbaf34f23c31e64a8c167849f0135f4fce7567f3db728290'
  }

  /**
   * Dispatched some task.
   */
  get asV942(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Scheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Scheduled some task. \[when, index\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Scheduler.Scheduled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   *  Scheduled some task. \[when, index\]
   */
  get asV1(): [number, number] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Scheduled some task.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Scheduled some task.
   */
  get asV926(): {when: number, index: number} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class SessionNewSessionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Session.NewSession')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  New session has happened. Note that the argument is the \[session_index\], not the block
   *  number as the type might suggest.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Session.NewSession') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New session has happened. Note that the argument is the \[session_index\], not the block
   *  number as the type might suggest.
   */
  get asV1(): number {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New session has happened. Note that the argument is the session index, not the
   * block number as the type might suggest.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
  }

  /**
   * New session has happened. Note that the argument is the session index, not the
   * block number as the type might suggest.
   */
  get asV916(): {sessionIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpChillEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.Chill')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.Chill') === '0eb41986e87347cbb92df1b16e91ff3fe142d1323edc24140f3c387ce59b43cd'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.Chill') === '892d6a62bcfb59ec257abeed534a3771a3fe96c7adacc3f93a6ad3c48b17ed26'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.Chill') === 'dea1221c402a099cf0d2b2a1b584132fd86432a90896ec37e37b502d8159af1f'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpCurrencyDelaysSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.CurrencyDelaysSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.CurrencyDelaysSet') === '39e0e8b1d9c24c7e8542f8bc220659fecd8cf995209890604bace1a12ac92202'
  }

  get asV940(): {currencyId: v940.CurrencyId, delays: (v940.Delays | undefined)} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.CurrencyDelaysSet') === '6f9554cfe58ab9e8251648820162821618a785b41cf28ba37c40b4cfa86b77f9'
  }

  get asV946(): {currencyId: v946.CurrencyId, delays: (v946.Delays | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.CurrencyDelaysSet') === '21ce331ea966a8d75974ad22fb7d5e42b836d8cba44b95b2844a2b33dc9a2af3'
  }

  get asV956(): {currencyId: v956.CurrencyId, delays: (v956.Delays | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.CurrencyDelaysSet') === '590937f2780ee83f834fc94984fe783e0bea765a43c6e6ba0f1c9d6f1d0bf8be'
  }

  get asV962(): {currencyId: v962.CurrencyId, delays: (v962.Delays | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpCurrencyTuneExchangeRateLimitSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.CurrencyTuneExchangeRateLimitSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.CurrencyTuneExchangeRateLimitSet') === 'fd5e5dd90788d2e145394f8c07042858d75635eeab21ca2896e2687931eae935'
  }

  get asV940(): {currencyId: v940.CurrencyId, tuneExchangeRateLimit: ([number, number] | undefined)} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.CurrencyTuneExchangeRateLimitSet') === 'bbc8fe741859f00123d579a40ee679fd19c06b04cf8ebdee0572768ec9c3978d'
  }

  get asV956(): {currencyId: v956.CurrencyId, tuneExchangeRateLimit: ([number, number] | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.CurrencyTuneExchangeRateLimitSet') === '8ea806bfb286f957173e2f5213faa9ff37e6136818fc567b3017eec9456865d1'
  }

  get asV962(): {currencyId: v962.CurrencyId, tuneExchangeRateLimit: ([number, number] | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.Delegated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.Delegated') === '255c7049e246b91ee76d9430a574946ba93885c856d3e53a328389958bbccbe1'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation, targets: v940.V1MultiLocation[], queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.Delegated') === '9d129838f8eca5b6c27ce9e1122df973f4ebad6e065d1c005e428204c531b757'
  }

  get asV946(): {currencyId: v946.CurrencyId, delegatorId: v946.V1MultiLocation, targets: (v946.V1MultiLocation[] | undefined), queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.Delegated') === '5819b5282452fea8cf73459fbc9e00b34c4c52e180e9a92b2d17c055b817446b'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation, targets: (v956.V1MultiLocation[] | undefined), queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.Delegated') === '4f50bb9c7d6eb319437dbcd439f75f8342260d04e75a088d712b79b82354f6ab'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation, targets: (v962.V1MultiLocation[] | undefined), queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorAdded')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorAdded') === '34406f2ec29b3d5bf8671ffbfd2d96960f48e3edb1d705aa9f42b0641f5e7a0f'
  }

  get asV940(): {currencyId: v940.CurrencyId, index: number, delegatorId: v940.V1MultiLocation} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorAdded') === 'f93dc4d98594a09a9203bf53d5e3985c806525dd623624ffc9cf11c0c7754776'
  }

  get asV956(): {currencyId: v956.CurrencyId, index: number, delegatorId: v956.V1MultiLocation} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorAdded') === '68dbfb3501c2606f6264043b91926e3bb78dc94d22359e24128494595a16013e'
  }

  get asV962(): {currencyId: v962.CurrencyId, index: number, delegatorId: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorBondExtraEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorBondExtra')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorBondExtra') === 'dd52d815bbabaec38e3494c86e7159336b2e23a4a90171286b90d577d21cf84d'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation, extraBondedAmount: bigint, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.DelegatorBondExtra') === 'fa6286b062c569cc12746ebe379f100efcad5d5b12c2c6a6b022df7cc79e870d'
  }

  get asV946(): {currencyId: v946.CurrencyId, delegatorId: v946.V1MultiLocation, extraBondedAmount: bigint, queryId: bigint, queryIdHash: Uint8Array, validator: (v946.V1MultiLocation | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorBondExtra') === '363c1fd8c81d899a7eae2adbb1ab5ef1d0334601fa9e0bd51075fb54d4c2227c'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation, extraBondedAmount: bigint, queryId: bigint, queryIdHash: Uint8Array, validator: (v956.V1MultiLocation | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorBondExtra') === '1e5c16243c807674fa977c4424128cf668f140edfd536c188c45319c011bf736'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation, extraBondedAmount: bigint, queryId: bigint, queryIdHash: Uint8Array, validator: (v962.V1MultiLocation | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorBondedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorBonded')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorBonded') === 'dbd2ce6b87e9d8f99a8d0f131362f01b6a58d8ad72cf64d51a7b30593ff08d0f'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation, bondedAmount: bigint, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.DelegatorBonded') === '10e77a764bcee2036244729e577664c361458ff904b01befca0de7dbc462a219'
  }

  get asV946(): {currencyId: v946.CurrencyId, delegatorId: v946.V1MultiLocation, bondedAmount: bigint, queryId: bigint, queryIdHash: Uint8Array, validator: (v946.V1MultiLocation | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorBonded') === 'f8c09161ebb9d21db07ee83a1767d8b348fc9855b139b92144b8c555b7fa2a2d'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation, bondedAmount: bigint, queryId: bigint, queryIdHash: Uint8Array, validator: (v956.V1MultiLocation | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorBonded') === 'cad2b74c1961cdcdbfda1768d3cc9da41d80b8e5f107f974bbae1b54c36c1643'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation, bondedAmount: bigint, queryId: bigint, queryIdHash: Uint8Array, validator: (v962.V1MultiLocation | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorInitializedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorInitialized')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorInitialized') === 'b990b627ab3c8aeb90b46ab7f1c5337a380072d257768143c7751821ccb7210e'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorInitialized') === '95dec480d17d0e2ff4a542cbcc7b69f301268539015c7e5fe3fe2db7e8390712'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorInitialized') === '47412a5e4098c1f712c68bd8a66343187a4b2f8c23a2b13dba1875ff2a39e2e3'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorLedgerQueryResponseConfirmedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorLedgerQueryResponseConfirmed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerQueryResponseConfirmed') === '1ffd2811944527a79c87604527b57101c9a791fcd519acea68b9f54fb6d21c8f'
  }

  get asV940(): {queryId: bigint, entry: v940.LedgerUpdateEntry} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerQueryResponseConfirmed') === '97b3ddac50f9ef6be374589b4a395099dd0d19583ec21647ad5d26dadef5aa22'
  }

  get asV946(): {queryId: bigint, entry: v946.LedgerUpdateEntry} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerQueryResponseConfirmed') === '76d9f30918cb9c851996fecf5592fc8b239aa032bccedb5f472c5902cb56509f'
  }

  get asV956(): {queryId: bigint, entry: v956.LedgerUpdateEntry} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV958(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerQueryResponseConfirmed') === 'd69af718c75167de54a55b69c318bada0444684fcefb44311c5994ec7ca1eba0'
  }

  get asV958(): {queryId: bigint, entry: v958.LedgerUpdateEntry} {
    assert(this.isV958)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerQueryResponseConfirmed') === '90f991e4b9ab40cb014cfeb461656d07adda8ae07beaeb420270b6f95dacec95'
  }

  get asV962(): {queryId: bigint, entry: v962.LedgerUpdateEntry} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorLedgerQueryResponseFailSuccessfullyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorLedgerQueryResponseFailSuccessfully')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerQueryResponseFailSuccessfully') === '7173deafe34d70ded9e7b845f6a1e223f3ba2dd506fd01ad6df32f6835032bbd'
  }

  get asV940(): {queryId: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorLedgerSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorLedgerSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerSet') === '26d6d46a6205fc5788155298ba5c58d50a79518fc7f1842f36b81f3e73ed6210'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegator: v940.V1MultiLocation, ledger: (v940.Ledger | undefined)} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerSet') === '59f3f8c2c565b77eac07199b64c4585ab3155c8b28d3c9f4b52b8cabf4d498de'
  }

  get asV946(): {currencyId: v946.CurrencyId, delegator: v946.V1MultiLocation, ledger: (v946.Ledger | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerSet') === 'c420149dba9a78fcde1a5c4455e1ef863fb609aea2e686cd6378b1e4d51b8e28'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegator: v956.V1MultiLocation, ledger: (v956.Ledger | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV958(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerSet') === '91c4b91aa015d78a15bc75ec3a074d7190bd87b5f35ee58b6935252630f331d0'
  }

  get asV958(): {currencyId: v958.CurrencyId, delegator: v958.V1MultiLocation, ledger: (v958.Ledger | undefined)} {
    assert(this.isV958)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorLedgerSet') === '97020ec231bd65b5842c1082c601b4e5bbd401d40f11a977dacdb09c015179de'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegator: v962.V1MultiLocation, ledger: (v962.Ledger | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorRebondEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorRebond')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorRebond') === '7270a7851605577cdd690e95ff7623b9074ba347cf8c5d1e1b8cfb884b948bc1'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation, rebondAmount: bigint, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.DelegatorRebond') === '340eb74b6ba85c1311682b9afc89667810216716381e5201f579e20f5aaa3668'
  }

  get asV946(): {currencyId: v946.CurrencyId, delegatorId: v946.V1MultiLocation, rebondAmount: (bigint | undefined), queryId: bigint, queryIdHash: Uint8Array, validator: (v946.V1MultiLocation | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorRebond') === '4b51010ec2f9f6033f53ea2be6819c95c06756b2d31b3ff5d47ca57a5912c18f'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation, rebondAmount: (bigint | undefined), queryId: bigint, queryIdHash: Uint8Array, validator: (v956.V1MultiLocation | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorRebond') === '2a9a3bb605d773d777c9bc88174a5b82b61c5607bf6d7da671976592613d6bc6'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation, rebondAmount: (bigint | undefined), queryId: bigint, queryIdHash: Uint8Array, validator: (v962.V1MultiLocation | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorRemoved') === 'b990b627ab3c8aeb90b46ab7f1c5337a380072d257768143c7751821ccb7210e'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorRemoved') === '95dec480d17d0e2ff4a542cbcc7b69f301268539015c7e5fe3fe2db7e8390712'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorRemoved') === '47412a5e4098c1f712c68bd8a66343187a4b2f8c23a2b13dba1875ff2a39e2e3'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorUnbondEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorUnbond')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorUnbond') === 'd7a013f115cb49a49d10328aab8faf3f2e01ed79d3de96d49bb0c59924ee44e8'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation, unbondAmount: bigint, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.DelegatorUnbond') === 'a89e25aa494e506014cabdbdf6e767543f0cb889b5d62119f626e145cdf17937'
  }

  get asV946(): {currencyId: v946.CurrencyId, delegatorId: v946.V1MultiLocation, unbondAmount: bigint, queryId: bigint, queryIdHash: Uint8Array, validator: (v946.V1MultiLocation | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorUnbond') === '5149e3c2852e57794cd00af3554e27094c8a8388ced25daa55485cb105979bff'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation, unbondAmount: bigint, queryId: bigint, queryIdHash: Uint8Array, validator: (v956.V1MultiLocation | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorUnbond') === '5f2e2199458464dd58624d05f473868f59d372af21406e44faaa19b2c2e08dfa'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation, unbondAmount: bigint, queryId: bigint, queryIdHash: Uint8Array, validator: (v962.V1MultiLocation | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpDelegatorUnbondAllEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.DelegatorUnbondAll')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.DelegatorUnbondAll') === '0eb41986e87347cbb92df1b16e91ff3fe142d1323edc24140f3c387ce59b43cd'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.DelegatorUnbondAll') === '892d6a62bcfb59ec257abeed534a3771a3fe96c7adacc3f93a6ad3c48b17ed26'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.DelegatorUnbondAll') === 'dea1221c402a099cf0d2b2a1b584132fd86432a90896ec37e37b502d8159af1f'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation, queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpFeeSourceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.FeeSourceSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.FeeSourceSet') === '130eae825abf6b4b7d2a5602dc096f651fec5216d121a02818299dfef72f15bc'
  }

  get asV940(): {currencyId: v940.CurrencyId, whoAndFee: ([v940.V1MultiLocation, bigint] | undefined)} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.FeeSourceSet') === 'b0010c03d093f2af31ae6a956f56a112ed246c05e20d6899af5215711591df67'
  }

  get asV956(): {currencyId: v956.CurrencyId, whoAndFee: ([v956.V1MultiLocation, bigint] | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.FeeSourceSet') === '84381132aaacade7681bb2d7f41949285c722629975a68102f9bc6403bc8f37f'
  }

  get asV962(): {currencyId: v962.CurrencyId, whoAndFee: ([v962.V1MultiLocation, bigint] | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpFeeSupplementedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.FeeSupplemented')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.FeeSupplemented') === '4754fd78ae59b89032aa638af58ba75109751b76b9ee21c05e05f464eef8464e'
  }

  get asV940(): {currencyId: v940.CurrencyId, amount: bigint, from: v940.V1MultiLocation, to: v940.V1MultiLocation} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.FeeSupplemented') === 'a4a8ad3afb0952ce27acda73d2a6698135868bb9f8a3bddf23b443b043c53c44'
  }

  get asV956(): {currencyId: v956.CurrencyId, amount: bigint, from: v956.V1MultiLocation, to: v956.V1MultiLocation} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.FeeSupplemented') === '0e3af73c0f7e950beb5a2860413371138156b84e043ea69c6ee09b950e3fd23f'
  }

  get asV962(): {currencyId: v962.CurrencyId, amount: bigint, from: v962.V1MultiLocation, to: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpFundMoveFromExitToEntranceEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.FundMoveFromExitToEntrance')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.FundMoveFromExitToEntrance') === 'fb74ac0b509ccc4ba0a0a8c76b1d93b47e94e26a4e8bd00cccfd6e942dec94dc'
  }

  get asV940(): {currencyId: v940.CurrencyId, amount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.FundMoveFromExitToEntrance') === '9973de28184b93659d1619cd352bac6b1317cebd81b60926fcec338344025263'
  }

  get asV956(): {currencyId: v956.CurrencyId, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.FundMoveFromExitToEntrance') === 'c635eaaf52ffe6f13bfd2bf1acd062484cf4314b6a2baec7ae9aee7341109498'
  }

  get asV962(): {currencyId: v962.CurrencyId, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpHostingFeeChargedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.HostingFeeCharged')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.HostingFeeCharged') === 'fb74ac0b509ccc4ba0a0a8c76b1d93b47e94e26a4e8bd00cccfd6e942dec94dc'
  }

  get asV940(): {currencyId: v940.CurrencyId, amount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.HostingFeeCharged') === '9973de28184b93659d1619cd352bac6b1317cebd81b60926fcec338344025263'
  }

  get asV956(): {currencyId: v956.CurrencyId, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.HostingFeeCharged') === 'c635eaaf52ffe6f13bfd2bf1acd062484cf4314b6a2baec7ae9aee7341109498'
  }

  get asV962(): {currencyId: v962.CurrencyId, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpHostingFeesSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.HostingFeesSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.HostingFeesSet') === '7fc272a392c1d9d5a393fdae2f9b8824d458b3e8f8200881b609a38f3d894922'
  }

  get asV940(): {currencyId: v940.CurrencyId, fees: ([number, v940.V1MultiLocation] | undefined)} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.HostingFeesSet') === '74878e3e0b2055a5c59306dd17b482146220d1a551e2b3f16292ee5f373cb807'
  }

  get asV956(): {currencyId: v956.CurrencyId, fees: ([number, v956.V1MultiLocation] | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.HostingFeesSet') === '429237d9be6df863eea31bd4f0c7b6fe5081d31a2c0a5209451cad0f532470e7'
  }

  get asV962(): {currencyId: v962.CurrencyId, fees: ([number, v962.V1MultiLocation] | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpLiquidizeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.Liquidize')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.Liquidize') === '584c5718d32641eca5191e4175f6ea7f31ca44b9f09872363c2bab0fd0f20d41'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation, timeUnit: (v940.TimeUnit | undefined), queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.Liquidize') === 'a639343f22b0e519cbb393f120ad1799d1ff188ea32c910f1cb93e23f93603dc'
  }

  get asV946(): {currencyId: v946.CurrencyId, delegatorId: v946.V1MultiLocation, timeUnit: (v946.TimeUnit | undefined), queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.Liquidize') === 'ef280f7741b9eedf18f8d0e0946d194a48e7bde4f774c7851d76e812c855a016'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation, timeUnit: (v956.TimeUnit | undefined), queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.Liquidize') === '4183df1727535f28e7b9f30617bae39508ef971b0339402ad509d156f51a2943'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation, timeUnit: (v962.TimeUnit | undefined), queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpMinimumsMaximumsSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.MinimumsMaximumsSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.MinimumsMaximumsSet') === '07284198f119a663e25500679418492dfa34ad0a7adaaf3da8992796e4e6595a'
  }

  get asV940(): {currencyId: v940.CurrencyId, minimumsAndMaximums: (v940.MinimumsMaximums | undefined)} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.MinimumsMaximumsSet') === 'ed0513d920356cfeb99a8c890a76c0f5aa2fbddf2f100a83bdd3b28a6ed05a4c'
  }

  get asV946(): {currencyId: v946.CurrencyId, minimumsAndMaximums: (v946.MinimumsMaximums | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.MinimumsMaximumsSet') === '54ddb0e8ff37ec373f25d0c8e1fc8f5e2ea60548a15cd712b796a7e1c1e76a1c'
  }

  get asV956(): {currencyId: v956.CurrencyId, minimumsAndMaximums: (v956.MinimumsMaximums | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.MinimumsMaximumsSet') === 'f552609c6ee0d2143c924b44a97eddacab478baaba3ea0a486d55f7cd1e25b5d'
  }

  get asV962(): {currencyId: v962.CurrencyId, minimumsAndMaximums: (v962.MinimumsMaximums | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpOngoingTimeUnitUpdateIntervalSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.OngoingTimeUnitUpdateIntervalSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.OngoingTimeUnitUpdateIntervalSet') === '7061925eaeb30fc939a1427f60dcfcb27d97f06b6d458f3bcf5f4e2a1aa68692'
  }

  get asV946(): {currencyId: v946.CurrencyId, interval: (number | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.OngoingTimeUnitUpdateIntervalSet') === 'd9edb4eb5247907aa546ee54d4a2d48b1597b24e04a1dff8cc0f783bbb8101d8'
  }

  get asV956(): {currencyId: v956.CurrencyId, interval: (number | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.OngoingTimeUnitUpdateIntervalSet') === 'aa32aed08ced0634099e4008a04bfaa3f6e40a475a5e21cb7220b9a7885615f9'
  }

  get asV962(): {currencyId: v962.CurrencyId, interval: (number | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpOperateOriginSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.OperateOriginSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.OperateOriginSet') === '81f13ba97b337b2399c4e1b5c290e65f809a9f6cca629c63e44903ef6b14fe5e'
  }

  get asV940(): {currencyId: v940.CurrencyId, operator: (Uint8Array | undefined)} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.OperateOriginSet') === 'c6ec0c634cc8ab68a1bff59ae9082b3aec333adfeeaf9a1550e9340afd849b28'
  }

  get asV956(): {currencyId: v956.CurrencyId, operator: (Uint8Array | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.OperateOriginSet') === '0606d51bb96206718711b8748a38675cd3940464a73f4edcebef18608a9c727c'
  }

  get asV962(): {currencyId: v962.CurrencyId, operator: (Uint8Array | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpPayoutEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.Payout')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.Payout') === '5605ae5077651f5fb27c7143120e81e51576b59e9ba72d942bc69f978d4f2d3d'
  }

  get asV940(): {currencyId: v940.CurrencyId, validator: v940.V1MultiLocation, timeUnit: (v940.TimeUnit | undefined)} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.Payout') === '3c3f43ca3f7d2786098c09cbcb461350ac6e01591de517cad4e49029a5ff5e74'
  }

  get asV946(): {currencyId: v946.CurrencyId, validator: v946.V1MultiLocation, timeUnit: (v946.TimeUnit | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.Payout') === 'ac0a2612e4b07701491b6f2d411e9d4074a4bc42ddda4d0139cc9dc2d10b4f67'
  }

  get asV956(): {currencyId: v956.CurrencyId, validator: v956.V1MultiLocation, timeUnit: (v956.TimeUnit | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.Payout') === 'a707007cb810cc2f6d6e942d4bb7769651034ee41e5dc34994116339930e399b'
  }

  get asV962(): {currencyId: v962.CurrencyId, validator: v962.V1MultiLocation, timeUnit: (v962.TimeUnit | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpPoolTokenDecreasedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.PoolTokenDecreased')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.PoolTokenDecreased') === 'fb74ac0b509ccc4ba0a0a8c76b1d93b47e94e26a4e8bd00cccfd6e942dec94dc'
  }

  get asV940(): {currencyId: v940.CurrencyId, amount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.PoolTokenDecreased') === '9973de28184b93659d1619cd352bac6b1317cebd81b60926fcec338344025263'
  }

  get asV956(): {currencyId: v956.CurrencyId, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.PoolTokenDecreased') === 'c635eaaf52ffe6f13bfd2bf1acd062484cf4314b6a2baec7ae9aee7341109498'
  }

  get asV962(): {currencyId: v962.CurrencyId, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpPoolTokenIncreasedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.PoolTokenIncreased')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.PoolTokenIncreased') === 'fb74ac0b509ccc4ba0a0a8c76b1d93b47e94e26a4e8bd00cccfd6e942dec94dc'
  }

  get asV940(): {currencyId: v940.CurrencyId, amount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.PoolTokenIncreased') === '9973de28184b93659d1619cd352bac6b1317cebd81b60926fcec338344025263'
  }

  get asV956(): {currencyId: v956.CurrencyId, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.PoolTokenIncreased') === 'c635eaaf52ffe6f13bfd2bf1acd062484cf4314b6a2baec7ae9aee7341109498'
  }

  get asV962(): {currencyId: v962.CurrencyId, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpRefundEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.Refund')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.Refund') === '278a533ba21d2c704228ed7f93dca1f512f42bc424ea4ad38a31295c788e7a05'
  }

  get asV940(): {currencyId: v940.CurrencyId, timeUnit: v940.TimeUnit, index: number, amount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.Refund') === '93b9391caf8b48d8184b3ed0e6a5cca98c1e9e4906d3cf5e9f85fe3f41de290b'
  }

  get asV946(): {currencyId: v946.CurrencyId, timeUnit: v946.TimeUnit, index: number, amount: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.Refund') === '9c4a8aa77f0bff27bfbc1d88c6aec391350e8ea5566922b6b91c4a23f54c8dec'
  }

  get asV956(): {currencyId: v956.CurrencyId, timeUnit: v956.TimeUnit, index: number, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.Refund') === '5b16cceb7b4b4dbd52892e0caf48bc63ee0f9e8c1d4b341a2a6f81908b6cf903'
  }

  get asV962(): {currencyId: v962.CurrencyId, timeUnit: v962.TimeUnit, index: number, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpSupplementFeeAccountWhitelistAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.SupplementFeeAccountWhitelistAdded')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.SupplementFeeAccountWhitelistAdded') === '9d021e63f24596510d85764848b1d886266574ab6e15db483fc8c5275e1b851b'
  }

  get asV946(): {currencyId: v946.CurrencyId, who: v946.V1MultiLocation} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.SupplementFeeAccountWhitelistAdded') === 'a7ba15ac327ecdd5973b4b5f69588f7e5efcd1c575f7417d1bff79d220c5a9e8'
  }

  get asV956(): {currencyId: v956.CurrencyId, who: v956.V1MultiLocation} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.SupplementFeeAccountWhitelistAdded') === '8bce49f5614ac91e8dd1d99bc3b0ec4599a2e166b774ace6466afe55e03dd498'
  }

  get asV962(): {currencyId: v962.CurrencyId, who: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpSupplementFeeAccountWhitelistRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.SupplementFeeAccountWhitelistRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.SupplementFeeAccountWhitelistRemoved') === '9d021e63f24596510d85764848b1d886266574ab6e15db483fc8c5275e1b851b'
  }

  get asV946(): {currencyId: v946.CurrencyId, who: v946.V1MultiLocation} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.SupplementFeeAccountWhitelistRemoved') === 'a7ba15ac327ecdd5973b4b5f69588f7e5efcd1c575f7417d1bff79d220c5a9e8'
  }

  get asV956(): {currencyId: v956.CurrencyId, who: v956.V1MultiLocation} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.SupplementFeeAccountWhitelistRemoved') === '8bce49f5614ac91e8dd1d99bc3b0ec4599a2e166b774ace6466afe55e03dd498'
  }

  get asV962(): {currencyId: v962.CurrencyId, who: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpTimeUnitUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.TimeUnitUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.TimeUnitUpdated') === '33e57e30c2474276b3ddf3f1a8c8bb0ec7761d4d36035f4d1811f57f8f0282da'
  }

  get asV940(): {currencyId: v940.CurrencyId, old: v940.TimeUnit, new: v940.TimeUnit} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.TimeUnitUpdated') === '88330feb256d736ad38113a85cc6932c2523617c35f2986a3bd4ff5aaea212bc'
  }

  get asV946(): {currencyId: v946.CurrencyId, old: (v946.TimeUnit | undefined), new: v946.TimeUnit} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.TimeUnitUpdated') === '256c44967ff0d02bbe6f3aef01781d07ab51cfea672fcd9fce4975f094d199f8'
  }

  get asV956(): {currencyId: v956.CurrencyId, old: (v956.TimeUnit | undefined), new: v956.TimeUnit} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.TimeUnitUpdated') === '6eb966117b14b8d84dcd56cbf0a8f47b3289ccf3301cadae9cf064ce5088b56e'
  }

  get asV962(): {currencyId: v962.CurrencyId, old: (v962.TimeUnit | undefined), new: v962.TimeUnit} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpTransferBackEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.TransferBack')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.TransferBack') === '12655dc5a074112a9038ec8c37591bf78e4ed21ad758efab27357bc2f79fc658'
  }

  get asV940(): {currencyId: v940.CurrencyId, from: v940.V1MultiLocation, to: v940.V1MultiLocation, amount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.TransferBack') === '0cef9902969904fdaa17a23908f4655a96ba771cbc7586fa7180d0f54e0eca64'
  }

  get asV956(): {currencyId: v956.CurrencyId, from: v956.V1MultiLocation, to: v956.V1MultiLocation, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.TransferBack') === 'd446d62d68f5e0230a346e9eafefd2ea3c3b65300a2401e834e13ec3f82ea2af'
  }

  get asV962(): {currencyId: v962.CurrencyId, from: v962.V1MultiLocation, to: v962.V1MultiLocation, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpTransferToEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.TransferTo')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.TransferTo') === '12655dc5a074112a9038ec8c37591bf78e4ed21ad758efab27357bc2f79fc658'
  }

  get asV940(): {currencyId: v940.CurrencyId, from: v940.V1MultiLocation, to: v940.V1MultiLocation, amount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.TransferTo') === '0cef9902969904fdaa17a23908f4655a96ba771cbc7586fa7180d0f54e0eca64'
  }

  get asV956(): {currencyId: v956.CurrencyId, from: v956.V1MultiLocation, to: v956.V1MultiLocation, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.TransferTo') === 'd446d62d68f5e0230a346e9eafefd2ea3c3b65300a2401e834e13ec3f82ea2af'
  }

  get asV962(): {currencyId: v962.CurrencyId, from: v962.V1MultiLocation, to: v962.V1MultiLocation, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpUndelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.Undelegated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.Undelegated') === '255c7049e246b91ee76d9430a574946ba93885c856d3e53a328389958bbccbe1'
  }

  get asV940(): {currencyId: v940.CurrencyId, delegatorId: v940.V1MultiLocation, targets: v940.V1MultiLocation[], queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.Undelegated') === '080ed1b356f73241e915424c795035ce68d842286b520103f95d7b2026b63fe2'
  }

  get asV956(): {currencyId: v956.CurrencyId, delegatorId: v956.V1MultiLocation, targets: v956.V1MultiLocation[], queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.Undelegated') === '3af2567c9084b243a12ac2222b42989b2ac9265071f9b33a5a99d6383b1563fe'
  }

  get asV962(): {currencyId: v962.CurrencyId, delegatorId: v962.V1MultiLocation, targets: v962.V1MultiLocation[], queryId: bigint, queryIdHash: Uint8Array} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpValidatorsAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.ValidatorsAdded')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsAdded') === '329fe621702dccde55ccd2733237424195aacd68d1273e8ff49b7fcb78173f58'
  }

  get asV940(): {currencyId: v940.CurrencyId, validatorId: v940.V1MultiLocation} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsAdded') === 'e9aa8e5bce398d66c46a9936fc3bd19c40d10579aca877ab29915a47dbbbb94e'
  }

  get asV956(): {currencyId: v956.CurrencyId, validatorId: v956.V1MultiLocation} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsAdded') === '559a1f70b67172ceb9cba17397f80482a5340d84a7221d75af06fdfdae489d52'
  }

  get asV962(): {currencyId: v962.CurrencyId, validatorId: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpValidatorsByDelegatorQueryResponseConfirmedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.ValidatorsByDelegatorQueryResponseConfirmed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsByDelegatorQueryResponseConfirmed') === '16281c784360f4cc4dface3304e3ef6aaa5a08f072f676e040042f408c638d28'
  }

  get asV940(): {queryId: bigint, entry: v940.ValidatorsByDelegatorUpdateEntry} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsByDelegatorQueryResponseConfirmed') === '30c6b6efcc79329f0872a1004d1bc333939f69f56a26128c949fcca4612c67f7'
  }

  get asV956(): {queryId: bigint, entry: v956.ValidatorsByDelegatorUpdateEntry} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsByDelegatorQueryResponseConfirmed') === '5fe5b7410bfd205d50441f0a5911ba5b4ffc5f03c42b8f7bee8049aae1d0cffd'
  }

  get asV962(): {queryId: bigint, entry: v962.ValidatorsByDelegatorUpdateEntry} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpValidatorsByDelegatorQueryResponseFailSuccessfullyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.ValidatorsByDelegatorQueryResponseFailSuccessfully')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsByDelegatorQueryResponseFailSuccessfully') === '7173deafe34d70ded9e7b845f6a1e223f3ba2dd506fd01ad6df32f6835032bbd'
  }

  get asV940(): {queryId: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpValidatorsByDelegatorSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.ValidatorsByDelegatorSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsByDelegatorSet') === '625f10df8061a05767f738a334f014e633131826d2a93bf4fccbdaf5fdeb4dbe'
  }

  get asV940(): {currencyId: v940.CurrencyId, validatorsList: [v940.V1MultiLocation, Uint8Array][]} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsByDelegatorSet') === '5134d20fb35f9385367a72ae1b0115bf2e7a83e550dbdaad801195ac82c8595d'
  }

  get asV956(): {currencyId: v956.CurrencyId, validatorsList: [v956.V1MultiLocation, Uint8Array][]} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsByDelegatorSet') === 'a67ea82667fb9678847b547a713f774dfebbaefb8976ee31eb8055e182f41d0f'
  }

  get asV962(): {currencyId: v962.CurrencyId, validatorsList: [v962.V1MultiLocation, Uint8Array][], delegatorId: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpValidatorsRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.ValidatorsRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsRemoved') === '329fe621702dccde55ccd2733237424195aacd68d1273e8ff49b7fcb78173f58'
  }

  get asV940(): {currencyId: v940.CurrencyId, validatorId: v940.V1MultiLocation} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsRemoved') === 'e9aa8e5bce398d66c46a9936fc3bd19c40d10579aca877ab29915a47dbbbb94e'
  }

  get asV956(): {currencyId: v956.CurrencyId, validatorId: v956.V1MultiLocation} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.ValidatorsRemoved') === '559a1f70b67172ceb9cba17397f80482a5340d84a7221d75af06fdfdae489d52'
  }

  get asV962(): {currencyId: v962.CurrencyId, validatorId: v962.V1MultiLocation} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SlpXcmDestWeightAndFeeSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Slp.XcmDestWeightAndFeeSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('Slp.XcmDestWeightAndFeeSet') === 'a6c711476235a51de17a18c0c8a51beaaf3baa8f86c174edb3b1899c287159c6'
  }

  get asV940(): {currencyId: v940.CurrencyId, operation: v940.XcmOperation, weightAndFee: ([bigint, bigint] | undefined)} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('Slp.XcmDestWeightAndFeeSet') === '4f8eeb516761ccda9e0c60e40a82de80dfce332689f485cffb05e4fcb22a45e8'
  }

  get asV946(): {currencyId: v946.CurrencyId, operation: v946.XcmOperation, weightAndFee: ([bigint, bigint] | undefined)} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('Slp.XcmDestWeightAndFeeSet') === 'e96c853b5eebe6612d712fffced0b346f975a77ae4351d61d69a105802884c67'
  }

  get asV956(): {currencyId: v956.CurrencyId, operation: v956.XcmOperation, weightAndFee: ([bigint, bigint] | undefined)} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('Slp.XcmDestWeightAndFeeSet') === '10243cb94a552f540ef470665b730d3f28017ec4b5396e690d81533882171d2d'
  }

  get asV962(): {currencyId: v962.CurrencyId, operation: v962.XcmOperation, weightAndFee: ([bigint, bigint] | undefined)} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoKeyChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.KeyChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The \[sudoer\] just switched identity; the old key is supplied.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  The \[sudoer\] just switched identity; the old key is supplied.
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.Sudid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A sudo just took place. \[result\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Sudo.Sudid') === '6c4668c24588d31e73eba9c1b2a2561e09ac981a1ceb3c9fefab4194ae44ffd4'
  }

  /**
   *  A sudo just took place. \[result\]
   */
  get asV1(): Result<null, v1.DispatchError> {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudoAsDoneEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.SudoAsDone')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A sudo just took place. \[result\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Sudo.SudoAsDone') === '6c4668c24588d31e73eba9c1b2a2561e09ac981a1ceb3c9fefab4194ae44ffd4'
  }

  /**
   *  A sudo just took place. \[result\]
   */
  get asV1(): Result<null, v1.DispatchError> {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemCodeUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.CodeUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  `:code` was updated.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  `:code` was updated.
   */
  get asV1(): null {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An extrinsic failed. \[error, info\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '8f2e90e6aab8eb714300f529bf2c1959ca0fa57534b7afcfe92932be302ba337'
  }

  /**
   *  An extrinsic failed. \[error, info\]
   */
  get asV1(): [v1.DispatchError, v1.DispatchInfo] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed. \[error, info\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '0995776ff5e8d5f8662a6841d8556c830acc58fbb01f76a13b6aa4222b987150'
  }

  /**
   * An extrinsic failed. \[error, info\]
   */
  get asV906(): [v906.DispatchError, v906.DispatchInfo] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '2dcccc93ed3f24e5499fe9480fe0a61a806d25bb5fc0d10a1074e360693768e7'
  }

  /**
   * An extrinsic failed.
   */
  get asV926(): {dispatchError: v926.DispatchError, dispatchInfo: v926.DispatchInfo} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
  }

  /**
   * An extrinsic failed.
   */
  get asV932(): {dispatchError: v932.DispatchError, dispatchInfo: v932.DispatchInfo} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
  }

  /**
   * An extrinsic failed.
   */
  get asV942(): {dispatchError: v942.DispatchError, dispatchInfo: v942.DispatchInfo} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicSuccess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An extrinsic completed successfully. \[info\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
  }

  /**
   *  An extrinsic completed successfully. \[info\]
   */
  get asV1(): v1.DispatchInfo {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic completed successfully.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
  }

  /**
   * An extrinsic completed successfully.
   */
  get asV926(): {dispatchInfo: v926.DispatchInfo} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemKilledAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.KilledAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An \[account\] was reaped.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  An \[account\] was reaped.
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was reaped.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * An account was reaped.
   */
  get asV926(): {account: Uint8Array} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemNewAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.NewAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A new \[account\] was created.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A new \[account\] was created.
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new account was created.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * A new account was created.
   */
  get asV926(): {account: Uint8Array} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemRemarkedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.Remarked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  On on-chain remark happened. \[origin, remark_hash\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('System.Remarked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
  }

  /**
   *  On on-chain remark happened. \[origin, remark_hash\]
   */
  get asV1(): [Uint8Array, Uint8Array] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * On on-chain remark happened.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
  }

  /**
   * On on-chain remark happened.
   */
  get asV926(): {sender: Uint8Array, hash: Uint8Array} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemMakerChargedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemMaker.Charged')
    this._chain = ctx._chain
    this.event = event
  }

  get isV958(): boolean {
    return this._chain.getEventHash('SystemMaker.Charged') === 'bd9bccbfe8a5cf678602d782f6ff377743de77230411374c991464458ebaa3bc'
  }

  get asV958(): {who: Uint8Array, currencyId: v958.CurrencyId, value: bigint} {
    assert(this.isV958)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemMaker.Charged') === '626b65414bfaa2f36f9883dad86a36cea5a98dd67fffdf87d8e82483ccf5cb8b'
  }

  get asV962(): {who: Uint8Array, currencyId: v962.CurrencyId, value: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemMakerClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemMaker.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV958(): boolean {
    return this._chain.getEventHash('SystemMaker.Closed') === '7d8a3e7d779f11164e04f6a37a9fa89298621358fdfcab3b535b4b783a6c8037'
  }

  get asV958(): {currencyId: v958.CurrencyId} {
    assert(this.isV958)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemMaker.Closed') === '0a9d3c015dc155696ea30a98c73282f04dad76fa0e64157d75dc0b4c7d3bfec6'
  }

  get asV962(): {currencyId: v962.CurrencyId} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemMakerConfigSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemMaker.ConfigSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV958(): boolean {
    return this._chain.getEventHash('SystemMaker.ConfigSet') === 'da300b127395be32621f273dbb938214f300b404147554b4d59ebdc50fe05166'
  }

  get asV958(): {currencyId: v958.CurrencyId, info: v958.Info} {
    assert(this.isV958)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemMaker.ConfigSet') === 'a703a6d06ec86f1897a89f7a3a5c1b58e6db2c3fdb9929c643f32b4d5760e4ac'
  }

  get asV962(): {currencyId: v962.CurrencyId, info: v962.Info} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemMakerPaidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemMaker.Paid')
    this._chain = ctx._chain
    this.event = event
  }

  get isV958(): boolean {
    return this._chain.getEventHash('SystemMaker.Paid') === '4b07a2f7ad01ad9a9a7738fb7dca3b76067261e92bd0a6f6cae579411684dfd3'
  }

  get asV958(): {currencyId: v958.CurrencyId, value: bigint} {
    assert(this.isV958)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemMaker.Paid') === '04cf6294238c766321d8c4574741d0f78b501f24504605089904aac4485400f1'
  }

  get asV962(): {currencyId: v962.CurrencyId, value: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemMakerRedeemFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemMaker.RedeemFailed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV958(): boolean {
    return this._chain.getEventHash('SystemMaker.RedeemFailed') === '09d3325da309917a38df3b4b905e72adb444a29f08af55488858e55ef3fe6650'
  }

  get asV958(): {vcurrencyId: v958.CurrencyId, amount: bigint} {
    assert(this.isV958)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemMaker.RedeemFailed') === 'd227cf9f7103f3159f9dd637aacaa5272fac537f9d258a489a55e1d298d0f6b2'
  }

  get asV962(): {vcurrencyId: v962.CurrencyId, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingDepositFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.DepositFailed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.DepositFailed') === '5578000d0fa0130780f783c6cfde9bf610f4ed869ec4e0a188412ad8f398ac4a'
  }

  get asV946(): {token: v946.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.DepositFailed') === '94e89f6cbdd0af02b946d7e7ae0e11a07ed410b5f158799f8ea7122475f50715'
  }

  get asV956(): {token: v956.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.DepositFailed') === '0e1315ed95534b7e306af1559bf8a6b86750fdc9e065478bc97aa66f6ddefbac'
  }

  get asV962(): {token: v962.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingMintFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.MintFailed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.MintFailed') === '5578000d0fa0130780f783c6cfde9bf610f4ed869ec4e0a188412ad8f398ac4a'
  }

  get asV946(): {token: v946.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.MintFailed') === '94e89f6cbdd0af02b946d7e7ae0e11a07ed410b5f158799f8ea7122475f50715'
  }

  get asV956(): {token: v956.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.MintFailed') === '0e1315ed95534b7e306af1559bf8a6b86750fdc9e065478bc97aa66f6ddefbac'
  }

  get asV962(): {token: v962.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingMintSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.MintSuccess')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.MintSuccess') === '5578000d0fa0130780f783c6cfde9bf610f4ed869ec4e0a188412ad8f398ac4a'
  }

  get asV946(): {token: v946.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.MintSuccess') === '94e89f6cbdd0af02b946d7e7ae0e11a07ed410b5f158799f8ea7122475f50715'
  }

  get asV956(): {token: v956.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.MintSuccess') === '0e1315ed95534b7e306af1559bf8a6b86750fdc9e065478bc97aa66f6ddefbac'
  }

  get asV962(): {token: v962.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingNewRoundEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.NewRound')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.NewRound') === '9bffb7d177f8fe286b1c6120e6df5abf75638f9c32c41a5d48363e7066f34b90'
  }

  get asV946(): {current: number, first: number, length: number} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingPayoutEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.Payout')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.Payout') === 'f659e905e538d2d92d33340c7b9488cfb8d053e28c5b4c272c21d46492ad4ac1'
  }

  get asV946(): {token: v946.CurrencyId, vtoken: v946.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, free: bigint, vfree: bigint, shadow: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.Payout') === '46f405dbb0403578c5a0a02242c8a801657f69566cc3d4fee74d97645de28fc2'
  }

  get asV956(): {token: v956.CurrencyId, vtoken: v956.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, free: bigint, vfree: bigint, shadow: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.Payout') === '40eabe8ff421e26b399e6af6f646f852e7dd9c514ba10cfbfe13eb4f197b6589'
  }

  get asV962(): {token: v962.CurrencyId, vtoken: v962.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, free: bigint, vfree: bigint, shadow: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingRedeemFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.RedeemFailed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.RedeemFailed') === '5578000d0fa0130780f783c6cfde9bf610f4ed869ec4e0a188412ad8f398ac4a'
  }

  get asV946(): {token: v946.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.RedeemFailed') === '94e89f6cbdd0af02b946d7e7ae0e11a07ed410b5f158799f8ea7122475f50715'
  }

  get asV956(): {token: v956.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.RedeemFailed') === '0e1315ed95534b7e306af1559bf8a6b86750fdc9e065478bc97aa66f6ddefbac'
  }

  get asV962(): {token: v962.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingRedeemedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.Redeemed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.Redeemed') === '5578000d0fa0130780f783c6cfde9bf610f4ed869ec4e0a188412ad8f398ac4a'
  }

  get asV946(): {token: v946.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.Redeemed') === '94e89f6cbdd0af02b946d7e7ae0e11a07ed410b5f158799f8ea7122475f50715'
  }

  get asV956(): {token: v956.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.Redeemed') === '0e1315ed95534b7e306af1559bf8a6b86750fdc9e065478bc97aa66f6ddefbac'
  }

  get asV962(): {token: v962.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingTokenConfigChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.TokenConfigChanged')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.TokenConfigChanged') === '2b577688652c2602a1e45e08fec6fbb2601f7fecd62b8b955b88f50eff3081d3'
  }

  get asV946(): {token: v946.CurrencyId, execDelay: number, systemStakableFarmingRate: number, addOrSub: boolean, systemStakableBase: bigint, farmingPoolids: number[], lptokenRates: number[]} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.TokenConfigChanged') === 'f7c2b8641450475563267aee4813c04167969693d8c91d53432f6c40fd010399'
  }

  get asV956(): {token: v956.CurrencyId, execDelay: number, systemStakableFarmingRate: number, addOrSub: boolean, systemStakableBase: bigint, farmingPoolids: number[], lptokenRates: number[]} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.TokenConfigChanged') === 'e4de2de634f8cf98869d378298eb998783e989930ce38c9566f1136bd415d7be'
  }

  get asV962(): {token: v962.CurrencyId, execDelay: number, systemStakableFarmingRate: number, addOrSub: boolean, systemStakableBase: bigint, farmingPoolids: number[], lptokenRates: number[]} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingTokenInfoRefreshedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.TokenInfoRefreshed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.TokenInfoRefreshed') === '64f6b79ffb8474857cb1be3706cdc0e6acbf3e7375c5a43cd8e81b9d2cd79e43'
  }

  get asV946(): {token: v946.CurrencyId} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.TokenInfoRefreshed') === '40f4594ef0b65d4664f6f785a585d23a5ec2b86eb9df238440ce48917caad9e3'
  }

  get asV956(): {token: v956.CurrencyId} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.TokenInfoRefreshed') === 'ca24a795764a83be845d4091cbc7dceb56ecba7f3253c59683cc66c303fe45ff'
  }

  get asV962(): {token: v962.CurrencyId} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingVtokenNotFoundEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.VtokenNotFound')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.VtokenNotFound') === '64f6b79ffb8474857cb1be3706cdc0e6acbf3e7375c5a43cd8e81b9d2cd79e43'
  }

  get asV946(): {token: v946.CurrencyId} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.VtokenNotFound') === '40f4594ef0b65d4664f6f785a585d23a5ec2b86eb9df238440ce48917caad9e3'
  }

  get asV956(): {token: v956.CurrencyId} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.VtokenNotFound') === 'ca24a795764a83be845d4091cbc7dceb56ecba7f3253c59683cc66c303fe45ff'
  }

  get asV962(): {token: v962.CurrencyId} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingWithdrawFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.WithdrawFailed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.WithdrawFailed') === '5578000d0fa0130780f783c6cfde9bf610f4ed869ec4e0a188412ad8f398ac4a'
  }

  get asV946(): {token: v946.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.WithdrawFailed') === '94e89f6cbdd0af02b946d7e7ae0e11a07ed410b5f158799f8ea7122475f50715'
  }

  get asV956(): {token: v956.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.WithdrawFailed') === '0e1315ed95534b7e306af1559bf8a6b86750fdc9e065478bc97aa66f6ddefbac'
  }

  get asV962(): {token: v962.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemStakingWithdrawSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'SystemStaking.WithdrawSuccess')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('SystemStaking.WithdrawSuccess') === '5578000d0fa0130780f783c6cfde9bf610f4ed869ec4e0a188412ad8f398ac4a'
  }

  get asV946(): {token: v946.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('SystemStaking.WithdrawSuccess') === '94e89f6cbdd0af02b946d7e7ae0e11a07ed410b5f158799f8ea7122475f50715'
  }

  get asV956(): {token: v956.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('SystemStaking.WithdrawSuccess') === '0e1315ed95534b7e306af1559bf8a6b86750fdc9e065478bc97aa66f6ddefbac'
  }

  get asV962(): {token: v962.CurrencyId, amount: bigint, farmingStakingAmount: bigint, systemStakableAmount: bigint, systemShadowAmount: bigint, pendingRedeemAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV916(): {proposalHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV803(): [Uint8Array, number, number] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV916(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV916(): {proposalHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV803(): [Uint8Array, Result<null, v803.DispatchError>] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV906(): [Uint8Array, Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV916(): {proposalHash: Uint8Array, result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV926(): {proposalHash: Uint8Array, result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV932(): {proposalHash: Uint8Array, result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV942(): {proposalHash: Uint8Array, result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeMemberExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.MemberExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A single member did some action; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A single member did some action; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV803(): [Uint8Array, Result<null, v803.DispatchError>] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV906(): [Uint8Array, Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV916(): {proposalHash: Uint8Array, result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV926(): {proposalHash: Uint8Array, result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV932(): {proposalHash: Uint8Array, result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV942(): {proposalHash: Uint8Array, result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV803(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV916(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV803(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV916(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipDummyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.Dummy')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Phantom member, never used.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalMembership.Dummy') === '6ea0d8c3ebb0c80adfebfa7747cde2554918946196e670d302d2f5d3d5d43a0b'
  }

  /**
   *  Phantom member, never used.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Phantom member, never used.
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TechnicalMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Phantom member, never used.
   */
  get asV906(): null {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipKeyChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.KeyChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  One of the members' keys changed.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  One of the members' keys changed.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipMemberAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.MemberAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The given member was added; see the transaction for who.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  The given member was added; see the transaction for who.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipMemberRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.MemberRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The given member was removed; see the transaction for who.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  The given member was removed; see the transaction for who.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipMembersResetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.MembersReset')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The membership was reset; see the transaction for who the new set is.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  The membership was reset; see the transaction for who the new set is.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipMembersSwappedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.MembersSwapped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Two members were swapped; see the transaction for who.
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Two members were swapped; see the transaction for who.
   */
  get asV803(): null {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsNewTipEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.NewTip')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Tips.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new tip suggestion has been opened.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A new tip suggestion has been opened.
   */
  get asV916(): {tipHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipClosed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Tips.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get asV803(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A tip suggestion has been closed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
  }

  /**
   * A tip suggestion has been closed.
   */
  get asV916(): {tipHash: Uint8Array, who: Uint8Array, payout: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipClosingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipClosing')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A tip suggestion has reached threshold and is closing. \[tip_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Tips.TipClosing') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A tip suggestion has reached threshold and is closing. \[tip_hash\]
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A tip suggestion has reached threshold and is closing.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tips.TipClosing') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A tip suggestion has reached threshold and is closing.
   */
  get asV916(): {tipHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipRetractedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipRetracted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Tips.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get asV803(): Uint8Array {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A tip suggestion has been retracted.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A tip suggestion has been retracted.
   */
  get asV916(): {tipHash: Uint8Array} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipSlashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Tips.TipSlashed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get asV803(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A tip suggestion has been slashed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
  }

  /**
   * A tip suggestion has been slashed.
   */
  get asV916(): {tipHash: Uint8Array, finder: Uint8Array, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokenIssuerAddedToIssueListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TokenIssuer.AddedToIssueList')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get isV902(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToIssueList') === '2b98a5a43c312ec8fa200b092b9c552c8844dde949575ba25a6db7810d1493bf'
  }

  /**
   *  Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get asV902(): [Uint8Array, v902.CurrencyId] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToIssueList') === 'd2a800e1e7004e7f948ae2c27ed1e4f606c630aa5449d3ebc26afe54109eda64'
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get asV906(): [Uint8Array, v906.CurrencyId] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToIssueList') === '799f4c33f735ccf5a5ff78da00b588873355acdeea51227d06b6666192ccfb70'
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get asV916(): [Uint8Array, v916.CurrencyId] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get isV920(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToIssueList') === '67eb2e9861c8326803cc0c63a530d4b06a554be86db1efea18be5393dde2b87a'
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get asV920(): [Uint8Array, v920.CurrencyId] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get isV932(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToIssueList') === 'a207f1c46df2c65aa268d643252d75cd625bcb281c134c4fb2179bb7e5adaf77'
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get asV932(): [Uint8Array, v932.CurrencyId] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get isV956(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToIssueList') === '28ee367519b04eb533141e322226a22fb9ec201987b20cd45f0cc0a81fb3afc3'
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get asV956(): [Uint8Array, v956.CurrencyId] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get isV962(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToIssueList') === '5d78c11d0c4f4a9ba3b0cc21979717b0d46512f021dfaa54758e40c24560ac05'
  }

  /**
   * Successful added a new account to the issue whitelist. \[account, currency_id]\
   */
  get asV962(): [Uint8Array, v962.CurrencyId] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokenIssuerAddedToTransferListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TokenIssuer.AddedToTransferList')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get isV902(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToTransferList') === '2b98a5a43c312ec8fa200b092b9c552c8844dde949575ba25a6db7810d1493bf'
  }

  /**
   *  Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get asV902(): [Uint8Array, v902.CurrencyId] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToTransferList') === 'd2a800e1e7004e7f948ae2c27ed1e4f606c630aa5449d3ebc26afe54109eda64'
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get asV906(): [Uint8Array, v906.CurrencyId] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToTransferList') === '799f4c33f735ccf5a5ff78da00b588873355acdeea51227d06b6666192ccfb70'
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get asV916(): [Uint8Array, v916.CurrencyId] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get isV920(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToTransferList') === '67eb2e9861c8326803cc0c63a530d4b06a554be86db1efea18be5393dde2b87a'
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get asV920(): [Uint8Array, v920.CurrencyId] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get isV932(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToTransferList') === 'a207f1c46df2c65aa268d643252d75cd625bcb281c134c4fb2179bb7e5adaf77'
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get asV932(): [Uint8Array, v932.CurrencyId] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get isV956(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToTransferList') === '28ee367519b04eb533141e322226a22fb9ec201987b20cd45f0cc0a81fb3afc3'
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get asV956(): [Uint8Array, v956.CurrencyId] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get isV962(): boolean {
    return this._chain.getEventHash('TokenIssuer.AddedToTransferList') === '5d78c11d0c4f4a9ba3b0cc21979717b0d46512f021dfaa54758e40c24560ac05'
  }

  /**
   * Successful added a new account to the transfer whitelist. \[account, currency_id]\
   */
  get asV962(): [Uint8Array, v962.CurrencyId] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokenIssuerIssuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TokenIssuer.Issued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Token issue success, \[currency_id, dest, amount\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('TokenIssuer.Issued') === 'b43919f820e7c83ed251dc81fec93291ea25f41fdea1117245aa83959511b142'
  }

  /**
   *  Token issue success, \[currency_id, dest, amount\]
   */
  get asV902(): [Uint8Array, v902.CurrencyId, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TokenIssuer.Issued') === '36025bd2ab2093a15829940af43fd07bd11dc554d19c84b1d9614325428e334c'
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get asV906(): [Uint8Array, v906.CurrencyId, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TokenIssuer.Issued') === '7f3cfe25fe3c882c8e262da24337b0761c3e2fa954c93a8d1981cd1c06493265'
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get asV916(): [Uint8Array, v916.CurrencyId, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('TokenIssuer.Issued') === 'a3c52ba10e54dfec7773bba338beadeaa05ce6f30d4a8386043059e9c15efc2e'
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get asV920(): [Uint8Array, v920.CurrencyId, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('TokenIssuer.Issued') === '4a87fa7f0fac65d18b451918f2974a82f522f4a72b6751006152097ce5cf733a'
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get asV932(): [Uint8Array, v932.CurrencyId, bigint] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('TokenIssuer.Issued') === '815ff438ba59c383213f0669f0718dfbf55141caec7f53a94f8b497b0018107d'
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get asV956(): [Uint8Array, v956.CurrencyId, bigint] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('TokenIssuer.Issued') === 'df345f1d7d09d3fe4c57fb8758229bb44aeb7555ec7a522770aa760450cb1ba5'
  }

  /**
   * Token issue success, \[currency_id, dest, amount\]
   */
  get asV962(): [Uint8Array, v962.CurrencyId, bigint] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokenIssuerRemovedFromIssueListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TokenIssuer.RemovedFromIssueList')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get isV902(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromIssueList') === '2b98a5a43c312ec8fa200b092b9c552c8844dde949575ba25a6db7810d1493bf'
  }

  /**
   *  Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get asV902(): [Uint8Array, v902.CurrencyId] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromIssueList') === 'd2a800e1e7004e7f948ae2c27ed1e4f606c630aa5449d3ebc26afe54109eda64'
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get asV906(): [Uint8Array, v906.CurrencyId] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromIssueList') === '799f4c33f735ccf5a5ff78da00b588873355acdeea51227d06b6666192ccfb70'
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get asV916(): [Uint8Array, v916.CurrencyId] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get isV920(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromIssueList') === '67eb2e9861c8326803cc0c63a530d4b06a554be86db1efea18be5393dde2b87a'
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get asV920(): [Uint8Array, v920.CurrencyId] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get isV932(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromIssueList') === 'a207f1c46df2c65aa268d643252d75cd625bcb281c134c4fb2179bb7e5adaf77'
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get asV932(): [Uint8Array, v932.CurrencyId] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get isV956(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromIssueList') === '28ee367519b04eb533141e322226a22fb9ec201987b20cd45f0cc0a81fb3afc3'
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get asV956(): [Uint8Array, v956.CurrencyId] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get isV962(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromIssueList') === '5d78c11d0c4f4a9ba3b0cc21979717b0d46512f021dfaa54758e40c24560ac05'
  }

  /**
   * Successful remove an account from the issue whitelist. \[account, currency_id]\
   */
  get asV962(): [Uint8Array, v962.CurrencyId] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokenIssuerRemovedFromTransferListEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TokenIssuer.RemovedFromTransferList')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get isV902(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromTransferList') === '2b98a5a43c312ec8fa200b092b9c552c8844dde949575ba25a6db7810d1493bf'
  }

  /**
   *  Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get asV902(): [Uint8Array, v902.CurrencyId] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromTransferList') === 'd2a800e1e7004e7f948ae2c27ed1e4f606c630aa5449d3ebc26afe54109eda64'
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get asV906(): [Uint8Array, v906.CurrencyId] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromTransferList') === '799f4c33f735ccf5a5ff78da00b588873355acdeea51227d06b6666192ccfb70'
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get asV916(): [Uint8Array, v916.CurrencyId] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get isV920(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromTransferList') === '67eb2e9861c8326803cc0c63a530d4b06a554be86db1efea18be5393dde2b87a'
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get asV920(): [Uint8Array, v920.CurrencyId] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get isV932(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromTransferList') === 'a207f1c46df2c65aa268d643252d75cd625bcb281c134c4fb2179bb7e5adaf77'
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get asV932(): [Uint8Array, v932.CurrencyId] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get isV956(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromTransferList') === '28ee367519b04eb533141e322226a22fb9ec201987b20cd45f0cc0a81fb3afc3'
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get asV956(): [Uint8Array, v956.CurrencyId] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get isV962(): boolean {
    return this._chain.getEventHash('TokenIssuer.RemovedFromTransferList') === '5d78c11d0c4f4a9ba3b0cc21979717b0d46512f021dfaa54758e40c24560ac05'
  }

  /**
   * Successful remove an account from the transfer whitelist. \[account, currency_id]\
   */
  get asV962(): [Uint8Array, v962.CurrencyId] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokenIssuerTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TokenIssuer.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('TokenIssuer.Transferred') === 'b3cce65fbbd7cdf294cc19234efd49bd8650bfbdb97ca04da97748203ed344b1'
  }

  /**
   *  Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get asV902(): [Uint8Array, Uint8Array, v902.CurrencyId, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TokenIssuer.Transferred') === 'd00227ac742360a2f8f41b1ab80d678ef9a0d80b8397a3e824a8cfd47d098039'
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get asV906(): [Uint8Array, Uint8Array, v906.CurrencyId, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TokenIssuer.Transferred') === 'a967674635cd52826d3952c5a29f02ed151cef0c882e1d6abaf7802bb1ab244b'
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get asV916(): [Uint8Array, Uint8Array, v916.CurrencyId, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('TokenIssuer.Transferred') === '66196b613ca24ad06c76ca46a2efc4f0827dcaf6d6052b483f8c966536649d65'
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get asV920(): [Uint8Array, Uint8Array, v920.CurrencyId, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('TokenIssuer.Transferred') === 'ba4ca2b65497562fbbb23327a8fdfd840271e54749a0200de0a6e736e9fe29e8'
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get asV932(): [Uint8Array, Uint8Array, v932.CurrencyId, bigint] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('TokenIssuer.Transferred') === 'f533ac3b6daa82e45814e4ad5cc58d83041162f098878967baff9f9d496fa36b'
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get asV956(): [Uint8Array, Uint8Array, v956.CurrencyId, bigint] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('TokenIssuer.Transferred') === '842ddd598b3be2f271ced443a034bee074eab3365ead62a064df165f8cc3c5e6'
  }

  /**
   * Token transferred success, \[origin, dest, currency_id, amount\]
   */
  get asV962(): [Uint8Array, Uint8Array, v962.CurrencyId, bigint] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A balance was set by root. \[who, free, reserved\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === 'd59167e6fa6e1cc5edfac472272cd823c1abb610b670fa1e42776213cea54ba0'
  }

  /**
   *  A balance was set by root. \[who, free, reserved\]
   */
  get asV802(): [v802.CurrencyId, Uint8Array, bigint, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === 'b87fd915e42bf43bed1c29ffa7cdd7aae8e66e9bf8abe2a534a275b495528515'
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === '7b8188ff76713954bd121ac1e9cc97d968b12ae8904fe84afa382f572339cb58'
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, bigint, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === 'f79ad22597c9a4713b2ce62aec1afbdd322af47866ae6f07f5cb89d18d995df8'
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, bigint, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === '42b44be6ddbd575235327ec8b73578a8e2b40e6035875cae6a91cb104548dd36'
  }

  /**
   * A balance was set by root.
   */
  get asV925(): {currencyId: v925.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === '3e7bcc7a9a0d905d187902778412f9eb8d6bc40ac232733b224250358aac576f'
  }

  /**
   * A balance was set by root.
   */
  get asV932(): {currencyId: v932.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root.
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === 'fdff760cb54afcd8db5c92b89fed1fb754f014d385f0e48e57bf6b914f8d03b5'
  }

  /**
   * A balance was set by root.
   */
  get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === '45992b0db96b3fb8c249d1f8892de429f3924228fad45b8e8c07f0b5c1b355a4'
  }

  /**
   * A balance was set by root.
   */
  get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Deposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Deposited some balance into an account
   */
  get isV944(): boolean {
    return this._chain.getEventHash('Tokens.Deposited') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
  }

  /**
   * Deposited some balance into an account
   */
  get asV944(): {currencyId: v944.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposited some balance into an account
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.Deposited') === '6e5a44d65de498f529521ebd2d4a29809dcb38591c6ceb5ff2cb8c9ad195aaaa'
  }

  /**
   * Deposited some balance into an account
   */
  get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposited some balance into an account
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.Deposited') === '8d097e22a8a65a807386a44e215b345bde223f175804b191c97bafcf19519fc0'
  }

  /**
   * Deposited some balance into an account
   */
  get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensDustLostEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.DustLost')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An account was removed whose balance was non-zero but below
   *  ExistentialDeposit, resulting in an outright loss. \[currency_id,
   *  account, balance\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === '5fe49bbf5bcd19bfb8c37d7852ab05b1cbbd0e438c461a23fe32d7acb477f8f5'
  }

  /**
   *  An account was removed whose balance was non-zero but below
   *  ExistentialDeposit, resulting in an outright loss. \[currency_id,
   *  account, balance\]
   */
  get asV802(): [v802.CurrencyId, Uint8Array, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss. \[currency_id,
   * account, balance\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === 'c8713a7005be0801e686127b1c9c719c8d70c657c9017663e38dc362fef7c1e4'
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss. \[currency_id,
   * account, balance\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss. \[currency_id,
   * account, balance\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === 'c98a9c0e43cee71e9a03eb050db2c25c457db7b4fa66a3b051f227316f7d5713'
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss. \[currency_id,
   * account, balance\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss. \[currency_id,
   * account, balance\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === '13b0bfa0829dd36324a53fafee814e18a21efab597ba6541e253f3d8a368fa86'
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss. \[currency_id,
   * account, balance\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === '57b29a04130eb9e4ed007338d13bdadd6994a860fc1e73492f3333999934a312'
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get asV925(): {currencyId: v925.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get asV932(): {currencyId: v932.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === '6e5a44d65de498f529521ebd2d4a29809dcb38591c6ceb5ff2cb8c9ad195aaaa'
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === '8d097e22a8a65a807386a44e215b345bde223f175804b191c97bafcf19519fc0'
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensEndowedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Endowed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An account was created with some free balance. \[currency_id,
   *  account, free_balance\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === '5fe49bbf5bcd19bfb8c37d7852ab05b1cbbd0e438c461a23fe32d7acb477f8f5'
  }

  /**
   *  An account was created with some free balance. \[currency_id,
   *  account, free_balance\]
   */
  get asV802(): [v802.CurrencyId, Uint8Array, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance. \[currency_id,
   * account, free_balance\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === 'c8713a7005be0801e686127b1c9c719c8d70c657c9017663e38dc362fef7c1e4'
  }

  /**
   * An account was created with some free balance. \[currency_id,
   * account, free_balance\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance. \[currency_id,
   * account, free_balance\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === 'c98a9c0e43cee71e9a03eb050db2c25c457db7b4fa66a3b051f227316f7d5713'
  }

  /**
   * An account was created with some free balance. \[currency_id,
   * account, free_balance\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance. \[currency_id,
   * account, free_balance\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === '13b0bfa0829dd36324a53fafee814e18a21efab597ba6541e253f3d8a368fa86'
  }

  /**
   * An account was created with some free balance. \[currency_id,
   * account, free_balance\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === '57b29a04130eb9e4ed007338d13bdadd6994a860fc1e73492f3333999934a312'
  }

  /**
   * An account was created with some free balance.
   */
  get asV925(): {currencyId: v925.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
  }

  /**
   * An account was created with some free balance.
   */
  get asV932(): {currencyId: v932.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance.
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === '6e5a44d65de498f529521ebd2d4a29809dcb38591c6ceb5ff2cb8c9ad195aaaa'
  }

  /**
   * An account was created with some free balance.
   */
  get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === '8d097e22a8a65a807386a44e215b345bde223f175804b191c97bafcf19519fc0'
  }

  /**
   * An account was created with some free balance.
   */
  get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensLockRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.LockRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some locked funds were unlocked
   */
  get isV944(): boolean {
    return this._chain.getEventHash('Tokens.LockRemoved') === '48a5d05012aec07de1dd2ab1afb65ae630b51748b418e63883beb0a10d5c0ffc'
  }

  /**
   * Some locked funds were unlocked
   */
  get asV944(): {lockId: Uint8Array, currencyId: v944.CurrencyId, who: Uint8Array} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some locked funds were unlocked
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.LockRemoved') === '191543dcd54cf30c7e365bba67b8f81235993e19e7c1997ce1e672c18114e00f'
  }

  /**
   * Some locked funds were unlocked
   */
  get asV956(): {lockId: Uint8Array, currencyId: v956.CurrencyId, who: Uint8Array} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some locked funds were unlocked
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.LockRemoved') === '041af14da6db24e3800236cc78e91d2876103e2761aa748ed49835288a0a444a'
  }

  /**
   * Some locked funds were unlocked
   */
  get asV962(): {lockId: Uint8Array, currencyId: v962.CurrencyId, who: Uint8Array} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensLockSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.LockSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some funds are locked
   */
  get isV944(): boolean {
    return this._chain.getEventHash('Tokens.LockSet') === '382a197c841266c87770926b29cd0151c521c2c5583b904e8c79b7e605589d7a'
  }

  /**
   * Some funds are locked
   */
  get asV944(): {lockId: Uint8Array, currencyId: v944.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some funds are locked
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.LockSet') === '8aa767fffa1c3b6c0ba265c6f6bff4596acdda1919ae58ccc7294317a418ddf3'
  }

  /**
   * Some funds are locked
   */
  get asV956(): {lockId: Uint8Array, currencyId: v956.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some funds are locked
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.LockSet') === '2b082460912edc3065add9274cbb7e4a75d8044429a3dec44e94b2804cceb769'
  }

  /**
   * Some funds are locked
   */
  get asV962(): {lockId: Uint8Array, currencyId: v962.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensRepatriatedReserveEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.RepatriatedReserve')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   * \[currency_id, from, to, amount_actually_moved, status\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tokens.RepatriatedReserve') === '0a0278c961e94a4d1507e7a9dfb6c03a720c738f3884072e1055a202db5758c9'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   * \[currency_id, from, to, amount_actually_moved, status\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, Uint8Array, bigint, v916.BalanceStatus] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   * \[currency_id, from, to, amount_actually_moved, status\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Tokens.RepatriatedReserve') === 'e71d7a60a636f597a7e3f5541afb5f9d46cdceaed5c1ff8368e734d3e5b12f4a'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   * \[currency_id, from, to, amount_actually_moved, status\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, Uint8Array, bigint, v920.BalanceStatus] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Tokens.RepatriatedReserve') === 'b5bd7c330cebcfd17bd719d876a6a5f2a33efb69b1623efc63761e8ee6afdc81'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get asV925(): {currencyId: v925.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, status: v925.BalanceStatus} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Tokens.RepatriatedReserve') === '44da2b325751c3dc51beb9b583c8966911e73db848c5068837c3f109027720b1'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get asV932(): {currencyId: v932.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, status: v932.BalanceStatus} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensReserveRepatriatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.ReserveRepatriated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get isV944(): boolean {
    return this._chain.getEventHash('Tokens.ReserveRepatriated') === '44da2b325751c3dc51beb9b583c8966911e73db848c5068837c3f109027720b1'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get asV944(): {currencyId: v944.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, status: v944.BalanceStatus} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.ReserveRepatriated') === '1d3169a2056b9159b59b486827bb65a42925bdf4196d356be5323f5a781e9e6e'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get asV956(): {currencyId: v956.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, status: v956.BalanceStatus} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.ReserveRepatriated') === '08d13a22ff7c651c2fa191dc823a10d683e37613ef1b81291da3382a9d80dc53'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get asV962(): {currencyId: v962.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint, status: v962.BalanceStatus} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some balance was reserved (moved from free to reserved).
   *  \[currency_id, who, value\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === '5fe49bbf5bcd19bfb8c37d7852ab05b1cbbd0e438c461a23fe32d7acb477f8f5'
  }

  /**
   *  Some balance was reserved (moved from free to reserved).
   *  \[currency_id, who, value\]
   */
  get asV802(): [v802.CurrencyId, Uint8Array, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   * \[currency_id, who, value\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === 'c8713a7005be0801e686127b1c9c719c8d70c657c9017663e38dc362fef7c1e4'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   * \[currency_id, who, value\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   * \[currency_id, who, value\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === 'c98a9c0e43cee71e9a03eb050db2c25c457db7b4fa66a3b051f227316f7d5713'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   * \[currency_id, who, value\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   * \[currency_id, who, value\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === '13b0bfa0829dd36324a53fafee814e18a21efab597ba6541e253f3d8a368fa86'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   * \[currency_id, who, value\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === '57b29a04130eb9e4ed007338d13bdadd6994a860fc1e73492f3333999934a312'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV925(): {currencyId: v925.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV932(): {currencyId: v932.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === '6e5a44d65de498f529521ebd2d4a29809dcb38591c6ceb5ff2cb8c9ad195aaaa'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === '8d097e22a8a65a807386a44e215b345bde223f175804b191c97bafcf19519fc0'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get isV944(): boolean {
    return this._chain.getEventHash('Tokens.Slashed') === '9e0919b6a1cf72ce30fee1ee8e8545d2aaf30f4ae7ca23f64e5372169b4f60d2'
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get asV944(): {currencyId: v944.CurrencyId, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.Slashed') === '7cfae2fcc2165e629017b8b1357aae78a1e9e27c9e4188af41e3d89a8185ab27'
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.Slashed') === '84261cef6150acea10ab9ac57727194fd3957185e6fdd891d51af47f326fdcf6'
  }

  /**
   * Some balances were slashed (e.g. due to mis-behavior)
   */
  get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, freeAmount: bigint, reservedAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensTotalIssuanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.TotalIssuanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The total issuance of an currency has been set
   */
  get isV944(): boolean {
    return this._chain.getEventHash('Tokens.TotalIssuanceSet') === '6d670474d515636132c4510a67f7445df10a511ce2c35f53bd848098eb351f36'
  }

  /**
   * The total issuance of an currency has been set
   */
  get asV944(): {currencyId: v944.CurrencyId, amount: bigint} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The total issuance of an currency has been set
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.TotalIssuanceSet') === '81ab628ba923eb7e13c518f649450379f61cccd6e38fbc9209a59c6bf58e5b4e'
  }

  /**
   * The total issuance of an currency has been set
   */
  get asV956(): {currencyId: v956.CurrencyId, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The total issuance of an currency has been set
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.TotalIssuanceSet') === '4d174771cec9ce3faff65edb609c4da82989e14a5dfc91bef42204cd2688d030'
  }

  /**
   * The total issuance of an currency has been set
   */
  get asV962(): {currencyId: v962.CurrencyId, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Transfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Transfer succeeded. \[currency_id, from, to, value\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === '0b11f978a7c8e2ac29a7988a16979a11b7f5b1bf5b8683bdbe9a0704daa369e5'
  }

  /**
   *  Transfer succeeded. \[currency_id, from, to, value\]
   */
  get asV802(): [v802.CurrencyId, Uint8Array, Uint8Array, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded. \[currency_id, from, to, value\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === '214ed349d49dfebf1b1c3d317e36368ab84724cd9944f806dd74f4a1bd2f8b60'
  }

  /**
   * Transfer succeeded. \[currency_id, from, to, value\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded. \[currency_id, from, to, value\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === '514e961c949a93c66edc6fb2b7766d16cbf1f96c1865b98970a8d5b2f37c516f'
  }

  /**
   * Transfer succeeded. \[currency_id, from, to, value\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, Uint8Array, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded. \[currency_id, from, to, value\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === '7ca0b40b8e64ca6b8ac6a5ff2656d8c653217759cd84d8420cd5230c35994d38'
  }

  /**
   * Transfer succeeded. \[currency_id, from, to, value\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === '8a8b8d1a9186129de11b486cead25d3729cb35145cf90872f992944076c10fa0'
  }

  /**
   * Transfer succeeded.
   */
  get asV925(): {currencyId: v925.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === 'de38bc825d1ed89a7c963df259f29b413310694dc8c343b9729be00f2fed48b1'
  }

  /**
   * Transfer succeeded.
   */
  get asV932(): {currencyId: v932.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === '890276ba2e3208c13dbef4b9be1e8043a3b745c98fed1959c65fd239060689ad'
  }

  /**
   * Transfer succeeded.
   */
  get asV956(): {currencyId: v956.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === '20b9c69a31621629491840894ffa2a0bc566f091b0445891ffe8ed1dd76816b3'
  }

  /**
   * Transfer succeeded.
   */
  get asV962(): {currencyId: v962.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some balance was unreserved (moved from reserved to free).
   *  \[currency_id, who, value\]
   */
  get isV802(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === '5fe49bbf5bcd19bfb8c37d7852ab05b1cbbd0e438c461a23fe32d7acb477f8f5'
  }

  /**
   *  Some balance was unreserved (moved from reserved to free).
   *  \[currency_id, who, value\]
   */
  get asV802(): [v802.CurrencyId, Uint8Array, bigint] {
    assert(this.isV802)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   * \[currency_id, who, value\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === 'c8713a7005be0801e686127b1c9c719c8d70c657c9017663e38dc362fef7c1e4'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   * \[currency_id, who, value\]
   */
  get asV906(): [v906.CurrencyId, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   * \[currency_id, who, value\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === 'c98a9c0e43cee71e9a03eb050db2c25c457db7b4fa66a3b051f227316f7d5713'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   * \[currency_id, who, value\]
   */
  get asV916(): [v916.CurrencyId, Uint8Array, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   * \[currency_id, who, value\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === '13b0bfa0829dd36324a53fafee814e18a21efab597ba6541e253f3d8a368fa86'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   * \[currency_id, who, value\]
   */
  get asV920(): [v920.CurrencyId, Uint8Array, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV925(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === '57b29a04130eb9e4ed007338d13bdadd6994a860fc1e73492f3333999934a312'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV925(): {currencyId: v925.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV932(): {currencyId: v932.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === '6e5a44d65de498f529521ebd2d4a29809dcb38591c6ceb5ff2cb8c9ad195aaaa'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === '8d097e22a8a65a807386a44e215b345bde223f175804b191c97bafcf19519fc0'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Withdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get isV944(): boolean {
    return this._chain.getEventHash('Tokens.Withdrawn') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get asV944(): {currencyId: v944.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get isV956(): boolean {
    return this._chain.getEventHash('Tokens.Withdrawn') === '6e5a44d65de498f529521ebd2d4a29809dcb38591c6ceb5ff2cb8c9ad195aaaa'
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get isV962(): boolean {
    return this._chain.getEventHash('Tokens.Withdrawn') === '8d097e22a8a65a807386a44e215b345bde223f175804b191c97bafcf19519fc0'
  }

  /**
   * Some balances were withdrawn (e.g. pay for transaction fee)
   */
  get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class TransactionPaymentTransactionFeePaidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TransactionPayment.TransactionFeePaid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
   * has been paid by `who`.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
  }

  /**
   * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
   * has been paid by `who`.
   */
  get asV952(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryAwardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Awarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV803(): [number, bigint, Uint8Array] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some funds have been allocated.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
  }

  /**
   * Some funds have been allocated.
   */
  get asV926(): {proposalIndex: number, award: bigint, account: Uint8Array} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryBurntEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Burnt')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some of our funds have been burnt. \[burn\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Burnt') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  /**
   *  Some of our funds have been burnt. \[burn\]
   */
  get asV803(): bigint {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some of our funds have been burnt.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
  }

  /**
   * Some of our funds have been burnt.
   */
  get asV926(): {burntFunds: bigint} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some funds have been deposited. \[deposit\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  /**
   *  Some funds have been deposited. \[deposit\]
   */
  get asV803(): bigint {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some funds have been deposited.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
  }

  /**
   * Some funds have been deposited.
   */
  get asV926(): {value: bigint} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get asV803(): number {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New proposal.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV926(): {proposalIndex: number} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryRejectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Rejected')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV803(): [number, bigint] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV926(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryRolloverEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Rollover')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Spending has finished; this is the amount that rolls over until next spend.
   *  \[budget_remaining\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Rollover') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  /**
   *  Spending has finished; this is the amount that rolls over until next spend.
   *  \[budget_remaining\]
   */
  get asV803(): bigint {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   */
  get asV926(): {rolloverBalance: bigint} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasurySpendApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.SpendApproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new spend proposal has been approved.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('Treasury.SpendApproved') === 'fce90c02bffde89fb0e8723868aa8e94bfe9c1c48c5af8c34efd8ff5173184f9'
  }

  /**
   * A new spend proposal has been approved.
   */
  get asV952(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasurySpendingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Spending')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  We have ended a spend period and will now allocate funds. \[budget_remaining\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Spending') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  /**
   *  We have ended a spend period and will now allocate funds. \[budget_remaining\]
   */
  get asV803(): bigint {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * We have ended a spend period and will now allocate funds.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
  }

  /**
   * We have ended a spend period and will now allocate funds.
   */
  get asV926(): {budgetRemaining: bigint} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class UnknownTokensDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'UnknownTokens.Deposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Deposit success. [asset, to]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('UnknownTokens.Deposited') === '58aa085f2c209dd652e58ee64516d17af9b359f65a9f7f0eb8d29e0c7cb03e18'
  }

  /**
   *  Deposit success. [asset, to]
   */
  get asV804(): [v804.MultiAsset, v804.MultiLocation] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  Deposit success. [asset, to]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('UnknownTokens.Deposited') === 'db12bd19c61dffd6a582e2cfee22f5e2d025ea2e8f175e4ca203f8747a25c044'
  }

  /**
   *  Deposit success. [asset, to]
   */
  get asV902(): [v902.MultiAsset, v902.MultiLocation] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposit success. [asset, to]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('UnknownTokens.Deposited') === '98de5b4ef5ac841b6c6c91bacbde5fa194781c854b563d8bd7a6c59efb712677'
  }

  /**
   * Deposit success. [asset, to]
   */
  get asV906(): [v906.V1MultiAsset, v906.V1MultiLocation] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Deposit success.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('UnknownTokens.Deposited') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
  }

  /**
   * Deposit success.
   */
  get asV925(): {asset: v925.V1MultiAsset, who: v925.V1MultiLocation} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }
}

export class UnknownTokensWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'UnknownTokens.Withdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Withdraw success. [asset, from]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('UnknownTokens.Withdrawn') === '58aa085f2c209dd652e58ee64516d17af9b359f65a9f7f0eb8d29e0c7cb03e18'
  }

  /**
   *  Withdraw success. [asset, from]
   */
  get asV804(): [v804.MultiAsset, v804.MultiLocation] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  Withdraw success. [asset, from]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('UnknownTokens.Withdrawn') === 'db12bd19c61dffd6a582e2cfee22f5e2d025ea2e8f175e4ca203f8747a25c044'
  }

  /**
   *  Withdraw success. [asset, from]
   */
  get asV902(): [v902.MultiAsset, v902.MultiLocation] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Withdraw success. [asset, from]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('UnknownTokens.Withdrawn') === '98de5b4ef5ac841b6c6c91bacbde5fa194781c854b563d8bd7a6c59efb712677'
  }

  /**
   * Withdraw success. [asset, from]
   */
  get asV906(): [v906.V1MultiAsset, v906.V1MultiLocation] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Withdraw success.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('UnknownTokens.Withdrawn') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
  }

  /**
   * Withdraw success.
   */
  get asV925(): {asset: v925.V1MultiAsset, who: v925.V1MultiLocation} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Batch of dispatches completed fully with no error.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Batch of dispatches completed fully with no error.
   */
  get asV1(): null {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchCompletedWithErrorsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchCompletedWithErrors')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Batch of dispatches completed but has errors.
   */
  get isV944(): boolean {
    return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Batch of dispatches completed but has errors.
   */
  get asV944(): null {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchInterruptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchInterrupted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   *  well as the error. \[index, error\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '2c20d7c884755f10ad4c634fbc8df51f6d6f163ac70c297ced91a1532d13306d'
  }

  /**
   *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   *  well as the error. \[index, error\]
   */
  get asV1(): [number, v1.DispatchError] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error. \[index, error\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === 'b9192854e3b1d8b7a3bd93b66a170a2afd8616d353d0fc1bdbfbfe6efa5b4f5a'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error. \[index, error\]
   */
  get asV906(): [number, v906.DispatchError] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '98bdd6e841214fcd4b95ff7b4750fcf3643d9e94f0203582cf6dd5c7dd772c39'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV916(): {index: number, error: v916.DispatchError} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '0ebef0e669872b029afc6cbf6c35a90ca099164a7899375e3d8178345c0f3f73'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV926(): {index: number, error: v926.DispatchError} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV932(): {index: number, error: v932.DispatchError} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV942(): {index: number, error: v942.DispatchError} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityDispatchedAsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.DispatchedAs')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A call was dispatched. \[result\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === 'ab888611b1630e8ada6ae91aa73bbcaa3417be141a0a0db92f4f509e4cfba02a'
  }

  /**
   * A call was dispatched. \[result\]
   */
  get asV916(): Result<null, v916.DispatchError> {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A call was dispatched.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === 'a5f93f40c8dbc0e7785a5800c0344513f6a8b6a6a0394b0938320dec7e44be85'
  }

  /**
   * A call was dispatched.
   */
  get asV926(): {result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A call was dispatched.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === '437b0d6b61f01d02ca149f7d3a9e00406fc26ecde780532ed80e532801995307'
  }

  /**
   * A call was dispatched.
   */
  get asV932(): {result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A call was dispatched.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === 'cbb13e6f8f0e2a0b00b89705f05de04cf34bbb44653bcdccedddc8448bc95bfc'
  }

  /**
   * A call was dispatched.
   */
  get asV942(): {result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityItemCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.ItemCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A single item within a Batch of dispatches has completed with no error.
   */
  get isV804(): boolean {
    return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  A single item within a Batch of dispatches has completed with no error.
   */
  get asV804(): null {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityItemFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.ItemFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single item within a Batch of dispatches has completed with error.
   */
  get isV944(): boolean {
    return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
  }

  /**
   * A single item within a Batch of dispatches has completed with error.
   */
  get asV944(): {error: v944.DispatchError} {
    assert(this.isV944)
    return this._chain.decodeEvent(this.event)
  }
}

export class VsBondAuctionOrderClinchdEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VSBondAuction.OrderClinchd')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderClinchd') === '8e71a6179ddd877bdc6d223eb5b2c9ba21d04b8037d33a6f22e28a4091df7118'
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get asV912(): [bigint, v912.OrderType, Uint8Array, Uint8Array, v912.CurrencyId, bigint, bigint, bigint, bigint] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderClinchd') === '9b8a5f71a6059f2c1f4b2f74789f7840f465dd0a6aca6418c90b9c02370310da'
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get asV916(): [bigint, v916.OrderType, Uint8Array, Uint8Array, v916.CurrencyId, bigint, bigint, bigint, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderClinchd') === '5ce58188f6de9ecc5b8e9e30ede2317161e19bab8830b08f4963cf313f5df427'
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get asV920(): [bigint, v920.OrderType, Uint8Array, Uint8Array, v920.CurrencyId, bigint, bigint, bigint, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderClinchd') === '9791e573e2aad542bebcb91cef76a94df5efe4dc791b5a7c210f812ed6a9e932'
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get asV932(): [bigint, v932.OrderType, Uint8Array, Uint8Array, v932.CurrencyId, bigint, bigint, bigint, bigint] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderClinchd') === 'dd50a7e68d2915b28df60ee388b41b88604de9dcdbe7cb47e22ca957212a42c5'
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get asV956(): [bigint, v956.OrderType, Uint8Array, Uint8Array, v956.CurrencyId, bigint, bigint, bigint, bigint] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderClinchd') === '2f8bd283e9d720fdb2c5aa0ee844dd98318b8c1da9eeb59696568e88db4507af'
  }

  /**
   * The order has been clinched.
   * 
   * [order_id, order_type, order_creator, order_opponent, vsbond_type,
   * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
   */
  get asV962(): [bigint, v962.OrderType, Uint8Array, Uint8Array, v962.CurrencyId, bigint, bigint, bigint, bigint] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VsBondAuctionOrderCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VSBondAuction.OrderCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderCreated') === '3817f39eca9d6bcad2288f1c807ccbfd902ccfb35c4bd9d61c42c82b86da7772'
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get asV912(): [bigint, v912.OrderType, Uint8Array, v912.CurrencyId, bigint, bigint] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderCreated') === '9da749a5f9e48d7a960f0d517abaa926d7e58b4e926ec5c9fd8c94e23d8c6c0f'
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get asV916(): [bigint, v916.OrderType, Uint8Array, v916.CurrencyId, bigint, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderCreated') === 'f14c5d34faead2ac3f7a8c4c100cc365532d94a862658bc8cef09b4ab82a1049'
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get asV920(): [bigint, v920.OrderType, Uint8Array, v920.CurrencyId, bigint, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderCreated') === '940f37afa7171fa1f737cdc42cdb7742a0e82c432a38a5c560b42a230a0bafc1'
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get asV932(): [bigint, v932.OrderType, Uint8Array, v932.CurrencyId, bigint, bigint] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderCreated') === 'c757f7a5c4c26bae310abbb8faebf4f9db7df32b3a1d535bce3b11127069f314'
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get asV956(): [bigint, v956.OrderType, Uint8Array, v956.CurrencyId, bigint, bigint] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderCreated') === '78a6fd2b9e7c1fc8dd4abce733c7bee1b3069163ed77a18bc34ef40f02949ae7'
  }

  /**
   * The order has been created.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
   */
  get asV962(): [bigint, v962.OrderType, Uint8Array, v962.CurrencyId, bigint, bigint] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VsBondAuctionOrderRevokedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VSBondAuction.OrderRevoked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get isV912(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderRevoked') === '70e247bccdc5c02323bbe961b18b56cdf164fe8ab57129dd6bb1ba9027cda59d'
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get asV912(): [bigint, v912.OrderType, Uint8Array, v912.CurrencyId, bigint, bigint, bigint] {
    assert(this.isV912)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderRevoked') === '3a4d18fecd41f9f8988600d1c62fbb6fdd4d6837c34109a78497397ebed911a9'
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get asV916(): [bigint, v916.OrderType, Uint8Array, v916.CurrencyId, bigint, bigint, bigint] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderRevoked') === '3a300d924a2bbc35e6dfed3c2d191a412e689668d70be589a5c83c1d666b476d'
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get asV920(): [bigint, v920.OrderType, Uint8Array, v920.CurrencyId, bigint, bigint, bigint] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get isV932(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderRevoked') === '4d97632a7ac0b6b36bca115310ddb73e5caa3e184a7ac55451965f989b00fc54'
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get asV932(): [bigint, v932.OrderType, Uint8Array, v932.CurrencyId, bigint, bigint, bigint] {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get isV956(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderRevoked') === '5174a69b8865e228c01b28333a1d11a1097b755b79de19188e21d5fa50c5d615'
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get asV956(): [bigint, v956.OrderType, Uint8Array, v956.CurrencyId, bigint, bigint, bigint] {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get isV962(): boolean {
    return this._chain.getEventHash('VSBondAuction.OrderRevoked') === '9197ea59f57103022fc8352278d344b4e9288a0729e00b40c4c4a71a172c33e5'
  }

  /**
   * The order has been revoked.
   * 
   * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
   * total_price]
   */
  get asV962(): [bigint, v962.OrderType, Uint8Array, v962.CurrencyId, bigint, bigint, bigint] {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VsBondAuctionTransactionFeeRateSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VSBondAuction.TransactionFeeRateSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transaction fee rate has been reset.
   * 
   * [buy_fee_rate, sell_fee_rate]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('VSBondAuction.TransactionFeeRateSet') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * Transaction fee rate has been reset.
   * 
   * [buy_fee_rate, sell_fee_rate]
   */
  get asV916(): [number, number] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class VestingVestingCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Vesting.VestingCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An \[account\] has become fully vested. No further vesting can happen.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Vesting.VestingCompleted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  An \[account\] has become fully vested. No further vesting can happen.
   */
  get asV1(): Uint8Array {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class VestingVestingUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Vesting.VestingUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The amount vested has been updated. This could indicate more funds are available. The
   *  balance given is the amount which is left unvested (and thus locked).
   *  \[account, unvested\]
   */
  get isV1(): boolean {
    return this._chain.getEventHash('Vesting.VestingUpdated') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  The amount vested has been updated. This could indicate more funds are available. The
   *  balance given is the amount which is left unvested (and thus locked).
   *  \[account, unvested\]
   */
  get asV1(): [Uint8Array, bigint] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionExchangeFeeSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.ExchangeFeeSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV932(): boolean {
    return this._chain.getEventHash('VstokenConversion.ExchangeFeeSet') === '04d91f4d740370a1ac4c2d5ac0649735065aad4594e00e2e0b7635817abe7cdf'
  }

  get asV932(): {exchangeFee: v932.VstokenConversionExchangeFee} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV952(): boolean {
    return this._chain.getEventHash('VstokenConversion.ExchangeFeeSet') === '90a895d1b4cc09242306d46872658bef3d1f06f79fd569ca179e8e24f442a817'
  }

  get asV952(): {exchangeFee: v952.VstokenConversionExchangeFee} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionExchangeRateSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.ExchangeRateSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV932(): boolean {
    return this._chain.getEventHash('VstokenConversion.ExchangeRateSet') === '254877af18edb10783f111576bf806649db70d9aebd11a4aeff2fcc92c0d13d0'
  }

  get asV932(): {lease: number, exchangeRate: v932.VstokenConversionExchangeRate} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV952(): boolean {
    return this._chain.getEventHash('VstokenConversion.ExchangeRateSet') === 'd51f18ed5cc67ee9acfc046f430b0021f9f3a2b1d379723322cf73fdf3171d8e'
  }

  get asV952(): {lease: number, exchangeRate: v952.VstokenConversionExchangeRate} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionKusamaLeaseSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.KusamaLeaseSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV932(): boolean {
    return this._chain.getEventHash('VstokenConversion.KusamaLeaseSet') === '4e8f0ba804f3c81318a22c5a753df058873bef641bcde1b9159f19b73d019457'
  }

  get asV932(): {lease: number} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionPolkadotLeaseSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.PolkadotLeaseSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV932(): boolean {
    return this._chain.getEventHash('VstokenConversion.PolkadotLeaseSet') === '4e8f0ba804f3c81318a22c5a753df058873bef641bcde1b9159f19b73d019457'
  }

  get asV932(): {lease: number} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionRelaychainLeaseSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.RelaychainLeaseSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV952(): boolean {
    return this._chain.getEventHash('VstokenConversion.RelaychainLeaseSet') === '4e8f0ba804f3c81318a22c5a753df058873bef641bcde1b9159f19b73d019457'
  }

  get asV952(): {lease: number} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionVsbondConvertToVsdotEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.VsbondConvertToVsdot')
    this._chain = ctx._chain
    this.event = event
  }

  get isV932(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVsdot') === '14e170c02942fd56ee6dcea7794fcc25a03ca4d00544db20a1e9ebb180d38925'
  }

  get asV932(): {currencyId: v932.CurrencyId, vsbondAmount: bigint, vsdotAmount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVsdot') === 'e174b062ab2f8949751d7d20e8f6bfebcbc0d2941f1deae3b9eb78d128442584'
  }

  get asV940(): {address: Uint8Array, currencyId: v940.CurrencyId, vsbondAmount: bigint, vsdotAmount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVsdot') === '7fcf74e99981cc887037b22bba3a7e6cec01b0f3f6bea1214c09199276ac6f16'
  }

  get asV956(): {address: Uint8Array, currencyId: v956.CurrencyId, vsbondAmount: bigint, vsdotAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVsdot') === '7ae9871d91a10352074892567584057ad47a22e5306d15d880f3e46019163298'
  }

  get asV962(): {address: Uint8Array, currencyId: v962.CurrencyId, vsbondAmount: bigint, vsdotAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionVsbondConvertToVsksmEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.VsbondConvertToVsksm')
    this._chain = ctx._chain
    this.event = event
  }

  get isV932(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVsksm') === '065685bfa6073b17bfbcede5ae6c608ab9cc12ee8ba5796eb25c2456886bab29'
  }

  get asV932(): {currencyId: v932.CurrencyId, vsbondAmount: bigint, vsksmAmount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVsksm') === 'b4201ca0a0a2e8238c58706f0d701a9afdacc451667b29e16525fc19ddc7a854'
  }

  get asV940(): {address: Uint8Array, currencyId: v940.CurrencyId, vsbondAmount: bigint, vsksmAmount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVsksm') === '2f398bcff853fb26ce4b13c15211e69815897d3420bf622d2a6683919244d97d'
  }

  get asV956(): {address: Uint8Array, currencyId: v956.CurrencyId, vsbondAmount: bigint, vsksmAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVsksm') === '9f615cd759e76ba6df21635c224678b3af78bcee2640988cf37d196661d96a20'
  }

  get asV962(): {address: Uint8Array, currencyId: v962.CurrencyId, vsbondAmount: bigint, vsksmAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionVsbondConvertToVstokenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.VsbondConvertToVstoken')
    this._chain = ctx._chain
    this.event = event
  }

  get isV952(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVstoken') === 'b0f49e368065164e20000fa2ccb54e80e32c94d9b2d3c62e3f5bf4a415719d20'
  }

  get asV952(): {address: Uint8Array, currencyId: v952.CurrencyId, vsbondAmount: bigint, vstokenAmount: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVstoken') === '408708a785dcba3915fa832226492139099de940d4d5552d1fe9b34bd74f1e40'
  }

  get asV956(): {address: Uint8Array, currencyId: v956.CurrencyId, vsbondAmount: bigint, vstokenAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsbondConvertToVstoken') === '299b0da55ecc41cc08d76eda0423d447f007fa21a1ecbb801017d39b37543a93'
  }

  get asV962(): {address: Uint8Array, currencyId: v962.CurrencyId, vsbondAmount: bigint, vstokenAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionVsdotConvertToVsbondEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.VsdotConvertToVsbond')
    this._chain = ctx._chain
    this.event = event
  }

  get isV932(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsdotConvertToVsbond') === '14e170c02942fd56ee6dcea7794fcc25a03ca4d00544db20a1e9ebb180d38925'
  }

  get asV932(): {currencyId: v932.CurrencyId, vsbondAmount: bigint, vsdotAmount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsdotConvertToVsbond') === 'e174b062ab2f8949751d7d20e8f6bfebcbc0d2941f1deae3b9eb78d128442584'
  }

  get asV940(): {address: Uint8Array, currencyId: v940.CurrencyId, vsbondAmount: bigint, vsdotAmount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsdotConvertToVsbond') === '7fcf74e99981cc887037b22bba3a7e6cec01b0f3f6bea1214c09199276ac6f16'
  }

  get asV956(): {address: Uint8Array, currencyId: v956.CurrencyId, vsbondAmount: bigint, vsdotAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsdotConvertToVsbond') === '7ae9871d91a10352074892567584057ad47a22e5306d15d880f3e46019163298'
  }

  get asV962(): {address: Uint8Array, currencyId: v962.CurrencyId, vsbondAmount: bigint, vsdotAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionVsksmConvertToVsbondEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.VsksmConvertToVsbond')
    this._chain = ctx._chain
    this.event = event
  }

  get isV932(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsksmConvertToVsbond') === '065685bfa6073b17bfbcede5ae6c608ab9cc12ee8ba5796eb25c2456886bab29'
  }

  get asV932(): {currencyId: v932.CurrencyId, vsbondAmount: bigint, vsksmAmount: bigint} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsksmConvertToVsbond') === 'b4201ca0a0a2e8238c58706f0d701a9afdacc451667b29e16525fc19ddc7a854'
  }

  get asV940(): {address: Uint8Array, currencyId: v940.CurrencyId, vsbondAmount: bigint, vsksmAmount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsksmConvertToVsbond') === '2f398bcff853fb26ce4b13c15211e69815897d3420bf622d2a6683919244d97d'
  }

  get asV956(): {address: Uint8Array, currencyId: v956.CurrencyId, vsbondAmount: bigint, vsksmAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VstokenConversion.VsksmConvertToVsbond') === '9f615cd759e76ba6df21635c224678b3af78bcee2640988cf37d196661d96a20'
  }

  get asV962(): {address: Uint8Array, currencyId: v962.CurrencyId, vsbondAmount: bigint, vsksmAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VstokenConversionVstokenConvertToVsbondEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VstokenConversion.VstokenConvertToVsbond')
    this._chain = ctx._chain
    this.event = event
  }

  get isV952(): boolean {
    return this._chain.getEventHash('VstokenConversion.VstokenConvertToVsbond') === 'b0f49e368065164e20000fa2ccb54e80e32c94d9b2d3c62e3f5bf4a415719d20'
  }

  get asV952(): {address: Uint8Array, currencyId: v952.CurrencyId, vsbondAmount: bigint, vstokenAmount: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VstokenConversion.VstokenConvertToVsbond') === '408708a785dcba3915fa832226492139099de940d4d5552d1fe9b34bd74f1e40'
  }

  get asV956(): {address: Uint8Array, currencyId: v956.CurrencyId, vsbondAmount: bigint, vstokenAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VstokenConversion.VstokenConvertToVsbond') === '299b0da55ecc41cc08d76eda0423d447f007fa21a1ecbb801017d39b37543a93'
  }

  get asV962(): {address: Uint8Array, currencyId: v962.CurrencyId, vsbondAmount: bigint, vstokenAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingFeeSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.FeeSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Several fees has been set.
   */
  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.FeeSet') === '1c4943227c141adafdcc24737eb875081560e05ae719280ada1a3747ca44627a'
  }

  /**
   * Several fees has been set.
   */
  get asV940(): {mintFee: number, redeemFee: number} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingHookIterationLimitSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.HookIterationLimitSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.HookIterationLimitSet') === 'f707ff742083978d0b1f391a9771c28219f5e35ce5ba83507482cd04e92d916b'
  }

  get asV940(): {limit: number} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingMinTimeUnitSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.MinTimeUnitSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('VtokenMinting.MinTimeUnitSet') === 'fa268c3e4e9a68376abd2d3d9e9b16a48b463f5e0efd48f34136c0c92140a3af'
  }

  get asV946(): {tokenId: v946.CurrencyId, timeUnit: v946.TimeUnit} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.MinTimeUnitSet') === '246ea7d9afd8e102eeffd6e6e975322ee37ed650488883d3dcf323c0bf2f5712'
  }

  get asV956(): {tokenId: v956.CurrencyId, timeUnit: v956.TimeUnit} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.MinTimeUnitSet') === '31c095df6d266314bdb6508ca8baf1bb115312da6d3d49b809f1cc9d4f311be2'
  }

  get asV962(): {tokenId: v962.CurrencyId, timeUnit: v962.TimeUnit} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingMinimumMintSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.MinimumMintSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.MinimumMintSet') === 'ac4ae6398066773e53de1d86a54412149f8d3346ea110cc25164422cc8c1e088'
  }

  get asV940(): {tokenId: v940.CurrencyId, amount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.MinimumMintSet') === '7fca77be3118fb1b790a0d1cab809f3d86e679910d35e6f7ea794354fd782b01'
  }

  get asV956(): {tokenId: v956.CurrencyId, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.MinimumMintSet') === '3cd93ebf2d816433b9396a5c30e22e535d7163e0a6c22b8dad3f6e75d7d70cac'
  }

  get asV962(): {tokenId: v962.CurrencyId, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingMinimumRedeemSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.MinimumRedeemSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.MinimumRedeemSet') === 'ac4ae6398066773e53de1d86a54412149f8d3346ea110cc25164422cc8c1e088'
  }

  get asV940(): {tokenId: v940.CurrencyId, amount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.MinimumRedeemSet') === '7fca77be3118fb1b790a0d1cab809f3d86e679910d35e6f7ea794354fd782b01'
  }

  get asV956(): {tokenId: v956.CurrencyId, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.MinimumRedeemSet') === '3cd93ebf2d816433b9396a5c30e22e535d7163e0a6c22b8dad3f6e75d7d70cac'
  }

  get asV962(): {tokenId: v962.CurrencyId, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingMintedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.Minted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.Minted') === '2a173e2c0cd675aced9ab38840749bf094125e0ba1bb5a8883547138fb7e8d59'
  }

  get asV940(): {address: Uint8Array, tokenId: v940.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.Minted') === 'c8e2aefcfee025a3abee70b1962a786a400b3bb6d7a421e6d246d22740214722'
  }

  get asV956(): {address: Uint8Array, tokenId: v956.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.Minted') === '53ba8b1bdee44c1cf28fed90f85b6c83179603ad277a2ad0e7e2177ad2f06eb9'
  }

  get asV962(): {address: Uint8Array, tokenId: v962.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingRebondedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.Rebonded')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.Rebonded') === '2a173e2c0cd675aced9ab38840749bf094125e0ba1bb5a8883547138fb7e8d59'
  }

  get asV940(): {address: Uint8Array, tokenId: v940.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.Rebonded') === 'c8e2aefcfee025a3abee70b1962a786a400b3bb6d7a421e6d246d22740214722'
  }

  get asV956(): {address: Uint8Array, tokenId: v956.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.Rebonded') === '53ba8b1bdee44c1cf28fed90f85b6c83179603ad277a2ad0e7e2177ad2f06eb9'
  }

  get asV962(): {address: Uint8Array, tokenId: v962.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingRebondedByUnlockIdEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.RebondedByUnlockId')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.RebondedByUnlockId') === '2a173e2c0cd675aced9ab38840749bf094125e0ba1bb5a8883547138fb7e8d59'
  }

  get asV940(): {address: Uint8Array, tokenId: v940.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.RebondedByUnlockId') === 'c8e2aefcfee025a3abee70b1962a786a400b3bb6d7a421e6d246d22740214722'
  }

  get asV956(): {address: Uint8Array, tokenId: v956.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.RebondedByUnlockId') === '53ba8b1bdee44c1cf28fed90f85b6c83179603ad277a2ad0e7e2177ad2f06eb9'
  }

  get asV962(): {address: Uint8Array, tokenId: v962.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingRedeemSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.RedeemSuccess')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.RedeemSuccess') === 'b9defdf2565603cc084cfacc9d9c5168db45001b91960b22d8ce0b00bc1f9201'
  }

  get asV940(): {unlockId: number, tokenId: v940.CurrencyId, to: Uint8Array, tokenAmount: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.RedeemSuccess') === 'ffa7fb2a78ea9e378b2227006c0af9be9ba6b24b8225fc2db92f85deb8e2ded3'
  }

  get asV956(): {unlockId: number, tokenId: v956.CurrencyId, to: Uint8Array, tokenAmount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.RedeemSuccess') === '53ab01c3bb3c4d39757c75bdeff7c8526a81df01bc940f316d59b368532ea51f'
  }

  get asV962(): {unlockId: number, tokenId: v962.CurrencyId, to: Uint8Array, tokenAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingRedeemedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.Redeemed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.Redeemed') === '2a173e2c0cd675aced9ab38840749bf094125e0ba1bb5a8883547138fb7e8d59'
  }

  get asV940(): {address: Uint8Array, tokenId: v940.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.Redeemed') === 'c8e2aefcfee025a3abee70b1962a786a400b3bb6d7a421e6d246d22740214722'
  }

  get asV956(): {address: Uint8Array, tokenId: v956.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.Redeemed') === '53ba8b1bdee44c1cf28fed90f85b6c83179603ad277a2ad0e7e2177ad2f06eb9'
  }

  get asV962(): {address: Uint8Array, tokenId: v962.CurrencyId, tokenAmount: bigint, vtokenAmount: bigint, fee: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingSupportRebondTokenAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.SupportRebondTokenAdded')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.SupportRebondTokenAdded') === 'e30616e214f0af41f430fafcb2da3f8c467c25d035265a237ba5004d93829747'
  }

  get asV940(): {tokenId: v940.CurrencyId} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.SupportRebondTokenAdded') === '8e2066b157b09c675b64c0ff9edaa814874e00589cda201820c9d716c86b7445'
  }

  get asV956(): {tokenId: v956.CurrencyId} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.SupportRebondTokenAdded') === 'b143aeea360c303aca8f86f15bf8b2d7055d3981fc78ca86b822e5dfb41ddc3f'
  }

  get asV962(): {tokenId: v962.CurrencyId} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingSupportRebondTokenRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.SupportRebondTokenRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.SupportRebondTokenRemoved') === 'e30616e214f0af41f430fafcb2da3f8c467c25d035265a237ba5004d93829747'
  }

  get asV940(): {tokenId: v940.CurrencyId} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.SupportRebondTokenRemoved') === '8e2066b157b09c675b64c0ff9edaa814874e00589cda201820c9d716c86b7445'
  }

  get asV956(): {tokenId: v956.CurrencyId} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.SupportRebondTokenRemoved') === 'b143aeea360c303aca8f86f15bf8b2d7055d3981fc78ca86b822e5dfb41ddc3f'
  }

  get asV962(): {tokenId: v962.CurrencyId} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingUnlockDurationSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.UnlockDurationSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV940(): boolean {
    return this._chain.getEventHash('VtokenMinting.UnlockDurationSet') === 'f7b0821ac265cebb7d67bb9250398fd789e1aa6de47f7f34d4e1895e2fb71401'
  }

  get asV940(): {tokenId: v940.CurrencyId, unlockDuration: v940.TimeUnit} {
    assert(this.isV940)
    return this._chain.decodeEvent(this.event)
  }

  get isV946(): boolean {
    return this._chain.getEventHash('VtokenMinting.UnlockDurationSet') === 'bad63f73aef48ed943193663c56f478758917d7eb7c61fbf567e20934c7d6c5c'
  }

  get asV946(): {tokenId: v946.CurrencyId, unlockDuration: v946.TimeUnit} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.UnlockDurationSet') === '87b67946b96c7a03e69ce136908c846a7269c21899e77008b2c11f62b6425933'
  }

  get asV956(): {tokenId: v956.CurrencyId, unlockDuration: v956.TimeUnit} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.UnlockDurationSet') === '8456c93308b0a177273a1bc760e853a43ff01c8e0606368fbe0b139c0d79b9e8'
  }

  get asV962(): {tokenId: v962.CurrencyId, unlockDuration: v962.TimeUnit} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class VtokenMintingUnlockingTotalSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'VtokenMinting.UnlockingTotalSet')
    this._chain = ctx._chain
    this.event = event
  }

  get isV946(): boolean {
    return this._chain.getEventHash('VtokenMinting.UnlockingTotalSet') === 'ac4ae6398066773e53de1d86a54412149f8d3346ea110cc25164422cc8c1e088'
  }

  get asV946(): {tokenId: v946.CurrencyId, amount: bigint} {
    assert(this.isV946)
    return this._chain.decodeEvent(this.event)
  }

  get isV956(): boolean {
    return this._chain.getEventHash('VtokenMinting.UnlockingTotalSet') === '7fca77be3118fb1b790a0d1cab809f3d86e679910d35e6f7ea794354fd782b01'
  }

  get asV956(): {tokenId: v956.CurrencyId, amount: bigint} {
    assert(this.isV956)
    return this._chain.decodeEvent(this.event)
  }

  get isV962(): boolean {
    return this._chain.getEventHash('VtokenMinting.UnlockingTotalSet') === '3cd93ebf2d816433b9396a5c30e22e535d7163e0a6c22b8dad3f6e75d7d70cac'
  }

  get asV962(): {tokenId: v962.CurrencyId, amount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Transferred. \[sender, currency_id, amount, dest\]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('XTokens.Transferred') === '62790a3394a184e8de54cfbc047e1ccd00510105e4334fa125fca46abf8cff8c'
  }

  /**
   *  Transferred. \[sender, currency_id, amount, dest\]
   */
  get asV804(): [Uint8Array, v804.CurrencyId, bigint, v804.MultiLocation] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  Transferred. \[sender, currency_id, amount, dest\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('XTokens.Transferred') === '3e4089addac8b8873025e24bf26fc40eaaaf47f1dbf6f0463bac6a5a2d4ec259'
  }

  /**
   *  Transferred. \[sender, currency_id, amount, dest\]
   */
  get asV902(): [Uint8Array, v902.CurrencyId, bigint, v902.MultiLocation] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred. \[sender, currency_id, amount, dest\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('XTokens.Transferred') === 'ff5e1177c8141fde3414dfa3e6cee39eb3ed7d1fd665dbcb7f5e0a8e9a077983'
  }

  /**
   * Transferred. \[sender, currency_id, amount, dest\]
   */
  get asV906(): [Uint8Array, v906.CurrencyId, bigint, v906.V1MultiLocation] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred. \[sender, currency_id, amount, dest\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('XTokens.Transferred') === '8fc7495af07f3a074d942b0582e4de4d07e002e28491fd1b4173a2f4eebfea52'
  }

  /**
   * Transferred. \[sender, currency_id, amount, dest\]
   */
  get asV916(): [Uint8Array, v916.CurrencyId, bigint, v916.V1MultiLocation] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred. \[sender, currency_id, amount, dest\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('XTokens.Transferred') === '7d80d85f330e9f368a51d3cc75ceb2dca91b6c2f179a7e942842762b0a6e4da7'
  }

  /**
   * Transferred. \[sender, currency_id, amount, dest\]
   */
  get asV920(): [Uint8Array, v920.CurrencyId, bigint, v920.V1MultiLocation] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('XTokens.Transferred') === '725ec418b3f547c7662a12c1b9ee0436b8dcda6a2cf35f20989357e82dc53497'
  }

  /**
   * Transferred.
   */
  get asV925(): {sender: Uint8Array, currencyId: v925.CurrencyId, amount: bigint, dest: v925.V1MultiLocation} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredMultiAssetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredMultiAsset')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Transferred `MultiAsset`. \[sender, asset, dest\]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAsset') === '39097320301d1b987a7e1a1f5796bb8f8420d54d9dc42fc39df22d1c21190261'
  }

  /**
   *  Transferred `MultiAsset`. \[sender, asset, dest\]
   */
  get asV804(): [Uint8Array, v804.MultiAsset, v804.MultiLocation] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  Transferred `MultiAsset`. \[sender, asset, dest\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAsset') === 'b33f74081bd572be7ea9d0eebd4ff34b4f56cbe301a998bacf4f6dd14e329c12'
  }

  /**
   *  Transferred `MultiAsset`. \[sender, asset, dest\]
   */
  get asV902(): [Uint8Array, v902.MultiAsset, v902.MultiLocation] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred `MultiAsset`. \[sender, asset, dest\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAsset') === 'c576be07d7337c6d483d9cb4dcd92edba9b7278d34d38dfbe185a6ffdeac90ad'
  }

  /**
   * Transferred `MultiAsset`. \[sender, asset, dest\]
   */
  get asV906(): [Uint8Array, v906.V1MultiAsset, v906.V1MultiLocation] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred `MultiAsset`.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAsset') === '7fec273aa0ae147760c7dd1940b67deb436b25b9e2d4c7c75150b174e815408b'
  }

  /**
   * Transferred `MultiAsset`.
   */
  get asV925(): {sender: Uint8Array, asset: v925.V1MultiAsset, dest: v925.V1MultiLocation} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredMultiAssetWithFeeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredMultiAssetWithFee')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred `MultiAsset` with fee. \[sender, asset, fee, dest\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssetWithFee') === 'bac4b8d0c2b1228f18e595bb7007474bf1969f0a2de83bc73a545831e561ed36'
  }

  /**
   * Transferred `MultiAsset` with fee. \[sender, asset, fee, dest\]
   */
  get asV916(): [Uint8Array, v916.V1MultiAsset, v916.V1MultiAsset, v916.V1MultiLocation] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssetWithFee') === 'cba4a5ec13032868bc74df82888767ea7fd34969b190ec1e6086219a80e5ee72'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV925(): {sender: Uint8Array, asset: v925.V1MultiAsset, fee: v925.V1MultiAsset, dest: v925.V1MultiLocation} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredMultiAssetsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredMultiAssets')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssets') === 'f7bab399e6ba944b4e125eae381fe361968f8e894d499e45a921bf53ae4632d8'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV926(): {sender: Uint8Array, assets: v926.V1MultiAsset[], dest: v926.V1MultiLocation} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '19a61ff727b39e06bdac9248dc278a5be6292a6af670958a6338915a3e003249'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV932(): {sender: Uint8Array, assets: v932.V1MultiAsset[], fee: v932.V1MultiAsset, dest: v932.V1MultiLocation} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredMultiCurrenciesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredMultiCurrencies')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiCurrencies') === 'f0e30a1ead8fb6614d9f6bcbad6a28430c953f314db73a24c8900542a6c12873'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV926(): {sender: Uint8Array, currencies: [v926.CurrencyId, bigint][], dest: v926.V1MultiLocation} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredWithFeeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredWithFee')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
   */
  get isV916(): boolean {
    return this._chain.getEventHash('XTokens.TransferredWithFee') === 'ea04b40f3e87d7373c5ae2b8e1e0a30ae814b70e9ca9d372aa8d6104f48e0460'
  }

  /**
   * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
   */
  get asV916(): [Uint8Array, v916.CurrencyId, bigint, bigint, v916.V1MultiLocation] {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
   */
  get isV920(): boolean {
    return this._chain.getEventHash('XTokens.TransferredWithFee') === 'da8e35b9d31760bf1e5e69b1af205797c4b1aac3caba3d5761be69f9a093f576'
  }

  /**
   * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
   */
  get asV920(): [Uint8Array, v920.CurrencyId, bigint, bigint, v920.V1MultiLocation] {
    assert(this.isV920)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred with fee.
   */
  get isV925(): boolean {
    return this._chain.getEventHash('XTokens.TransferredWithFee') === '93ccfa1565dd0468fda8c4214bf6365d97b04e693cef446b8a19e682f318a689'
  }

  /**
   * Transferred with fee.
   */
  get asV925(): {sender: Uint8Array, currencyId: v925.CurrencyId, amount: bigint, fee: bigint, dest: v925.V1MultiLocation} {
    assert(this.isV925)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmInterfaceTransferredStatemineMultiAssetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmInterface.TransferredStatemineMultiAsset')
    this._chain = ctx._chain
    this.event = event
  }

  get isV927(): boolean {
    return this._chain.getEventHash('XcmInterface.TransferredStatemineMultiAsset') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  get asV927(): [Uint8Array, bigint] {
    assert(this.isV927)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmInterfaceXcmDestWeightUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmInterface.XcmDestWeightUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
   */
  get isV927(): boolean {
    return this._chain.getEventHash('XcmInterface.XcmDestWeightUpdated') === '14293a08c27f8721f07715d2706c4a06783692790f8e40bb15c9490d4847ae54'
  }

  /**
   * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
   */
  get asV927(): [v927.XcmInterfaceOperation, bigint] {
    assert(this.isV927)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmInterfaceXcmFeeUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmInterface.XcmFeeUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
   */
  get isV927(): boolean {
    return this._chain.getEventHash('XcmInterface.XcmFeeUpdated') === 'd9e21a0e3d5c7ab78e4f9b3016fbf12a4fbfeb74a7c8d8c3e9f0666cfd989894'
  }

  /**
   * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
   */
  get asV927(): [v927.XcmInterfaceOperation, bigint] {
    assert(this.isV927)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueBadFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.BadFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Bad XCM format used.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadFormat') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   *  Bad XCM format used.
   */
  get asV1(): (Uint8Array | undefined) {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Bad XCM format used.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadFormat') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
  }

  /**
   * Bad XCM format used.
   */
  get asV952(): {messageHash: (Uint8Array | undefined)} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueBadVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.BadVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Bad XCM version used.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadVersion') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   *  Bad XCM version used.
   */
  get asV1(): (Uint8Array | undefined) {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Bad XCM version used.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadVersion') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
  }

  /**
   * Bad XCM version used.
   */
  get asV952(): {messageHash: (Uint8Array | undefined)} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.Fail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some XCM failed.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === '58320f30925cf0d274ce7b31eb9ae0abd6780f34cc4226829a0926d161e752fa'
  }

  /**
   *  Some XCM failed.
   */
  get asV1(): [(Uint8Array | undefined), v1.XcmError] {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  Some XCM failed.
   */
  get isV902(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === 'a1f5bb5c64ff0009bf12eb565eeff3bd577294ee0d2fed48de191262a2c06f3f'
  }

  /**
   *  Some XCM failed.
   */
  get asV902(): [(Uint8Array | undefined), v902.XcmError] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM failed.
   */
  get isV906(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === 'c719d9ccc723cdf668f55966f450e4217391513459d13dcdea1b99c7e22b2890'
  }

  /**
   * Some XCM failed.
   */
  get asV906(): [(Uint8Array | undefined), v906.V2Error] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM failed.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === '639070abee49a6419e897939fc5b761d561a52efc062a7f1a1183b543e786999'
  }

  /**
   * Some XCM failed.
   */
  get asV926(): [(Uint8Array | undefined), v926.V2Error] {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM failed.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === '8ca5252e46336e4c6a7bffc1927807bb885a90bad49951c5e832eda183f4d365'
  }

  /**
   * Some XCM failed.
   */
  get asV952(): {messageHash: (Uint8Array | undefined), error: v952.V2Error, weight: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueOverweightEnqueuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.OverweightEnqueued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === 'ebfdd28144c52e3beb9a90e53e214e90e6114fc4d52e2c572b7e0a2e8c303bd5'
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get asV926(): [number, number, bigint, bigint] {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '66fcd6ac0f8478601d6008edf04a5f6e1988dad34d2e67484bc112967caeddbb'
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get asV952(): {sender: number, sentAt: number, index: bigint, required: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueOverweightServicedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.OverweightServiced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get asV926(): [bigint, bigint] {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '6de49eae2a9c6e3c2fecdcc4baff436b4272b874de79a1f9f8955ca81e9f47bb'
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get asV952(): {index: bigint, used: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.Success')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some XCM was executed ok.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.Success') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   *  Some XCM was executed ok.
   */
  get asV1(): (Uint8Array | undefined) {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM was executed ok.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('XcmpQueue.Success') === '70e4953d4755440ebd53ef8a5482ada34f27cd1aac56b0493142d711aebc0e85'
  }

  /**
   * Some XCM was executed ok.
   */
  get asV952(): {messageHash: (Uint8Array | undefined), weight: bigint} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueUpwardMessageSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.UpwardMessageSent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An upward message was sent to the relay chain.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   *  An upward message was sent to the relay chain.
   */
  get asV1(): (Uint8Array | undefined) {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get asV952(): {messageHash: (Uint8Array | undefined)} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueXcmpMessageSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.XcmpMessageSent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An HRMP message was sent to a sibling parachain.
   */
  get isV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   *  An HRMP message was sent to a sibling parachain.
   */
  get asV1(): (Uint8Array | undefined) {
    assert(this.isV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get isV952(): boolean {
    return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get asV952(): {messageHash: (Uint8Array | undefined)} {
    assert(this.isV952)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolAssetSwapEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.AssetSwap')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Transact in trading \[owner, recipient, swap_path, balances\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.AssetSwap') === '159d6d9238d17b02ab3a687e4f6089399a062c5efe1bfaa809934fce8349d0c5'
  }

  /**
   *  Transact in trading \[owner, recipient, swap_path, balances\]
   */
  get asV902(): [Uint8Array, Uint8Array, number[], bigint[]] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transact in trading \[owner, recipient, swap_path, balances\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.AssetSwap') === 'e9cbb9bf25ce7ca78f66cb163c5de7b5b796a1f9f5cf2f1d1955496bd76f264e'
  }

  /**
   * Transact in trading \[owner, recipient, swap_path, balances\]
   */
  get asV906(): [Uint8Array, Uint8Array, v906.AssetId[], bigint[]] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolBootstrapClaimEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.BootstrapClaim')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Claim a bootstrap pair. \[bootstrap_pair_account, claimer, receiver, asset_0, asset_1,
   *  asset_0_refund, asset_1_refund, lp_amount\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapClaim') === '4c53e1b529c176a13493412bc4d12d63edf42291c5f9659e8db1408b6ee3f5d5'
  }

  /**
   *  Claim a bootstrap pair. \[bootstrap_pair_account, claimer, receiver, asset_0, asset_1,
   *  asset_0_refund, asset_1_refund, lp_amount\]
   */
  get asV902(): [Uint8Array, Uint8Array, Uint8Array, number, number, bigint, bigint, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Claim a bootstrap pair. \[bootstrap_pair_account, claimer, receiver, asset_0, asset_1,
   * asset_0_refund, asset_1_refund, lp_amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapClaim') === '9f397d74483c63bdeb31933ca67702b49c002073bc385a9e2919eb634445ab6d'
  }

  /**
   * Claim a bootstrap pair. \[bootstrap_pair_account, claimer, receiver, asset_0, asset_1,
   * asset_0_refund, asset_1_refund, lp_amount\]
   */
  get asV906(): [Uint8Array, Uint8Array, Uint8Array, v906.AssetId, v906.AssetId, bigint, bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolBootstrapContributeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.BootstrapContribute')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Contribute to bootstrap pair. \[who, asset_0, asset_0_contribute, asset_1_contribute\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapContribute') === '223db02ba8c64267456fa235b1b82326e4f4963e7956dd88d5f086bb6ba68218'
  }

  /**
   *  Contribute to bootstrap pair. \[who, asset_0, asset_0_contribute, asset_1_contribute\]
   */
  get asV902(): [Uint8Array, number, bigint, number, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Contribute to bootstrap pair. \[who, asset_0, asset_0_contribute, asset_1_contribute\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapContribute') === '726cebd378988611fa5795c5b53a9d8d719e78e47f5eee68164e9079140d07a5'
  }

  /**
   * Contribute to bootstrap pair. \[who, asset_0, asset_0_contribute, asset_1_contribute\]
   */
  get asV906(): [Uint8Array, v906.AssetId, bigint, v906.AssetId, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolBootstrapCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.BootstrapCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Create a bootstrap pair. \[bootstrap_pair_account, asset_0, asset_1,
   *  min_contribution_0,min_contribution_1, total_supply_0,total_supply_1, end\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapCreated') === '5a07e4c1c3440910d5af3a3bee0e8e53695cebbe3cf539333619e3e4b96c671e'
  }

  /**
   *  Create a bootstrap pair. \[bootstrap_pair_account, asset_0, asset_1,
   *  min_contribution_0,min_contribution_1, total_supply_0,total_supply_1, end\]
   */
  get asV902(): [Uint8Array, number, number, bigint, bigint, bigint, bigint, number] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Create a bootstrap pair. \[bootstrap_pair_account, asset_0, asset_1,
   * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1, end\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapCreated') === 'a77a9eeb930843adbd7f90994be473145cd760add6920bb1a62eb814654fb701'
  }

  /**
   * Create a bootstrap pair. \[bootstrap_pair_account, asset_0, asset_1,
   * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1, end\]
   */
  get asV906(): [Uint8Array, v906.AssetId, v906.AssetId, bigint, bigint, bigint, bigint, number] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolBootstrapEndEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.BootstrapEnd')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bootstrap pair end. \[asset_0, asset_1, asset_0_amount, asset_1_amount,
   *  total_lp_supply]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapEnd') === '5551b8e83ca7ab19835890250cfc0163d1746ba471b6aa28451eb4d17ee57aaf'
  }

  /**
   *  A bootstrap pair end. \[asset_0, asset_1, asset_0_amount, asset_1_amount,
   *  total_lp_supply]
   */
  get asV902(): [number, number, bigint, bigint, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bootstrap pair end. \[asset_0, asset_1, asset_0_amount, asset_1_amount,
   * total_lp_supply]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapEnd') === '5f5d55fa972999c10c97887cd2f66c1de65b1073ea28762a6a76905861421c32'
  }

  /**
   * A bootstrap pair end. \[asset_0, asset_1, asset_0_amount, asset_1_amount,
   * total_lp_supply]
   */
  get asV906(): [v906.AssetId, v906.AssetId, bigint, bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolBootstrapRefundEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.BootstrapRefund')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Refund from disable bootstrap pair. \[bootstrap_pair_account, caller, asset_0, asset_1,
   *  asset_0_refund, asset_1_refund\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapRefund') === 'f1f80c0c4b1a63a8d82e19c1ceed545e5d3bb2a0d54b63543ac8e6d73dc6db0b'
  }

  /**
   *  Refund from disable bootstrap pair. \[bootstrap_pair_account, caller, asset_0, asset_1,
   *  asset_0_refund, asset_1_refund\]
   */
  get asV902(): [Uint8Array, Uint8Array, number, number, bigint, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Refund from disable bootstrap pair. \[bootstrap_pair_account, caller, asset_0, asset_1,
   * asset_0_refund, asset_1_refund\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapRefund') === 'e217f75c475cb3242c0504d6751e8aca1b4ddb966974f760d49ee271a7a1941b'
  }

  /**
   * Refund from disable bootstrap pair. \[bootstrap_pair_account, caller, asset_0, asset_1,
   * asset_0_refund, asset_1_refund\]
   */
  get asV906(): [Uint8Array, Uint8Array, v906.AssetId, v906.AssetId, bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolBootstrapUpdateEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.BootstrapUpdate')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Update a bootstrap pair. \[caller, asset_0, asset_1,
   *  min_contribution_0,min_contribution_1, total_supply_0,total_supply_1\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapUpdate') === '5a07e4c1c3440910d5af3a3bee0e8e53695cebbe3cf539333619e3e4b96c671e'
  }

  /**
   *  Update a bootstrap pair. \[caller, asset_0, asset_1,
   *  min_contribution_0,min_contribution_1, total_supply_0,total_supply_1\]
   */
  get asV902(): [Uint8Array, number, number, bigint, bigint, bigint, bigint, number] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Update a bootstrap pair. \[caller, asset_0, asset_1,
   * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.BootstrapUpdate') === 'a77a9eeb930843adbd7f90994be473145cd760add6920bb1a62eb814654fb701'
  }

  /**
   * Update a bootstrap pair. \[caller, asset_0, asset_1,
   * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1\]
   */
  get asV906(): [Uint8Array, v906.AssetId, v906.AssetId, bigint, bigint, bigint, bigint, number] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolBurnedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.Burned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some assets were burned. \[asset_id, owner, amount\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.Burned') === '491d5eb10503fbf716b3399d749f1a02c0a60c5f903a500a8ed4f9f98fd07f34'
  }

  /**
   *  Some assets were burned. \[asset_id, owner, amount\]
   */
  get asV902(): [number, Uint8Array, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some assets were burned. \[asset_id, owner, amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.Burned') === 'e4eeef0eec41bfc805e5f50309b959d152e5ab690f4cb216786d30475ae2d654'
  }

  /**
   * Some assets were burned. \[asset_id, owner, amount\]
   */
  get asV906(): [v906.AssetId, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolChargeRewardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.ChargeReward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Charge reward into a bootstrap.
   */
  get isV914(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.ChargeReward') === 'b5ae49fb929f0953669397de4c61e106b6d41d4f7d56edde962056d7a98c6fe3'
  }

  /**
   * Charge reward into a bootstrap.
   */
  get asV914(): [v914.AssetId, v914.AssetId, Uint8Array, [v914.AssetId, bigint][]] {
    assert(this.isV914)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolDistributeRewardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.DistributeReward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Bootstrap distribute some rewards to contributors.
   */
  get isV914(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.DistributeReward') === 'b5ae49fb929f0953669397de4c61e106b6d41d4f7d56edde962056d7a98c6fe3'
  }

  /**
   * Bootstrap distribute some rewards to contributors.
   */
  get asV914(): [v914.AssetId, v914.AssetId, Uint8Array, [v914.AssetId, bigint][]] {
    assert(this.isV914)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolLiquidityAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.LiquidityAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
   *  mint_balance_lp\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.LiquidityAdded') === '5fa357ce7da650f5b735003f8e97db8c734e1f20971d8bbd1aa763d2234bd502'
  }

  /**
   *  Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
   *  mint_balance_lp\]
   */
  get asV902(): [Uint8Array, number, number, bigint, bigint, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
   * mint_balance_lp\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.LiquidityAdded') === '1bfafadda80f84623e855502fa86cbd5fb805fa26a6254ee45104d1d976c2219'
  }

  /**
   * Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
   * mint_balance_lp\]
   */
  get asV906(): [Uint8Array, v906.AssetId, v906.AssetId, bigint, bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolLiquidityRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.LiquidityRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
   *  burn_balance_lp\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.LiquidityRemoved') === 'ed57df84841c01932655b4a0801d9728dd07d3b3f51c350a1a20d3731f980afb'
  }

  /**
   *  Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
   *  burn_balance_lp\]
   */
  get asV902(): [Uint8Array, Uint8Array, number, number, bigint, bigint, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
   * burn_balance_lp\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.LiquidityRemoved') === '9decbbc0fd030ae8322c18bf256e4f3ace487600f6cf3b11b8961ab923a40bf1'
  }

  /**
   * Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
   * burn_balance_lp\]
   */
  get asV906(): [Uint8Array, Uint8Array, v906.AssetId, v906.AssetId, bigint, bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolMintedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.Minted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some assets were minted. \[asset_id, owner, amount\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.Minted') === '491d5eb10503fbf716b3399d749f1a02c0a60c5f903a500a8ed4f9f98fd07f34'
  }

  /**
   *  Some assets were minted. \[asset_id, owner, amount\]
   */
  get asV902(): [number, Uint8Array, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some assets were minted. \[asset_id, owner, amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.Minted') === 'e4eeef0eec41bfc805e5f50309b959d152e5ab690f4cb216786d30475ae2d654'
  }

  /**
   * Some assets were minted. \[asset_id, owner, amount\]
   */
  get asV906(): [v906.AssetId, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolPairCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.PairCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Swap
   *  Create a trading pair. \[asset_0, asset_1\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.PairCreated') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   *  Swap
   *  Create a trading pair. \[asset_0, asset_1\]
   */
  get asV902(): [number, number] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Swap
   * Create a trading pair. \[asset_0, asset_1\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.PairCreated') === '911b42e78e1203830b12e06de8a355b6c5efa5dc9bbf88a02d2f42a507b36000'
  }

  /**
   * Swap
   * Create a trading pair. \[asset_0, asset_1\]
   */
  get asV906(): [v906.AssetId, v906.AssetId] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Foreign Asset
   *  Some assets were transferred. \[asset_id, owner, target, amount\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.Transferred') === 'd6b774c5b258baa877a8319bea3e3f8d42d54077cfd3ad4848765f205196496c'
  }

  /**
   *  Foreign Asset
   *  Some assets were transferred. \[asset_id, owner, target, amount\]
   */
  get asV902(): [number, Uint8Array, Uint8Array, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Foreign Asset
   * Some assets were transferred. \[asset_id, owner, target, amount\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.Transferred') === '5c4552595fe36fc54d7e59c702065e08f2e90579360c5cbee3d4c769b7849c80'
  }

  /**
   * Foreign Asset
   * Some assets were transferred. \[asset_id, owner, target, amount\]
   */
  get asV906(): [v906.AssetId, Uint8Array, Uint8Array, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolTransferredToParachainEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.TransferredToParachain')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Transfer by xcm
   *  Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
   */
  get isV902(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.TransferredToParachain') === '3971140a9a081bb392b540c1757ba5275bc48ec855e5d6c107c27e07807d522d'
  }

  /**
   *  Transfer by xcm
   *  Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
   */
  get asV902(): [number, Uint8Array, number, Uint8Array, bigint, bigint] {
    assert(this.isV902)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer by xcm
   * Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.TransferredToParachain') === '4d00bf0ac4a700d0211bdc1147faad1ebd365229cdb1db9a5329ebb10f91f989'
  }

  /**
   * Transfer by xcm
   * Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
   */
  get asV906(): [v906.AssetId, Uint8Array, number, Uint8Array, bigint, bigint] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkProtocolWithdrawRewardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkProtocol.WithdrawReward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Withdraw all reward from a bootstrap.
   */
  get isV914(): boolean {
    return this._chain.getEventHash('ZenlinkProtocol.WithdrawReward') === 'e0e00821b93517c8655ae29c76312d876524dae73d220d6732bfc3f70140bc31'
  }

  /**
   * Withdraw all reward from a bootstrap.
   */
  get asV914(): [v914.AssetId, v914.AssetId, Uint8Array] {
    assert(this.isV914)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmAddLiquidityEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.AddLiquidity')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Supply some liquidity to a pool.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.AddLiquidity') === 'a13771fa4a43699908fd74b590a40e3758df36687bc93151bb61c4d8276f23d5'
  }

  /**
   * Supply some liquidity to a pool.
   */
  get asV962(): {poolId: number, who: Uint8Array, to: Uint8Array, supplyAmounts: bigint[], fees: bigint[], newD: bigint, mintAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmCollectProtocolFeeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.CollectProtocolFee')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A pool's admin fee was collected.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.CollectProtocolFee') === '1434eafc6b641157dc2a1c41fdcfb3ef32f10e47c59cf312305b8cbdb0e1e76d'
  }

  /**
   * A pool's admin fee was collected.
   */
  get asV962(): {poolId: number, currencyId: v962.CurrencyId, feeAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmCreatePoolEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.CreatePool')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A pool was created.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.CreatePool') === 'bc232eaed8b1e17eb03fc60890b1bb385caaaaee7d4403007cc0ef9daa5e4497'
  }

  /**
   * A pool was created.
   */
  get asV962(): {poolId: number, currencyIds: v962.CurrencyId[], lpCurrencyId: v962.CurrencyId, a: bigint, account: Uint8Array, adminFeeReceiver: Uint8Array} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmCurrencyExchangeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.CurrencyExchange')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Swap a amounts of currency to get other.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.CurrencyExchange') === '0abe856f4fa3b499a28439696d7ae07664a33ec25834861bc9032b5d4950a766'
  }

  /**
   * Swap a amounts of currency to get other.
   */
  get asV962(): {poolId: number, who: Uint8Array, to: Uint8Array, inIndex: number, inAmount: bigint, outIndex: number, outAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmCurrencyExchangeUnderlyingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.CurrencyExchangeUnderlying')
    this._chain = ctx._chain
    this.event = event
  }

  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.CurrencyExchangeUnderlying') === '823461463f9697650d4ce7cc80ef5381f9daf80878ee5e50f544f33ed7a801e5'
  }

  get asV962(): {poolId: number, account: Uint8Array, inAmount: bigint, outAmount: bigint, currencyIndexFrom: number, currencyIndexTo: number, to: Uint8Array} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmNewAdminFeeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.NewAdminFee')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A pool's admin fee parameters was updated
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.NewAdminFee') === '354aacd87525ee5edab25bfc7703181a00e6bb535431cf8546eea25c7f0fcf9d'
  }

  /**
   * A pool's admin fee parameters was updated
   */
  get asV962(): {poolId: number, newAdminFee: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmNewSwapFeeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.NewSwapFee')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A pool's swap fee parameters was updated
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.NewSwapFee') === '5a651444f44feda108605f5777f9ad6e8411982c46c30660727dcdc176f49c48'
  }

  /**
   * A pool's swap fee parameters was updated
   */
  get asV962(): {poolId: number, newSwapFee: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmRampAEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.RampA')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A pool's 'A' was ramped.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.RampA') === '7b68a66885524178bb44065b2e582a84182f823028546065ebfb1f57e1d0d23a'
  }

  /**
   * A pool's 'A' was ramped.
   */
  get asV962(): {poolId: number, initialAPrecise: bigint, futureAPrecise: bigint, now: bigint, futureATime: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmRemoveLiquidityEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.RemoveLiquidity')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Remove some liquidity from a pool.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.RemoveLiquidity') === 'dfcb09ba3f04d8111a917fe1f5c015f63a37a2fad3f099a51c4e4d6947e2897a'
  }

  /**
   * Remove some liquidity from a pool.
   */
  get asV962(): {poolId: number, who: Uint8Array, to: Uint8Array, amounts: bigint[], fees: bigint[], newTotalSupply: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmRemoveLiquidityImbalanceEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.RemoveLiquidityImbalance')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Remove liquidity from a pool with specify the amounts of currencies to be obtained.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.RemoveLiquidityImbalance') === '10a06055b26d29d4edf0fd4013507e14c8d9faf081f40343e65ece722420dfe8'
  }

  /**
   * Remove liquidity from a pool with specify the amounts of currencies to be obtained.
   */
  get asV962(): {poolId: number, who: Uint8Array, to: Uint8Array, amounts: bigint[], fees: bigint[], newD: bigint, newTotalSupply: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmRemoveLiquidityOneCurrencyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.RemoveLiquidityOneCurrency')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Remove some liquidity from a pool to get only one currency.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.RemoveLiquidityOneCurrency') === 'd0484a35187cdea462d9cb064b1da7e078fe25dff0beb942975e4f6864174ff8'
  }

  /**
   * Remove some liquidity from a pool to get only one currency.
   */
  get asV962(): {poolId: number, who: Uint8Array, to: Uint8Array, outIndex: number, burnAmount: bigint, outAmount: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmStopRampAEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.StopRampA')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A pool's ramping A was stopped.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.StopRampA') === 'fc1b139dfd785c705786115f6cc39954794ae2fd5676bc405016f1b75d88283e'
  }

  /**
   * A pool's ramping A was stopped.
   */
  get asV962(): {poolId: number, currentA: bigint, now: bigint} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}

export class ZenlinkStableAmmUpdateAdminFeeReceiverEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ZenlinkStableAMM.UpdateAdminFeeReceiver')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A pool's admin_fee_receiver was updated.
   */
  get isV962(): boolean {
    return this._chain.getEventHash('ZenlinkStableAMM.UpdateAdminFeeReceiver') === 'c81e935868d173464ba40a076d61805693b9abe6443d8d16415248d2cc327fa9'
  }

  /**
   * A pool's admin_fee_receiver was updated.
   */
  get asV962(): {poolId: number, adminFeeReceiver: Uint8Array} {
    assert(this.isV962)
    return this._chain.decodeEvent(this.event)
  }
}
