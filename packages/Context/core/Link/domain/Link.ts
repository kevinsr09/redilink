import { type Primitives } from '../../shared/domain/types'
import { LinkId } from './LinkId'
import { LinkOriginal } from './LinkOriginal'
import { LinkShort } from './LinkShort'

export class Link {
  private readonly _id: LinkId
  private readonly _original: LinkOriginal
  private readonly _short: LinkShort

  private constructor (id: string, original: string, short: LinkShort) {
    this._original = LinkOriginal.create(original)
    this._short = short
    this._id = new LinkId(id)
  }

  static create (id: string, original: string, short: LinkShort): Link {
    return new Link(id, original, short)
  }

  get original (): string {
    return this._original.value
  }

  get short (): string {
    return this._short.value
  }

  get id (): string {
    return this._id.value
  }

  static fromPrimitives ({ id, original, short }: Primitives<Link>): Link {
    return new Link(id, original, new LinkShort(short))
  }

  toString (): string {
    return JSON.stringify({ id: this.id, original: this.original, short: this.short })
  }
}
