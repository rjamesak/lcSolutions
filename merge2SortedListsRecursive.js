// from recursive exploration

//


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
var mergeTwoLists = function (l1, l2) {
    // recursive implementation
    // compare the first of each
    // set next to highest node and the next node of the lowest (recursive)

    if (!l1 && !l2) return null
    if (l1?.val < l2?.val || !l2) {
        l1.next = mergeTwoLists(l2, l1.next)
        return l1
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};