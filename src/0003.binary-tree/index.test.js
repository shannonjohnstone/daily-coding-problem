import { serialize, deserialize, Node } from './index';

describe('Node', function () {
  test('should return node, with no leafs', () => {
    const node = Node('root');
    expect(node.val).toEqual('root');
    expect(node.left).toEqual(-1);
    expect(node.right).toEqual(-1);
  });
  test('should return node, with leafs', () => {
    const node = Node('root', Node('left'), Node('right'));
    expect(node.val).toEqual('root');
    expect(node.left).toEqual({'left': -1, 'right': -1, 'val': 'left'});
    expect(node.right).toEqual({ 'left': -1, 'right': -1, 'val': 'right' });
  });
  test('should return node, with nested leafs ', () => {
    const node = Node('root', Node('left', Node('left.left')), Node('right'));
    expect(node.val).toEqual('root');
    expect(node.left).toEqual({ 'left': { 'left': -1, 'right': -1, 'val': 'left.left' }, 'right': -1, 'val': 'left' });
    expect(node.right).toEqual({ 'left': -1, 'right': -1, 'val': 'right' });
  });
});

describe('binary tree serialize/deserialize', () => {
  const expected = `{
  "val": "root",
  "left": {
    "val": "left",
    "left": {
      "val": "left.left",
      "left": -1,
      "right": -1
    },
    "right": -1
  },
  "right": {
    "val": "right",
    "left": -1,
    "right": -1
  }
}`;
  test('should serialize', () => {
    const node = Node('root', Node('left', Node('left.left')), Node('right'));
    expect(serialize(node)).toEqual('root, left, left.left, #, #, #, right, #, #');
  });
  test('should deserialize', () => {
    expect(deserialize('root, left, left.left, #, #, #, right, #, #')).toEqual({
      'left': {
        'left': {
          'left': -1,
          'right': -1,
          'val': 'left.left'
        },
        'right': -1,
        'val': 'left'
      },
      'right': {
        'left': -1,
        'right': -1,
        'val': 'right'
      },
      'val': 'root'
    });
  });
  // test('should serialize/deserialize', () => {
  //   const node = Node('root', Node('left', Node('left.left')), Node('right'));
  //   expect(deserialize(serialize(node)).left.left.val).toEqual('left.left');
  // });
});
