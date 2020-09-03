/** Solution to invert binary tree challenge from leetcode
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function (root) {
  if (root === null) return root;
  invertNode(root);
  root.left ? invertNode(root.left) : null;
  root.right ? invertNode(root.right) : null;
  return root;
};

var invertNode = function (node) {
  let tempNode = {};
  tempNode = node.right;
  node.right = node.left;
  node.left = {};
  node.left = tempNode;
};
