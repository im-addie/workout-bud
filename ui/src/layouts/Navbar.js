import { React, Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Navbar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* big screen logo */}
          <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, ml: '90px', mr: '5px', width: 30, height: 30 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link} 
            to='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'impact',
              fontWeight: 700,
              letterSpacing: '.1rem',
              fontSize: '26px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WORKOUT BUD
          </Typography>
          
          {/* small screen logo */}
          <FitnessCenterIcon sx={{ display: { xs: 'flex', md: 'none' }, ml: '90px', mr: '5px', width: 30, height: 30  }} />
          <Typography
            variant="h5"
            noWrap
            component={Link} 
            to='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'impact',
              fontWeight: 700,
              letterSpacing: '.1rem',
              fontSize: '26px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WORKOUT BUD
          </Typography>
            
          {/* login button */}
          <Box sx={{ display: { xs: 'flex' }, justifyContent: 'flex-end', flexGrow: 1, mr: '90px'}}>
            <Button component={Link} to='/login' textDecoration='none'>
              <Typography color='white' fontWeight='bold'>
                Login
              </Typography>
            </Button>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar