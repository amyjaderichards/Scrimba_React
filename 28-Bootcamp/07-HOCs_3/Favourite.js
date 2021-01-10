import React, { Component } from "react";
import { withToggler } from "./HOCs/withToggler"

class Favourite extends Component {
    render() {
        return (
            <div>
                <h3>Click heart to favourite</h3>
                <h1>
                    <span onClick={this.props.toggle}>{this.props.on ? "❤️" : "♡"}</span>
                </h1>
            </div>
        )
    }
}

// FUNCTIONAL COMPONENT
function Favourite(props) {
    return (
        <div>
            <h3>Click heart to favourite</h3>
            <h2>
                <span onClick={props.toggle}>{props.on ? "❤️" : "♡"}</span>
            </h2>
        </div>
    )
}

export default withToggler(Favourite, {defaultOnValue: false});