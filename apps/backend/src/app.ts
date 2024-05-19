import { envs } from './config/envs'
import { Server } from './server'

void (async () => {
  const server = new Server({ port: envs.PORT })
  await server.listen()

  process.on('SIGINT', async () => {
    await server.stop()
  })

  process.on('SIGTERM', async () => {
    await server.stop()
  })

  process.on('SIGHUP', async () => {
    await server.stop()
  })

  process.on('uncaughtException', err => {
    console.log('uncaughtException', err)
    process.exit(1)
  })
})()
