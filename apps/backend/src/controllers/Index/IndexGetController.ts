import { type Controller } from '../Controller'
import { type Response, type Request } from 'express'
import { FindLinkByShortQuery, type FindLinkResponse, type QueryBus } from '@redilink/core'

export class IndexGetController implements Controller {
  constructor (private readonly queryBus: QueryBus) {}

  async run (req: Request, res: Response): Promise<void> {
    const short = req.params.short
    console.log(short)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const { link } = await this.queryBus.ask<FindLinkResponse>(new FindLinkByShortQuery(short))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    res.redirect(link.original)
  }
}
