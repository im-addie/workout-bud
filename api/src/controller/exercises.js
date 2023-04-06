const { showAllExercises, showExerciseBymuscle, showExerciseById } = require("../service/exercises")

exports.getAllExercises = async (req, res) => {
  
  try {
    
    return res.json(await showAllExercises())
  
  } catch (error) {
    console.log(error)
    return res.status(500).send("Internal Server Error")
  }
}

exports.getExerciseByMuscle = async (req, res) => {

  const muscleInput = req.params.muscle
  
  try {

    const result = await showExerciseBymuscle(muscleInput)

    if (result.length === 0) {
      return res.status(400).json({message: `No data available for ${muscleInput}.`})
    }
    
    return res.json(result)
  
  } catch (error) {
    console.log(error)
    return res.status(500).send("Internal Server Error")
  }
}

exports.getExerciseById = async (req, res) => {

  const input = req.params.exerciseId
  
  try {

    const result = await showExerciseById(input)

    if (result.length === 0) {
      return res.status(400).json({message: `No data available for exercise ID ${input}.`})
    }
    
    return res.json(result)
  
  } catch (error) {
    console.log(error)
    return res.status(500).send("Internal Server Error")
  }
}