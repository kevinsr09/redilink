import { ValueObject } from '../shared/ValueObject'

export class MinimizedLinkUrl extends ValueObject {
  public readonly value: string
  private readonly patronURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(:[0-9]{1,5})?(\/[\w/.-]*)*(\?[^\s]*)?$/

  constructor (url: string) {
    super()
    this.ensureIsValid(url)
    this.value = url
  }

  private ensureIsValid (url: string): void {
    if (!this.patronURL.test(url)) {
      throw new Error('Invalid URL')
    }
  }
}
