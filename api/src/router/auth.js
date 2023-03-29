const { register, login} = require('../controller/auth')

const auth = (app) => {

  app.post('/auth/login', login)
  app.post('/auth/register', register)

}

module.exports = auth
