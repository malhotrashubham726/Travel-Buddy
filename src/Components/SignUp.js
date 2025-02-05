import React, { useContext, useState } from 'react'
import bookContext from '../Context/BookContext';

export default function SignUp(props) {
    const { setError, setToken }=useContext(bookContext);
    // const {setError}=props;

    const[credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleOnChange = ((e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    })

    const emailValidate=((email) => {
        const emailReg=/[a-zA-Z0-9.]+@[a-zA-Z]+.[a-zA-Z]+/g;
        return emailReg.test(email);
    })

    const submitFunc = async (e) => {
        if(credentials.name==="" || credentials.email==="" || credentials.password===""){
            setError("Please enter mandatory fields");
        }

        else if(!emailValidate(credentials.email)) {
            setError("Email is not valid");
        }

        else if(credentials.name.length<3) {
            setError("Length of name should not be less than 3 characters");
        }

        else if(credentials.password.length<3) {
            setError("Length of password should not be less than 3 characters")
        }

        else {
            const signIn=await fetch('http://localhost:5000/cred/signup', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
            })
            const resp=await signIn.json()
            console.log(resp);
            setError(resp.message);
            setToken(resp.authtoken);
            setCredentials({name: "", email: "", password: ""});
        }
    }

  return (
    <div className='form-container' style={{width: "320px"}}>
        <div className='form-group py-5'>
            <label className='' htmlFor="">Name:</label>   
            <input className='px-10 py-5' type="text" name="name" onChange={handleOnChange} value={credentials.name} id="name" />
        </div>
        <div className='form-group py-5'>
            <label className='' htmlFor="">Email:</label>
            <input className='px-10 py-5' type="text" name="email" onChange={handleOnChange} value={credentials.email} id="email" />
        </div>
        <div className='form-group py-5'>
            <label className='' htmlFor="">Password:</label>
            <input className='px-10 py-5' type="password" name="password" onChange={handleOnChange} value={credentials.password} id="password" /> 
        </div>
        <div className='py-5'>
            <button style={{padding: "4px"}} onClick={submitFunc}>Submit</button>
        </div>
    </div>
  )
}
