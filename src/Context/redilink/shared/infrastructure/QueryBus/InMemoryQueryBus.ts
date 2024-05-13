import { type QueryBus } from '@/domain/shared/Query/QueryBus'
import { type QueryHandlers } from './QueryHandlers'
import { type Query } from '@/domain/shared/Query/Query'
import { type Response } from '@/domain/shared/Query/Response'

export class InMemoryQueryBus implements QueryBus {
  constructor (private readonly queryHandlersInformation: QueryHandlers) {}

  async ask <R extends Response> (query: Query): Promise<R> {
    const handler = this.queryHandlersInformation.get(query)
    const response = await handler.handle(query) as R
    return response
  }
}
