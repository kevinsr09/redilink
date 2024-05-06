import { LinkOriginal } from './LinkOriginal'
import { LinkShortened } from './LinkShortened'

export class Link {
  private readonly _original: LinkOriginal
  private readonly _shortened: LinkShortened

  private constructor (original: string, shortened?: string) {
    this._original = LinkOriginal.create(original)
    this._shortened = (shortened != null) ? LinkShortened.create(shortened) : LinkShortened.random()
  }

  static create (original: string, shortened?: string): Link {
    return new Link(original, shortened)
  }

  get original (): string {
    return this._original.value
  }

  get shortened (): string {
    return this._shortened.value
  }

  toString (): string {
    return JSON.stringify({ original: this.original, shortened: this.shortened })
  }
}
