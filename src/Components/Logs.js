import React, { useContext } from 'react'
import bookContext from '../Context/BookContext'

export default function Logs() {
    const {error}=useContext(bookContext);
  return (
    <div className='' style={{backgroundColor: "skyblue", height: "5vh", margin: "10px", padding: "5px"}}>
      <div id='errorLogs'>{error}</div>
    </div>
  )
}