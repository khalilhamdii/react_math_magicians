/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setnext] = useState(null);
  const [operation, setoperation] = useState(null);
  const [log, setlog] = useState(null);

  const handleClick = (btnName) => {
    const data = {
      total,
      next,
      operation,
      log,
    };
    const modifiedData = calculate(data, btnName);
    setTotal(modifiedData.total);
    setnext(modifiedData.next);
    setoperation(modifiedData.operation);
    setlog(modifiedData.log);
  };
  return (
    <div className="container d-flex flex-row justify-content-between flex-wrap">
      <h1 className="flex-md-row" style={{ color: 'rgb(255,255,255)' }}>
        Let&apos;s do some math!
      </h1>
      <div className="col-12-md" style={{ width: '700px' }}>
        <Display result={next} log={log} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default App;
