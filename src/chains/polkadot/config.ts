import { ProcessorConfig } from '../interfaces/processorConfig';
import { TrackingMetrics } from '../../utils/types';
import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  // 1st auctions 
  blockRange: {from: 7658910},
  // 1st Jan 2023 
  // blockRange: {from: 12726940},
  chainName: 'polkadot',
  prefix: 'polkadot',
  dataSource: {
    archive: 'https://polkadot.archive.subsquid.io/graphql',
    chain: process.env.POLKADOT_NODE || 'wss://rpc.polkadot.io'
  },
  intervals: new Map([
    ['holders', 1000 * 60 * 60 * 24],
    ['issuance', 1000 * 60 * 60],
    ['staking', 1000 * 60 * 60],
    ['validators', 1000 * 60 * 60],
    ['nominationPools', 1000 * 60 * 60]
  ]),
  stakingParams: {
    auctionAdjust: 0,
    auctionMax: 0,
    falloff: 0.05,
    maxInflation: 0.1,
    minInflation: 0.025,
    stakeTarget: 0.75,
  },
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
