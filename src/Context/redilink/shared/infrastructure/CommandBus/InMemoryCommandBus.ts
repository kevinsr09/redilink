import { type Command } from '../../domain/Command/Command'
import { type CommandBus } from '../../domain/Command/CommandBus'
import { type CommandHandlers } from './CommandHandlers'

export class InMemoryCommandBus implements CommandBus {
  constructor (private readonly commandHandlers: CommandHandlers) {}

  async dispatch (command: Command): Promise<void> {
    const handler = this.commandHandlers.get(command)

    await handler.handle(command)
  }
}
