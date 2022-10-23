import { Arg, Query, registerEnumType, Resolver } from 'type-graphql';
import type { EntityManager } from 'typeorm';
import { Transfer } from '../../model';
import { TransferChartEntity } from '../model/chartTrasfer.model';
import { getChartTransferQuery } from '../query/chartTransfer';
import assert from 'assert';

export enum TransactionsChartInterval {
  minute = 'minute',
  hour = 'hour',
  day = 'day'
}

registerEnumType(TransactionsChartInterval, {
  name: 'TransactionsChartInterval'
});

@Resolver()
export class TransferChartResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => [TransferChartEntity])
  async transactionsChart(
    @Arg('from', { nullable: false }) from: string,
    @Arg('to', { nullable: false }) to: string,
    @Arg('interval', () => TransactionsChartInterval, {
      nullable: false,
      defaultValue: TransactionsChartInterval.hour,
      description: `Can contain next values: minute, hour, day, month.`
    })
    interval: TransactionsChartInterval
  ): Promise<TransferChartEntity[]> {
    const withRange = !!(from && from.length > 0 && to && to.length);

    assert(
      new Date(to).getTime() - new Date(from).getTime() <= 604800000,
      'range can not be wider than a week'
    );
    const query = getChartTransferQuery(withRange);

    let intervalSec = 'minute';
    switch (interval) {
      case TransactionsChartInterval.hour:
        intervalSec = 'hour';
        break;
      case TransactionsChartInterval.day:
        intervalSec = 'day';
        break;
      default:
    }

    const result: TransferChartEntity[] = await this.genericChartQuery(
      query,
      withRange ? [from, to, interval] : [interval]
    );
    return result;
  }

  async genericChartQuery(
    query: string,
    params: Array<string>
  ): Promise<TransferChartEntity[]> {
    const manager = await this.tx();
    const repository = manager.getRepository(Transfer);

    const result: TransferChartEntity[] = await repository.query(query, params);
    return result;
  }
}
