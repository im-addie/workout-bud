import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import ThemeContextProvider from './context/themeContext'
import Layout from './layouts'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Login from './views/Login'
import Logout from './views/Logout'
import RegisterForm from './views/Register'
import Dashboard from './views/Dashboard'
import LogWorkout from './views/LogWorkout'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/log-workout" element={<LogWorkout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </LocalizationProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
