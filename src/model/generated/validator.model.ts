import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class Validator {
  constructor(props?: Partial<Validator>) {
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
  @Column_("int4", {nullable: false})
  idealCount!: number

  @Index_()
  @Column_("int4", {nullable: false})
  count!: number
}
