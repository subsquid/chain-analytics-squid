import { Field, ObjectType, registerEnumType } from 'type-graphql';

@ObjectType()
export class TransferChartEntity {
  @Field(() => Date, { nullable: false })
  datetime!: Date;

  @Field(() => BigInt, { nullable: true, defaultValue: 0n })
  amount!: bigint;

  @Field(() => BigInt, { nullable: true, defaultValue: 0n })
  count!: number;

  constructor(props: Partial<TransferChartEntity>) {
    Object.assign(this, props);
  }
}

export enum TransactionsChartInterval {
  minute = 'minute',
  hour = 'hour',
  day = 'day',
  month = 'month'
}

registerEnumType(TransactionsChartInterval, { name: 'TransactionsChartStep' });
