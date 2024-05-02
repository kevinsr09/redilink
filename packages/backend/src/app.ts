import { envs } from './config/envs'
import { Server } from './infrastructure/server'

void new Server({ port: envs.PORT }).listen()
console.log(`Server listening on port ${envs.PORT}`)
