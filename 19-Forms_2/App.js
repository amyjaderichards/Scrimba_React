import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColour: "green"
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="first name"
                    onChange={this.handleChange} />

                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="last name"
                    onChange={this.handleChange} />

                <textarea value={"Some default value"} />

                <br />

                <label>
                    <input
                        type="checkbox"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange} /> Is he friendly?
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange} /> Male
                </label>

                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange} /> Female
                </label>

                <br />

                <select 
                value={this.state.favColour}
                onChange={this.handleChange}
                name="favColour">
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                </select>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favourite colour is {this.state.favColour}</h2>

            </form>





        )
    }
}

export default App