import { Field, ObjectType, registerEnumType } from 'type-graphql';

@ObjectType()
export class TransferChartEntity {
  @Field(() => Date, { nullable: false })
  datetime!: Date;

  @Field(() => BigInt, { nullable: true, defaultValue: 0n })
  volume!: bigint;

  @Field(() => BigInt, { nullable: true, defaultValue: 0n })
  count!: number;

  constructor(props: Partial<TransferChartEntity>) {
    Object.assign(this, props);
  }
}

