import React from 'react'
import Digital from './Digital/Digital1'
import Navbar from './Navbar/Navbar'

class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <h3>App Component</h3>
            <hr />
            <Digital/>
            
           
        </div>
    }
}
export default App