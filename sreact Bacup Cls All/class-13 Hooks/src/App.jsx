import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Message from './HookEx/Message'
import Counter from './HookEx/Counter'
import Product from './HookEx/Product'

import Product1 from './Products/Product1'
import ProductClass from './Products/ProductClass'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/useState" element={<Message />} />
                    <Route path="/message" element={<Counter/>} />
                    <Route path="/product" element={<Product/>} />

                    <Route path="/product1" element={<Product1/>} />
                    <Route path="/productClass" element={<ProductClass/>} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}

export default App
