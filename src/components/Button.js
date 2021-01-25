/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  const handleClick = () => {
    props.clickHandler(name);
  };
  return (
    <button type="button" onClick={handleClick}>
      {name}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = { name: 'Btn' };

export default Button;
