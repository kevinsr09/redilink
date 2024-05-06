import { Link } from '@/domain/Link/Link'

export class LinkCreator {
  async run (original: string, shortened: string | undefined): Promise<void> {
    Link.create(original, shortened)
  }
}
