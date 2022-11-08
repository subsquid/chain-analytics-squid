import { Ctx, CallItem } from '../processor';
import {
  BalancesBalanceSetEvent,
  BalancesDepositEvent,
  BalancesEndowedEvent,
  BalancesReservedEvent,
  BalancesTransferEvent,
  BalancesWithdrawEvent,
  BalancesUnreservedEvent,
  BalancesSlashedEvent,
  BalancesReserveRepatriatedEvent
} from '../types/generated/events';
import {
  BlockEventName,
  BalancesTransferEventData,
  BalancesWithdrawEventData,
  CallSignedExtrinsicData
} from '../utils/types';

import {
  ParsedEventsDataScope,
  getOriginAccountId,
  encodeAccount
} from '../utils/common';

export function getParsedEventsData(ctx: Ctx): void {
  const parsedData = ParsedEventsDataScope.getInstance();

  for (let block of ctx.blocks) {
    const accounts: Set<Uint8Array> = new Set();

    for (let item of block.items) {
      if (item.kind === 'call') {
        const id = processBalancesCallItem(item);
        if (id) accounts.add(id);

        if (item.extrinsic.signature) {
          parsedData.set(BlockEventName.SIGNED_EXTRINSIC, {
            id: item.extrinsic.id,
            blockNumber: block.header.height,
            blockHash: block.header.hash,
            timestamp: new Date(block.header.timestamp),
            callName: item.name
          } as CallSignedExtrinsicData);
        }
      } else if (item.kind === 'event') {
        switch (item.name) {
          case 'Balances.Transfer': {
            const event = new BalancesTransferEvent(ctx, item.event);
            let data: BalancesTransferEventData = {
              id: item.event.id,
              volume: 0n,
              blockNumber: block.header.height,
              blockHash: block.header.hash,
              timestamp: new Date(block.header.timestamp)
            };

            if (event.isV1020) {
              let [from, to, value, fees] = event.asV1020;
              data.volume = value;
              accounts.add(from);
              accounts.add(to);
            } else if (event.isV1050) {
              let [from, to, value] = event.asV1050;
              data.volume = value;
              accounts.add(from);
              accounts.add(to);
            } else if (event.isV9130) {
              let { amount, from, to } = event.asV9130;
              data.volume = amount;
              accounts.add(from);
              accounts.add(to);
            }
            parsedData.set(BlockEventName.BALANCES_TRANSFER, data);

            break;
          }
          case 'Balances.BalanceSet': {
            const event = new BalancesBalanceSetEvent(ctx, item.event);
            if (event.isV1031) {
              let [who] = event.asV1031;
              accounts.add(who);
            } else if (event.isV9130) {
              let { who } = event.asV9130;
              accounts.add(who);
            }
            break;
          }
          case 'Balances.Endowed': {
            const event = new BalancesEndowedEvent(ctx, item.event);
            if (event.isV1050) {
              let [acc] = event.asV1050;
              accounts.add(acc);
            } else if (event.isV9130) {
              let { account } = event.asV9130;
              accounts.add(account);
            }
            break;
          }
          case 'Balances.Deposit': {
            const event = new BalancesDepositEvent(ctx, item.event);
            if (event.isV1032) {
              let [acc] = event.asV1032;
              accounts.add(acc);
            } else if (event.isV9130) {
              let { who } = event.asV9130;
              accounts.add(who);
            }
            break;
          }
          case 'Balances.Reserved': {
            const event = new BalancesReservedEvent(ctx, item.event);
            if (event.isV2008) {
              let [acc] = event.asV2008;
              accounts.add(acc);
            } else if (event.isV9130) {
              let { who } = event.asV9130;
              accounts.add(who);
            }
            break;
          }
          case 'Balances.Unreserved': {
            const event = new BalancesUnreservedEvent(ctx, item.event);
            if (event.isV2008) {
              let [acc] = event.asV2008;
              accounts.add(acc);
            } else if (event.isV9130) {
              let { who } = event.asV9130;
              accounts.add(who);
            }
            break;
          }
          case 'Balances.Withdraw': {
            const event = new BalancesWithdrawEvent(ctx, item.event);
            if (event.isV9122) {
              let [acc] = event.asV9122;
              accounts.add(acc);
            } else if (event.isV9130) {
              let { who } = event.asV9130;
              accounts.add(who);
            }
            break;
          }
          case 'Balances.Slashed': {
            const event = new BalancesSlashedEvent(ctx, item.event);
            if (event.isV9122) {
              let [acc] = event.asV9122;
              accounts.add(acc);
            } else if (event.isV9130) {
              let { who } = event.asV9130;
              accounts.add(who);
            }
            break;
          }
          case 'Balances.ReserveRepatriated': {
            const event = new BalancesReserveRepatriatedEvent(ctx, item.event);
            if (event.isV2008) {
              let [from, to] = event.asV2008;
              accounts.add(from);
              accounts.add(to);
            } else if (event.isV9130) {
              let { from, to } = event.asV9130;
              accounts.add(from);
              accounts.add(to);
            }
            break;
          }

          default:
        }
      }
    }
    parsedData.set(BlockEventName.BALANCES_ACCOUNT, {
      idList: accounts,
      blockNumber: block.header.height,
      blockHash: block.header.hash,
      timestamp: new Date(block.header.timestamp)
    });
  }
}

function processBalancesCallItem(item: CallItem) {
  const id = getOriginAccountId(item.call.origin);
  return id || undefined;
}
