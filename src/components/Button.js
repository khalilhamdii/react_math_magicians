/* eslint-disable react/require-default-props */
/* eslint-disable prefer-template */
import '../stylesheets/button.css';
import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  const handleClick = () => {
    props.clickHandler(name);
  };
  const btnSize = name === '0' ? 'w-50' : 'w-25';
  const btnColor = /[0-9]|AC|([+][/][-])|%|[.]/.test(name) ? 'num-btn' : 'op-btn';
  return (
    <button className={`calc-btn ${btnSize} ${btnColor}`} type="button" onClick={handleClick}>
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
