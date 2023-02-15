import React from 'react'
import Message from './Message/Message1'
import Navbar from './Navbar/Navbar'

class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <h3>App Component</h3>
            <hr />
            <Message/>
           
        </div>
    }
}
export default App