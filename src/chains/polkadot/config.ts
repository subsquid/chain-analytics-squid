import { ProcessorConfig } from '../interfaces/processorConfig';
import { TrackingMetrics } from '../../utils/types';

export const config: ProcessorConfig = {
  chainName: 'polkadot',
  prefix: 'polkadot',
  dataSource: {
    archive: 'https://polkadot.archive.subsquid.io/graphql',
    chain: 'wss://rpc.polkadot.io'
  },
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
