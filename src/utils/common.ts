import { ParsedEventsDataMap, BlockEventName, ParsedEventsData } from './types';
import * as sto from '@subsquid/substrate-processor/lib/util/storage';

import * as ss58 from '@subsquid/ss58';
import { decodeHex } from '@subsquid/util-internal-hex';
import { processorConfig } from '../config';

const ss58codec = ss58.codec(processorConfig.prefix);

export class ParsedEventsDataScope {
  private scope: ParsedEventsDataMap;

  constructor() {
    this.scope = new Map<BlockEventName, Set<ParsedEventsData>>();
  }

  set(section: BlockEventName, value: ParsedEventsData) {
    this.scope.set(section, (this.scope.get(section) || new Set()).add(value));
  }

  get<T>(section: BlockEventName): Set<T> {
    return (this.scope.get(section) as Set<T>) || new Set<T>();
  }
}

export function getStorageHash(prefix: string, name: string) {
  return sto.getNameHash(prefix) + sto.getNameHash(name).slice(2);
}

export function encodeAccount(id: Uint8Array) {
  return ss58codec.encode(typeof id === 'string' ? decodeHex(id) : id);
}

export function decodeAccount(id: string) {
  return ss58codec.decode(id)
}
