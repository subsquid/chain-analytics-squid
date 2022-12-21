import { ProcessorConfig } from '../interfaces/processorConfig';
import { TrackingMetrics } from '../../utils/types';
import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  chainName: 'kusama',
  prefix: 'kusama',
  dataSource: {
    archive: 'https://kusama.archive.subsquid.io/graphql',
    chain: process.env.PINKNODE_KUSAMA_NODE
  },
  // blockRange: {
  //   from: 14067700
  // },
  intervals: new Map([
    ['holders', 1000 * 60 * 60 * 12],
    ['issuance', 1000 * 60 * 60],
    ['staking', 1000 * 60 * 60],
    ['validators', 1000 * 60 * 60],
    ['nominationPools', 1000 * 60 * 60]
  ]),
  trackingMetrics: new Set([
    TrackingMetrics.holders,
    TrackingMetrics.issuance,
    TrackingMetrics.staking,
    TrackingMetrics.transfers,
    TrackingMetrics.validators,
    TrackingMetrics.nominationPools
  ]),
  subProcessor: {
    maxThreads: 20
  }
};
