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

  if (data.isV0) {
    return data.asV0[2];
  } else if (data.isV9140) {
    return data.asV9140.amount;
  } else {
    throw new UnknownVersionError(data.constructor.name);
  }
}

export function getBalancesTransferAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesTransferEvent(ctx, event);

  if (data.isV0) {
    return [data.asV0[0], data.asV0[1]];
  } else if (data.isV9140) {
    return [data.asV9140.from, data.asV9140.to];
  }
  throw new UnknownVersionError(data.constructor.name);
}

export function getBalancesEndowedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesEndowedEvent(ctx, event);

  if (data.isV0) {
    return [data.asV0[0]];
  } else if (data.isV9140) {
    return [data.asV9140.account];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesBalanceSetAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesBalanceSetEvent(ctx, event);

  if (data.isV0) {
    return [data.asV0[0]];
  } else if (data.isV9140) {
    return [data.asV9140.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesReservedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesReservedEvent(ctx, event);

  if (data.isV8) {
    return [data.asV8[0]];
  } else if (data.isV9140) {
    return [data.asV9140.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}

export function getBalancesUnreservedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesUnreservedEvent(ctx, event);

  if (data.isV8) {
    return [data.asV8[0]];
  } else if (data.isV9140) {
    return [data.asV9140.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesReserveRepatriatedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesReserveRepatriatedEvent(ctx, event);

  if (data.isV8) {
    return [data.asV8[0], data.asV8[1]];
  } else if (data.isV9140) {
    return [data.asV9140.from, data.asV9140.to];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesDepositAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesDepositEvent(ctx, event);

  if (data.isV0) {
    return [data.asV0[0]];
  } else if (data.isV9140) {
    return [data.asV9140.who];
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
  } else if (data.isV9140) {
    return [data.asV9140.who];
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
  } else if (data.isV9140) {
    return [data.asV9140.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
