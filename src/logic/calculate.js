import operate from './operate';

const calculate = (data, btnName) => {
  let modifiedData = data;
  let { total, next, operation } = modifiedData;
  if (/\d/.test(btnName)) {
    if (!operation && !next) {
      total += btnName;
    } else if (total && operation) {
      next += btnName;
    }
  } else if (btnName === 'AC') {
    total = '0';
    next = '';
    operation = '';
  } else if (btnName === '+/-') {
    total = operate(total, -1, 'x');
  } else if (btnName === '%') {
    if (!operation && !next) {
      total = operate(total, 100, '÷');
    } else if (total && operation) {
      next = operate(next, 100, '÷');
    }
  } else if (btnName === '=') {
    total = operate(total, next, operation);
    next = '';
  } else if (btnName === '.') {
    if (!operation && !next) {
      total += btnName;
    } else if (total && operation) {
      next += btnName;
    }
  } else {
    operation = btnName;
  }
  modifiedData = { total, next, operation };
  console.log(modifiedData);
  return modifiedData;
};

export default calculate;
