/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { onClick } = this.props;
    return onClick(btnName);
  }

  render() {
    return (
      <div>
        <div>
          <Button name="AC" onClick={this.handleClick} />
          <Button name="+/-" onClick={this.handleClick} />
          <Button name="%" onClick={this.handleClick} />
          <Button name="÷" onClick={this.handleClick} />
        </div>
        <div>
          <Button name="7" onClick={this.handleClick} />
          <Button name="8" onClick={this.handleClick} />
          <Button name="9" onClick={this.handleClick} />
          <Button name="x" onClick={this.handleClick} />
        </div>
        <div>
          <Button name="4" onClick={this.handleClick} />
          <Button name="5" onClick={this.handleClick} />
          <Button name="6" onClick={this.handleClick} />
          <Button name="-" onClick={this.handleClick} />
        </div>
        <div>
          <Button name="1" onClick={this.handleClick} />
          <Button name="2" onClick={this.handleClick} />
          <Button name="3" onClick={this.handleClick} />
          <Button name="+" onClick={this.handleClick} />
        </div>
        <div>
          <Button name="0" onClick={this.handleClick} />
          <Button name="." onClick={this.handleClick} />
          <Button name="=" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
