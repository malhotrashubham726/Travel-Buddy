import React, { useState } from 'react'
import bookContext from './BookContext'

export default function BookState(props) {
    const initialBookings=[];
    const [error, setError]=useState("");
    const [bookings, setBookings]=useState(initialBookings);

    setTimeout(() => {
        setError("");
    }, 3000);

    const addBooking = async(to, from, members) => {
        const addAPI=await fetch(`http://localhost:5000/travel/book`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "authtoken": localStorage.getItem('authtoken'),
            },
            body: JSON.stringify({to: to, from: from, noOfMembers: members})
        })

        const resp=await addAPI.json();
        console.log(resp.book);
        setBookings(bookings.concat(resp.book));
    }

    const getBooking = async() => {
        const getAPI=await fetch(`http://localhost:5000/travel/getdest`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "authtoken": localStorage.getItem('authtoken')
            }
        })

        const resp=await getAPI.json();
        setBookings(resp);
    }

    const delBooking = async(id) => {
        const delURL=await fetch(`http://localhost:5000/travel/del/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "authtoken": localStorage.getItem('authtoken')
            }
        })

        //eslint-disable-next-line
        const json=await delURL.text();
        
        const delFront=bookings.filter((value) => {
            return value._id !== id;
        })

        setBookings(delFront);
    }
    
  return (
    <div>
      <bookContext.Provider value={{error, bookings, setError, setBookings, addBooking, getBooking, delBooking}}>{props.children}</bookContext.Provider>
    </div>
  )
}