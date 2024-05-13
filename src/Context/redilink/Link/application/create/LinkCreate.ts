import { Link } from '../../domain/Link'
import { type LinkRepository } from '../../domain/LinkRepository'

export class LinkCreator {
  constructor (private readonly repository: LinkRepository) {}

  async run (original: string, short: string | undefined): Promise<void> {
    await this.repository.save(Link.create(original, short))
  }
}
