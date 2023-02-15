import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import ContactApp from './ContactApp/ContactApp'
import ContactApp1 from './ContactApp-b/ContactApp1'  /* 1111111 */
import Product from './Products/Product'
import Product1 from './Products/Product1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/contacts" element={<ContactApp />} />
                    <Route path="/contacts1" element={<ContactApp1 />} />    {/* 111111 */}
                    <Route path="/message" element={<Message />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/productclass" element={<Product1 />} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}

export default App
