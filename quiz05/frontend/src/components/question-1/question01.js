import React, { Component } from 'react'
export default class question01 extends Component {
    constructor(){
        super()
        this.state={message:""};
        this.state={message2:""}
    }
    componentDidMount(){
        this.setState({
            message:"welcome to the jungle"
        })
    }
    componentDidUpdate(){
        this.setState({
            message2:"quiz are awesome :)"
        })
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}