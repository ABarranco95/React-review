import React, {Component} from 'react'

class Home extends Component {
    
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={message => {
                    this.state.message = 'Thank you!'
                }}>Subscribe</button>
            </div>
        )
    }
}

export default Home
