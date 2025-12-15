import React from 'react'
import { UserContextProvider } from './components/context/UserContextProvider'
import { Login } from './components/pages/Login'
import { Profile } from './components/pages/Profile'

export const App = () => {
  return (
    <>
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
