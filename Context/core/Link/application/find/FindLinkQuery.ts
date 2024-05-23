import { Query } from '@core/shared/domain/Query/Query'

export class FindLinkQuery extends Query {
  constructor (public readonly short: string) {
    super()
  }
}
