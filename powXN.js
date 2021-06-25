// recursive exploration

// used this video to help understand the optimization:
// https://www.youtube.com/watch?v=-3Lt-EwR_Hw



/*
https://leetcode.com/explore/learn/card/recursion-i/256/complexity-analysis/2380/

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

Constraints:
-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104
*/


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // base case: if n = 0, return 1
    // else, return x * fn(x, n)
    let neg = false
    if(n < 0) {
        n *= -1
        neg = true
    }
    let answer = helper(x, n)
    if(neg) return 1/answer
    return answer
    
        function helper(x, n) {
        if(n === 0) return 1
        if(n === 1) return x
        if(x === 1) return 1
        let R = helper(x, Math.floor(n/2))
        if(n % 2 === 0) {
            return R * R
        }
        else {
            return R * x * R
        }
    }

};