import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Paper from '@mui/material/Paper';

const Footer = () => {
  return (
    <Box mt='50px'>
      <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, mt: 'auto' }} elevation={3}>

        <BottomNavigation>

          <Grid sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>

            <FitnessCenterIcon />

            <Typography
              sx={{
                fontFamily: 'impact',
                letterSpacing: '.1rem',
                fontSize: '26px',
              }}
            >
              WORKOUT BUD
            </Typography>

          </Grid>

        </BottomNavigation>

      </Paper>
    </Box>
  );
};

export default Footer