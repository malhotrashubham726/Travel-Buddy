import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  let history=useNavigate();
  const authT=localStorage.getItem('authtoken');

  const [token, setToken]=useState(false);
  const logoutUser= (() => {
    const signOut=window.confirm("Do you want to logout");
    if(signOut) {
      localStorage.removeItem('authtoken');
      setToken(false);
      history('/');
    }
  })

  useEffect(() => {
    if(authT) {
      setToken(true);
    }

    else {
      setToken(false);
    }
  }, [authT]);

  return (
    <>
    <div className='nav-image'>
      <img src="https://i.etsystatic.com/27941250/r/il/4a5f9a/3848023560/il_570xN.3848023560_csrz.jpg" alt="" />
    </div>
    <nav className='d-flex mx-10 my-10 px-5'>
      <div className='px-10'><Link to="/">Home</Link></div>
      {token ? 
      <div className='px-10'><button onClick={logoutUser} style={{position: "relative", bottom: "0.8px", fontWeight: "300", fontSize: "15px", border: "none", background: "none", cursor: "pointer"}}>Logout</button></div> :
      <>
      <div className='px-10'><Link to="/login">Login</Link></div>
      <div className='px-10'><Link to="/signup">Signup</Link></div>
      </>
      }
      <div className='px-10'><Link to="/ride">Rides</Link></div>
      <div className='px-10'><Link to="/textform">TextForm</Link></div>
      <div className='px-10'><Link to="/pokemon">Pokemon</Link></div>
    </nav>
    </>
  )
}