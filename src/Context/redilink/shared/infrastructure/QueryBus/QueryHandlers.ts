import { type Query } from '@/domain/shared/Query/Query'
import { type QueryHandler } from '@/domain/shared/Query/QueryHandler'
import { QueryNotRegisteredError } from '@/domain/shared/Query/QueryNotRegisteredError'
import { type Response } from '@/domain/shared/Query/Response'

export class QueryHandlers extends Map<Query, QueryHandler<Query, Response>> {
  constructor (queryHandlers: Array<QueryHandler<Query, Response>>) {
    super()
    queryHandlers.forEach(queryHandler => {
      this.set(queryHandler.subscribedTo(), queryHandler)
    })
  }

  public get (query: Query): QueryHandler<Query, Response> {
    const queryHandler = super.get(query.constructor)

    if (queryHandler == null) {
      throw new QueryNotRegisteredError(query)
    }

    return queryHandler
  }
}
