import { createContext, useEffect, useState } from "react";

const isTokenValid = (token) => {
   try {
     const decoded = jwtDecode(token)
    console.log(decoded)
    return true 
   } catch (error) {
    return false
   }
}


export const AuthContext = createContext()



export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)

    const login = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }
    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
    }
    useEffect(() => {
        const storageToken = localStorage.getItem('token')
        if(storageToken && isTokenValid(storageToken))
            setToken(storageToken)
         else {
            setToken(null)
            localStorage.removeItem('token')
        }
    } , [])
    return (
        <AuthContext.Provider value = {{token, login, logout}}>
            { children }
        </AuthContext.Provider>
    ) 
    
}
    
    


