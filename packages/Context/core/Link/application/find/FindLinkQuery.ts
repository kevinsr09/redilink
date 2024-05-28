import { Query } from '@shared/domain/Query/Query'

export class FindLinkQuery extends Query {
  constructor (public readonly id: string) {
    super()
  }
}
