import { User } from "./user";
import { Order } from "./order";

export interface Payment {
  createdAt: Date
  updateAt: Date
  order: Order
  customer: User
}

export type PaymentCustomerType = 'individual' | 'company'

export interface PaymentCreateCustomerPayload {
  name: string
  email: string
  code: string
  document: string
  document_type: 'CPF'
  metadata: {
    company: string
  }
}

export type PaymentCardBrand = 'Elo' | 'Mastercard' | 'Visa' | 'Amex' | 'JCB' | 'Aura' | 'Hipercard' | 'Diners' | 'Discover'

export type PaymentMethodCreditCard = 'credit_card'
export type PaymentMethodTicket = 'ticket'
export type PaymentMethodPix = 'pix'

export type PaymentOperationType = 'auth_and_capture' | 'auth_only' | 'pre_auth'

export type PaymentAddress = {
  line_1: string
  zip_code: string
  city: string
  state: string
  country: string
}

export interface PaymentCard {
  number: string
  holder_name: string
  exp_month: number
  exp_year: number
  cvv: string
  billing_address: PaymentAddress
}

export interface PaymentCreditCardPayload {
  payment_method: PaymentMethodCreditCard
  credit_card: {
    recurrence: boolean
    installments: number
    statement_descriptor: string
    card: PaymentCard
  }
}

export interface OrderCustomer {
  name: string
  email: string
  type: PaymentCustomerType
  code: string
}

export interface PaymentOrderItem {
  amount: number
  description: string
  quantity: number
}

export interface PaymentOrderItems {
  items: PaymentOrderItem[]
}

export type PaymentOrderStatus =
  | 'processing'
  | 'authorized'
  | 'paid'
  | 'refunded'
  | 'waiting_payment'
  | 'pending_refund'
  | 'refused'
  | 'chargedback'
  | 'analyzing'
  | 'pending_review'

export type PaymentRefuseStatus = 'acquirer' | 'antifraud' | 'internal_error' | 'no_acquirer' | 'acquirer_timeout'

export interface PaymentOrderCreditCard {
  payment_method: PaymentMethodCreditCard
  credit_card: {
    recurrence: boolean
    installments: number
    statement_descriptor: string
    card: PaymentCard
  }
}

export interface PaymentOrderPix {
  payment_method: PaymentMethodPix
  pix: {
    expires_in: string
    additional_information: [
      {
        name: string
        value: string
      }
    ]
  }
}
export interface PaymentOrderTicket {
  payment_method: PaymentMethodTicket
  boleto: {
    bank: '001' | '033' | '237' | '341' | '104'
    instructions: string
    due_at: Date
    document_number: string
    type: 'DM' | 'BDP'
  }
}

export interface PaymentOrder extends PaymentOrderItems {
  ip: string
  amount: number
  metadata: {
    slug: string
  }
  shipping: {
    amount: number
    description: string
    recipient_name: string
    recipient_phone: string
    address: PaymentAddress
  }
  antifraud: {
    type: 'clearsale'
    clearsale: {
      custom_sla: '90'
    }
  }
}
