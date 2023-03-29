const { showUserById } = require('../service/user')

exports.getUserByToken = async (req, res) => {
  
  try {
    console.log('req:', req.userId)
    const userByToken = await showUserById(req.userId)
    
    return res.json(userByToken)
  
  } catch (error) {
    return res.status(500).send("Internal Server Error")
  }
}