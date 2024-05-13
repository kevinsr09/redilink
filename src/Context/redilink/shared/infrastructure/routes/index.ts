import { type Router } from 'express'
import type express from 'express'
import { validationResult, type ContextRunner } from 'express-validator'
import { sync as globSync } from 'glob'
import httpStatus from 'http-status'
export const validateReqSchema = (validations: ContextRunner[]) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    for (const validation of validations) {
      const result = await validation.run(req)
      if (result.array().length > 0) break
    }

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      next(); return
    }

    res.status(+httpStatus.BAD_REQUEST).json({ errors: errors.array() })
  }
}

export function registerRoutes (router: Router): void {
  const routes: string[] = globSync(__dirname + '/**/*.route.*')
  routes.forEach(route => { void register(route, router) })
}

const register = async (routePath: string, router: Router): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const route = require(routePath)
  route.register(router)

  // const route: { register: (router: Router) => void } = await import(routePath)

  // route.register(router)
}
