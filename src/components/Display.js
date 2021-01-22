/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

function Display(props) {
  const { result } = props;
  return <div>{result}</div>;
}
Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = { result: 0 };

export default Display;
