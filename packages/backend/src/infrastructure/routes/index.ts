import { ShortenedCreator } from '@/application/Shortened/Create'
import { type Router } from 'express'

import type express from 'express'
import { body, validationResult, type ContextRunner } from 'express-validator'
// can be reused by many routes

// sequential processing, stops running validations chain if the previous one fails.
const validate = (validations: ContextRunner[]) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    for (const validation of validations) {
      const result = await validation.run(req)
      if (result.array().length > 0) break
    }

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      next(); return
    }

    res.status(400).json({ errors: errors.array() })
  }
}

export const registerRoutes = (router: Router): void => {
  router.get('/health', (_, res) => res.sendStatus(200))
  router.post('/short-url', validate([
    body('url').isURL().withMessage('Invalid URL'),
    body('shorturl').isString().isLength({ min: 3, max: 10 }).withMessage('Must be between 3 and 10 characters')

  ]), async (req, res) => {
    const shortUrl = req.body.shorturl as string
    const url = req.body.url as string
    await new ShortenedCreator().run(url, shortUrl)

    res.sendStatus(201)
  })
}

/*

*/
