import React from "react";

function Card(props) {
    const styles = {
        backgroundColour: props.cardColour,
        height: props.height,
        width: props.width
    }

    return (
        <div style={styles}></div>
    )
}

Card.defaultProps = {
    cardColour: "yellow",
    height: 150,
    width: 150
}

export default Card;