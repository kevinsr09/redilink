import { type AuthRepository } from 'Auth/domain/AuthRepository'
import { AuthUser } from 'Auth/domain/AuthUser'

export class UserRegistrar {
  constructor (private readonly repository: AuthRepository) {}
  async run (email: string, password: string): Promise<void> {
    await this.repository.save(AuthUser.create(email, password))
  }
}
