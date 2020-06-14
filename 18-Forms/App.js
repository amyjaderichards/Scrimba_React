import React from "react"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input 
                type="text" 
                name="firstName"
                value={this.state.firstName}
                placeholder="first name" 
                onChange={this.handleChange}/>

                <input type="text"
                name="lastName"
                value={this.state.lastName}
                placeholder="last name"
                onChange={this.handleChange}/>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App