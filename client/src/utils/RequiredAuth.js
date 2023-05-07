import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Authentication';

const RequiredAuth = (props) => {
  const location=useLocation();
  const auth=useAuth();
  if(!auth.user){
    return <Navigate to="/signup" state={{path:location.pathname}} />
  }
  else{
    return props.children;
  }
}

export default RequiredAuth;