import React from 'react'
import { NavLink,Link, Outlet } from 'react-router-dom'
import '../../css/admin.css'
import { useAuth } from '../../utils/Authentication'

export const Admin = () => {
    
  const auth=useAuth()
    const logout=()=>{
        auth.logout()
      }
  return (
    <div>
       <div class="area"></div><nav class="main-menu">
        <img src=""></img>
        <h3 style={{color:"white"}}>FLY HIGH</h3>
            <ul>
                <li>
                    <NavLink to="showplane">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                          Show Flights
                        </span>
                    </NavLink>
                  
                </li>
                <li class="has-subnav">
                    <NavLink to='addplane'>
                    <i class="fa fa-plane" aria-hidden="true"></i>
                        <span class="nav-text">
                           Add Flights
                        </span>
                    </NavLink>
                    
                </li>
                {/* <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-comments fa-2x"></i>
                        <span class="nav-text">
                            Reviews
                        </span>
                    </a>
                    
                </li> */}
                {/* <li class="has-subnav">
                    <NavLink to="/addevent">
                       <i class="fa fa-camera-retro fa-2x"></i>
                        <span class="nav-text">
                            Add Events
                        </span>
                    </NavLink>
                   
                </li> */}
                {/* <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Member Map
                        </span>
                    </a>
                </li> */}
                {/* <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Info
                        </span>
                    </a>
                </li> */}
            </ul>

            <ul class="logout">
                <li>
                    <a href=''>

                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text" onClick={logout}>
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
