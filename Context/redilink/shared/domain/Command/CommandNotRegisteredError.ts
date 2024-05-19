import { DomainError } from '../DomainError'
import { type Command } from './Command'

export class CommandNotRegisteredError extends DomainError {
  constructor (command: Command) {
    super(`The command <${command.constructor.name}> hasn't a command handler associated`)
  }
}
