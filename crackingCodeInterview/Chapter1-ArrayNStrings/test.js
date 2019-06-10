const slns = require('./index');

describe('Test that a strng has unique characters', () => {
  test('Solution 1', () => {
    expect(slns.isUniqueSln1('test')).toEqual(false);
    expect(slns.isUniqueSln1('carot')).toEqual(true);
  });
  test('Solution 2', () => {
    expect(slns.isUniqueSln2('test')).toEqual(false);
    expect(slns.isUniqueSln2('carot')).toEqual(true);
  })
});

describe('Given two strings are they permutations of each other', () => {
  test('Solution 1: Hash', () => {
    expect(slns.isPermutationSln1('cat', 'tac')).toEqual(true);
    expect(slns.isPermutationSln1('cow', 'pig')).toEqual(false);
  });
  test('Solution 2: Sort String', () => {
    expect(slns.isPermutationSln2('cat', 'tac')).toEqual(true);
    expect(slns.isPermutationSln2('cow', 'pig')).toEqual(false);
  })
});

describe('Given a string change the spaces into \'%20\' like a URL format', () => {
  test('Solution 1: copy string', () => {
    expect(slns.URLifySln1('Mr John Smith    ')).toEqual('Mr%20John%20Smith');
  });
  test('Solution 2: Split and Join String', () => {
    expect(slns.URLifySln2('Mr John Smith    ')).toEqual('Mr%20John%20Smith');
  });
  test('Solution 2: Regex', () => {
    expect(slns.URLifySln3('Mr John Smith    ')).toEqual('Mr%20John%20Smith');
  });
})