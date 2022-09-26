import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Transfers {
  constructor(props?: Partial<Transfers>) {
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
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  totalAmount!: bigint

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  totalCount!: bigint
}
