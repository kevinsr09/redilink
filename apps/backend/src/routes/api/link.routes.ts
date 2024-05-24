import { type Router } from 'express'
import { validateReqSchema } from '..'
import { body } from 'express-validator'

import { linkGetController, linkPostController } from '../../dependency-injection'
import { LinkShort } from '@redilink/core'

const reqSchema = [
  body('url').isURL().withMessage('Invalid URL'),
  body('shorturl').optional().isString().isLength({ min: LinkShort.MIN_LENGTH, max: LinkShort.MAX_LENGTH }).withMessage(`Must be between ${LinkShort.MIN_LENGTH} and ${LinkShort.MAX_LENGTH} characters`)

]

export const register = (router: Router): void => {
  router.get('/api/links/:short', linkGetController.run.bind(linkGetController))
  router.post('/api/links', validateReqSchema(reqSchema), linkPostController.run.bind(linkPostController))
}
