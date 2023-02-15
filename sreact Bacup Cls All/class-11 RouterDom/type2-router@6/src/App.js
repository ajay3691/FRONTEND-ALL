import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
    return <Fragment>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/home" element={<Home />} />

            </Routes>
        </Router>
    </Fragment>
}

export default App
