import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isVegetarian: false,
            isLactoseFree: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === checkbox ?
            this.setState({
                [name]: checked
            }) :
        this.setState({
            [name]: value
        })

    }


    render() {
        return (
            <main>
                <form>
                    <input 
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="First Name" />

                    <br />

                    <input 
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="Last Name" />

                    <br />

                    <input 
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    placeholder="Age" />

                    <br />

                    <label>
                        <input
                        name="gender"
                        type="radio"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange} /> Male
                    </label>

                    <br />

                    <label>
                        <input 
                        name="gender"
                        type="radio"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange} /> Female
                    </label>

                    <br />

                    <select 
                    name="destination"
                    value={this.state.destination}
                    onChange={this.handleChange}>
                        <option value=""> -- Please choose a destination --</option>
                        <option value="germany">Germany</option>
                        <option value="aberystwyth">Aberystwyth</option>
                        <option value="cardiff">Cardiff</option>
                        <option value="barry">Barry</option>
                    </select>

                    <br />

                    <label>
                        <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        onChecked={this.state.isVegan}/> Vegan?
                    </label>
                    <br />
                    <label>
                        <input 
                        type="checkbox"
                        name="isVegetarian"
                        onChange={this.handleChange}
                        onChecked={this.state.isVegetarian}/> Vegetarian?
                    </label>
                    <br />
                    <label>
                        <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={this.handleChange}
                        onChecked={this.state.isLactoseFree}/> Lactose Free?
                    </label>
                    <br />

                    <button>Submit</button>
                </form>

                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>

                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Vegetarian: {this.state.isVegetarian ? "Yes" : "No"}</p>
                <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>

            </main>
        )
    }
}

export default App