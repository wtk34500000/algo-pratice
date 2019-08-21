/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let arr = []

    const inOrder = (root) => {
        if (root === null) {
            return;
        }
        inOrder(root.left);
        arr.push(root.val);
        inOrder(root.right);
    }
    inOrder(root)
    let newNode = new TreeNode();
    let temp = newNode
    for (let i = 0; i < arr.length; i++) {
        temp.val = arr[i]
        if (i < arr.length - 1) {
            temp.right = new TreeNode();
            temp = temp.right
        }
    }

    return newNode
};