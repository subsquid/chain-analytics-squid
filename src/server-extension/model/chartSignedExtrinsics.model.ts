import { Field, ObjectType, registerEnumType } from 'type-graphql';

@ObjectType()
export class SignedExtrinsicsChartEntity {
  @Field(() => Date, { nullable: false })
  datetime!: Date;

  @Field(() => BigInt, { nullable: true, defaultValue: 0n })
  count!: number;

  constructor(props: Partial<SignedExtrinsicsChartEntity>) {
    Object.assign(this, props);
  }
}
