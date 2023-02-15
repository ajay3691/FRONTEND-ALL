import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
    return <Fragment>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
            </Routes>
        </Router>
    </Fragment>
}

export default App
