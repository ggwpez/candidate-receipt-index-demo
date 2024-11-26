import {TypeormDatabase, Store} from '@subsquid/typeorm-store'
import {In} from 'typeorm'
import * as ss58 from '@subsquid/ss58'
import assert from 'assert'

import {processor, ProcessorContext} from './processor'
import {CandidateReceipt} from './model'
import {events} from './types'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    let events = await getCandidateIncludedEvents(ctx)
    await ctx.store.insert(events)
})

async function getCandidateIncludedEvents(ctx: ProcessorContext<Store>): Promise<CandidateReceipt[]> {
    let candidateIncludedEvents: CandidateReceipt[] = []

    for (let block of ctx.blocks) {
        for (let event of block.events) {
            if (event.name == events.paraInclusion.candidateIncluded.name) {
                let core_index: number
                let group_index: number
                
                if (events.paraInclusion.candidateIncluded.v9090.is(event)) {
                    const [receipt, head_data, rcore_index, rgroup_index] = events.paraInclusion.candidateIncluded.v9090.decode(event)
                    core_index = rcore_index
                    group_index = rgroup_index
                }
                else if (events.paraInclusion.candidateIncluded.v9111.is(event)) {
                    const [receipt, head_data, rcore_index, rgroup_index] = events.paraInclusion.candidateIncluded.v9111.decode(event)
                    core_index = rcore_index
                    group_index = rgroup_index
                }
                else {
                    throw new Error('Unsupported spec')
                }

                assert(block.header.timestamp, `Got an undefined timestamp at block ${block.header.height}`)

                candidateIncludedEvents.push(new CandidateReceipt({
                    id: `${event.id}-${group_index}-${core_index}`,
                    blockNumber: block.header.height,
                    timestamp: new Date(block.header.timestamp),
                    coreIndex: core_index,
                    groupIndex: group_index,
                    //candidate: rec.candidate,
                    //headData: rec.headData,
                }))
            }
        }
    }

    return candidateIncludedEvents
}
