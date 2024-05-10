import { type Primitives } from '../shared/types'
import { LinkOriginal } from './LinkOriginal'
import { LinkShort } from './LinkShort'

export class Link {
  private readonly _original: LinkOriginal
  private readonly _short: LinkShort

  private constructor (original: string, short?: string) {
    this._original = LinkOriginal.create(original)
    this._short = (short != null) ? new LinkShort(short) : LinkShort.random()
  }

  static create (id: string, original: string, short?: string): Link {
    return new Link(original, short)
  }

  get original (): string {
    return this._original.value
  }

  get short (): string {
    return this._short.value
  }

  static fromPrimitives ({ original, short }: Primitives<Link>): Link {
    return new Link(original, short)
  }

  toString (): string {
    return JSON.stringify({ original: this.original, short: this.short })
  }
}
