import { ID, Slug, Active } from './generic'

export interface Seller {
  id: ID
  name: string
  slug: Slug
  description: string
  keywords: string[]
  active: Active
  email?: string
  phone?: string
  website?: string
  facebook?: string
  instagram?: string
}
