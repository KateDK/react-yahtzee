import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  render() {
    const { score, name, doScore } = this.props;
    const ruleClass = `RuleRow RuleRow-${
      score === undefined ? `active` : `disabled`
    }`;

    return (
      <tr className={ruleClass} onClick={score === undefined ? doScore : null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    );
  }
}

export default RuleRow;
