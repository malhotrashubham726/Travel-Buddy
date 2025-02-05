import React, { useState } from 'react'

export default function Textform() {
    const [value, setValue]=useState("");
    const upperCase=(() => {
        setValue(value.toUpperCase());
    })

    const lowerCase=(() => {
        setValue(value.toLowerCase());
    })

    const copyText=(() => {
        let tag=document.getElementsByTagName('textarea')[0];
        tag.select();
        navigator.clipboard.writeText(tag.value);
    })

    const removeSpaces=(() => {
        const regex=/[ ]+/g;
        setValue(value.replace(regex, " "));
    })

    const clearText=(() => {
        setValue("");
    })

    const onChange=((e) => {
        setValue(e.target.value);
    })
  return (
    <div>
        <div className='d-flex flex-col flex-gap-20 align-items-center'>
            <textarea name="" id="" rows="10" cols="40" value={value} onChange={onChange}></textarea>
            <div className='d-flex flex-gap-10 justify-content-center'>
                <button onClick={upperCase}>Comvert to Upper Case</button>
                <button onClick={lowerCase}>Convert to Lower Case</button>
                <button onClick={copyText}>Copy Text</button>
                <button onClick={removeSpaces}>Remove Extra Spaces</button>
                <button onClick={clearText}>Clear Text</button>
            </div>
        </div>
        <div>Text Summary</div>
        <div>{value.split(/\s+/g).filter((element) => {
            return element.length!==0
        }).length} words and {value.replace(/\s+/g, "").length} characters</div>
    </div>
  )
}
