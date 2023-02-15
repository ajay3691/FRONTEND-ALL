import React, { Component } from 'react'

class ContactList extends Component {

    userSelected_Contact = (contact) => {       // click button handler
        /* console.log(contact.name.first); */
        /* console.log("test case 123") */
        this.props.Data(contact)
    }
    render() {
        return (
            <div>
                <h1>Contact List</h1>
                {/*{<pre>{JSON.stringify(this.props)}</pre>} */}
                <table className="table table-hover mt-5">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>SL No</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map((contact, index) => {
                                return <tr key={index}  /* onMouseOver={this.userSelected_Contact.bind(this, contact)} */ >
                                    <td>{index + 1}</td>
                                    {/*  <td>{contact.login.uuid.slice(-4)}</td> */}
                                    <td>{contact.login.uuid.substr(34, 36)}</td>
                                    <td>{contact.name.first.toUpperCase()}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.gender.slice(0, 1).toUpperCase()}</td>
                                    <td><button className="btn btn-success" onClick={this.userSelected_Contact.bind(this, contact)}>Click</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ContactList
