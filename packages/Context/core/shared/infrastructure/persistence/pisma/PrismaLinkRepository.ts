import { type LinkRepository } from '@Link/domain/LinkRepository'
import { PrismaRepository } from './PrismaRepository'
import { Link } from '@Link/domain/Link'
import { type LinkShort } from '@Link/domain/LinkShort'
import { type LinkId } from '@Link/domain/LinkId'

export class PrismaLinkRepository extends PrismaRepository implements LinkRepository {
  async save (link: Link): Promise<void> {
    await this.conn.link.create({
      data: {
        id: link.id,
        short: link.short,
        original: link.original

      }
    })
  }

  async search (id: LinkId): Promise<Link | null> {
    const link = await this.conn.link.findUnique({ where: { id: id.value } })
    if (link == null) {
      return null
    }
    return Link.fromPrimitives(link)
  }

  async searchByShort (short: LinkShort): Promise<Link | null> {
    const link = await this.conn.link.findUnique({ where: { short: short.value } })
    if (link == null) {
      return null
    }
    return Link.fromPrimitives(link)
  }
}
