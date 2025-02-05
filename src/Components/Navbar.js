import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div className='nav-image'>
      <img src="https://i.etsystatic.com/27941250/r/il/4a5f9a/3848023560/il_570xN.3848023560_csrz.jpg" alt="" />
    </div>
    <nav className='d-flex mx-10 my-10 px-5'>
      <div className='px-10'><Link to="/">Home</Link></div>
      <div className='px-10'><Link to="/login">Login</Link></div>
      <div className='px-10'><Link to="/signup">Signup</Link></div>
      <div className='px-10'><Link to="/ride">Rides</Link></div>
      <div className='px-10'><Link to="/textform">TextForm</Link></div>
      <div className='px-10'><Link to="/">Updates</Link></div>
    </nav>
    </>
  )
}