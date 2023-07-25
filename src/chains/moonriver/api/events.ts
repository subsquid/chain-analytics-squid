import { ChainContext, Event } from '../types/support';
import { BalancesTransferEvent } from '../types/events';
import { UnknownVersionError } from '../../../utils/errors';

export function getBalancesTransferValue(ctx: ChainContext, event: Event): bigint {
  const data = new BalancesTransferEvent(ctx, event);

  if (data.isV49) {
    return data.asV49[2];
  } else if (data.isV1201) {
    return data.asV1201.amount;
  }
  throw new UnknownVersionError(data.constructor.name);
}
