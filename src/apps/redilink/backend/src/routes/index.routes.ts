import { type Router } from 'express'
import { PrismaLinkRepository } from '../../../../../Context/redilink/shared/infrastructure/persistence/pisma/PrismaLinkRepository'
import { indexGetController } from '../dependency-injection'

export const prismaLinkRepository = new PrismaLinkRepository()
export const register = (router: Router): void => {
  router.get('/:short', indexGetController.run.bind(indexGetController))
}