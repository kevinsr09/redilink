import { v4 as uuid, validate } from 'uuid'
import { ValueObject } from './ValueObject'
import { InvalidArgumentError } from './InvalidArgumentError'

export class Uuid extends ValueObject<string> {
  constructor (value: string) {
    super(value)
    this.ensureIsValidUuid(value)
  }

  static random (): Uuid {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return new Uuid(uuid())
  }

  private ensureIsValidUuid (id: string): void {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!validate(id)) {
      throw new InvalidArgumentError(`value '${id}' is not a valid uuid`)
    }
  }
}
