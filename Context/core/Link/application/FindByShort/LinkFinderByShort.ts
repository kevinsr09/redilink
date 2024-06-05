import { type Link } from '../../domain/Link'
import { LinkNotExist } from '../../domain/LinkNotExist'
import { type LinkRepository } from '../../domain/LinkRepository'
import { LinkShort } from '../../domain/LinkShort'

export class LinkFinderByShort {
  constructor (private readonly repository: LinkRepository) {}
  async run (short: string): Promise<Link> {
    const linkShort = new LinkShort(short)
    const link = await this.repository.searchByShort(linkShort)
    if (link == null) {
      throw new LinkNotExist('Link not found')
    }
    return link
  }
}
