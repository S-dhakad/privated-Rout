import React from 'react'
import {useDispatch } from 'react-redux'
import {LoginUser, Logout} from "../Store/CreateSlice"
export default function Login() {
  const dispatch = useDispatch()
  return (
    <> 
    
    
    
      <h6>Login components</h6>   
    
    <button   onClick={() => dispatch(LoginUser())}> Login </button>
    <button   onClick={() => dispatch(Logout())}> Logout </button>
    
    
    
    
    </>







    
  )
}
