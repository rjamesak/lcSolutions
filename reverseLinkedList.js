// https://leetcode.com/problems/reverse-linked-list/submissions/

// reverse linked list iteratively

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseList = function (head) {
    let node = head;
    let prev = null;
    // goal is to switch the pointers
    // get the prev
    // itr list, make next = prev
    while (node !== null) {
        let nextTemp = node.next;
        node.next = prev;
        prev = node;
        node = nextTemp;
    }
    return prev;

};