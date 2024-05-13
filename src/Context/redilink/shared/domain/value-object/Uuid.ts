import { v4 as uuid, validate } from 'uuid'
// import validate from 'uuid-validate'
import { ValueObject } from './ValueObject'
import { InvalidArgumentError } from './InvalidArgumentError'

export class Uuid extends ValueObject<string> {
  constructor (value: string) {
    super(value)
    this.ensureIsValidUuid(value)
  }

  static random (): Uuid {
    return new Uuid(uuid())
  }

  private ensureIsValidUuid (id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`value '${id}' is not a valid uuid`)
    }
  }
}