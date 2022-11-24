import Piscina from 'piscina';
import path from 'path';
import {
  SubProcessorTaskPayload,
  SubProcessorTaskResult
} from '../utils/types';
import { Ctx } from '../processor';
import { SubProcessorTask, SubProcessorTaskStatus } from '../model';

const { MessageChannel, MessagePort } = require('worker_threads');

export class TreadsPool {
  private static instance: TreadsPool;
  private prometheusPost: number = 3001;
  private isInstanceHealthy: boolean = false;

  private pool: Piscina;
  private poolOptions = {
    filename: path.resolve(__dirname, './subProcessorCore'),
    minThreads: 5,
    maxThreads: 20,
    idleTimeout: 1000 * 120,
    stackSizeMb: 300,
    maxOldGenerationSizeMb: 300,
    maxYoungGenerationSizeMb: 300,
    codeRangeSizeMb: 300
  };
  /**
   * List of taskIds which shows order of evoked tasks from root thread. It's
   * necessary to return list or results with correct order (don't return result
   * of task#2 before task#1 has been completed because it can has side effects
   * in root thread logic)
   */
  private tasksQueue: Map<string, Array<string>> = new Map();
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

  /**
   * Cache of completed tasks results which are already completed but cannot be
   * provided to client as task in previous position in tasksQueue still is
   * in processing.
   */
  private resultsStackCache: Map<string, Map<string, SubProcessorTaskResult>> =
    new Map();

  private resultsBuffer: Map<string, Map<string, SubProcessorTaskResult>> =
    new Map();

  private constructor(private context: Ctx) {
    this.pool = new Piscina(this.poolOptions);
    this.pool.on('error', (e) => {
      this.context.log.warn(
        '=============== RUNNER ERROR ON ===================='
      );
      console.dir(e, { depth: null });
    });
  }

  private ensureResultsStackCacheContainer(taskName: string) {
    if (!this.resultsStackCache.has(taskName))
      this.resultsStackCache.set(taskName, new Map());
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

  getResultsListByTaskName(taskName: string): Array<unknown> {
    return this._resultsListsScope.get(taskName) || [];
  }

  private async addTaskResultsToTmpBuffer(resData: SubProcessorTaskResult) {
    if (!this.resultsBuffer.has(resData.taskName))
      this.resultsBuffer.set(resData.taskName, new Map());

    this.resultsBuffer.get(resData.taskName)!.set(resData.taskId, resData);
  }

  private async addTaskResultsToStack(resData: SubProcessorTaskResult) {
    this.ensureResultsStackCacheContainer(resData.taskName);

    this.resultsStackCache.get(resData.taskName)!.set(resData.taskId, resData);

    /**
     * Save result and task status in SubProcessorTask entity
     */
    let taskEntity = await this.context.store.get(
      SubProcessorTask,
      resData.taskId,
      false
    );
    if (!taskEntity) {
      // throw Error(
      //   `SubProcessorTask entity with id ${resData.taskId} can not be found.`
      // );
      this.context.log.warn(
        `SubProcessorTask entity with id ${resData.taskId} can not be found.`
      );
      return;
    }
    // if (!taskEntity) {
    //   /**
    //    * We need create new entity here in case worker returned result at the
    //    * moment when entities still are not fetched from DB (between start of
    //    * batch and store.load() function)
    //    */
    //   taskEntity = new SubProcessorTask({
    //     id: resData.taskId,
    //     taskName: resData.taskName,
    //     blockHash: resData.blockHash,
    //     blockHeight: resData.blockHeight,
    //     timestamp: resData.timestamp.toString(),
    //     status: SubProcessorTaskStatus.completed,
    //     tasksQueueIndex: resData.tasksQueueIndex
    //   });
    // }
    taskEntity.status = SubProcessorTaskStatus.completed;
    taskEntity.result = resData.result;
    this.context.store.deferredUpsert(taskEntity);

    /**
     * Run process of migration results from cache to results list for access by
     * final user/function.
     */
    this.moveTaskResultToResultsList(resData.taskName);
  }

  private moveTaskResultToResultsList(taskName: string) {
    // console.log('this.tasksQueue');
    // console.dir(this.tasksQueue, { depth: null });
    // console.log('resultsStackCache');
    // console.dir(this.resultsStackCache, { depth: null });

    this.ensureResultsStackCacheContainer(taskName);
    this.ensureResultsListsScopeContainer(taskName);

    const currentTaskResCache = this.resultsStackCache.get(taskName)!;
    const currentTaskQueue = this.tasksQueue.get(taskName)!;
    const currentResultsList = this._resultsListsScope.get(taskName)!;

    for (const i of currentTaskQueue) {
      if (currentTaskResCache.has(currentTaskQueue[0])) {
        const task = currentTaskQueue.shift() as string;
        currentResultsList.push(currentTaskResCache.get(task)!);
        currentTaskResCache.delete(task);
      }
    }

    this.resultsStackCache.set(taskName, currentTaskResCache);
    this.tasksQueue.set(taskName, currentTaskQueue);
    this._resultsListsScope.set(taskName, currentResultsList);
  }

  /**
   * Clear results list for specific task name after user ingested this data
   * for further processing.
   * @param taskName
   */
  async clearTaskResultsListByTaskName(taskName: string) {
    /**
     * Update task indexes in SubProcessorTask entities
     */
    await this.updateTasksIndexes(taskName);

    const resItemsForDelete = [
      ...(this._resultsListsScope.get(taskName) || [])
    ];
    this.context.store.deferredRemove(
      SubProcessorTask,
      resItemsForDelete.map((t) => t.taskId)
    );

    this._resultsListsScope.delete(taskName);
  }

  private async updateTasksIndexes(taskName: string) {
    const queueList = this.tasksQueue.get(taskName) || [];
    for (let i = 0; i < queueList.length; i++) {
      const entity = await this.context.store.get(
        SubProcessorTask,
        queueList[i],
        false
      );
      if (!entity)
        throw Error(
          `SubProcessorTask entity with id ${queueList[i]} can not be found.`
        );
      entity.tasksQueueIndex = i;
      this.context.store.deferredUpsert(entity);
    }
  }

  setTask(
    taskPayload: SubProcessorTaskPayload,
    customTasksQueueIndex?: number | undefined
  ) {
    const channel = new MessageChannel();
    const { taskId, taskName, blockHash, blockHeight, timestamp } = taskPayload;
    let tasksQueueIndex = customTasksQueueIndex;

    this.isInstanceHealthy = true;

    if (tasksQueueIndex === undefined) {
      if (!this.tasksQueue.has(taskPayload.taskName))
        this.tasksQueue.set(taskPayload.taskName, []);

      tasksQueueIndex = this.tasksQueue.get(taskPayload.taskName)!.length;
      this.tasksQueue.get(taskPayload.taskName)!.push(taskId);
    }

    channel.port2.addEventListener('message', async (message: any) => {
      await this.addTaskResultsToTmpBuffer({
        ...taskPayload,
        result: message.data
      });
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
      .then((res) => {
        console.log(
          `::: RUN.then ::: Task ${taskId} has been provided response - ${res}`
        );
      })
      .catch(async (e) => this.handleRunErrorCatch(taskPayload, e)); // TODO add retry logic for failed tasks

    console.log(`::: setTask ::: Task ${taskId} has been added to pool`);

    this.context.store.deferredUpsert(
      new SubProcessorTask({
        id: taskId,
        taskName: taskName,
        blockHash: blockHash,
        blockHeight: blockHeight,
        timestamp: timestamp.toString(),
        status: SubProcessorTaskStatus.processing,
        tasksQueueIndex
      })
    );
  }

  private async handleRunErrorCatch(
    taskPayload: SubProcessorTaskPayload,
    error: unknown
  ) {
    this.context.log.warn('=============== RUNNER ERROR ====================');
    console.dir(taskPayload, { depth: null });
    console.dir(error, { depth: null });

    this.tasksQueue.set(
      taskPayload.taskName,
      this.tasksQueue
        .get(taskPayload.taskName)!
        .filter((t) => t !== taskPayload.taskId)
    );
    this.context.store.deferredRemove(SubProcessorTask, taskPayload.taskId);
    await this.updateTasksIndexes(taskPayload.taskName);
    this.context.log.warn(
      `Task ${taskPayload.taskId} has been finished with error - ${error}`
    );
  }

  async ensureTasksQueue() {
    const existingSavedTasks = [...this.context.store.values(SubProcessorTask)];

    for (const [taskName, results] of [...this.resultsBuffer.entries()]) {
      for (const res of [...results.values()]) {
        await this.addTaskResultsToStack(res);
      }
    }
    this.resultsBuffer.clear();

    if (
      existingSavedTasks.length === 0 ||
      (existingSavedTasks.length > 0 && this.isInstanceHealthy)
    )
      return;

    console.log('::: ENSURE/RESTORE TASKS :::');

    const tasksInProgressByTaskName: Map<
      string,
      Map<number, SubProcessorTask>
    > = new Map();

    const proxyTasksQueue: Map<
      string,
      Map<number, SubProcessorTask>
    > = new Map();

    const savedTasksIndexed: Map<
      string,
      Map<number, SubProcessorTask>
    > = new Map();

    for (const savedTask of existingSavedTasks) {
      if (!savedTasksIndexed.has(savedTask.taskName))
        savedTasksIndexed.set(savedTask.taskName, new Map());

      savedTasksIndexed
        .get(savedTask.taskName)!
        .set(savedTask.tasksQueueIndex, savedTask);

      if (savedTask.status === SubProcessorTaskStatus.completed) {
        this.ensureResultsStackCacheContainer(savedTask.taskName);

        this.resultsStackCache.get(savedTask.taskName)!.set(savedTask.id, {
          taskId: savedTask.id,
          taskName: savedTask.taskName,
          blockHash: savedTask.blockHash,
          blockHeight: savedTask.blockHeight,
          timestamp: Number.parseInt(savedTask.timestamp),
          result: savedTask.result
        });

        // if (!tasksCompletedByTaskName.has(savedTask.taskName))
        //   tasksCompletedByTaskName.set(savedTask.taskName, new Map());
        //
        // tasksCompletedByTaskName
        //   .get(savedTask.taskName)!
        //   .set(savedTask.tasksQueueIndex, savedTask);
      }

      if (savedTask.status === SubProcessorTaskStatus.processing) {
        if (!tasksInProgressByTaskName.has(savedTask.taskName))
          tasksInProgressByTaskName.set(savedTask.taskName, new Map());

        tasksInProgressByTaskName
          .get(savedTask.taskName)!
          .set(savedTask.tasksQueueIndex, savedTask);
      }
    }

    /**
     * Restore task queue
     */
    savedTasksIndexed.forEach((tasks, taskName) => {
      const orderedTasks = getOrderEntitiesListByIndex(tasks);

      if (!this.tasksQueue.has(taskName)) this.tasksQueue.set(taskName, []);

      this.tasksQueue.get(taskName)!.push(...orderedTasks.map((i) => i.id));

      orderedTasks
        .filter((t) => t.status === SubProcessorTaskStatus.processing)
        .forEach((task) =>
          this.setTask(
            {
              taskId: task.id,
              taskName: task.taskName,
              blockHash: task.blockHash,
              blockHeight: task.blockHeight,
              timestamp: Number.parseInt(task.timestamp)
            },
            task.tasksQueueIndex
          )
        );

      // orderedTasks.forEach((task) =>
      //   this.setTask({
      //     taskId: task.id,
      //     taskName: task.taskName,
      //     blockHash: task.blockHash,
      //     blockHeight: task.blockHeight,
      //     timestamp: Number.parseInt(task.timestamp)
      //   })
      // );

      /**
       * Add all completed taskIds to tasksQueue for correct migration of results
       * from cache to results list
       */
      // const completedTasksOrdered = getOrderEntitiesListByIndex(
      //   tasksCompletedByTaskName.get(taskName) ||
      //     new Map<number, SubProcessorTask>()
      // );
      // this.tasksQueue
      //   .get(taskName)!
      //   .push(...completedTasksOrdered.map((i) => i.id));

      // const tasksOrdered = getOrderEntitiesListByIndex(
      //   savedTasksIndexed.get(taskName) || new Map<number, SubProcessorTask>()
      // );
      // this.tasksQueue.get(taskName)!.push(...tasksOrdered.map((i) => i.id));

      this.moveTaskResultToResultsList(taskName);
    });
  }
}

function getOrderEntitiesListByIndex(
  entitiesMap: Map<number, SubProcessorTask>
) {
  return [...entitiesMap.entries()]
    .sort((a, b) => (a[0] < b[0] ? -1 : b[0] < a[0] ? 1 : 0))
    .map((item) => item[1]);
}
