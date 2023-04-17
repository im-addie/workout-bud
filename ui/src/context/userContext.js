import { createContext, useState, useEffect } from 'react'
import { isUserLoggedIn, getToken, setToken, clearToken } from '../utility/utils'
import { login, getUser } from '../utility/api'

export const UserContext = createContext(null)

export const UserContextProvider = (props) => {

  const { children } = props

  const [user, setUser] = useState(null)

  useEffect(() => {
    if (isUserLoggedIn()) {
      const token = getToken()
      getUser(token)
        .then((data) => setUser(data)) // data.name gets the user's name
        .catch((error) => console.log(error))
    }
  }, [])

  const signIn = async (email, password) => {

    const response = await login({
      email,
      password
    })

    const token = response.token

    setToken(token)
    await getUser(token)
      .then((data) => setUser(data)) // data.name gets the user's name
      .catch((error) => console.log(error))
  }

  const signOut = () => {
    setUser(null)
    clearToken()
  }
  
  return (
    <UserContext.Provider value={{ user, setUser, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  )
}