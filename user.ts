import { ID } from './generic'

export const USER_ROLE_ADMIN = 'admin'
export const USER_ROLE_USER = 'user'

export type UserRoles = typeof USER_ROLE_ADMIN | typeof USER_ROLE_USER

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
