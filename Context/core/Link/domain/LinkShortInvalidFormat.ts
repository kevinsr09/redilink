import { DomainError } from '../../shared/domain/DomainError'

export class LinkShortInvalidFormat extends DomainError {
  constructor () {
    super('Invalid format for short URL, only alphanumeric characters')
  }
}
