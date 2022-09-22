import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Totals {
  constructor(props?: Partial<Totals>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  finalizedBlocks!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  totalIssuance!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  signedExtrinsics!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  transfers!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  holders!: bigint

  @Column_("int4", {nullable: false})
  validatorsIdealCount!: number

  @Column_("int4", {nullable: false})
  validatorsCount!: number

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  stakedValueTotal!: bigint

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  stakedValueValidator!: bigint

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  stakedValueNominator!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  inflationRate!: bigint
}
