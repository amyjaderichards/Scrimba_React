import React from "react"
import randomcolor from "randomcolor"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const newColor = randomColor()
            this.setState({color: newColor})
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
                
            </div>
        )
    }
}

export default App