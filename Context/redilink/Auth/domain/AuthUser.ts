import { type Encryptor } from '../../shared/domain/Encryptor'
import { type Primitives } from '../../shared/domain/types'
import { BcryptEncryptor } from '../../shared/infrastructure/adapters/BcryptEncryptor'
import { AuthEmail } from './AuthEmail'
import { AuthPassword } from './AuthPassword'

export class AuthUser {
  private readonly _email: AuthEmail
  private readonly _password: string
  private constructor (email: string, password: string) {
    this._email = new AuthEmail(email)
    this._password = password
  }

  static create (email: string, password: string, encryptor: Encryptor = new BcryptEncryptor()): AuthUser {
    return new AuthUser(email, encryptor.encrypt(new AuthPassword(password).value))
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