import { Router } from 'express'
import validate from 'express-validation'

import * as userController from '../controllers/user'
import userValidation from '../helpers/user.validation'

const router = new Router()

router.post('/signup', validate(userValidation.signup) , userController.signUp)

export default router