const { showUserById, showUserWorkouts } = require('../service/user')

exports.getUserByToken = async (req, res) => {
  
  try {

    const userByToken = await showUserById(req.userId)
    
    return res.json(userByToken)
  
  } catch (error) {
    return res.status(500).send("Internal Server Error")
  }
}

exports.getUserWorkouts = async (req, res) => {
  
  const userId = req.params.userId
  
  try {
    const result = await showUserWorkouts(userId)

    if ( result === undefined || result.length === 0){
      return res.status(400).send({message: `User ID ${userId} does not exist or does not have any workout data.`})
    }

    return res.json(result)
  
  } catch (error) {
    console.log(error)
    return res.status(500).send("Internal Server Error")
  }
}