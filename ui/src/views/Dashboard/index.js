import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const loggedExercises = [
  {
    id: 1,
    workout_id: 1,
    name: 'T-Bar row',
    weight: '90 lbs',
    reps: 12
  },
  {
    id: 2,
    workout_id: 1,
    name: 'Dumbbell curls',
    weight: '20 lbs',
    reps: 15
  },
  {
    id: 3,
    workout_id: 1,
    name: 'Lat pulldown',
    weight: '100 lbs',
    reps: 12
  },
  {
    id: 4,
    workout_id: 1,
    name: 'Hammer curls',
    weight: '15 lbs',
    reps: 12
  }
]

const workouts = [
  {
    id: 1,
    name: 'Back and Biceps Day',
    date: 'March 30, 2023'
  },
  {
    id: 2,
    name: 'Chest and Triceps Day',
    date: 'March 29, 2023'
  }
]

function Dashboard() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      mt='50px'
      ml='125px'
    >
      
      <Grid item xs={6}>
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
    
      <Grid item xs={7} mt='15px'>

        {workouts.map((workout) => (
        <Card sx={{borderRadius: '15px', boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.3)', mb: '45px'}}>
          <CardContent>
            
            <Typography variant='h6' fontWeight='bold'>
              {workout.name}
            </Typography>

            <Typography>
              {workout.date}
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell component='Typography' sx={{fontWeight: 'bold'}}>Exercise</TableCell>
                    <TableCell component='Typography' sx={{fontWeight: 'bold'}}>Weight</TableCell>
                    <TableCell component='Typography' sx={{fontWeight: 'bold'}}>Reps</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {loggedExercises.map((exercise) => (
                    <TableRow
                      key={exercise.name}
                    >
                      <TableCell component="th" scope="row">
                        {exercise.name}
                      </TableCell>
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