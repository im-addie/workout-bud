import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { clearToken } from '../../utility/utils'

function Logout() {
  const navigate = useNavigate()

  clearToken()

  useEffect(() => {
    navigate('/')
  }, [navigate])

  return (
    <Box align='center' mt='30px'>
      <Typography variant='h5'>Logging out...</Typography>
    </Box>
  )
}

export default Logout