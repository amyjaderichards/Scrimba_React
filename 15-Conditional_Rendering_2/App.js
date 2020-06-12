import React from "react"

import Conditional from "./Conditional"

class App extends React.component {
    constructor() {
        super()
        this.state = {
            unreadMessages : [
                "Call your sister!",
                "New spam email available, links are ok to click"
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.unreadMessages.length > 0 &&
                <h2>You have {this.state.unreadMessages.length} unread messages!</h2>}
            </div>
        )
    }
}

export default App