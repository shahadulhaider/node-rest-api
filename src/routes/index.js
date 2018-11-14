import userRoutes from './user'
import postRoutes from './post'

export default app => {
  app.use('/api/users', userRoutes)
  app.use('/api/posts', postRoutes)
}
