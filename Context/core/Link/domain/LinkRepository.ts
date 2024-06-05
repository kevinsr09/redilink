import { type Link } from './Link'
import { type LinkId } from './LinkId'
import { type LinkShort } from './LinkShort'

export interface LinkRepository {
  save: (link: Link) => Promise<void>
  search: (short: LinkId) => Promise<Link | null>
  searchByShort: (short: LinkShort) => Promise<Link | null>
}
