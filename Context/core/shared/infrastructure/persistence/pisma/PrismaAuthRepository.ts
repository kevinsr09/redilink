import { type AuthRepository } from '@Auth/domain/AuthRepository'
import { PrismaRepository } from './PrismaRepository'
import { AuthUser } from '@Auth/domain/AuthUser'

export class PrismaAuthRespository extends PrismaRepository implements AuthRepository {
  async save (auth: AuthUser): Promise<void> {
    await this.conn.user.create({
      data: AuthUser.toPrimitives(auth)
    })
  }
}
