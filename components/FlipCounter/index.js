import React, {Component} from 'react';
import {FlipSymbol} from '../index';
import PropTypes from 'prop-types';

class FlipCounter extends Component {
  leftPad(value, length) {
    const delta = length - value.toString().length;
    let pads = '';
    for (let i=0; i < delta; i++) pads+='0';
    return pads+value;
  }

  renderSymbol(symbol, index) {
    return <FlipSymbol key={index} symbol={symbol}/>
  }

  renderSymbols(value) {
    return value
      .split('')
      .map(this.renderSymbol);
  }

  render() {
    let {value, length} = this.props;

    value = value.toFixed();
    value = this.leftPad(value, length);

    return <div className="flip_counter-container">
      {this.renderSymbols(value)}
    </div>
  }
}

FlipCounter.defaultProps = {
  value: 0,
  length: 6,
};

FlipCounter.propTypes = {
  value: PropTypes.number,
  length: PropTypes.number,
};

export {FlipCounter};
