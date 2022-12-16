import {
  ApiDecorator,
  ChainApi,
  ChainApiDecorated,
  ChainName
} from './interfaces/chainApi';
import { ProcessorConfig } from './interfaces/processorConfig';

function withDecorator({
  config,
  api
}: {
  config: ProcessorConfig;
  api: ChainApi;
}): {
  config: ProcessorConfig;
  api: ChainApi;
  getApiDecorated: ApiDecorator;
} {
  return {
    config,
    api,
    getApiDecorated: <C extends ChainName>(c: C) => api as ChainApiDecorated<C>
  };
}

export function getChain(): {
  config: ProcessorConfig;
  api: ChainApi;
  getApiDecorated: ApiDecorator;
} {
  switch (process.env.CHAIN) {
    // case 'crust':
    //     return require('./crust')
    case 'hydradx':
      return withDecorator(require('./hydradx'));
    case 'kusama':
      return withDecorator(require('./kusama'));
    case 'polkadot':
      return withDecorator(require('./polkadot'));
    case 'acala':
      return withDecorator(require('./acala'));
    case 'karura':
      return withDecorator(require('./karura'));
    case 'moonriver':
      return withDecorator(require('./moonriver'));
    case 'moonbeam':
      return withDecorator(require('./moonbeam'));
    case 'bifrost':
      return withDecorator(require('./bifrost'));
    case 'phala':
      return withDecorator(require('./phala'));
    default:
      throw new Error(`Unsupported chain ${process.env.CHAIN}`);
  }
}
