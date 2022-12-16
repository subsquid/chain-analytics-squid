import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class StakedValue {
    constructor(props?: Partial<StakedValue>) {
        Object.assign(this, props)
    }

    /**
     * Block number
     */
    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: true})
    currentEra!: number | undefined | null

    @Index_()
    @Column_("int4", {nullable: true})
    currentRound!: number | undefined | null

    @Index_()
    @Column_("int4", {nullable: true})
    collatorsCount!: number | undefined | null

    @Index_()
    @Column_("int4", {nullable: true})
    validatorsCount!: number | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalStake!: bigint

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    totalStakeStorage!: bigint | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    validatorStake!: bigint | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    collatorStake!: bigint | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nominatorStake!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string
}
