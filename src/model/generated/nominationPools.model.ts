import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class NominationPools {
    constructor(props?: Partial<NominationPools>) {
        Object.assign(this, props)
    }

    /**
     * Block number
     */
    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    totalPoolsCount!: number

    @Index_()
    @Column_("int4", {nullable: false})
    totalPoolsMembers!: number

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalPoolsStake!: bigint

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string
}
