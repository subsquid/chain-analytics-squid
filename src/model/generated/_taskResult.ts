import assert from "assert"
import * as marshal from "./marshal"

export class TaskResult {
    private _totalHoldersCount!: number | undefined | null
    private _totalFreeBalance!: bigint | undefined | null

    constructor(props?: Partial<Omit<TaskResult, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._totalHoldersCount = json.totalHoldersCount == null ? undefined : marshal.int.fromJSON(json.totalHoldersCount)
            this._totalFreeBalance = json.totalFreeBalance == null ? undefined : marshal.bigint.fromJSON(json.totalFreeBalance)
        }
    }

    get totalHoldersCount(): number | undefined | null {
        return this._totalHoldersCount
    }

    set totalHoldersCount(value: number | undefined | null) {
        this._totalHoldersCount = value
    }

    get totalFreeBalance(): bigint | undefined | null {
        return this._totalFreeBalance
    }

    set totalFreeBalance(value: bigint | undefined | null) {
        this._totalFreeBalance = value
    }

    toJSON(): object {
        return {
            totalHoldersCount: this.totalHoldersCount,
            totalFreeBalance: this.totalFreeBalance == null ? undefined : marshal.bigint.toJSON(this.totalFreeBalance),
        }
    }
}
