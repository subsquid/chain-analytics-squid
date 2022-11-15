import { ProcessorConfig } from './processorConfig';

const config: ProcessorConfig = {
  srcConfig: {
    chainName: 'moonriver',
    prefix: 'moonriver',
    dataSource: {
      archive: 'https://moonriver.archive.subsquid.io/graphql',
      chain:
        'wss://rpc.pinknode.io/moonriver/6e3fa591-e24f-483a-95fa-1d773f7f2be3'
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
