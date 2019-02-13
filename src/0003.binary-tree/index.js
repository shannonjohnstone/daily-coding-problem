/**
 * Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
 *
 * For example, given the following Node class
 *
 * class Node:
 *  def __init__(self, val, left=None, right=None):
 *      self.val = val
 *      self.left = left
 *      self.right = right
 * The following test should pass:
 *
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 */

const hash = '#';
const negative = -1;

export const Node = (val, left, right) => {
  return {
    val,
    left: left || negative,
    right: right || negative,
  };
};



export const serialize = (node) => {
  if (!node || node < 0) return hash;
  return `${node.val}, ${serialize(node.left)}, ${serialize(node.right)}`;
};

export const deserialize = (str) => {
  let obj = {};
  const items = str.split(', ');

  const helper = () => {
    const val = items.shift();
    if(!val || val === hash) return negative;
    const node = Node(val);
    node.left = helper();
    node.right = helper();
    return node;
  };

  return helper();
};
