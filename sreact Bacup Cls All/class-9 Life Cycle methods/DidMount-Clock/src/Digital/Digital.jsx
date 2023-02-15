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
        //console.log("Third - compDidMount method will excute")
        setInterval(()=>{
            this.setState({currentTime: new Date().toLocaleTimeString()})

        },1000)
    }

    render() {
        //console.log("second render method will excute")
        return (
            <div> 
                <h3>Time -- {this.state.currentTime}</h3>
            </div>
        )
    }
}

export default Digital
