/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
  
    table.increments('id')
      .primary()
      .unsigned()
      .unique()
      .notNullable()
    table.string('email').notNullable().unique()
    table.string('name').notNullable()
    table.string('password').notNullable()
    table.timestamp('dateCreated').notNullable().defaultTo(knex.fn.now())
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
