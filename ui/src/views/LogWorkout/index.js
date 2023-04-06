import React from 'react'
import { useState, useEffect, Fragment } from 'react'
import { useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { getExerciseByMuscle, getExerciseById, sendWorkoutData } from '../../utility/api'
import { Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import moment from 'moment'
import { getToken, isUserLoggedIn } from '../../utility/utils'

function LogWorkout() {
  const oldLoggedExercises = []

  const [muscle, setMuscle] = useState('')
  const [exercise, setExercise] = useState('')
  const [date, setDate] = useState('')
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loggedExercise, setLoggedExercise] = useState([oldLoggedExercises])
  const [data, setData] = useState([])
  const [exerciseData, setExerciseData] = useState([])
  const [workoutData, setWorkoutData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate('/login')
    }
  }, [])

  const handleMuscle = (event) => {
    setMuscle(event.target.value)
  }

  const handleExercise = (event) => {
    setExercise(event.target.value) // the value is the exercise's ID
  }

  const formattedDate = moment(date).format('YYYY-MM-DD')
  // console.log(formattedDate)

  const handleLog = () => {

    setErrorMsg("")

    if (formattedDate === "Invalid date") {
      return setErrorMsg('Please enter date.')
    }

    if (!weight || weight == " lbs") {
      return setErrorMsg('Please enter weight.')
    }

    if (!reps) {
      return setErrorMsg('Please enter your reps.')
    }

    if (!muscle) {
      return setErrorMsg('Please select muscle group.')
    }

    if (!exercise) {
      return setErrorMsg('Please select exercise.')
    }

    const newData = {
      exercise_id: exerciseData.id,
      muscleGroup: exerciseData.muscleGroup,
      exercise: exerciseData.name,
      reps: reps,
      weight: weight,
    }

    setLoggedExercise([...loggedExercise, newData])

    setWorkoutData([formattedDate, ...loggedExercise])

  }

  const handleFinish = () => {
    const token = getToken()
    sendWorkoutData(token, [formattedDate, ...loggedExercise])
    navigate('/dashboard')
  }

  // gets all the exercises under selected muscle
  useEffect(() => {
    getExerciseByMuscle(muscle)
      .then((result) => setData(result))

      .catch((error) => console.log(error))
  }, [muscle])

  // gets the exercise data for the description and equipment
  useEffect(() => {
    getExerciseById(exercise)
      .then((result) => setExerciseData(result))

      .catch((error) => console.log(error))
  }, [exercise])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>

      <Typography variant='h4' fontWeight='bold' textAlign='center' mt='50px'>
        LOG YOUR WORKOUT
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        mt='25px'
      >

        <Grid item xs={12} ml='150px'>

          <Typography color='red' variant='caption'>{errorMsg}</Typography>

          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >

            <Grid item xs={2.5}>
              <DatePicker
                onChange={(value) => setDate(value)}
              />
            </Grid>

            <Grid item xs={1.75}>
              <TextField
                label="Weight (in lbs)"
                type="number"
                variant="outlined"
                InputProps={{
                  inputProps: { min: 1 }
                }}
                onChange={weight => setWeight(`${weight.target.value} lbs`)}
                sx={{ width: '150px' }} />
            </Grid>

            <Grid item xs={2.5}>
              <TextField
                label="Reps"
                type="number"
                variant="outlined"
                InputProps={{
                  inputProps: { min: 1 }
                }}
                onChange={reps => setReps(reps.target.value)}
                sx={{ width: '100px' }} />
            </Grid>

          </Grid>

        </Grid>

        <Grid item xs={12} mt='20px' ml='150px'>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >

            <Grid item xs={2}>
              <FormControl sx={{ width: '200px' }}>
                <InputLabel>Muscle</InputLabel>
                <Select
                  value={muscle}
                  label="muscle"
                  onChange={handleMuscle}
                >
                  <MenuItem value={"back"}>Back</MenuItem>
                  <MenuItem value={"biceps"}>Biceps</MenuItem>
                  <MenuItem value={"chest"}>Chest</MenuItem>
                  <MenuItem value={"triceps"}>Triceps</MenuItem>
                  <MenuItem value={"shoulders"}>Shoulders</MenuItem>
                  <MenuItem value={"legs"}>Legs</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {!muscle ?
              <Grid item xs={2}>
                <FormControl sx={{ width: '300px' }} disabled>
                  <InputLabel>Exercise</InputLabel>
                  <Select
                    value={exercise}
                    label="exercise"
                    onChange={handleExercise}
                  >
                    {data.map((exercises) => (
                      <MenuItem key={exercises.id} value={`${exercises.id}`}>{exercises.name}</MenuItem>
                    ))}

                  </Select>
                </FormControl>
              </Grid>

              :
              <Grid item xs={6}>
                <FormControl sx={{ width: '300px' }}>
                  <InputLabel>Exercise</InputLabel>
                  <Select
                    value={exercise}
                    label="exercise"
                    onChange={handleExercise}
                  >
                    {data.map((exercises) => (
                      <MenuItem value={`${exercises.id}`}>{exercises.name}</MenuItem>
                    ))}

                  </Select>
                </FormControl>
              </Grid>
            }

          </Grid>
        </Grid>

        <Grid item xs={12} mt='20px' ml='150px'>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              <Typography variant='h5' fontWeight='bold'>
                {exerciseData.name}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              {!exerciseData.muscleGroup ? <div></div> :
                <Typography>
                  <Box fontWeight='bold' display='inline'>Muscle Group:</Box> {exerciseData.muscleGroup}
                </Typography>
              }
            </Grid>

            <Grid item xs={12}>
              {!exerciseData.equipment ? <div></div> :
                <Typography>
                  <Box fontWeight='bold' display='inline'>Equipment:</Box> {exerciseData.equipment}
                </Typography>
              }
            </Grid>

            <Grid item xs={12} mr='250px'>
              <Typography>
                {exerciseData.description}
              </Typography>
            </Grid>

          </Grid>
        </Grid>

        <Grid item xs={12} mt='20px' ml='150px'>
          <Button variant='contained' size='large' onClick={handleLog}>
            <Typography fontWeight='bold'>
              LOG EXERCISE
            </Typography>
          </Button>
        </Grid>

        {loggedExercise.length === 1 ? <div></div> :
          <Grid item xs={6} ml='150px' width='450px' mt='20px'>
            <Card>
              <CardContent>

                <Typography fontWeight='bold' fontSize='20px' textAlign='center'>
                  LOGGED EXERCISES
                </Typography>

                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Exercise</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Weight</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Reps</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {loggedExercise.slice(1).map((exercise) => (
                        <TableRow key={exercise.id}>
                          <TableCell component="th" scope="row" width='200px'>{exercise.exercise}</TableCell>
                          <TableCell>{exercise.weight}</TableCell>
                          <TableCell>{exercise.reps}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>

                  </Table>
                </TableContainer>

              </CardContent>
            </Card>

            <Button variant='contained' size='large' onClick={handleFinish}>
              <Typography fontWeight='bold'>
                FINISH
              </Typography>
            </Button>
          </Grid>
        }

      </Grid>

    </Fragment>
  )
}

export default LogWorkout