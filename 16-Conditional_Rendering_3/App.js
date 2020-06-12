import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let wordDisplay = this.state.isLoggedIn ? "in" : "out"
        let buttonDisplay = this.state.isLoggedIn ? "out" : "in"

            return (
                <div>
                    <h1>You are logged {wordDisplay}</h1>
                    <button onClick={this.handleClick}>Logged {buttonDisplay}</button>
                </div>
            )
    }
}

export default App