import { type MinimizedURLUrl } from './MinimizedURLUrl'

export class MinimizedURL {
  private readonly _originalURL: MinimizedURLUrl
  private readonly _minimizedURL: string

  private constructor (originalURL: string, minimizedURL: string) {
    this._originalURL = new MinimizedURL(originalURL)
    this._minimizedURL = minimizedURL
  }

  static create (originalURL: string, minimizedURL: string): MinimizedURL {
    return new MinimizedURL(originalURL, minimizedURL)
  }

  originalURL (): string {
    return this._originalURL.value
  }

  minimizedURL (): string {
    return this._minimizedURL
  }

  toString (): string {
    return this._minimizedURL
  }
}
