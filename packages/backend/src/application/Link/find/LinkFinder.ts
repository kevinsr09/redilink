import { type Link } from '@/domain/Link/Link'
import { LinkNotExist } from '@/domain/Link/LinkNotExist'
import { type LinkRepository } from '@/domain/Link/LinkRepository'
import { LinkShort } from '@/domain/Link/LinkShort'

export class LinkFinderByLinkShort {
  constructor (private readonly linkRepository: LinkRepository) {}
  async run (id: string): Promise<Link> {
    const linkId = new LinkShort(id)
    const link = await this.linkRepository.search(linkId)
    if (link == null) {
      throw new LinkNotExist('Link not found')
    }
    return link
  }
}
