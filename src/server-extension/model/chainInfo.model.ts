import { Field, ObjectType, registerEnumType } from 'type-graphql';

@ObjectType()
export class Token {
  @Field(() => String, {nullable: false})
  symbol!: string

  @Field(() => String, {nullable: true})
  decimals!: number | null

  constructor(props: Partial<Token>) {
    Object.assign(this, props)
  }
}

@ObjectType()
export class ChainInfo {
  @Field(() => Number, {nullable: true})
  prefix!: number | null

  @Field(() => String, {nullable: false})
  name!: string

  @Field(() => String, {nullable: false})
  displayName!: string

  @Field(() => [Token], {nullable: false})
  tokens!: Token[]

  @Field(() => Number, {nullable: true})
  paraId!: number | null

  @Field(() => String, {nullable: true})
  relayChain!: string | null

  constructor(props?: Partial<ChainInfo>) {
    Object.assign(this, props)
  }
}