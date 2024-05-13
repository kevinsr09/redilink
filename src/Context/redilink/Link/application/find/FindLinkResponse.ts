import { type Link } from '@/domain/Link/Link'
import { type Response } from '@/domain/shared/Query/Response'

export class FindLinkResponse implements Response {
  constructor (public readonly link: Link) {}
}
