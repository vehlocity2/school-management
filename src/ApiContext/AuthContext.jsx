import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const mockUsers = [
    { email: "student@school.com", password: "student123", role: "student" },
    { email: "parent@school.com", password: "parent123", role: "parent" },
    { email: "teacher@school.com", password: "teacher123", role: "teacher" },
    { email: "admin@school.com", password: "admin123", role: "admin" },
  ];


    useEffect(()=>{
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    },[])

    const Login = (email, password, selectedRole) => {
    // Simulate backend validation
        const foundUser = mockUsers.find(
        (u) =>
            u.email === email &&
            u.password === password &&
            u.role === selectedRole
        );

        if (!foundUser) {
        throw new Error("Invalid credentials or role mismatch");
        }

        // Save user to state (and optionally localStorage)
        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));
        return foundUser;
    };


    // const Login = async ({email, password, role})=>{
    //     try {
    //        const response = await axios.post('/api/auth/login', {email, password, role});
    //        setUser(response.data.user) 
    //        localStorage.setItem("user", JSON.stringify(response.data.user))
    //        return response.data.user
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

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