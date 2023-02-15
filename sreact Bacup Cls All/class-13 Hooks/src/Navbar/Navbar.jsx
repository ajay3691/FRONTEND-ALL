import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link className="navbar-brand" to='/'>Contact App Example</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list"> <Link className="nav-link" to="/useState">useState msg </Link></li>
                        <li className="nav-list"> <Link className="nav-link" to="/message"> useState Hooks </Link></li>
                        <li className="nav-list"> <Link className="nav-link" to="/product"> Product </Link></li>

                        <li className="nav-list"> <Link className="nav-link" to="/product1"> Product1 </Link></li>
                        <li className="nav-list"> <Link className="nav-link" to="/productClass"> ProductClass </Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
