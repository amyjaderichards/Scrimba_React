import React, {Component} from "react"

class NewJSFeatures extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    // You can use arrow functions for class methods
    // Arrow functions use lexical this, so won't create its own context
    // Automatically adopts the .this from the class its defined in
    // No need to bind anymore
    increment = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    // Implicit returns (no need for the return keyword)
    decrement = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    };
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>    
        )
    }
}

export default NewJSFeatures