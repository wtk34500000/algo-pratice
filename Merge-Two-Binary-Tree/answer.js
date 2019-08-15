/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (t1 && t2) {
        //preorder traversal 
        let newTree = new TreeNode(t1.val + t2.val)
        newTree.left = mergeTrees(t1.left, t2.left)
        newTree.right = mergeTrees(t1.right, t2.right)
        return newTree
    }

    //incase one of the tree is null
    return t1 || t2
};