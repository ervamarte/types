
import { ID } from './generic'
import { User } from './user'

export interface CreditCard {
  id: ID
  bin: string
  brand: string
  active: boolean
  customer?: User
  meta: {
    pagarme: string
  }
}