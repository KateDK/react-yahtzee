import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  render() {
    const ruleClass =
      this.props.score === undefined
        ? 'RuleRow RuleRow-active'
        : 'RuleRow RuleRow-disabled';
    return (
      <tr
        className={ruleClass}
        onClick={this.props.score === undefined ? this.props.doScore : null}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
