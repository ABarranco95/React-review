import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
    }

    addCount() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
        
    }


    subtractCount() {
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log(this.state.count)
        })
        
    }


    render() {
        return (
            <div>
                <div className="container">
                    <p>{this.state.count}</p>
                    <button onClick={() => this.subtractCount()}>-</button>
                    <button onClick={() => this.addCount()}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter
