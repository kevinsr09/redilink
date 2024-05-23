/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { AuthEmail } from './AuthEmail'
import { type AuthPassword } from './AuthPassword'
import { BcryptEncryptor } from '@core/shared/infrastructure/adapters/BcryptEncryptor'
import { type Primitives } from '@core/shared/domain/types'
import { type Encryptor } from '@core/shared/domain/Encryptor'

export class AuthUser {
  private readonly _email: AuthEmail
  private readonly _password: string
  private constructor (email: string, password: string) {
    this._email = new AuthEmail(email)
    this._password = password
  }

  static create (email: string, password: string, encryptor: Encryptor = new BcryptEncryptor()): AuthUser {
    const passwordHash = encryptor.encrypt(password)

    return new AuthUser(email, passwordHash)
  }

  async passwordMatch (password: AuthPassword, encryptor: Encryptor = new BcryptEncryptor()): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/return-await
    return await encryptor.compare(password.value, this.password)
  }

  get email (): string {
    return this._email.value
  }

  get password (): string {
    return this._password
  }

  static toPrimitives (user: AuthUser): Primitives<AuthUser> {
    return {
      email: user.email,
      password: user.password
    }
  }

  static fromPrimitives ({ email, password }: Primitives<AuthUser>): AuthUser {
    return new AuthUser(email, password)
  }
}
