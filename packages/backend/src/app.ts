import { envs } from './infrastructure/config/envs'
import { Server } from './infrastructure/server'

void new Server({ port: envs.PORT }).listen()
