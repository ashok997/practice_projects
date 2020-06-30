// TreeNode CLASS DEFINITION

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// MANUALLY CREATE A RANDOM TREE:

/*
         2
       /   \
      7     5
     / \     \
    2   6     9
        /\    /
       5 11  4
  */

const tree = new TreeNode(2); // root
tree.left = new TreeNode(7);
tree.right = new TreeNode(5);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(6);
tree.left.right.left = new TreeNode(5);
tree.left.right.right = new TreeNode(11);
tree.right.right = new TreeNode(9);
tree.right.right.left = new TreeNode(4);

//console.log(tree);
//post-order
function dfs(root) {
  const output = [];

  const helper = (node) => {
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
    output.push(node.val);
  };
  helper(root);

  return output;
}

//console.log(dfs(tree));

//BFS
function bfs(root) {
  let queue = [];
  let returnList = []; //output

  queue.push(root);
  while (queue.length) {
    let checked = queue.shift();
    returnList.push(checked.val);
    checked.left && queue.push(checked.left);
    checked.right && queue.push(checked.right);
  }
  return returnList;
}

//console.log(bfs(tree))
