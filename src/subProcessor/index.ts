import Piscina from 'piscina';
import path from 'path';
import {
  SubProcessorTaskPayload,
  SubProcessorTaskResult
} from '../utils/types';
import { Ctx } from '../processor';
import { SubProcessorTask, SubProcessorTaskStatus } from '../model';
import { sleepTo } from '../utils/common';

const { MessageChannel, MessagePort } = require('worker_threads');

export class TreadsPool {
  private static instance: TreadsPool;
  private prometheusPost: number = 3001;
  private isInstanceHealthy: boolean = false;
  private resultsProcessingWindowOpen: boolean = false;

  private pool: Piscina;
  private poolOptions = {
    filename: path.resolve(__dirname, './subProcessorCore'),
    concurrentTasksPerWorker: 100,
    // minThreads: 2,
    // maxThreads: 15,
    // idleTimeout: 1000 * 600,
    resourceLimits: {
      stackSizeMb: 2000,
      maxOldGenerationSizeMb: 2000,
      maxYoungGenerationSizeMb: 2000,
      codeRangeSizeMb: 2000
    }
  };
  /**
   * Scope of ordered lists with tasks results. Each list contains results of
   * tasks which are located from the beginning of tasksQueue list.
   * (e.g.
   *    - case #1: tasksQueue = [t#1, t#2, t#3], resultsStackCache = {res_t#2}, _resultsListsScope = []
   *    - case #2: tasksQueue = [t#1, t#2, t#3], resultsStackCache = {res_t#1, res_t#2}, _resultsListsScope = [res_t#1, res_t#2]
   * )
   */
  private _resultsListsScope: Map<string, Array<SubProcessorTaskResult>> =
    new Map();

  private resultsBuffer: Map<string, Map<string, SubProcessorTaskResult>> =
    new Map();

  private constructor(private context: Ctx) {
    this.pool = new Piscina(this.poolOptions);
    this.pool
      .on('error', (e) => {
        this.context.log.warn(
          '=============== RUNNER ON ERROR  ===================='
        );
        console.dir(e, { depth: null });
      })
      .on('end', (e) => {
        this.context.log.info(
          '=============== RUNNER ON END ===================='
        );
        console.dir(e, { depth: null });
      });
  }

  private ensureResultsListsScopeContainer(taskName: string) {
    if (!this._resultsListsScope.has(taskName))
      this._resultsListsScope.set(taskName, []);
  }

  static getInstance(ctx: Ctx) {
    if (!TreadsPool.instance) {
      TreadsPool.instance = new TreadsPool(ctx);
    }
    return TreadsPool.instance;
  }

  setResultsProcessingWindow(status: boolean) {
    this.resultsProcessingWindowOpen = status;
  }

  getResultsListByTaskName(taskName: string): Array<unknown> {
    return this._resultsListsScope.get(taskName) || [];
  }

  private async addTaskResultsToTmpBuffer(resData: SubProcessorTaskResult) {
    if (!this.resultsBuffer.has(resData.taskName))
      this.resultsBuffer.set(resData.taskName, new Map());

    this.resultsBuffer.get(resData.taskName)!.set(resData.id, resData);
  }

  private async moveTaskResultToResultsList(resData: SubProcessorTaskResult) {
    this.ensureResultsListsScopeContainer(resData.taskName);

    console.log(
      `================ Result added to res list ${resData.id} / ${resData.result}`
    );

    const currentResultsList = this._resultsListsScope.get(resData.taskName)!;

    currentResultsList.push(resData);

    this._resultsListsScope.set(
      resData.taskName,
      currentResultsList.filter((r) => !r.terminated)
    );

    if (!resData.terminated) {
      /**
       * Save result and task status in SubProcessorTask entity
       */
      let taskEntity = await this.context.store.get(
        SubProcessorTask,
        resData.id,
        false
      );
      if (!taskEntity) {
        // throw Error(
        //   `SubProcessorTask entity with id ${resData.taskId} can not be found.`
        // );
        this.context.log.warn(
          `SubProcessorTask entity with id ${resData.id} can not be found.`
        );
        return;
      }

      taskEntity.status = SubProcessorTaskStatus.completed;
      // taskEntity.result = resData.result;
      this.context.store.deferredUpsert(taskEntity);
    } else {
      this.context.store.deferredRemove(SubProcessorTask, resData.id);
    }
  }

  /**
   * Clear results list for specific task name after user ingested this data
   * for further processing.
   * @param taskName
   */
  async clearTaskResultsListByTaskName(taskName: string) {
    const resItemsForDelete = [
      ...([...this.context.store.values(SubProcessorTask)].filter(
        (t) => t.status === SubProcessorTaskStatus.completed
      ) || [])
    ];
    this.context.store.deferredRemove(
      SubProcessorTask,
      resItemsForDelete.map((t) => t.id)
    );

    this._resultsListsScope.delete(taskName);
  }

  async addTask(
    taskPayload: SubProcessorTaskPayload,
    customTasksQueueIndex?: number | undefined
  ) {
    const {
      id,
      taskName,
      blockHash,
      blockHeight,
      timestamp,
      queueIndex,
      queueSubIndex
    } = taskPayload;

    this.isInstanceHealthy = true;

    this.context.store.deferredUpsert(
      new SubProcessorTask({
        id,
        taskName: taskName,
        blockHash: blockHash,
        blockHeight: blockHeight,
        timestamp: timestamp.toString(),
        status: SubProcessorTaskStatus.waiting,
        queueIndex: queueIndex,
        queueSubIndex: queueSubIndex
      })
    );

    await this.processTasksQueue();
  }

  async processTasksQueue() {
    const tasksList = [...this.context.store.values(SubProcessorTask)];
    const tasksInProcessing = tasksList.filter(
      (t) => t.status === SubProcessorTaskStatus.processing
    );
    if (tasksInProcessing && tasksInProcessing.length > 1) {
      throw Error(
        `Tasks queue contains more than one task in processing. Actual count - ${tasksInProcessing}`
      );
    }
    if (tasksInProcessing && tasksInProcessing.length === 1) return;

    const orderedTasks = getOrderTasksListByIndexAndSubIndex(
      [...this.context.store.values(SubProcessorTask)].filter(
        (t) => t.status !== SubProcessorTaskStatus.completed
      )
    );
    console.log('tasksList.processing');
    console.dir(tasksList, { depth: null });
    await sleepTo(2000);

    if (orderedTasks.length === 0) return;

    const channel = new MessageChannel();
    const newTaskPayload = orderedTasks[0];

    channel.port2.addEventListener('message', async (message: any) => {
      if (this.resultsProcessingWindowOpen) {
        this.context.log.warn('WINDOW OPEN');
        await this.moveTaskResultToResultsList({
          ...newTaskPayload,
          result: message.data
        });
        await this.processTasksQueue();
      } else {
        this.context.log.warn('WINDOW CLOSE');
        await this.addTaskResultsToTmpBuffer({
          ...newTaskPayload,
          result: message.data
        });
      }
    });

    if (this.pool) await this.pool.destroy()

    this.pool = new Piscina(this.poolOptions);

    this.prometheusPost++;
    this.pool
      .run(
        {
          id: newTaskPayload.id,
          taskName: newTaskPayload.taskName,
          blockHash: newTaskPayload.blockHash,
          blockHeight: newTaskPayload.blockHeight,
          promPort: this.prometheusPost,
          port: channel.port1
        },
        {
          // @ts-ignore
          transferList: [channel.port1]
        }
      )
      .then((res) => {
        this.context.log.info(
          `::: RUN.then ::: Task ${newTaskPayload.id} has been provided response - ${res}`
        );
      })
      .catch(async (e) => this.handleRunErrorCatch(newTaskPayload, e));

    this.context.log.info(
      `::: setTask ::: Task ${
        newTaskPayload.id
      } has been added to pool. Pool queue size - ${
        this.pool.queueSize
      }. Pool size - ${this.pool.threads ? this.pool.threads.length : 0}`
    );

    newTaskPayload.status = SubProcessorTaskStatus.processing;
    this.context.store.deferredUpsert(newTaskPayload);
  }

  private async handleRunErrorCatch(
    taskPayload: SubProcessorTaskPayload,
    error: unknown
  ) {
    this.context.log.warn('=============== RUNNER ERROR ====================');
    console.dir(taskPayload, { depth: null });
    console.dir(error, { depth: null });

    // TODO add retry logic

    this.context.store.deferredRemove(SubProcessorTask, taskPayload.id);
    this.context.log.warn(
      `Task ${taskPayload.id} has been finished with error - ${error}`
    );
  }

  async ensureTasksQueue() {
    const existingSavedTasks = [...this.context.store.values(SubProcessorTask)];

    for (const [taskName, results] of [...this.resultsBuffer.entries()]) {
      for (const res of [...results.values()]) {
        await this.moveTaskResultToResultsList(res);
      }
    }
    this.resultsBuffer.clear();

    if (
      existingSavedTasks.length === 0 ||
      (existingSavedTasks.length > 0 && this.isInstanceHealthy)
    ) {
      await this.processTasksQueue();
      return;
    }

    console.log('::: ENSURE/RESTORE TASKS :::');

    existingSavedTasks.forEach(
      (t) => (t.status = SubProcessorTaskStatus.waiting)
    );

    for (let i = 0; i < existingSavedTasks.length; i++) {
      existingSavedTasks[i].status = SubProcessorTaskStatus.waiting;
      this.context.store.deferredUpsert(existingSavedTasks[i]);
    }
    await this.processTasksQueue();
  }
}

function getOrderEntitiesListByIndex(
  entitiesMap: Map<number, SubProcessorTask>
) {
  return [...entitiesMap.entries()]
    .sort((a, b) => (a[0] < b[0] ? -1 : b[0] < a[0] ? 1 : 0))
    .map((item) => item[1]);
}

function getOrderTasksListByIndexAndSubIndex(entitiesList: SubProcessorTask[]) {
  return entitiesList.sort((a, b) => {
    if (a.queueIndex === b.queueIndex) {
      return a.queueSubIndex < b.queueSubIndex ? -1 : 1;
    } else {
      return a.queueIndex < b.queueIndex ? -1 : 1;
    }
  });
}
