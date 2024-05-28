import { type LinkCreator } from './LinkCreate'
import { CreateLinkCommand } from './CreateLinkCommand'
import { type CommandHandler } from '@shared/domain/Command/CommandHandler'
import { type Command } from '@shared/domain/Command/Command'
import { LinkShort } from '@Link/domain/LinkShort'

export class CreateLinkCommandHandler implements CommandHandler<CreateLinkCommand> {
  constructor (private readonly linkCreator: LinkCreator) {}

  subscribedTo (): Command {
    return CreateLinkCommand
  }

  async handle (command: CreateLinkCommand): Promise<void> {
    if (command.short == null) {
      command.short = LinkShort.random().value
    }
    await this.linkCreator.run(command.id, command.original, command.short)
  }
}
