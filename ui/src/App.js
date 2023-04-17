import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import ThemeContextProvider from './context/themeContext'
import { UserContextProvider } from './context/userContext'
import Layout from './layouts'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Login from './views/Login'
import RegisterForm from './views/Register'
import Settings from './views/Settings'
import LogWorkout from './views/LogWorkout'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <UserContextProvider>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/log-workout" element={<LogWorkout />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </LocalizationProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
