import mongoose, { Schema } from 'mongoose'
import validator from 'validator'

import { passwordReg } from '../helpers/user.validation'

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required!'],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email)
      },
      message: '{VALUE} is not a valid email'
    }
  },
  userName: {
    type: String,
    required: [true, 'UserName is required!'],
    trim: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, 'First Name is required!'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required!'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minlength: [6, 'Password should be longer!'],
    validate: {
      validator(password) {
        return passwordReg.test(password)
      },
      message: '{VALUE} is not a valid password!'
    }
  }
})

export default mongoose.model('User', UserSchema)