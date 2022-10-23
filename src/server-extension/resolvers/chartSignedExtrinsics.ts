import { Arg, Query, registerEnumType, Resolver } from 'type-graphql';
import type { EntityManager } from 'typeorm';
import { Transfer } from '../../model';
import { SignedExtrinsicsChartEntity } from '../model/chartSignedExtrinsics.model';
import { getChartSignedExtrinsicsQuery } from '../query/chartSignedExtrinsics';
import assert from 'assert';

export enum SignedExtrinsicsChartInterval {
  minute = 'minute',
  hour = 'hour',
  day = 'day'
}

registerEnumType(SignedExtrinsicsChartInterval, {
  name: 'SignedExtrinsicsChartInterval'
});

@Resolver()
export class SignedExtrinsicsChartResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => [SignedExtrinsicsChartEntity])
  async signedExtrinsicsChart(
    @Arg('from', { nullable: false }) from: string,
    @Arg('to', { nullable: false }) to: string,
    @Arg('interval', () => SignedExtrinsicsChartInterval, {
      nullable: false,
      defaultValue: SignedExtrinsicsChartInterval.hour,
      description: `Can contain next values: minute, hour, day, month.`
    })
    interval: SignedExtrinsicsChartInterval
  ): Promise<SignedExtrinsicsChartEntity[]> {
    const withRange = !!(from && from.length > 0 && to && to.length);

    assert(
      new Date(to).getTime() - new Date(from).getTime() <= 604800000,
      'range can not be wider than a week'
    );

    const query = getChartSignedExtrinsicsQuery(withRange);

    let intervalSec = 'minute';
    switch (interval) {
      case SignedExtrinsicsChartInterval.hour:
        intervalSec = 'hour';
        break;
      case SignedExtrinsicsChartInterval.day:
        intervalSec = 'day';
        break;
      default:
    }

    const result: SignedExtrinsicsChartEntity[] = await this.genericChartQuery(
      query,
      withRange ? [from, to, interval] : [interval]
    );
    return result;
  }

  async genericChartQuery(
    query: string,
    params: Array<string>
  ): Promise<SignedExtrinsicsChartEntity[]> {
    const manager = await this.tx();
    const repository = manager.getRepository(Transfer);

    const result: SignedExtrinsicsChartEntity[] = await repository.query(
      query,
      params
    );
    return result;
  }
}
