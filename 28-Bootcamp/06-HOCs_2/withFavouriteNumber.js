import React from "react";

// A function that takes a component as its first argument and returns a new component that wraps
// the given component, providing extra capabilities to it.

export function withFavouriteNumber(component) {
    const Component = component;
    return function(props) {
        return (
            <Component favouriteNumber={9} {...props}/>
        )
    }
}