import { type QueryHandler } from '@shared/domain/Query/QueryHandler'
import { type Query } from '@shared/domain/Query/Query'

import { type LinkFinderByShort } from './LinkFinderByShort'
import { FindLinkByShortQuery } from './FindLinkByShortQuery'
import { FindLinkResponse } from '@shared/domain/Link/FindLinkResponse'

export class FindLinkByShortQueryHandler implements QueryHandler<FindLinkByShortQuery, FindLinkResponse> {
  constructor (private readonly linkFinderByShort: LinkFinderByShort) {}

  subscribedTo (): Query {
    return FindLinkByShortQuery
  }

  async handle (query: FindLinkByShortQuery): Promise<FindLinkResponse> {
    return new FindLinkResponse(await this.linkFinderByShort.run(query.short))
  }
}
