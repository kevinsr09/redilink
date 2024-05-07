import { type Router } from 'express'
import { validateReqSchema } from '.'
import { body } from 'express-validator'
import { LinkCreator } from '@/application/Link/create/LinkCreate'
import httpStatus from 'http-status'

const reqSchema = [
  body('url').isURL().withMessage('Invalid URL'),
  body('shorturl').optional().isString().isLength({ min: 3, max: 7 }).withMessage('Must be between 3 and 7 characters')

]
export const register = (router: Router): void => {
  router.post('/links', validateReqSchema(reqSchema), async (req, res) => {
    const shortUrl = req.body.shorturl as string | undefined
    const url = req.body.url as string
    await new LinkCreator().run(url, shortUrl)

    res.sendStatus(+httpStatus.CREATED)
  })
}
