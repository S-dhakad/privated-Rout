import React from 'react'
// import { Children } from 'react';
import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";
export default function Privated() {
    const {isAuthenticated} = useSelector((state) => state.Protected); 
  return (
    <>
   {isAuthenticated?<Outlet/>:<Navigate to={"/Login"}/>}
    
    
    
    
    </>
  )
}
