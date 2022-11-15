import { ProcessorConfig } from './processorConfig';

const config: ProcessorConfig = {
  srcConfig: {
    chainName: 'acala',
    prefix: 'acala',
    dataSource: {
      archive: 'https://acala.archive.subsquid.io/graphql',
      chain: 'wss://acala-rpc-2.aca-api.network/ws'
    },
  },
  intervalsConfig: new Map([
    ['holders', 1000 * 60 * 60 * 24],
    ['issuance', 1000 * 60 * 60],
    ['staking', 1000 * 60 * 60],
    ['validators', 1000 * 60 * 60]
  ])
};

export default config;
