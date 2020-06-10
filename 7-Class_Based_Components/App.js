import React from "react"


import Header from "./Header"
import Greeting from "./Greeting"

// Class component
class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="scrimba"/>
                <Greeting />
            </div>

        )
    }
}


export default App