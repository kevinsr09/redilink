import { Link } from '@/domain/Link/Link'
import { type LinkRepository } from '@/domain/Link/LinkRepository'

export class LinkCreator {
  constructor (private readonly linkRepository: LinkRepository) {}

  async run (id: string, original: string, short: string | undefined): Promise<void> {
    await this.linkRepository.save(Link.create(id, original, short))
  }
}
