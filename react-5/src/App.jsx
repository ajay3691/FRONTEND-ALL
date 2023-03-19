import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Register from './Register/Register'
//import { store } from './redux/store'
//import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Router>


            </div >
        )
    }
}

export default App  