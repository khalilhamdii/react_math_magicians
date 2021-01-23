/* eslint-disable no-unused-vars */
import '../stylesheets/App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(btnName) {
    const { newTotal, newNext, newOperation } = calculate(btnName, this.state);
    this.setState({
      total: newTotal,
      next: newNext,
      operation: newOperation,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Display result={data} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}

export default App;
