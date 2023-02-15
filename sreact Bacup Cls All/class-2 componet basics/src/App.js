import React, { Component } from 'react'
import Navbar from './Navbar'
import Message from './Message/Message'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello GM</h1>
        <Message />
      </div>
    )
  }
}

export default App
