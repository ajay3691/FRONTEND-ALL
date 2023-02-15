import React, { Component } from 'react'

export class Message extends Component {
    state = {
        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({ msg: "Hello, Good Morning" })
    }
    gaHandler = () => {
        this.setState({ msg: "Hello, Good Afternoon" })
    }
    gnHandler = () => {
        this.setState({ msg: "Hello, Good Night" })
    }

    render() {
        return (
            <div>
                <h4>Wish Message : {this.state.msg}</h4>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
                <button onClick={() => {
                    this.setState({ msg: "Good night, Go for dinner" }) // without Handler
                }}>GN</button>

            </div>
        )
    }
}

export default Message
