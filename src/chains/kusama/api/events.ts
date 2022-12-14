import { ChainContext, Event } from '../types/support';
import { BalancesTransferEvent } from '../types/events';
import { UnknownVersionError } from '../../../utils/errors';

export function getTransferValue(ctx: ChainContext, event: Event): bigint {
  const data = new BalancesTransferEvent(ctx, event)

  if (data.isV1020) {
    return data.asV1020[2]
  } else if (data.isV1050) {
    return data.asV1050[2]
  } else if (data.isV9130) {
    return data.asV9130.amount
  } else {
    throw new UnknownVersionError(data.constructor.name)
  }
}