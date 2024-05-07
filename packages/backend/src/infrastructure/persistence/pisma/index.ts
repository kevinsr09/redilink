import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'
import { envs } from '@/infrastructure/config/envs'

const libsql = createClient({
  url: `${envs.TURSO_DATABASE_URL}`,
  authToken: `${envs.TURSO_AUTH_TOKEN}`
})

const adapter = new PrismaLibSQL(libsql)
export const prisma = new PrismaClient({ adapter })
