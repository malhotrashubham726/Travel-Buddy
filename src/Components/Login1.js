import React, { useState } from 'react';

export default function Login1() {

  const[cred, setCred]=useState({
    email: "",
    password: ""
  })

  const onChange=((e)=> {
    setCred({...cred, [e.target.name]: e.target.value})
  })

  const loginDetails=async() => {
    if(!emailValidate(cred.email)) {
      console.log("Email is not valid")
    }

    else {
      const fetchAPI=await fetch(`http://localhost:5000/cred1/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({email: cred.email, password: cred.password})
      })

      const resp=await fetchAPI.json();
      console.log(resp);

      if(resp.error) {
        console.log(resp.error)
      }

      else {
        console.log(resp.token);
      }
      
      console.log("Login successfully")
    }
  }

  const emailValidate=((email) => {
    const regex=/^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/g;
    return regex.test(email);
  })

  return (
    <div>
      <div className='d-flex flex-col align-items' style={{width: "300px", margin: "auto", gap: "15px"}}>
        <div className='d-flex justify-content'>
            <label htmlFor="">Email:</label>
            <input type="text" name="email" id="" value={cred.email} onChange={onChange}/>
        </div>
        <div className='d-flex justify-content'>
            <label htmlFor="">Password:</label>
            <input type="password" name="password" id="" value={cred.password} onChange={onChange}/>
        </div>
        <div><input type="button" value="Login" style={{padding: "5px"}} disabled={cred.password.length<5} onClick={loginDetails}/></div>
      </div>
    </div>
  )
}
