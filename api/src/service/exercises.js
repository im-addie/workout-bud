const knex = require('../knex.js')

exports.showAllExercises = async (email) => {

  return await knex('exercises')

}