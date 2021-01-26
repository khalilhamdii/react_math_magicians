import operate from './operate';

const calculate = (data, btnName) => {
  let modifiedData = data;
  let {
    total, next, operation, log,
  } = modifiedData;

  if (/\d/.test(btnName)) {
    if (!operation && !next) {
      total = total === null ? btnName : total + btnName;
    } else if (total && operation) {
      next = next === null ? btnName : next + btnName;
    }
  } else if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
    log = null;
  } else if (btnName === '+/-') {
    total = operate(total, -1, 'x');
  } else if (btnName === '=') {
    total = next === '' ? total : operate(total, next, operation);
    log += `${next} ${btnName}`;
    next = '';
  } else if (btnName === '.') {
    if (!operation && !next) {
      total += !/\./.test(total) ? btnName : '';
    } else if (total && operation) {
      next += !/\./.test(next) ? btnName : '';
    }
  } else {
    operation = btnName;
    log = log === null || /[$=]/.test(log) ? `${total} ${operation} ` : `${log} ${next} ${operation} `;
    next = '';
  }
  modifiedData = {
    total,
    next,
    operation,
    log,
  };
  return modifiedData;
};

export default calculate;
