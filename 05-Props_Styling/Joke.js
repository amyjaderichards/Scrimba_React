import React from "react"

function Joke(props) {
    //console.log(props.question);
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Questions: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
            <h3></h3>
        </div>
    )
}

export default Joke