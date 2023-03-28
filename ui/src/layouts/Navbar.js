import { React, Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* big screen logo */}
          <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link} to='/'
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
          <FitnessCenterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link} to='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
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
          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{ p: 0 }}>
              <Typography color='white' component={Link} to='/login' textDecoration='none'>
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