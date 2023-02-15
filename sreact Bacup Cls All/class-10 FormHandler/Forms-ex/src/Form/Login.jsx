import React, { Component } from 'react'

export class Login1 extends Component {
    state = {
        email: "",
        password: ""
    }

    emailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <form>{/* <form onSubmit={this.submitHandler}> */}
                    <label htmlFor="">Email</label>
                    <input type="text" onChange={this.emailHandler} />
                    <br />
                    <label htmlFor="">Password</label>
                    <input type="text" onChange={this.passwordHandler} />
                    <br />
                    <label htmlFor="hello"></label>
                    <button onClick={this.submitHandler}>Login</button>
                    {/* <input type="submit" value="login" /> */}
                </form>
            </div>
        )
    }
}

export default Login1
