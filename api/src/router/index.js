// import routes
const root = require('./root')
const auth = require('./auth')
const user = require('./user')
const exercises = require('./exercises')
const workouts = require('./workouts')

const router = (app) => {

  root(app)
  auth(app)
  user(app)
  exercises(app)
  workouts(app)

}

module.exports = router