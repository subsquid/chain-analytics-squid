import { ProcessorConfig } from './processorConfig';

const config: ProcessorConfig = {
  srcConfig: {
    chainName: 'gmordie',
    prefix: 'gmordie',
    dataSource: {
      archive: 'https://gmordie.archive.subsquid.io/graphql',
      chain: 'wss://kusama.gmordie.com'
    }
  },
  intervalsConfig: new Map([
    ['holders', 1000 * 60 * 60 * 24],
    ['issuance', 1000 * 60 * 60],
    ['staking', 1000 * 60 * 60],
    ['validators', 1000 * 60 * 60]
  ])
};

export default config;
