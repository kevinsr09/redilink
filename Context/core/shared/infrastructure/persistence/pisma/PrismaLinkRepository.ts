import { type LinkRepository } from '@/Context/redilink/Link/domain/LinkRepository'
import { PrismaRepository } from './PrismaRepository'
import { type LinkShort } from '@/Context/redilink/Link/domain/LinkShort'
import { Link } from '@/Context/redilink/Link/domain/Link'

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
