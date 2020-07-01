import React, { Fragment } from "react";
import Grandchild from "./Grandchild";

function Child() {
  return (
    <Fragment>
      <h1>I'm the Child Component</h1>
      <Grandchild />
    </Fragment>
  );
}

export default Child;
