import { parentPort } from 'worker_threads';

import { SubstrateBatchProcessor } from '@subsquid/substrate-processor';
import { KnownArchives, lookupArchive } from '@subsquid/archive-registry';
import { getChain} from '../chains';
import { TypeormDatabase } from '@subsquid/processor-tools';
import storage from '../storage';
import { sleepTo } from '../utils/common';

const chainConfig = getChain();

type WorkerPayload = {
  id: string;
  taskName: string;
  blockHash: string;
  blockHeight: number;
  promPort: number;
};

if (parentPort) {
  parentPort.on('message', async (workerPayload: WorkerPayload) => {
    const { id, taskName, promPort, blockHash, blockHeight } = workerPayload;
    await new Promise<void>(async (globRes) => {
      console.log(
        `::::: SUB PROCESSOR :::::: Thread ${id} has been initialized [at: ${new Date().toISOString()}]`
      );
      const processor = new SubstrateBatchProcessor()
        .setPrometheusPort(promPort)
        .setDataSource({
          archive: lookupArchive(chainConfig.config.chainName as KnownArchives, {
            release: 'FireSquid'
          }),
          chain: chainConfig.config.dataSource.chain
        })
        .setBlockRange({ from: blockHeight, to: blockHeight })
        .includeAllBlocks();
      console.log(
        `::::: SUB PROCESSOR :::::: Thread ${id}: processor has been initialized for chain - ${
          chainConfig.config.dataSource.chain
        } [at: ${new Date().toISOString()}]`
      );
      processor.run(
        new TypeormDatabase({
          stateSchema: `${id}_${Date.now()}`,
          disableAutoFlush: true
        }),
        async (ctx) => {
          console.log(
            `::::: SUB PROCESSOR :::::: Thread ${id} has been STARTED [at: ${new Date().toISOString()}]`
          );

          const storageFunc = taskName.split('_');
          if (!storageFunc[0] || !storageFunc[1]) return;

          // @ts-ignore
          const result = await storage[storageFunc[0]][storageFunc[1]](
            ctx,
            {
              header: { hash: blockHash }
            },
            id
          );

          console.log(
            `::::: SUB PROCESSOR :::::: Thread ${id} has been FINISHED with result - ${result} [at: ${new Date().toISOString()}]`
          );

          if (parentPort) {
            parentPort.postMessage(result ?? 0);
          } else {
            ctx.log.warn('parentPort is not available');
          }

          await sleepTo(100);

          ctx.log
            .child('sub_processor')
            .info(
              `::::: SUB PROCESSOR :::::: Thread ${id} has been finished and terminated`
            );
          globRes();
        }
      );
    });
  });
} else {
  console.log('parentPort is not available');
}
