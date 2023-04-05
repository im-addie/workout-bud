import './App.css'
import { Routes, Route } from 'react-router-dom'
import ThemeContextProvider from './context/themeContext'
import Layout from './layouts'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Login from './views/Login'
import Logout from './views/Logout'
import RegisterForm from './views/Register'
import Dashboard from './views/Dashboard'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
