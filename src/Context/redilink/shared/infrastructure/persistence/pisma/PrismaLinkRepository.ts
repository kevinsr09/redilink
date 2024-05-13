import { Link } from '@/domain/Link/Link'
import { type LinkRepository } from '@/domain/Link/LinkRepository'
import { type LinkShort } from '@/domain/Link/LinkShort'
import { PrismaRepository } from './PrismaRepository'

export class PrismaLinkRepository extends PrismaRepository implements LinkRepository {
  async save (link: Link): Promise<void> {
    await this.conn.link.create({
      data: {
        short: link.short,
        original: link.original

      }
    })
  }

  async search (short: LinkShort): Promise<Link | null> {
    const link = await this.conn.link.findUnique({ where: { short: short.value } })
    if (link == null) {
      return null
    }
    return Link.fromPrimitives(link)
  }
}
