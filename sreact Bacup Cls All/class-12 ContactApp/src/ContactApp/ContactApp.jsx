import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import Axios from 'axios'
class ContactApp extends Component {
    constructor(props) {
        super(props);
        console.log("First constructor will execute")
        this.state = {
            contacts: [],
            sel_Contact: {}
        }
    }

    userSelected_Contact_Method = (contact) => {
        this.setState({ sel_Contact: contact })
        /* console.log(contact.name.first, "line 12") */
    }

    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({ contacts: response.data })
            })
            .catch()
    }


    render() {
        console.log("Second - render method ")
        return <div className="container">
            <div className="row">
                {/* <pre>{JSON.stringify(this.state.contacts)}</pre> */}
                <div className="col-md-8">
                    {
                        this.state.contacts.length > 0 ? <React.Fragment>    {/* Arry */}
                            <ContactList  contacts={this.state.contacts} Data={this.userSelected_Contact_Method}  />
                        </React.Fragment> : null
                    }

                </div>
                <div className="col-md-4 mt-5">
                    {
                        Object.keys(this.state.sel_Contact).length > 0 ? <>     {/*  mt Object */}
                            <ContactDetails selectedData={this.state.sel_Contact} />
                        </> : null
                    }

                </div>
            </div>
        </div>
    }
}

export default ContactApp
