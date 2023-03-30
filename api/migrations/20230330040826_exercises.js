/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('exercises', function(table) {
    
    table.increments('id')
      .primary()
      .unsigned()
      .unique()
      .notNullable()
    table.enu('muscleGroup', ["Back", "Biceps", "Chest", "Triceps", "Shoulders", "Legs"]).notNullable()
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.string('equipment').notNullable() // if an exercise needs no equipment, just display it as "none"
    table.string('image')
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
 return knex.schema.dropTableIfExists('exercises')
};
