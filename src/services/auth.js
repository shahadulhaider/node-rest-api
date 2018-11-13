import passport from 'passport'
import LocalStrategy from 'passport-local'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'

import User from '../models/user'
import constants from '../config/constants'

passport.use(
  new LocalStrategy({
    usernameField: 'email'
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email })

      if (!user) {
        return done(null, false)
      } else if (!user.authenticateUser(password)) {
        return done(null, false)
      }

      return done(null, user)
    } catch (e) {
      return done(e, false)
    }
  })
)

passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: constants.JWT_SECRET,
  }, async (payload, done) => {
    try {
      const user = await User.findById(payload._id)

      if (!user) {
        return done(null, false)
      }

      return done(null, user)
    } catch (e) {
      return done(e, false)
    }
  })
)

export const authLocal = passport.authenticate('local', { session: false })
export const authJwt = passport.authenticate('jwt', { session: false })