import { type Query } from '../../domain/Query/Query'
import { type QueryBus } from '../../domain/Query/QueryBus'
import { type Response } from '../../domain/Query/Response'
import { type QueryHandlers } from './QueryHandlers'

export class InMemoryQueryBus implements QueryBus {
  constructor (private readonly queryHandlersInformation: QueryHandlers) {}

  async ask <R extends Response> (query: Query): Promise<R> {
    const handler = this.queryHandlersInformation.get(query)
    const response = await handler.handle(query) as R
    return response
  }
}
