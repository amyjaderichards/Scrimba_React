import React, {useState} from "react"

function App() {
    const [answer] = useState("yes");
    return (
        <div>
            <h1>Is state important? {answer}</h1>
        </div>
    )
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important? {this.state.answer}</h1>
            </div>
        )
    }
}

export default App