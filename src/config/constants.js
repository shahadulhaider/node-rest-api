const devConfig = {
  MONGO_URL: 'mongodb://localhost/noderestapi-dev',
  JWT_SECRET: 'thisisatopsecret'
}

const testConfig = {
  MONGO_URL: 'mongodb://localhost/noderestapi-test'
}

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/noderestapi-prod'
}

const defaultConfig = {
  PORT: process.env.PORT || 3000
}

const envConfig = (env) => {
  switch (env) {
  case 'development':
    return devConfig
  case 'test':
    return testConfig
  default:
    return prodConfig
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
}