//  https://leetcode.com/problems/add-two-numbers/

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // input: 2 linked lists, each value is the digit of a number, in reverse
    // output: linked list containing the sum of the 2 linked lists
    // iterate the lists and add the numbers in each link (remember they're reversed)
    let sumList = new ListNode()
    let sumNode = sumList
    let prevNode = new ListNode()
    let carry = 0
    while (l1 !== null || l2 !== null || carry === 1) {
        let l1Val = 0
        let l2Val = 0
        l1 === null ? l1Val = 0 : l1Val = l1.val
        l2 === null ? l2Val = 0 : l2Val = l2.val
        let sum = l1Val + l2Val + carry
        if (sum > 9) {
            sum -= 10
            carry = 1
        }
        else {
            carry = 0
        }
        // push to new linked list 
        sumNode.val = sum
        if(l1?.next !== null || l2?.next !== null || carry === 1) {
            sumNode.next = new ListNode()
            prevNode = sumNode
            sumNode = sumNode.next
        }
        
        // inc next
        l1 === null ? l1 = null : l1 = l1.next
        l2 === null ? l2 = null : l2 = l2.next
    }
    if (sumNode?.val === 0) {
        sumNode = null
        prevNode.next = null
        }
    return sumList
};