import { type Link } from '@Link/domain/Link'
import { type Response } from '../Query/Response'

export class FindLinkResponse implements Response {
  constructor (public readonly link: Link) {}
}
