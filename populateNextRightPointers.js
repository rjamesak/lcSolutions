// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/994/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root
    //level order traversal
    let q = []
    let nodes = []
    // push initial node
    q.push(root)
    while (q.length > 0) { // level order traversal
        // pull front of queue to arr
        let qVal = q.shift()
        nodes.push(qVal)
        // push left and right children to queue
        if(qVal.left) q.push(qVal.left)
        if(qVal.right) q.push(qVal.right)
    }
    
    // show node vals
//console.log('node vals', nodes.map((arr) => arr.val))
    // run through nodes and assign next values
    nodes[0].next = null
    let level = 2
    for (let i = 1; i < nodes.length; i++) {
        if(i === 2**level - 2) {
            level++
            nodes[i].next = null
        }
        else {
        // else, set next to node at i+1
        nodes[i].next = nodes[i+1]
            
        }
    }

    return root
    
};