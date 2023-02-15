import React from 'react'
class Users extends React.Component {
    constructor(props) {
        super(props)
        console.log("First -Const")
    }

    componentDidMount() {
        console.log("Third - compDidMount")
    }

    render() {
        console.log("Second - render method")
        return <>
            <h1>User Comp111</h1>
        </>
    }

}
export default Users