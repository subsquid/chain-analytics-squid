import { Ctx } from '../processor';
import {
  BalancesTransferEvent,
  BalancesWithdrawEvent
} from '../types/generated/events';
import {
  BlockEventName,
  BalancesTransferEventData,
  BalancesWithdrawEventData,
  CallSignedExtrinsicData
} from '../utils/types';

import { ParsedEventsDataScope } from '../utils/common';

export function getParsedEventsData(ctx: Ctx): ParsedEventsDataScope {
  const parsedData = new ParsedEventsDataScope();

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      switch (item.name) {
        case 'Balances.Transfer': {
          const event = new BalancesTransferEvent(ctx, item.event);
          let data: BalancesTransferEventData = {
            id: item.event.id,
            amount: 0n,
            blockNumber: block.header.height,
            blockHash: block.header.hash,
            timestamp: new Date(block.header.timestamp)
          };

          if (event.isV1020) {
            let [from, to, value, fees] = event.asV1020;
            data.amount = value;
          } else if (event.isV1050) {
            let [from, to, value] = event.asV1050;
            data.amount = value;
          } else if (event.isV9130) {
            let { amount } = event.asV9130;
            data.amount = amount;
          }

          parsedData.set(BlockEventName.BALANCES_TRANSFER, data);

          break;
        }

        default:
          //@ts-ignore
          if (item.extrinsic.signature) {
            parsedData.set(BlockEventName.SIGNED_EXTRINSIC, {
              //@ts-ignore
              id: item.extrinsic.id,
              blockNumber: block.header.height,
              blockHash: block.header.hash,
              timestamp: new Date(block.header.timestamp),
              callName: item.name
            } as CallSignedExtrinsicData);
          }
      }
    }
  }
  return parsedData;
}
