import express, { json, urlencoded, type NextFunction } from 'express'
import { xssFilter, noSniff, frameguard, hidePoweredBy } from 'helmet'
import compress from 'compression'
import type * as http from 'http'
import asyncRouter from 'express-promise-router'
import { registerRoutes } from './routes'
import httpStatus from 'http-status'
import { type Database } from '@redilink/core/dist/shared/infrastructure/persistence/Database'
import { PrismaDatabase } from '@redilink/core/dist/shared/infrastructure/persistence/pisma'
import { DomainError } from '@redilink/core/dist/shared/domain/DomainError'

export class Server {
  private readonly express = express()
  private server?: http.Server
  public readonly port: number
  private readonly db: Database
  constructor ({ port }: { port: number }) {
    this.port = port
    this.db = new PrismaDatabase()
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

    router.get('/', (_req: express.Request, res: express.Response) => {
      res.redirect('/app')
    })

    router.use((_err: Error, _req: express.Request, res: express.Response, next: NextFunction) => {
      console.log(_err)

      if (_err instanceof DomainError) {
        res.status(+httpStatus.BAD_REQUEST).send(_err.message)
        console.log({ message: _err.message, name: _err.name, stack: _err.stack })
        return
      }
      res.status(+httpStatus.INTERNAL_SERVER_ERROR).send('Something went wrong!')
    })
  }

  async listen (): Promise<void> {
    await this.conectDatabase()
    await new Promise<void>((resolve, reject) => {
      this.server = this.express.listen(this.port, () => {
        console.log(`Server listening on port ${this.port}`)
        resolve()
      })
    })
  }

  async stop (): Promise<void> {
    await this.db.close()
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

  async conectDatabase (): Promise<void> {
    await this.db.connect()
  }
}
