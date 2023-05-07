import React,{useState} from 'react'
import {Link, useLocation,useNavigate} from 'react-router-dom'
import "../css/login.css"
import axios from "axios"
import { useAuth } from '../utils/Authentication';
export const Login = () => {
    const navigate=useNavigate()
    const auth=useAuth()
    const location=useLocation();
    const[mail,setmail]=useState("")
    const[pass,setpass]=useState("")
    const[flag,setFlag]=useState(-1)
    const submit=(e)=>{
        e.preventDefault();
        const login=async()=>{
            if(mail=="admin"){
                if(pass=="admin"){
                    navigate("/admin/showplane")
                }
                else{
                    alert("Enter Admin password correctly")
                }
            }
            else{
            const response=await axios.post("http://localhost:8000/api/auth/login",{
                email:mail,
                password:pass,
            })
            console.log(response)
            if(response.data.msg==="sucess"){
                alert("success")
                console.log(response.data.data[0].username);
                auth.login(response.data.data[0].username,response.data.data[0].contact);
                setFlag(1)
                navigate(location.state?location.state.path:"/",{replace:true});
            }
            else{
                alert("Enter details Correctly")
                setFlag(0);
                navigate("/login")
            }
            }  
        }
        login();
    }
    return (
    <div>
        <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
            <img src="https://www.pngitem.com/pimgs/m/5-57732_airplane-drawing-aircraft-cartoon-free-download-image-transparent.png" class="GroupImage"/>
            </div>
            <div className="LoginFormContainer">
                <div className="LoginFormInnerContainer">
                    <header className="header">Login to Your Account</header>
                    <header className="subHeader">Welcome to <b>FLY HIGH!</b></header>
                    <p>Do not Have an Account,  <Link to="/signup">Sign up</Link></p>
                    <form>
                        <div className="inputContainer">
                            <label className="label" ><span>Email
                                    Address</span></label>
                            <input type="email" className="input" onChange={(e)=>setmail(e.target.value)} placeholder="Enter your Email Address"/>
                        </div>
                        <div className="inputContainer">
                            <label className="label"><span>Password</span></label>
                            <input type="password" className="input" onChange={(e)=>setpass(e.target.value)} placeholder="Enter your Password"/>
                        </div>
                        <button className="LoginButton" onClick={submit}>Log in</button>
                    </form>
                </div>
            </div>
        </div>
        </div>  
        {flag==1?<div></div>:(flag==0)?<p>Enter details correctly</p>:""}
    </div>
  )
}
