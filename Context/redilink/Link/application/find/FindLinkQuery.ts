import { Query } from '@/Context/redilink/shared/domain/Query/Query'

export class FindLinkQuery extends Query {
  constructor (public readonly short: string) {
    super()
  }
}