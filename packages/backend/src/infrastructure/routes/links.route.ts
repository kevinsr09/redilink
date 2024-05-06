import { type Router } from 'express'
import { validateReqSchema } from '.'
import { body } from 'express-validator'
import { LinkCreator } from '@/application/Link/create/LinkCreate'

const reqSchema = [
  body('url').isURL().withMessage('Invalid URL'),
  body('shorturl').optional().isString().isLength({ min: 3, max: 10 }).withMessage('Must be between 3 and 10 characters')

]
export const register = (router: Router): void => {
  router.post('/shortened', validateReqSchema(reqSchema), async (req, res) => {
    const shortUrl = req.body.shorturl as string | undefined
    const url = req.body.url as string
    await new LinkCreator().run(url, shortUrl)

    res.sendStatus(201)
  })
}
