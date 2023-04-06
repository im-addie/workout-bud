const { addWorkout } = require('../service/workouts')

exports.createWorkout = async (req, res) => {
  
  const workoutData = req.body.slice(2)
  const userId = req.userId
  const date = req.body[0]
  console.log('workoutData:', req.body)

  try {

    const result = addWorkout(workoutData, userId, date)

    return res.json(result)

  } catch (error) {
    console.log(error)
    return res.status(500).send("Internal Server Error")
  }
}