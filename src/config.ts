//1000 * 60 * 60 * 24
export const TOTAL_HOLDERS_CHECK_STEP = 1000 * 60
export const TOTAL_ISSUANCE_CHECK_STEP = 1000 * 60
export const TOTAL_STAKING_CHECK_STEP = 1000 * 60
export const TOTAL_TRANSFERS_CHECK_STEP = 1000 * 60

export const processorConfig = {
  chainName: 'kusama',
  prefix: 'kusama',
  dataSource: {
    archive: 'https://kusama.archive.subsquid.io/graphql',
    chain: 'wss://kusama-rpc.polkadot.io',
  },
  typesBundle: 'kusama',
  batchSize: 10,
  blockRange: {
    from: 100000,
  },
}