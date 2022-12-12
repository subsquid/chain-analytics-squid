import {ProcessorConfig} from '../interfaces/processorConfig'

export const config: ProcessorConfig = {
    chainName: 'polkadot',
    prefix: 'polkadot',
    dataSource: {
        archive: 'https://polkadot.archive.subsquid.io/graphql',
        chain: 'wss://rpc.polkadot.io',
    },
    intervals: new Map([
        ['holders', 1000 * 60 * 60 * 24],
        ['issuance', 1000 * 60 * 60],
        ['staking', 1000 * 60 * 60],
        ['validators', 1000 * 60 * 60]
    ])
}
