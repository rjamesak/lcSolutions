// from the recursive exploration
// https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/3233/




/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * param {TreeNode} root
 * param {number} val
 * return {TreeNode}
 */
var searchBST = function(root, val) {
    // recursive exploration
    // base case, if node.val == val, return node
    // if node == null, return null
    if(root === null) {
        return null
    }
    else if(root.val === val) {
        return root
    }
    else {
        // if val < root.val, go left
        // if val > root.val, go right
        if(val < root.val) {
            root = searchBST(root.left, val)
        }
        else {
            root = searchBST(root.right, val)
        }
    }
    return root
    
};