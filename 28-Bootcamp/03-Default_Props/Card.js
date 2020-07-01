import React from "react";
import PropTypes from "prop-types"

/* FUNCTIONAL COMPONENT */

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };

  return <div style={styles}></div>;
}

Card.propTypes = {
        cardColor: PropTypes.oneOf(["red", "blue"]).isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number
}

Card.defaultProps = {
  height: 100,
  width: 100,
};

export default Card;

/* CLASS COMPONENT 
class Card extends React.Component {
  static defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100,
  };
  render() {
    const styles = {
      backgroundColor: this.props.cardColor,
      height: this.props.height,
      width: this.props.width,
    };

    return <div style={styles}></div>;
  }
}

export default Card
*/