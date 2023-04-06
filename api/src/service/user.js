const knex = require('../knex')
const bcrypt = require('bcrypt')
const { dateFormatter } = require('../utility/utils')

exports.showUserByEmail= async (email) => {
  // Find the first user in the database with the email
  const user = await knex('users').where('email', email).first()
  return user
}

exports.createUser = async (userData) => {

  const {email, password} = userData

  // Hash the password with 10 rounds of salt
  const hash = await bcrypt.hash(password, 10)

  // Insert the user into the database
  const result = await knex('users').insert({
    ...userData,
    email: email,
    password: hash //store the hash. DO NOT store a plaintext password!
  })

  // Get the newly created user
  const user = await knex('users').select('*').where('id', result[0]).first()
  return user
}

exports.showUserById = async (userId) => {
  const user = await knex('users').where('id', userId).first()
  return user
}

exports.showUserWorkouts = async (userId) => {
  const query = await knex('users')
    .where('user_id', userId)
    .join('workouts', 'users.id', '=', 'workouts.user_id')
    .join('loggedExercises', 'workouts.id', '=', 'loggedExercises.workout_id')
    .join('exercises', 'loggedExercises.exercise_id', '=', 'exercises.id')
    .orderBy('dateOfWorkout', 'desc')
    .select('user_id', 'workout_id', 'dateOfWorkout', 'exercise_id', 'muscleGroup', 'exercises.name', 'reps', 'weight')

  /*
  
  Output  - An array of objects. In each index, it has a user_id, workout_id, dateOfWorkout, and loggedExercises
            - loggedExercises is an array of objects. in each index it has a muscleGroup, name (of exercise), reps and weight
  Input   - An array of objects from the Knex query. It has repeating workout IDs, user IDs and dates but they all have different exercises.

  - There are objects that have the same workout_id and I want to condense that information down so that they all sit in one object
  - In the output, Each workout_id would only exist in one single object.
  - In that object, there is an key called "loggedExercises" which is an array of objects that include muscleGroup, name (of exercise), reps and weight
  - I need to get the loggedExercises data from each duplicated object and place it in the one object
    
  */

  // create an array to store the result
  const result = [{
    user_id: query.user_id,
    workout_id: query.workout_id,
    dateOfWorkout: query.dateOfWorkout,
    loggedExercises: [
      {
        exercise_id: query.exercise_id,
        muscleGroup: query.muscleGroup,
        name: query.name,
        reps: query.reps,
        weight: query.weight
      }
    ]
  }]

  // loop through query
  query.map((query) => {

    // Output - get the logged exercise data from the query
    // Input - access to the query

    // check if the current workout id from the element matches an id in an existing object in the results array          
    const index = result.findIndex((element) => {
      return element.workout_id === query.workout_id
    })

    if (index === -1) {
      // if there is no match, push a workout object in the results array that contains user_id, workout_id, dateOfWorkout, and loggedExercises
      result.push({
        user_id: query.user_id,
        workout_id: query.workout_id,
        dateOfWorkout: dateFormatter(query.dateOfWorkout),
        loggedExercises: [
          {
            exercise_id: query.exercise_id,
            muscleGroup: query.muscleGroup,
            name: query.name,
            reps: query.reps,
            weight: query.weight
          }
        ]
      })
    }

    // if there is a match,
     // push logged exercise data in the loggedExercises array in the element with that index in the results array
    if (index !== -1) {
      result[index].loggedExercises.push({
        exercise_id: query.exercise_id,
        muscleGroup: query.muscleGroup,
        name: query.name,
        reps: query.reps,
        weight: query.weight
      })
    }

  })

  // using shift function because the first item of the array is not valid data and shift removes that data
  result.shift()

  return result
}