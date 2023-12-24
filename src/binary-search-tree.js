const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    this.root = null;
  }

  add(data) {
    let nodeNew = new Node(data);
    if (this.root === null) {
      this.root = nodeNew;
    } else {
      insertNode(this.root, nodeNew);
    }
  }

  insertNode(node, nodeNew) {
    if (node.data < nodeNew.data) {

      if(node.left === null) {
        node.left = nodeNew;
      } else {
        this.insertNode(node.left, nodeNew); 
      }

    } else {
      if(node.right === null) {
        node.right = nodeNew;
      } else {
        this.insertNode(node.right,newNode);
      }
    }
  }

  has(data) {
    if (this.data === data) {
      return this;
    }

    if (data < this.data && this.left) {
      return this.left.contains(data);

    } else if (data > this.data && this.right) {
      return this.right.contains(data);

    } else {
      return null;
    }
  }

  find(data) {
    if(node === null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.data)
        return this.search(node.left, data);
 
    // if data is more than node's data
    // move right
    else if(data > node.data)
        return this.search(node.right, data);
 
    // if data is equal to the node data 
    // return node
    else
        return node;
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {           
      // if the root is null then tree is 
      // empty
      if(node === null)
          return null;
   
      // if data to be delete is less than 
      // roots data then move to left subtree
      else if(key < node.data)
      {
          node.left = this.removeNode(node.left, key);
          return node;
      }
   
      // if data to be delete is greater than 
      // roots data then move to right subtree
      else if(key > node.data)
      {
          node.right = this.removeNode(node.right, key);
          return node;
      }
   
      // if data is similar to the root's data 
      // then delete this node
      else
      {
           // deleting node with no children
          if(node.left === null && node.right === null)
          {
              node = null;
              return node;
          }
   
          // deleting node with one children
          if(node.left === null)
          {
              node = node.right;
              return node;
          }
           
          else if(node.right === null)
          {
              node = node.left;
              return node;
          }
   
          // Deleting node with two children
          // minimum node of the right subtree
          // is stored in aux
          var aux = this.findMinNode(node.right);
          node.data = aux.data;
   
          node.right = this.removeNode(node.right, aux.data);
          return node;
      }   
  }

  min() {
    if(node.left === null)
        return node;
    else
        return this.min(node.left);
  }

  max() {
    if(node.right === null)
        return node;
    else
        return this.max(node.right);
  }
}

module.exports = {
  BinarySearchTree
};