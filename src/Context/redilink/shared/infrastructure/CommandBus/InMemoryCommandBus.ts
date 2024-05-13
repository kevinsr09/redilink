import { type CommandBus } from '@/domain/shared/Command/CommandBus'
import { type CommandHandlers } from './CommandHandlers'
import { type Command } from '@/domain/shared/Command/Command'

export class InMemoryCommandBus implements CommandBus {
  constructor (private readonly commandHandlers: CommandHandlers) {}

  async dispatch (command: Command): Promise<void> {
    const handler = this.commandHandlers.get(command)

    await handler.handle(command)
  }
}
