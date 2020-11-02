import React, {Component} from "react"

class NewJSFeatures extends Component {
    // No need for a constructor if you use arrow functions and get rid of the binding
    constructor() {
        super()
        state = {
            count: 0,
            greeting: "Hello",
            age: 23,
        }
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
        // You can rename state properties like this
        const { count : number, greeting, age } = this.state;
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>    
        )
    }
}

export default NewJSFeatures