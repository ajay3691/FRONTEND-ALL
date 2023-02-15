import React, { Component } from 'react'

export class Message extends Component {
    state = {
        msg: "Hello"
    }
    msgHandler = (msg) => {
        this.setState({ msg: msg })
    }

    render() {
        return (
            <div>
                <h4>Wish Message : {this.state.msg}</h4>
                <button onClick={this.msgHandler.bind(this, " Hi, Good Morning")}     >GM</button>
                <button onClick={this.msgHandler.bind(this, "Hello , Good Afternoon")}>GA</button>
                <button onClick={this.msgHandler.bind(this, "Hello , Good Night")}    >GN</button>

            </div>
        )
    }
}

export default Message
