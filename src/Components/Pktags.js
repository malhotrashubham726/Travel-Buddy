import React, { useState } from 'react'
import {Link} from 'react-router-dom';

export default function Pktags(props) {

  const [value, setValue]=useState({
    height: "",
    weight: ""
  })

  const insideFunc=async(e) => {
    e.preventDefault();
    const fetchAPI=await fetch(props.url);
    const json=await fetchAPI.json();
    setValue({
      height: json.height,
      weight: json.weight
    })
  }

  return (
    <div>
      <div style={{border: "2px solid black", position: "relative", height: "40px"}}>
        <div><Link to={props.url} onClick={(e) => {insideFunc(e)}}>{props.name}</Link></div>
        <div style={{position: "absolute", top: "0", left: "10px"}}>Height: {value.height}</div>
        <div style={{position: "absolute", bottom: "0", left: "10px"}}>Weight: {value.weight}</div>
      </div>
    </div>
  )
}
