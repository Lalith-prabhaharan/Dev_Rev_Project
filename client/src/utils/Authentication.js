import React,{useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
const AuthContext=React.createContext()
export const AuthenticationProvider = (props) => {
    const navigate=useNavigate();
    const [user,setUser]=useState("")
    const[contact,setContact]=useState("")
    const[mail,setMail]=useState("")
    const login=(name,phno,mail)=>{
        setUser(name)
        setContact(phno)
        setMail(mail)
    }
    const logout=()=>{
        setUser('')
        localStorage.removeItem("mail")
        localStorage.removeItem("password")
        localStorage.removeItem("username")
        localStorage.removeItem("contact")
        navigate('/login')
    }

  return (
        <AuthContext.Provider value={{user,mail,contact,login,logout}} >
            {props.children}
        </AuthContext.Provider>
  )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}