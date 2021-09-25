import { ID } from './generic'

export type UserRoles = 'admin' | 'user'

export interface User {
  id: ID
  name: string
  email: string
  roles: UserRoles[]
  password: string
  isValidPassword: (password: string) => Promise<boolean>
  active: boolean
  resetPasswordCode?: string
  phone?: string
  document?: string
  birthday?: Date
  lastLogIn?: Date
  meta: {
    pagarme: string
  }
}
