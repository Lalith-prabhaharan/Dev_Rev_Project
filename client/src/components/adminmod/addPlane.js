import React,{useState} from 'react'
import axios from "axios"
import '../../css/addcentre.css'
import { useNavigate } from 'react-router-dom';
export const AddPlane = () => {
  const navigate=useNavigate();
  const[planename,setplanename]=useState("");
  const [id, setid] = useState("")
  const[from,setfrom]=useState("")
  const[to,setto]=useState("")
  const[arrival,setarrival]=useState("")
  const[departure,setdeparture]=useState("")
  const[price,setprice]=useState("")
  const[start,setStart]=useState("")
  const[end,setEnd]=useState("")
  const submit=(e)=>{
      e.preventDefault();
      const addPlane=async()=>{
        const response=await axios.post("https://cyan-cape-buffalo-suit.cyclic.app/api/plane/add",{
            flight_id:id,
            name:planename,
            from:from,
            to:to,
            arrival:arrival,
            departure:departure,
            startDate:start,
            endDate:end,
            price:price
        })
        console.log(response);
        navigate('/admin')
      }
      addPlane();
  }
return(
    <div>
      <form onSubmit={submit}>
        
        <h1 className='addhead'>ADD FLIGHTS</h1>
        
        <fieldset>
          
          <legend><span class="number"></span> Enter the Flight Details</legend>
          
          <label >Plane Id:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setid(e.target.value)} />
         
          <label >Plane Name:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setplanename(e.target.value)} />
          
          <label >From:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setfrom(e.target.value)} />
          
          <label >To:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setto(e.target.value)} />
          
          <label >Arrival Time:</label>
          <input type="time" className="addhotelinp" onChange={(e)=>setarrival(e.target.value)} />
         
          <label >Departure Time:</label>
          <input type="time" className="addhotelinp" onChange={(e)=>setdeparture(e.target.value)} />
          
          <label >Start Date:</label>
          <input type="date" className="addhotelinp" onChange={(e)=>setStart(e.target.value)} />
          
          <label >End Date:</label>
          <input type="date" className="addhotelinp" onChange={(e)=>setEnd(e.target.value)} />
        
          <label >Price per person:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setprice(e.target.value)}   />         
        
        </fieldset>
        
        <button class="button-1" role="button">Add Plane</button>
        
      </form>
    </div>
  )
}
