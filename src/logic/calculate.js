import operate from './operate';

const calculate = (data, btnName) => {
  let modifiedData = data;
  let { total, next, operation } = modifiedData;
  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (btnName === '%') {
    total *= 100;
    next *= 100;
  } else if (btnName === '=') {
    total = operate(total, next, operation);
  } else {
    total = operate(total, next, btnName);
  }

  operation = btnName;
  modifiedData = { total, next, operation };
  return modifiedData;
};

export default calculate;
