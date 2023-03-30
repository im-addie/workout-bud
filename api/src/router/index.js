// import routes
const root = require('./root')
const auth = require('./auth')
const user = require('./user')
const exercises = require('./exercises')

const router = (app) => {

  root(app)
  auth(app)
  user(app)
  exercises(app)

}

module.exports = router