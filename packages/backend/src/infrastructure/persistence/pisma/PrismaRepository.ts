import { prisma } from '.'

export abstract class PrismaRepository {
  protected conn = prisma
}
