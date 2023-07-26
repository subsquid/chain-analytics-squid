import { SubstrateBatchProcessor } from '@subsquid/substrate-processor';

export interface ProcessorConfig {
  chainName: string;
  prefix?: number | string;
  dataSource: Parameters<SubstrateBatchProcessor<any>['setDataSource']>[0];
  blockRange?: Parameters<SubstrateBatchProcessor<any>['setBlockRange']>[0];
  subProcessor?: { maxThreads: number };
  intervals: Map<string, number>;
  trackingMetrics: Set<string>;
  assetCirculatingIgnoreAccounts?: Set<string>;
  stakingParams?: {
    auctionAdjust: number;
    auctionMax: number;
    falloff: number;
    maxInflation: number;
    minInflation: number;
    stakeTarget: number;
  };
}
