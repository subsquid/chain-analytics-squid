import { MessagePort } from 'worker_threads';
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor';
import { lookupArchive } from '@subsquid/archive-registry';
import { getConfig } from '../config';
import { TypeormDatabase } from '@subsquid/processor-tools';
import storage from '../storage';
import { sleepTo } from '../utils/common';

const chainConfig = getConfig();

module.exports = async ({
  taskId,
  taskName,
  promPort,
  blockHash,
  blockHeight,
  port
}: {
  taskId: string;
  taskName: string;
  blockHash: string;
  blockHeight: number;
  promPort: number;
  port: MessagePort;
}) => {
  await new Promise<void>(async (globRes) => {
    console.log(
      `::::: SUB PROCESSOR :::::: Thread ${taskId} has been initialized [at: ${new Date().toISOString()}]`
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
      `::::: SUB PROCESSOR :::::: Thread ${taskId}: processor has been initialized for chain - ${
        chainConfig.srcConfig.dataSource.chain
      } [at: ${new Date().toISOString()}]`
    );
    processor.run(
      new TypeormDatabase({
        stateSchema: `${taskId}_${Date.now()}`,
        disableAutoFlush: true
      }),
      async (ctx) => {
        console.log(
          `::::: SUB PROCESSOR :::::: Thread ${taskId} has been STARTED [at: ${new Date().toISOString()}]`
        );

        const storageFunc = taskName.split('_');
        if (!storageFunc[0] || !storageFunc[1]) return;

        // @ts-ignore
        const result = await storage[storageFunc[0]][storageFunc[1]](
          ctx,
          {
            header: { hash: blockHash }
          },
          taskId
        );

        console.log(
          `::::: SUB PROCESSOR :::::: Thread ${taskId} has been FINISHED with result - ${result} [at: ${new Date().toISOString()}]`
        );

        port.postMessage(result ?? 0);

        await sleepTo(500);

        ctx.log
          .child('sub_processor')
          .info(
            `::::: SUB PROCESSOR :::::: Thread ${taskId} has been finished and terminated`
          );
        globRes();
      }
    );
  });
  return 0;
};
