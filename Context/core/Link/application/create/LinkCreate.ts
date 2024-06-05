import { LinkShort } from '@Link/domain/LinkShort'
import { Link } from '../../domain/Link'
import { type LinkRepository } from '../../domain/LinkRepository'

export class LinkCreator {
  constructor (private readonly repository: LinkRepository) {}

  async run (id: string, original: string, short: string): Promise<void> {
    const linkShort = new LinkShort(short)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await this.repository.save(Link.create(id, original, linkShort))
  }
}
