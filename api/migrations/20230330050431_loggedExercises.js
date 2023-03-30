/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('loggedExercises', function(table) {
    
    table.increments('id')
      .primary()
      .unsigned()
      .unique()
      .notNullable()
    table.integer('workout_id')
      .references('id')
      .inTable('workouts')
      .unsigned()
      .notNullable()
    table.integer('exercise_id')
      .references('id')
      .inTable('exercises')
      .unsigned()
      .notNullable()
    table.integer('reps') // nullable incase of future additions of exercises without reps
    table.string('weight') // nullable because of workouts that require no weight
  
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('loggedExercises')
};
