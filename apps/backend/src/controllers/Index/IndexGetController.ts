import { type QueryBus } from '@/Context/redilink/shared/domain/Query/QueryBus'
import { type Controller } from '../Controller'
import { type Request, type Response } from 'express'
import { type FindLinkResponse } from '@/Context/redilink/Link/application/find/FindLinkResponse'
import { FindLinkQuery } from '@/Context/redilink/Link/application/find/FindLinkQuery'

export class IndexGetController implements Controller {
  constructor (private readonly queryBus: QueryBus) {}

  async run (req: Request, res: Response): Promise<void> {
    const short = req.params.short
    const { link } = await this.queryBus.ask<FindLinkResponse>(new FindLinkQuery(short))
    res.redirect(link.original)
  }
}
