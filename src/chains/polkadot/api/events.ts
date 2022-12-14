import { ChainContext, Event } from '../types/support';
import { BalancesTransferEvent } from '../types/events';
import { UnknownVersionError } from '../../../utils/errors';

export function getTransferValue(ctx: ChainContext, event: Event): bigint {
  const data = new BalancesTransferEvent(ctx, event);

  if (data.isV0) {
    return data.asV0[2];
  } else if (data.isV9140) {
    return data.asV9140.amount;
  } else {
    throw new UnknownVersionError(data.constructor.name);
  }
}
