import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/home.css"
export const Home = () => {
  const navigate=useNavigate()
  const view=()=>{
    navigate('/getplane')
  }
  return (
    <div>
      <div className='containe'>
    <img src="https://wallpaperaccess.com/full/1470814.jpg"></img>
    <div className="text-overlay">
    <button  onClick={view} className="home-but"> View Flights!!</button>
    </div>
    </div>   
    </div>
  );
}
