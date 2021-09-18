import { ObjectId } from 'mongodb'
export type Maybe<T> = T | string

export type ID = Maybe<ObjectId>
export type Slug = string
export type Active = boolean
