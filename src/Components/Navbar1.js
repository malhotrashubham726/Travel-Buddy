import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar1() {
  return (
    <div>
        <div>
            <img className='nav-image' src="https://i.etsystatic.com/27941250/r/il/4a5f9a/3848023560/il_570xN.3848023560_csrz.jpg" alt="" />
        </div>
        <div className='d-flex' style={{padding: "15px", backgroundColor: "skyblue"}}>
            <div><Link to='/' className='link-tag'>Home</Link></div>
            <div><Link to='/login' className='link-tag'>Login</Link></div>
            <div><Link to='/signup' className='link-tag'>Signup</Link></div>
            <div><Link to='/rides' className='link-tag'>Rides</Link></div>
            <div><Link to='/textform' className='link-tag'>TextForm</Link></div>
            <div><Link to='/pk' className='link-tag'>Pokemon</Link></div>
        </div>
    </div>
  )
}
