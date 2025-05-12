import React, { useState } from 'react'

export default function Signup1() {
  const[cred, setCred]=useState({
    name: "",
    email: "",
    password: ""
  })

  const onChange=((e) => {
    setCred({...cred, [e.target.name]: e.target.value})
  })

  const submitDetails=(() => {
    if(!validateEmail(cred.email)) {
      console.log("Its failed");
    }

    else {
      console.log("Booking successfully");
    }
  })

  const validateEmail=((email) => {
    const regex=/^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/g;
    return regex.test(email);    
  })

  return (
    <div>
      <div className='d-flex flex-col align-items' style={{width: "300px", margin: "auto", gap: "15px"}}>
      <div className='d-flex justify-content'>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" id="" value={cred.name} onChange={onChange}/>
        </div>
        <div className='d-flex justify-content'>
            <label htmlFor="">Email:</label>
            <input type="text" name="email" id="" value={cred.email} onChange={onChange}/>
        </div>
        <div className='d-flex justify-content'>
            <label htmlFor="">Password:</label>
            <input type="password" name="password" id="" value={cred.password} onChange={onChange}/>
        </div>
        <div><input type="button" value="Signup" style={{padding: "5px"}} disabled={cred.name.length<3 || cred.password.length<5} onClick={submitDetails}/></div>
      </div>
    </div>
  )
}