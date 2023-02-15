import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    constructor(props) {
        super(props)
        console.log("First Constructor - will execute")
        this.state = {
            users: []
        }
    }
    /*  componentDidMount() {
         Axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response) => {
                 console.log(response)
                 this.setState({ users: response.data })
             }).catch(() => { })
     } */

    getUserData = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                //console.log(response)
                console.log(response.data)
                this.setState({ users: response.data })
            })
            .catch(() => { })
    }

    render() {
        console.log("Second -Render method")
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <button onClick={this.getUserData}>Get Data</button>   {/* componentDidMount() {} No need button */}
            </div>
        )
    }
}

export default Users
/*
API URL    :https://jsonplaceholder.typicode.com/users
Method Type:GET
Access     :Public
Req Fields :None
*/