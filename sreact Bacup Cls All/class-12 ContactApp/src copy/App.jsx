import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import ContactApp from './ContactApp/ContactApp'
import ContactApp1 from './ContactApp-b/ContactApp1'  /* 1111111 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/contacts" element={<ContactApp />} />
                    <Route path="/contacts1" element={<ContactApp1 />} />    {/* 111111 */}
                   
                </Routes>
            </Router>
        </React.Fragment>
    }
}

export default App
