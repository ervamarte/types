import { Product } from './product'
import { ID } from './generic'
import { User } from './user'
import { Coupon } from './coupon'
import { ShipmentFreight } from './logistic'
export interface Cart {
  id: ID
  cookie: string
  customer?: User
  zipCode?: string
  coupon?: Coupon
  shipment?: ShipmentFreight
}

export interface CartItem {
  id: ID
  cart: Cart
  product: Product
  quantity: number
  price: number
  total: number
}
