class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          12 < 11;
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else current = current.left;
        } else if (val > current.val) {
          12 > 11;
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return null;

    let node = this.root;

    while (node) {
      if (value > node.val) {
        node = node.right;
      } else if (value < node.val) {
        node = node.left;
      } else {
        return node;
      }
    }
    return null;
  }
}
