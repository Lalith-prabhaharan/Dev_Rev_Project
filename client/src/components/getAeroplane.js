import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/getcentre.css"

export const GetAeroplanes = () => {
    const [list, setlist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/plane/get")
        .then((response)=>{
          const data=response.data.data
          // console.log(response)
          setlist(data)
          console.log("data received");
        })
        .catch((err)=>console.log(err))
    }, [])

    const handleChange=(e)=>{
      const id=e.target.value
    fetch(`http://localhost:8000/api/plane/get/${id}`)
    .then((res) => res.json())
    .then((response) => {
      if(response.length==0){alert("No such data is found")}
       setlist(response.data)
    })
    }

    const searchdate=(e)=>{
      const id=e.target.value
      fetch(`http://localhost:8000/api/plane/getdate/${id}`)
      .then((res) => res.json())
      .then((response) => {
      if(response.length==0){alert("No such data is found")}
       setlist(response.data)
    })
    }

    const searchtime=(e)=>{
      const id=e.target.value
      fetch(`http://localhost:8000/api/plane/gettime/${id}`)
      .then((res) => res.json())
      .then((response) => {
       setlist(response.data)
    })
    }

    const li = list.map((x,index) => {

      return  (
      <NavLink to="/booking" state={{data:x}}>

      <div key={index} className="event">
              <h1>{x.name}</h1>
              <h2><b>{x.from}</b></h2>
              <img className="img2" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/airplane-1819848-1544528.png?f=avif&w=256" alt=""/>
              <h2><b>{x.to}</b></h2>
              <p><b>Arrival</b>:{x.arrival}-<b>Departure</b>:{x.departure}</p>
              <p><b>Date:</b>{x.startDate}----{x.endDate}</p>
              <p><b>Price:</b>{x.price}</p>
              <p><b>Remaining:</b>{x.remaining}</p>
              </div>
      </NavLink>
      )
      }
  );
  return (
    <div>
      <div className="Input">
          <input type='text' className='Input-text' placeholder='Search Flights here...' onChange={handleChange} /> <br></br>
          <input type='date' className='' onChange={searchdate} placeholder='Search Available Dates...'  />
      </div>
       <input type='time' className='' onChange={searchtime}   />
    <div className="Types_of_Events">
        {li}
    </div>    
    </div>
  )
}
