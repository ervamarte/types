import { ID, Slug } from './generic'
import { Product } from './product'

export interface Campaign {
  id: ID
  name: string
  slug: Slug
  description: string
  startDate: Date
  endDate: Date
  published: boolean
  products: Product[]
}
