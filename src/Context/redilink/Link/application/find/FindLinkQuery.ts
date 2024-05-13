import { Query } from '../../../domain/shared/Query/Query'

export class FindLinkQuery extends Query {
  constructor (public readonly short: string) {
    super()
  }
}
