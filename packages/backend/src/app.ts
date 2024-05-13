import { envs } from '../../../src/Context/redilink/shared/infrastructure/config/envs'
import { Server } from '../../../src/Context/redilink/shared/infrastructure/server'

void new Server({ port: envs.PORT }).listen()
