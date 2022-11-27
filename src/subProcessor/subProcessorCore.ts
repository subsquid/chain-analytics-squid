import { MessagePort, parentPort } from 'worker_threads';

import { SubstrateBatchProcessor } from '@subsquid/substrate-processor';
import { lookupArchive } from '@subsquid/archive-registry';
import { getConfig } from '../config';
import { TypeormDatabase } from '@subsquid/processor-tools';
import storage from '../storage';
import { sleepTo } from '../utils/common';

const chainConfig = getConfig();

type WorkerPayload = {
  id: string;
  taskName: string;
  blockHash: string;
  blockHeight: number;
  promPort: number;
};

if (parentPort) {
  parentPort.on('message', async (workerPayload: WorkerPayload) => {
    console.log('workerPayload >>> ');
    console.dir(workerPayload, { depth: null });
    const { id, taskName, promPort, blockHash, blockHeight } = workerPayload;
    await new Promise<void>(async (globRes) => {
      console.log(
        `::::: SUB PROCESSOR :::::: Thread ${id} has been initialized [at: ${new Date().toISOString()}]`
      );
      const processor = new SubstrateBatchProcessor()
        .setPrometheusPort(promPort)
        .setDataSource({
          archive: lookupArchive(chainConfig.srcConfig.chainName, {
            release: 'FireSquid'
          }),
          chain: chainConfig.srcConfig.dataSource.chain
        })
        .setBlockRange({ from: blockHeight, to: blockHeight })
        .includeAllBlocks();
      console.log(
        `::::: SUB PROCESSOR :::::: Thread ${id}: processor has been initialized for chain - ${
          chainConfig.srcConfig.dataSource.chain
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
