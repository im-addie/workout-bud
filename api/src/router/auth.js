const { register, login} = require('../controller/auth')

const auth = (app) => {

  app.post('/auth/login', login)

}

module.exports = auth
