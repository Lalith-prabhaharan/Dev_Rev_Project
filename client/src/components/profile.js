import React from 'react'
import { useAuth } from '../utils/Authentication'
import { Booked } from './booked'
import "../css/profile.css"
export const Profile= () => {
  const auth=useAuth()
  const logout=()=>{
    auth.logout()
  }
  return (
    <div>

    <div>
      <h2> Hii {auth.user}!! </h2>  
      <p>Contact:{auth.contact}</p>
    </div>
    <button onClick={logout} className='button-1'>Logout </button>
    <Booked/>
    </div>
  )
}
