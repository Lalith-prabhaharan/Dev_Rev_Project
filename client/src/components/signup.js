import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Signup = () => {
    const navigate=useNavigate();
    const [name, setname] = useState("")
    const [mail, setmail] = useState("")
    const [pass, setpass] = useState("")
    const [cpass, setcpass] = useState("")
    const [no, setno] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(pass==cpass){
            const register=async()=>{
                const response=await axios.post("http://localhost:8000/api/auth/signup",{
                    username:name,
                    email:mail,
                    password:pass,
                    confirmpassword:cpass,
                    contact:no
                })
                console.log(response);
                navigate('/login')
            }
            register();
            
        }
        else{
            alert("Enter the Password correctly")
        }
    }
  return (
    <div>
        <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
            <div className="LoginFormContainer">
                <div className="LoginFormInnerContainer">
                    <header className="header">Create Your Account</header>
                    <header className="subHeader">Welcome to <b>Covid Vaccination Center!</b> Create your account</header>
                    <p>Aldready Have an Account,  <Link to="/login">Sign in</Link></p>
                    <form>
                        <div className="inputContainer">
                            <label className="label" ><span>Name</span></label>
                            <input type="email" className="input" placeholder="Enter your Name" onChange={(e)=>setname(e.target.value)}/>
                        </div>
                        <div className="inputContainer">
                            <label className="label" ><span>Email
                                    Address</span></label>
                            <input type="email" className="input" onChange={(e)=>setmail(e.target.value)} placeholder="Enter your Email Address"/>
                        </div>
                        <div className="inputContainer">
                            <label className="label"><span>Password</span></label>
                            <input type="password" className="input" onChange={(e)=>setpass(e.target.value)} placeholder="Enter your Password"/>
                        </div>
                        <div className="inputContainer">
                            <label className="label"><span>Confirm Password</span></label>
                            <input type="password" className="input" onChange={(e)=>setcpass(e.target.value)} placeholder="Enter your Password"/>
                        </div>
                        <div className="inputContainer">
                            <label className="label"><span>Contact Number</span></label>
                            <input type="password" className="input" onChange={(e)=>setno(e.target.value)} placeholder="Enter your Contact number"/>
                        </div>
                        <button className="LoginButton" onClick={submit}>Signup</button>
                    </form>
                </div>
            </div>
            <div className="ImageContianer">
                <img src="https://img.freepik.com/free-vector/sketch-plain-travelling_1308-86639.jpg?size=626&ext=jpg" class="GroupImage"/>
            </div>
        </div>
        </div>  
    </div>
  );
}
