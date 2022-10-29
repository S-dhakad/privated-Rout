import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
        <ul>
            <li> <Link to="/">Home </Link></li>
            <li> <Link to="/Dashboard">Dashboard </Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li> <Link to="/Profile">Profile</Link></li>
            <li> <Link to="/MYOrders">MY Orders</Link> </li>
            <li> <Link to="/Blogs">Blogs</Link></li>
        </ul>
    </nav>
    
    </>
  )
}
