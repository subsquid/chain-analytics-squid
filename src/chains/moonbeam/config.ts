import { ProcessorConfig } from '../interfaces/processorConfig';
import { TrackingMetrics } from '../../utils/types';

export const config: ProcessorConfig = {
  chainName: 'moonbeam',
  dataSource: {
    archive: 'https://moonbeam.archive.subsquid.io/graphql',
    chain: 'wss://rpc.pinknode.io/moonbeam/6e3fa591-e24f-483a-95fa-1d773f7f2be3'
  },
  blockRange: {
    from: 1800000
  },
  intervals: new Map([
    ['holders', 1000 * 60 * 60 * 12],
    ['issuance', 1000 * 60 * 60],
    ['staking', 1000 * 60 * 60],
    ['validators', 1000 * 60 * 60],
  ]),
  trackingMetrics: new Set([
    TrackingMetrics.holders,
    TrackingMetrics.issuance,
    TrackingMetrics.staking,
    TrackingMetrics.transfers,
    TrackingMetrics.validators,
  ])
};
