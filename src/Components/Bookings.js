import React, { useContext } from 'react'
import bookContext from '../Context/BookContext';

export default function Bookings(props) {
  const {delBooking}=useContext(bookContext);
  const {rides} =props;
  console.log(rides)

  const deleteBooking = ((id) => {
    delBooking(id);
  })

  return (
    <div className='frames'>
      <i className="fa-solid fa-trash-can fontawesome-delete" style={{position: "absolute", top: "5px", right: "8px", cursor: "pointer", fontSize: "14px"}} onClick={()=>deleteBooking(rides._id)}></i>
      <i className="fa-solid fa-pen-to-square date fontawesome-edit" style={{position: "absolute", top: "5px", left: "8px", cursor: "pointer", fontSize: "14px"}}></i>
      <div>img</div>
      <div>{rides.to}</div>
      <div>{rides.from}</div>
      <div>{rides.noOfMembers}</div>
      <div>{`Travel Date: 26-01-2025`}</div>
    </div>
  )
}
