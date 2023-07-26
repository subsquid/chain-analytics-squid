import {StoreWithCache} from '@belopash/squid-tools'
import {TypeormDatabase} from '@subsquid/typeorm-store'
import {handleBalances} from './mappers/balances'
import {getParsedEventsData} from './mappers/common'
import {handleExtrinsics} from './mappers/extrinsics'
import {handleNominationPools} from './mappers/nominationPools'
import {handleSlots} from './mappers/slots'
import {handleStakeAmount} from './mappers/staking'
import {handleTransfers} from './mappers/transfers'
import {BackupCounter, Current, DailyChart, FourHourlyChart, HourlyChart, MonthlyChart, WeeklyChart} from './model'
import {processor} from './processor'
import {ChartsCache, getOrCreateBackupCounter, getOrCreateCurrent, getTimePoints, updateChart} from './utils/common'
import {BalancesTransferEventData, BlockEventName, CallSignedExtrinsicData, InvolvedAccountsData} from './utils/types'

processor.run(new TypeormDatabase(), async (_ctx) => {
    const store = StoreWithCache.create(_ctx.store)

    const ctx = {..._ctx, store}

    const parsedEvents = getParsedEventsData(ctx)
    ctx.store.defer(Current, '1')
    ctx.store.defer(BackupCounter, '1')
    if (!ChartsCache.isInitialized) {
        await ChartsCache.init(ctx)
    }
    //TODO: remove loading from db after store.load()
    const backupCounter = await getOrCreateBackupCounter(ctx)
    const current = await getOrCreateCurrent(ctx)

    /**
     *  TODO: rework iterative values to per-block manner
     *  to get more precise values when desired timepoint
     *  in the middle of the batch
     *
     *  TODO: get rid of implicit changes of
     *  backupCounter and current in handle<...>() functions
     */
    await handleBalances(
        ctx,
        parsedEvents.getBySection<InvolvedAccountsData>(BlockEventName.INVOLVED_ACCOUNTS_SYNTHETIC)
    )
    await handleTransfers(
        ctx,
        parsedEvents.getBySection<BalancesTransferEventData>(BlockEventName.BALANCES_TRANSFER),
        backupCounter
    )
    await handleExtrinsics(
        ctx,
        parsedEvents.getBySection<CallSignedExtrinsicData>(BlockEventName.SIGNED_EXTRINSIC),
        backupCounter
    )
    await ctx.store.upsert(backupCounter)

    for (let block of ctx.blocks) {
        const lastHourlyStats = ChartsCache.getLatest(HourlyChart)
        const curDate = new Date(block.header.timestamp)
        /**
         * Hourly chart is minimal atomicity chart.
         * If we don't need to udate it, we don't need
         * to update any
         */
        const hourlyTimes = getTimePoints(lastHourlyStats.timestamp, curDate, (i: Date) => {
            i.setUTCHours(i.getUTCHours() + 1)
            return i
        })

        if (hourlyTimes.length > 0) {
            /**
             * We refer to the previous block to follow
             * getTimePoiints logic
             *
             * TODO: rework to define proper block here
             */
            current.lastUpdate = new Date(block.header.timestamp)
            current.chainFinalizedBlocks = BigInt(block.header.height) - 1n
            current.chainSignedExtrinsics = backupCounter.chainSignedExtrinsics
            current.balancesTransfersAmount = backupCounter.balancesTransfersAmount
            current.balancesTransfersVolume = backupCounter.balancesTransfersVolume
            const storageBlock = {
                hash: block.header.parentHash,
            }
            await Promise.all([
                handleNominationPools(ctx, storageBlock, current),
                handleSlots(ctx, storageBlock, current),
                handleStakeAmount(ctx, storageBlock, current),
            ])
            await ctx.store.upsert(current)

            await updateChart(ctx, HourlyChart, current, (i: Date) => {
                i.setUTCHours(i.getUTCHours() + 1)
                return i
            })
            await updateChart(ctx, FourHourlyChart, current, (i: Date) => {
                i.setUTCHours(i.getUTCHours() + 4)
                return i
            })
            await updateChart(ctx, DailyChart, current, (i: Date) => {
                i.setUTCDate(i.getUTCDate() + 1)
                return i
            })
            await updateChart(ctx, WeeklyChart, current, (i: Date) => {
                i.setUTCDate(i.getUTCDate() + 7)
                return i
            })
            await updateChart(ctx, MonthlyChart, current, (i: Date) => {
                i.setUTCMonth(i.getUTCMonth() + 1)
                return i
            })
        }
    }

    await ctx.store.flush()
})
