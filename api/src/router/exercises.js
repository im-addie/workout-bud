const { getAllExercises } = require('../controller/exercises')


const exercises = (app) => {

  app.get('/exercises', getAllExercises)

}

module.exports = exercises