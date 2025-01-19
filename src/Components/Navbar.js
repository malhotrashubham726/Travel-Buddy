import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className='d-flex mx-10 my-10 px-5'>
      <div className='px-10'><Link to="/">Home</Link></div>
      <div className='px-10'><Link to="/login">Login</Link></div>
      <div className='px-10'><Link to="/signup">Signup</Link></div>
      <div className='px-10'><Link to="/ride">Rides</Link></div>
      <div className='px-10'><Link to="/">TextForm</Link></div>
      <div className='px-10'><Link to="/">Updates</Link></div>
    </nav>
    </>
  )
}