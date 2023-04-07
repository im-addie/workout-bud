import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { Card, CardContent, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { updatePassword, deleteAccount } from '../../utility/api'
import { clearToken, getToken, isUserLoggedIn } from '../../utility/utils'

function Settings() {
  const [passwordValue, setPasswordValue] = useState("")
  const [retypePasswordValue, setRetypePasswordValue] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  let navigate = useNavigate()

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

      routeToDashboard()

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

  const routeToDashboard = () => {
    navigate('/dashboard')

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

            <TextField
              variant="filled"
              label="Password"
              type="password"
              sx={{ marginBottom: '15px' }}
              onChange={password => setPasswordValue(password.target.value)}
              value={passwordValue}
            />

            <TextField
              variant="filled"
              label="Re-type password"
              type="password"
              sx={{ marginBottom: '5px' }}
              onChange={retypePassword => setRetypePasswordValue(retypePassword.target.value)}
              value={retypePasswordValue}
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
        <Button variant='contained' color='error' onClick={() => handleDelete()}>
          <Typography sx={{ fontSize: '18px', justifySelf: 'center', fontWeight: 'bold' }}>
            Delete account
          </Typography>
        </Button>
      </Grid>

    </Grid>

  )
}
export default Settings