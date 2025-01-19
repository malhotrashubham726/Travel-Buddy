import React from 'react'

export default function Rides() {
  return (
    <>
    <div style={{marginTop: "25px"}}>
      <div>Book a ride to reach wherever you want!</div>
    </div>
    <div className='form-container' style={{width: "320px"}}>
        <div className='form-group py-5' style={{marginTop: "20px"}}>
            <label htmlFor="">From:</label>
            <input className='px-10 py-5' type="text" name="" id="" />
        </div>
        <div className='form-group py-5'>
            <label htmlFor="">To:</label>
            <input className='px-10 py-5' type="text" name="" id="" />
        </div>
        <div className='form-group py-5'>
            <label htmlFor="">No of members:</label>
            <input className='px-10 py-5' type="text" name="" id="" />
        </div>
        <div className='form-group py-5'>
            <label htmlFor="">Date of travel:</label>
            <input className='px-10 py-5' type="text" name="" id="" />
        </div>
        <div className='py-5'>
            <button style={{padding: "4px"}}>Book Now!</button>
        </div>
    </div>
    </>
  )
}
