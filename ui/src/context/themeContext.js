import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
  
})

const ThemeContextProvider = (props) => {
  const {
    children
  } = props

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeContextProvider