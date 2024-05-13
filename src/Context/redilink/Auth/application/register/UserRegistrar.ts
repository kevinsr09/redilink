import { type AuthRepository } from '@/domain/Auth/AuthRepository'
import { AuthUser } from '@/domain/Auth/AuthUser'

export class UserRegistrar {
  constructor (private readonly repository: AuthRepository) {}
  async run (email: string, password: string): Promise<void> {
    await this.repository.save(AuthUser.create(email, password))
  }
}
