import { DomainError } from '../../shared/domain/DomainError'

export class LinkShortInvalidLength extends DomainError {
  constructor () {
    super('Invalid length for short URL, must be between 3 and 7 characters')
  }
}
