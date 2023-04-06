const { getUserByToken, getUserWorkouts, deleteUser } = require('../controller/user')
const { authenticate } = require('../middleware/authenticate')

const user = (app) => {
  
  app.get('/user/token', authenticate, getUserByToken)
  app.get('/:userId/workouts', getUserWorkouts)
  app.delete('/user/deactivate', authenticate, deleteUser)

}

module.exports = user