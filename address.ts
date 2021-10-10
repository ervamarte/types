import { User } from './user'
import { ID } from './generic'

export interface Address {
  id: ID
  recpient: string
  street: string
  number: string
  neighborhood: string
  complement: string
  city: string
  district: string
  phone: string
  zipCode: string
  active: boolean
  main: boolean
  user: User
}
