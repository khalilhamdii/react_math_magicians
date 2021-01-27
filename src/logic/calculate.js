import operate from './operate';

const calculate = (data, btnName) => {
  let modifiedData = data;
  let {
    total, next, operation, log,
  } = modifiedData;

  if (/\d/.test(btnName)) {
    next = next === null || /[$=]/.test(log) ? btnName : next + btnName;
  } else if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
    log = null;
  } else if (btnName === '+/-') {
    next = operate(next, -1, 'x');
  } else if (btnName === '=') {
    if (operation === '%') {
      next = operate(total, next, operation);
    } else {
      total = next === '' ? total : operate(total, next, operation);
      log += `${next} ${btnName}`;
      next = total;
    }
  } else if (btnName === '.') {
    next += !/\./.test(next) ? btnName : '';
  } else {
    total = total !== '' && next !== '' && total !== null && next !== null && !/[$=]/.test(log)
      ? operate(total, next, operation)
      : total;
    total = total || next;
    operation = btnName;
    log = log === null || /[$=]|[%]/.test(log)
      ? `${total} ${operation} `
      : `${log} ${next} ${operation} `;
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
