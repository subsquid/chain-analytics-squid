import { ProcessorConfig } from './processorConfig';

const config: ProcessorConfig = {
  srcConfig: {
    chainName: 'moonbeam',
    prefix: 'moonbeam',
    dataSource: {
      archive: 'https://moonbeam.archive.subsquid.io/graphql',
      chain:
        'wss://rpc.pinknode.io/moonbeam/6e3fa591-e24f-483a-95fa-1d773f7f2be3'
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
