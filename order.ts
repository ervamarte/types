import { Cart } from './cart'
import { Coupon } from './coupon'
import { ID, Slug } from './generic'
import { User } from './user'

export type OrderStatusEnum = 'waiting_payment' | 'paid' | 'canceled' | 'reversed' | 'sent' | 'delivered'

export interface Order {
  id: ID
  createdAt: Date
  slug: Slug
  customer: User
  coupon?: Coupon
  cart: Cart
  subTotal: number
  discount: number
  addition: number
  total: number
  status: OrderStatus['status']
}

export interface OrderStatus {
  id: ID
  order: Order
  status: OrderStatusEnum
  createdAt: Date
}