import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    },[])

    const Login = async ({email, password, role})=>{
        try {
           const response = await axios.post('/api/auth/login', {email, password, role});
           setUser(response.data.user) 
           localStorage.setItem("user", JSON.stringify(response.data.user))
           return response.data.user
        } catch (error) {
            console.log(error.message)
        }
    }

    const LogOut = ()=>{
        localStorage.removeItem('user')
        setUser(null)
    }

  return (
    <AuthContext.Provider value={{user, Login, LogOut}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider