import { Category } from './category'
import { SEO } from './seo'
import { Volume } from './logistic'
import { ID, Slug } from './generic'
import { Seller } from './seller'
import { Brand } from './brand'

export type ProductVolume = Volume

export type ProductSEO = SEO

export type ProductType = 'main' | 'variant'

export interface ProductBrand {
  slug: Slug
  name: string
}

export type ProductImage = {
  url: string
}
export interface ProductPrice {
  price: {
    retail: number
    sale: number
    insurance: number
  }
}

export interface ProductDetail {
  label: string
  value: string
}

export interface Product extends ProductPrice {
  id: ID
  sku: string
  name: string
  slug: Slug
  type: ProductType
  short_description: string
  description: string
  details: ProductDetail[]
  active: boolean
  image: {
    url: string
  }
  images: ProductImage[]
  category: Category
  volume: ProductVolume
  seo: ProductSEO
  seller: Seller
  brand?: Brand
  categories: string[]
  stock: number
  variants?: ProductVariant[]
  
}

export type ProductVariant = Pick<Product, 'id' | 'name' | 'sku' | 'type' | 'active' | 'image' | 'image' | 'volume'>

export type ProductList = Pick<
  Product,
  'id' | 'sku' | 'name' | 'slug' | 'price' | 'image'
>
export type ProductArray = ProductList[]
