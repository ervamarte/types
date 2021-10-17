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

export interface Taxonomy {
  id: Category['id']
  name: string
  slug: Category['slug']
  categories?: 
    Array<{
      id: Category['id']
      name: string
      slug: Category['slug']
      subCategories?: Array<{
        id: Category['id']
        name: string
        slug: Category['slug']
      }>
    }>
}