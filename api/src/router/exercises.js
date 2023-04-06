const { getAllExercises, getExerciseByMuscle, getExerciseById } = require('../controller/exercises')


const exercises = (app) => {

  app.get('/exercises', getAllExercises)
  app.get('/exercises/:muscle', getExerciseByMuscle)
  app.get('/exercises/id/:exerciseId', getExerciseById)

}

module.exports = exercises