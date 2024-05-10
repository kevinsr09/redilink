import { type Router } from 'express'
import { validateReqSchema } from '..'
import { body } from 'express-validator'
import { LinkCreator } from '@/application/Link/create/LinkCreate'
import httpStatus from 'http-status'
import { LinkShort } from '@/domain/Link/LinkShort'
import { PrismaLinkRepository } from '../../persistence/pisma/PrismaLinkRepository'
import { LinkFinder } from '@/application/Link/find/LinkFinder'

const reqSchema = [
  body('url').isURL().withMessage('Invalid URL'),
  body('shorturl').optional().isString().isLength({ min: LinkShort.MIN_LENGTH, max: LinkShort.MAX_LENGTH }).withMessage(`Must be between ${LinkShort.MIN_LENGTH} and ${LinkShort.MAX_LENGTH} characters`),
  body('id').isUUID().withMessage('Invalid Uuuid format')

]

const prismaLinkRepository = new PrismaLinkRepository()

export const register = (router: Router): void => {
  router.get('/api/links/:id', async (req, res) => {
    const id = req.params.id
    const link = await new LinkFinder(prismaLinkRepository).run(id)
    if (link == null) {
      res.sendStatus(+httpStatus.NOT_FOUND)
    } else {
      res.json(link)
    }
  })
  router.post('/api/links', validateReqSchema(reqSchema), async (req, res) => {
    const short = req.body.shorturl as string | undefined
    const original = req.body.url as string
    const id = req.body.id as string
    await new LinkCreator(prismaLinkRepository).run(id, original, short)

    res.sendStatus(+httpStatus.CREATED)
  })
}
