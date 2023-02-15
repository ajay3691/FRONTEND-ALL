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
    componentDidMount() {
        console.log("Third")
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response)
                this.setState({ users: response.data })
            })
            .catch((err) => {
                console.log("Error Message")
                console.error(err)
            })
    }

    render() {
        console.log("Second -Render method")
        return (
            <div className="containe mt-5r">
                <div className="row">
                    <pre>{JSON.stringify(this.state)}</pre>
                    {
                        this.state.users.length > 0 ? < >
                            <div className="col-md-8">
                                <table className='table table-hover'>
                                    <thead className='bg-dark text-white'>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.users.map((user) => {
                                                return <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </> : null
                    }
                </div>
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