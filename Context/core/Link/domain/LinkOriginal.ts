/* eslint-disable no-useless-escape */
import { ValueObject } from '../../shared/domain/value-object/ValueObject'

export class LinkOriginal extends ValueObject<string> {
  private readonly patronURL = /^(http(s)?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/

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
