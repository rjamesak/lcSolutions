// https://leetcode.com/problems/valid-parentheses/

/**
 * param {string} s
 * return {boolean}
 */

/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

var isValid = function (s) {
    // use stack
    let stk = []
    // pass thru string, when paren encountered
    for (let i = 0; i < s.length; i++) {
        // get type of paren
        // compare to top of stack (will be at index 0)
        // if closing, compare, if match to matching type, pop stock
        // else, push to stack (use unshift to put at beginning)
        switch (s[i]) {
            case ')':
                stk[0] === '(' ? stk.shift() : stk.unshift(s[i])
                break;
            case '}':
                stk[0] === '{' ? stk.shift() : stk.unshift(s[i])
                break;
            case ']':
                stk[0] === '[' ? stk.shift() : stk.unshift(s[i])
                break;
            default:
                stk.unshift(s[i]);
                break;
        }

    }
    // if stack empty at end, return true
    // else, return false
    return stk.length === 0;
};