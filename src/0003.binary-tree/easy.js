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

export const Node = (val, left, right) => {
  return {
    val,
    left: left || -1,
    right: right || -1,
  };
};

// easy way out
// export const serialize = (node) => JSON.stringify(node, null, 2);
// export const deserialize = (str) => JSON.parse(str);

export const serialize = (node) => JSON.stringify(node, null, 2);
export const deserialize = (str) => JSON.parse(str);
