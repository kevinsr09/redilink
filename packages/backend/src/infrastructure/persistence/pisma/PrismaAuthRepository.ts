import { type AuthRepository } from '@/domain/Auth/AuthRepository'
import { UserAuth } from '@/domain/Auth/UserAuth'
import { PrismaRepository } from './PrismaRepository'

export class PrismaAuthRespository extends PrismaRepository implements AuthRepository {
  async save (auth: UserAuth): Promise<void> {
    await this.conn.user.create({
      data: UserAuth.toPrimitives(auth)
    })
  }
}
