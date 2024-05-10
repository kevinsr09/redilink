import { type Router } from 'express'
import { PrismaLinkRepository } from '../persistence/pisma/PrismaLinkRepository'
import httpStatus from 'http-status'

import { LinkFinderByLinkShort } from '@/application/Link/find/LinkFinderByLinkShort'

export const prismaLinkRepository = new PrismaLinkRepository()
export const register = (router: Router): void => {
  router.get('/:short', async (req, res) => {
    console.log('short')
    const short = req.params.short
    const link = await new LinkFinderByLinkShort(prismaLinkRepository).run(short)

    if (link == null) {
      res.sendStatus(+httpStatus.NOT_FOUND)
    } else {
      res.redirect(link.original)
    }
  })
}
