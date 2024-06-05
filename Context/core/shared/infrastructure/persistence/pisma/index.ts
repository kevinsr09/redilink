import { PrismaClient } from '@prisma/client'
import { type Database } from '../Database'
import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { envs } from '@shared/config/envs'

const libsql = createClient({
  url: `${envs.TURSO_DATABASE_URL}`,
  authToken: `${envs.TURSO_AUTH_TOKEN}`
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const adapter = new PrismaLibSQL(libsql)
export const prisma = new PrismaClient({ adapter })

export class PrismaDatabase implements Database {
  async close (): Promise<void> {
    await prisma.$disconnect()
  }

  async connect (): Promise<void> {
    await prisma.$connect()
  }
}
