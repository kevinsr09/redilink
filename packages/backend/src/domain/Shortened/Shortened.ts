import { ShortenedUrl } from './ShortenedUrl'

export class Shortened {
  private readonly _originalUrl: ShortenedUrl
  private readonly _shortenedUrl: string

  private constructor (originalUrl: string, shortenedUrl: string) {
    this._originalUrl = new ShortenedUrl(originalUrl)
    this._shortenedUrl = shortenedUrl
  }

  static create (originalUrl: string, shortenedUrl: string): Shortened {
    return new Shortened(originalUrl, shortenedUrl)
  }

  originalUrl (): string {
    return this._originalUrl.value
  }

  shortenedUrl (): string {
    return this._shortenedUrl
  }
}
