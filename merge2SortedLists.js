// https://leetcode.com/problems/merge-two-sorted-lists/

// LC 21, Merge Two Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * param {ListNode} l1
 * param {ListNode} l2
 * return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // make lowest node the head, return this head at end
    let head = new ListNode()
    let n3 = null
    // edge cases, 1 is null and other is not
    if (l1 === null && l2 !== null) {
        return l2
    }
    else if (l2 === null && l1 !== null) {
        return l1
    }
    // both are null
    else if (l1 === null && l2 === null) {
        return l1
    }
    // find lowest and assign to head
    if (l1.val <= l2.val) {
        head = l1
        l1 = l1.next
    }
    else {
        head = l2
        l2 = l2.next
    }

    // iterator node
    n3 = head
    while (l1 !== null || l2 != null) {
        // if one is null, point next to other and return
        if (l1 === null) {
            n3.next = l2
            return head
        }
        if (l2 === null) {
            n3.next = l1
            return head
        }
        // point next to lower of the two values and inc ptrs
        if (l1.val <= l2.val) {
            n3.next = l1
            n3 = l1
            l1 = l1.next
        }
        else if (l2.val < l1.val) {
            n3.next = l2
            n3 = l2
            l2 = l2.next
        }

    } // end while

    return head
};