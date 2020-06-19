import React, { useState } from "react";
import randomColor from "randomcolor";

function Playground() {
  const [count, setCount] = useState(0);

  function increment() {
      setCount(prevCount => prevCount + 1);
  }

  function decrement() {
      setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Playground;
