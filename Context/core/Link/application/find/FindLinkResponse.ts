import { type Response } from 'Context/core/shared/domain/Query/Response'
import { type Link } from '../../domain/Link'

export class FindLinkResponse implements Response {
  constructor (public readonly link: Link) {}
}
