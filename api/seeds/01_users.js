/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const bcrypt = require('bcrypt')

  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: "Josh",
      email: "josh@josh.com",
      password: await bcrypt.hash("josh", 10),
      dateCreated: "2018-10-03 06:27:05"
    }
  ]);
};
