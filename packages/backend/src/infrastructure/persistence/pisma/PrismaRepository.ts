import { type Prisma, type PrismaClient } from '@prisma/client'
import { prisma } from '.'
import { type AggregateRoot } from '@/domain/shared/AggregateRoot'

export type prismaEntitys = Lowercase<keyof typeof Prisma.ModelName>

export abstract class PrismaRepository<T extends AggregateRoot> {
  private readonly prisma: PrismaClient
  constructor () {
    this.prisma = prisma
  }

  abstract entity (): prismaEntitys

  private async persist (): Promise<void> {
    const entiti = this.entity()
    await this.prisma[entiti]
  }

  async save (): Promise<void> {
    // TODO
  }

  async find (): Promise<T[]> {
    // TODO
    return []
  }

  async delete (): Promise<void> {
    // TODO
  }
}

const link = new PrismaRepository(prisma)
