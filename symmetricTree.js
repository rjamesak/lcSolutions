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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // level-order traversal, push to array
    let shelf = {}
    preOrder(root, 0)
    console.log(shelf)
    for (const depth in shelf) {
        //check that each depth is symmetrical
        let l = 0
        let r = shelf[depth].length - 1
        console.log('depth:', depth)
        console.log('l:', l)
        console.log('r:', r)
        while (l < r) {
            if(shelf[depth][l] !== shelf[depth][r]) {
                return false
            }
            else {
                l++
                r--
            }
        }
    }
    return true

    function preOrder(root, depth) {
        // send depth, val to shelf
        if (!root) {
            // push a null placeholder
            shelf.hasOwnProperty(depth)?shelf[depth].push('x') : shelf[depth] = ['x']
            return
        }
        shelf.hasOwnProperty(depth)?shelf[depth].push(root.val) : shelf[depth] = [root.val]
        preOrder(root.left, depth+1)
        preOrder(root.right, depth+1)
        
    }
    
};