import React, { Component } from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {
    render() {
        return <div>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/reduxEx" element={<Message />} />
                    </Routes>
                </Router>
            </Provider>
        </div>
    }
}

export default App
