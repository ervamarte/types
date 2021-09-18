import { SEO } from './seo'
import { ID, Slug } from './generic'

export type CategorySEO = SEO

export type CategoryLevel = 'MAIN' | 'CATEGORY' | 'SUBCATEGORY'

export interface Category {
  id: ID
  slug: Slug
  name: string
  active: boolean
  level: CategoryLevel
  category?: Category
  seo: CategorySEO
}
