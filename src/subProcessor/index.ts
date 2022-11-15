import Piscina from 'piscina';
import path from 'path';
import {
  SubProcessorTaskPayload,
  SubProcessorTaskResult
} from '../utils/types';
const { MessageChannel, MessagePort } = require('worker_threads');

export class TreadsPool {
  private static instance: TreadsPool;
  private prometheusPost: number = 3001;

  private pool: Piscina;
  private poolOptions = {
    filename: path.resolve(__dirname, './subProcessorCore')
  };
  private tasksQueue: Map<string, Array<string>> = new Map();
  private _resultsScope: Map<string, Array<SubProcessorTaskResult>> = new Map();
  private resultsStackCache: Map<string, Map<string, SubProcessorTaskResult>> =
    new Map();

  private constructor() {
    this.pool = new Piscina(this.poolOptions);
  }

  static getInstance() {
    if (!TreadsPool.instance) {
      TreadsPool.instance = new TreadsPool();
    }
    return TreadsPool.instance;
  }

  getResultsListByTaskName(taskName: string): Array<unknown> {
    return this._resultsScope.get(taskName) || [];
  }

  private addTaskResultsToStack(resData: SubProcessorTaskResult) {
    if (!this.resultsStackCache.has(resData.taskName))
      this.resultsStackCache.set(resData.taskName, new Map());

    if (!this._resultsScope.has(resData.taskName))
      this._resultsScope.set(resData.taskName, []);

    const currentTaskResCache = this.resultsStackCache.get(resData.taskName)!;
    const currentTaskQueue = this.tasksQueue.get(resData.taskName)!;
    const currentResultsList = this._resultsScope.get(resData.taskName)!;

    currentTaskResCache.set(resData.taskId, resData);

    for (const i of currentTaskQueue) {
      if (currentTaskResCache.has(currentTaskQueue[0])) {
        const task = currentTaskQueue.shift() as string;
        currentResultsList.push(currentTaskResCache.get(task)!);
        currentTaskResCache.delete(task);
      }
    }

    this.resultsStackCache.set(resData.taskName, currentTaskResCache);
    this.tasksQueue.set(resData.taskName, currentTaskQueue);
    this._resultsScope.set(resData.taskName, currentResultsList);
  }

  clearTaskResultsListByTaskName(taskName: string) {
    this._resultsScope.delete(taskName);
  }

  setTask(taskPayload: SubProcessorTaskPayload) {
    const channel = new MessageChannel();
    const { taskId, taskName, blockHash, blockHeight, timestamp } = taskPayload;

    if (!this.tasksQueue.has(taskPayload.taskName))
      this.tasksQueue.set(taskPayload.taskName, []);

    this.tasksQueue.get(taskPayload.taskName)!.push(taskId);

    channel.port2.addEventListener('message', (message: any) => {
      this.addTaskResultsToStack({ ...taskPayload, result: message.data.result });
    });

    this.prometheusPost++;
    this.pool
      .run(
        {
          taskId,
          taskName,
          blockHash,
          blockHeight,
          promPort: this.prometheusPost,
          port: channel.port1
        },
        {
          // @ts-ignore
          transferList: [channel.port1]
        }
      )
      .catch();
  }
}
