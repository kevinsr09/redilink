import { type Encryptor } from '@/domain/shared/Encryptor'
import { hashSync, compareSync } from 'bcryptjs'

export class BcryptEncryptor implements Encryptor {
  private static readonly salt = 10
  async encrypt (password: string): Promise<string> {
    return hashSync(password, BcryptEncryptor.salt)
  }

  async compare (password: string, encryptedPassword: string): Promise<boolean> {
    return compareSync(password, encryptedPassword)
  }
}
