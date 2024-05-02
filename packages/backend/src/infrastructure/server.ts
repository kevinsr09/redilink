import express, { json, urlencoded, type NextFunction } from 'express'
import { xssFilter, noSniff, frameguard, hidePoweredBy } from 'helmet'
import compress from 'compression'
import type * as http from 'http'
import asyncRouter from 'express-promise-router'
import { registerRoutes } from './routes'

export class Server {
  private readonly express = express()
  private server?: http.Server
  public readonly port: number
  constructor ({ port }: { port: number }) {
    this.port = port

    this.express.use(json())
    this.express.use(urlencoded({ extended: true }))
    this.express.use(xssFilter())
    this.express.use(noSniff())
    this.express.use(hidePoweredBy())
    this.express.use(frameguard({ action: 'deny' }))
    this.express.use(compress())
    const router = asyncRouter()
    this.express.use(router)
    registerRoutes(router)

    router.use((err: Error, req: express.Request, res: express.Response, next: NextFunction) => {
      console.error({ err })
      res.status(500).send(err.message)
    })
  }

  async listen (): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.server = this.express.listen(this.port, () => {
        console.log(`Server listening on port ${this.port}`)
        resolve()
      })
    })
  }

  async stop (): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (this.server != null) {
        this.server.close((err) => {
          if (err != null) {
            reject(err)
          }
          resolve()
        })
      }
      resolve()
    })
  }
}
