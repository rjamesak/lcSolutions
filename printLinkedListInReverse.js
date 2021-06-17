// https://leetcode.com/problems/print-immutable-linked-list-in-reverse/

/*
You are given an immutable linked list, print out all values of each node in reverse with the help of the following interface:

ImmutableListNode: An interface of immutable linked list, you are given the head of the list.
You need to use the following functions to access the linked list (you can't access the ImmutableListNode directly):

ImmutableListNode.printValue(): Print value of the current node.
ImmutableListNode.getNext(): Return the next node.
The input is only given to initialize the linked list internally. You must solve this problem without modifying the linked list. In other words, you must operate the linked list using only the mentioned APIs.
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    }; 
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */

// method 1. push to array, then print the array backwards

var printLinkedListInReverse = function(head) {
    let nodes = []
    let node = head
    while (node !== null) {
        nodes.push(node)
        node = node.getNext()
    }
    for (let i = nodes.length - 1; i >= 0; i--) {
        nodes[i].printValue()
    }
    
};

// method 2: recursion
var printLinkedListInReverse = function(head) {
    if(head !== null) {
        printLinkedListInReverse(head.getNext())
        head.printValue()
    }
    
};


