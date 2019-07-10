let RouteBetween = require('./RouteBetween');
let ListOfDepth = require('./ListOfDepth');
let slns = require('./index');

describe('RouteBetween: Test if a route exists between two nodes', () => {
  beforeEach(() => {
    graph = new RouteBetween.Graph();
  });

  test('Test true for path between A and B', () => {
    let a = graph.vertices[0];
    let b = graph.vertices[1];
    expect(slns.routeBetween(graph, a, b)).toEqual(true);
  });

  test('Test true for path between A and F', () => {
    let a = graph.vertices[0];
    let f = graph.vertices[5];
    expect(slns.routeBetween(graph, a, f)).toEqual(true);
  });

  test('Test false for between D and E', () => {
    let d = graph.vertices[3];
    let e = graph.vertices[4];
    expect(slns.routeBetween(graph, d, e)).toEqual(false);
  });
});


describe('MinTree: Create a minimal length tree given a sorted array', () => {
  test('a tree given array of length 3', () => {
    let a = new slns.MintreeNode(1);
    let b = new slns.MintreeNode(2);
    let c = new slns.MintreeNode(3);
    b.right = c;
    b.left = a;
    expect(slns.minimalTree([1,2,3])).toEqual(b);
  });

  test('a tree given array of length 6', () => {
    let a = new slns.MintreeNode(1);
    let b = new slns.MintreeNode(2);
    let c = new slns.MintreeNode(3);
    let d = new slns.MintreeNode(4);
    let e = new slns.MintreeNode(5);
    let f = new slns.MintreeNode(6);
    f.left = e;
    b.right = c;
    b.left = a;
    d.right = f;
    d.left = b;
    expect(slns.minimalTree([1,2,3,4,5,6])).toEqual(d);
  });
});


describe('List of Depth: Linked lists if nodes in same depth', () => {
  test('tree with two levels', () => {
    let aT = new ListOfDepth.TreeNode('a');
    let bT = new ListOfDepth.TreeNode('b');
    let cT = new ListOfDepth.TreeNode('c');
    let dT = new ListOfDepth.TreeNode('d');
    let eT = new ListOfDepth.TreeNode('e');
    aT.children = [bT, cT];
    bT.children = [dT];
    cT.children = [eT];
    let aL = new ListOfDepth.ListNode('a');
    let bL = new ListOfDepth.ListNode('b');
    let cL = new ListOfDepth.ListNode('c');
    let dL = new ListOfDepth.ListNode('d');
    let eL = new ListOfDepth.ListNode('e');
    bL.next = cL;
    dL.next = eL;
    expect(slns.listOfDepth(aT)).toEqual([aL, bL, dL]);
  });
});


describe('Check Balanced: Test if tree is balanced', () => {
  beforeEach(() => {
    a = new slns.BalNode('a');
    b = new slns.BalNode('b');
    c = new slns.BalNode('c');
    d = new slns.BalNode('d');
    e = new slns.BalNode('e');
    f = new slns.BalNode('f');
    g = new slns.BalNode('g');
  });

  test('Tree with only 3 nodes', () => {
    a.left = b;
    a.right = c;
    expect(slns.checkBalanced(a)).toEqual(true);
  });

  test('Unbalanced tree should return false', () => {
    a.left = b;
    b.left = c;
    expect(slns.checkBalanced(a)).toEqual(false);
  });

  test('tree with three levels', () => {
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;
    expect(slns.checkBalanced(a)).toEqual(true);
  })
});

describe('Validate BST: Confirm if a tree is a BST', () => {
  beforeEach(() => {
    a = new slns.ValNode(1);
    b = new slns.ValNode(2);
    c = new slns.ValNode(3);
    d = new slns.ValNode(4);
    e = new slns.ValNode(5);
    f = new slns.ValNode(6);
    g = new slns.ValNode(7);
  });

  test('with a valid BST with just 2 levels', () => {
    d.right = f;
    d.left = b;
    expect(slns.validateBST(d)).toEqual(true);
  });

  test('invalid BST', () => {
    a.right = d;
    a.left = c;
    expect(slns.validateBST(a)).toEqual(false);
  });

  test('valid BST with 3 levels', () => {
    d.right = f;
    d.left = b;
    f.right = g;
    f.left = e;
    b.right = c;
    b.left = a;
    expect(slns.validateBST(d)).toEqual(true);
  });

  test('invalid BST with three levels', () => {
    h = new slns.ValNode(99);
    d.right = f;
    d.left = b;
    f.right = g;
    f.left = e;
    b.right = h;
    b.left = a;
    expect(slns.validateBST(d)).toEqual(false);
  });
});

// Successor