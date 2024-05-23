/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { FindLinkQuery, type FindLinkResponse, type QueryBus } from '../../../../../Context/core/dist/index'
import { type Controller } from '../Controller'
import { type Request, type Response } from 'express'
export class LinkGetController implements Controller {
  constructor (private readonly queryBus: QueryBus) {}

  async run (req: Request, res: Response): Promise<void> {
    const short = req.params.short
    const { link } = await this.queryBus.ask<FindLinkResponse>(new FindLinkQuery(short))

    res.json(link)
  }
}
