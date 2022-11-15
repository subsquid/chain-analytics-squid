import { MessagePort } from 'worker_threads';
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor';
import { KnownArchives, lookupArchive } from '@subsquid/archive-registry';
import { processorConfig } from '../config';
import { Store, TypeormDatabase } from '@subsquid/processor-tools';
import { getHoldersKeysCount } from '../storage/system';
import storage from '../storage';

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
  await new Promise<void>((globRes) => {
    const processor = new SubstrateBatchProcessor()
      .setPrometheusPort(promPort)
      .setDataSource({
        archive: lookupArchive(processorConfig.chainName as KnownArchives, {
          release: 'FireSquid'
        }),
        chain: processorConfig.dataSource.chain
      })
      .setBlockRange({ from: blockHeight, to: blockHeight + 1 })
      .includeAllBlocks();

    processor.run(
      new TypeormDatabase({ stateSchema: taskId, disableAutoFlush: true }),
      async (ctx) => {
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

        port.postMessage({
          taskId,
          taskName,
          result
        });

        setTimeout(() => {
          ctx.log.info(`Thread ${taskId} has been finished and terminated`);
          globRes();
        }, 1000);

        await new Promise<void>((res) => setTimeout(() => res(), 2000));
      }
    );
  });
};
