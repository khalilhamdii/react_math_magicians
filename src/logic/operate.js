/* eslint-disable no-unused-vars */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let result = 0;
  if (operation === '+') {
    result = Big(x.plus(y));
  } else if (operation === '-') {
    result = Big(x.minus(y));
  } else if (operation === 'x') {
    result = Big(x.times(y));
  } else if (operation === '÷') {
    result = Big(x.div(y));
  }
  return result.toPrecision().toString();
};

export default operate;
