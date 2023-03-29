const { showUserByUsername  } = require('../service/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return res.status(401).json({ message: 'Invalid authorization header' })
  }

  const credentials = Buffer.from(authHeader.slice(6), 'base64').toString().split(':')
  const [username, password] = credentials

  const user = await showUserByUsername(username)

  // If the user isn't found or the password is incorrect, return an error
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ message: 'Invalid username or password' })
  }

  // Create a JWT and send it back to the client
  const token = jwt.sign({ id: user.user_id }, process.env.SECRET_KEY)
  res.json({ token })
}