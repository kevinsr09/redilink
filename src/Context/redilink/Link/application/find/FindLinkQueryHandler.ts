import { type QueryHandler } from '@/domain/shared/Query/QueryHandler'
import { type LinkFinder } from './LinkFinder'
import { FindLinkResponse } from './FindLinkResponse'
import { type Query } from '@/domain/shared/Query/Query'
import { FindLinkQuery } from './FindLinkQuery'

export class FindLinkQueryHandler implements QueryHandler<FindLinkQuery, FindLinkResponse> {
  constructor (private readonly linkFinder: LinkFinder) {}

  subscribedTo (): Query {
    return FindLinkQuery
  }

  async handle (query: FindLinkQuery): Promise<FindLinkResponse> {
    return new FindLinkResponse(await this.linkFinder.run(query.short))
  }
}
