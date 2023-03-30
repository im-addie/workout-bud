/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('workouts', function(table) {
    
    table.increments('id')
      .primary()
      .unsigned()
      .unique()
      .notNullable()
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .unsigned()
      .notNullable()
    table.date('dateOfWorkout').notNullable()
  
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workouts')
};
