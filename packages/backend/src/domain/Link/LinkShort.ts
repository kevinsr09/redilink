import { LinkShortInvalidFormat } from './LinkShortInvalidFormat'
import { LinkShortInvalidLength } from './LinkShortInvalidLength'

export class LinkShort {
  private readonly pattern = /^[a-zA-Z0-9]+$/

  public readonly value: string

  private constructor (value: string) {
    this.ensureIsValidShortenedUrl(value)
    this.value = value
  }

  static create (value: string): LinkShort {
    return new LinkShort(value)
  }

  static random (): LinkShort {
    return new LinkShort(Math.random().toString(36).substring(2, 9))
  }

  private ensureIsValidShortenedUrl (url: string): void {
    if (!this.pattern.test(url)) {
      throw new LinkShortInvalidFormat()
    }
  }

  private ensureLengthIsValid (short: string): void {
    if (short.length > 7 || short.length < 3) {
      throw new LinkShortInvalidLength()
    }
  }
}
