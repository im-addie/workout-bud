const knex = require('../knex.js')

exports.showAllExercises = async () => {

  return await knex('exercises')

}

exports.showExerciseBymuscle = async (muscleInput) => {

  return await knex('exercises').where('muscleGroup', muscleInput)

}