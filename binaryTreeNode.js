/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

function inOrderTravel(root) {
  const result = []

  const travel = node => {
    if (node === null) return

    travel(node.left)

    result.push(node.val)

    travel(node.right)
  }

  travel(root)

  return result
}

const tree = new TreeNode(1)

tree.right = new TreeNode(2)

tree.right.left = new TreeNode(3)

console.log(inOrderTravel(tree))