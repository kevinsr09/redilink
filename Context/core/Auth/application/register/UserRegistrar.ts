import { type AuthRepository } from '../../domain/AuthRepository'
import { AuthUser } from '../../domain/AuthUser'

export class UserRegistrar {
  constructor (private readonly repository: AuthRepository) {}
  async run (email: string, password: string): Promise<void> {
    await this.repository.save(AuthUser.create(email, password))
  }
}
