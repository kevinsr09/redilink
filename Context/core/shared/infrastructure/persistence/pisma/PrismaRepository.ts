import { prisma } from './'

export abstract class PrismaRepository {
  protected conn = prisma

  async close (): Promise<void> {
    await prisma.$disconnect()
  }

  async connect (): Promise<void> {
    await prisma.$connect()
  }
}
