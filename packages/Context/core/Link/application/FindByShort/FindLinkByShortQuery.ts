import { Query } from '@shared/domain/Query/Query'

export class FindLinkByShortQuery extends Query {
  constructor (public readonly short: string) {
    super()
  }
}
