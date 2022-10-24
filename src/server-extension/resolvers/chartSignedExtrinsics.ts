import { Arg, Query, Resolver } from 'type-graphql';
import type { EntityManager } from 'typeorm';
import { Transfer } from '../../model';
import {
  SignedExtrinsicsChartEntity,
  SignedExtrinsicsChartInterval
} from '../model/chartSignedExtrinsics.model';
import { getChartSignedExtrinsicsQuery } from '../query/chartSignedExtrinsics';

@Resolver()
export class SignedExtrinsicsChartResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => [SignedExtrinsicsChartEntity])
  async signedExtrinsicsChart(
    @Arg('from', { nullable: true }) from: string,
    @Arg('to', { nullable: true }) to: string,
    @Arg('interval', {
      nullable: false,
      defaultValue: SignedExtrinsicsChartInterval.hour,
      description: `Can contain next values: minute, hour, day, month.`
    })
    interval: SignedExtrinsicsChartInterval
  ): Promise<SignedExtrinsicsChartEntity[]> {
    const withRange = !!(from && from.length > 0 && to && to.length);
    const query = getChartSignedExtrinsicsQuery(withRange);

    let intervalSec = 'minute';
    switch (interval) {
      case SignedExtrinsicsChartInterval.hour:
        intervalSec = 'hour';
        break;
      case SignedExtrinsicsChartInterval.day:
        intervalSec = 'day';
        break;
      case SignedExtrinsicsChartInterval.month:
        intervalSec = 'month';
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

    const result: SignedExtrinsicsChartEntity[] = await repository.query(query, params);
    return result;
  }
}
