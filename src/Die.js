import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    const { handleClick, locked, idx } = this.props;
    return (
      <button
        className="Die"
        style={{ backgroundColor: locked ? 'grey' : 'black' }}
        onClick={() => handleClick(idx)}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
