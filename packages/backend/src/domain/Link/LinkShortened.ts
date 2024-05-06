export class LinkShortened {
  public readonly value: string

  private constructor (value: string) {
    this.value = value
  }

  static create (value: string): LinkShortened {
    return new LinkShortened(value)
  }

  static random (): LinkShortened {
    return new LinkShortened(Math.random().toString(36).substring(2, 9))
  }
}
