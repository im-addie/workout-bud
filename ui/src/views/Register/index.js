import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import ListItem from '@mui/material/ListItem'
import { register } from '../../utility/api'
import { setToken } from '../../utility/utils'

function RegistrationForm() {
  const [emailValue, SetEmailValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [retypePasswordValue, setRetypePasswordValue] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showRetypePassword, setShowRetypePassword] = useState(false)

  let navigate = useNavigate()

  const handleShowPassword = () => setShowPassword(!showPassword)
  const handleShowRetypePassword = () => setShowRetypePassword(!showRetypePassword)

  const handleRegister = async () => {

    try {
      // console.log('email value:', emailValue)
      // console.log('name value:', nameValue)
      // console.log('password value:', passwordValue)
      // console.log('retyped password value:', retypePasswordValue)

      if (passwordValue !== retypePasswordValue){
        return setErrorMsg('Passwords do not match.')
      }
      
      const tokenValue = await register({
        email: emailValue,
        name: nameValue, 
        password: passwordValue
      })

      // console.log('token value', tokenValue.token)

      setToken(tokenValue.token)

      routeToDashboard()
      
    } catch (error) {
      console.log('READ THE ERROR HERE:', error)
      if (error){
        setErrorMsg(`${error.toString().substr(26)}`)
      }
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
      <Card sx={{borderRadius: '20px', boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.5)', mt: '35px', width: '400px', height: '600px'}}>
        
        <CardContent sx={{display: 'grid', margin: '20px'}}>

        <FitnessCenterIcon sx={{display: 'flex', justifySelf: 'center'}} />
          
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

          <Typography variant='h6' fontWeight='bold' mt='10px'>Register</Typography>
          
          <Typography color='red' variant='caption'>{errorMsg}</Typography>

            <Grid 
              container
              direction="column"
              justify="center"
            >
              <TextField 
                variant="filled"
                label="Email" 
                sx={{marginBottom: '15px', marginTop: '10px',}}
                onChange={email => SetEmailValue(email.target.value)}
                value={emailValue}
              />

              <TextField 
                variant="filled"
                label="Name" 
                sx={{marginBottom: '15px'}}
                onChange={name => setNameValue(name.target.value)}
                value={nameValue}
              />

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
            
            <Link to={'/login'}>
              <Typography variant='caption'sx={{color:'grey'}}>
                Already have an account? Log in here
              </Typography>
            </Link>

            <Button 
              variant="contained" 
              sx={{width: '90px', mt: '10px', display: 'flex', justifySelf: 'center'}}
              onClick={() => handleRegister()}
              >
                Register
            </Button>

        </CardContent>
        
      </Card> 
    </Grid>

  )
}

export default RegistrationForm