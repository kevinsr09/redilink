import { type Router, static as _static } from 'express'
import { indexGetController } from '../dependency-injection'
import { PrismaLinkRepository } from '@redilink/core'
export const prismaLinkRepository = new PrismaLinkRepository()
export const register = (router: Router): void => {
  router.use('/app', _static(__dirname + '/../public'))
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  router.get('/:short', indexGetController.run.bind(indexGetController))
}
