import { Query, Resolver } from 'type-graphql';
import 'reflect-metadata';
import assert from 'assert';
import chains from '../../chainsInfo';
import { getChain } from '../../chains';
import { ChainInfo, Token } from '../model/chainInfo.model';

@Resolver()
export class ChainInfoResolver {
  @Query(() => ChainInfo)
  chainInfo(): ChainInfo {
    const info = chains.find((ch) => ch.name === getChain().config.chainName);
    assert(info != null);

    return new ChainInfo({
      prefix: info.prefix,
      name: info.name,
      relayChain: info.relay,
      paraId: info.paraId,
      displayName: info.displayName,
      tokens: info.tokens.map(
        ({ symbol, decimals }) => new Token({ symbol, decimals })
      )
    });
  }
}
