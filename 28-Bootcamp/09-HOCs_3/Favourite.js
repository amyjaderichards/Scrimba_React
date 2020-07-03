import React, { Component } from "react";
import { withToggler } from "./HOCs/withToggler";

function Favourite(props) {
    return (
        <div>
        <h3>Click heart to favourite</h3>
        <h1>
          <span onClick={props.toggle}>
              {props.on ? "❤️" : "♡"}
          </span>
        </h1>
      </div>
    );
}

/*
class Favourite extends Component {
  render() {
    return (
      <div>
        <h3>Click heart to favourite</h3>
        <h1>
          <span onClick={this.props.toggle}>
              {this.props.on ? "❤️" : "♡"}
          </span>
        </h1>
      </div>
    );
  }
}
*/

const favouriteWithToggler = withToggler(Favourite, {defaultOnValue: false});
export default favouriteWithToggler;
