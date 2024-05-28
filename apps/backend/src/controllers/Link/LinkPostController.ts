/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type Controller } from '../Controller'
import { type Request, type Response } from 'express'
import httpStatus from 'http-status'
import { CreateLinkCommand, FindLinkQuery, type FindLinkResponse, type QueryBus, type CommandBus } from '@redilink/core'
import { v4 as uuidv4 } from 'uuid'
export class LinkPostController implements Controller {
  constructor (private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  async run (req: Request, res: Response): Promise<void> {
    const short = req.body.shorturl
    const original = req.body.url
    const id = uuidv4()

    const command = new CreateLinkCommand({ id, original, short })
    await this.commandBus.dispatch(command)
    const { link } = await this.queryBus.ask<FindLinkResponse>(new FindLinkQuery(id))
    res.json(JSON.parse(link.toString())).status(+httpStatus.CREATED)
  }
}
