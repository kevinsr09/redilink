import { LinkOriginal } from './LinkOriginal'
import { LinkShort } from './LinkShort'

export class Link {
  private readonly _original: LinkOriginal
  private readonly _short: LinkShort

  private constructor (original: string, shortened?: string) {
    this._original = LinkOriginal.create(original)
    this._short = (shortened != null) ? LinkShort.create(shortened) : LinkShort.random()
  }

  static create (original: string, shortened?: string): Link {
    return new Link(original, shortened)
  }

  get original (): string {
    return this._original.value
  }

  get short (): string {
    return this._short.value
  }

  toString (): string {
    return JSON.stringify({ original: this.original, shortened: this.short })
  }
}
