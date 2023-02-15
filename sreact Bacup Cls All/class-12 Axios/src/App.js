import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
import User1 from './Components/User1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
    return <Fragment>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<User/>} />
                <Route path="/user1" element={<User1/>} />
            </Routes>
        </Router>
    </Fragment>
}

export default App
