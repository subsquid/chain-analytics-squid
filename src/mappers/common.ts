import { Ctx, CallItem } from '../processor';
import {
  BlockEventName,
  BalancesTransferEventData,
  CallSignedExtrinsicData
} from '../utils/types';

import { ParsedEventsDataScope } from '../utils/common';
import { getChain } from '../chains';

const { api } = getChain();

export function getParsedEventsData(ctx: Ctx): ParsedEventsDataScope {
  const parsedData = new ParsedEventsDataScope();

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      switch (item.kind) {
        case 'event': {
          if (item.name === 'Balances.Transfer') {
            let data: BalancesTransferEventData = {
              id: item.event.id,
              blockNumber: block.header.height,
              blockHash: block.header.hash,
              timestamp: new Date(block.header.timestamp),
              volume: api.events.getTransferValue(ctx, item.event)
            };

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
