import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";

export default function Playground() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);

  // Runs on every re-render
  useEffect(() => {
      setColor(randomColor)
  }, [count])

  return (
    <div style={{borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
    </div>
  );
}
