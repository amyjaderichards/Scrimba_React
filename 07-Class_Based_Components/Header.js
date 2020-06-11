import React from "react"

class Header extends React.component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        )
    }
}

export default Header