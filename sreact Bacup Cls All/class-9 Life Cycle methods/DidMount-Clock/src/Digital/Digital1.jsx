import React, { Component } from 'react'

export class Digital extends Component {
    constructor(props) {
        super(props)
        //console.log("First Constructor will excute automatically")
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({currentTime: new Date().toLocaleTimeString()})

        },1000) //[1000])
       // console.log("Third - compDidMount method will excute")
    }

    render() {
       // console.log("second render method will excute")
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <h3>Time -- {this.state.currentTime}</h3>
                            </div>
                            <div className="card-body">
                                {/* <button onClick={() => { this.setState({ currentTime: new Date().toLocaleTimeString() }) }}>tm</button> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Digital
