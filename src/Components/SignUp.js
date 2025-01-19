import React, { useState } from 'react'

export default function SignUp() {

    const[credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleOnChange = ((e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    })

    const submitFunc = async () => {
        const signIn=await fetch('http://localhost:5000/cred/signup', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
        })
        const resp=await signIn.json()
        console.log(resp);
    }

  return (
    <div className='form-container' style={{width: "320px"}}>
        <div className='form-group py-5'>
            <label className='' htmlFor="">Name:</label>   
            <input className='px-10 py-5' type="text" name="name" onChange={handleOnChange} value={credentials.name} id="" />
        </div>
        <div className='form-group py-5'>
            <label className='' htmlFor="">Email:</label>
            <input className='px-10 py-5' type="text" name="email" onChange={handleOnChange} value={credentials.email} id="" />
        </div>
        <div className='form-group py-5'>
            <label className='' htmlFor="">Password:</label>
            <input className='px-10 py-5' type="text" name="password" onChange={handleOnChange} value={credentials.password} id="" /> 
        </div>
        <div className='py-5'>
            <button style={{padding: "4px"}} onClick={submitFunc}>Submit</button>
        </div>
    </div>
  )
}
