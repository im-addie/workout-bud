const { getUserByToken } = require('../controller/user')
const { authenticate } = require('../middleware/authenticate')

const user = (app) => {
  
  app.get('/user/token', authenticate, getUserByToken)

}

module.exports = user