import {
  ParsedEventsDataMap,
  BlockEventName,
  ParsedEventsData,
  CheckPointsKeys,
  TrackingMetrics
} from './types';
import * as sto from '@subsquid/substrate-processor/lib/util/storage';

import * as ss58 from '@subsquid/ss58';
import { decodeHex, toHex } from '@subsquid/util-internal-hex';
import { getChain } from '../chains';
import { Block } from '../processor';
import { HistoricalDataMeta } from '../model';

const chainConfig = getChain();

export class ParsedEventsDataScope {
  private scope: ParsedEventsDataMap;

  constructor() {
    this.scope = new Map<BlockEventName, Map<string, ParsedEventsData>>();
  }

  set(section: BlockEventName, value: ParsedEventsData) {
    this.scope.set(
      section,
      (this.scope.get(section) || new Map()).set(value.id, value)
    );
  }

  getBySection<T>(section: BlockEventName): Map<string, T> {
    return (this.scope.get(section) as Map<string, T>) || new Map<string, T>();
  }
}

export function getStorageHash(prefix: string, name: string) {
  return sto.getNameHash(prefix) + sto.getNameHash(name).slice(2);
}

export function encodeAccount(
  id: Uint8Array,
  prefix?: string | number | undefined
) {
  return prefix != null ? ss58.codec(prefix).encode(id) : toHex(id);
}

export function decodeAccount(
  id: string,
  prefix?: string | number | undefined
) {
  return prefix != null ? ss58.codec(prefix).decode(id) : decodeHex(id);
}

//
export function isCheckPoint(
  checkPointKey: CheckPointsKeys,
  histDataMeta: HistoricalDataMeta,
  block: Block
) {
  if (!chainConfig.config.intervals.has(checkPointKey))
    throw Error(`Unknown checkPointKey - "${checkPointKey}"`);

  return (
    block.header.timestamp -
      (histDataMeta[`${checkPointKey}LatestTime`]
        ? histDataMeta[`${checkPointKey}LatestTime`]!.getTime()
        : 0) >
    chainConfig.config.intervals.get(checkPointKey)!
  );
}

export function isMetricTrackable(metricKey: TrackingMetrics) {
  return chainConfig.config.trackingMetrics.has(metricKey);
}

export async function sleepTo(delay: number = 0) {
  await new Promise<void>((res) => setTimeout(() => res(), delay));
}

export function* splitIntoBatches<T>(
  list: T[],
  maxBatchSize: number
): Generator<T[]> {
  if (list.length <= maxBatchSize) {
    yield list;
  } else {
    let offset = 0;
    while (list.length - offset > maxBatchSize) {
      yield list.slice(offset, offset + maxBatchSize);
      offset += maxBatchSize;
    }
    yield list.slice(offset);
  }
}

export function getOriginAccountId(origin: any) {
  if (
    origin &&
    origin.__kind === 'system' &&
    origin.value.__kind === 'Signed'
  ) {
    return origin.value.value;
  } else {
    return undefined;
  }
}
