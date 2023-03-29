import { Card, CardContent, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Box from '@mui/material/Box';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { login } from '../../utility/api';
import { setToken } from '../../utility/utils';

function LoginForm() {

  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

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

      routeToHome()
      
    } catch (error) {
      console.error(error)
      setErrorMsg("Invalid email or password.")
    }
  }

  const navigate = useNavigate()

  const routeToHome = () => {
    navigate('/')
    window.location.reload()
  }

  return (

    <Grid 
      container
      direction="row"
      justifyContent="center"
    >
      <Card sx={{borderRadius: '20px', boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.5)', mt: '35px', width: '400px', height: '500px'}}>
        
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

          <Typography variant='h6' fontWeight='bold' mt='10px'>Sign in</Typography>
          
          <Typography color='red' variant='caption'>{errorMsg}</Typography>

            <Grid 
              container
              direction="column"
              justify="center">

              <TextField 
                label="Email" 
                variant="filled"
                sx={{marginBottom: '15px', marginTop: '10px',}}
                onChange={email => setEmailValue(email.target.value)}
                value={emailValue}
              />

              <TextField
                label="Password"
                variant="filled"
                type="password"
                sx={{marginBottom: '5px'}}
                onChange={password => setPasswordValue(password.target.value)}
                value={passwordValue}
              />
            </Grid>
            
            <Box
              sx={{display: 'flex', 
              justifySelf: 'center'}}>

              <Link to={'/forgot-password'}>
                <Typography variant='caption'sx={{color:'grey'}}>
                  Forgot password
                </Typography>
              </Link>

              <Link to={'/register'}>
                <Typography variant='caption'
                sx={{color:'grey', ml: '20px'}}>
                  Create an account
                </Typography>
              </Link>

            </Box>

            <Button 
              variant="contained" 
              justify='center'
               sx={{width: '90px', mt: '10px', display: 'flex', justifySelf: 'center'}}
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