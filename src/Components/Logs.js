import React, { useContext } from 'react'
import bookContext from '../Context/BookContext'

export default function Logs() {
    const {error}=useContext(bookContext);
  return (
    <div className='' style={{height: "3vh", padding: "5px"}}>
      <div id='errorLogs' style={{color: "black"}}>{error}</div>
    </div>
  )
}