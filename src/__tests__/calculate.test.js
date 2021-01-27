import calculate from '../logic/calculate';

describe('Calculate module', () => {
  const data = {
    total: null,
    next: null,
    operation: null,
    log: null,
  };

  it('next should change when btnName is a number', () => {
    const modifiedData = {
      total: null,
      next: '1',
      operation: null,
      log: null,
    };
    expect(calculate(data, '1')).toEqual(modifiedData);
  });

  it('next should not should change when btnName is a number', () => {
    const modifiedData = {
      total: null,
      next: '1',
      operation: null,
      log: null,
    };
    expect(calculate(data, '+')).not.toEqual(modifiedData);
  });

  it('total should take next value if btnName is an operator', () => {
    const modifiedData = {
      total: '1',
      next: '',
      operation: '+',
      log: '1 + ',
    };
    const data1 = calculate(data, '1');
    const data2 = calculate(data1, '+');
    expect(data2).toEqual(modifiedData);
  });

  it('operator should be equal to btnName if it is an operator', () => {
    const data1 = calculate(data, '1');
    const data2 = calculate(data1, '+');
    expect(data2.operation).toEqual('+');
  });

  it('total should be equal to 2 if btnName is an equal operator', () => {
    const data1 = calculate(data, '1');
    const data2 = calculate(data1, '+');
    const data3 = calculate(data2, '2');
    const data4 = calculate(data3, '=');
    expect(data4.total).toEqual('3');
  });

  it('if btnName is a dot, then a dot will be added to next', () => {
    const data1 = calculate(data, '1');
    const data2 = calculate(data1, '.');
    const data3 = calculate(data2, '2');
    expect(data3.next).toEqual('1.2');
  });

  it('if btnName is Ac, calculate should return an empty object', () => {
    const modifiedData = {
      total: null,
      next: null,
      operation: null,
      log: null,
    };
    const data1 = calculate(data, '1');
    const data2 = calculate(data1, '+');
    const data3 = calculate(data2, '2');
    const data4 = calculate(data3, 'AC');
    expect(data4).toEqual(modifiedData);
  });

  it('if btnName is +/- , then next sign should be inversed', () => {
    const data1 = calculate(data, '1');
    const data2 = calculate(data1, '+/-');
    expect(data2.next).toEqual('-1');
  });

  it('if btnName is % , then next should be divided by 100', () => {
    const data1 = calculate(data, '99');
    const data2 = calculate(data1, '%');
    const data3 = calculate(data2, '=');
    expect(data3.next).toEqual('0.99');
  });

  it('Calculator should return an ERROR if dividing by zero', () => {
    const data1 = calculate(data, '99');
    const data2 = calculate(data1, '÷');
    const data3 = calculate(data2, '0');
    const data4 = calculate(data3, '=');
    expect(data4.total).toEqual('ERROR');
  });
});
