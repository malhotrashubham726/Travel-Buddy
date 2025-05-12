import React, { useEffect, useState } from 'react'
import Pktags from './Pktags';

export default function Pokemon() {
    const [value, setValue]=useState({
        results: []
    })

    const pkFunc=async() => {
        const fetchApi=await fetch('https://pokeapi.co/api/v2/pokemon/');
        const json=await fetchApi.json();
        setValue({
            results: json.results
        })
    }

    useEffect(() => {
        pkFunc();
    })

  return (
    <div>
        <div>
            <div>Pokemon Details</div>
            <div style={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px"}}>
                {value.results.map((element) => {
                    return <Pktags name={element.name} url={element.url}/>
                })}
            </div>
        </div>
    </div>
  )
}
