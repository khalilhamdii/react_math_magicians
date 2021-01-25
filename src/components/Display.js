import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  let { result } = props;
  result = result === '' ? 0 : result;
  return <div>{result}</div>;
}
Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = { result: '0' };

export default Display;
