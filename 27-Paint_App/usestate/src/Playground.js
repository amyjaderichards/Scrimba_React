import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";

function Playground() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);

  function increment() {
      setCount(prevCount => prevCount + 1);
  }

  function decrement() {
      setCount(prevCount => prevCount - 1);
  }

  useEffect(() => {
    setColor(randomColor());
  }, [count])

  return (
    <div style={{ borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Playground;
