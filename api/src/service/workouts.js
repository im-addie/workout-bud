const knex = require('../knex')
const bcrypt = require('bcrypt')

exports.addWorkout = async (workoutData, userId, date) => {

  // insert a row into workout
    // includes workout_id, user_id, date of workout
  const workoutId = await knex('workouts').insert({user_id: userId, dateOfWorkout: date}).select('id')
  // returns the newly created workoutId

  // using that newly created workout ID, insert the logged exercise data
    // includes workout id, exercise id, weight, reps
  const result = await Promise.all(workoutData.map(async (workout) => {

    return await knex('loggedExercises').insert(
      {
        workout_id: workoutId[0], 
        exercise_id: workout.exercise_id, 
        weight: workout.weight,
        reps: workout.reps
      })
  }))

  return result
}