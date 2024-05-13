import { ValueObject } from '../../shared/value-object/ValueObject'
import { LinkShortInvalidFormat } from './LinkShortInvalidFormat'
import { LinkShortInvalidLength } from './LinkShortInvalidLength'

export class LinkShort extends ValueObject<string> {
  private readonly pattern = /^[a-zA-Z0-9]+$/
  static readonly MAX_LENGTH = 10
  static readonly MIN_LENGTH = 3

  constructor (value: string) {
    super(value)
    this.ensureIsValidLinkShort(value)
  }

  static random (): LinkShort {
    return new LinkShort(Math.random().toString(36).substring(LinkShort.MIN_LENGTH, LinkShort.MAX_LENGTH))
  }

  private ensureIsValidLinkShort (value: string): void {
    this.ensureIsValidFormat(value)
    this.ensureLengthIsValid(value)
  }

  private ensureIsValidFormat (value: string): void {
    if (!this.pattern.test(value)) {
      throw new LinkShortInvalidFormat()
    }
  }

  private ensureLengthIsValid (value: string): void {
    if (value.length > LinkShort.MAX_LENGTH || value.length < LinkShort.MIN_LENGTH) {
      throw new LinkShortInvalidLength()
    }
  }
}
