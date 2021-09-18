import { ID } from './generic'
import { Product } from './product'

export type StockType = 'LENDING' | 'ACQUISITION'

export interface Stock {
  id: ID
  quantity: number
  product: Product
  entryDate: Date
  unitCost: number
  totalCost: number
  tax: number
  description: string
  invoice?: string
  type: StockType
}
