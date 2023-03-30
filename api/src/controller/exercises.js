const { showAllExercises } = require("../service/exercises")

exports.getAllExercises = async (req, res) => {
  
  try {
    
    return res.json(await showAllExercises())
  
  } catch (error) {
    console.log(error)
    return res.status(500).send("Internal Server Error")
  }
}