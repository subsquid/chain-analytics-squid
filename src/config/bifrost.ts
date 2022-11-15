import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env.local` });

import { ProcessorConfig } from './processorConfig';

const config: ProcessorConfig = {
  srcConfig: {
    chainName: 'bifrost',
    prefix: 'bifrost',
    dataSource: {
      archive: 'https://bifrost.archive.subsquid.io/graphql',
      chain: process.env.ONFINALITY_BIFROST_ENDPOINT
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
