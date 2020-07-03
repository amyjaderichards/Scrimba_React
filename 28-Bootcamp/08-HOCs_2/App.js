import React from "react"
import { withFavoriteNumber } from "./withFavouriteNumber"

function App(props) {
    return (
        <div>
            {props.withFavoriteNumber}
        </div>
    )
}

export default withFavoriteNumber(App)