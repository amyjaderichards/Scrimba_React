import React from "react";

function Example(props) {
  console.log(props.name());
  return (
      <div>
          {props.render(true, 42)}
      </div>
  );
}

export default Example;
