// lc recursive exploration

//https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1661/


// using memoization

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).



/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let answer = helper(n)
    return answer
    
 function helper(n, memo={}) {
      if (n < 2) {
          return n
      }
      else if (n in memo) {
          return memo[n]
      }
      else {
          memo[n] = helper(n - 1, memo) + helper(n-2, memo)
          return memo[n]
      }
  }
    
};