import { envs } from './config/envs'
import { Server } from './server'

void new Server({ port: envs.PORT }).listen()
