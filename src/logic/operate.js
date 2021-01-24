import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = numberOne ? Big(numberOne) : null;
  const y = numberTwo ? Big(numberTwo) : null;
  let result = 0;
  if (operation === '+') {
    result = Big(x.plus(y));
  } else if (operation === '-') {
    result = Big(x.minus(y));
  } else if (operation === 'x') {
    result = Big(x.times(y));
  } else if (operation === '÷') {
    try {
      result = Big(x.div(y));
    } catch (err) {
      return "ERROR! CAN'T DIVIDE BY 0";
    }
  } else if (operation === '%') {
    result = Big(x.div(100));
  }
  return result.toPrecision().toString();
};

export default operate;
