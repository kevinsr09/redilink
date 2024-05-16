import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'
import { envs } from '../../../../../../apps/redilink/backend/src/config/envs'
import { type Database } from '../Database'

const libsql = createClient({
  url: `${envs.TURSO_DATABASE_URL}`,
  authToken: `${envs.TURSO_AUTH_TOKEN}`
})

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
