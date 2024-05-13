import { hashSync, compareSync } from 'bcryptjs'
import { type Encryptor } from '../../domain/Encryptor'

export class BcryptEncryptor implements Encryptor {
  private static readonly salt = 10
  encrypt (password: string): string {
    return hashSync(password, BcryptEncryptor.salt)
  }

  async compare (password: string, encryptedPassword: string): Promise<boolean> {
    return compareSync(password, encryptedPassword)
  }
}
