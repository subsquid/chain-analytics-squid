import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class HistoricalDataMeta {
  constructor(props?: Partial<HistoricalDataMeta>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  holdersLatestBlockNumber!: bigint

  @Index_()
  @Column_("timestamp with time zone", {nullable: true})
  holdersLatestTime!: Date | undefined | null

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  issuanceLatestBlockNumber!: bigint

  @Index_()
  @Column_("timestamp with time zone", {nullable: true})
  issuanceLatestTime!: Date | undefined | null

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  validatorsLatestBlockNumber!: bigint

  @Index_()
  @Column_("timestamp with time zone", {nullable: true})
  validatorsLatestTime!: Date | undefined | null

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  stakingLatestBlockNumber!: bigint

  @Index_()
  @Column_("timestamp with time zone", {nullable: true})
  stakingLatestTime!: Date | undefined | null
}
