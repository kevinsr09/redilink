import { type Router } from 'express'
import { validateReqSchema } from '..'
import { body } from 'express-validator'
import httpStatus from 'http-status'
import { LinkShort } from '@/domain/Link/LinkShort'
import { commandBus, queryBus } from '@/infrastructure/dependency-injection'
import { type FindLinkResponse } from '@/application/Link/find/FindLinkResponse'
import { FindLinkQuery } from '@/application/Link/find/FindLinkQuery'
import { CreateLinkCommand } from '@/application/Link/create/CreateLinkCommand'

const reqSchema = [
  body('url').isURL().withMessage('Invalid URL'),
  body('shorturl').optional().isString().isLength({ min: LinkShort.MIN_LENGTH, max: LinkShort.MAX_LENGTH }).withMessage(`Must be between ${LinkShort.MIN_LENGTH} and ${LinkShort.MAX_LENGTH} characters`)

]

export const register = (router: Router): void => {
  router.get('/api/links/:id', async (req, res) => {
    const id = req.params.id
    const { link } = await queryBus.ask<FindLinkResponse>(new FindLinkQuery(id))

    res.json(link)
  })
  router.post('/api/links', validateReqSchema(reqSchema), async (req, res) => {
    const short = req.body.shorturl
    const original = req.body.url
    const command = new CreateLinkCommand({ original, short })
    await commandBus.dispatch(command)
    res.sendStatus(+httpStatus.CREATED)
  })
}
