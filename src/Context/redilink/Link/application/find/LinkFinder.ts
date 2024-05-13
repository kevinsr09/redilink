import { type Link } from '@/domain/Link/Link'
import { LinkNotExist } from '@/domain/Link/LinkNotExist'
import { type LinkRepository } from '@/domain/Link/LinkRepository'
import { LinkShort } from '@/domain/Link/LinkShort'

export class LinkFinder {
  constructor (private readonly repository: LinkRepository) {}
  async run (id: string): Promise<Link> {
    const linkId = new LinkShort(id)
    const link = await this.repository.search(linkId)
    if (link == null) {
      throw new LinkNotExist('Link not found')
    }
    return link
  }
}
