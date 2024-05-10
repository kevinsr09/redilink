import { type Link } from './Link'
import { type LinkShort } from './LinkShort'

export interface LinkRepository {
  save: (link: Link) => Promise<void>
  search: (short: LinkShort) => Promise<Link | null>
}
