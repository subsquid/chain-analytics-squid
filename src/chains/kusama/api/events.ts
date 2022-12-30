import { ChainContext, Event } from '../types/support';
import {
  BalancesBalanceSetEvent,
  BalancesDepositEvent,
  BalancesEndowedEvent,
  BalancesReservedEvent,
  BalancesReserveRepatriatedEvent,
  BalancesSlashedEvent,
  BalancesTransferEvent,
  BalancesUnreservedEvent,
  BalancesWithdrawEvent
} from '../types/events';
import { UnknownVersionError } from '../../../utils/errors';

export function getBalancesTransferValue(
  ctx: ChainContext,
  event: Event
): bigint {
  const data = new BalancesTransferEvent(ctx, event);

  if (data.isV1020) {
    return data.asV1020[2];
  } else if (data.isV1050) {
    return data.asV1050[2];
  } else if (data.isV9130) {
    return data.asV9130.amount;
  }
  throw new UnknownVersionError(data.constructor.name);
}

export function getBalancesTransferAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesTransferEvent(ctx, event);

  if (data.isV1020) {
    return [data.asV1020[0], data.asV1020[1]];
  } else if (data.isV1050) {
    return [data.asV1050[0], data.asV1050[1]];
  } else if (data.asV9130) {
    return [data.asV9130.from, data.asV9130.to];
  }
  throw new UnknownVersionError(data.constructor.name);
}

export function getBalancesEndowedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesEndowedEvent(ctx, event);

  if (data.isV1050) {
    return [data.asV1050[0]];
  } else if (data.isV9130) {
    return [data.asV9130.account];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesBalanceSetAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesBalanceSetEvent(ctx, event);

  if (data.isV1031) {
    return [data.asV1031[0]];
  } else if (data.isV9130) {
    return [data.asV9130.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesReservedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesReservedEvent(ctx, event);

  if (data.isV2008) {
    return [data.asV2008[0]];
  } else if (data.isV9130) {
    return [data.asV9130.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}

export function getBalancesUnreservedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesUnreservedEvent(ctx, event);

  if (data.isV2008) {
    return [data.asV2008[0]];
  } else if (data.isV9130) {
    return [data.asV9130.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesReserveRepatriatedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesReserveRepatriatedEvent(ctx, event);

  if (data.isV2008) {
    return [data.asV2008[0], data.asV2008[1]];
  } else if (data.isV9130) {
    return [data.asV9130.from, data.asV9130.to];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesDepositAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesDepositEvent(ctx, event);

  if (data.isV1032) {
    return [data.asV1032[0]];
  } else if (data.isV9130) {
    return [data.asV9130.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesWithdrawAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesWithdrawEvent(ctx, event);

  if (data.isV9122) {
    return [data.asV9122[0]];
  } else if (data.isV9130) {
    return [data.asV9130.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesSlashedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesSlashedEvent(ctx, event);

  if (data.isV9122) {
    return [data.asV9122[0]];
  } else if (data.isV9130) {
    return [data.asV9130.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
