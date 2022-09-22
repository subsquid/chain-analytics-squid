import { Ctx } from "../processor";
import { BalancesTransferEvent } from "../types/generated/events";
// import { Account, AccountBalance, Currency } from "../model";
import { BlockEventName, BalancesTransferEventData } from "../utils/types";

import { ParsedEventsDataScope } from "../utils/common";

import { ProcessorCache as SquidCache } from "@subsquid/processor-tools";


export function getParsedEventsData(ctx: Ctx): ParsedEventsDataScope {
  const parsedData = new ParsedEventsDataScope();

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      switch (item.name) {
        case "Balances.Transfer": {
          const event = new BalancesTransferEvent(ctx, item.event);

          let data: BalancesTransferEventData = {
            id: item.event.id,
            amount: 0n,
            blockNumber: BigInt(block.header.height),
            timestamp: new Date(block.header.timestamp),
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

          // SquidCache.deferredLoad(Account, [
          //   tokenTransfer.from,
          //   tokenTransfer.to,
          // ]);

          break;
        }

        default:
      }
    }
  }
  return parsedData;
}
