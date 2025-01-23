import React, { useState } from 'react'

export default function Login() {

  const[credentials, setCredentials]=useState({
    email: "",
    password: ""
  })

  const onChange = ((e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  })

  const loginBtn = async() => {
    const loginUser=await fetch('http://localhost:5000/cred/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    })

    const json=await loginUser.json();
    console.log(json);
  }

  return (
    <div className='form-container'>
      <div className='form-group py-5'>
        <label htmlFor="">Email:</label>
        <input className='px-10 py-5' type="text" name="email" onChange={onChange} value={credentials.email} id="" />
      </div>
      <div className='form-group py-5'>
        <label htmlFor="">Password:</label>
        <input className='px-10 py-5' type="text" name="password" onChange={onChange} value={credentials.password} id="" />
      </div>
      <div className='py-5'>
        <button style={{padding: "4px"}} onClick={loginBtn}>Login</button>
      </div>
    </div>
  )
}
