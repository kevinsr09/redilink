import { ValueObject } from '../shared/ValueObject'

export class LinkOriginal extends ValueObject {
  public readonly value: string
  private readonly patronURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(:[0-9]{1,5})?(\/[\w/.-]*)*(\?[^\s]*)?$/

  private constructor (url: string) {
    super()
    this.ensureIsValidUrl(url)
    this.value = url
  }

  static create (url: string): LinkOriginal {
    return new LinkOriginal(url)
  }

  private ensureIsValidUrl (url: string): void {
    if (!this.patronURL.test(url)) {
      throw new Error('Invalid URL')
    }
  }
}
