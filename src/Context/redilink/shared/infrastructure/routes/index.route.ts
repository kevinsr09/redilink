import { type Router } from 'express'
import { PrismaLinkRepository } from '../persistence/pisma/PrismaLinkRepository'
import { linkFinder } from '../dependency-injection'

export const prismaLinkRepository = new PrismaLinkRepository()
export const register = (router: Router): void => {
  router.get('/:short', async (req, res) => {
    const short = req.params.short
    // const link = await new LinkFinder(prismaLinkRepository).run(short)
    const link = await linkFinder.run(short)
    res.redirect(link.original)
  })
}
