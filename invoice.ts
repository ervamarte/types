import { User } from "./user"
import { Order } from "./order"

export const INVOICE_STATUS_APPROVED = 'aprovado'
export const INVOICE_STATUS_REPROVED = 'reprovado'
export const INVOICE_STATUS_CANCELED = 'cancelado'
export const INVOICE_STATUS_DENIED = 'cancelado'
export const INVOICE_STATUS_PROCESSING = 'processamento'
export const INVOICE_STATUS_CONTINGENCY = 'contingencia'

export type InvoiceStatus = typeof INVOICE_STATUS_APPROVED 
  | typeof INVOICE_STATUS_REPROVED 
  | typeof INVOICE_STATUS_CANCELED 
  | typeof INVOICE_STATUS_DENIED 
  | typeof INVOICE_STATUS_PROCESSING
  | typeof INVOICE_STATUS_CONTINGENCY

export type InvoiceMeta = {
  uuid: string
  nfe: string
  serie: string
  recibo: string
  chave: string
  xml: string
  danfe: string
  log: string
}

export interface Invoice {
  order: Order
  user: User
  subTotal: Order['subTotal']
  discount: Order['discount']
  total: Order['total']
  status: InvoiceStatus
  meta: InvoiceMeta
}