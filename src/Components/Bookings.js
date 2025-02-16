import React, { useContext, useEffect, useState } from 'react'
import bookContext from '../Context/BookContext';

export default function Bookings(props) {
  const {delBooking, editBooking}=useContext(bookContext);
  const {rides} =props;

  const [edit, setEdit]=useState(false);
  const [disable, setDisable]=useState(false);
  const [book, setBook]=useState({
    from: "",
    to: "",
    noOfMembers: ""
  })

  const deleteBooking = ((id) => {
    delBooking(id);
  })

  useEffect(() => {
    if(book.from.length<3 || book.to.length<3 || book.noOfMembers<1) {
      setDisable(true);
    }

    else {
      setDisable(false);
    }
    //eslint-disable-next-line
  }, [book.from, book.to, book.noOfMembers]);

  const modify=((id) => {
    setEdit(true);
    setBook({
      from: rides.from,
      to: rides.to,
      noOfMembers: rides.noOfMembers
    })
  })

  const modifyBooking=(() => {
    editBooking(rides._id, book.from, book.to, book.noOfMembers);
    setEdit(false);
  })

  const onChange=((e) => {
    setBook({...book, [e.target.name]: e.target.value});
  })

  return (
    <>
    {edit ? (
      <div className='modal'>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "7px"}}>
          <i className="fa-sharp fa-solid fa-xmark" style={{position: "absolute", right: "15px", cursor: "pointer"}} onClick={()=> setEdit(false)}></i>
          <h2>Edit Booking</h2>
          <label htmlFor="">From:</label>
          <input className='px-10 py-5' type="text" onChange={onChange} name="from" value={book.from} id="" />
          <label htmlFor="">To:</label>
          <input className='px-10 py-5' type="text" onChange={onChange} name="to" value={book.to} id="" />
          <label htmlFor="">No of members:</label>
          <input className='px-10 py-5' type="text" onChange={onChange} name="noOfMembers" value={book.noOfMembers} id="" />
        </div>
        <div className='py-5'>
          <button style={{padding: "4px", cursor: "pointer", marginTop: "5px"}} disabled={disable} onClick={modifyBooking}>Book Now!</button>
        </div>
      </div>
      ) : (
        <div className='frames'>
          <i className="fa-solid fa-trash-can fontawesome-delete" style={{position: "absolute", top: "5px", right: "8px", cursor: "pointer", fontSize: "14px"}} onClick={()=>deleteBooking(rides._id)}></i>
          <i className="fa-solid fa-pen-to-square date fontawesome-edit" style={{position: "absolute", top: "5px", left: "8px", cursor: "pointer", fontSize: "14px"}} onClick={() =>modify(rides._id)}></i>
          <div>img</div>
          <div>{rides.to}</div>
          <div>{rides.from}</div>
          <div>{rides.noOfMembers}</div>
          <div>{`Travel Date: 26-01-2025`}</div>
        </div>
        )}            
      </>
  )
}