import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/Authentication'
import { useLocation } from 'react-router-dom'
import axios from "axios"
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
  useEffect(() => {
    setid(data.flight_id)
  }, [])
 console.log(name)
    const submit=(e)=>{
        e.preventDefault();
        const addSlot=async()=>{
            const response= axios.post("http://localhost:8000/api/bookplane/booking",{
            user:auth.user,
            flight_id:id,
            name:name,
            flight_from:data.from,
            flight_to:data.to,
            mail:mail,
            nop:nop,
            date:date,
            phone:auth.contact
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
          <input type="text" className="addhotelinp" value={auth.contact}  />
        </fieldset>
        
        <button class="button-1" role="button">Add Centre</button>
        
      </form>
    </div>
  )
}
