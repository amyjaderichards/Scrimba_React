import React from "react"

class App extends React.Component {
    render() {
        return (
            <div>
                <img onMouseOver={() => console.log("Hovered!")}
                src="https://www.fillmurray.com/200/100" />
                <br />
                <br />
                <button onClick={}>Click me</button>
            </div>
        )
    }
}

export default App