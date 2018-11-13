import { Router } from 'express'
import validate from 'express-validation'

import * as userController from '../controllers/user'
import userValidation from '../helpers/user.validation'
import { authLocal } from '../services/auth'

const routes = new Router()

routes.post('/signup', validate(userValidation.signup), userController.signUp)
routes.post('/login', authLocal, userController.login)

export default routes