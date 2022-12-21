import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"
import {TaskResult} from "./_taskResult"
import {SubProcessorTaskStatus} from "./_subProcessorTaskStatus"

@Entity_()
export class SubProcessorTask {
    constructor(props?: Partial<SubProcessorTask>) {
        Object.assign(this, props)
    }

    /**
     * taskId
     */
    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    workerId!: string | undefined | null

    @Column_("text", {nullable: false})
    taskName!: string

    @Column_("text", {nullable: false})
    blockHash!: string

    @Column_("int4", {nullable: false})
    blockHeight!: number

    @Column_("text", {nullable: false})
    timestamp!: string

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new TaskResult(undefined, obj)}, nullable: true})
    result!: TaskResult | undefined | null

    @Column_("int4", {nullable: false})
    queueIndex!: number

    @Column_("int4", {nullable: false})
    queueSubIndex!: number

    @Column_("varchar", {length: 10, nullable: false})
    status!: SubProcessorTaskStatus
}
