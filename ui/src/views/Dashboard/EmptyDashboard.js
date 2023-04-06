import React from 'react'
import { Link } from "react-router-dom"
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button'

function EmptyDashboard() {
  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '80vh' }}
    >

      <Typography variant='h4' sx={{opacity: '50%'}}>
        No workouts yet...
      </Typography>

      <Typography sx={{opacity: '50%', mb: '8px'}}> Start logging! </Typography>
      
      <Button component={Link} to='/log-workout' variant='contained'>
          <Typography fontWeight='bold' fontSize='20px'>
            LOG WORKOUT
          </Typography>
        </Button>

    </Grid>

  )
}

export default EmptyDashboard