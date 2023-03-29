const { showUserByEmail, createUser  } = require('../service/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return res.status(401).json({ message: 'Invalid authorization header' })
  }

  const credentials = Buffer.from(authHeader.slice(6), 'base64').toString().split(':')
  const [email, password] = credentials

  const users = await showUserByEmail(email)

  // If the user isn't found or the password is incorrect, return an error
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  // Create a JWT and send it back to the client
  if(!users.id) {
    throw new Error('No user ID with the key "id" provided. verify that the database schema uses the correct column name.')
  }
  
  const token = jwt.sign({ id: users.id }, process.env.SECRET_KEY)
  res.json({ token })
}

exports.register = async (req, res) => {
  try {
    const userData = req.body

    if (userData.email === "" || userData.email === null) {
      return res.status(406).json({message: "Email was not provided."})
    }

    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm")
    const isValidEmail = emailRegex.test(userData.email)
    if(isValidEmail === false){
      return res.status(406).json({message: "Email is invalid."})
    }
    
    if (userData.name === "" || userData.name === null) {
      return res.status(406).json({message: "Name was not provided."})
    }

    if (userData.password === "" || userData.password === null) {
      return res.status(406).json({message: "Password was not provided."})
    }

    if (userData.password.length < 8){
      return res.status(406).json({message: "Password is too short."})
    }

    const passwordRegex = new RegExp(/\d/)
    const passwordHasNumber = passwordRegex.test(userData.password)
    if (passwordHasNumber === false){
      return res.status(406).json({message: "Password does not contain a number."})
    }

    const users = await createUser(userData)
    
    // Create a JWT and send it back to the client
    if(!users.id) {
      throw new Error('No user ID with the key "id" provided. verify that the database schema uses the correct column name.')
    }

    const token = jwt.sign({ id: users.id }, process.env.SECRET_KEY)
    return res.json({ token })

  } catch (error) {
    console.log(error)

    if(error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({message: "Account already exists."})
    }

    return res.status(500).json({message: "Internal Server Error"})
  }
}