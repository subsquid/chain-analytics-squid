import { ProcessorConfig } from '../interfaces/processorConfig';
import { TrackingMetrics } from '../../utils/types';
import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

/**
 * Circulating Supply: all tokens that are held in accounts outside of the non-circulating Moonbeam addresses and Protocol-controlled addresses.
 * Requirements from GLMR Transparency Commitment - https://moonbeam.foundation/glimmer-token/transparency/
 */
export const excludeFromCirculatingAssetsAmountAddresses = new Set<string>([
  '0xec5849f7b9f7b5188e53e6546d07062b7d2b46a0',
  '0xe15a2e4f35215a553151df283a39c7d17db8aaec',
  '0xee050f48ff5ff71604d5ca32020a6ba1c070f1b2',
  '0x3ad24a37d4b6ebd24e70a2c87241a63d92a6b288',
  '0x835d6f7b649e109470f966a936308f78fdebec2d',
  '0x02f50d4c3861c279aa0467caf49f8077b3c0ca60',
  '0xce216241675657f40203679aa8f6472d8c140ab0',
  '0xf1e35633ebbb793f1d22e6cc6b279afe8c33b381',
  '0x906ea348769389c32f2732b79615d12b2514274e',
  '0x91ad9c2608d04722400a22215d2d951dedb11cb4',
  '0x6e87680133c34c96c86ffd101844b14fd63f0fe1',
  '0xe51df5c29bfe022854fde7ebc4b06a6cdb94b60e',
  '0x98091cad1243f4a6d2454a7f0ca3258fb053c152',
  '0xb29f4d175953faf999869036bb170e4a99dba62c',
  '0x0344cb6a7acb0f074237943e2ffb0bfce6e6c1fc',
  '0xfb43cc3136a81d6df94b92637b007f0235b92563',
  '0x418671c5e8e14095720bae1f063df18c6414239b',
  '0xaab463ba7bf4eca75d5f84aabfb077dc9b9fbf0c',
  '0xa99716fdf1a1e45969cc5469f3fadec7c3b4666f',
  '0x72990280c6e37995f5a7446d7d420eb7bcd8ffa8',
  '0xc6956173029911a93483e00ec4c5378f1aaf37f1',
  '0xd0ae4f927db4d4adf162336f4f088b02f24f7e09',
  '0x3628e309c5b745eb35f92bcf81fc6f9794e0f15c',
  '0xa9349a0191c93534f8b9ca295ebf2b8a87c89062',
  '0x6f39cba057acb67df748efce6d14b94c53b16574',
  '0x41f666ac944a4613df26d00a5d3926e64574a6be',
  '0xef24bcef8052cf5f2758ea23ed02d48c0f788bd5',
  '0xd985dd9453bb9bae5f2bcb79f90b3ed724033ca0',
  '0x47b69aef78183b282c6dfad76eecfcd0676a85f3',
  '0xb00af4494099bf419c79768cc3d2e1f45a106b54',
  '0x7882fc72720e2bd786dc1e2dda3b37f76ef7ac1a',
  '0x2afbdaeed55af511d2f4f54048db5347993c41d1',
  '0xb49e71e2516084f4697e21b7f2ebeddbfc900887',
  '0xe5a56b7ff1aa39376588968e057f73ba9dc43ac1',
  '0xb843fa0c53382a24386c4bfd6e26156b6c1aa502',
  '0x286c93de3767bdc37694ff5326a2ec074a271841',
  '0x4599d3fb61afbe53ec0c74e9d3e662df14c011bc',
  '0x18cb64d0d2b5cecb7d0f08e4bec9c955f3a221ed',
  '0xeee7f269e04163dea8f9c8c075429e0b9928a6f8',
  '0xbfa14eb753e03ec28f1fca98e60227f1e3631451',
  '0x471ac074b60dab1ce62eec90b766a7e3da5719bf',
  '0x85b46641d2f1c1c207d50c1d0e04f8e57c8cf2f8',
  '0x7f8d1c2b3d770693a4c0ebc02731dc3107bca672',
  '0x670762abc78c65aee1274bc2ed179da7b8bd3b81',
  '0x7f1ba0b92943a38a55ea344676f5685afbfe5ad5',
  '0xac6d13f8b148acfc5fca4d4d6b4eaa5a78c6079c',
  '0x365cb79b68552a44ecce2cfc698de5edfaf452c0',
  '0x93041c0aa0b6e96c4e5f98831c58673f2e318274',
  '0x0a2f88f2c8ec33ab7d5118a09b09eef844e3be72',
  '0x49700fb3ddb67d7f7e366261fcbdfac0b90f6f5a',
  '0xb2e3e0b8cecfbd8b4f3dc1849ddf3c79c21300bd',
  '0x5a97a6f687d7c76d3ea7563a60cc615c6c939d54',
  '0xcb95c0e6fcce0e78f62f7f809ab5ec161722fa17',
  '0x97292e7fb192323faa3490fb084c1a450278206c',
  '0x9c2284cbbeaacf3fae4aea80ad5d690f4c40fec6',
  '0x734bbb2d0b28b36fac6de190978a54f294199f98',
  '0xf1d1587678f6eb30b7c7a9773268b952a4b3e29f',
  '0x0af55f1f6daf6efa8ebec64965120fd4053b1017',
  '0xa5577da5f45aa886ce77f46e93a52802dba556f9',
  '0x8ebb465d98e7589855485cd190c7bed6a36c4c34',
  '0xfc02d8861d624d89e1c4c364a5d534aed0e75b45',
  '0x10a75c8b30543dae7ff2ed6704c1bf769b3376b5',
  '0x0dfd2741fa7f5e6a22b1c7fb13c3554550ecc9d5',
  '0x02a28a296dfc6be50199e6a877b0b981055da8e7',
  '0x5489fd1637f76c6f11198a06a1dc05a7f1f7e629',
  '0xbc9429cbfa409ebfa9ba218f2c02eeda1e4a5203',
  '0xd749a1c1a2b538609c722872637ac23bb4df6514',
  '0xeace0fb4d9051d5c1d006a6953caa7e7ca140481',
  '0xa4d9ac2893f430ad101d9691d9587be24f30aed9',
  '0xda5531c9329426F4f3d4051291D98947F219ae20',
  '0x6d6F646C43726f77646C6f610000000000000000',
  '0x6d6f646C70792f74727372790000000000000000'
]);

export const config: ProcessorConfig = {
  chainName: 'moonbeam',
  dataSource: {
    archive: 'https://moonbeam.archive.subsquid.io/graphql',
    chain: process.env.PINKNODE_MOONBEAM_NODE
  },
  // blockRange: {
  //   from: 1800000
  // },
  intervals: new Map([
    ['holders', 1000 * 60 * 60 * 12],
    ['issuance', 1000 * 60 * 60],
    ['staking', 1000 * 60 * 60],
    ['validators', 1000 * 60 * 60]
  ]),
  trackingMetrics: new Set([
    TrackingMetrics.holders,
    TrackingMetrics.issuance,
    TrackingMetrics.staking,
    TrackingMetrics.transfers,
    TrackingMetrics.validators
  ]),
  subProcessor: {
    maxThreads: 25
  }
};
