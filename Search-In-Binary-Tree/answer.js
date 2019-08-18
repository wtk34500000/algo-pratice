/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */


var searchBST = function (root, val) {
    if (!root || root.val === val) {
        return root
    }

    if (root.val < val) {
        return searchBST(root.right, val)
    }
    if (root.val > val) {
        return searchBST(root.left, val)
    }
};



var searchBST = function (root, val) {
    while (root !== null && root.val !== val) {
        root = root.val < val ? root.right : root.left
    }

    return root
};