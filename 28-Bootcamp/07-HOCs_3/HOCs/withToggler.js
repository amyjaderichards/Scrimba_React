// HOC is a function that takes a component as a parameter and returns a new
// component wrapping the given component, and adding functioanlity to it 
import React from "react";

class Toggler extends React.Component {
    state = {
        on: this.props.defaultOnValue,
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on,
            }
        })
    }

    render() {
        const C = this.props.component;
        return (
            <C on={this.state.on} toggle={this.toggle} {...props} />
        )
    }
}

export function withToggler(component, optionsObj) {
    return function(props) {
        return (
            <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props} />
        )
    }
}
