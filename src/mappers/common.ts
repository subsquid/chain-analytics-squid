import {StoreWithCache} from '@belopash/squid-tools'
import {decodeHex} from '@subsquid/substrate-processor'
import {getChain} from '../chains'
import {Block, CallItem, EventItem, ProcessorContext} from '../processor'
import {getOriginAccountId, ParsedEventsDataScope} from '../utils/common'
import {BlockEventName, CallSignedExtrinsicData} from '../utils/types'

const api = getChain().api

function getEventMeta(event: EventItem, block: Block) {
  return {
    id: event.event.id,
    blockNumber: block.height,
    blockHash: block.hash,
    timestamp: new Date(block.timestamp)
  };
}

export function getParsedEventsData(ctx: ProcessorContext<StoreWithCache>): ParsedEventsDataScope {
  const parsedData = new ParsedEventsDataScope();

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      switch (item.kind) {
        case 'event': {
          switch (item.name) {
            case 'Balances.Transfer':
              parsedData.set(BlockEventName.BALANCES_TRANSFER, {
                ...getEventMeta(item, block.header),
                volume: api.events.getBalancesTransferValue(ctx, item.event)
              });
              parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                id: item.event.id,
                accountsU8: api.events.getBalancesTransferAccounts(
                  ctx,
                  item.event
                )
              });
              break;
            case 'Balances.Endowed':
              parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                id: item.event.id,
                accountsU8: api.events.getBalancesEndowedAccounts(
                  ctx,
                  item.event
                )
              });
              break;
            case 'Balances.BalanceSet':
              parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                id: item.event.id,
                accountsU8: api.events.getBalancesBalanceSetAccounts(
                  ctx,
                  item.event
                )
              });
              break;
            case 'Balances.Reserved':
              parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                id: item.event.id,
                accountsU8: api.events.getBalancesReservedAccounts(
                  ctx,
                  item.event
                )
              });
              break;
            case 'Balances.Unreserved':
              parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                id: item.event.id,
                accountsU8: api.events.getBalancesUnreservedAccounts(
                  ctx,
                  item.event
                )
              });
              break;
            case 'Balances.ReserveRepatriated':
              parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                id: item.event.id,
                accountsU8: api.events.getBalancesReserveRepatriatedAccounts(
                  ctx,
                  item.event
                )
              });
              break;
            case 'Balances.Deposit':
              parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                id: item.event.id,
                accountsU8: api.events.getBalancesDepositAccounts(
                  ctx,
                  item.event
                )
              });
              break;
            case 'Balances.Withdraw':
              parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                id: item.event.id,
                accountsU8: api.events.getBalancesWithdrawAccounts(
                  ctx,
                  item.event
                )
              });
              break;
            case 'Balances.Slashed':
              parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
                id: item.event.id,
                accountsU8: api.events.getBalancesSlashedAccounts(
                  ctx,
                  item.event
                )
              });
              break;
          }
          break;
        }
        case 'call': {
          // @ts-ignore
          const { extrinsic, call }: CallItem = item;

          if (extrinsic.signature) {
            parsedData.set(BlockEventName.SIGNED_EXTRINSIC, {
              id: extrinsic.id,
              blockNumber: block.header.height,
              blockHash: block.header.hash,
              timestamp: new Date(block.header.timestamp)
            } as CallSignedExtrinsicData);
          }

          if (call.parent != null) break;

          const accountId = getOriginAccountId(call.origin);
          if (accountId == null) break;
          parsedData.set(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC, {
            id: item.call.id,
            accountsU8:
              ArrayBuffer.isView(accountId) &&
              accountId.constructor.name !== 'Uint8Array'
                ? ([accountId] as Uint8Array[])
                : [decodeHex(accountId)]
          });
          break;
        }
      }
    }
  }
  return parsedData;
}
