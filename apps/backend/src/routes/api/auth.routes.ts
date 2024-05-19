import { type Router } from 'express'
import { body } from 'express-validator'
import { validateReqSchema } from '..'
import httpStatus from 'http-status'
import { userRegistrar } from '../../dependency-injection'

const reqSchema = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isString().isLength({ min: 6, max: 40 }).withMessage('Must be between 6 and 40 characters')

]

export const register = (router: Router): void => {
  router.post('/api/auth', validateReqSchema(reqSchema), async (req, res) => {
    const email = req.body.email as string
    const password = req.body.password as string
    await userRegistrar.run(email, password)

    res.sendStatus(+httpStatus.CREATED)
  })
}
