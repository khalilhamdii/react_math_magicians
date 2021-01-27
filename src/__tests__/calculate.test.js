import calculate from '../logic/calculate';

describe('Calculate module', () => {
  const data = { total: null, next: null, operation: null, log: null };

  it('next should change when btnName is a number', () => {
    const modifiedData = { total: null, next: '1', operation: null, log: null };
    expect(calculate(data, '1')).toEqual(modifiedData);
  });

  it('next should not should change when btnName is a number', () => {
    const modifiedData = { total: null, next: '1', operation: null, log: null };
    expect(calculate(data, '+')).not.toEqual(modifiedData);
  });

  it('operator should change when btnName is an operator', () => {
    const modifiedData = { total: null, next: '1', operation: '+', log: null };
    const data1 = calculate(data, '1');
    expect(calculate(data, '+')).toEqual(modifiedData);
  });
});
