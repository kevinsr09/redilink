import { type Query } from './Query'
import { type Response } from './Response'

export abstract class QueryHandler<Q extends Query, R extends Response> {
  abstract subscribedTo: () => Query
  abstract handle: (query: Q) => Promise<R>
}
