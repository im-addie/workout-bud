const knex = require('../knex')

exports.showUserByEmail= async (email) => {
  // Find the first user in the database with the email
  const user = await knex('users').where('email', email).first()
  return user
}