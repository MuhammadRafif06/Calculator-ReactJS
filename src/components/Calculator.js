import React, { useState } from 'react'

function Calculator() {
    // kiri -> getter
    // kanan -> setter
    const [value, setValue] = useState("");


    const handleClick = (e) => {
        setValue(value.concat(e.target.value));
    }

    const clear = () => {
        setValue("")
    }

    const backspace = () => {
        setValue(value.slice(0, -1))
    }

    const result = () => {
        try {
            setValue(eval(value).toString())
        } catch {
            setValue("error")
        }
    }

    const keypad = ['%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', ]

    return (
      
        <div className="container">
            <div className="calculator">
                <input type="text" value={value}/>
                <button onClick={clear} id="clear">C</button>
                <button onClick={backspace} id="backspace">DEL</button>
                {keypad.map((key) => (
                    <button value={key} onClick={handleClick}>{key}</button>
                ))}
                <button className='equal' onClick={result} id="result">=</button>
            </div>
        </div>
    )
}   

export default Calculator