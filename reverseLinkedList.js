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


// RECURSIVE IMPLEMENTATION
// recursive implementation from the recursive exploration:
// https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/2378/

var reverseList = function(head) {
    // recursive solution
    // point first head to null, then recursive calls
    // base case: if head.next == null, then this is the new head
    // init call
    if(head === null || head.next === null) {
        return head
    }
    let nextNode = new ListNode()
    nextNode = head.next
    head.next = null
    // send it to the helper 
    helper(head, nextNode)
    return head

    // recursive helper function
    function helper(curNode, nextNode) {
        // base case, last node
        if(nextNode == null){
            head = curNode
            return
        }
        else {
            // grab the next node
            let newNextNode = nextNode.next
            // point curNode to prev
            nextNode.next = curNode
            // call helper on curNode, nextNode
            helper(nextNode, newNextNode)

        }
    }
    
};