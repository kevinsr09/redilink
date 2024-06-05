import 'dotenv/config'
import { get } from 'env-var'

export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  TURSO_AUTH_TOKEN: get('TURSO_AUTH_TOKEN').asString(),
  TURSO_DATABASE_URL: get('TURSO_DATABASE_URL').asString()

}
