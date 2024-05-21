/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type Encryptor } from 'Context/core/shared/domain/Encryptor'
import { AuthEmail } from './AuthEmail'
import { type AuthPassword } from './AuthPassword'
import { BcryptEncryptor } from 'Context/core/shared/infrastructure/adapters/BcryptEncryptor'
import { type Primitives } from 'Context/core/shared/domain/types'

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
