import { DomainError } from '../shared/DomainError'

export class LinkShortInvalidFormat extends DomainError {
  constructor () {
    super('Invalid format for short URL, only alphanumeric characters')
  }
}
