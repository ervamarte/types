import { ID } from './generic'
import { Product } from './product'

export const STOCK_TYPE_LENDING = 'LENDING'
export const STOCK_TYPE_ACQUISITION = 'ACQUISITION'

export type StockType = typeof STOCK_TYPE_LENDING | typeof STOCK_TYPE_ACQUISITION

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
