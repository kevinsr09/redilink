import { type FindLinkResponse } from '@redilink/core/dist/Link/application/find/FindLinkResponse'
import { type Controller } from '../Controller'
import { type Response, type Request } from 'express'
import { type QueryBus } from '@redilink/core'
import { FindLinkQuery } from '@redilink/core/dist/Link/application/find/FindLinkQuery'
export class IndexGetController implements Controller {
  constructor (private readonly queryBus: QueryBus) {}

  async run (req: Request, res: Response): Promise<void> {
    const short = req.params.short
    const { link } = await this.queryBus.ask<FindLinkResponse>(new FindLinkQuery(short))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    res.redirect(link.original)
  }
}
