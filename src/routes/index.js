import userRoutes from './user'
import { authJwt } from '../services/auth'

export default app => {
  app.use('/api/users', userRoutes)
  app.get('/hello', authJwt, (req, res) => {
    res.send('This is a private route!!')
  })
}