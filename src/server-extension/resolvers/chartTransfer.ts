import { Arg, Query, Resolver } from 'type-graphql';
import type { EntityManager } from 'typeorm';
import { Transfer } from '../../model';
import {
  TransferChartEntity,
  TransactionsChartInterval
} from '../model/chartTrasfer.model';
import { getChartTransferQuery } from '../query/chartTransfer';

@Resolver()
export class TransferChartResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => [TransferChartEntity])
  async transactionsChart(
    @Arg('from', { nullable: true }) from: string,
    @Arg('to', { nullable: true }) to: string,
    @Arg('interval', {
      nullable: false,
      defaultValue: TransactionsChartInterval.hour,
      description: `Can contain next values: minute, hour, day, month.`
    })
    interval: TransactionsChartInterval
  ): Promise<TransferChartEntity[]> {
    const withRange = !!(from && from.length > 0 && to && to.length);
    const query = getChartTransferQuery(withRange);

    let intervalSec = 'minute';
    switch (interval) {
      case TransactionsChartInterval.hour:
        intervalSec = 'hour';
        break;
      case TransactionsChartInterval.day:
        intervalSec = 'day';
        break;
      case TransactionsChartInterval.month:
        intervalSec = 'month';
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
