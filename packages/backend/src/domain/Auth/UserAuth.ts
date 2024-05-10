import { AggregateRoot } from '../shared/AggregateRoot'
import { type Primitives } from '../shared/types'
import { AuthEmail } from './AuthEmail'

export class UserAuth extends AggregateRoot {
  private readonly _email: AuthEmail
  private readonly _password: string
  private constructor (email: string, password: string) {
    super()
    this._email = new AuthEmail(email)
    this._password = password
  }

  static create (email: string, password: string): UserAuth {
    return new UserAuth(email, password)
  }

  get email (): string {
    return this._email.value
  }

  get password (): string {
    return this._password
  }

  static toPrimitives (user: UserAuth): Primitives<UserAuth> {
    return {
      email: user.email,
      password: user.password
    }
  }

  static fromPrimitives ({ email, password }: Primitives<UserAuth>): UserAuth {
    return new UserAuth(email, password)
  }
}
