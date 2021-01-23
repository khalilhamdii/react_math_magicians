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
    total = operate(total, 100, 'x');
    next = operate(next, 100, 'x');
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
  return modifiedData;
};

export default calculate;