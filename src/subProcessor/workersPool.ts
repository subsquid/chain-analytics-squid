import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const { Worker } = require('worker_threads');

type WorkerId = string;

export class WorkersPool {
  private workers: Map<WorkerId, Worker> = new Map();

  private maxThreads: number = 1;

  private filename: string = '';

  constructor({
    maxThreads,
    filename
  }: {
    maxThreads: number;
    filename: string;
  }) {
    this.maxThreads = maxThreads;
    this.filename = filename;
  }

  isFreeWorkerAvailable(): boolean {
    return this.workers.size < this.maxThreads;
  }

  get workersList(): [WorkerId, Worker][] {
    return [...this.workers.entries()];
  }

  async run(
    payload: unknown,
    onMessageListener: (msg: unknown) => Promise<void>
  ): Promise<WorkerId> {
    const newWorkerId = uuidv4();
    const worker = await this.initWorkerInstance();

    worker.postMessage(payload);

    worker.addListener('message', async (message: unknown) => {
      await new Promise<void>(async (listenerResolve) => {
        await onMessageListener(message);
        listenerResolve();
      });
      await this.terminateWorkerInstance(newWorkerId);
    });

    this.workers.set(newWorkerId, worker);
    return newWorkerId;
  }

  private initWorkerInstance() {
    return new Worker(this.filename);
  }
  private async terminateWorkerInstance(workerId: WorkerId) {
    if (this.workers.has(workerId) && this.workers.get(workerId)) {
      await this.workers.get(workerId)!.terminate();
      this.workers.delete(workerId);
    }
  }
}
