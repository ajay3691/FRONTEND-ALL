import React, { useState } from 'react'

const Message = () => {
   // let message = 'hello'
    let [state, setstate] = useState("Hello");

    let gmHandler = ()=>{
        setstate("Good morning")
    }
    let gnHandler = ()=>{
        setstate("Good Night")
    }
    return (
        <div>
            <h1>wish message : {state}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>Gn</button>
        </div>
    )
}

export default Message
