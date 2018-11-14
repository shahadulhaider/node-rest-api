import mongoose from 'mongoose'

import constants from './constants'

mongoose.Promise = global.Promise

// connect to mongodb
try {
  mongoose.connect(
    constants.MONGO_URL,
    { useNewUrlParser: true },
  )
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e
  })
