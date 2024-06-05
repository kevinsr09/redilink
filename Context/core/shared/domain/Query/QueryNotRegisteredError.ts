import { DomainError } from '../DomainError'
import { type Query } from './Query'

export class QueryNotRegisteredError extends DomainError {
  constructor (query: Query) {
    super(`The query <${query.constructor.name}> hasn't a query handler associated`)
  }
}
