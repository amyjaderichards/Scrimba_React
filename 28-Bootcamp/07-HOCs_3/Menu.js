import React, { Component } from "react";
import { withToggler } from "./HOCs/withToggler";

class Menu extends Component {
    state = {
        show: true,
    }

    toggleShow = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"} Menu </button>
                <nav style={{display: this.props.on ? "block" : "none"}}>
                    <h6>Signed in as coder1234</h6>
                    <a>Profile</a>
                    <a>Your Repos</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        )
    }
}

// FUNCTIONAL COMPONENT - don't need state, don't need to extend component, this.props becomes just props
function Menu(props) {
    return (
        <div>
                <button onClick={props.toggle}>{this.props.on ? "Hide" : "Show"} Menu </button>
                <nav style={{display: props.on ? "block" : "none"}}>
                    <h6>Signed in as coder1234</h6>
                    <a>Profile</a>
                    <a>Your Repos</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
    )
}

export default withToggler(Menu, {defaultOnValue: true});