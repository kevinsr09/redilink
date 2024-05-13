import { Command } from '../../../domain/shared/Command/Command'

interface Params {
  original: string
  short: string | undefined
}

export class CreateLinkCommand extends Command {
  original: string
  short: string | undefined

  constructor ({ original, short }: Params) {
    super()
    this.original = original
    this.short = short
  }
}
