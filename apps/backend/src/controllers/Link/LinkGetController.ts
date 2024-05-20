import { type Controller } from '../Controller'
import { type Request, type Response } from 'express'
import { type FindLinkResponse } from '@redilink/core/dist/Link/application/find/FindLinkResponse'
import { FindLinkQuery } from '@redilink/core/dist/Link/application/find/FindLinkQuery'
import { type QueryBus } from '@redilink/core/dist'
export class LinkGetController implements Controller {
  constructor (private readonly queryBus: QueryBus) {}

  async run (req: Request, res: Response): Promise<void> {
    const short = req.params.short
    const { link } = await this.queryBus.ask<FindLinkResponse>(new FindLinkQuery(short))

    res.json(link)
  }
}
