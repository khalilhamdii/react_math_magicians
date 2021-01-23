/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React from 'react';
import Button from './Button';

function ButtonPanel(props) {
  const handleClick = (btnName) => {
    props.onClick(btnName);
  };
  return (
    <div>
      <div>
        <Button name="AC" onClick={(btnName) => handleClick(btnName)} />
        <Button name="+/-" onClick={(btnName) => handleClick(btnName)} />
        <Button name="%" onClick={(btnName) => handleClick(btnName)} />
        <Button name="÷" onClick={(btnName) => handleClick(btnName)} />
      </div>
      <div>
        <Button name="7" onClick={(btnName) => handleClick(btnName)} />
        <Button name="8" onClick={(btnName) => handleClick(btnName)} />
        <Button name="9" onClick={(btnName) => handleClick(btnName)} />
        <Button name="x" onClick={(btnName) => handleClick(btnName)} />
      </div>
      <div>
        <Button name="4" onClick={(btnName) => handleClick(btnName)} />
        <Button name="5" onClick={(btnName) => handleClick(btnName)} />
        <Button name="6" onClick={(btnName) => handleClick(btnName)} />
        <Button name="-" onClick={(btnName) => handleClick(btnName)} />
      </div>
      <div>
        <Button name="1" onClick={(btnName) => handleClick(btnName)} />
        <Button name="2" onClick={(btnName) => handleClick(btnName)} />
        <Button name="3" onClick={(btnName) => handleClick(btnName)} />
        <Button name="+" onClick={(btnName) => handleClick(btnName)} />
      </div>
      <div>
        <Button name="0" onClick={(btnName) => handleClick(btnName)} />
        <Button name="." onClick={(btnName) => handleClick(btnName)} />
        <Button name="=" onClick={(btnName) => handleClick(btnName)} />
      </div>
    </div>
  );
}

export default ButtonPanel;
