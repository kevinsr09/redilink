import { type AuthRepository } from '@/domain/Auth/AuthRepository'
import { PrismaRepository } from './PrismaRepository'
import { AuthUser } from '@/domain/Auth/AuthUser'

export class PrismaAuthRespository extends PrismaRepository implements AuthRepository {
  async save (auth: AuthUser): Promise<void> {
    await this.conn.user.create({
      data: AuthUser.toPrimitives(auth)
    })
  }
}
