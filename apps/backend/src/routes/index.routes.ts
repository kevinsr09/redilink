import { type Router, static as _static } from 'express'
import { PrismaLinkRepository } from '@redilink/core/dist/shared/infrastructure/persistence/pisma/PrismaLinkRepository'
import { indexGetController } from '../dependency-injection'

export const prismaLinkRepository = new PrismaLinkRepository()
export const register = (router: Router): void => {
  router.use('/app', _static(__dirname + '/../public'))
  router.get('/:short', indexGetController.run.bind(indexGetController))
}
