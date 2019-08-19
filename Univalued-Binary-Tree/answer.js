/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    if (root === null) {
        return true
    }
    const set = new Set()

    const inOrder = (root) => {
        if (root === null) {
            return;
        }
        inOrder(root.left)
        set.add(root.val)
        inOrder(root.right)
    }

    inOrder(root)

    return set.size === 1
};