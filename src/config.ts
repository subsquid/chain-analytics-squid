//1000 * 60 * 60 * 24

export const checkPointKeys = new Map([
  ['holders', 1000 * 60],
  ['issuance', 1000 * 60],
  ['staking', 1000 * 60],
  ['validators', 1000 * 60]
]);

export const processorConfig = {
  chainName: 'kusama',
  prefix: 'kusama',
  dataSource: {
    archive: 'https://kusama.archive.subsquid.io/graphql',
    chain: 'wss://kusama-rpc.polkadot.io'
  },
  typesBundle: 'kusama',
  batchSize: 50,
  blockRange: {
    from: 100000
  }
};
