import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Current {
    constructor(props?: Partial<Current>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("timestamp with time zone", {nullable: false})
    lastUpdate!: Date

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    chainFinalizedBlocks!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    chainSignedExtrinsics!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balancesTotalIssuance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balancesTransfersVolume!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balancesTransfersAmount!: bigint

    @Column_("int4", {nullable: false})
    parachainStakingCollatorsAmount!: number

    @Column_("int4", {nullable: false})
    parachainStakingCurrentRound!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    parachainStakingTotalStakeCollators!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    parachainStakingTotalStakeDelegators!: bigint

    @Column_("int4", {nullable: false})
    stakingValidatorsIdealAmount!: number

    @Column_("int4", {nullable: false})
    stakingActiveValidatorsAmount!: number

    @Column_("int4", {nullable: false})
    stakingValidatorsAmount!: number

    @Column_("int4", {nullable: false})
    stakingNominatorsActiveAmount!: number

    @Column_("int4", {nullable: false})
    stakingNominatorsInactiveAmount!: number

    @Column_("int4", {nullable: false})
    stakingCurrentEra!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStake!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeValidators!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeNominatorsActive!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeNominatorsInactive!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeValidatorsSingleAccount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeValidatorsMultiAccount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingMinActiveNominatorStake!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingInflationRatio!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingRewardsRatio!: number

    @Column_("int4", {nullable: false})
    nominationPoolsMembersAmount!: number

    @Column_("int4", {nullable: false})
    nominationPoolsPoolsActiveAmount!: number

    @Column_("int4", {nullable: false})
    nominationPoolsPoolsInactiveAmount!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nominationPoolsPoolsActiveTotalStake!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nominationPoolsPoolsInactiveTotalStake!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    slotsTokensLockedInParachains!: bigint
}
