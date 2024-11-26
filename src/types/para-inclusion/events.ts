import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'

export const candidateIncluded =  {
    name: 'ParaInclusion.CandidateIncluded',
    /**
     *  A candidate was included. `[candidate, head_data]`
     */
    v9090: new EventType(
        'ParaInclusion.CandidateIncluded',
        sts.tuple([v9090.CandidateReceipt, v9090.HeadData, v9090.CoreIndex, v9090.GroupIndex])
    ),
    /**
     * A candidate was included. `[candidate, head_data]`
     */
    v9111: new EventType(
        'ParaInclusion.CandidateIncluded',
        sts.tuple([v9111.V1CandidateReceipt, v9111.HeadData, v9111.V1CoreIndex, v9111.V1GroupIndex])
    ),
}
