import { DomainError } from '../DomainError.js'
import { type Command } from './Command.js'

export class CommandNotRegisteredError extends DomainError {
  constructor (command: Command) {
    super(`The command <${command.constructor.name}> hasn't a command handler associated`)
  }
}
