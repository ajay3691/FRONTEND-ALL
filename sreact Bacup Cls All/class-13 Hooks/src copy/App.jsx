import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Register from './Register/Register'
import Register1 from './Register/Register1'
import MessageOne from './MessageReducer/MessageOne'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/register" element={<Register/>} />
                    <Route path="/register1" element={<Register1/>} />
                    <Route path="/reducer" element={<MessageOne/>} />

                </Routes>
            </Router>
        </React.Fragment>
    }
}

export default App
