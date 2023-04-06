const { createWorkout } = require('../controller/workouts')
const { authenticate } = require('../middleware/authenticate')

const workouts = (app) => {

  app.post('/workouts', authenticate, createWorkout)

}

module.exports = workouts