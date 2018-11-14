import { Router } from 'express'
import validate from 'express-validation'

import * as postController from '../controllers/post'
import { authJwt } from '../services/auth'
import postValidation from '../helpers/post.validation'

const routes = new Router()

routes.post(
  '/',
  authJwt,
  validate(postValidation.createPost),
  postController.createPost,
)

routes.get('/:id', postController.getPostById)

routes.get('/', postController.getPostsList)

routes.patch(
  '/:id',
  authJwt,
  validate(postValidation.updatePost),
  postController.updatePost,
)

routes.delete('/:id', authJwt, postController.deletePost)

export default routes
