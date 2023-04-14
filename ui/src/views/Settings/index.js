import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { Card, CardContent, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { updatePassword, deleteAccount } from '../../utility/api'
import { clearToken, getToken, isUserLoggedIn } from '../../utility/utils'

function Settings() {
  const [passwordValue, setPasswordValue] = useState("")
  const [retypePasswordValue, setRetypePasswordValue] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showRetypePassword, setShowRetypePassword] = useState(false)
  const [open, setOpen] = useState(false);

  let navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowPassword = () => setShowPassword(!showPassword)
  const handleShowRetypePassword = () => setShowRetypePassword(!showRetypePassword)

  const handleSubmit = async () => {

    try {
      // console.log('password value:', passwordValue)
      // console.log('retyped password value:', retypePasswordValue)

      if (passwordValue !== retypePasswordValue) {
        return setErrorMsg('Passwords do not match.')
      }

      const token = getToken()
      const data = { password: passwordValue }

      await updatePassword(token, data)

      routeToHome()

    } catch (error) {
      console.log('READ THE ERROR HERE:', error)
      if (error) {
        setErrorMsg(`${error.toString().substr(26)}`)
      }
    }
  }

  const handleDelete = async () => {
    const token = getToken()
    deleteAccount(token)

    clearToken()

    routeToHome()
  }

  const routeToHome = () => {
    navigate('/')

  }

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate('/login')
    }

  }, [])

  return (

    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt='50px'
    >

      <Grid item>
        <Typography sx={{ fontSize: '26px', justifySelf: 'center' }}>
          Settings
        </Typography>
      </Grid>

      <Card sx={{ borderRadius: '20px', boxShadow: '3px 2px 7px rgb(0, 0, 0, 0.5)', mt: '10px', width: '400px', height: '400px' }}>

        <CardContent sx={{ display: 'grid', margin: '20px' }}>

          <Typography variant='h6' fontSize='18px' mt='10px'>Change Password</Typography>

          <Typography color='red' variant='caption'>{errorMsg}</Typography>

          <Grid
            container
            direction="column"
            justify="center"
          >

            {/* password field */}
            <TextField
              variant="filled"
              label="Password"
              sx={{ marginBottom: '15px' }}
              type={showPassword ? "text" : "password"} // if show password is true, the type turns to text. if not, its type is password
              onChange={password => setPasswordValue(password.target.value)}
              value={passwordValue}
              InputProps={{ // toggle button
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <VisibilityIcon fontSize='small' /> : <VisibilityOffIcon fontSize='small' />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            {/* retype password field */}
            <TextField
              variant="filled"
              label="Re-type password"
              sx={{ marginBottom: '5px' }}
              type={showRetypePassword ? "text" : "password"} // if show password is true, the type turns to text. if not, its type is password
              onChange={retypePassword => setRetypePasswordValue(retypePassword.target.value)}
              value={retypePasswordValue}
              InputProps={{ // toggle button
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowRetypePassword}
                    >
                      {showRetypePassword ? <VisibilityIcon fontSize='small' /> : <VisibilityOffIcon fontSize='small' />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Typography variant='caption'>Password requirements:
              <ListItem disablePadding={true} sx={{ display: 'list-item', ml: '10px' }}>8 characters or longer.</ListItem>
              <ListItem disablePadding={true} sx={{ display: 'list-item', ml: '10px' }}>Contain a number.</ListItem>
            </Typography>

          </Grid>

          <Button
            variant="contained"
            sx={{ width: '200px', mt: '10px', display: 'flex', justifySelf: 'center' }}
            onClick={() => handleSubmit()}
          >
            Change Password
          </Button>

        </CardContent>

      </Card>

      <Grid item mt='20px'>
        <Button variant='contained' color='error' onClick={handleClickOpen}>
          <Typography sx={{ fontSize: '18px', justifySelf: 'center', fontWeight: 'bold' }}>
            Delete account
          </Typography>
        </Button>

        {/* pop up that shows up to ask the user if they're sure they want to delete their account */}
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle align='center'>
            Are you sure?
          </DialogTitle>
          <DialogContent>
            <DialogContentText width='400px'>
              Deleting your account will erase all your workout data! This process cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='contained' onClick={handleDelete} autoFocus color='error'>
              Delete
            </Button>
          </DialogActions>
        </Dialog>

      </Grid>

    </Grid>

  )
}
export default Settings