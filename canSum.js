// https://www.youtube.com/watch?v=oBt53YbR9Kk

// Write function canSum(targetSum, numbers)
// takes target sum and array of nums
// return bool indicating whether or not it is 
// possible to generate the target sum using nums
// from the array.
// A single element can be used multiple times.
// All inputs are nonnegative

function canSum(targetSum, nums, memo={}) {
    // base case, targetSum is 0
    if(targetSum === 0) return true
    if(targetSum < 0) return false
    if(targetSum in memo) return memo[targetSum]
    // logic: recursively subtract each num from the target
    // and use that result as new target in recurs call.
    // targets of 0 return true, negatives return false, others re-call
    // provide the nums as arg each time
    for (let num of nums) {
        let result = targetSum - num
        memo[result] = canSum(result, nums, memo)
        if(memo[result]) return true
    } // end for
    memo[targetSum] = false
    return false
}