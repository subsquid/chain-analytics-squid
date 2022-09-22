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
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  totalStake!: bigint

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  validatorStake!: bigint

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  nominatorStake!: bigint
}
