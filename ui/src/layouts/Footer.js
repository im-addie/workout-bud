import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';

const Footer = () => {
  return (
    <Box mt='50px'>
      <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, mt: 'auto' }} elevation={3}>
        
        <BottomNavigation>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>

      </Paper>
    </Box>
  );
};

export default Footer