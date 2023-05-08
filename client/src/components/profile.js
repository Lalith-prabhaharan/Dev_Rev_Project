import React from 'react'
import { useAuth } from '../utils/Authentication'
import { Booked } from './booked'
import "../css/profile.css"
import { NavBar } from './NavBar'
export const Profile= () => {
  const auth=useAuth()
  const logout=()=>{
    auth.logout()
  }
  return (
    <div>
      <NavBar/>
    <div>
      <h2> Hii {localStorage.getItem("username")}!! </h2>  
      <p>Contact:{localStorage.getItem("contact")}</p>
    </div>
    <button onClick={logout} className='button-1'>Logout </button>
    <Booked/>
    </div>
  )
}
