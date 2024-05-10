import { AuthPassword } from '@/domain/Auth/AuthPassword'
import { type AuthRepository } from '@/domain/Auth/AuthRepository'
import { UserAuth } from '@/domain/Auth/UserAuth'
import { type Encryptor } from '@/domain/shared/Encryptor'

export class UserRegistrar {
  constructor (private readonly repository: AuthRepository, private readonly encryptor: Encryptor) {}
  async run (email: string, password: string): Promise<void> {
    const authPassword = new AuthPassword(password)

    console.log(authPassword.value)
    await this.repository.save(UserAuth.create(email, await this.encryptor.encrypt(authPassword.value)))
  }
}
