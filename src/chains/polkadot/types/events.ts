import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v0 from './v0'
import * as v5 from './v5'
import * as v8 from './v8'
import * as v15 from './v15'
import * as v29 from './v29'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9110 from './v9110'
import * as v9140 from './v9140'
import * as v9170 from './v9170'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9200 from './v9200'
import * as v9220 from './v9220'
import * as v9230 from './v9230'
import * as v9280 from './v9280'
import * as v9291 from './v9291'
import * as v9300 from './v9300'
import * as v9340 from './v9340'
import * as v9370 from './v9370'
import * as v9420 from './v9420'

export class AuctionsAuctionClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.AuctionClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An auction ended. All funds become unreserved. `[auction_index]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Auctions.AuctionClosed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * An auction ended. All funds become unreserved. `[auction_index]`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An auction ended. All funds become unreserved.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Auctions.AuctionClosed') === 'b43a4f04c143465b1befbba20a53ad22053012b22824f10dc981cf180e36e10d'
    }

    /**
     * An auction ended. All funds become unreserved.
     */
    get asV9230(): {auctionIndex: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsAuctionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.AuctionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     * `[auction_index, lease_period, ending]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Auctions.AuctionStarted') === 'ee14df8652ec18f0202c95706dac25953673d4834fcfe21e7d7559cb96975c06'
    }

    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     * `[auction_index, lease_period, ending]`
     */
    get asV9110(): [number, number, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Auctions.AuctionStarted') === '8b2d1722dc0088981b41be544b21195e4f399c63086aae153946e56fab444698'
    }

    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    get asV9230(): {auctionIndex: number, leasePeriod: number, ending: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsBidAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.BidAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new bid has been accepted as the current winner.
     * `[who, para_id, amount, first_slot, last_slot]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Auctions.BidAccepted') === '89884350b7a4ca0c3118205f5dd286d5dc73be6020a05db22ce70b152f4d165e'
    }

    /**
     * A new bid has been accepted as the current winner.
     * `[who, para_id, amount, first_slot, last_slot]`
     */
    get asV9110(): [Uint8Array, number, bigint, number, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new bid has been accepted as the current winner.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Auctions.BidAccepted') === 'd351ff1617e3b6a9ea0a145957d1071c8f96f30490cd8f8cb5287a3bc9c81fa6'
    }

    /**
     * A new bid has been accepted as the current winner.
     */
    get asV9230(): {bidder: Uint8Array, paraId: number, amount: bigint, firstSlot: number, lastSlot: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsReserveConfiscatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.ReserveConfiscated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     * `[parachain_id, leaser, amount]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Auctions.ReserveConfiscated') === '491d5eb10503fbf716b3399d749f1a02c0a60c5f903a500a8ed4f9f98fd07f34'
    }

    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     * `[parachain_id, leaser, amount]`
     */
    get asV9110(): [number, Uint8Array, bigint] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Auctions.ReserveConfiscated') === '2ceaebb4a3710db29f1123153ea5f645630fdb49f4e00078ea741df82c007592'
    }

    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     */
    get asV9230(): {paraId: number, leaser: Uint8Array, amount: bigint} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total. `[bidder, extra_reserved, total_amount]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Auctions.Reserved') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total. `[bidder, extra_reserved, total_amount]`
     */
    get asV9110(): [Uint8Array, bigint, bigint] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Auctions.Reserved') === 'be3d717bc6827d9da650f48f75e515ba62d3161c7eb0137129ab2057c11e2367'
    }

    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    get asV9230(): {bidder: Uint8Array, extraReserved: bigint, totalAmount: bigint} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Auctions.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    get asV9110(): [Uint8Array, bigint] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Auctions.Unreserved') === '1fbdeb84319a91e9d51edbf87a246fb5d72d27c6481f5903412fb369e7274cbe'
    }

    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    get asV9230(): {bidder: Uint8Array, amount: bigint} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsWinningOffsetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.WinningOffset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     * `[auction_index, block_number]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Auctions.WinningOffset') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     * `[auction_index, block_number]`
     */
    get asV9110(): [number, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Auctions.WinningOffset') === 'e9bebdc1a926c4f6ea932110731c67970957cf98defb8800d5f773934139ecde'
    }

    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     */
    get asV9230(): {auctionIndex: number, blockNumber: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class BagsListRebaggedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'BagsList.Rebagged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Moved an account from one bag to another.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('BagsList.Rebagged') === '7c6f9f7c01916b66130aa25ffe6ba9b00599c0af74b1238a9876c164819dde4e'
    }

    /**
     * Moved an account from one bag to another.
     */
    get asV9140(): {who: Uint8Array, from: bigint, to: bigint} {
        assert(this.isV9140)
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
     *  A balance was set by root (who, free, reserved).
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  A balance was set by root (who, free, reserved).
     */
    get asV0(): [Uint8Array, bigint, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV9140(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '8c52e43e845654720e1db5c5bd166f80eb777baf474e93ce4d20fd385601a8fb'
    }

    /**
     * A balance was set by root.
     */
    get asV9420(): {who: Uint8Array, free: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was burned from an account.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Burned') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was burned from an account.
     */
    get asV9420(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
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
     *  Some amount was deposited (e.g. for transaction fees).
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some amount was deposited (e.g. for transaction fees).
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV9140(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9140)
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
     *  resulting in an outright loss.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss.
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV9140(): {account: Uint8Array, amount: bigint} {
        assert(this.isV9140)
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
     *  An account was created with some free balance.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was created with some free balance.
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV9140(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Frozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was frozen.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Frozen') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was frozen.
     */
    get asV9420(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesIssuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Issued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Issued') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    get asV9420(): {amount: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Locked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was locked.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Locked') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was locked.
     */
    get asV9420(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Minted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was minted into an account.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Minted') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was minted into an account.
     */
    get asV9420(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesRescindedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Rescinded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Rescinded') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    get asV9420(): {amount: bigint} {
        assert(this.isV9420)
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
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
    }

    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     */
    get asV8(): [Uint8Array, Uint8Array, bigint, v8.BalanceStatus] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV9140(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v9140.BalanceStatus} {
        assert(this.isV9140)
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
     *  Some balance was reserved (moved from free to reserved).
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was reserved (moved from free to reserved).
     */
    get asV8(): [Uint8Array, bigint] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV9140(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesRestoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Restored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was restored into an account.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Restored') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was restored into an account.
     */
    get asV9420(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
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
    get isV9122(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior). \[who,
     * amount_slashed\]
     */
    get asV9122(): [Uint8Array, bigint] {
        assert(this.isV9122)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV9140(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesSuspendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Suspended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Suspended') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    get asV9420(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Thawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was thawed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Thawed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was thawed.
     */
    get asV9420(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
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
     *  Transfer succeeded (from, to, value).
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Transfer succeeded (from, to, value).
     */
    get asV0(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV9140(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Unlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was unlocked.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Unlocked') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unlocked.
     */
    get asV9420(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
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
     *  Some balance was unreserved (moved from reserved to free).
     */
    get isV8(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was unreserved (moved from reserved to free).
     */
    get asV8(): [Uint8Array, bigint] {
        assert(this.isV8)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV9140(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUpgradedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Upgraded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was upgraded.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Balances.Upgraded') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * An account was upgraded.
     */
    get asV9420(): {who: Uint8Array} {
        assert(this.isV9420)
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
    get isV9122(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
     */
    get asV9122(): [Uint8Array, bigint] {
        assert(this.isV9122)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV9140(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Bounties.BountyAwarded') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
     */
    get asV28(): [number, Uint8Array] {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get asV9140(): {index: number, beneficiary: Uint8Array} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Bounties.BountyBecameActive') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty proposal is funded and became active. \[index\]
     */
    get asV28(): number {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get asV9140(): {index: number} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Bounties.BountyCanceled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty is cancelled. \[index\]
     */
    get asV28(): number {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty is cancelled.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty is cancelled.
     */
    get asV9140(): {index: number} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Bounties.BountyClaimed') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
    }

    /**
     *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
     */
    get asV28(): [number, bigint, Uint8Array] {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get asV9140(): {index: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Bounties.BountyExtended') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty expiry is extended. \[index\]
     */
    get asV28(): number {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty expiry is extended.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty expiry is extended.
     */
    get asV9140(): {index: number} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Bounties.BountyProposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New bounty proposal. \[index\]
     */
    get asV28(): number {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New bounty proposal.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * New bounty proposal.
     */
    get asV9140(): {index: number} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Bounties.BountyRejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
     */
    get asV28(): [number, bigint] {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get asV9140(): {index: number, bond: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Added')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is added.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('ChildBounties.Added') === '9fb3a6aad6bc40cae151ada4822c8213e0d9958e4af9bf7189d4ce52bd045bd3'
    }

    /**
     * A child-bounty is added.
     */
    get asV9190(): {index: number, childIndex: number} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Awarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is awarded to a beneficiary.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('ChildBounties.Awarded') === '0a085a42ecce2b9e3c0b81694d10406a346b17c1ef5e244816a4e7d7438840da'
    }

    /**
     * A child-bounty is awarded to a beneficiary.
     */
    get asV9190(): {index: number, childIndex: number, beneficiary: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Canceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is cancelled.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('ChildBounties.Canceled') === '9fb3a6aad6bc40cae151ada4822c8213e0d9958e4af9bf7189d4ce52bd045bd3'
    }

    /**
     * A child-bounty is cancelled.
     */
    get asV9190(): {index: number, childIndex: number} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is claimed by beneficiary.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('ChildBounties.Claimed') === 'dfad8943decb48ed737eb4081add3d6fcb6f4dea668600b36619e88a793cd08e'
    }

    /**
     * A child-bounty is claimed by beneficiary.
     */
    get asV9190(): {index: number, childIndex: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone claimed some DOTs.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Claims.Claimed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
    }

    /**
     *  Someone claimed some DOTs.
     */
    get asV0(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone claimed some DOTs.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Claims.Claimed') === 'b531097805a7255730ef1f4b9fb31dcd004dfcff933248b0a47610d6c2c62501'
    }

    /**
     * Someone claimed some DOTs.
     */
    get asV9230(): {who: Uint8Array, ethereumAddress: Uint8Array, amount: bigint} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class ConvictionVotingDelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ConvictionVoting.Delegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('ConvictionVoting.Delegated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    get asV9420(): [Uint8Array, Uint8Array] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ConvictionVotingUndelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ConvictionVoting.Undelegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('ConvictionVoting.Undelegated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    get asV9420(): Uint8Array {
        assert(this.isV9420)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Council.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was approved by the required threshold.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV9140(): {proposalHash: Uint8Array} {
        assert(this.isV9140)
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
     *  A proposal was closed after its duration was up.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Council.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     *  A proposal was closed after its duration was up.
     */
    get asV0(): [Uint8Array, number, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV9140(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV9140)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was not approved by the required threshold.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV9140(): {proposalHash: Uint8Array} {
        assert(this.isV9140)
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
     *  A motion was executed; `bool` is true if returned without error.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A motion was executed; `bool` is true if returned without error.
     */
    get asV0(): [Uint8Array, v0.DispatchResult] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Council.Executed') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV9110(): [Uint8Array, v9110.Type_31] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Council.Executed') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9140(): {proposalHash: Uint8Array, result: v9140.Type_28} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Council.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9170(): {proposalHash: Uint8Array, result: v9170.Type_29} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9190(): {proposalHash: Uint8Array, result: v9190.Type_30} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9340(): {proposalHash: Uint8Array, result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Council.Executed') === 'c0a7075d1db65c853af68dee8fccfd68bc709058c1c831fa5759250c8549e688'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9420(): {proposalHash: Uint8Array, result: v9420.Type_33} {
        assert(this.isV9420)
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
     *  A single member did some action; `bool` is true if returned without error.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A single member did some action; `bool` is true if returned without error.
     */
    get asV0(): [Uint8Array, v0.DispatchResult] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV9110(): [Uint8Array, v9110.Type_31] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9140(): {proposalHash: Uint8Array, result: v9140.Type_28} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9170(): {proposalHash: Uint8Array, result: v9170.Type_29} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9190(): {proposalHash: Uint8Array, result: v9190.Type_30} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9340(): {proposalHash: Uint8Array, result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === 'c0a7075d1db65c853af68dee8fccfd68bc709058c1c831fa5759250c8549e688'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9420(): {proposalHash: Uint8Array, result: v9420.Type_33} {
        assert(this.isV9420)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     */
    get asV0(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV9140(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV9140)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Council.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV0(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV9140(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanAddedToNewRaiseEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.AddedToNewRaise')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A parachain has been moved to `NewRaise`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.AddedToNewRaise') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A parachain has been moved to `NewRaise`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A parachain has been moved to `NewRaise`
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.AddedToNewRaise') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * A parachain has been moved to `NewRaise`
     */
    get asV9230(): {paraId: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanAllRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.AllRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * All loans in a fund have been refunded. `[fund_index]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.AllRefunded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * All loans in a fund have been refunded. `[fund_index]`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * All loans in a fund have been refunded.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.AllRefunded') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * All loans in a fund have been refunded.
     */
    get asV9230(): {paraId: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanContributedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Contributed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Contributed to a crowd sale. `[who, fund_index, amount]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.Contributed') === 'ad00729b31f26d2879a6f96c1691ed42a69cd4947c75e84221a6bde93a3415bc'
    }

    /**
     * Contributed to a crowd sale. `[who, fund_index, amount]`
     */
    get asV9110(): [Uint8Array, number, bigint] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Contributed to a crowd sale.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.Contributed') === 'a09bba4441a47a7b463e5f26020197386183019a6130ce697a434ee31cc39482'
    }

    /**
     * Contributed to a crowd sale.
     */
    get asV9230(): {who: Uint8Array, fundIndex: number, amount: bigint} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Create a new crowdloaning campaign. `[fund_index]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.Created') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Create a new crowdloaning campaign. `[fund_index]`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Create a new crowdloaning campaign.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.Created') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * Create a new crowdloaning campaign.
     */
    get asV9230(): {paraId: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanDissolvedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Dissolved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fund is dissolved. `[fund_index]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.Dissolved') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Fund is dissolved. `[fund_index]`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Fund is dissolved.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.Dissolved') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * Fund is dissolved.
     */
    get asV9230(): {paraId: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanEditedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Edited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The configuration to a crowdloan has been edited. `[fund_index]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.Edited') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * The configuration to a crowdloan has been edited. `[fund_index]`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The configuration to a crowdloan has been edited.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.Edited') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * The configuration to a crowdloan has been edited.
     */
    get asV9230(): {paraId: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanHandleBidResultEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.HandleBidResult')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === 'c83a84e76e348dd28ec0b3d255b3b6614da57c66bcdca25e179abc516b1d0b15'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV9110(): [number, v9110.Type_31] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === '8159d5e587c84f0899d12de703084084149b6b2632ad345911a98bcbd65c0eee'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV9170(): [number, v9170.Type_29] {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === 'c2eba43b0fe876eabdf24128dcf601a1f04a20eb53ee0f792160be8c40d5b679'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV9190(): [number, v9190.Type_30] {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === 'cd89e705d3ce823edfa3bdcdf761e7811e97af82851305d916784e0e97ba8cc5'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV9230(): {paraId: number, result: v9230.Type_30} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === '83e7fdd7c42720aa50d20c9b8945af9e8ffb939452047d83d6c9a0eb29e9d0ec'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV9340(): {paraId: number, result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === 'dad0633e1d0e651651b57261e1cab48a51f7679850620f2fc0ab6b30b146e984'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV9420(): {paraId: number, result: v9420.Type_33} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanMemoUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.MemoUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A memo has been updated. `[who, fund_index, memo]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.MemoUpdated') === 'bc344a4eda76ae6afcf6577c1083b1c2c61c0a694e1577af3d7767f08dd1fc40'
    }

    /**
     * A memo has been updated. `[who, fund_index, memo]`
     */
    get asV9110(): [Uint8Array, number, Uint8Array] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A memo has been updated.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.MemoUpdated') === '2a9892b8f4e1d06ab30af22f0706a459528fcb9a6f3f85b25bd4d895be00bef7'
    }

    /**
     * A memo has been updated.
     */
    get asV9230(): {who: Uint8Array, paraId: number, memo: Uint8Array} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanPartiallyRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.PartiallyRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed. `[fund_index]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.PartiallyRefunded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed. `[fund_index]`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.PartiallyRefunded') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    get asV9230(): {paraId: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanWithdrewEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Withdrew')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Withdrew full balance of a contributor. `[who, fund_index, amount]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Crowdloan.Withdrew') === 'ad00729b31f26d2879a6f96c1691ed42a69cd4947c75e84221a6bde93a3415bc'
    }

    /**
     * Withdrew full balance of a contributor. `[who, fund_index, amount]`
     */
    get asV9110(): [Uint8Array, number, bigint] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Withdrew full balance of a contributor.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Crowdloan.Withdrew') === 'a09bba4441a47a7b463e5f26020197386183019a6130ce697a434ee31cc39482'
    }

    /**
     * Withdrew full balance of a contributor.
     */
    get asV9230(): {who: Uint8Array, fundIndex: number, amount: bigint} {
        assert(this.isV9230)
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
    get isV25(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A proposal \[hash\] has been blacklisted permanently.
     */
    get asV25(): Uint8Array {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get asV9140(): {proposalHash: Uint8Array} {
        assert(this.isV9140)
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
     *  A referendum has been cancelled.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A referendum has been cancelled.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has been cancelled.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV9140(): {refIndex: number} {
        assert(this.isV9140)
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
     *  An account has delegated their vote to another account.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  An account has delegated their vote to another account.
     */
    get asV0(): [Uint8Array, Uint8Array] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has delegated their vote to another account.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
    }

    /**
     * An account has delegated their vote to another account.
     */
    get asV9140(): {who: Uint8Array, target: Uint8Array} {
        assert(this.isV9140)
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
     *  A proposal has been enacted.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
    }

    /**
     *  A proposal has been enacted.
     */
    get asV0(): [number, boolean] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A proposal has been enacted. \[ref_index, result\]
     */
    get isV9090(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === 'eb9b9aa153af924ae575ee1268a0d7eee3362b24083e39a0c664284fb99e9bf4'
    }

    /**
     *  A proposal has been enacted. \[ref_index, result\]
     */
    get asV9090(): [number, v9090.DispatchResult] {
        assert(this.isV9090)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === 'c83a84e76e348dd28ec0b3d255b3b6614da57c66bcdca25e179abc516b1d0b15'
    }

    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    get asV9110(): [number, v9110.Type_31] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '0077901b6de880646efe44eef6ddcdc431a84c0fe153cc9f8e6e66c9354cbb13'
    }

    /**
     * A proposal has been enacted.
     */
    get asV9140(): {refIndex: number, result: v9140.Type_28} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '270512fa9651c9fa2eb584a439cab409bb758634bd42c08ad5fc0e9bbed943b0'
    }

    /**
     * A proposal has been enacted.
     */
    get asV9170(): {refIndex: number, result: v9170.Type_29} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been enacted.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('Democracy.Executed') === '957b797337eaa1f370b65a94f7685042cc04730ba165349e248cfdde80b53c25'
    }

    /**
     * A proposal has been enacted.
     */
    get asV9190(): {refIndex: number, result: v9190.Type_30} {
        assert(this.isV9190)
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
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  An external proposal has been tabled.
     */
    get asV0(): null {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Democracy.MetadataCleared') === '5973f98e3dfb93077820ad77490dd9fe605110b75a8f006f1565898a599055ab'
    }

    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    get asV9420(): {owner: v9420.MetadataOwner, hash: Uint8Array} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a proposal or a referendum has been set.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Democracy.MetadataSet') === '5973f98e3dfb93077820ad77490dd9fe605110b75a8f006f1565898a599055ab'
    }

    /**
     * Metadata for a proposal or a referendum has been set.
     */
    get asV9420(): {owner: v9420.MetadataOwner, hash: Uint8Array} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyMetadataTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.MetadataTransferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been transferred to new owner.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Democracy.MetadataTransferred') === '6a30d674b0ce2457e6cff0b5493fa843349fa6b51c1641c1ac02b3f35ebbb927'
    }

    /**
     * Metadata has been transferred to new owner.
     */
    get asV9420(): {prevOwner: v9420.MetadataOwner, owner: v9420.MetadataOwner, hash: Uint8Array} {
        assert(this.isV9420)
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
     *  A proposal has been rejected by referendum.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A proposal has been rejected by referendum.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV9140(): {refIndex: number} {
        assert(this.isV9140)
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
     *  A proposal has been approved by referendum.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A proposal has been approved by referendum.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asV9140(): {refIndex: number} {
        assert(this.isV9140)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A proposal could not be executed because its preimage was invalid.
     */
    get asV0(): [Uint8Array, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    get asV9140(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV9140)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A proposal could not be executed because its preimage was missing.
     */
    get asV0(): [Uint8Array, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
    }

    /**
     * A proposal could not be executed because its preimage was missing.
     */
    get asV9140(): {proposalHash: Uint8Array, refIndex: number} {
        assert(this.isV9140)
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
     *  A proposal's preimage was noted, and the deposit taken.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A proposal's preimage was noted, and the deposit taken.
     */
    get asV0(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
    }

    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    get asV9140(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
        assert(this.isV9140)
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
     *  A registered preimage was removed and the deposit collected by the reaper (last item).
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === 'b60e8c24758d2dae6f1d75c508a3141a304f756181262747ee8d704bd555ac86'
    }

    /**
     *  A registered preimage was removed and the deposit collected by the reaper (last item).
     */
    get asV0(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
    }

    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    get asV9140(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
        assert(this.isV9140)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     */
    get asV0(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
    }

    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    get asV9140(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
        assert(this.isV9140)
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
    get isV9250(): boolean {
        return this._chain.getEventHash('Democracy.ProposalCanceled') === '4229a060ed682a59f5b96a0a1d18ae4a471b42fbbe5beff110f3dbb41e7d7224'
    }

    /**
     * A proposal got canceled.
     */
    get asV9250(): {propIndex: number} {
        assert(this.isV9250)
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
     *  A motion has been proposed by a public account.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A motion has been proposed by a public account.
     */
    get asV0(): [number, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asV9140(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV9140)
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
    get isV9170(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
    }

    /**
     * An account has secconded a proposal
     */
    get asV9170(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isV9170)
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
     *  A referendum has begun.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
    }

    /**
     *  A referendum has begun.
     */
    get asV0(): [number, v0.VoteThreshold] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A referendum has begun.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asV9140(): {refIndex: number, threshold: v9140.VoteThreshold} {
        assert(this.isV9140)
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
     *  A public proposal has been tabled for referendum vote.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '21f3d10122d183ae1df61d3456ae07c362a2e0cdffab1829f4febb4f7b53f6bd'
    }

    /**
     *  A public proposal has been tabled for referendum vote.
     */
    get asV0(): [number, bigint, Uint8Array[]] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV9140(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asV9340(): {proposalIndex: number, deposit: bigint} {
        assert(this.isV9340)
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
     *  An account has cancelled a previous delegation operation.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account has cancelled a previous delegation operation.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get asV9140(): {account: Uint8Array} {
        assert(this.isV9140)
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
     *  An account has been unlocked successfully.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Unlocked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account has been unlocked successfully.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
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
     *  An external proposal has been vetoed.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '64ac8a943d1fe7bd7a24f0e53a57114f1d7eb2c98c411ff4d06daf824de450a7'
    }

    /**
     *  An external proposal has been vetoed.
     */
    get asV0(): [Uint8Array, Uint8Array, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An external proposal has been vetoed.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
    }

    /**
     * An external proposal has been vetoed.
     */
    get asV9140(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
        assert(this.isV9140)
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
    get isV9170(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
    }

    /**
     * An account has voted in a referendum
     */
    get asV9170(): {voter: Uint8Array, refIndex: number, vote: v9170.AccountVote} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }
}

export class DummyPurchaseDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DummyPurchase.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    get isV24(): boolean {
        return this._chain.getEventHash('DummyPurchase.Dummy') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    get asV24(): Uint8Array {
        assert(this.isV24)
        return this._chain.decodeEvent(this.event)
    }
}

export class DummyRegistrarDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DummyRegistrar.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    get isV24(): boolean {
        return this._chain.getEventHash('DummyRegistrar.Dummy') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    get asV24(): Uint8Array {
        assert(this.isV24)
        return this._chain.decodeEvent(this.event)
    }
}

export class DummySlotsDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DummySlots.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    get isV24(): boolean {
        return this._chain.getEventHash('DummySlots.Dummy') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    get asV24(): Uint8Array {
        assert(this.isV24)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseElectionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.ElectionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    get isV9291(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    get asV9291(): null {
        assert(this.isV9291)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseElectionFinalizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.ElectionFinalized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The election has been finalized, with `Some` of the given computation, or else if the
     *  election failed, `None`.
     */
    get isV29(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'a7e2e4bf0b2699ad1d84f85eb95524bb1611408ef9f14d8598e801f54e3dc04b'
    }

    /**
     *  The election has been finalized, with `Some` of the given computation, or else if the
     *  election failed, `None`.
     */
    get asV29(): (v29.ElectionCompute | undefined) {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'b2577c1eba209d31d5bb04e08a528824f030a3f2324d4ccec5675fcb6d285581'
    }

    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    get asV9110(): (v9110.ElectionCompute | undefined) {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'd5e51cdb9bc2ebeb883517f810340524dcf71a9a43a1f33048bda8bd8170c4dc'
    }

    /**
     * The election has been finalized, with `Some` of the given computation, or else if the
     * election failed, `None`.
     */
    get asV9140(): {electionCompute: (v9140.ElectionCompute | undefined)} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get isV9291(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'ed50f7c0b841dc5aadb056d9e4cf2c665a79bd8ac019de47ef20e466590483fa'
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get asV9291(): {compute: v9291.ElectionCompute, score: v9291.ElectionScore} {
        assert(this.isV9291)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhasePhaseTransitionedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.PhaseTransitioned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * There was a phase transition in a given round.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.PhaseTransitioned') === 'c7ca79c013a2eb6682b0eae5badc17841b3fa2ec00221d968b3e1fb4ce1f7d8f'
    }

    /**
     * There was a phase transition in a given round.
     */
    get asV9370(): {from: v9370.Phase, to: v9370.Phase, round: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has been rewarded for their signed submission being finalized.
     */
    get isV29(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Rewarded') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account has been rewarded for their signed submission being finalized.
     */
    get asV29(): Uint8Array {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  An account has been rewarded for their signed submission being finalized.
     */
    get isV9090(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Rewarded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has been rewarded for their signed submission being finalized.
     */
    get asV9090(): [Uint8Array, bigint] {
        assert(this.isV9090)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Rewarded') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get asV9140(): {account: Uint8Array, value: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSignedPhaseStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.SignedPhaseStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The signed phase of the given round has started.
     */
    get isV29(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SignedPhaseStarted') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  The signed phase of the given round has started.
     */
    get asV29(): number {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The signed phase of the given round has started.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SignedPhaseStarted') === 'd89ab9d594e1e03a0c162ea44af35fd5f31a6e7f82a4941cac8b4bdc1e2cdeb3'
    }

    /**
     * The signed phase of the given round has started.
     */
    get asV9140(): {round: number} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has been slashed for submitting an invalid signed submission.
     */
    get isV29(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Slashed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account has been slashed for submitting an invalid signed submission.
     */
    get asV29(): Uint8Array {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  An account has been slashed for submitting an invalid signed submission.
     */
    get isV9090(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has been slashed for submitting an invalid signed submission.
     */
    get asV9090(): [Uint8Array, bigint] {
        assert(this.isV9090)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Slashed') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get asV9140(): {account: Uint8Array, value: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSolutionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.SolutionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A solution was stored with the given compute.
     * 
     *  If the solution is signed, this means that it hasn't yet been processed. If the
     *  solution is unsigned, this means that it has also been processed.
     */
    get isV29(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '0bf020e543ea88729b1b61dbeb14181ab6acba99a0e1795514718dacf33fb459'
    }

    /**
     *  A solution was stored with the given compute.
     * 
     *  If the solution is signed, this means that it hasn't yet been processed. If the
     *  solution is unsigned, this means that it has also been processed.
     */
    get asV29(): v29.ElectionCompute {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A solution was stored with the given compute.
     * 
     *  If the solution is signed, this means that it hasn't yet been processed. If the
     *  solution is unsigned, this means that it has also been processed.
     * 
     *  The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get isV9080(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === 'd7270b68f15b9c9bf72e9f88a600b119665db679e44e63f922d6c49d57dbc719'
    }

    /**
     *  A solution was stored with the given compute.
     * 
     *  If the solution is signed, this means that it hasn't yet been processed. If the
     *  solution is unsigned, this means that it has also been processed.
     * 
     *  The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get asV9080(): [v9080.ElectionCompute, boolean] {
        assert(this.isV9080)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '03f3f7950b392319cde2891ce1dc18c882fcd7618d570e36ebb9549b7e57d40b'
    }

    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get asV9110(): [v9110.ElectionCompute, boolean] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '4023ddb4e5fc71e0a0d9479091f55fc4d7cdcefdd7ed5f2ba18b799eba527399'
    }

    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get asV9140(): {electionCompute: v9140.ElectionCompute, prevEjected: boolean} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get isV9291(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '13303b2352077ee161260251d8d036c3726a40a944cbac469a87f4659fb4c8fa'
    }

    /**
     * A solution was stored with the given compute.
     * 
     * If the solution is signed, this means that it hasn't yet been processed. If the
     * solution is unsigned, this means that it has also been processed.
     * 
     * The `bool` is `true` when a previous solution was ejected to make room for this one.
     */
    get asV9291(): {compute: v9291.ElectionCompute, prevEjected: boolean} {
        assert(this.isV9291)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '66fb962d8c6d753e5c5954ef51f605c0221a1597d71cb5cf595e74ae264b9d57'
    }

    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    get asV9370(): {compute: v9370.ElectionCompute, origin: (Uint8Array | undefined), prevEjected: boolean} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseUnsignedPhaseStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.UnsignedPhaseStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The unsigned phase of the given round has started.
     */
    get isV29(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.UnsignedPhaseStarted') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  The unsigned phase of the given round has started.
     */
    get asV29(): number {
        assert(this.isV29)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The unsigned phase of the given round has started.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.UnsignedPhaseStarted') === 'd89ab9d594e1e03a0c162ea44af35fd5f31a6e7f82a4941cac8b4bdc1e2cdeb3'
    }

    /**
     * The unsigned phase of the given round has started.
     */
    get asV9140(): {round: number} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenCandidateSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.CandidateSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A candidate was slashed due to failing to obtain a seat as member or runner-up
     */
    get isV27(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.CandidateSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A candidate was slashed due to failing to obtain a seat as member or runner-up
     */
    get asV27(): [Uint8Array, bigint] {
        assert(this.isV27)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenElectionErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.ElectionError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Internal error happened while trying to perform election.
     */
    get isV25(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Internal error happened while trying to perform election.
     */
    get asV25(): null {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenEmptyTermEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.EmptyTerm')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  No (or not enough) candidates existed for this round. This is different from
     *  `NewTerm([])`. See the description of `NewTerm`.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  No (or not enough) candidates existed for this round. This is different from
     *  `NewTerm([])`. See the description of `NewTerm`.
     */
    get asV0(): null {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenMemberKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.MemberKicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A member has been removed. This should always be followed by either `NewTerm` ot
     *  `EmptyTerm`.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.MemberKicked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A member has been removed. This should always be followed by either `NewTerm` ot
     *  `EmptyTerm`.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenMemberRenouncedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.MemberRenounced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A member has renounced their candidacy.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.MemberRenounced') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A member has renounced their candidacy.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenNewTermEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.NewTerm')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new term with new members. This indicates that enough candidates existed to run the
     *  election, not that enough have has been elected. The inner value must be examined for
     *  this purpose. A `NewTerm([])` indicates that some candidates got their bond slashed and
     *  none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.NewTerm') === 'd7a45cf0fb3b6c39f6db66d04bddff68afaa850200debf915801414eda809fe1'
    }

    /**
     *  A new term with new members. This indicates that enough candidates existed to run the
     *  election, not that enough have has been elected. The inner value must be examined for
     *  this purpose. A `NewTerm([])` indicates that some candidates got their bond slashed and
     *  none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
     */
    get asV0(): [Uint8Array, bigint][] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenRenouncedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.Renounced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone has renounced their candidacy.
     */
    get isV28(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.Renounced') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Someone has renounced their candidacy.
     */
    get asV28(): Uint8Array {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenSeatHolderSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.SeatHolderSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A seat holder (member or runner-up) was slashed due to failing to retaining their position.
     */
    get isV27(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.SeatHolderSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A seat holder (member or runner-up) was slashed due to failing to retaining their position.
     */
    get asV27(): [Uint8Array, bigint] {
        assert(this.isV27)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionsPhragmenVoterReportedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionsPhragmen.VoterReported')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A voter (first element) was reported (byt the second element) with the the report being
     *  successful or not (third element).
     */
    get isV0(): boolean {
        return this._chain.getEventHash('ElectionsPhragmen.VoterReported') === '297b1f9e3b7548d06cf345489141d90d9466aaad07e61033eb31d21c1babe5af'
    }

    /**
     *  A voter (first element) was reported (byt the second element) with the the report being
     *  successful or not (third element).
     */
    get asV0(): [Uint8Array, Uint8Array, boolean] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeBatchCheckedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.BatchChecked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A batch was partially checked for the given eras, but the process did not finish.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('FastUnstake.BatchChecked') === 'be126c7a28eca5d68611d9820a352f99c5348e432aca1534bacf96564ff5bc59'
    }

    /**
     * A batch was partially checked for the given eras, but the process did not finish.
     */
    get asV9340(): {eras: number[]} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeBatchFinishedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.BatchFinished')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A batch was terminated.
     * 
     * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
     * of the batch. A new batch will be created upon next block.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('FastUnstake.BatchFinished') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A batch was terminated.
     * 
     * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
     * of the batch. A new batch will be created upon next block.
     */
    get asV9340(): null {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A batch of a given size was terminated.
     * 
     * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
     * of the batch. A new batch will be created upon next block.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('FastUnstake.BatchFinished') === '6b2494e665e8a59def82afdb4742abd48e4510b4d849a05639376d31dedd68c2'
    }

    /**
     * A batch of a given size was terminated.
     * 
     * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
     * of the batch. A new batch will be created upon next block.
     */
    get asV9420(): {size: number} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeCheckingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.Checking')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A staker was partially checked for the given eras, but the process did not finish.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('FastUnstake.Checking') === '1dad67a3a9102761dd650aab2b38a8be2af4c5cbb41aec1ea7daf14f8353ec54'
    }

    /**
     * A staker was partially checked for the given eras, but the process did not finish.
     */
    get asV9300(): {stash: Uint8Array, eras: number[]} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeErroredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.Errored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some internal error happened while migrating stash. They are removed as head as a
     * consequence.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('FastUnstake.Errored') === '7f6c53511d7cf7d5d6d53c9bd68762f88e130eef3cdaff66e227fd21c493b12c'
    }

    /**
     * Some internal error happened while migrating stash. They are removed as head as a
     * consequence.
     */
    get asV9300(): {stash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeInternalErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.InternalError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An internal error happened. Operations will be paused now.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('FastUnstake.InternalError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An internal error happened. Operations will be paused now.
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A staker was slashed for requesting fast-unstake whilst being exposed.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('FastUnstake.Slashed') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * A staker was slashed for requesting fast-unstake whilst being exposed.
     */
    get asV9300(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeUnstakedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.Unstaked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A staker was unstaked.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('FastUnstake.Unstaked') === 'bc3d49bbb13fdc18a0e85fd784d37a5f67ae294393e26520b894b439d7a081ca'
    }

    /**
     * A staker was unstaked.
     */
    get asV9300(): {stash: Uint8Array, result: v9300.Type_31} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A staker was unstaked.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('FastUnstake.Unstaked') === '9c8b8a6ecd5d1b14477d15ac275b9c6224def8058ca21299fed5b6a13a5fabe7'
    }

    /**
     * A staker was unstaked.
     */
    get asV9340(): {stash: Uint8Array, result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A staker was unstaked.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('FastUnstake.Unstaked') === '2d3530882ce7a19f1f2abf00a3ee79cbaa58136b892302e20e3cd9381a031604'
    }

    /**
     * A staker was unstaked.
     */
    get asV9420(): {stash: Uint8Array, result: v9420.Type_33} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaNewAuthoritiesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.NewAuthorities')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  New authority set has been applied.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'a1a8c88e19b8fedde4aab1bef41aa9e1bdfc3748b1e39f7ad5bb09d0347d9505'
    }

    /**
     *  New authority set has been applied.
     */
    get asV0(): [Uint8Array, bigint][] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New authority set has been applied.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
    }

    /**
     * New authority set has been applied.
     */
    get asV9140(): {authoritySet: [Uint8Array, bigint][]} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaPausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Paused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Current authority set has been paused.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been paused.
     */
    get asV0(): null {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Resumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Current authority set has been resumed.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been resumed.
     */
    get asV0(): null {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpChannelClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.ChannelClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Hrmp.ChannelClosed') === '950113c2f5d63a9de3d54be151be099403d5b06a4e13f505b42e20187b08bde7'
    }

    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    get asV9110(): [number, v9110.HrmpChannelId] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpHrmpChannelForceOpenedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.HrmpChannelForceOpened')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Hrmp.HrmpChannelForceOpened') === 'a9dc0d18240dc79b97e5b37bb5bee4e01018115fadf17e4bc55f3774b53aed63'
    }

    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    get asV9340(): [number, number, number, number] {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Open HRMP channel accepted. `[sender, recipient]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelAccepted') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * Open HRMP channel accepted. `[sender, recipient]`
     */
    get asV9110(): [number, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelCanceled') === '950113c2f5d63a9de3d54be151be099403d5b06a4e13f505b42e20187b08bde7'
    }

    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    get asV9110(): [number, v9110.HrmpChannelId] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Open HRMP channel requested.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelRequested') === 'a9dc0d18240dc79b97e5b37bb5bee4e01018115fadf17e4bc55f3774b53aed63'
    }

    /**
     * Open HRMP channel requested.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    get asV9110(): [number, number, number, number] {
        assert(this.isV9110)
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
     *  A name was cleared, and the given balance returned.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was cleared, and the given balance returned.
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV9140(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV9140)
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
     *  A name was removed and the given balance slashed.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was removed and the given balance slashed.
     */
    get asV5(): [Uint8Array, bigint] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV9140(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV9140)
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
     *  A name was set or reset (which will remove all judgements).
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A name was set or reset (which will remove all judgements).
     */
    get asV5(): Uint8Array {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asV9140(): {who: Uint8Array} {
        assert(this.isV9140)
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
     *  A judgement was given by a registrar.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was given by a registrar.
     */
    get asV5(): [Uint8Array, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was given by a registrar.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asV9140(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isV9140)
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
     *  A judgement was asked from a registrar.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement was asked from a registrar.
     */
    get asV5(): [Uint8Array, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement was asked from a registrar.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asV9140(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV9140)
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
     *  A judgement request was retracted.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A judgement request was retracted.
     */
    get asV5(): [Uint8Array, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A judgement request was retracted.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement request was retracted.
     */
    get asV9140(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV9140)
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
     *  A registrar was added.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A registrar was added.
     */
    get asV5(): number {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A registrar was added.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asV9140(): {registrarIndex: number} {
        assert(this.isV9140)
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
     *  A sub-identity (first) was added to an identity (second) and the deposit paid.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity (first) was added to an identity (second) and the deposit paid.
     */
    get asV15(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asV9140(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV9140)
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
     *  A sub-identity (first) was removed from an identity (second) and the deposit freed.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity (first) was removed from an identity (second) and the deposit freed.
     */
    get asV15(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV9140(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV9140)
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
     *  A sub-identity (first arg) was cleared, and the given deposit repatriated from the
     *  main identity account (second arg) to the sub-identity account.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity (first arg) was cleared, and the given deposit repatriated from the
     *  main identity account (second arg) to the sub-identity account.
     */
    get asV15(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV9140(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineAllGoodEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.AllGood')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  At the end of the session, no offence was committed.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('ImOnline.AllGood') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  At the end of the session, no offence was committed.
     */
    get asV0(): null {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineHeartbeatReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.HeartbeatReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new heartbeat was received from `AuthorityId`
     */
    get isV0(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new heartbeat was received from `AuthorityId`
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === 'f4f7db0d4947a3f194721945718633fbe38c2b20120d6b5be31252e30b822645'
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get asV9140(): {authorityId: Uint8Array} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineSomeOfflineEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.SomeOffline')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  At the end of the session, at least one validator was found to be offline.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '15e6fe82a6ae2efb2b8a5fb32d03f1140dda1d88a982e280ae917cb281bd63e1'
    }

    /**
     *  At the end of the session, at least one validator was found to be offline.
     */
    get asV0(): [Uint8Array, v0.FullIdentification][] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '380731177debd1bc7de2f37d39c5ffd9fc74a19f43f20c4319233aa9b5d971aa'
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get asV9140(): {offline: [Uint8Array, v9140.Exposure][]} {
        assert(this.isV9140)
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
     *  A account index was assigned.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Indices.IndexAssigned') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     *  A account index was assigned.
     */
    get asV0(): [Uint8Array, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A account index was assigned.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Indices.IndexAssigned') === '9b3d917cee3d7e2adf0a9df20e0bca9e5f81d6fb7f3c50084c4851608cd1a8f2'
    }

    /**
     * A account index was assigned.
     */
    get asV9140(): {who: Uint8Array, index: number} {
        assert(this.isV9140)
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
     *  A account index has been freed up (unassigned).
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Indices.IndexFreed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A account index has been freed up (unassigned).
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A account index has been freed up (unassigned).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Indices.IndexFreed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A account index has been freed up (unassigned).
     */
    get asV9140(): {index: number} {
        assert(this.isV9140)
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
     *  A account index has been frozen to its current account ID.
     */
    get isV7(): boolean {
        return this._chain.getEventHash('Indices.IndexFrozen') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  A account index has been frozen to its current account ID.
     */
    get asV7(): [number, Uint8Array] {
        assert(this.isV7)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A account index has been frozen to its current account ID.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Indices.IndexFrozen') === 'a4b2a09a4b129b731502d8f49526603d4f98cc90af6286baad9f0cab57c26843'
    }

    /**
     * A account index has been frozen to its current account ID.
     */
    get asV9140(): {index: number, who: Uint8Array} {
        assert(this.isV9140)
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
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call.
     */
    get asV5(): [Uint8Array, v5.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV9140(): {approving: Uint8Array, timepoint: v9140.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV9140)
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
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account, fourth is hash of the call.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account, fourth is hash of the call.
     */
    get asV5(): [Uint8Array, v5.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been cancelled.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV9140(): {cancelling: Uint8Array, timepoint: v9140.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV9140)
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
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call to be executed.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === 'e368973d939e86d8e4639ec21b8ed877b5a6772f4da0bad0d4fe5df98c063ad2'
    }

    /**
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call to be executed.
     */
    get asV5(): [Uint8Array, v5.Timepoint, Uint8Array, Uint8Array, v5.DispatchResult] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '863ce12b1101a132a700dd79901f7260da5e9d930f97af1b0ef6d7385d5df23e'
    }

    /**
     * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    get asV9110(): [Uint8Array, v9110.Timepoint, Uint8Array, Uint8Array, v9110.Type_31] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '077317dae49bec353c6f4e39c53895e53232992132030d820d2209051d4752df'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV9140(): {approving: Uint8Array, timepoint: v9140.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v9140.Type_28} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === 'a4f4f4f2422a1c4cb5359e5ca7ce069035018dd917feceb324240a45edc121d6'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV9170(): {approving: Uint8Array, timepoint: v9170.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v9170.Type_29} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '893c7ea80ff9b8edc0f0e804a754035301e2cf91cbfe60a5a7d0565bfa1c133e'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV9190(): {approving: Uint8Array, timepoint: v9190.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v9190.Type_30} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '303cb15b241c821ed02efcceb1d8f92a11e2a124e8eef73810b68e2592455034'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV9340(): {approving: Uint8Array, timepoint: v9340.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A multisig operation has been executed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === 'a3dac12242761ae515c903986cd4d4bac07e81a7c3d28c6ddc9bb9faaa3196f1'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV9420(): {approving: Uint8Array, timepoint: v9420.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v9420.Type_33} {
        assert(this.isV9420)
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
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account, third is hash of the call.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account, third is hash of the call.
     */
    get asV5(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new multisig operation has begun.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV9140(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigUncallableEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.Uncallable')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A call with a `false` IsCallable filter was attempted.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Multisig.Uncallable') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A call with a `false` IsCallable filter was attempted.
     */
    get asV5(): number {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsBondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Bonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has became bonded in a pool.
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.Bonded') === '346ce619103fbbd79b2dd7272ee712b9245db5dd69c1a8986cf02609a0807acb'
    }

    /**
     * A member has became bonded in a pool.
     */
    get asV9280(): {member: Uint8Array, poolId: number, bonded: bigint, joined: boolean} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool has been created.
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.Created') === 'd13a4a2e75b059cdf6021a8db830c10b03e25bab152f841299c6ec584141b177'
    }

    /**
     * A pool has been created.
     */
    get asV9280(): {depositor: Uint8Array, poolId: number} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Destroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool has been destroyed.
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.Destroyed') === 'a662258b1bdb045a915972ea29e9ec0b46cdd5598b0da37b0e70ac766e3735a0'
    }

    /**
     * A pool has been destroyed.
     */
    get asV9280(): {poolId: number} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has been removed from a pool.
     * 
     * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.MemberRemoved') === 'f1031007cce5071eaef0950174054819d39b33bd0ae7e341b316675fa8f8e85d'
    }

    /**
     * A member has been removed from a pool.
     * 
     * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
     */
    get asV9280(): {poolId: number, member: Uint8Array} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPaidOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PaidOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A payout has been made to a member.
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.PaidOut') === 'cfe21eb17104900a7cf176b7e8828f742dc518d5af2853e13dbd86e25b42d272'
    }

    /**
     * A payout has been made to a member.
     */
    get asV9280(): {member: Uint8Array, poolId: number, payout: bigint} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionChangeRateUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionChangeRateUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's commission `change_rate` has been changed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionChangeRateUpdated') === 'bdbe2b8a0dbf004376752ab0b97d12bc46105ff7df04a1d804df35ca9fbc04c1'
    }

    /**
     * A pool's commission `change_rate` has been changed.
     */
    get asV9420(): {poolId: number, changeRate: v9420.CommissionChangeRate} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool commission has been claimed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionClaimed') === '39008f90774550cc01fac86050fbaa7fcba22fdf43a4a3f0033b863d36c99eba'
    }

    /**
     * Pool commission has been claimed.
     */
    get asV9420(): {poolId: number, commission: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's commission setting has been changed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionUpdated') === '5f02db5203a66e286087b8a8254fd206258aebe8f4ba5f6f143da9c12da0f87b'
    }

    /**
     * A pool's commission setting has been changed.
     */
    get asV9420(): {poolId: number, current: ([number, Uint8Array] | undefined)} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolMaxCommissionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolMaxCommissionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's maximum commission setting has been changed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('NominationPools.PoolMaxCommissionUpdated') === '6eb4d2709f88d8a2ee11fbbeaecd1987716bd1b2323a23339e00d70cb343b35b'
    }

    /**
     * A pool's maximum commission setting has been changed.
     */
    get asV9420(): {poolId: number, maxCommission: number} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The active balance of pool `pool_id` has been slashed to `balance`.
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.PoolSlashed') === '849ff35d9ca5ab6bfa8f0aff533bc59a22437fe70500718dd3337d480ba4b067'
    }

    /**
     * The active balance of pool `pool_id` has been slashed to `balance`.
     */
    get asV9280(): {poolId: number, balance: bigint} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsRolesUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.RolesUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.RolesUpdated') === '4994577d179317a8d4c440b26b868db7262057baac00ef9ccf87ccebe30142aa'
    }

    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    get asV9280(): {root: (Uint8Array | undefined), stateToggler: (Uint8Array | undefined), nominator: (Uint8Array | undefined)} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('NominationPools.RolesUpdated') === 'b433c79229efa5c06baf826b58391661cb8ce02e51f7d52f27f8b07613fd23cf'
    }

    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    get asV9420(): {root: (Uint8Array | undefined), bouncer: (Uint8Array | undefined), nominator: (Uint8Array | undefined)} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsStateChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.StateChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The state of a pool has changed
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.StateChanged') === 'ad04ef0d578c9399e7bdcc3a160bd0163a158a106de59b5d0ae918d0c38bec89'
    }

    /**
     * The state of a pool has changed
     */
    get asV9280(): {poolId: number, newState: v9280.PoolState} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsUnbondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Unbonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has unbonded from their pool.
     * 
     * - `balance` is the corresponding balance of the number of points that has been
     *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
     *   pool.
     * - `points` is the number of points that are issued as a result of `balance` being
     * dissolved into the corresponding unbonding pool.
     * - `era` is the era in which the balance will be unbonded.
     * In the absence of slashing, these values will match. In the presence of slashing, the
     * number of points that are issued in the unbonding pool will be less than the amount
     * requested to be unbonded.
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.Unbonded') === '0832f5131732a2ab621b8912cbcce5335afa6afcde060b027446854e582a5992'
    }

    /**
     * A member has unbonded from their pool.
     * 
     * - `balance` is the corresponding balance of the number of points that has been
     *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
     *   pool.
     * - `points` is the number of points that are issued as a result of `balance` being
     * dissolved into the corresponding unbonding pool.
     * - `era` is the era in which the balance will be unbonded.
     * In the absence of slashing, these values will match. In the presence of slashing, the
     * number of points that are issued in the unbonding pool will be less than the amount
     * requested to be unbonded.
     */
    get asV9280(): {member: Uint8Array, poolId: number, balance: bigint, points: bigint, era: number} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsUnbondingPoolSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.UnbondingPoolSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.UnbondingPoolSlashed') === '3409c75291f32ce014317f489b868f68c390f1473bfcb6f79b1e3e0546ee4a1c'
    }

    /**
     * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
     */
    get asV9280(): {poolId: number, era: number, balance: bigint} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has withdrawn from their pool.
     * 
     * The given number of `points` have been dissolved in return of `balance`.
     * 
     * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
     * will be 1.
     */
    get isV9280(): boolean {
        return this._chain.getEventHash('NominationPools.Withdrawn') === 'a1ac2fad866830ba6aeeeeeae4a647a06425cd3c74143fccbac820b3f50b2346'
    }

    /**
     * A member has withdrawn from their pool.
     * 
     * The given number of `points` have been dissolved in return of `balance`.
     * 
     * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
     * will be 1.
     */
    get asV9280(): {member: Uint8Array, poolId: number, balance: bigint, points: bigint} {
        assert(this.isV9280)
        return this._chain.decodeEvent(this.event)
    }
}

export class OffencesOffenceEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Offences.Offence')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false).
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '18f4beafc9fe74427abdec4798ff1f921e7eef3c6cdea8f8dc175b766343d5be'
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
     *  element indicates of the offence was applied (true) or queued (false).
     */
    get asV0(): [Uint8Array, Uint8Array, boolean] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
     *  \[kind, timeslot\].
     */
    get isV9050(): boolean {
        return this._chain.getEventHash('Offences.Offence') === 'fca31d079a02b9c3ee63d19bf39a4c783da99a317cdf2920b6c29e7d7d3d0518'
    }

    /**
     *  There is an offence reported of the given `kind` happened at the `session_index` and
     *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
     *  \[kind, timeslot\].
     */
    get asV9050(): [Uint8Array, Uint8Array] {
        assert(this.isV9050)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '5c9081474f836b1480d3d7cc7a09403e5d7f913d809fe792509e057c77a1ff4f'
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get asV9140(): {kind: Uint8Array, timeslot: Uint8Array} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionCandidateBackedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.CandidateBacked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('ParaInclusion.CandidateBacked') === '246220cb1c83273013fc4c63084c87dd5cda26e1a2516b1736b272d8df91aaab'
    }

    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    get asV9110(): [v9110.V1CandidateReceipt, Uint8Array, number, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionCandidateIncludedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.CandidateIncluded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate was included. `[candidate, head_data]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('ParaInclusion.CandidateIncluded') === '246220cb1c83273013fc4c63084c87dd5cda26e1a2516b1736b272d8df91aaab'
    }

    /**
     * A candidate was included. `[candidate, head_data]`
     */
    get asV9110(): [v9110.V1CandidateReceipt, Uint8Array, number, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionCandidateTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.CandidateTimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('ParaInclusion.CandidateTimedOut') === 'e31c9b259107de7f78b46f1dcc13bdca23f4df12af9328f82e97f36b3f53190c'
    }

    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    get asV9110(): [v9110.V1CandidateReceipt, Uint8Array, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasActionQueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.ActionQueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A para has been queued to execute pending actions. `para_id`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Paras.ActionQueued') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * A para has been queued to execute pending actions. `para_id`
     */
    get asV9110(): [number, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasCodeUpgradeScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.CodeUpgradeScheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A code upgrade has been scheduled for a Para. `para_id`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Paras.CodeUpgradeScheduled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A code upgrade has been scheduled for a Para. `para_id`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasCurrentCodeUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.CurrentCodeUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current code has been updated for a Para. `para_id`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Paras.CurrentCodeUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Current code has been updated for a Para. `para_id`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasCurrentHeadUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.CurrentHeadUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current head has been updated for a Para. `para_id`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Paras.CurrentHeadUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Current head has been updated for a Para. `para_id`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasNewHeadNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.NewHeadNoted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new head has been noted for a Para. `para_id`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Paras.NewHeadNoted') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A new head has been noted for a Para. `para_id`
     */
    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasPvfCheckAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.PvfCheckAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given validation code was rejected by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Paras.PvfCheckAccepted') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * The given validation code was rejected by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get asV9170(): [Uint8Array, number] {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasPvfCheckRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.PvfCheckRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given validation code was accepted by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Paras.PvfCheckRejected') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * The given validation code was accepted by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get asV9170(): [Uint8Array, number] {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasPvfCheckStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.PvfCheckStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given para either initiated or subscribed to a PVF check for the given validation
     * code. `code_hash` `para_id`
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Paras.PvfCheckStarted') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * The given para either initiated or subscribed to a PVF check for the given validation
     * code. `code_hash` `para_id`
     */
    get asV9170(): [Uint8Array, number] {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesDisputeConcludedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.DisputeConcluded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has concluded for or against a candidate.
     * `\[para id, candidate hash, dispute result\]`
     */
    get isV9180(): boolean {
        return this._chain.getEventHash('ParasDisputes.DisputeConcluded') === 'e9351b7dc680e0a0341045157e5a30763bc3902fa66e2f60498d20f0e07d2335'
    }

    /**
     * A dispute has concluded for or against a candidate.
     * `\[para id, candidate hash, dispute result\]`
     */
    get asV9180(): [Uint8Array, v9180.DisputeResult] {
        assert(this.isV9180)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesDisputeInitiatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.DisputeInitiated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has been initiated. \[candidate hash, dispute location\]
     */
    get isV9180(): boolean {
        return this._chain.getEventHash('ParasDisputes.DisputeInitiated') === 'a503e05d4e469adce22821bd6d920c96ec2980312e6f00da193a79ddb620706b'
    }

    /**
     * A dispute has been initiated. \[candidate hash, dispute location\]
     */
    get asV9180(): [Uint8Array, v9180.DisputeLocation] {
        assert(this.isV9180)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesDisputeTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.DisputeTimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has timed out due to insufficient participation.
     * `\[para id, candidate hash\]`
     */
    get isV9180(): boolean {
        return this._chain.getEventHash('ParasDisputes.DisputeTimedOut') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A dispute has timed out due to insufficient participation.
     * `\[para id, candidate hash\]`
     */
    get asV9180(): Uint8Array {
        assert(this.isV9180)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesRevertEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.Revert')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has concluded with supermajority against a candidate.
     * Block authors should no longer build on top of this head and should
     * instead revert the block at the given height. This should be the
     * number of the child of the last known valid block in the chain.
     */
    get isV9180(): boolean {
        return this._chain.getEventHash('ParasDisputes.Revert') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A dispute has concluded with supermajority against a candidate.
     * Block authors should no longer build on top of this head and should
     * instead revert the block at the given height. This should be the
     * number of the child of the last known valid block in the chain.
     */
    get asV9180(): number {
        assert(this.isV9180)
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
    get isV9050(): boolean {
        return this._chain.getEventHash('PhragmenElection.CandidateSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
     *  runner-up.
     * 
     *  Note that old members and runners-up are also candidates.
     */
    get asV9050(): [Uint8Array, bigint] {
        assert(this.isV9050)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('PhragmenElection.CandidateSlashed') === 'a64270141b7a7c84c0950e5dcd31bc284b27b39505d278ff519f44f855ee33d8'
    }

    /**
     * A candidate was slashed by amount due to failing to obtain a seat as member or
     * runner-up.
     * 
     * Note that old members and runners-up are also candidates.
     */
    get asV9140(): {candidate: Uint8Array, amount: bigint} {
        assert(this.isV9140)
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
    get isV9050(): boolean {
        return this._chain.getEventHash('PhragmenElection.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Internal error happened while trying to perform election.
     */
    get asV9050(): null {
        assert(this.isV9050)
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
    get isV9050(): boolean {
        return this._chain.getEventHash('PhragmenElection.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  No (or not enough) candidates existed for this round. This is different from
     *  `NewTerm(\[\])`. See the description of `NewTerm`.
     */
    get asV9050(): null {
        assert(this.isV9050)
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
    get isV9050(): boolean {
        return this._chain.getEventHash('PhragmenElection.MemberKicked') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
     *  `EmptyTerm`.
     */
    get asV9050(): Uint8Array {
        assert(this.isV9050)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('PhragmenElection.MemberKicked') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
    }

    /**
     * A member has been removed. This should always be followed by either `NewTerm` or
     * `EmptyTerm`.
     */
    get asV9140(): {member: Uint8Array} {
        assert(this.isV9140)
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
    get isV9050(): boolean {
        return this._chain.getEventHash('PhragmenElection.NewTerm') === 'd7a45cf0fb3b6c39f6db66d04bddff68afaa850200debf915801414eda809fe1'
    }

    /**
     *  A new term with \[new_members\]. This indicates that enough candidates existed to run
     *  the election, not that enough have has been elected. The inner value must be examined
     *  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     *  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     *  begin with.
     */
    get asV9050(): [Uint8Array, bigint][] {
        assert(this.isV9050)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('PhragmenElection.NewTerm') === 'c26c6ac673ee46db2001722c75880df159f382274469750dc468b868c6f738c8'
    }

    /**
     * A new term with new_members. This indicates that enough candidates existed to run
     * the election, not that enough have has been elected. The inner value must be examined
     * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
     * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
     * begin with.
     */
    get asV9140(): {newMembers: [Uint8Array, bigint][]} {
        assert(this.isV9140)
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
    get isV9050(): boolean {
        return this._chain.getEventHash('PhragmenElection.Renounced') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  Someone has renounced their candidacy.
     */
    get asV9050(): Uint8Array {
        assert(this.isV9050)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Someone has renounced their candidacy.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('PhragmenElection.Renounced') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
    }

    /**
     * Someone has renounced their candidacy.
     */
    get asV9140(): {candidate: Uint8Array} {
        assert(this.isV9140)
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
    get isV9050(): boolean {
        return this._chain.getEventHash('PhragmenElection.SeatHolderSlashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
     */
    get asV9050(): [Uint8Array, bigint] {
        assert(this.isV9050)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('PhragmenElection.SeatHolderSlashed') === '7a1552e3cb4a3dc87408db4d42391f3a98998bb0e6bf70aa82661919c4d12eaa'
    }

    /**
     * A seat holder was slashed by amount by being forcefully removed from the set.
     */
    get asV9140(): {seatHolder: Uint8Array, amount: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class PollVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Poll.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV14(): boolean {
        return this._chain.getEventHash('Poll.Voted') === '34c1746c439c92d8eb7f16bb5f83e161e8178626235fc11ba5dcae5506d347cd'
    }

    get asV14(): [Uint8Array, bigint, boolean[]] {
        assert(this.isV14)
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
    get isV9170(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV9170(): {hash: Uint8Array} {
        assert(this.isV9170)
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
    get isV9170(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV9170(): {hash: Uint8Array} {
        assert(this.isV9170)
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
    get isV9170(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV9170(): {hash: Uint8Array} {
        assert(this.isV9170)
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
     *  An announcement was placed to make a call in the future. [real, proxy, call_hash]
     */
    get isV23(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     *  An announcement was placed to make a call in the future. [real, proxy, call_hash]
     */
    get asV23(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV23)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === '5c2546e4632bb75e839f990a33f7feb63fb5598747a25d3d09f23108c106abc4'
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get asV9140(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
        assert(this.isV9140)
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
     *  Anonymous account (first parameter) has been created by new proxy (second) with given
     *  disambiguation index and proxy type.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === 'e87d9d70ab959b6150f32bffa8d332b758d55e1e4ed526320e13e229b50a0cca'
    }

    /**
     *  Anonymous account (first parameter) has been created by new proxy (second) with given
     *  disambiguation index and proxy type.
     */
    get asV5(): [Uint8Array, Uint8Array, v5.ProxyType, number] {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type. \[anonymous, who, proxy_type,
     * disambiguation_index\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === 'b5f579b2faec49a28fb706144766dc4606348cb921ebad8faf9a4cea45bc2ed8'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type. \[anonymous, who, proxy_type,
     * disambiguation_index\]
     */
    get asV9110(): [Uint8Array, Uint8Array, v9110.ProxyType, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === '33f43c3f0d46bc1ed2ac1402b3dfbfdd80063a10b62812db2cbdb989ae7677b2'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV9140(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v9140.ProxyType, disambiguationIndex: number} {
        assert(this.isV9140)
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
    get isV9110(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '4fac8b942563b27163fd7ece3d09cfc3b8410ae026ec89831bf64e9559cda031'
    }

    /**
     * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
     */
    get asV9110(): [Uint8Array, Uint8Array, v9110.ProxyType, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === 'a4f238e050a46a5e1a1a558cafb66167ab35f5eb690173826e77de0faccf7955'
    }

    /**
     * A proxy was added.
     */
    get asV9140(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v9140.ProxyType, delay: number} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '01096c7f75054e1987dbef5e5bc81bd5e1a21f201311c3265e9957e211424aa5'
    }

    /**
     * A proxy was added.
     */
    get asV9420(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v9420.ProxyType, delay: number} {
        assert(this.isV9420)
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
     *  A proxy was executed correctly, with the given result.
     */
    get isV5(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A proxy was executed correctly, with the given result.
     */
    get asV5(): v5.DispatchResult {
        assert(this.isV5)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given \[result\].
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A proxy was executed correctly, with the given \[result\].
     */
    get asV9110(): v9110.Type_31 {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '13035ed52f885e1562eecb18e6036551aca97b17fe36e70f73b4132c90e5b776'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV9140(): {result: v9140.Type_28} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '123f6c35bbf8bd8d1cc0ada05ce8ad9758b8462076e62ae91382a7270c95ff10'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV9170(): {result: v9170.Type_29} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV9190(): {result: v9190.Type_30} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV9340(): {result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === 'e6b126b1d10869892737f36b23109c1b51d3828aeab399104c160e9f275d8049'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV9420(): {result: v9420.Type_33} {
        assert(this.isV9420)
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
    get isV9190(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === 'a4f238e050a46a5e1a1a558cafb66167ab35f5eb690173826e77de0faccf7955'
    }

    /**
     * A proxy was removed.
     */
    get asV9190(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v9190.ProxyType, delay: number} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was removed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === '01096c7f75054e1987dbef5e5bc81bd5e1a21f201311c3265e9957e211424aa5'
    }

    /**
     * A proxy was removed.
     */
    get asV9420(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v9420.ProxyType, delay: number} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyPureCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.PureCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === 'aacf075d1f77f74bcc7e9da332dc461c6de132967e46294436659f27accb694a'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV9300(): {pure: Uint8Array, who: Uint8Array, proxyType: v9300.ProxyType, disambiguationIndex: number} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === '078538eebe4aeba94ccbedaf6514910161cb5f3d514e52f7e3a40c250cbf2b30'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV9420(): {pure: Uint8Array, who: Uint8Array, proxyType: v9420.ProxyType, disambiguationIndex: number} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class PurchaseAccountCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Purchase.AccountCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new account was created
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Purchase.AccountCreated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new account was created
     */
    get asV15(): Uint8Array {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class PurchaseBalanceUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Purchase.BalanceUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone's purchase balance was updated. (Free, Locked)
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Purchase.BalanceUpdated') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  Someone's purchase balance was updated. (Free, Locked)
     */
    get asV15(): [Uint8Array, bigint, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class PurchasePaymentAccountSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Purchase.PaymentAccountSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new payment account was set.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Purchase.PaymentAccountSet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new payment account was set.
     */
    get asV15(): Uint8Array {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class PurchasePaymentCompleteEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Purchase.PaymentComplete')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A payout was made to a purchaser.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Purchase.PaymentComplete') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  A payout was made to a purchaser.
     */
    get asV15(): [Uint8Array, bigint, bigint] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class PurchaseStatementUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Purchase.StatementUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new statement was set.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Purchase.StatementUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  A new statement was set.
     */
    get asV15(): null {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class PurchaseUnlockBlockUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Purchase.UnlockBlockUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new statement was set.
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Purchase.UnlockBlockUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A new statement was set.
     */
    get asV15(): number {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class PurchaseValidityUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Purchase.ValidityUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone's account validity was updated
     */
    get isV15(): boolean {
        return this._chain.getEventHash('Purchase.ValidityUpdated') === '22b1ce86610302004fc1e9f9f5d3c492bbe976b9628526aa01540b6b7d735567'
    }

    /**
     *  Someone's account validity was updated
     */
    get asV15(): [Uint8Array, v15.AccountValidity] {
        assert(this.isV15)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.Approved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get asV9420(): {index: number} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.Cancelled') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmAbortedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmAborted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmAborted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV9420(): {index: number} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmStarted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmStarted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV9420(): {index: number} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Confirmed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.Confirmed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionDepositPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionDepositPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been placed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.DecisionDepositPlaced') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been placed.
     */
    get asV9420(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been refunded.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.DecisionDepositRefunded') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been refunded.
     */
    get asV9420(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.DecisionStarted') === '93e86498f68feebf124dad7a87010c14ba0e2cc07333331054e866079ff834a5'
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get asV9420(): {index: number, track: number, proposal: v9420.Bounded, tally: v9420.Tally} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDepositSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DepositSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A deposit has been slashaed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.DepositSlashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * A deposit has been slashaed.
     */
    get asV9420(): {who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Killed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been killed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.Killed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been killed.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.MetadataCleared') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get asV9420(): {index: number, hash: Uint8Array} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been set.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.MetadataSet') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been set.
     */
    get asV9420(): {index: number, hash: Uint8Array} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.Rejected') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaSubmissionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.SubmissionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The submission deposit has been refunded.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.SubmissionDepositRefunded') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The submission deposit has been refunded.
     */
    get asV9420(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaSubmittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Submitted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been submitted.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.Submitted') === 'dd1db40cab9e2e0c54e203f9c60347029a08160d5930b550604e5378d4c502df'
    }

    /**
     * A referendum has been submitted.
     */
    get asV9420(): {index: number, track: number, proposal: v9420.Bounded} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.TimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Referenda.TimedOut') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get asV9420(): {index: number, tally: v9420.Tally} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarDeregisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Deregistered')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9110(): boolean {
        return this._chain.getEventHash('Registrar.Deregistered') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    get asV9110(): number {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    get isV9230(): boolean {
        return this._chain.getEventHash('Registrar.Deregistered') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    get asV9230(): {paraId: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarParathreadDeregisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.ParathreadDeregistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The parathread of the supplied ID was de-registered.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Registrar.ParathreadDeregistered') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  The parathread of the supplied ID was de-registered.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarParathreadRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.ParathreadRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A parathread was registered; its new ID is supplied.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Registrar.ParathreadRegistered') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A parathread was registered; its new ID is supplied.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Registered')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9110(): boolean {
        return this._chain.getEventHash('Registrar.Registered') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    get asV9110(): [number, Uint8Array] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    get isV9230(): boolean {
        return this._chain.getEventHash('Registrar.Registered') === 'fcb0da366ca6f6d7d745530f213e6cdf1948df720c94e736ad2764b51f57b9a6'
    }

    get asV9230(): {paraId: number, manager: Uint8Array} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9110(): boolean {
        return this._chain.getEventHash('Registrar.Reserved') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    get asV9110(): [number, Uint8Array] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    get isV9230(): boolean {
        return this._chain.getEventHash('Registrar.Reserved') === '1f9b6376eaab9f7fcc13bea9f2b6a56229f262c6bc5ab4562b814aa57033fda6'
    }

    get asV9230(): {paraId: number, who: Uint8Array} {
        assert(this.isV9230)
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
    get isV9170(): boolean {
        return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV9170(): {task: [number, number], id: (Uint8Array | undefined), error: v9170.LookupError} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCallUnavailableEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.CallUnavailable')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Scheduler.CallUnavailable') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV9340(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV9340)
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

    get isV0(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    get asV0(): [number, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Canceled some task.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Canceled some task.
     */
    get asV9170(): {when: number, index: number} {
        assert(this.isV9170)
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

    get isV0(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '8932a074b1c2cd5ce9792be58d56c1325be1d704098dac81f23ff6804e2d5fee'
    }

    get asV0(): [[number, number], (Uint8Array | undefined), v0.DispatchResult] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task. \[task, id, result\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '0924b109bceeccc61da80b5dece80623d828a98c86b9a531565d13d396698ea8'
    }

    /**
     * Dispatched some task. \[task, id, result\]
     */
    get asV9110(): [[number, number], (Uint8Array | undefined), v9110.Type_31] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '4439d3bf37ab8e1b7b14c411aa9c4d9622aa96b4dd169cb67da04ec196da4c09'
    }

    /**
     * Dispatched some task.
     */
    get asV9170(): {task: [number, number], id: (Uint8Array | undefined), result: v9170.Type_29} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'ba59527b3bb4801aee2fda92f8229d8d572cc38c565e139a667a87dd8171194b'
    }

    /**
     * Dispatched some task.
     */
    get asV9190(): {task: [number, number], id: (Uint8Array | undefined), result: v9190.Type_30} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'b67102cc706599639b8e52e776b81c51142dad43652e91e7e72197b7df9a63f4'
    }

    /**
     * Dispatched some task.
     */
    get asV9340(): {task: [number, number], id: (Uint8Array | undefined), result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '154dd24b4e6cd6cd4e2529e62ebb06fadb719be62866fec5887d179577869c45'
    }

    /**
     * Dispatched some task.
     */
    get asV9420(): {task: [number, number], id: (Uint8Array | undefined), result: v9420.Type_33} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPeriodicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PeriodicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Scheduler.PeriodicFailed') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get asV9340(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPermanentlyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PermanentlyOverweight')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Scheduler.PermanentlyOverweight') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get asV9340(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV9340)
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

    get isV0(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    get asV0(): [number, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Scheduled some task.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asV9170(): {when: number, index: number} {
        assert(this.isV9170)
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
     *  New session has happened. Note that the argument is the session index, not the block
     *  number as the type might suggest.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New session has happened. Note that the argument is the session index, not the block
     *  number as the type might suggest.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asV9140(): {sessionIndex: number} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsAuctionClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.AuctionClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An auction ended. All funds become unreserved.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Slots.AuctionClosed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  An auction ended. All funds become unreserved.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsAuctionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.AuctionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An auction started. Provides its index and the block number where it will begin to
     *  close and the first lease period of the quadruplet that is auctioned.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Slots.AuctionStarted') === 'ee14df8652ec18f0202c95706dac25953673d4834fcfe21e7d7559cb96975c06'
    }

    /**
     *  An auction started. Provides its index and the block number where it will begin to
     *  close and the first lease period of the quadruplet that is auctioned.
     */
    get asV0(): [number, number, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsLeasedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.Leased')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     * `[parachain_id, leaser, period_begin, period_count, extra_reserved, total_amount]`
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Slots.Leased') === '79675ebb51ddb0b8d4c0ab927d5f555aa83f9e61ccc6e9f3d99e02eb1d6b0f8d'
    }

    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     * `[parachain_id, leaser, period_begin, period_count, extra_reserved, total_amount]`
     */
    get asV9110(): [number, Uint8Array, number, number, bigint, bigint] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Slots.Leased') === '4625013b2a7d8273578186b9cca9ba9a58005a93e899f0b8db1e8fa1f40b076b'
    }

    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    get asV9230(): {paraId: number, leaser: Uint8Array, periodBegin: number, periodCount: number, extraReserved: bigint, totalAmount: bigint} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsNewLeasePeriodEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.NewLeasePeriod')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new lease period is beginning.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Slots.NewLeasePeriod') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A new lease period is beginning.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new `[lease_period]` is beginning.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('Slots.NewLeasePeriod') === 'd34ea8d9d8021775bd82bca4dbb3fb342419708199cd6e80ac5b9091f79a4000'
    }

    /**
     * A new `[lease_period]` is beginning.
     */
    get asV9230(): {leasePeriod: number} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Funds were reserved for a winning bid. First balance is the extra amount reserved.
     *  Second is the total.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Slots.Reserved') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  Funds were reserved for a winning bid. First balance is the extra amount reserved.
     *  Second is the total.
     */
    get asV0(): [Uint8Array, bigint, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Funds were unreserved since bidder is no longer active.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Slots.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Funds were unreserved since bidder is no longer active.
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsWonDeployEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.WonDeploy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Someone won the right to deploy a parachain. Balance amount is deducted for deposit.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Slots.WonDeploy') === '45f6c90e4276ee7be1a46254ffe024090b5fecfd5602b04385d7f78f7604cec6'
    }

    /**
     *  Someone won the right to deploy a parachain. Balance amount is deducted for deposit.
     */
    get asV0(): [v0.NewBidder, v0.SlotRange, number, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsWonRenewalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.WonRenewal')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An existing parachain won the right to continue.
     *  First balance is the extra amount reseved. Second is the total amount reserved.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Slots.WonRenewal') === '2dc986755a5addb2488156d376c9fac54f25019c605cb56068c8046a8c5e2728'
    }

    /**
     *  An existing parachain won the right to continue.
     *  First balance is the extra amount reseved. Second is the total amount reserved.
     */
    get asV0(): [number, v0.SlotRange, bigint, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingBondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Bonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has bonded this amount.
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has bonded this amount.
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get asV9300(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingChilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Chilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has stopped participating as either a validator or nominator.
     *  \[stash\]
     */
    get isV9090(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account has stopped participating as either a validator or nominator.
     *  \[stash\]
     */
    get asV9090(): Uint8Array {
        assert(this.isV9090)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '7f6c53511d7cf7d5d6d53c9bd68762f88e130eef3cdaff66e227fd21c493b12c'
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get asV9300(): {stash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingEraPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.EraPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    get isV9090(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    get asV9090(): [number, bigint, bigint] {
        assert(this.isV9090)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === '940fb56de13a3a5bb887ff8bc3518465d73e48a2e4418a6edb32a9d338f0b44a'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get asV9300(): {eraIndex: number, validatorPayout: bigint, remainder: bigint} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingEraPayoutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.EraPayout')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Staking.EraPayout') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     */
    get asV0(): [number, bigint, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingForceEraEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ForceEra')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new force era mode was set.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Staking.ForceEra') === 'd01e60727d072e84480126126bc575ed2a927476ff6a196deed5f14861885e98'
    }

    /**
     * A new force era mode was set.
     */
    get asV9370(): {mode: v9370.Forcing} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Kicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get isV28(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  A nominator has been kicked from a validator. \[nominator, stash\]
     */
    get asV28(): [Uint8Array, Uint8Array] {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'd7d337878d792eb4a5ab3986a889ac0dcae3a639d0158fd9509bad8b5f25f81a'
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get asV9300(): {nominator: Uint8Array, stash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingOldSlashingReportDiscardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.OldSlashingReportDiscarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Staking.OldSlashingReportDiscarded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  An old slashing report from a prior era was discarded because it could
     *  not be processed.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.OldSlashingReportDiscarded') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get asV9300(): {sessionIndex: number} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingPayoutStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.PayoutStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get isV9090(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get asV9090(): [number, Uint8Array] {
        assert(this.isV9090)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === 'd95599bb0ef0f714befa738223f11c2fc8127ccc863fcf601c59c2c90393c3cf'
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get asV9300(): {eraIndex: number, validatorStash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Reward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The staker has been rewarded by this amount. `AccountId` is the stash account.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Staking.Reward') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The staker has been rewarded by this amount. `AccountId` is the stash account.
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get isV9090(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get asV9090(): [Uint8Array, bigint] {
        assert(this.isV9090)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get asV9300(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Slash')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Staking.Slash') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashReportedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.SlashReported')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    get isV9360(): boolean {
        return this._chain.getEventHash('Staking.SlashReported') === 'e39cf2a18a4e10b8687c317e88d62091108b3531886ba13edd6e5b2b3fcd9ddc'
    }

    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    get asV9360(): {validator: Uint8Array, fraction: number, slashEra: number} {
        assert(this.isV9360)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    get isV9090(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    get asV9090(): [Uint8Array, bigint] {
        assert(this.isV9090)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '8043a273ae232adf290e1fbbd88711bdf078eb5beb2a947de455999b434e7896'
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get asV9300(): {staker: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSolutionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.SolutionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new solution for the upcoming election has been stored.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Staking.SolutionStored') === '0bf020e543ea88729b1b61dbeb14181ab6acba99a0e1795514718dacf33fb459'
    }

    /**
     *  A new solution for the upcoming election has been stored.
     */
    get asV0(): v0.ElectionCompute {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakersElectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakersElected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new set of stakers was elected.
     */
    get isV9090(): boolean {
        return this._chain.getEventHash('Staking.StakersElected') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  A new set of stakers was elected.
     */
    get asV9090(): null {
        assert(this.isV9090)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakingElectionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakingElection')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new set of stakers was elected with the given computation method.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Staking.StakingElection') === '0bf020e543ea88729b1b61dbeb14181ab6acba99a0e1795514718dacf33fb459'
    }

    /**
     *  A new set of stakers was elected with the given computation method.
     */
    get asV0(): v0.ElectionCompute {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     *  A new set of stakers was elected.
     */
    get isV30(): boolean {
        return this._chain.getEventHash('Staking.StakingElection') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  A new set of stakers was elected.
     */
    get asV30(): null {
        assert(this.isV30)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakingElectionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakingElectionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The election failed. No new era is planned.
     */
    get isV9050(): boolean {
        return this._chain.getEventHash('Staking.StakingElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The election failed. No new era is planned.
     */
    get asV9050(): null {
        assert(this.isV9050)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingUnbondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Unbonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has unbonded this amount.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has unbonded this amount.
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has unbonded this amount.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has unbonded this amount.
     */
    get asV9300(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingValidatorPrefsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ValidatorPrefsSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A validator has set their preferences.
     */
    get isV9200(): boolean {
        return this._chain.getEventHash('Staking.ValidatorPrefsSet') === '8fa3f27535c1d0f1ffdc2ce940a56867f890d0c9454d7ce784db7b18f03b4648'
    }

    /**
     * A validator has set their preferences.
     */
    get asV9200(): [Uint8Array, v9200.ValidatorPrefs] {
        assert(this.isV9200)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A validator has set their preferences.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.ValidatorPrefsSet') === 'ddd49ae78e2f486962719114045bf4dd54c48ed4387a2f0ad91dc62c7bfc3212'
    }

    /**
     * A validator has set their preferences.
     */
    get asV9300(): {stash: Uint8Array, prefs: v9300.ValidatorPrefs} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue.
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get isV9300(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get asV9300(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV9300)
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
     *  The sudoer just switched identity; the old key is supplied.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The sudoer just switched identity; the old key is supplied.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
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
     *  A sudo just took place.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place.
     */
    get asV0(): v0.DispatchResult {
        assert(this.isV0)
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
     *  A sudo just took place.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
    }

    /**
     *  A sudo just took place.
     */
    get asV0(): boolean {
        assert(this.isV0)
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
    get isV0(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  `:code` was updated.
     */
    get asV0(): null {
        assert(this.isV0)
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
     *  An extrinsic failed.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '09be5714d55bec634be0e5bf6ca98e24886f3a530b5649b618b20e4514550b91'
    }

    /**
     *  An extrinsic failed.
     */
    get asV0(): [v0.DispatchError, v0.DispatchInfo] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed. \[error, info\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '0995776ff5e8d5f8662a6841d8556c830acc58fbb01f76a13b6aa4222b987150'
    }

    /**
     * An extrinsic failed. \[error, info\]
     */
    get asV9110(): [v9110.DispatchError, v9110.DispatchInfo] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
    }

    /**
     * An extrinsic failed.
     */
    get asV9170(): {dispatchError: v9170.DispatchError, dispatchInfo: v9170.DispatchInfo} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
    }

    /**
     * An extrinsic failed.
     */
    get asV9190(): {dispatchError: v9190.DispatchError, dispatchInfo: v9190.DispatchInfo} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV9291(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '7a219a9eae41ad22651fdcb4f6a7453254b0ecc7be4b30821be2ab5b44e5f1b4'
    }

    /**
     * An extrinsic failed.
     */
    get asV9291(): {dispatchError: v9291.DispatchError, dispatchInfo: v9291.DispatchInfo} {
        assert(this.isV9291)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '36c29895cd15b6f845bb064a671635ce07ef9de9648695c2803020e8510d0fb3'
    }

    /**
     * An extrinsic failed.
     */
    get asV9340(): {dispatchError: v9340.DispatchError, dispatchInfo: v9340.DispatchInfo} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '3dbd96eefe1aa593b278d8684042e23a6a118e379fb5699dd871cf28fb627cd6'
    }

    /**
     * An extrinsic failed.
     */
    get asV9420(): {dispatchError: v9420.DispatchError, dispatchInfo: v9420.DispatchInfo} {
        assert(this.isV9420)
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
     *  An extrinsic completed successfully.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
    }

    /**
     *  An extrinsic completed successfully.
     */
    get asV0(): v0.DispatchInfo {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV9170(): {dispatchInfo: v9170.DispatchInfo} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV9291(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6fc1e5ad9f5b3851c6e301764b8507ebb0861fd57381e6bc020a47f2b710167d'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV9291(): {dispatchInfo: v9291.DispatchInfo} {
        assert(this.isV9291)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6b78214e1591ecc2de1662ebf5ca93838612414a62415cde1cdd2962f8235a92'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV9340(): {dispatchInfo: v9340.DispatchInfo} {
        assert(this.isV9340)
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
     *  An account was reaped.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account was reaped.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was reaped.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV9170(): {account: Uint8Array} {
        assert(this.isV9170)
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
     *  A new account was created.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new account was created.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new account was created.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV9170(): {account: Uint8Array} {
        assert(this.isV9170)
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
    get isV30(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  On on-chain remark happened. \[origin, remark_hash\]
     */
    get asV30(): [Uint8Array, Uint8Array] {
        assert(this.isV30)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * On on-chain remark happened.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV9170(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV9170)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was approved by the required threshold.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asV9140(): {proposalHash: Uint8Array} {
        assert(this.isV9140)
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
     *  A proposal was closed after its duration was up.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
    }

    /**
     *  A proposal was closed after its duration was up.
     */
    get asV0(): [Uint8Array, number, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asV9140(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isV9140)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A motion was not approved by the required threshold.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asV9140(): {proposalHash: Uint8Array} {
        assert(this.isV9140)
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
     *  A motion was executed; `bool` is true if returned without error.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A motion was executed; `bool` is true if returned without error.
     */
    get asV0(): [Uint8Array, v0.DispatchResult] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV9110(): [Uint8Array, v9110.Type_31] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9140(): {proposalHash: Uint8Array, result: v9140.Type_28} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9170(): {proposalHash: Uint8Array, result: v9170.Type_29} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9190(): {proposalHash: Uint8Array, result: v9190.Type_30} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9340(): {proposalHash: Uint8Array, result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === 'c0a7075d1db65c853af68dee8fccfd68bc709058c1c831fa5759250c8549e688'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asV9420(): {proposalHash: Uint8Array, result: v9420.Type_33} {
        assert(this.isV9420)
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
     *  A single member did some action; `bool` is true if returned without error.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'd0cdbb3589e958e044894bb21646de3e18ddd8e6ff7b185a4d1964628627a102'
    }

    /**
     *  A single member did some action; `bool` is true if returned without error.
     */
    get asV0(): [Uint8Array, v0.DispatchResult] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '4c0b4a162aadee51101107186bcd8702d456d82a3b858208b7ecbf7f53187fbb'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     * \[proposal_hash, result\]
     */
    get asV9110(): [Uint8Array, v9110.Type_31] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '985881284cd2d985dd366d839f2f998c085d1947cd3d3888f28b2b95e28572f1'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9140(): {proposalHash: Uint8Array, result: v9140.Type_28} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '277b4c0e428c2d4a9558753a98f57fb1fce7e27c7e6311138f5416b2baf86e33'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9170(): {proposalHash: Uint8Array, result: v9170.Type_29} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e3462770cd5fd27e557ee1e7e9aa904092ca387f3eec55182b953d310847e044'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9190(): {proposalHash: Uint8Array, result: v9190.Type_30} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e4ddba6fedfd1d730b14622cc84321978192b87a473c4fee1f401e1a07add330'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9340(): {proposalHash: Uint8Array, result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'c0a7075d1db65c853af68dee8fccfd68bc709058c1c831fa5759250c8549e688'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asV9420(): {proposalHash: Uint8Array, result: v9420.Type_33} {
        assert(this.isV9420)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
    }

    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     */
    get asV0(): [Uint8Array, number, Uint8Array, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asV9140(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isV9140)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
    }

    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV0(): [Uint8Array, Uint8Array, boolean, number, number] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asV9140(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isV9140)
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
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Phantom member, never used.
     */
    get asV0(): null {
        assert(this.isV0)
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
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  One of the members' keys changed.
     */
    get asV0(): null {
        assert(this.isV0)
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
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The given member was added; see the transaction for who.
     */
    get asV0(): null {
        assert(this.isV0)
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
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The given member was removed; see the transaction for who.
     */
    get asV0(): null {
        assert(this.isV0)
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
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  The membership was reset; see the transaction for who the new set is.
     */
    get asV0(): null {
        assert(this.isV0)
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
    get isV0(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Two members were swapped; see the transaction for who.
     */
    get asV0(): null {
        assert(this.isV0)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Tips.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new tip suggestion has been opened. \[tip_hash\]
     */
    get asV28(): Uint8Array {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new tip suggestion has been opened.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A new tip suggestion has been opened.
     */
    get asV9140(): {tipHash: Uint8Array} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Tips.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A tip suggestion has been closed. \[tip_hash, who, payout\]
     */
    get asV28(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A tip suggestion has been closed.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
    }

    /**
     * A tip suggestion has been closed.
     */
    get asV9140(): {tipHash: Uint8Array, who: Uint8Array, payout: bigint} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Tips.TipClosing') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A tip suggestion has reached threshold and is closing. \[tip_hash\]
     */
    get asV28(): Uint8Array {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A tip suggestion has reached threshold and is closing.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Tips.TipClosing') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A tip suggestion has reached threshold and is closing.
     */
    get asV9140(): {tipHash: Uint8Array} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Tips.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A tip suggestion has been retracted. \[tip_hash\]
     */
    get asV28(): Uint8Array {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A tip suggestion has been retracted.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
    }

    /**
     * A tip suggestion has been retracted.
     */
    get asV9140(): {tipHash: Uint8Array} {
        assert(this.isV9140)
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
    get isV28(): boolean {
        return this._chain.getEventHash('Tips.TipSlashed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
     */
    get asV28(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV28)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A tip suggestion has been slashed.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
    }

    /**
     * A tip suggestion has been slashed.
     */
    get asV9140(): {tipHash: Uint8Array, finder: Uint8Array, deposit: bigint} {
        assert(this.isV9140)
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
    get isV9260(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV9260(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV9260)
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
     *  Some funds have been allocated.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
    }

    /**
     *  Some funds have been allocated.
     */
    get asV0(): [number, bigint, Uint8Array] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been allocated.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asV9170(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyAwarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty is awarded to a beneficiary. [index, beneficiary]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.BountyAwarded') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  A bounty is awarded to a beneficiary. [index, beneficiary]
     */
    get asV25(): [number, Uint8Array] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyBecameActiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyBecameActive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty proposal is funded and became active. [index]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.BountyBecameActive') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty proposal is funded and became active. [index]
     */
    get asV25(): number {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty is cancelled. [index]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.BountyCanceled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty is cancelled. [index]
     */
    get asV25(): number {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.BountyClaimed') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
    }

    /**
     *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
     */
    get asV25(): [number, bigint, Uint8Array] {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyExtendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyExtended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty expiry is extended. [index]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.BountyExtended') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A bounty expiry is extended. [index]
     */
    get asV25(): number {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyProposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  New bounty proposal. [index]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.BountyProposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New bounty proposal. [index]
     */
    get asV25(): number {
        assert(this.isV25)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBountyRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.BountyRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A bounty proposal was rejected; funds were slashed. [index, bond]
     */
    get isV25(): boolean {
        return this._chain.getEventHash('Treasury.BountyRejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A bounty proposal was rejected; funds were slashed. [index, bond]
     */
    get asV25(): [number, bigint] {
        assert(this.isV25)
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
     *  Some of our funds have been burnt.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Some of our funds have been burnt.
     */
    get asV0(): bigint {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some of our funds have been burnt.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
    }

    /**
     * Some of our funds have been burnt.
     */
    get asV9170(): {burntFunds: bigint} {
        assert(this.isV9170)
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
     *  Some funds have been deposited.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Some funds have been deposited.
     */
    get asV0(): bigint {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some funds have been deposited.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
    }

    /**
     * Some funds have been deposited.
     */
    get asV9170(): {value: bigint} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryNewTipEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.NewTip')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new tip suggestion has been opened.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new tip suggestion has been opened.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
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
     *  New proposal.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New proposal.
     */
    get asV0(): number {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New proposal.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV9170(): {proposalIndex: number} {
        assert(this.isV9170)
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
     *  A proposal was rejected; funds were slashed.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
    }

    /**
     *  A proposal was rejected; funds were slashed.
     */
    get asV0(): [number, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV9170(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV9170)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  Spending has finished; this is the amount that rolls over until next spend.
     */
    get asV0(): bigint {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get asV9170(): {rolloverBalance: bigint} {
        assert(this.isV9170)
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
    get isV9250(): boolean {
        return this._chain.getEventHash('Treasury.SpendApproved') === 'fce90c02bffde89fb0e8723868aa8e94bfe9c1c48c5af8c34efd8ff5173184f9'
    }

    /**
     * A new spend proposal has been approved.
     */
    get asV9250(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
        assert(this.isV9250)
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
     *  We have ended a spend period and will now allocate funds.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
    }

    /**
     *  We have ended a spend period and will now allocate funds.
     */
    get asV0(): bigint {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get asV9170(): {budgetRemaining: bigint} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryTipClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.TipClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has been closed.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A tip suggestion has been closed.
     */
    get asV0(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryTipClosingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.TipClosing')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has reached threshold and is closing.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.TipClosing') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A tip suggestion has reached threshold and is closing.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryTipRetractedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.TipRetracted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A tip suggestion has been retracted.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Treasury.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A tip suggestion has been retracted.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryUpdatedInactiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.UpdatedInactive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Treasury.UpdatedInactive') === 'd25083f089d99f72f11dfcdd8481dbdc5c0c6d9c3369646530e2e08cd9f6bbba'
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get asV9370(): {reactivated: bigint, deactivated: bigint} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpExecutedUpwardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.ExecutedUpward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Ump.ExecutedUpward') === 'f660a1eb74571095e7cab99beb471c0ab4687ebb9afcd9f8734fc316dd9f477d'
    }

    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV9110(): [Uint8Array, v9110.V2Outcome] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Ump.ExecutedUpward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
    }

    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV9170(): [Uint8Array, v9170.V2Outcome] {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Ump.ExecutedUpward') === '0a5524dcf48d575bf19533e72499c1b6f08167113160e1bb190028315c81787f'
    }

    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV9420(): [Uint8Array, v9420.V3Outcome] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpInvalidFormatEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.InvalidFormat')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Upward message is invalid XCM.
     * \[ id \]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Ump.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Upward message is invalid XCM.
     * \[ id \]
     */
    get asV9110(): Uint8Array {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpOverweightEnqueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.OverweightEnqueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The weight budget was exceeded for an individual downward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Ump.OverweightEnqueued') === 'aaf5268a281121222607d573ed3794c7f654962d5ef27e1a27384a8471d72532'
    }

    /**
     * The weight budget was exceeded for an individual downward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    get asV9110(): [number, Uint8Array, bigint, bigint] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    get isV9291(): boolean {
        return this._chain.getEventHash('Ump.OverweightEnqueued') === '09896594783fbdea1b3408d435e03e8f5c2c36e769611cd061b92d0980d737ba'
    }

    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    get asV9291(): [number, Uint8Array, bigint, v9291.Weight] {
        assert(this.isV9291)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Ump.OverweightEnqueued') === 'd3af318db82ff77a61475e5ba29692cb7bdcc7383eb1cd1e018d324a4c241953'
    }

    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    get asV9340(): [number, Uint8Array, bigint, v9340.Weight] {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpOverweightServicedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.OverweightServiced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Ump.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
    }

    /**
     * Downward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    get asV9110(): [bigint, bigint] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    get isV9291(): boolean {
        return this._chain.getEventHash('Ump.OverweightServiced') === '5274ea4780ef5bc7803ffa3f657e04bf6e6c3d4f47d1d71bce33e198c5bad9c9'
    }

    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    get asV9291(): [bigint, v9291.Weight] {
        assert(this.isV9291)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Ump.OverweightServiced') === '88097626858e815372076ee35ab78f1e9adcbb85d556b85f5da9ca4f3a389162'
    }

    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    get asV9340(): [bigint, v9340.Weight] {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpUnsupportedVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.UnsupportedVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Upward message is unsupported version of XCM.
     * \[ id \]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Ump.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Upward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV9110(): Uint8Array {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpUpwardMessagesReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.UpwardMessagesReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some downward messages have been received and will be processed.
     * \[ para, count, size \]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Ump.UpwardMessagesReceived') === 'ee14df8652ec18f0202c95706dac25953673d4834fcfe21e7d7559cb96975c06'
    }

    /**
     * Some downward messages have been received and will be processed.
     * \[ para, count, size \]
     */
    get asV9110(): [number, number, number] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpWeightExhaustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.WeightExhausted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Ump.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
    }

    /**
     * The weight limit for handling downward messages was reached.
     * \[ id, remaining, required \]
     */
    get asV9110(): [Uint8Array, bigint, bigint] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    get isV9291(): boolean {
        return this._chain.getEventHash('Ump.WeightExhausted') === 'bc7674f391b065e5e65a07305ce6828dbeab3200c4619cdecb92046496092002'
    }

    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    get asV9291(): [Uint8Array, v9291.Weight, v9291.Weight] {
        assert(this.isV9291)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Ump.WeightExhausted') === 'c2e0c5d4d360c41729d56a488c7e9012e8bc155fcc2d0de3d1e763993ef99059'
    }

    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    get asV9340(): [Uint8Array, v9340.Weight, v9340.Weight] {
        assert(this.isV9340)
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
    get isV0(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Batch of dispatches completed fully with no error.
     */
    get asV0(): null {
        assert(this.isV0)
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
    get isV9220(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV9220(): null {
        assert(this.isV9220)
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
     *  well as the error.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'acf646b5aabc17d1d9bbcec046f84450721211384188c038f062a8174d381ca2'
    }

    /**
     *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *  well as the error.
     */
    get asV0(): [number, v0.DispatchError] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    get isV9110(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === 'b9192854e3b1d8b7a3bd93b66a170a2afd8616d353d0fc1bdbfbfe6efa5b4f5a'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error. \[index, error\]
     */
    get asV9110(): [number, v9110.DispatchError] {
        assert(this.isV9110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '98bdd6e841214fcd4b95ff7b4750fcf3643d9e94f0203582cf6dd5c7dd772c39'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV9140(): {index: number, error: v9140.DispatchError} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV9170(): {index: number, error: v9170.DispatchError} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV9190(): {index: number, error: v9190.DispatchError} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '14dbb9456065a44deeed159d4dbd21796ec92754c0494d698c9bcc529d0f7279'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV9340(): {index: number, error: v9340.DispatchError} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '55aa3365272ab00b66790b493c7489ead9e9c34bdcad0b48ee9755d3bd0d725e'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV9420(): {index: number, error: v9420.DispatchError} {
        assert(this.isV9420)
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
    get isV9140(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '8fdfbdd4d08d5c98b7a7eada31ee13c01f31ab10c8752e768b9d4f32f2edfd25'
    }

    /**
     * A call was dispatched. \[result\]
     */
    get asV9140(): v9140.Type_28 {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '123f6c35bbf8bd8d1cc0ada05ce8ad9758b8462076e62ae91382a7270c95ff10'
    }

    /**
     * A call was dispatched.
     */
    get asV9170(): {result: v9170.Type_29} {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV9190(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === '7d690b5ed9f2caaea0254a371bcab7b5a7b6fa958ff0b07661390aaf23c39439'
    }

    /**
     * A call was dispatched.
     */
    get asV9190(): {result: v9190.Type_30} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A call was dispatched.
     */
    get asV9340(): {result: v9340.Type_32} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'e6b126b1d10869892737f36b23109c1b51d3828aeab399104c160e9f275d8049'
    }

    /**
     * A call was dispatched.
     */
    get asV9420(): {result: v9420.Type_33} {
        assert(this.isV9420)
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
    get isV9090(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  A single item within a Batch of dispatches has completed with no error.
     */
    get asV9090(): null {
        assert(this.isV9090)
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
    get isV9220(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV9220(): {error: v9220.DispatchError} {
        assert(this.isV9220)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV9340(): {error: v9340.DispatchError} {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '3ea595fddebcb407af8f717186084e8c4f09481ff7bcc5d4cc97dcd83cddd616'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV9420(): {error: v9420.DispatchError} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityMultisigApprovalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.MultisigApproval')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Utility.MultisigApproval') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been approved by someone. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call.
     */
    get asV0(): [Uint8Array, v0.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityMultisigCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.MultisigCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account, fourth is hash of the call.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Utility.MultisigCancelled') === '55826bbe203e755c34c0b3ef86b30419518b6e9df69cc64cc5244fa726ca6f02'
    }

    /**
     *  A multisig operation has been cancelled. First param is the account that is
     *  cancelling, third is the multisig account, fourth is hash of the call.
     */
    get asV0(): [Uint8Array, v0.Timepoint, Uint8Array, Uint8Array] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityMultisigExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.MultisigExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call to be executed.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Utility.MultisigExecuted') === 'e368973d939e86d8e4639ec21b8ed877b5a6772f4da0bad0d4fe5df98c063ad2'
    }

    /**
     *  A multisig operation has been executed. First param is the account that is
     *  approving, third is the multisig account, fourth is hash of the call to be executed.
     */
    get asV0(): [Uint8Array, v0.Timepoint, Uint8Array, Uint8Array, v0.DispatchResult] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityNewMultisigEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.NewMultisig')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account, third is hash of the call.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Utility.NewMultisig') === 'cb6c81f69fb6d8ffb3dbfdb6c03e462f972126345664ca5dc77878a3fa93edf7'
    }

    /**
     *  A new multisig operation has begun. First param is the account that is approving,
     *  second is the multisig account, third is hash of the call.
     */
    get asV0(): [Uint8Array, Uint8Array, Uint8Array] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityUncallableEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.Uncallable')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A call with a `false` IsCallable filter was attempted.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Utility.Uncallable') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  A call with a `false` IsCallable filter was attempted.
     */
    get asV0(): number {
        assert(this.isV0)
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
     *  An account (given) has become fully vested. No further vesting can happen.
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Vesting.VestingCompleted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An account (given) has become fully vested. No further vesting can happen.
     */
    get asV0(): Uint8Array {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An \[account\] has become fully vested.
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Vesting.VestingCompleted') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An \[account\] has become fully vested.
     */
    get asV9140(): {account: Uint8Array} {
        assert(this.isV9140)
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
     */
    get isV0(): boolean {
        return this._chain.getEventHash('Vesting.VestingUpdated') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The amount vested has been updated. This could indicate more funds are available. The
     *  balance given is the amount which is left unvested (and thus locked).
     */
    get asV0(): [Uint8Array, bigint] {
        assert(this.isV0)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('Vesting.VestingUpdated') === '827ca6c1a4e85ce850afac4c8d4d055acd3be5c19141889b40808e42b2c769e3'
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get asV9140(): {account: Uint8Array, unvested: bigint} {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class VoterListRebaggedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VoterList.Rebagged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Moved an account from one bag to another.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('VoterList.Rebagged') === '7c6f9f7c01916b66130aa25ffe6ba9b00599c0af74b1238a9876c164819dde4e'
    }

    /**
     * Moved an account from one bag to another.
     */
    get asV9230(): {who: Uint8Array, from: bigint, to: bigint} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class VoterListScoreUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VoterList.ScoreUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Updated the score of some account to the given amount.
     */
    get isV9230(): boolean {
        return this._chain.getEventHash('VoterList.ScoreUpdated') === '3444db3e9dd4128c42e890eb1f98441148f3d7cea3a43f5b223ba3e6cdc2c8b6'
    }

    /**
     * Updated the score of some account to the given amount.
     */
    get asV9230(): {who: Uint8Array, newScore: bigint} {
        assert(this.isV9230)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistCallWhitelistedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.CallWhitelisted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9420(): boolean {
        return this._chain.getEventHash('Whitelist.CallWhitelisted') === 'b44e90452a13e65d907b0cefbea166547546a12683e4c0df57032f38a10e78b3'
    }

    get asV9420(): {callHash: Uint8Array} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistWhitelistedCallDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.WhitelistedCallDispatched')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9420(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallDispatched') === '7a3c5cecda1aa512a9e0e3c410de4f2a082346851d3d9b96224b31413ed8937d'
    }

    get asV9420(): {callHash: Uint8Array, result: Result<v9420.PostDispatchInfo, v9420.DispatchErrorWithPostInfo>} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistWhitelistedCallRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.WhitelistedCallRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV9420(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallRemoved') === 'b44e90452a13e65d907b0cefbea166547546a12683e4c0df57032f38a10e78b3'
    }

    get asV9420(): {callHash: Uint8Array} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletAssetsClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.AssetsClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsClaimed') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get asV9340(): [Uint8Array, v9340.V1MultiLocation, v9340.VersionedMultiAssets] {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsClaimed') === '357607142e5298824c427a1fe0bfb4dd63f3878ebfea84e52fa98b82b1a4f4c6'
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get asV9370(): [Uint8Array, v9370.V1MultiLocation, v9370.VersionedMultiAssets] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsClaimed') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get asV9420(): [Uint8Array, v9420.V3MultiLocation, v9420.VersionedMultiAssets] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletAssetsTrappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.AssetsTrapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV9140(): [Uint8Array, v9140.V1MultiLocation, v9140.VersionedMultiAssets] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsTrapped') === '357607142e5298824c427a1fe0bfb4dd63f3878ebfea84e52fa98b82b1a4f4c6'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV9370(): [Uint8Array, v9370.V1MultiLocation, v9370.VersionedMultiAssets] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsTrapped') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV9420(): [Uint8Array, v9420.V3MultiLocation, v9420.VersionedMultiAssets] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletAttemptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.Attempted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.Attempted') === '193515c3b0e5bbe78313ce7bb5d80d3c789be70e0085c1d43ce0347187c43a50'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV9140(): v9140.V2Outcome {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('XcmPallet.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV9170(): v9170.V2Outcome {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.Attempted') === '9f44833a3470bf6416377180f3875a05cfa0cf60651f18f6456d9e12cbab7095'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV9420(): v9420.V3Outcome {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletFeesPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.FeesPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.FeesPaid') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    get asV9420(): [v9420.V3MultiLocation, v9420.V3MultiAsset[]] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidQuerierEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidQuerier')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidQuerier') === '7c1090f283eee877a7601bfed0fd6fc3ca831930ac944924347ca8a2c6bd92e3'
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    get asV9420(): [v9420.V3MultiLocation, bigint, v9420.V3MultiLocation, (v9420.V3MultiLocation | undefined)] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidQuerierVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidQuerierVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidQuerierVersion') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV9420(): [v9420.V3MultiLocation, bigint] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidResponderEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidResponder')
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
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV9140(): [v9140.V1MultiLocation, bigint, (v9140.V1MultiLocation | undefined)] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponder') === '990cc00e432c7557e78d8fc369a5ff1c27aceeaff4ef11984d218478dc53d382'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV9370(): [v9370.V1MultiLocation, bigint, (v9370.V1MultiLocation | undefined)] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponder') === '3bf64d16d6fb5992c738643efff778414cc181e36377c106ab8130ca32b906de'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV9420(): [v9420.V3MultiLocation, bigint, (v9420.V3MultiLocation | undefined)] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidResponderVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidResponderVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponderVersion') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV9140(): [v9140.V1MultiLocation, bigint] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponderVersion') === 'a42731758e356b8640e3321dafe151b8ac297a2be71bc4ceff985033060f2569'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV9370(): [v9370.V1MultiLocation, bigint] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponderVersion') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV9420(): [v9420.V3MultiLocation, bigint] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.Notified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV9140(): [bigint, number, number] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyDecodeFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyDecodeFailed')
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
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV9140(): [bigint, number, number] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyDispatchErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyDispatchError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV9140(): [bigint, number, number] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyOverweight')
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
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV9140(): [bigint, number, number, bigint, bigint] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV9291(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyOverweight') === '017f3a2e2d06e91d1be294456b9555e805a1e72a1ad2a469f493c21bf4da0feb'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV9291(): [bigint, number, number, v9291.Weight, v9291.Weight] {
        assert(this.isV9291)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV9340(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyOverweight') === '98a4f2faff58b2444156c088dd1e1b3efb6f82323dcf1a7c67d4d2e01b621c0d'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV9340(): [bigint, number, number, v9340.Weight, v9340.Weight] {
        assert(this.isV9340)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyTargetMigrationFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyTargetMigrationFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV9140(): [v9140.VersionedMultiLocation, bigint] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetMigrationFail') === 'df85778aaaf8dd844e177ac92fcb3256708dd8f3a8c5f94e1fa79f126116dc1c'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV9370(): [v9370.VersionedMultiLocation, bigint] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetMigrationFail') === '8266fa3a9f901885a47ef275cb4d4053fa3a36033a40564944a565ca686bb27d'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV9420(): [v9420.VersionedMultiLocation, bigint] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyTargetSendFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyTargetSendFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetSendFail') === '691ecac12054acab4727e4ac3bcc4cc884bcf98e86e777b9c154133f1ff85778'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV9140(): [v9140.V1MultiLocation, bigint, v9140.V2Error] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV9170(): [v9170.V1MultiLocation, bigint, v9170.V2Error] {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetSendFail') === '70b4128bc206c159059329487777fcca974cd67403fafe82ed254a875947534d'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV9370(): [v9370.V1MultiLocation, bigint, v9370.V2Error] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetSendFail') === '26c26186934c8414941ac6565c3465399a31fd237e9f48bcc04601c00427c6fc'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV9420(): [v9420.V3MultiLocation, bigint, v9420.V3Error] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletResponseReadyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.ResponseReady')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseReady') === 'e6cd72b673b499abf36b946b4ab2a4531e2ca4af4aa3d41e14bafae7b2502409'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV9140(): [bigint, v9140.V2Response] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV9170(): [bigint, v9170.V2Response] {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseReady') === 'b377afa93f6a1fa3fbbbe2957f60a56bc7c8e08a09d110a511fc3ed24c3c67a4'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV9370(): [bigint, v9370.V2Response] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseReady') === '47e2336328ac2f8cffe468836a85755d501dbd3f9fe77c829ae5b5c5c33f5e9c'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV9420(): [bigint, v9420.V3Response] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletResponseTakenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.ResponseTaken')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get asV9140(): bigint {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.Sent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.Sent') === '1a2c2f0f587aa6cafef526c4c8aabbb80179c1dda79383508e93899dd8a8604c'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV9140(): [v9140.V1MultiLocation, v9140.V1MultiLocation, v9140.V2Instruction[]] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV9170(): boolean {
        return this._chain.getEventHash('XcmPallet.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV9170(): [v9170.V1MultiLocation, v9170.V1MultiLocation, v9170.V2Instruction[]] {
        assert(this.isV9170)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.Sent') === '2d7b5f95d8bfc74ce68a179c7a746363dc0d3d0eca2fe88f6606a522fbe34a83'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV9370(): [v9370.V1MultiLocation, v9370.V1MultiLocation, v9370.V2Instruction[]] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.Sent') === '8b71eb54444ef55962e90645805fd80535dfb12f572b41fdb1e093b7627b132d'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV9420(): [v9420.V3MultiLocation, v9420.V3MultiLocation, v9420.V3Instruction[]] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletSupportedVersionChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.SupportedVersionChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV9140(): [v9140.V1MultiLocation, number] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.SupportedVersionChanged') === 'a03fd5bf20a50aaaf59ab7760b98733a03d897f929733dd0cc98b0a5d9bb0924'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV9370(): [v9370.V1MultiLocation, number] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.SupportedVersionChanged') === '9fb88093240cec5964187b6999557d2d8c4331f97b6c42c5664d30afbf50d7d4'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV9420(): [v9420.V3MultiLocation, number] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletUnexpectedResponseEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.UnexpectedResponse')
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
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV9140(): [v9140.V1MultiLocation, bigint] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.UnexpectedResponse') === 'a42731758e356b8640e3321dafe151b8ac297a2be71bc4ceff985033060f2569'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV9370(): [v9370.V1MultiLocation, bigint] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.UnexpectedResponse') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV9420(): [v9420.V3MultiLocation, bigint] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionChangeNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionChangeNotified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get isV9140(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get asV9140(): [v9140.V1MultiLocation, number] {
        assert(this.isV9140)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionChangeNotified') === 'a03fd5bf20a50aaaf59ab7760b98733a03d897f929733dd0cc98b0a5d9bb0924'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    get asV9370(): [v9370.V1MultiLocation, number] {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionChangeNotified') === '3e656c216d68595d03592e62a70ad5d9d6a20b8a41bc0686433d36902cc47f08'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get asV9420(): [v9420.V3MultiLocation, number, v9420.V3MultiAsset[]] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionNotifyRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionNotifyRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyRequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asV9420(): [v9420.V3MultiLocation, v9420.V3MultiAsset[]] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionNotifyStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionNotifyStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyStarted') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    get asV9420(): [v9420.V3MultiLocation, v9420.V3MultiAsset[]] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionNotifyUnrequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionNotifyUnrequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyUnrequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asV9420(): [v9420.V3MultiLocation, v9420.V3MultiAsset[]] {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}
