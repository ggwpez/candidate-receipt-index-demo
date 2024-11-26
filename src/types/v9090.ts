import {sts, Result, Option, Bytes, BitSequence} from './support'

export const GroupIndex = sts.number()

export const CoreIndex = sts.number()

export const HeadData = sts.bytes()

export const CandidateReceipt: sts.Type<CandidateReceipt> = sts.struct(() => {
    return  {
        descriptor: CandidateDescriptor,
        commitmentsHash: Hash,
    }
})

export const Hash = sts.bytes()

export const CandidateDescriptor: sts.Type<CandidateDescriptor> = sts.struct(() => {
    return  {
        paraId: ParaId,
        relayParent: RelayChainHash,
        collatorId: CollatorId,
        persistedValidationDataHash: Hash,
        povHash: Hash,
        erasureRoot: Hash,
        signature: CollatorSignature,
        paraHead: Hash,
        validationCodeHash: ValidationCodeHash,
    }
})

export const ValidationCodeHash = sts.bytes()

export const CollatorSignature = sts.bytes()

export const CollatorId = sts.bytes()

export const RelayChainHash = sts.bytes()

export const ParaId = sts.number()

export interface CandidateDescriptor {
    paraId: ParaId
    relayParent: RelayChainHash
    collatorId: CollatorId
    persistedValidationDataHash: Hash
    povHash: Hash
    erasureRoot: Hash
    signature: CollatorSignature
    paraHead: Hash
    validationCodeHash: ValidationCodeHash
}

export type ValidationCodeHash = Bytes

export type CollatorSignature = Bytes

export type Hash = Bytes

export type CollatorId = Bytes

export type RelayChainHash = Bytes

export type ParaId = number

export interface CandidateReceipt {
    descriptor: CandidateDescriptor
    commitmentsHash: Hash
}
