import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { UserContext } from '../context/userContext'

function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const navigate = useNavigate()

  const { user, signOut } = useContext(UserContext)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const dashboardClick = () => {
    navigate('/')
    setAnchorEl(null)
  }

  const settingsClick = () => {
    navigate('/settings')
    setAnchorEl(null)
  }

  const LogoutClick = () => {
    signOut()
    navigate('/')
    setAnchorEl(null)
  }

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
          <FitnessCenterIcon sx={{ display: { xs: 'flex', md: 'none' }, ml: '90px', mr: '5px', width: 30, height: 30 }} />
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

          {/* if user is logged in, show Hey, {username}! */}
          {!user ?
          // if user is NOT logged in, show the login button
          // login button
          <Box sx={{ display: { xs: 'flex' }, justifyContent: 'flex-end', flexGrow: 1, mr: '90px' }}>
            <Button component={Link} to='/login' textDecoration='none'>
              <Typography color='white' fontWeight='bold'>
                Login
              </Typography>
            </Button>
          </Box>
          :
            <Box sx={{ display: { xs: 'flex' }, justifyContent: 'flex-end', flexGrow: 1, mr: '90px' }}>
              <Button
                sx={{ textTransform: 'none' }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Typography color='white'>

                  Hey, <Box fontWeight='bold' display='inline'>{user?.name}</Box>!
                </Typography>
              </Button>

              {/* show a dropdown menu that would contain: dashboard, settings, and logout */}
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={dashboardClick}>Dashboard</MenuItem>
                <MenuItem onClick={settingsClick}>Settings</MenuItem>
                <MenuItem onClick={LogoutClick}>Logout</MenuItem>
              </Menu>
            </Box>
          }

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar