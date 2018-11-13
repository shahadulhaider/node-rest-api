import { Router } from 'express'
import validate from 'express-validation'

import * as postController from '../controllers/post'
import { authJwt } from '../services/auth'
import postValidation from '../helpers/post.validation'

const routes = new Router()

routes.post('/', authJwt, validate(postValidation.createPost), postController.createPost)

export default routes 