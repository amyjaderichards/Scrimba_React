import React from "react";
import { withFavouriteNumber } from "./withFavouriteNumber";

function App(props) {
    return (
        <div>{props.favouriteNumber}</div>
    )
}

const withFaveNumberHOC = withFavouriteNumber(App);
export default withFaveNumberHOC;