import { parentPort } from 'worker_threads';

import { SubstrateBatchProcessor } from '@subsquid/substrate-processor';
import { KnownArchives, lookupArchive } from '@subsquid/archive-registry';
import { getChain } from '../chains';
import { TypeormDatabase } from '@subsquid/processor-tools';
import { sleepTo } from '../utils/common';

const chainConfig = getChain();

type WorkerPayload = {
  id: string;
  taskName: string;
  blockHash: string;
  blockHeight: number;
  promPort: number;
};

function subProcessorLog(msg: string) {
  console.log(`${new Date().toISOString()} :: SUB PROCESSOR :: ${msg}`);
}

// TODO Sub-processor should be improved (add errors handling, improve stability, add fallbacks)

if (parentPort) {
  parentPort.on('message', async (workerPayload: WorkerPayload) => {
    const { id, taskName, promPort, blockHash, blockHeight } = workerPayload;
    await new Promise<void>(async (globRes) => {
      const processor = new SubstrateBatchProcessor()
        .setPrometheusPort(promPort)
        .setDataSource({
          archive: lookupArchive(
            chainConfig.config.chainName as KnownArchives,
            {
              release: 'FireSquid'
            }
          ),
          chain: chainConfig.config.dataSource.chain
        })
        .setBlockRange({ from: blockHeight, to: blockHeight })
        .includeAllBlocks();
      subProcessorLog(
        `Thread ${id}: processor has been initialized for chain - ${chainConfig.config.dataSource.chain}`
      );
      processor.run(
        new TypeormDatabase({
          stateSchema: `${id}_${Date.now()}`,
          disableAutoFlush: true
        }),
        async (ctx) => {
          subProcessorLog(`Thread ${id}: processor has been STARTED`);

          if (!(taskName in chainConfig.api.storage)) {
            if (parentPort) {
              parentPort.postMessage(null);
              globRes();
              return;
            } else {
              subProcessorLog(
                `ERROR :: Thread ${id}: parentPort is not available`
              );
              globRes();
              return;
            }
          }
          try {
            // TODO improve type security
            // @ts-ignore
            const result = await chainConfig.api.storage[taskName](ctx, {
              header: { hash: blockHash }
            });
            subProcessorLog(
              `Thread ${id} has been FINISHED with result - ${result}`
            );

            if (parentPort) {
              parentPort.postMessage(result ?? null);
            } else {
              console.log('parentPort is not available');
            }
          } catch (e) {
            subProcessorLog(`Thread ${id} has been FINISHED with ERROR - ${e}`);
            console.dir(e, {depth: null})

            if (parentPort) {
              parentPort.postMessage(null);
            } else {
              console.log('parentPort is not available');
            }
          }

          await sleepTo(100);
          subProcessorLog(`Thread ${id} has been finished and terminated`);
          globRes();
        }
      );
    });
  });
} else {
  console.log('parentPort is not available');
}
