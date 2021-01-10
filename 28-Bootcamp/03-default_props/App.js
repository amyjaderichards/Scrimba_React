import React from "react";
import Card from "./Card"

function App() {
    return (
        <div>
            <Card cardColour="blue" height={250} width={400}/>
            <Card />
            <Card cardColour="red" />
        </div>

    )
}

export default App;