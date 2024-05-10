import { type UserAuth } from './UserAuth'

export interface AuthRepository {

  save: (auth: UserAuth) => Promise<void>

}
