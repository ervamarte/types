import { Coupon } from './coupon'
import { ID, Slug } from './generic'
import { User } from './user'
import { ShipmentFreight } from './logistic'
import { Address } from './address'
import { Product } from './product'

export type OrderStatusEnum = 'cart' | 'waiting_payment' | 'paid' | 'canceled' | 'reversed' | 'sent' | 'delivered'

export interface Order {
  id: ID
  createdAt: Date
  updatedAt: Date
  slug: Slug
  cookie: string
  customer?: User
  coupon?: Coupon
  subTotal: number
  discount: number
  addition: number
  total: number
  status: OrderStatus['status']
  zipCode?: string
  shipment?: ShipmentFreight
  address?: {
    shipping: Omit<Address, "id" | "user" | "active">
    billing: Omit<Address, "id" | "user" | "active">
  }
  meta?: {
    pagarme: string
  }
}

export interface OrderStatus {
  id: ID
  order: Order
  status: OrderStatusEnum
  createdAt: Date
}
export interface OrderItem {
  id: ID
  order: Order
  product: Product
  quantity: number
  price: number
  total: number
}
export interface OrderSummary {
  discount: number
  subTotal: number
  total: number
}
export interface OrderState extends Omit<Order, "customer">, OrderSummary {
  customer: User['id']
  items: OrderItem[]
}