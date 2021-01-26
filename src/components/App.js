/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-parens */
// import '../stylesheets/App.css';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setnext] = useState(null);
  const [operation, setoperation] = useState(null);

  const handleClick = (btnName) => {
    const data = { total, next, operation };
    const modifiedData = calculate(data, btnName);
    setTotal(modifiedData.total);
    setnext(modifiedData.next);
    setoperation(modifiedData.operation);
  };
  return (
    <>
      <Display result={total} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
