import React from "react";

// New ES6 features

// We can use arrow functions for our class methods, this has a benefit as
// arrow functions use a lexical this which means it won't create its own 
// this context which means it automatically adopts the this from the class it's
// found in which means we don't need to bind this

class NewJSFeatures extends React.Component {
    state = {
        count: 0,
        name: "Amy"
    }

    // implicit return value
    increment = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }

    // arrow function
    decrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count -1
            }
        })
    }

    render() {
        // object destructuring
        const {count: number, myName} = this.state;
        return (
            <div>
                <h1>{number} {myName}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default NewJSFeatures