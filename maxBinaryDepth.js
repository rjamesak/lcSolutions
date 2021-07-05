// from recursive exploration
// https://leetcode.com/explore/learn/card/recursion-i/256/complexity-analysis/2375/

/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/


// recursive solution

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // input: root of tree
    // output: int representing the depth of the tree
    // base case: if null, return 0
    if (root === null) return 0
    // else recursive call on left and right + 1
    else {
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    }
    
};