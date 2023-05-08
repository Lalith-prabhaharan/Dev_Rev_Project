import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/Authentication'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import { NavBar } from './NavBar'
export const Book = () => {
  const location=useLocation()
  const {data}=location.state;
  console.log(data)
  const auth=useAuth()
  const navigate=useNavigate();
  const[name,setname]=useState("")
  const[mail,setmail]=useState("")
  const [id, setid] = useState("")
  const[nop,setnop]=useState("")
  const[date,setdate]=useState("")
  const[no,setno]=useState("")
  useEffect(() => {
    setid(data.flight_id)
  }, [])
 console.log(name)
    const submit=(e)=>{
        e.preventDefault();
        const addSlot=async()=>{
            const response= axios.post("https://cyan-cape-buffalo-suit.cyclic.app/api/bookplane/booking",{
            user:localStorage.getItem("username"),
            flight_id:id,
            name:name,
            flight_name:data.name,
            flight_from:data.from,
            flight_to:data.to,
            mail:mail,
            nop:nop,
            date:date,
            phone:no
        }).then(
          navigate('/'),
          response=>console.log(response))
        .catch(err=>
            console.log(err))
        }
        addSlot();
  }
return(
    <div>
      <NavBar/> 
      <form onSubmit={submit}>
        
        <h1 className='addhead'>Book Your Ticket For {data.name}</h1>
        
        <fieldset>
                    
          {/* <label >Enter Flight Id:</label>
          <input type="text" className="addhotelinp" value={data.flight_id} /> */}
         
          <label >Name:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setname(e.target.value)} />
          
          <label >Mail ID:</label>
          <input type="email" className="addhotelinp"  onChange={(e)=>setmail(e.target.value)} />
          
          <label >No of Persons:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setnop(e.target.value)} />

          <label >Date:</label>
          <input type="date" className="addhotelinp" onChange={(e)=>setdate(e.target.value)}   />
         
          <label >Phone:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setno(e.target.value)}  />
        </fieldset>
        
        <button class="button-1" role="button">Add Centre</button>
        
      </form>
    </div>
  )
}
