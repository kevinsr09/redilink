import { type LinkCreator } from './LinkCreate'
import { CreateLinkCommand } from './CreateLinkCommand'
import { type CommandHandler } from 'shared/domain/Command/CommandHandler'
import { type Command } from 'shared'

export class CreateLinkCommandHandler implements CommandHandler<CreateLinkCommand> {
  constructor (private readonly linkCreator: LinkCreator) {}

  subscribedTo (): Command {
    return CreateLinkCommand
  }

  async handle (command: CreateLinkCommand): Promise<void> {
    await this.linkCreator.run(command.original, command.short)
  }
}
