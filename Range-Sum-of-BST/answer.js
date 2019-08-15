/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function (root, L, R) {
    if (root === null) {
        return 0
    } else {
        if (root.val > R) {
            return rangeSumBST(root.left, L, R)
        } else if (root.val < L) {
            return rangeSumBST(root.right, L, R)
        } else {
            return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
        }
    }
};



// var rangeSumBST = function(root, L, R) {
//     var arr = []
//     var sum = 0;

//     inOrder(root, arr)
//     console.log(arr)
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] >= L && arr[i]<=R){
//             sum+=arr[i]
//         }
//     }

//     return sum;

// };


// var inOrder = function(root, arr){
//    if(root === null){
//        return;
//    }

//     inOrder(root.left, arr)
//     arr.push(root.val)
//     inOrder(root.right, arr) 

//     return;
// }