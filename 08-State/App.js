import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Amy",
            age: "23"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div >
        )
    }
}

export default App