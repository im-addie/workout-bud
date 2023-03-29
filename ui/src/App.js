import './App.css'
import { Routes, Route } from 'react-router-dom'
import ThemeContextProvider from './context/themeContext'
import Layout from './layouts'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Login from './views/Login'
import RegisterForm from './views/Register'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
