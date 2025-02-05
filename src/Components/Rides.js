import React, { useContext, useEffect, useState } from 'react'
import Bookings from './Bookings'
import bookContext from '../Context/BookContext'

export default function Rides() {
  const { bookings, getBooking, addBooking, setError }=useContext(bookContext);
  console.log(bookings);

  const [book, setBook] = useState({
    from: "",
    to: "",
    noOfMembers: ""
  })

  const bookBtn = (() => {
    addBooking(book.from, book.to, book.noOfMembers);
    setBook({
      from: "",
      to: "",
      noOfMembers: ""
    })
    setError("Booking added successfully");
    console.log("Button clicked");
    console.log({to: book.to, from: book.from, noOfMembers: book.noOfMembers});
  })

  const onChange = ((e) => {
    setBook({...book, [e.target.name]: e.target.value});
  })

  useEffect(() => {
    getBooking();
    //eslint-disable-next-line
  }, []);

  const isDisabled=book.from.length<3 || book.to.length<3 || book.noOfMembers.length<1;

  return (
    <>
    <div style={{marginTop: "25px"}}>
      <div>Book a ride to reach wherever you want!</div>
    </div>
    <div className='form-container' style={{width: "320px"}}>
        <div className='form-group py-5' style={{marginTop: "20px"}}>
            <label htmlFor="">From:</label>
            <input className='px-10 py-5' type="text" onChange={onChange} minLength="5" name="from" value={book.from} id="" />
        </div>
        <div className='form-group py-5'>
            <label htmlFor="">To:</label>
            <input className='px-10 py-5' type="text" onChange={onChange} name="to" value={book.to} id="" />
        </div>
        <div className='form-group py-5'>
            <label htmlFor="">No of members:</label>
            <input className='px-10 py-5' type="text" onChange={onChange} name="noOfMembers" value={book.noOfMembers} id="" />
        </div>
        {/* <div className='form-group py-5'>
            <label htmlFor="">Date of travel:</label>
            <input className='px-10 py-5' type="text" name="" id="" />
        </div> */}
        <div className='py-5'>
            <button style={{padding: "4px", cursor: "pointer"}} onClick={bookBtn} disabled={isDisabled}>Book Now!</button>
        </div>
    </div>
    <div className='d-grid grid-col-3 grid-gap-10'>
      {bookings.map((value) => {
        return <Bookings key={value.id} rides={value}/>
      })}
    </div>
    </>
  )
}
