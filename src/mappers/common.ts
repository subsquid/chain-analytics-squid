import { Ctx, CallItem } from '../processor';
import { BalancesTransferEvent } from '../types/generated/events';
import {
  BlockEventName,
  BalancesTransferEventData,
  CallSignedExtrinsicData
} from '../utils/types';

// import { getGetters } from '../getters';
//
// const getters = getGetters();

import { ParsedEventsDataScope } from '../utils/common';

export function getParsedEventsData(ctx: Ctx): ParsedEventsDataScope {
  const parsedData = new ParsedEventsDataScope();

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      switch (item.kind) {
        case 'event': {
          if (item.name === 'Balances.Transfer') {
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
            } else if (event.isV1050) {
              let [from, to, value] = event.asV1050;
              data.volume = value;
            } else if (event.isV9130) {
              let { amount } = event.asV9130;
              data.volume = amount;
            }

            parsedData.set(BlockEventName.BALANCES_TRANSFER, data);
          }
          break;
        }
        case 'call': {
          // @ts-ignore
          const { extrinsic }: CallItem = item;

          if (extrinsic.signature) {
            parsedData.set(BlockEventName.SIGNED_EXTRINSIC, {
              id: extrinsic.id,
              blockNumber: block.header.height,
              blockHash: block.header.hash,
              timestamp: new Date(block.header.timestamp)
            } as CallSignedExtrinsicData);
          }
        }
      }
    }
  }
  return parsedData;
}
