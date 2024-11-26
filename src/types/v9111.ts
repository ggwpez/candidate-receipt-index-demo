import {sts, Result, Option, Bytes, BitSequence} from './support'

export const V1GroupIndex = sts.number()

export const V1CoreIndex = sts.number()

export const HeadData = sts.bytes()

export const V1CandidateReceipt: sts.Type<V1CandidateReceipt> = sts.struct(() => {
    return  {
        descriptor: V1CandidateDescriptor,
        commitmentsHash: H256,
    }
})

export const H256 = sts.bytes()

export const V1CandidateDescriptor: sts.Type<V1CandidateDescriptor> = sts.struct(() => {
    return  {
        paraId: Id,
        relayParent: H256,
        collator: V0Public,
        persistedValidationDataHash: H256,
        povHash: H256,
        erasureRoot: H256,
        signature: V0Signature,
        paraHead: H256,
        validationCodeHash: ValidationCodeHash,
    }
})

export const ValidationCodeHash = sts.bytes()

export const V0Signature = sts.bytes()

export const V0Public = sts.bytes()

export const Id = sts.number()

export interface V1CandidateDescriptor {
    paraId: Id
    relayParent: H256
    collator: V0Public
    persistedValidationDataHash: H256
    povHash: H256
    erasureRoot: H256
    signature: V0Signature
    paraHead: H256
    validationCodeHash: ValidationCodeHash
}

export type ValidationCodeHash = Bytes

export type V0Signature = Bytes

export type V0Public = Bytes

export type H256 = Bytes

export type Id = number

export interface V1CandidateReceipt {
    descriptor: V1CandidateDescriptor
    commitmentsHash: H256
}
