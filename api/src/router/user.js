const { getUserByToken, getUserWorkouts } = require('../controller/user')
const { authenticate } = require('../middleware/authenticate')

const user = (app) => {
  
  app.get('/user/token', authenticate, getUserByToken)
  app.get('/:userId/workouts', getUserWorkouts)

}

module.exports = user