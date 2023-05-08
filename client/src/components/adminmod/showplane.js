import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/getcentre.css"

export const Showplanes = () => {
    const [list, setlist] = useState([]);
    useEffect(() => {
        axios.get("https://cyan-cape-buffalo-suit.cyclic.app/api/plane/get")
        .then((response)=>{
          const data=response.data.data
          console.log(response)
          setlist(data)
          console.log("data received");
        })
        .catch((err)=>console.log(err))
    }, [])
    const deleted=(event)=>{
      axios.delete(`https://cyan-cape-buffalo-suit.cyclic.app/api/plane/${event.target.value}`).then((res)=>{
        alert("Deleted successfully")
      }) .catch((err)=>console.log(err));
      axios.get("https://cyan-cape-buffalo-suit.cyclic.app/api/plane/get")
        .then((response)=>{
          const data=response.data.data
          console.log(response)
          setlist(data)
          console.log("data received");
        })
        .catch((err)=>console.log(err))
    }
    console.log(list);
    const li = list.map((x,index) => {

      return  (
      <div key={index} className="event">
              <h1>{x.name}</h1>
              <h2><b>{x.from}</b></h2>
              <img className="img2" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/airplane-1819848-1544528.png?f=avif&w=256" alt=""/>
              <h2><b>{x.to}</b></h2>
              <p><b>Arrival</b>:{x.arrival}-<b>Departure</b>:{x.departure}</p>
              {/* <p><b>departure:</b>{x.departure}</p> */}
              <p><b>Price:</b>{x.price}</p>
              <p><b>Remaining:</b>{x.remaining}</p>
              <button value={x._id} onClick={deleted}>delete</button>
              </div>
      )
      }
  );
  return (
    <div>
    <div className="Types_of_Events">
        {li}
    </div>    
    </div>
  )
}
