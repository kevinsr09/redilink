/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { FindLinkQuery, type FindLinkResponse, type QueryBus } from '@redilink/core'
import { type Controller } from '../Controller'
import { type Request, type Response } from 'express'
export class LinkGetController implements Controller {
  constructor (private readonly queryBus: QueryBus) {}

  async run (req: Request, res: Response): Promise<void> {
    const id = req.params.id
    const { link } = await this.queryBus.ask<FindLinkResponse>(new FindLinkQuery(id))

    res.json(JSON.parse(link.toString()))
  }
}
