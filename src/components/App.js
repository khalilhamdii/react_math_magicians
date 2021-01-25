/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-parens */
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
    const data = this.state;
    const modifiedData = calculate(data, btnName);
    this.setState({
      total: modifiedData.total,
      next: modifiedData.next,
      operation: modifiedData.operation,
    });
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result={total} />
        <ButtonPanel onClick={(btnName) => this.handleClick(btnName)} />
      </>
    );
  }
}

export default App;
