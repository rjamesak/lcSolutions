// https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1662/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo={}) {
    // input: steps taken to reach the top
    // output: the distinct ways to reach that n under these constraints:
        // 1. can take only 1 step, or 2 steps each time
    // approach: subtract 1 and two from each number
    // base cases:
        // if difference == 0, return 1, else recall
        // if difference < 0, return 0
    let numWays = 0
    if (n in memo) {
        return memo[n]
    }
    else if(n === 0) {
        return 1
    }
    else if (n > 0) {
        memo[n] = climbStairs(n - 1, memo)
        if (n in memo) {
            memo[n] += climbStairs(n-2, memo)
        }
        else {
            memo[n] = climbStairs(n - 2, memo)
        }
    }
    else { // < 1
        return 0
    }
     return memo[n]
    
};