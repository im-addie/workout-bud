import { createContext, useState, useEffect } from 'react'
import { isUserLoggedIn, getToken, setToken, clearToken } from '../utility/utils'
import { register, login, getUser, deleteAccount } from '../utility/api'

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

  const createAccount = async (email, name, password) => {
    const response = await register({
      email,
      name,
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

  const removeAccount = async () => {
    const token = getToken()
    setUser(null)
    await deleteAccount(token)
    clearToken()
  }
  
  return (
    <UserContext.Provider value={{ user, setUser, signIn, signOut, createAccount, removeAccount }}>
      {children}
    </UserContext.Provider>
  )
}