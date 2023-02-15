import React, { Component } from 'react'

class ContactDetails extends Component {
    render() {
        let { selectedData } = this.props
        return (
            <div>
                {/*    <pre>{JSON.stringify(this.props)}</pre> */}
                <h1>Contact Details</h1>
                <div className="card">
                    <div className="card-header">
                        <img src={selectedData.picture.large} alt="" />
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">{selectedData.gender}</li>
                            <li className="list-group-item">{selectedData.email}</li>
                            <li className="list-group-item">{selectedData.dob.age}</li>
                            <li className="list-group-item">{selectedData.login.username}</li>
                            <li className="list-group-item">{selectedData.location.country}</li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails
