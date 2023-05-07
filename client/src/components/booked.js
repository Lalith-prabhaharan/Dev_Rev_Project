import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { useAuth } from '../utils/Authentication';
import "../css/booked.css"
export const Booked = () => {
    const auth=useAuth()
    const[list,setList]=useState([]);
    useEffect(() => {
    axios.get("http://localhost:8000/api/bookplane/get")
    .then((response)=>{
        const data=response.data.data
        data.forEach(element => {
          if(element.user===auth.user){
            // list.push(element)
            setList(prev=> [...prev,element])
          }
        }); 
      })
    },[])
    const li= list.map((x,index)=>{
      return(
        <div key={index} class="container">
    <div class="ticket">
      <div class="ticket-left">
        <div class="airplane-container">
          <img src="https://assets.codepen.io/1026437/blackAirplane.png" alt="airplane-img" />
        </div>
        <div class="departing">
          <div class="item">departing</div>
          <div class="smdetail">{x.flight_from}</div>
        </div>
      </div>
      <div class="ticket-middle">
        <div class="passenger-name">
          <div class="item">passenger</div>
          <div class="smdetail">{x.name}</div>
        </div>
        <div class="gate">
          <div class="item">gate</div>
          <div class="lgdetail">l22</div>
        </div>
        <div class="flight">
          <div class="item">flight</div>
          <div class="lgdetail">{x.flight_id}</div>
        </div>
        <div class="destination">
          <div class="item">destination</div>
          <div class="smdetail">{x.flight_to}</div>
        </div>
        <div class="group">
          <div class="item">group</div>
          <div class="smdetail">3</div>
        </div>
        <div class="serial">
          <div>{x._id}</div>
        </div>
      </div>
      <div class="ticket-right">
        <div class="stub-flight">
          <div class="smitem">No.of Persons</div>
          <div class="exsmdetail">{x.nop}</div>
        </div>
        <div class="stub-seat">
          <div class="smitem">Phone</div>
          <div class="exsmdetail">{x.phone}</div>
        </div>
        <div class="stub-depart">
          <div class="smitem">Date</div>
          <div class="exsmdetail">{x.date}</div>
        </div>
        <div class="stub-passenger">
          <div class="smitem">passenger</div>
          <div class="exsmdetail">{x.name}</div>
        </div>
       
      </div>
    </div>
    </div>  
      )
    })
  return (
   
    <div className='full'>
      {li}
    </div>
    )
}
