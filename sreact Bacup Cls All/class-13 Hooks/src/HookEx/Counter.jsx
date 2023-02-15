import React, { useState } from 'react'

const Message = () => {
    /* let msg = "Hello" */

    let [msg, setMSG] = useState("Hello");
    let [counter, setCounter] = useState(1);
    //let [contacts, setContacts] = useState([])
    let gmHandler = () => {
        setMSG("Good Morning")
    }
    let gnHandler = () => {
        setMSG("Good Night")
    }

    let Handler = () => {
        setCounter(counter * 2)
    }
    return (
        <div>
            <h1>Messages:{msg} </h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
            <hr />
            <h1>Countings:{counter}</h1>
            <button onClick={() => { setCounter(counter - 1) }}>-</button>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
            <button onClick={Handler}>*</button>
        </div>
    )
}

export default Message
