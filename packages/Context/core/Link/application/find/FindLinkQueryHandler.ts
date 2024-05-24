import { type LinkFinder } from './LinkFinder'
import { FindLinkResponse } from './FindLinkResponse'
import { FindLinkQuery } from './FindLinkQuery'
import { type QueryHandler } from '@shared/domain/Query/QueryHandler'
import { type Query } from '@shared/domain/Query/Query'

export class FindLinkQueryHandler implements QueryHandler<FindLinkQuery, FindLinkResponse> {
  constructor (private readonly linkFinder: LinkFinder) {}

  subscribedTo (): Query {
    return FindLinkQuery
  }

  async handle (query: FindLinkQuery): Promise<FindLinkResponse> {
    return new FindLinkResponse(await this.linkFinder.run(query.short))
  }
}
