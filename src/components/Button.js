import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return <button type="button">{name}</button>;
}
Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = { name: 'Btn' };

export default Button;
