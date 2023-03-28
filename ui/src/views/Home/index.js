import React from 'react'
import { Link } from "react-router-dom";
import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

function Home() {
  return (
    <Grid 
      mt='40px'
      pl='150px'
      pr='150px'
    >

      <Grid item>
        {/* logo */}
      </Grid>

      {/* first section */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      > 

        <Grid item xs={6}> {/* text */}
          <Box width='500px'>
            <Typography variant='h4' fontWeight='bold'> {/* heading text */}
              Workouts don't have to be alone.
            </Typography>
            <Typography>
              Need someone to help you with your workouts? Workout Bud helps you track your progress and reach your goals.
            </Typography>
            <Box align='center' mt='2px'>
              <Button component={Link} to='/register' variant='contained' sx={{fontWeight: 'bold', mt: '5px'}}>
                <Typography fontWeight='bold'>
                  Start your journey today
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6}> {/* photo of logging page */}
          <Box
            component="img"
            sx={{ width: '525px', height:'300px', boxShadow: '3px 2px 7px rgb(0, 0, 0, 0.3)', borderRadius: '5px' }}
            alt='workout photo'
            src='/placeholder.jpeg'
          />
        </Grid>

      </Grid>

      {/* second section */}
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt='75px'
      > 

        <Grid item xs={6}> {/* icons/photos of features */}
          <Box
            component="img"
            sx={{ width: '525px', height:'300px', boxShadow: '3px 2px 7px rgb(0, 0, 0, 0.3)', borderRadius: '5px' }}
            alt='workout photo'
            src='/placeholder.jpeg'
          />
        </Grid>

        <Grid item xs={6}> {/* text */}
          <Box width='500px'>
            <Typography variant='h4' fontWeight='bold'> {/* heading text */}
              Our tools will do the hard work.
            </Typography>
            <Typography>
              With easy to use features, tracking your progress has never been so simple.
            </Typography>
          </Box>
        </Grid>

      </Grid>

      {/* third section */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt='75px'
      > 

        <Grid item xs={6}> {/* photo */}
         
        </Grid>

        <Grid item xs={6}> {/* text */}
          <Box width='500px' align='center'>
            <Typography variant='h4' fontWeight='bold'> {/* heading text */}
              Become the better you.
            </Typography>
            <Typography>
            Join today and start tracking your workouts!
            </Typography>
            <Button component={Link} to='/register' variant='contained' mt='5px' sx={{fontWeight: 'bold', mt: '5px'}}>
              <Typography fontWeight='bold' fontSize='20px'>
                create an account
              </Typography>
            </Button>
          </Box>
        </Grid>

      </Grid>

    </Grid>
  )
}

export default Home