import React from "react";
import CTA from "./CTA";

function App() {
  return (
    <div>
      <CTA>
        <h1>This is an important CTA</h1>
        <button>Click me!</button>
      </CTA>

      <CTA>
          <form>
              <input type="email" placeholder="Enter email address"/>
              <br />
              <button>Submit</button>
          </form>
      </CTA>
    </div>
  );
}

export default App;
