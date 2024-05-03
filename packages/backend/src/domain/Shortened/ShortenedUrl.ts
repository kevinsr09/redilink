import { ValueObject } from '../shared/ValueObject'

export class ShortenedUrl extends ValueObject {
  public readonly value: string
  private readonly patronURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(:[0-9]{1,5})?(\/[\w/.-]*)*(\?[^\s]*)?$/

  constructor (url: string) {
    super()
    this.ensureIsValidUrl(url)
    this.value = url
  }

  private ensureIsValidUrl (url: string): void {
    if (!this.patronURL.test(url)) {
      throw new Error('Invalid URL')
    }
  }
}
