// help from this video https://www.youtube.com/watch?v=hPWJNoaI7t8
// also Kadane's algo https://www.youtube.com/watch?v=jnoVtCKECmQ

// link https://leetcode.com/problems/maximum-subarray/

/* Given an integer array nums, find the contiguous subarray (containing at least one number)
   which has the largest sum and return its sum.
*/

/**
 * param {number[]} nums
 * return {number}
 */
var maxSubArray = function (nums) {
    // kadane's algo, running sum
    // if val drops below zero, then reset
    let max = nums.shift() // set max to first element 
    let runningSum = max
    nums.forEach(val => {
        //  running sum is either sum of current sum + new value, 
        // or it's the value itself
        runningSum = Math.max(runningSum + val, val)
        max = Math.max(runningSum, max)
    })
    return max
};