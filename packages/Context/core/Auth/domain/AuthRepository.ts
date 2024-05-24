import { type AuthUser } from './AuthUser'

export interface AuthRepository {

  save: (auth: AuthUser) => Promise<void>

}
