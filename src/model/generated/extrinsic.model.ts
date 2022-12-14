import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class Extrinsic {
    constructor(props?: Partial<Extrinsic>) {
        Object.assign(this, props)
    }

    /**
     * Block number
     */
    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("int4", {nullable: false})
    totalCount!: number
}
