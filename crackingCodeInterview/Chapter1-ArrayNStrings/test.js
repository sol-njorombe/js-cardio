const slns = require('./index');

describe('Test that a strng has unique characters', () => {
  test('Solution 1', () => {
    expect(slns.isUniqueSln1('test')).toEqual(false);
    expect(slns.isUniqueSln1('carot')).toEqual(true);
  });
  test('Solution 2', () => {
    expect(slns.isUniqueSln2('test')).toEqual(false);
    expect(slns.isUniqueSln2('carot')).toEqual(true);
  });
});

describe('Given two strings are they permutations of each other', () => {
  test('Solution 1: Hash', () => {
    expect(slns.isPermutationSln1('cat', 'tac')).toEqual(true);
    expect(slns.isPermutationSln1('cow', 'pig')).toEqual(false);
  });
  test('Solution 2: Sort String', () => {
    expect(slns.isPermutationSln2('cat', 'tac')).toEqual(true);
    expect(slns.isPermutationSln2('cow', 'pig')).toEqual(false);
  });
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
});

describe('Determine whether the second string is one edit away', () => {
  test('oneAway', () => {
    expect(slns.oneAway('pale', 'ple')).toEqual(true);
    expect(slns.oneAway('pales', 'pale')).toEqual(true);
    expect(slns.oneAway('pale', 'bale')).toEqual(true);
    expect(slns.oneAway('pale', 'bake')).toEqual(false);
    expect(slns.oneAway('cool', 'col')).toEqual(true);
  });
});

describe('String compression', () => {
  test('stringCompression function', () => {
    expect(slns.stringCompression('aabcccccaaa')).toEqual('a2b1c5a3');
    expect(slns.stringCompression('aabbc')).toEqual('aabbc');
    expect(slns.stringCompression('aaaaaaaaaaa')).toEqual('a11');
  });
});

describe('Rotate matrix like an image', () => {
  test('image rotation function', () => {
    expect(slns.rotateMatrix([[1,2,3], [4,5,6], [7,8,9]])).toEqual([[7, 4, 1],[8,5,2], [9,6,3]])
    expect(slns.rotateMatrix([[1]])).toEqual([[1]]);
    expect(slns.rotateMatrix([[5,6], [8,9]])).toEqual([[8,5], [9,6]]);
  });
});

describe('true row and columns with zeros to all zeros', () => {
  test('zeroMatrix function', () => {
    expect(slns.zeroMatrix([[1,2,0,4], [5,6,7,8], [0, 10, 11, 12]])).toEqual([[0,0,0,0], [0,6,0,8], [0,0,0,0]]);
  });
});

describe('Determine if s2 is a rotation of s1, by one call to isSubstring', () => {
  test('isSubstring', () => {
    expect(slns.isSubstring('Survive', 'vive')).toEqual(true);
    expect(slns.isSubstring('subtract', 'tract')).toEqual(true);
    expect(slns.isSubstring('subtract', 'traction')).toEqual(false);
  });

  test('stringRotation', () => {
    expect(slns.stringRotation('waterbottle', 'erbottlewat')).toEqual(true);
    expect(slns.stringRotation('waterbottle', 'erbottewat')).toEqual(false);
  });
})