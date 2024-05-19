import { type Controller } from '../Controller'
import { type Request, type Response } from 'express'
import { type CommandBus } from '@/Context/redilink/shared/domain/Command/CommandBus'
import { CreateLinkCommand } from '@/Context/redilink/Link/application/create/CreateLinkCommand'
import httpStatus from 'http-status'

export class LinkPostController implements Controller {
  constructor (private readonly commandBus: CommandBus) {}

  async run (req: Request, res: Response): Promise<void> {
    const short = req.body.shorturl
    const original = req.body.url

    const command = new CreateLinkCommand({ original, short })
    await this.commandBus.dispatch(command)
    res.sendStatus(+httpStatus.CREATED)
  }
}
