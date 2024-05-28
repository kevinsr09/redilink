import { Command } from '@shared/domain/Command/Command'

interface Params {
  id: string
  original: string
  short: string
}

export class CreateLinkCommand extends Command {
  id: string
  original: string
  short: string

  constructor ({ original, short, id }: Params) {
    super()
    this.original = original
    this.short = short
    this.id = id
  }
}
