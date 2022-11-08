import * as dotenv from 'dotenv';
// dotenv.config({ path: '../.env.local' });
dotenv.config({ path: `${__dirname}/../.env.local` });

export const checkPointKeys = new Map([
  ['holders', 1000 * 60 * 60],
  ['issuance', 1000 * 60 * 60],
  ['staking', 1000 * 60 * 60],
  ['validators', 1000 * 60 * 60]
]);

export const processorConfig = {
  chainName: 'bifrost',
  prefix: 'bifrost',
  dataSource: {
    archive: 'https://bifrost.archive.subsquid.io/graphql',
    chain: process.env.ONFINALITY_BIFROST_ENDPOINT
  },
  typesBundle: 'bifrost',
  blockRange: {
    from: 100000
  }
};
