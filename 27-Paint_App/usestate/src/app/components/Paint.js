import React from "react";
import Name from "./Name";
import ColorPicker from "./ColorPicker";
import randomColor from "randomcolor";

function Paint() {
  const getColors = () => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then((response) => response.json())
      .then((response) => {
        setColor(response.colors.map((color) => color.hex.value));
        setActiveColor(response.colors[0].hex.value);
      });
  };

  return (
    <header style={{ borderTop: `10px solid ${activeColor}` }}>
      <div className="app">
        <Name />
      </div>

      <div style={{ marginTop: 10 }}>
        <ColorPicker
          colors={colors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
      </div>
    </header>
  );
}

export default Paint;
