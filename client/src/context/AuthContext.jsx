import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getStoredData, saveStoredData, storageKeys } from '../utils/localStorage'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => getStoredData(storageKeys.auth, null))

  useEffect(() => {
    saveStoredData(storageKeys.auth, currentUser)
  }, [currentUser])

  const signup = (userData) => {
    const users = getStoredData(storageKeys.users, [])
    const exists = users.some((user) => user.email === userData.email)
    if (exists) {
      return { success: false, message: 'User already exists.' }
    }

    const updatedUsers = [...users, { ...userData, id: Date.now() }]
    saveStoredData(storageKeys.users, updatedUsers)
    return { success: true, message: 'Signup successful.' }
  }

  const login = (email, password) => {
    const users = getStoredData(storageKeys.users, [])
    const user = users.find(
      (storedUser) => storedUser.email.toLowerCase() === email.toLowerCase() && storedUser.password === password,
    )

    if (!user) {
      return { success: false, message: 'Invalid email or password.' }
    }

    setCurrentUser(user)
    return { success: true, message: 'Login successful.' }
  }

  const logout = () => {
    setCurrentUser(null)
  }

  const value = useMemo(
    () => ({ currentUser, login, signup, logout }),
    [currentUser],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used in AuthProvider')
  return context
}
