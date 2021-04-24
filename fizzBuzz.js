// LC 412, Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

/**
 * param {number} n
 * return {string[]}
 */
var fizzBuzz = function (n) {
    // return array
    let retArr = []
    for (let i = 1; i <= n; i++) {
        // divisible by 3 and 5
        if (i % 15 === 0) {
            retArr.push("FizzBuzz")
        }
        // divisible by 3
        else if (i % 3 === 0) {
            retArr.push("Fizz")
        }
        // divisible by 5
        else if (i % 5 === 0) {
            retArr.push("Buzz")
        }
        else retArr.push(i.toString())
    }
    return retArr
};