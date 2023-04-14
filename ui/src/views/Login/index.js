import { Card, CardContent, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import Box from '@mui/material/Box'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { login } from '../../utility/api'
import { setToken } from '../../utility/utils'

function LoginForm() {

  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleSignIn = async () => {

    try {
      // console.log('email value:', emailValue)
      // console.log('password value:', passwordValue)

      const tokenValue = await login({
        email: emailValue,
        password: passwordValue
      })

      // console.log('token value:', tokenValue.token)

      setToken(tokenValue.token)

      routeToDashboard()

    } catch (error) {
      console.error(error)
      setErrorMsg("Invalid email or password.")
    }
  }

  const routeToDashboard = () => {
    navigate('/')
  }

  return (

    <Grid
      container
      direction="row"
      justifyContent="center"
    >
      <Card sx={{ borderRadius: '20px', boxShadow: '3px 2px 7px rgb(0, 0, 0, 0.5)', mt: '35px', width: '400px', height: '500px' }}>

        <CardContent sx={{ display: 'grid', margin: '20px' }}>

          <FitnessCenterIcon sx={{ display: 'flex', justifySelf: 'center' }} />

          <Typography
            sx={{
              fontFamily: 'impact',
              fontWeight: 700,
              letterSpacing: '.1rem',
              fontSize: '26px',
              color: 'inherit',
              justifySelf: 'center'
            }}
          >
            WORKOUT BUD
          </Typography>

          <Typography variant='h6' fontWeight='bold' mt='10px'>Sign in</Typography>

          <Typography color='red' variant='caption'>{errorMsg}</Typography>

          <Grid
            container
            direction="column"
            justify="center">

            <TextField
              label="Email"
              variant="filled"
              sx={{ marginBottom: '15px', marginTop: '10px', }}
              onChange={email => setEmailValue(email.target.value)}
              value={emailValue}
            />

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
          </Grid>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>

              <Typography 
                component={Link}
                to='/register'
                variant='caption'
                className='link'
                >
                Create an account
              </Typography>

          </Box>

          <Button
            variant="contained"
            justify='center'
            sx={{ width: '90px', mt: '10px', display: 'flex', justifySelf: 'center' }}
            onClick={() => handleSignIn()}
          >
            sign in
          </Button>

        </CardContent>

      </Card>
    </Grid>

  )
}

export default LoginForm