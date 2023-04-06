const { register, login, updatePassword } = require('../controller/auth')
const { authenticate } = require('../middleware/authenticate')

const auth = (app) => {

  app.post('/auth/login', login)
  app.post('/auth/register', register)
  app.put('/auth/update-password', authenticate, updatePassword)

}

module.exports = auth
