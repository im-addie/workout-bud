const { getAllExercises, getExerciseByMuscle } = require('../controller/exercises')


const exercises = (app) => {

  app.get('/exercises', getAllExercises)
  app.get('/exercises/:muscle', getExerciseByMuscle)

}

module.exports = exercises