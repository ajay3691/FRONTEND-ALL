import React, { Component } from 'react'

export class Login3 extends Component {
    state = {
        email: "",
        password: ""
    }

    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    /*    emailHandler = (event) => {
           this.setState({ email: event.target.value })
       }
       passwordHandler = (event) => {
           this.setState({ password: event.target.value })
       } */
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <form>                        {/* <form onSubmit={this.submitHandler}> */}
                <label htmlFor="">Email</label>
                    <input type="text" name="email" onChange={this.updateHandler} />
                    <br />
                    <label htmlFor="">Password</label>
                    <input type="text" neme="password" onChange={this.updateHandler} />
                    <br />

                    <button onClick={this.submitHandler}>Login</button>
                    {/* <input type="submit" value="login" /> */}
                </form>
            </div>
        )
    }
}

export default Login3
