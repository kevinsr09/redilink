/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { LinkId } from '@Link/domain/LinkId'
import { type Link } from '../../domain/Link'
import { LinkNotExist } from '../../domain/LinkNotExist'
import { type LinkRepository } from '../../domain/LinkRepository'

export class LinkFinder {
  constructor (private readonly repository: LinkRepository) {}
  async run (id: string): Promise<Link> {
    const linkId = new LinkId(id)
    const link = await this.repository.search(linkId)
    if (link == null) {
      throw new LinkNotExist('Link not found')
    }
    return link
  }
}
