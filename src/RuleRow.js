import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  handleClick = () => {
    if (this.props.score === undefined) {
      this.props.doScore();
    }
  };
  render() {
    const ruleClass =
      this.props.score === undefined
        ? 'RuleRow RuleRow-active'
        : 'RuleRow RuleRow-disabled';
    return (
      <tr className={ruleClass} onClick={this.handleClick}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
