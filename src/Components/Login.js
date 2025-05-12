import React, { useContext, useState } from 'react'
import bookContext from '../Context/BookContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let history=useNavigate();
  const { setError }=useContext(bookContext);

  const[credentials, setCredentials]=useState({
    email: "",
    password: ""
  })

  const onChange = ((e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  })

  const emailValidate=((email) => {
    const emailReg=/[a-zA-Z0-9.]+@[a-zA-Z]+.[a-zA-Z]+/g;
    return emailReg.test(email);
  })

  const loginBtn = async() => {
    if(credentials.email==="" || credentials.password===""){
      setError("Please enter mandatory fields");
    }

    else if(!emailValidate(credentials.email)) {
      setError("Email is not valid");
    }

    else if(credentials.password.length<3) {
      setError("Length of password should not be less than 3 characters")
    }

    else {
      console.log(credentials.email, credentials.password);
      const loginUser=await fetch('http://localhost:5000/cred/login', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
      })
  
      const json=await loginUser.json();
    
      if(json.error) {
        setError(json.error);
      }

      else {
        localStorage.setItem('authtoken', json.authtoken);
        setError(json.message);
        setCredentials({email: "", password: ""});
        history('/ride');
      }
    }
  }

  return (
    <div className='form-container'>
      <div className='form-group py-5'>
        <label htmlFor="">Email:</label>
        <input className='px-10 py-5' type="text" name="email" onChange={onChange} value={credentials.email} id="" />
      </div>
      <div className='form-group py-5'>
        <label htmlFor="">Password:</label>
        <input className='px-10 py-5' type="password" name="password" onChange={onChange} value={credentials.password} id="" />
      </div>
      <div className='py-5'>
        <button style={{padding: "4px"}} onClick={loginBtn}>Login</button>
      </div>
    </div>
  )
}
