import { type CommandHandler } from '@/domain/shared/Command/CommandHandler'
import { type LinkCreator } from './LinkCreate'
import { type Command } from '@/domain/shared/Command/Command'
import { CreateLinkCommand } from './CreateLinkCommand'

export class CreateLinkCommandHandler implements CommandHandler<CreateLinkCommand> {
  constructor (private readonly linkCreator: LinkCreator) {}

  subscribedTo (): Command {
    return CreateLinkCommand
  }

  async handle (command: CreateLinkCommand): Promise<void> {
    await this.linkCreator.run(command.original, command.short)
  }
}
