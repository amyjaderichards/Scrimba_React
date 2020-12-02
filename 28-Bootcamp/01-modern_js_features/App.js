import React from "react";
import NewJSFeatures from "./NewJSFeatures"

// Pre-ES6 way
function App() {
    return (
        <div>
            <NewJSFeatures />
        </div>
    )
}


// Arrow Function
const App = () => (
        <div>
            <NewJSFeatures />
        </div>
) 

export default App;