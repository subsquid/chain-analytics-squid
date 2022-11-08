import {
  ParsedEventsDataMap,
  BlockEventName,
  ParsedEventsData,
  CheckPointsKeys
} from './types';
import * as sto from '@subsquid/substrate-processor/lib/util/storage';

import * as ss58 from '@subsquid/ss58';
import { decodeHex } from '@subsquid/util-internal-hex';
import { checkPointKeys, processorConfig } from '../config';
import { Block } from '../processor';
import { HistoricalDataMeta } from '../model';

const ss58codec = ss58.codec(processorConfig.prefix);

export class ParsedEventsDataScope {
  private static instance: ParsedEventsDataScope;

  private scope: ParsedEventsDataMap = new Map<
    BlockEventName,
    Set<ParsedEventsData>
  >();

  private constructor() {}

  static getInstance() {
    if (!ParsedEventsDataScope.instance) {
      ParsedEventsDataScope.instance = new ParsedEventsDataScope();
    }
    return ParsedEventsDataScope.instance;
  }

  set(section: BlockEventName, value: ParsedEventsData) {
    this.scope.set(section, (this.scope.get(section) || new Set()).add(value));
  }

  get<T>(section: BlockEventName): Set<T> {
    return (this.scope.get(section) as Set<T>) || new Set<T>();
  }

  removeByEntityOrList(
    section: BlockEventName,
    entityOrList: ParsedEventsData | ParsedEventsData[]
  ) {
    const currentVal = this.scope.get(section) || new Set<ParsedEventsData>();

    for (const dataEntity of Array.isArray(entityOrList)
      ? entityOrList
      : [entityOrList]) {
      currentVal.delete(dataEntity);
    }
  }
  purgeSection(section: BlockEventName) {
    this.scope.delete(section);
  }
}

export function getStorageHash(prefix: string, name: string) {
  return sto.getNameHash(prefix) + sto.getNameHash(name).slice(2);
}

export function encodeAccount(id: Uint8Array) {
  return ss58codec.encode(typeof id === 'string' ? decodeHex(id) : id);
}

export function decodeAccount(id: string) {
  return ss58codec.decode(id);
}

export function isCheckPoint(
  checkPointKey: CheckPointsKeys,
  histDataMeta: HistoricalDataMeta,
  block: Block
) {
  if (!checkPointKeys.has(checkPointKey))
    throw Error(`Unknown checkPointKey - "${checkPointKey}"`);

  return (
    block.header.timestamp -
      (histDataMeta[`${checkPointKey}LatestTime`]
        ? histDataMeta[`${checkPointKey}LatestTime`]!.getTime()
        : 0) >
    checkPointKeys.get(checkPointKey)!
  );
}

export function getOriginAccountId(origin: any) {
  if (
    origin &&
    origin.__kind === 'system' &&
    origin.value.__kind === 'Signed'
  ) {
    return decodeHex(origin.value.value);
  } else {
    return undefined;
  }
}
