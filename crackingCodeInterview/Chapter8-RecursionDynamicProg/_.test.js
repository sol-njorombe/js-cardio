let slns = require('./index');

describe('Triple steps: Possible combination of steps given n stairs', () => {
  test('Given 3 stairs', () => {
    expect(slns.tripleStep(3)).toEqual(3);
  });

  test('Given 4 stairs', () => {
    expect(slns.tripleStep(4)).toEqual(6);
  });
});

describe('Power Sets: Get the power sets of a given arr', () => {
  test('with 1,2,3', () => {
    let ans = [
      new Set([]),
      new Set([1]),
      new Set([2]),
      new Set([1,2]),
      new Set([3]),
      new Set([1, 3]),
      new Set([2,3]),
      new Set([1,2,3])
    ];
    expect(slns.powerSet([1,2,3])).toEqual(ans);
  });
});

describe('Recursive Multiplication', () => {
  test('8 x 7', () => {
    expect(slns.recursiveMultiply(8,7)).toEqual(56);
  });

  test('9 x 9', () => {
    expect(slns.recursiveMultiply(9,9)).toEqual(81);
  });
});