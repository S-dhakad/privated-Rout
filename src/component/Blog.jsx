import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  const suggestion ={
    Name:"Sanjay",
    Surname:"Dhakad"
  }
  return (
    <>Blog component
    
    <Link to="/" state={suggestion}>Send Data</Link>
    
    
    </>

  )
}
