import { ValueObject } from '../../shared/value-object/ValueObject'

export class LinkOriginal extends ValueObject<string> {
  private readonly patronURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(:[0-9]{1,5})?(\/[\w/.-]*)*(\?[^\s]*)?$/

  private constructor (value: string) {
    super(value)
    this.ensureIsValidUrl(value)
  }

  static create (value: string): LinkOriginal {
    return new LinkOriginal(value)
  }

  private ensureIsValidUrl (value: string): void {
    if (!this.patronURL.test(value)) {
      throw new Error('Invalid URL')
    }
  }
}
