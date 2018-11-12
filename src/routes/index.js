import userRoutes from './user'

export default app => {
  app.use('/api/users', userRoutes)
}