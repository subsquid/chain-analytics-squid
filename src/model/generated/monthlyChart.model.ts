import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class MonthlyChart {
    constructor(props?: Partial<MonthlyChart>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    chainFinalizedBlocks!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    chainFinalizedBlocksChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    chainFinalizedBlocksChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    chainSignedExtrinsics!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    chainSignedExtrinsicsChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    chainSignedExtrinsicsChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balancesTotalIssuance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balancesTotalIssuanceChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    balancesTotalIssuanceChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balancesTransfersVolume!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balancesTransfersVolumeChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    balancesTransfersVolumeChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balancesTransfersAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balancesTransfersAmountChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    balancesTransfersAmountChangeRatio!: number

    @Column_("int4", {nullable: false})
    parachainStakingCollatorsAmount!: number

    @Column_("int4", {nullable: false})
    parachainStakingCollatorsAmountChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    parachainStakingCollatorsAmountChangeRatio!: number

    @Column_("int4", {nullable: false})
    parachainStakingCurrentRound!: number

    @Column_("int4", {nullable: false})
    parachainStakingCurrentRoundChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    parachainStakingCurrentRoundChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    parachainStakingTotalStakeCollators!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    parachainStakingTotalStakeCollatorsChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    parachainStakingTotalStakeCollatorsChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    parachainStakingTotalStakeDelegators!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    parachainStakingTotalStakeDelegatorsChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    parachainStakingTotalStakeDelegatorsChangeRatio!: number

    @Column_("int4", {nullable: false})
    stakingValidatorsIdealAmount!: number

    @Column_("int4", {nullable: false})
    stakingValidatorsIdealAmountChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingValidatorsIdealAmountChangeRatio!: number

    @Column_("int4", {nullable: false})
    stakingActiveValidatorsAmount!: number

    @Column_("int4", {nullable: false})
    stakingActiveValidatorsAmountChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingActiveValidatorsAmountChangeRatio!: number

    @Column_("int4", {nullable: false})
    stakingValidatorsAmount!: number

    @Column_("int4", {nullable: false})
    stakingValidatorsAmountChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingValidatorsAmountChangeRatio!: number

    @Column_("int4", {nullable: false})
    stakingNominatorsActiveAmount!: number

    @Column_("int4", {nullable: false})
    stakingNominatorsActiveAmountChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingNominatorsActiveAmountChangeRatio!: number

    @Column_("int4", {nullable: false})
    stakingNominatorsInactiveAmount!: number

    @Column_("int4", {nullable: false})
    stakingNominatorsInactiveAmountChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingNominatorsInactiveAmountChangeRatio!: number

    @Column_("int4", {nullable: false})
    stakingCurrentEra!: number

    @Column_("int4", {nullable: false})
    stakingCurrentEraChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingCurrentEraChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStake!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingTotalStakeChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeValidators!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeValidatorsChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingTotalStakeValidatorsChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeNominatorsActive!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeNominatorsActiveChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingTotalStakeNominatorsActiveChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeNominatorsInactive!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeNominatorsInactiveChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingTotalStakeNominatorsInactiveChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeValidatorsSingleAccount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeValidatorsSingleAccountChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingTotalStakeValidatorsSingleAccountChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeValidatorsMultiAccount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingTotalStakeValidatorsMultiAccountChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingTotalStakeValidatorsMultiAccountChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingMinActiveNominatorStake!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingMinActiveNominatorStakeChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingMinActiveNominatorStakeChangeRatio!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingInflationRatio!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingInflationRatioChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingInflationRatioChangeRatio!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingRewardsRatio!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingRewardsRatioChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    stakingRewardsRatioChangeRatio!: number

    @Column_("int4", {nullable: false})
    nominationPoolsMembersAmount!: number

    @Column_("int4", {nullable: false})
    nominationPoolsMembersAmountChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    nominationPoolsMembersAmountChangeRatio!: number

    @Column_("int4", {nullable: false})
    nominationPoolsPoolsActiveAmount!: number

    @Column_("int4", {nullable: false})
    nominationPoolsPoolsActiveAmountChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    nominationPoolsPoolsActiveAmountChangeRatio!: number

    @Column_("int4", {nullable: false})
    nominationPoolsPoolsInactiveAmount!: number

    @Column_("int4", {nullable: false})
    nominationPoolsPoolsInactiveAmountChange!: number

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    nominationPoolsPoolsInactiveAmountChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nominationPoolsPoolsActiveTotalStake!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nominationPoolsPoolsActiveTotalStakeChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    nominationPoolsPoolsActiveTotalStakeChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nominationPoolsPoolsInactiveTotalStake!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nominationPoolsPoolsInactiveTotalStakeChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    nominationPoolsPoolsInactiveTotalStakeChangeRatio!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    slotsTokensLockedInParachains!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    slotsTokensLockedInParachainsChange!: bigint

    @Column_("numeric", {transformer: marshal.floatTransformer, nullable: false})
    slotsTokensLockedInParachainsChangeRatio!: number
}
