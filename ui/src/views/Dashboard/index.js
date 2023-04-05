import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { isUserLoggedIn, getToken } from '../../utility/utils'
import { getUser } from '../../utility/api'

function Dashboard() {
  const [workoutData, setWorkoutData] = useState([])
  const [user, setUser] = useState(null);

  // Get user data from API
  useEffect(() => {
    // check if the user is logged in
    if (isUserLoggedIn()) {
      // get token
      const token = getToken()
      // fetch user's data
      getUser(token)
        .then((data) => setUser(data))
        
        .catch((error) => console.log(error))
    }
  
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9000/${user?.id}/workouts`)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setWorkoutData(result)) // set state when the data received
      .catch(err => err) // return the error
  }, [user])

  const navigate = useNavigate()

  useEffect(() => {
    if(!isUserLoggedIn()) {
      navigate('/login')
    }

  }, [])

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      mt='50px'
    >
      
      <Grid item xs={6} ml='125px'>
        <Typography variant='h4' fontWeight='bold'>
          RECENT ACTIVITY
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Button component={Link} to='/log-workout' variant='contained' fontWeight='bold'>
          <Typography fontWeight='bold'>
            LOG WORKOUT
          </Typography>
        </Button>
      </Grid>
    
      <Grid item xs={7} mt='15px' ml='125px'>

        {workoutData.map((workout) => (
        <Card sx={{borderRadius: '15px', boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.3)', mb: '45px'}}>
          <CardContent>
            
            <Typography variant='h6' fontWeight='bold'>
              {workout.loggedExercises[0].muscleGroup}
            </Typography>

            <Typography>
              {workout.dateOfWorkout}
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight: 'bold'}}>Exercise</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}}>Weight</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}}>Reps</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {workout.loggedExercises.map((exercise) => (
                    <TableRow
                      key={exercise.name}
                    >
                      <TableCell component="th" scope="row" width='350px'>{exercise.name}</TableCell> 
                      <TableCell>{exercise.weight}</TableCell>
                      <TableCell>{exercise.reps}</TableCell>
                    
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </TableContainer>
          
          </CardContent>
        </Card>
        ))}
      
      </Grid>
    
    </Grid>
  )
}

export default Dashboard