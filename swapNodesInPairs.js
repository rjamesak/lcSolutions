// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/

// recursive exploration 
// Given a linked list, swap every two adjacent nodes and return its head. 
// You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * param {ListNode} head
 * return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    else {
        let newHead = new ListNode()
        newHead = head.next
        head.next = newHead.next
        newHead.next = head
        head = newHead
        head.next.next = swapPairs(head.next.next)
    }
    return head
    
};