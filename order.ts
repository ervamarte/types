import { Coupon } from './coupon'
import { ID, Slug } from './generic'
import { User } from './user'
import { ShipmentFreight } from './logistic'
import { Address } from './address'
import { Product } from './product'
import { PaymentMethodCreditCard, PaymentMethodPix, PaymentMethodTicket } from './payment'
import { ShipmentFreightArray } from './logistic'

export const ORDER_STATUS_CART = 'cart'
export const ORDER_STATUS_WAITING_PAYMENT = 'waiting_payment'
export const ORDER_STATUS_PAID = 'paid'
export const ORDER_STATUS_CANCELED = 'canceled'
export const ORDER_STATUS_REVERSED = 'reversed'
export const ORDER_STATUS_SENT = 'sent'
export const ORDER_STATUS_DELIVERED = 'delivered'

export type OrderStatusEnum = typeof ORDER_STATUS_CART 
  | typeof ORDER_STATUS_WAITING_PAYMENT 
  | typeof ORDER_STATUS_PAID 
  | typeof ORDER_STATUS_CANCELED
  | typeof ORDER_STATUS_REVERSED 
  | typeof ORDER_STATUS_SENT 
  | typeof ORDER_STATUS_DELIVERED

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
  payment?: PaymentMethodTicket | PaymentMethodCreditCard | PaymentMethodPix
  userAddress: ID
  address?: {
    shipping: Omit<Address, "id" | "user" | "active">
    billing: Omit<Address, "id" | "user" | "active">
  }
  meta?: {
    pagarme: string
  }
  freightOptions?: ShipmentFreightArray
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

export type Installment = {
  installments: number
  value: string
}

export type OrderStatePayment = {
  pix: {
    total: number
  },
  ticket: {
    total: number
  },
  creditCard: {
    total: number
    installments: Installment[]
  }
}
export interface OrderState extends Omit<Order, "customer">, OrderSummary {
  customer: User['id']
  items: OrderItem[]
  payments: OrderStatePayment
}