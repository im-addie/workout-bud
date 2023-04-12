const { createWorkout, deleteWorkout } = require('../controller/workouts')
const { authenticate } = require('../middleware/authenticate')

const workouts = (app) => {

  app.post('/workouts', authenticate, createWorkout)
  app.delete('/workouts/:workoutId', authenticate, deleteWorkout)

}

module.exports = workouts