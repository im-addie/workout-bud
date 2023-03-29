const knex = require('../knex')
const bcrypt = require('bcrypt')

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