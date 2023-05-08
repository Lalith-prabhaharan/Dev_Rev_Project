import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/home.css"
import { NavBar } from './NavBar'
export const Home = () => {
  const navigate=useNavigate()
  const view=()=>{
    navigate('/getplane')
  }
  return (
    <div>
      <NavBar/>
      <div className='containe'>
    <img src="https://wallpaperaccess.com/full/1470814.jpg"></img>
    <div className="text-overlay">
    <h2 className='heading'>The airplane stays up because it doesn't have the time to fall.</h2>
    <p className='s-heading'>Use Code <b>FLYHIGH</b> for Flat 10% Discount</p>
    <button  onClick={view} className="home-but"> View Flights!!</button>
    </div>
    </div>   
    </div>
  );
}
