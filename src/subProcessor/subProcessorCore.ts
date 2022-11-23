import { MessagePort } from 'worker_threads';
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor';
import { lookupArchive } from '@subsquid/archive-registry';
import { getConfig } from '../config';
import { TypeormDatabase } from '@subsquid/processor-tools';
import storage from '../storage';

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
  await new Promise<void>((globRes) => {
    const processor = new SubstrateBatchProcessor()
      .setPrometheusPort(promPort)
      .setDataSource({
        archive: lookupArchive(chainConfig.srcConfig.chainName, {
          release: 'FireSquid'
        }),
        chain: chainConfig.srcConfig.dataSource.chain
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

        port.postMessage(result);

        setTimeout(() => {
          ctx.log.info(`Thread ${taskId} has been finished and terminated`);
          globRes();
        }, 1000);

        await new Promise<void>((res) => setTimeout(() => res(), 2000));
      }
    );
  });
};
