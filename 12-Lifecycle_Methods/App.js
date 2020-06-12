import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    // DEPRECATED LIFECYCLE METHODS
    //componentWillMount()
    //componentWilLReceiveProps()
    //componentWillUpdate()

    componentDidMount() {
        // Get the data I need to correctly display
    }

    shouldComponentUpdate(nextProps, nextState) {
        //return true if want it to update
        //return false if not
    }

    componentWillUnmount() {
        //teardown or cleanup your code before your component disappears
        // (e.g. remove event listeners)
    }

    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
    }

    render() {
        return (
            <div>
                <p>Code goes here</p>
            </div>
        )
    }
}

export default App